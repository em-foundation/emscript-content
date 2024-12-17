import em from '@$$emscript'
export const em$_U = em.declare('MODULE')

import * as BusyWaitI from '@em.hal/BusyWaitI.em'

const em$_C = {
    scalar: new em.param<em.u8>(6)
}

namespace em$meta {
    export const c_scalar = em$_C.scalar
}

namespace em$targ {
}

export default {
    em$_U,
    em$_C,
    ...em$meta,
    ...em.isa<BusyWaitI.em$_I>()
    // ...em$targ,
}
