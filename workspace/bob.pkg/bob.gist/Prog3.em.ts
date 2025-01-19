import em from '@$$emscript'
export const em$_U = em.$declare('MODULE')

import * as BusyWait from '@ti.mcu.cc23xx/BusyWait.em'
import * as GpioT from '@ti.mcu.cc23xx/GpioT.em'

const AppLedPin = GpioT.em$clone()
const SysLedPin = GpioT.em$clone()

export namespace em$meta {
    export function em$configure() {
        AppLedPin.pin_num.$$ = 15
        SysLedPin.pin_num.$$ = 14
    }
}

export function em$startup() {
    AppLedPin.makeOutput()
    SysLedPin.makeOutput()
}

export function em$run() {
    for (let i = 0; i < 10; i++) {
        AppLedPin.toggle()
        BusyWait.wait(250_000)
    }
    SysLedPin.set()
}
