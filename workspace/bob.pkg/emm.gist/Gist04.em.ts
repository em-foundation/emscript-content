import '@$$emscript'
export const $U = $declare('MODULE')

import * as BoardC from '@$distro/BoardC.em'
import * as Common from '@em.mcu/Common.em'

const AppLedPin = $delegate(BoardC.AppLedPin)
const SysLedPin = $delegate(BoardC.SysLedPin)

export namespace em$meta { }

//>> ---- em$targ ---- <<//

export function em$run() {
    AppLedPin.makeOutput()
    AppLedPin.clear()
    SysLedPin.makeOutput()
    SysLedPin.clear()
    //
    AppLedPin.set()
    Common.BusyWait.wait(500_000)
    AppLedPin.clear()
    Common.ConsoleUart.put(0x4)
    SysLedPin.set()
}