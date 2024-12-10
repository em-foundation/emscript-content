import em from '@EM-SCRIPT'

import * as GpioI from '@em.hal/GpioI.em'
import * as LedI from '@em.hal/LedI.em'

import Poller from '@em.mcu/Poller.em'

namespace em$template {

    export const em$_U = em.declare<LedI.em$_I>('MODULE')

    namespace em$config {
        export let Pin = new em.proxy<GpioI.em$_I>
        export let active_low = new em.param<em.bool>(false)
    }

    namespace em$meta {
        export const x_Pin = em$config.Pin
        export const c_active_low = em$config.active_low
    }

    namespace em$targ {
        //
        const Pin = em$config.Pin.unwrap()
        const active_low = em$config.active_low.unwrap()

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

    export const em$clone = { em$_U, ...em$meta, ...em$targ }
}

export default { ...em$template.em$clone }
