import em from '@$$emscript'
export const em$_U = em.declare('MODULE')

import * as Common from '@em.mcu/Common.em'

export function em$run() {
    for (let c of em.t$`hello world\n`) Common.ConsoleUart.$$.put(c)
}
