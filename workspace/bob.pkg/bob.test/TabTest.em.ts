import em from '@$$emscript'
export const em$_U = em.declare('MODULE')

const tab__ = em.table<em.u8>()

export namespace em$meta {
    export function em$construct() {
        tab__.$add(10)
        tab__.$add(20)
        for (let i = 0; i < tab__.$len; i++) tab__[i] += 50 + i
        for (let i = 0; i < tab__.$len; i++) console.log(tab__[i])
    }
}

export function em$run() {
}
