import '@$$emscript'
export const $U = $declare('MODULE')

import * as BoardC from '@$distro/BoardC.em'
import * as Common from '@em.mcu/Common.em'

const AppLed = $delegate(BoardC.AppLed)
const SysLed = $delegate(BoardC.SysLed)

export namespace em$meta { }

//>> ---- em$targ ---- <<//

export function em$run() {
    AppLed.on()
    Common.BusyWait.wait(500_000)
    AppLed.off()
    Common.ConsoleUart.put(0x4)
    SysLed.on()
}