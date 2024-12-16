import em from '@$$em-script'
export const em$_U = em.declare('COMPOSITE')

import * as GpioT from '@ti.mcu.cc23xx/GpioT.em'
import * as LedT from '@em.utils/LedT.em'

import BusyWait from '@ti.mcu.cc23xx/BusyWait.em'
import Common from '@em.mcu/Common.em'
import GlobalInterrupts from '@em.arch.arm/GlobalInterrupts.em'

export const AppLed = LedT.em$clone()
export const AppLedPin = GpioT.em$clone()
export const AppOutPin = GpioT.em$clone()
export const SysLed = LedT.em$clone()
export const SysLedPin = GpioT.em$clone()

export function em$configureM(): void {
    AppLed.x_Pin.$(AppLedPin)
    AppLedPin.c_pin_num.$(15)
    AppOutPin.c_pin_num.$(20)
    Common.x_BusyWait.$(BusyWait)
    Common.x_GlobalInterrupts.$(GlobalInterrupts)
    SysLed.x_Pin.$(SysLedPin)
    SysLedPin.c_pin_num.$(14)
}
