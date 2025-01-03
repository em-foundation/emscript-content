import em from '@$$emscript'
export const em$_U = em.declare('MODULE')

import * as Common from '@em.mcu/Common.em'

export function em$run() {
    const s = em.$T`hello world\n`
    for (let c of s) Common.ConsoleUart.$$.put(c)
}
