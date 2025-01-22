import em from '@$$emscript'
export const em$_U = em.$declare('COMPOSITE')

import * as BoardController from '@em.utils/BoardController.em'
import * as BusyWait from '@ti.mcu.cc23xx/BusyWait.em'
import * as Console from '@em.lang/Console.em'
import * as Common from '@em.mcu/Common.em'
import * as ConsoleUart0 from '@ti.mcu.cc23xx/ConsoleUart0.em'
import * as Debug from '@em.lang/Debug.em'
import * as EdgeT from '@ti.mcu.cc23xx/EdgeT.em'
import * as GlobalInterrupts from '@em.arch.arm/GlobalInterrupts.em'
import * as GpioT from '@ti.mcu.cc23xx/GpioT.em'
import * as Idle from '@ti.mcu.cc23xx/Idle.em'
import * as LedT from '@em.utils/LedT.em'
import * as Mcu from '@ti.mcu.cc23xx/Mcu.em'
import * as OneShot from '@ti.mcu.cc23xx/OneShotGpt3.em'

export { OneShot }

export const AppButEdge = EdgeT.em$clone()
export const AppButPin = GpioT.em$clone()
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
    AppButEdge.Pin.$$ = AppButPin
    AppButEdge.pin_num.$$ = AppButPin.pin_num.$$ = 9
    AppLed.Pin.$$ = AppLedPin
    AppLedPin.pin_num.$$ = 15
    AppOutPin.pin_num.$$ = 20
    BoardController.Led.$$ = SysLed
    BoardController.em$_U.used()
    Console.em$_U.used()
    Common.BusyWait.$$ = BusyWait
    Common.ConsoleUart.$$ = ConsoleUart0
    Common.GlobalInterrupts.$$ = GlobalInterrupts
    Common.Idle.$$ = Idle
    Common.Mcu.$$ = Mcu
    DbgA.pin_num.$$ = 23
    DbgB.pin_num.$$ = 25
    DbgC.pin_num.$$ = 1
    DbgD.pin_num.$$ = 2
    Debug.DbgA.$$ = DbgA
    Debug.DbgB.$$ = DbgB
    Debug.DbgC.$$ = DbgC
    Debug.DbgD.$$ = DbgD
    ConsoleUart0.TxPin.$$ = AppOutPin
    SysLed.Pin.$$ = SysLedPin
    SysLedPin.pin_num.$$ = 14
}
