import em from '@$$emscript'
export const em$_T = em.declare('TEMPLATE')

import * as GpioI from '@em.hal/GpioI.em'
import * as LedI from '@em.hal/LedI.em'

import Poller from '@em.mcu/Poller.em'

namespace em$template {

    export const em$_U = em.declare('MODULE')

    const em$_C = {
        Pin: new em.proxy<GpioI.em$_I>(),
        active_low: new em.param<em.bool>(false),
    }

    namespace em$meta {
        export const PinX = em$_C.Pin
        export const active_low = em$_C.active_low
    }

    namespace em$targ {
        //
        const Pin = em$_C.Pin.$$
        const active_low = em$_C.active_low.$$

        export function em$startup(): void {
            Pin.makeOutput()
            off()
        }

        export function off(): void {
            if (active_low) { Pin.set() } else { Pin.clear() }
        }

        export function on(): void {
            if (active_low) { Pin.clear() } else { Pin.set() }
        }

        export function toggle(): void {
            Pin.toggle()
        }

        export function wink(msecs: em.u32): void {
            on()
            Poller.pause(msecs)
            off()
        }
    }

    export const em$clone = { em$_U, em$_C, ...em$meta, ...em$targ }
}

export function em$clone() { return { em$_T, ...em$template.em$clone } }
