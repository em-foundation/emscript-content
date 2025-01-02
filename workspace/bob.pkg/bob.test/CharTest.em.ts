import em from '@$$emscript'
export const em$_U = em.declare('MODULE')

const c = em.$C`a`

export namespace em$meta {
    console.log(c)
}

export function em$run() {
    em.$reg32[0xAA] = c
}
