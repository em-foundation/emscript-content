import em from '@$$emscript'
export const em$_U = em.declare('MODULE')

import * as Common from '@em.mcu/Common.em'

export function em$run() {
    let s = em.t$`123`
    let sz = 0
    'sz = sizeof(s)'
    printf`sz = %d\n`(sz)
    // em.$['%%>'](s[2])
    // em.$['%%>'](s[3])
    // for (let c of s) Common.ConsoleUart.$$.put(c)
}
