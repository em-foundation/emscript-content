import '@$$emscript'
export const $T = $declare('TEMPLATE')

import * as $R from '@emm.distro.9305/REGS.em'

import * as Aux from '@emm.mcu.9305/EdgeAux.em'
import * as EdgeI from '@em.hal/EdgeI.em'
import * as GpioI from '@em.hal/GpioI.em'

export namespace em$template {
    export const $U = $declare('MODULE', EdgeI)

    export const Pin = $proxy<GpioI.$I>()
    export const pin_num = $config<i16>()

    const pin_chan = $config<u8>()

    export namespace em$meta {
        export function setDetectHandler(h: EdgeI.Handler) {
            let hi = Aux.HandlerInfo.$make()
            hi.handler = h
            pin_chan.$$val = Aux.em$meta.addHandlerInfo(hi)
        }
    }

    const pc = <u8>pin_chan
    const pid = pin_num & 0xff
    const mask = 1 << pid
    const int_en = 1 << pc

    export function clearDetect(): void {
        // TODO
    }

    export function disableDetect(): void {
        // TODO
    }

    export function enableDetect(): void {
        // TODO
    }

    export function getState(): bool_t {
        return Pin.get()
    }

    export function init(pullup: bool_t) {
        Pin.makeInput()
        Pin.setInternalPullup(pullup)
    }

    export function setDetectFalling() {
    }

    export function setDetectRising() {
    }
}

export function $clone() {
    return { $T, ...em$template }
}
