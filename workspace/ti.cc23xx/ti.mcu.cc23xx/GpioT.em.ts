import em from '@$$emscript'
export const em$_T = em.$declare('TEMPLATE')

// import * as GpioI from '@em.hal/GpioI.em'
import * as em$_R from '@ti.distro.cc23xx/REGS.em'

export namespace em$template {

    export const em$_U = em.$declare('MODULE')

    export const pin_num = $param<i16>(-1)

    const pn = pin_num.$$
    const mask = 1 << pn

    export function clear(): void {
        em$_R.GPIO.DOUTCLR31_0.$$ = mask
    }

    export function functionSelect(select: u8): void {
        em$_R.IOC.IOC0.$[pn].$$ = select
    }

    export function makeOutput(): void {
        em$_R.GPIO.DOESET31_0.$$ = mask
        em$_R.IOC.IOC0.$[pn].$$ &= ~em$_R.IOC_IOC0_INPEN
    }

    export function set(): void {
        em$_R.GPIO.DOUTSET31_0.$$ = mask
    }

    export function toggle(): void {
        em$_R.GPIO.DOUTTGL31_0.$$ = mask
    }
}

export function em$clone() { return { em$_T, ...em$template } }
