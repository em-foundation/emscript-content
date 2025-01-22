import em from '@$$emscript'
export const em$_T = em.$declare('TEMPLATE')

// import * as GpioI from '@em.hal/GpioI.em'
import * as em$_R from '@ti.distro.cc23xx/REGS.em'

export namespace em$template {

    export const em$_U = em.$declare('MODULE')

    export const pin_num = $param<i16>(-1)

    export namespace em$meta {

        export function pinId(): i16 {
            return pin_num.$$
        }
    }

    const pn = pin_num.$$
    const mask = 1 << pn

    export function clear(): void {
        em$_R.GPIO.DOUTCLR31_0.$$ = mask
    }

    export function functionSelect(select: u8): void {
        em$_R.IOC.IOC0.$[pn].$$ = select
    }

    export function get(): bool_t {
        return isInput() ? ((em$_R.GPIO.DIN31_0.$$ & mask) != 0) : ((em$_R.GPIO.DOUT31_0.$$ & mask) != 0)
    }

    export function isInput(): bool_t {
        return (em$_R.GPIO.DOE31_0.$$ & mask) == 0
    }

    export function isOutput(): bool_t {
        return (em$_R.GPIO.DOE31_0.$$ & mask) != 0
    }

    export function makeInput(): void {
        em$_R.GPIO.DOECLR31_0.$$ = mask
        em$_R.IOC.IOC0.$[pn].$$ |= em$_R.IOC_IOC0_INPEN

    }

    export function makeOutput(): void {
        em$_R.GPIO.DOESET31_0.$$ = mask
        em$_R.IOC.IOC0.$[pn].$$ &= ~em$_R.IOC_IOC0_INPEN
    }

    export function pinId(): i16 {
        return pn
    }

    export function reset(): void {
        em$_R.GPIO.DOECLR31_0.$$ = mask
        em$_R.IOC.IOC0.$[pn].$$ = 0
    }

    export function set(): void {
        em$_R.GPIO.DOUTSET31_0.$$ = mask
    }

    export function setInternalPulldown(enable: bool_t): void {
        if (enable) {
            em$_R.IOC.IOC0.$[pn].$$ |= em$_R.IOC_IOC0_PULLCTL_PULL_DOWN
        }
        else {
            em$_R.IOC.IOC0.$[pn].$$ &= ~em$_R.IOC_IOC0_PULLCTL_PULL_DOWN
        }
    }

    export function setInternalPullup(enable: bool_t): void {
        if (enable) {
            em$_R.IOC.IOC0.$[pn].$$ |= em$_R.IOC_IOC0_PULLCTL_PULL_UP
        }
        else {
            em$_R.IOC.IOC0.$[pn].$$ &= ~em$_R.IOC_IOC0_PULLCTL_PULL_UP
        }
    }

    export function toggle(): void {
        em$_R.GPIO.DOUTTGL31_0.$$ = mask
    }
}

export function em$clone() { return { em$_T, ...em$template } }
