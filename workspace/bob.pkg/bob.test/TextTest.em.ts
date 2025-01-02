import em from '@$$emscript'
export const em$_U = em.declare('MODULE')

import * as Common from '@em.mcu/Common.em'

const s = em.$S`hello world\n`

export function em$run() {
    // Common.ConsoleUart.$$.put(s.$len)
    for (let i = 0; i < s.$len; i++) {
        Common.ConsoleUart.$$.put(s[i])
    }
}
