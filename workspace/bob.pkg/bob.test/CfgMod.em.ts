import em from '@$$emscript'
export const em$_U = em.declare('MODULE')

export const MAX: u32 = 100

export const scalar = em.param<em.u8>()

export namespace em$meta {
    export function em$construct() {
        console.log(scalar.$$ + 5)
    }
}
