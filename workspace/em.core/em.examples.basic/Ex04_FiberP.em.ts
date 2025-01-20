import em from '@$$emscript'
export const em$_U = em.$declare('MODULE')

import * as BoardC from '@ti.distro.cc23xx/BoardC.em'
import * as Common from '@em.mcu/Common.em'
import * as FiberMgr from '@em.utils/FiberMgr.em'

let blinkF = $param<FiberMgr.Obj>()
let count = <u8>5

export const AppLed = $delegate(BoardC.AppLed)

export namespace em$meta {
    export function em$construct() {
        blinkF.$$ = FiberMgr.em$meta.create($cb(blinkFB))
    }
}

export function em$run() {
    blinkF.$$.$$.post()
    FiberMgr.run()
}

function blinkFB(a: arg_t) {
    em.$['%%d']
    if (--count == 0) em.halt()
    AppLed.$$.on()
    Common.BusyWait.$$.wait(250_000)
    AppLed.$$.off()
    Common.BusyWait.$$.wait(250_000)
    blinkF.$$.$$.post()

}
