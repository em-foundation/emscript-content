import em from '@$$emscript'
export const em$_U = em.declare('COMPOSITE')

// import BoardController from '@em.utils/BoardController.em'
import * as BusyWait from '@ti.mcu.cc23xx/BusyWait.em'
import * as Common from '@em.mcu/Common.em'
import * as ConsoleUart0 from '@ti.mcu.cc23xx/ConsoleUart0.em'
// import GlobalInterrupts from '@em.arch.arm/GlobalInterrupts.em'
import * as GpioT from '@ti.mcu.cc23xx/GpioT.em'
import * as LedT from '@em.utils/LedT.em'
// import Mcu from '@ti.mcu.cc23xx/Mcu.em'
// 
export const AppLed = LedT.em$clone()
export const AppLedPin = GpioT.em$clone()
export const AppOutPin = GpioT.em$clone()
export const SysLed = LedT.em$clone()
export const SysLedPin = GpioT.em$clone()

export function em$configure(): void {
    AppLed.Pin.$bind(AppLedPin)
    AppLedPin.pin_num.$bind(15)
    AppOutPin.pin_num.$bind(20)
    // BoardController.x_Led.$bind(SysLed)
    Common.BusyWait.$bind(BusyWait)
    Common.ConsoleUart.$bind(ConsoleUart0)
    // Common.GlobalInterruptsX.$bind(GlobalInterrupts)
    // Common.x_Mcu.$bind(Mcu)
    ConsoleUart0.TxPin.$bind(AppOutPin)
    SysLed.Pin.$bind(SysLedPin)
    SysLedPin.pin_num.$bind(14)
}
