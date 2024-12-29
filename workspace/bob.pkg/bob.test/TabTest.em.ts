import em from '@$$emscript'
export const em$_U = em.declare('MODULE')

import * as Common from '@em.mcu/Common.em'

export let tab = em.table<em.u8>()

export namespace em$meta {
    export function em$construct() {
        tab.$add(10)
        tab.$add(20)
        // for (let i = 0; i < tab.$len; i++) tab[i] += 50 + i
        // for (let i = 0; i < tab.$len; i++) console.log(tab[i])
    }
}

export function em$run() {
    for (let i = 0; i < tab.$len; i++) Common.ConsoleUart.$$.put(tab[i])
    for (let i = 0; i < tab.$len; i++) tab[i] += 50
    for (let i = 0; i < tab.$len; i++) Common.ConsoleUart.$$.put(tab[i])
}
