import em from '@$$emscript'
export const em$_U = em.declare('COMPOSITE')

import * as GpioT from '@ti.mcu.cc23xx/GpioT.em'

export const AppLedPin = GpioT.em$clone()
export const SysLedPin = GpioT.em$clone()

export function em$configure() {
    AppLedPin.pin_num.$bind(15)
    SysLedPin.pin_num.$bind(14)
}
