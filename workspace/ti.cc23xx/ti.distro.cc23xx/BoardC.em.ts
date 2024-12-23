import em from '@$$emscript'
export const em$_U = em.declare('COMPOSITE')

import * as GpioT from '@ti.mcu.cc23xx/GpioT.em'
import * as LedT from '@em.utils/LedT.em'

import BoardController from '@em.utils/BoardController.em'
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
    AppLed.PinX.$bind(AppLedPin)
    AppLedPin.pin_num.$bind(15)
    AppOutPin.pin_num.$bind(20)
    BoardController.x_Led.$bind(SysLed)
    Common.BusyWaitX.$bind(BusyWait)
    Common.ConsoleUartX.$bind(ConsoleUart0)
    Common.GlobalInterruptsX.$bind(GlobalInterrupts)
    Common.x_Mcu.$bind(Mcu)
    ConsoleUart0.TxPinX.$bind(AppOutPin)
    SysLed.PinX.$bind(SysLedPin)
    SysLedPin.pin_num.$bind(14)
}
