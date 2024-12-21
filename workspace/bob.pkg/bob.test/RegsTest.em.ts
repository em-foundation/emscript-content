import em from '@$$emscript'
export const em$_U = em.declare('MODULE')

import * as em$_R from '@ti.distro.cc23xx/REGS.em'

namespace em$targ {
    export function em$run() {
        em$_R.CLKCTL.CLKENSET0.$$ = em$_R.CLKCTL_CLKENSET0_UART0
    }
}

export default {
    em$_U,
    // em$_C,
    // ...em$meta,
    ...em$targ,
}
