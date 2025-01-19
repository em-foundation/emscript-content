import em from '@$$emscript'
export const em$_U = em.$declare('MODULE')

import * as Common from '@em.mcu/Common.em'

export let my_tab = $table<u32>('rw')

export namespace em$meta {
    export function em$construct() {
        my_tab.$add(12345)
        my_tab.$add(67890)
        // for (let i = 0; i < tab.$len; i++) tab[i] += 50 + i
        // for (let i = 0; i < my_tab.$len; i++) console.log(my_tab[i])
    }
}

export function em$run() {
    for (let i = 0; i < my_tab.$len; i++) printf`%d\n`(my_tab[i])
    // for (let i = 0; i < my_tab.$len; i++) Common.ConsoleUart.$$.put(my_tab[i])
    //for (let i = 0; i < tab.$len; i++) tab[i] += 50
    //for (let i = 0; i < tab.$len; i++) Common.ConsoleUart.$$.put(tab[i])
}
