import em from '@$$emscript'
export const em$_U = em.declare('MODULE')

import * as em$_R from '@ti.distro.cc23xx/REGS.em'

namespace em$targ {
    export function em$run() {
        const pin = 14
        const mask = 1 << pin
        em$_R.GPIO.DOESET31_0.$$ = mask
        em$_R.IOC.IOC0.$[pin].$$ &= ~em$_R.IOC_IOC0_INPEN
        em$_R.GPIO.DOUTSET31_0.$$ = mask
    }
}

export default { em$_U, ...em$targ }
