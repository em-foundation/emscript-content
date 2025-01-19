import em from '@$$emscript'
export const em$_U = $declare('MODULE')

import * as em$_R from '@ti.distro.cc23xx/REGS.em'

const pin = 15
const mask = 1 << pin

export function clear(): void {
    em$_R.GPIO.DOUTCLR31_0.$$ = mask
}

export function functionSelect(select: u8): void {
    em$_R.IOC.IOC0.$[pin].$$ = select
}

export function makeOutput(): void {
    em$_R.GPIO.DOESET31_0.$$ = mask
    em$_R.IOC.IOC0.$[pin].$$ &= ~em$_R.IOC_IOC0_INPEN
}

export function set(): void {
    em$_R.GPIO.DOUTSET31_0.$$ = mask
}

export function toggle(): void {
    em$_R.GPIO.DOUTTGL31_0.$$ = mask
}
