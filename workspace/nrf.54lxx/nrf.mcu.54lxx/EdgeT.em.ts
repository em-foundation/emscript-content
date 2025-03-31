import em from '@$$emscript'
export const $T = em.$declare('TEMPLATE')

import * as $R from '@nrf.distro.54lxx/REGS.em'

import * as Aux from '@nrf.mcu.54lxx/EdgeAux.em'
import * as EdgeI from '@em.hal/EdgeI.em'
import * as GpioI from '@em.hal/GpioI.em'

export namespace em$template {
    export const $U = em.$declare('MODULE', EdgeI)

    export const Pin = $proxy<GpioI.$I>()
    export const pin_num = $config<i16>()

    export namespace em$meta {
        export function setDetectHandler(h: EdgeI.Handler) {
            let hi = Aux.HandlerInfo.$make()
            hi.handler = h
            hi.mask = 1 << pin_num.$$
            Aux.em$meta.addHandlerInfo(hi)
        }
    }

    const chan = 0
    const pid = pin_num.$$ & 0xff
    const mask = 1 << pid
    const int_en = $R.GPIOTE_INTENSET0_PORT0SECURE_Msk | (1 << chan)

    export function clearDetect(): void {
        $R.GPIOTE20.EVENTS_IN[chan].$$ = 0
    }

    export function disableDetect(): void {
        $R.GPIOTE20.INTENCLR0.$$ = int_en
    }

    export function enableDetect(): void {
        $R.GPIOTE20.INTENSET0.$$ = int_en
    }

    export function getState(): bool_t {
        return Pin.$$.get()
    }

    export function init(pullup: bool_t) {
        Pin.$$.makeInput()
        Pin.$$.setInternalPullup(pullup)
        $R.GPIOTE20.CONFIG[chan].$$ =
            ($R.GPIOTE_CONFIG_MODE_Event << $R.GPIOTE_CONFIG_MODE_Pos) |
            (pid << $R.GPIOTE_CONFIG_PSEL_Pos)
    }

    export function setDetectFalling() {
        $R.GPIOTE20.CONFIG[chan].$$ &= ~$R.GPIOTE_CONFIG_POLARITY_Msk
        $R.GPIOTE20.CONFIG[chan].$$ |= $R.GPIOTE_CONFIG_POLARITY_HiToLo << $R.GPIOTE_CONFIG_POLARITY_Pos
    }

    export function setDetectRising() {
        $R.GPIOTE20.CONFIG[chan].$$ &= ~$R.GPIOTE_CONFIG_POLARITY_Msk
        $R.GPIOTE20.CONFIG[chan].$$ |= $R.GPIOTE_CONFIG_POLARITY_LoToHi << $R.GPIOTE_CONFIG_POLARITY_Pos
    }
}

export function $clone() {
    return { $T, ...em$template }
}
