import em from '@$$emscript'
export const em$_U = em.declare('MODULE')

import * as Common from '@em.mcu/Common.em'

export function puts(s: em.text_t) {
    for (let c of s) Common.ConsoleUart.$$.put(c)
}
