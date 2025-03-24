import em from '@$$emscript'
export const $U = em.$declare('COMPOSITE')

import * as BoardController from '@em.utils/BoardController.em'
import * as BusyWait from '@nrf.mcu.54lxx/BusyWait.em'
import * as Console from '@em.lang/Console.em'
import * as Common from '@em.mcu/Common.em'
import * as ConsoleUart from '@nrf.mcu.54lxx/ConsoleUart3.em'
import * as Debug from '@em.lang/Debug.em'
import * as GlobalInterrupts from '@em.arch.arm/GlobalInterrupts.em'
import * as GpioT from '@nrf.mcu.54lxx/GpioT.em'
import * as Idle from '@nrf.mcu.54lxx/Idle.em'
import * as LedT from '@em.utils/LedT.em'
import * as Mcu from '@nrf.mcu.54lxx/Mcu.em'
import * as Poller from '@em.mcu/Poller.em'
import * as OneShot from '@nrf.mcu.54lxx/OneShotN.em'
import * as Uptimer from '@nrf.mcu.54lxx/UptimerN.em'
import * as UsCounter from '@em.arch.arm/UsCounterSystick.em'

export const AppLed = $clone(LedT)
export const AppLedPin = $clone(GpioT)
export const AppOutPin = $clone(GpioT)
export const DbgA = $clone(GpioT)
export const DbgB = $clone(GpioT)
export const DbgC = $clone(GpioT)
export const DbgD = $clone(GpioT)
export const SysLed = $clone(LedT)
export const SysLedPin = $clone(GpioT)

export const DEFAULTS = {
    /** setting applies to {app,com,sys}Led pins */ activeLowLeds: false,
    pins: {
        appBut: <i16>-1,
        appLed: <i16>-1,
        appOut: <i16>-1,
        sysDbgA: <i16>-1,
        sysDbgB: <i16>-1,
        sysDbgC: <i16>-1,
        sysDbgD: <i16>-1,
        sysLed: <i16>-1,
    }
}

export function em$configure(): void {
    if (em.isBareMetal()) return
    const brd = $board(DEFAULTS)
    $using(BoardController)
    $using(Console)
    AppLed.Pin.$$ = AppLedPin
    AppLed.active_low.$$ = brd.activeLowLeds
    AppLedPin.pin_num.$$ = brd.pins.appLed
    AppOutPin.pin_num.$$ = brd.pins.appOut
    BoardController.Led.$$ = SysLed
    // BoardController.ready_delay_usecs.$$ = 1_000_000
    BusyWait.scalar.$$ = 6
    Common.BusyWait.$$ = BusyWait
    Common.ConsoleUart.$$ = ConsoleUart
    Common.GlobalInterrupts.$$ = GlobalInterrupts
    Common.Idle.$$ = Idle
    Common.Mcu.$$ = Mcu
    Common.Uptimer.$$ = Uptimer
    Common.UsCounter.$$ = UsCounter
    ConsoleUart.TxPin.$$ = AppOutPin
    DbgA.pin_num.$$ = brd.pins.sysDbgA
    DbgB.pin_num.$$ = brd.pins.sysDbgB
    DbgC.pin_num.$$ = brd.pins.sysDbgC
    DbgD.pin_num.$$ = brd.pins.sysDbgD
    Debug.DbgA.$$ = DbgA
    Debug.DbgB.$$ = DbgB
    Debug.DbgC.$$ = DbgC
    Debug.DbgD.$$ = DbgD
    Poller.OneShot.$$ = OneShot
    SysLed.Pin.$$ = SysLedPin
    SysLed.active_low.$$ = brd.activeLowLeds
    SysLedPin.pin_num.$$ = brd.pins.sysLed
    UsCounter.MHZ.$$ = 64
}
