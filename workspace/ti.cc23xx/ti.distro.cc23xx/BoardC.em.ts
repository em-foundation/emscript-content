import em from '@$$em-script'
export const em$_U = em.declare('COMPOSITE')

import * as GpioT from '@ti.mcu.cc23xx/GpioT.em'
import * as LedT from '@em.utils/LedT.em'

export const AppLed = LedT.em$clone()
export const AppLedPin = GpioT.em$clone()
export const AppOutPin = GpioT.em$clone()
export const SysLed = LedT.em$clone()
export const SysLedPin = GpioT.em$clone()

export function em$configureM(): void {
    AppLed.x_Pin.setM(AppLedPin)
    AppLedPin.c_pin_num.setM(15)
    AppOutPin.c_pin_num.setM(20)
    SysLed.x_Pin.setM(SysLedPin)
    SysLedPin.c_pin_num.setM(14)
}
