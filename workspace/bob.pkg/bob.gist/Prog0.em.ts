import em from '@$$emscript'
export const em$_U = $declare('MODULE')

import * as em$_R from '@ti.distro.cc23xx/REGS.em'

export function em$run() {
    const pin = 15 // appLed
    const mask = 1 << pin
    em$_R.GPIO.DOESET31_0.$$ = mask
    em$_R.IOC.IOC0.$[pin].$$ &= ~em$_R.IOC_IOC0_INPEN
    em$_R.GPIO.DOUTSET31_0.$$ = mask
}
