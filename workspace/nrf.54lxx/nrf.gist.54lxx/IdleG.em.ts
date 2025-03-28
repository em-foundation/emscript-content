import em from '@$$emscript'
export const $U = em.$declare('MODULE')

import * as BoardC from '@$distro/BoardC.em'
import * as Common from '@em.mcu/Common.em'
import * as Idle from '@nrf.mcu.54lxx/Idle.em'

export const AppLed = $delegate(BoardC.AppLed)


//>> ---- em$targ ---- <<//

export function em$run() {
    AppLed.$$.on()
    Common.BusyWait.$$.wait(500_000)
    AppLed.$$.off()
    Common.BusyWait.$$.wait(500_000)
    Idle.exec()
}