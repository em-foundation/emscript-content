import em from '@$$emscript'
export const em$_T = em.declare('TEMPLATE')

import * as GpioI from '@em.hal/GpioI.em'
import * as LedI from '@em.hal/LedI.em'

import * as Poller from '@em.mcu/Poller.em'

export namespace em$template {

    export const em$_U = em.declare('MODULE')

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
        Poller.pause(msecs)
        off()
    }
}

export function em$clone() { return { em$_T, ...em$template } }
