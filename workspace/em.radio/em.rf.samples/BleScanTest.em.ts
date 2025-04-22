import em from '@$$emscript'
export const $U = em.$declare('MODULE')

import * as BoardC from '@$distro/BoardC.em'
import * as Common from '@em.mcu/Common.em'
import * as Config from '@em.rf.driver/Config.em'

export const RadioDriver = $delegate(BoardC.RadioDriver)

var pktbuf = $table<u8>('rw', 25)

export namespace em$meta {
    export function em$configure() {
        Config.phy.$$ = Config.Phy.BLE_1M
    }
}

//>> ---- em$targ ---- <<//

export function em$run() {
    Common.GlobalInterrupts.$$.enable()
    RadioDriver.$$.enable()
    RadioDriver.$$.startRx(pktbuf.$frame(0), 17)
    RadioDriver.$$.waitReady()
    for (const b of pktbuf.$frame(0)) printf`%02x `(b)
    printf`\n`()
    RadioDriver.$$.disable()
}