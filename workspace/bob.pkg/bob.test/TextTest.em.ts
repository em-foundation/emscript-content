import em from '@$$emscript'
export const em$_U = em.declare('MODULE')

import * as Common from '@em.mcu/Common.em'

// export namespace em$meta {
//     const s = em.text_t("hello world\n")
//     console.log(s.$$, s.$len, s.$get(0))
// }

export function em$run() {
    let s = em.text_t("hello world\n")
    // Common.ConsoleUart.$$.put(s.$len)
    for (let i = 0; i < s.$len; i++) {
        Common.ConsoleUart.$$.put(s[i])
    }
}
