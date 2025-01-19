import em from '@$$emscript'
export const em$_U = em.$declare('MODULE')

import * as Common from '@em.mcu/Common.em'

type FiberFxn = cb_t<[arg_t]>

class Fiber extends $struct {
    link: ref_t<Fiber>
    fxn: FiberFxn
    arg: arg_t
}

let FiberFac = $factory(Fiber.$make())

export namespace em$meta {}

function post(self: ref_t<Fiber>): void {

}
