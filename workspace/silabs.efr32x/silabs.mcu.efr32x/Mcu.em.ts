import '@$$emscript'
export const $U = $declare('MODULE', McuI)

import * as $R from '@silabs.distro.efr32x/REGS.em'

import * as McuI from '@em.hal/McuI.em'

export namespace em$meta { }

//>> ---- em$targ ---- <<//

export function startup(): void {
    $R.CMU.CLKEN0_SET.$$ = $R.CMU_CLKEN0_HFRCO0
    $R.CMU.CLKEN0_SET.$$ = $R.CMU_CLKEN0_GPIO
}