import em from '@$$emscript'
export const em$_U = em.$declare('MODULE')

import * as Common from '@em.mcu/Common.em'

export function pause(time_ms: u32): void {
    Common.BusyWait.$$.wait(time_ms * 1000)
}
