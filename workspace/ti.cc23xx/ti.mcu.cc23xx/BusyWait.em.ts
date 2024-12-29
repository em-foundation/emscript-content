import em from '@$$emscript'
export const em$_U = em.declare('MODULE')

export const scalar = em.param<em.u8>(3)

export function wait(usecs: em.u32): void {
    if (usecs == 0) return
    var cnt = usecs * scalar.$$
    var dummy: em.volatile_t<em.u32>
    while (cnt--) dummy = 0
}
