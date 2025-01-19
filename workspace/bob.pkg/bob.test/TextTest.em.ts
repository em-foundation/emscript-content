import em from '@$$emscript'
export const em$_U = em.$declare('MODULE')

import * as Common from '@em.mcu/Common.em'

export namespace em$meta {
    let s = em.t$`123`
    let p = s.$ptr()
    console.log(p)
}

export function em$run() {
    // let s = em.t$`123\n`
    //for (let p = s.$ptr(); p.$$; p.$inc()) em.$['%%>'](p.$$)
    // let sz = 0
    // 'sz = sizeof(p)'
    // printf`sz = %d\n`(sz)
    // em.$['%%>'](s[2])
    // em.$['%%>'](s[3])
    // for (let c of s) Common.ConsoleUart.$$.put(c)
    printf`hello %s\n`(t$`esther`)
}
