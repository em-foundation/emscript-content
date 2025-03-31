import em from '@$$emscript'
export const $U = em.$declare('MODULE')

import * as $R from '@nrf.distro.54lxx/REGS.em'

import * as BoardC from '@$distro/BoardC.em'
import * as Common from '@em.mcu/Common.em'

export const AppButEdge = $delegate(BoardC.AppButEdge)
export const AppButPin = $delegate(BoardC.AppButPin)
export const AppLed = $delegate(BoardC.AppLed)

//>> ---- em$targ ---- <<//

export function em$run() {
    AppButEdge.$$.init(true)
    AppButEdge.$$.setDetectFalling()
    AppButEdge.$$.enableDetect()
    Common.GlobalInterrupts.$$.enable()
    Common.Idle.$$.exec()
}
