import em from '@$$emscript'
export const em$_U = em.declare('MODULE')

namespace em$targ {
    const scalar = 3
    export function wait(usecs: em.u32): void {
        if (usecs == 0) return
        var cnt = usecs * scalar
        var dummy: em.volatile_t<em.u32>
        while (cnt--) dummy = 0
    }
}

export default { em$_U, ...em$targ }
