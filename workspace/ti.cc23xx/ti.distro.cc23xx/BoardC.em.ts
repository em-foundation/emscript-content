import em from '@$$emscript'
export const em$_U = em.declare('COMPOSITE')

import * as GpioT from '@ti.mcu.cc23xx/GpioT.em'
import * as LedT from '@em.utils/LedT.em'

import BusyWait from '@ti.mcu.cc23xx/BusyWait.em'
import Common from '@em.mcu/Common.em'
import ConsoleUart0 from '@ti.mcu.cc23xx/ConsoleUart0.em'
import GlobalInterrupts from '@em.arch.arm/GlobalInterrupts.em'
import Mcu from '@ti.mcu.cc23xx/Mcu.em'

export const AppLed = LedT.em$clone()
export const AppLedPin = GpioT.em$clone()
export const AppOutPin = GpioT.em$clone()
export const SysLed = LedT.em$clone()
export const SysLedPin = GpioT.em$clone()

export function em$configure(): void {
    AppLed.PinX.$$ = AppLedPin
    AppLedPin.pin_num.$$ = 15
    AppOutPin.pin_num.$$ = 20
    Common.BusyWaitX.$$ = BusyWait
    Common.ConsoleUartX.$$ = ConsoleUart0
    Common.GlobalInterruptsX.$$ = GlobalInterrupts
    Common.x_Mcu.$$ = Mcu
    ConsoleUart0.TxPinX.$$ = AppOutPin
    SysLed.PinX.$$ = SysLedPin
    SysLedPin.pin_num.$$ = 14
}
