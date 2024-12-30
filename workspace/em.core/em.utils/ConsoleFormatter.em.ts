import em from '@$$emscript'
export const em$_U = em.declare('MODULE')

import * as Common from '@em.mcu/Common.em'

export function puts(s: em.text_t) {
    for (let i = 0; i < s.$len; i++) {
        Common.ConsoleUart.$$.put(s[i])
    }
}
