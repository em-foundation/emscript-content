import em from '@$$emscript'
export const em$_U = em.declare('MODULE')

import * as BusyWait from '@ti.mcu.cc23xx/BusyWait.em'
import * as GpioI from '@em.hal/GpioI.em'

export const Pin = em.Proxy<GpioI.em$_I>()
export const active_low = em.param<em.bool_t>(false)

export function em$startup(): void {
    Pin.$$.makeOutput()
    off()
}

export function off(): void {
    if (active_low.$$) { Pin.$$.set() } else { Pin.$$.clear() }
}

export function on(): void {
    if (active_low.$$) { Pin.$$.clear() } else { Pin.$$.set() }
}

export function toggle(): void {
    Pin.$$.toggle()
}

export function wink(msecs: em.u32): void {
    on()
    BusyWait.wait(msecs * 1000)
    off()
}
