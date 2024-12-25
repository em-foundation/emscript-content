import em from '@$$emscript'
export const em$_U = em.declare('COMPOSITE')

import * as BoardController from '@em.utils/BoardController.em'
import * as BusyWait from '@ti.mcu.cc23xx/BusyWait.em'
import * as Common from '@em.mcu/Common.em'
import * as ConsoleUart0 from '@ti.mcu.cc23xx/ConsoleUart0.em'
import * as Debug from '@em.lang/Debug.em'
import * as GlobalInterrupts from '@em.arch.arm/GlobalInterrupts.em'
import * as GpioT from '@ti.mcu.cc23xx/GpioT.em'
import * as LedT from '@em.utils/LedT.em'
import * as Mcu from '@ti.mcu.cc23xx/Mcu.em'
// 
export const AppLed = LedT.em$clone()
export const AppLedPin = GpioT.em$clone()
export const AppOutPin = GpioT.em$clone()
export const DbgA = GpioT.em$clone()
export const DbgB = GpioT.em$clone()
export const DbgC = GpioT.em$clone()
export const DbgD = GpioT.em$clone()
export const SysLed = LedT.em$clone()
export const SysLedPin = GpioT.em$clone()

export function em$configure(): void {
    AppLed.Pin.$bind(AppLedPin)
    AppLedPin.pin_num.$bind(15)
    AppOutPin.pin_num.$bind(20)
    BoardController.Led.$bind(SysLed)
    BoardController.em$_U.used()
    Common.BusyWait.$bind(BusyWait)
    Common.ConsoleUart.$bind(ConsoleUart0)
    Common.GlobalInterrupts.$bind(GlobalInterrupts)
    Common.Mcu.$bind(Mcu)
    DbgA.pin_num.$bind(23)
    DbgB.pin_num.$bind(25)
    DbgC.pin_num.$bind(1)
    DbgD.pin_num.$bind(2)
    Debug.DbgA.$bind(DbgA)
    Debug.DbgB.$bind(DbgB)
    Debug.DbgC.$bind(DbgC)
    Debug.DbgD.$bind(DbgD)
    ConsoleUart0.TxPin.$bind(AppOutPin)
    SysLed.Pin.$bind(SysLedPin)
    SysLedPin.pin_num.$bind(14)
}
