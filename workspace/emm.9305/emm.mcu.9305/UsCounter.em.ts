
import '@$$emscript'
export const $U = $declare('MODULE', UsCounterI)

import * as UsCounterI from '@em.hal/UsCounterI.em'

export const MHZ = $config<u16>(48)

export namespace em$meta { }

//>> ---- em$targ ---- <<//

export function set(time_us: u32) {
    return
}

export function spin() {
    return
}

export function start() {
    return
}

export function stop(): u32 {
    return 0
}
