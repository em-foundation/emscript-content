import em from '@$$emscript'
export const em$_U = em.declare('MODULE')

import * as GpioI from '@em.hal/GpioI.em'

const em$_C = {
    pin: em.param<em.u8>()
}

namespace em$meta {
    export const c_pin = em$_C.pin
}

export default { em$_U, em$_C, ...em$meta, ...em.isa<GpioI.em$_I>() }
