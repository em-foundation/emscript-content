import '@$$emscript'
export const $U = $declare('MODULE', UsCounterI)

import * as UsCounterI from '@em.hal/UsCounterI.em'

export const MHZ = $config<u16>(48)

export namespace em$meta { }

//>> ---- em$targ ---- <<//

export function set(time_us: u32) {
}

export function spin() {
}

export function start() {
    e$`_sr(0, REG_COUNT0)`
}

export function stop(): u32 {
    const cnt: u32 = e$`_lr(REG_COUNT0)`
    return cnt / MHZ
}
