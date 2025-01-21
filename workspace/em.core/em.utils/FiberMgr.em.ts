import em from '@$$emscript'
export const em$_U = em.$declare('MODULE')

import * as Common from '@em.mcu/Common.em'

export type Body = cb_t<[arg_t]>
export type Obj = ref_t<Fiber>

class Fiber extends $struct {
    link: ref_t<Fiber>
    body: Body
    arg: arg_t
    post: () => void
}

class List extends $struct {
    head: ref_t<Fiber>
    tail: ref_t<Fiber>
    empty: () => bool_t
    give: (elem: ref_t<Fiber>) => void
    take: () => ref_t<Fiber>
}

let FiberFac = $factory(Fiber.$make())

let ready_list = List.$make()

export namespace em$meta {
    export function create(body: Body, arg: arg_t = 0): Obj {
        let fiber = FiberFac.$create()
        fiber.$$.body = body
        fiber.$$.arg = arg
        return fiber
    }
}

function dispatch() {
    while (!ready_list.empty()) {
        let fiber = ready_list.take()
        Common.GlobalInterrupts.$$.enable()
        fiber.$$.body(fiber.$$.arg)
        Common.GlobalInterrupts.$$.disable()
    }
}

export function run() {
    Common.Idle.$$.wakeup()
    Common.GlobalInterrupts.$$.enable()
    for (; ;) {
        Common.GlobalInterrupts.$$.disable()
        dispatch()
        Common.Idle.$$.exec()
    }
}

function Fiber__post(self: ref_t<Fiber>): void {
    let key = Common.GlobalInterrupts.$$.disable()
    if (self.$$.link == $nullref) ready_list.give(self)
    Common.GlobalInterrupts.$$.restore(key)
}

function List__empty(self: ref_t<List>): bool_t {
    return self.$$.head == $nullref
}

function List__give(self: ref_t<List>, elem: ref_t<Fiber>): void {
    if (self.$$.empty()) {
        self.$$.head = elem
    }
    else {
        self.$$.tail.$$.link = elem
    }
    self.$$.tail = elem
    elem.$$.link = $nullref
}

function List__take(self: ref_t<List>): ref_t<Fiber> {
    let e = self.$$.head
    self.$$.head = e.$$.link
    e.$$.link = $nullref
    if (self.$$.head == $nullref) self.$$.tail = $nullref
    return e
}

export function em$run() {
    printf`empty = %d\n`(ready_list.empty())
}

/*
package em.utils

from em.mcu import Common
from em.utils import ListMgr

module FiberMgr
            #   ^| manages opaque fiber objects
    type FiberBodyFxn: function(arg: uarg_t)
            #   ^| function signature of fiber body
    type Fiber: opaque
            #   ^| opaque fiber object - public specification
        host function initH(fxn: FiberBodyFxn, arg: uarg_t = 0)
            #   ^| initialize this fiber and bind its function and argument
        function getArg(): uarg_t
            #   ^| get this fiber's body function argument
        function getFxn(): FiberBodyFxn
            #   ^| get this fiber's body function
        function post()
            #   ^| make this fiber ready-to-run
        function setArg(a: uarg_t)
            #   ^| set this fiber's body function argument
        function setFxn(f: FiberBodyFxn)
            #   ^| set this fiber's body function
    end

    host function createH(fxn: FiberBodyFxn, arg: uarg_t = 0): Fiber&
            #   ^| allocate and initialize a fiber; see Fiber.initH
    function run()
            #   ^| initiate dispatch of ready-to-run fibers
private:

    def opaque Fiber
        elem: ListMgr.Element
        fxn_: FiberBodyFxn
        arg_: uarg_t
    end

    function dispatch()

    var fiberTab: Fiber[]
    var readyList: ListMgr.List

end

def em$construct() 
    readyList.initH()
end

def createH(fxn, arg)
    var fiber: Fiber& = fiberTab[fiberTab.length++]
    fiber.initH(fxn, arg)
    return fiber
end

def dispatch()
    for ;;
        break if readyList.hasElements() == 0
        auto fiber = <Fiber&>readyList.get()
        Common.GlobalInterrupts.enable()
        auto fxn = fiber.fxn_
        fxn(fiber.arg_)
        Common.GlobalInterrupts.disable()
    end   
end

def run()
    Common.Idle.wakeup()
    Common.GlobalInterrupts.enable()
    for ;;
        Common.GlobalInterrupts.disable()
        dispatch()
        Common.Idle.exec()
    end
end

def Fiber.initH(fxn, arg)
    this.elem.initH()
    this.fxn_ = fxn
    this.arg_ = arg
end

def Fiber.post()
    auto key = Common.GlobalInterrupts.disable()
    readyList.add(this.elem) if !this.elem.isActive()
    Common.GlobalInterrupts.restore(key)
end

def Fiber.getArg()
    return this.arg_
end

def Fiber.setArg(a)
    this.arg_ = a
end

def Fiber.setFxn(f)
    this.fxn_ = f
end

def Fiber.getFxn()
    return this.fxn_
end

*/
