import em from '@$$emscript'
export const em$_U = em.$declare('MODULE')

export const scalar = $param<u8>(3)

export function wait(usecs: u32): void {
    if (usecs == 0) return
    var cnt = usecs * scalar.$$
    var dummy: volatile_t<u32>
    while (cnt--) dummy = 0
}
