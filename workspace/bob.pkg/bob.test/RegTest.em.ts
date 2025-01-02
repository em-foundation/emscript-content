import em from '@$$emscript'
export const em$_U = em.declare('MODULE')

export function em$run() {
    em.$reg32[0x1000_0000] = 123
    em.halt()
}
