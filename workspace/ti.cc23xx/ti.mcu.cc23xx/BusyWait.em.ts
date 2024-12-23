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
    const scalar = em$_C.scalar.$$!
    export function wait(usecs: em.u32): void {
        if (usecs == 0) return
        var cnt = usecs * scalar
        var dummy: em.volatile_t<em.u32>
        while (cnt--) dummy = 0
    }
}

export default { em$_U, em$_C, ...em$meta, ...em$targ }
