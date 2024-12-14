import em from '@$$em-script'
export const em$_U = em.declare<GpioI.em$_I>('MODULE')

import * as GpioI from '@em.hal/GpioI.em'

const em$_C = {
    pin: new em.param<em.u8>()
}

namespace em$meta {
    export const c_pin = em$_C.pin
}

export default { em$_U, em$_C, ...em$_U.proto, ...em$meta }
