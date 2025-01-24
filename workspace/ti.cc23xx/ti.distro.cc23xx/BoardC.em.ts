import em from '@$$emscript'
export const $U = em.$declare('COMPOSITE')

import * as AlarmMgr from '@em.utils/AlarmMgr.em'
import * as BoardController from '@em.utils/BoardController.em'
import * as BusyWait from '@ti.mcu.cc23xx/BusyWait.em'
import * as ButtonT from '@em.utils/ButtonT.em'
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
import * as Poller from '@em.mcu/Poller.em'
import * as OneShot from '@ti.mcu.cc23xx/OneShotGpt3.em'
import * as UsCounter from '@em.arch.arm/UsCounterSystick.em'
import * as WakeupTimer from '@ti.mcu.cc23xx/WakeupTimerRtc.em'

export { OneShot }

export const AppBut = ButtonT.$clone()
export const AppButEdge = EdgeT.$clone()
export const AppButPin = GpioT.$clone()
export const AppLed = LedT.$clone()
export const AppLedPin = GpioT.$clone()
export const AppOutPin = GpioT.$clone()
export const DbgA = GpioT.$clone()
export const DbgB = GpioT.$clone()
export const DbgC = GpioT.$clone()
export const DbgD = GpioT.$clone()
export const SysLed = LedT.$clone()
export const SysLedPin = GpioT.$clone()

export function em$configure(): void {
    AlarmMgr.WakeupTimer.$$ = WakeupTimer
    AppBut.Edge.$$ = AppButEdge
    AppButEdge.Pin.$$ = AppButPin
    AppButEdge.pin_num.$$ = AppButPin.pin_num.$$ = 9
    AppLed.Pin.$$ = AppLedPin
    AppLedPin.pin_num.$$ = 15
    AppOutPin.pin_num.$$ = 20
    BoardController.Led.$$ = SysLed
    BoardController.$U.used()
    Console.$U.used()
    Common.BusyWait.$$ = BusyWait
    Common.ConsoleUart.$$ = ConsoleUart0
    Common.GlobalInterrupts.$$ = GlobalInterrupts
    Common.Idle.$$ = Idle
    Common.Mcu.$$ = Mcu
    Common.UsCounter.$$ = UsCounter
    ConsoleUart0.TxPin.$$ = AppOutPin
    DbgA.pin_num.$$ = 23
    DbgB.pin_num.$$ = 25
    DbgC.pin_num.$$ = 1
    DbgD.pin_num.$$ = 2
    Debug.DbgA.$$ = DbgA
    Debug.DbgB.$$ = DbgB
    Debug.DbgC.$$ = DbgC
    Debug.DbgD.$$ = DbgD
    Poller.OneShot.$$ = OneShot
    SysLed.Pin.$$ = SysLedPin
    SysLedPin.pin_num.$$ = 14
}
