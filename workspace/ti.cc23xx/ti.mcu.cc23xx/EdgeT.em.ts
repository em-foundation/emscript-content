import em from '@$$emscript'
export const em$_T = em.$declare('TEMPLATE')

import * as em$_R from '@ti.distro.cc23xx/REGS.em'
import * as Aux from '@ti.mcu.cc23xx/EdgeAux.em'
import * as EdgeI from '@em.hal/EdgeI.em'
import * as GpioI from '@em.hal/GpioI.em'

export namespace em$template {

    export const em$_U = em.$declare('MODULE')

    export const Pin = $proxy<GpioI.em$_I>()
    export const pin_num = $param<i16>()

    export namespace em$meta {

        export function em$construct() {
        }

        export function setDetectHandler(h: EdgeI.Handler) {
            let hi = Aux.HandlerInfo.$make()
            hi.handler = h
            hi.mask = 1 << pin_num.$$
            Aux.em$meta.addHandlerInfo(hi)
        }
    }

    const pn = pin_num.$$
    const mask = 1 << pn

    export function clearDetect(): void {
        em$_R.GPIO.ICLR.$$ = mask
    }

    export function disableDetect(): void {
        em$_R.GPIO.IMCLR.$$ = mask
        em$_R.IOC.IOC0.$[pn].$$ &= ~em$_R.IOC_IOC0_WUENSB
    }

    export function enableDetect(): void {
        em$_R.GPIO.IMSET.$$ = mask
        em$_R.IOC.IOC0.$[pn].$$ |= em$_R.IOC_IOC0_WUENSB
    }

    export function getState(): bool_t {
        return Pin.$$.get()
    }

    export function init(pullup: bool_t) {
        Pin.$$.makeInput()
        Pin.$$.setInternalPullup(pullup)
    }

    export function setDetectingFalling() {
        em$_R.IOC.IOC0.$[pn].$$ &= ~em$_R.IOC_IOC0_EDGEDET_M
        em$_R.IOC.IOC0.$[pn].$$ |= em$_R.IOC_IOC0_EDGEDET_EDGE_NEG
    }

    export function setDetectingRising() {
        em$_R.IOC.IOC0.$[pn].$$ &= ~em$_R.IOC_IOC0_EDGEDET_M
        em$_R.IOC.IOC0.$[pn].$$ |= em$_R.IOC_IOC0_EDGEDET_EDGE_POS
    }
}

export function em$clone() { return { em$_T, ...em$template } }
