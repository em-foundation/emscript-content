import em from '@$$emscript'
export const $U = em.$declare('MODULE')

import * as BoardC from '@$distro/BoardC.em'
import * as Common from '@em.mcu/Common.em'
import * as FiberMgr from '@em.utils/FiberMgr.em'
import * as TickerMgr from '@em.utils/TickerMgr.em'
import * as TimeTypes from '@em.utils/TimeTypes.em'

// app settings
const sysLedPeriodMs = 1500
const appLedPeriodMs = 2000
const printPeriodMs = 5000
const min_press_time = 10 // 10ms
const max_press_time = 2000 // 2s
const maxDividedBy = 8

const AppLed = $delegate(BoardC.AppLed)
const AppBut = $delegate(BoardC.AppBut)
const SysLed = $delegate(BoardC.SysLed)
const app_ticker = $config<TickerMgr.Obj>()
const sys_ticker = $config<TickerMgr.Obj>()
const print_ticker = $config<TickerMgr.Obj>()

const max_sys_led_ticks = TimeTypes.Secs24p8_initMsecs(sysLedPeriodMs)
const max_app_led_ticks = TimeTypes.Secs24p8_initMsecs(appLedPeriodMs)
const print_ticks = TimeTypes.Secs24p8_initMsecs(printPeriodMs)
const ticksPerSec = TimeTypes.Secs24p8_initMsecs(TimeTypes.millisecondsPerSecond)

// initial state vector
let divided_by: u32 = 1
let sys_count: u32 = 0
let app_count: u32 = 0
let last_app_count: u32 = 0
let last_sys_count: u32 = 0
let print_count: u32 = 0

export namespace em$meta {
    export function em$construct() {
        app_ticker.$$ = TickerMgr.em$meta.create()
        sys_ticker.$$ = TickerMgr.em$meta.create()
        print_ticker.$$ = TickerMgr.em$meta.create()
    }
}

export function em$run() {
    printf`\nEx01_TickerP program startup\n\n`()
    printStatus()
    app_ticker.$$.$$.start(max_app_led_ticks, $cb(appTickCb))
    sys_ticker.$$.$$.start(max_sys_led_ticks, $cb(sysTickCb))
    print_ticker.$$.$$.start(print_ticks, $cb(printTickCb))
    AppBut.$$.onPressed($cb(onButtonPressed), min_press_time, max_press_time)
    FiberMgr.run()
}

function appTickCb() {
    app_count += 1
    em.$['%%c']
    AppLed.$$.wink(10)
}

function onButtonPressed() {
    if (AppBut.$$.isPressed()) {
        // a long press (press time > max_press_time)
        printf`Long button press: Stopping app/sys tickers\n`()
        divided_by = 0;
        app_ticker.$$.$$.stop()
        sys_ticker.$$.$$.stop()
        last_app_count = 0;
        last_sys_count = 0;
    } else {
        // a short press (min_press_time < press time < max_press_time)
        divided_by = (divided_by >= maxDividedBy || divided_by < 1) ? 1 : divided_by * 2
        printf`Short button press: Setting rate to %dx\n`(divided_by)
        printStatus();
        app_ticker.$$.$$.start(max_app_led_ticks / divided_by, $cb(appTickCb))
        sys_ticker.$$.$$.start(max_sys_led_ticks / divided_by, $cb(sysTickCb))
    }
}

function printStatus() {
    printf`Button effects:\n... short press (>%d ms): cycle through rates (1,2,4,8x)\n... long press (>%d s): stop led tickers\n`(
        min_press_time,
        max_press_time/TimeTypes.millisecondsPerSecond
    )
    printf`Current rate %dx\n`(divided_by)
    printf`... should print every ~%ds\n`(print_ticks / ticksPerSec)
    printf`... app ticks should be %d..%d\n`(
        divided_by * print_ticks / max_app_led_ticks,
        (divided_by * print_ticks / max_app_led_ticks) + 1
    )
    printf`... sys ticks should be %d..%d\n`(
        divided_by * print_ticks / max_sys_led_ticks,
        (divided_by * print_ticks / max_sys_led_ticks) + 1
    )
}

function printTickCb() {
    print_count += 1
    const delta_app_count = app_count - last_app_count
    const delta_sys_count = sys_count - last_sys_count
    const min_delta_app_count = divided_by * print_ticks / max_app_led_ticks
    const min_delta_sys_count = divided_by * print_ticks / max_sys_led_ticks
    const delta_app_err = (delta_app_count < min_delta_app_count || delta_app_count > min_delta_app_count + 1) 
        ? t$`*`
        : t$``
    const delta_sys_err = (delta_sys_count < min_delta_sys_count || delta_sys_count > min_delta_sys_count + 1) 
        ? t$`*`
        : t$``
    printTime(Common.Uptimer.$$.read())
    printf`:  Hello World:  rate: %dx  ticks(app,sys): (%d%s,%d%s)\n`(
        divided_by,
        delta_app_count,
        delta_app_err,
        delta_sys_count,
        delta_sys_err
    )
    if (divided_by > 0 && last_sys_count > 0 && last_sys_count == sys_count) {
        printf`No sys ticks detected since last print\n`()
        em.halt()
    }
    if (divided_by > 0 && last_app_count > 0 && last_app_count == app_count) {
        printf`No app ticks detected since last print\n`()
        em.halt()
    }
    last_app_count = app_count
    last_sys_count = sys_count
}

function printTime(rawTime: TimeTypes.RawTime) {
    const timeParts = TimeTypes.RawTimeToTimeParts(rawTime)
    printf`%dT%02d:%02d:%02d.%03d`(
        timeParts.days,
        timeParts.hours,
        timeParts.minutes,
        timeParts.seconds,
        timeParts.milliseconds
    )
}

function sysTickCb() {
    sys_count += 1
    em.$['%%d']
    SysLed.$$.wink(10)
}
