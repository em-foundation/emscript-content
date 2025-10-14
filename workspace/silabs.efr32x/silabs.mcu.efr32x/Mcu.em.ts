import '@$$emscript'
export const $U = $declare('MODULE', McuI)

import * as $R from '@silabs.distro.efr32x/REGS.em'

import * as McuI from '@em.hal/McuI.em'

export namespace em$meta { }

//>> ---- em$targ ---- <<//

export function startup(): void {
    $R.CMU.CLKEN0_SET.$$ = $R.CMU_CLKEN0_GPIO
    $R.CMU.CLKEN0_SET.$$ = $R.CMU_CLKEN0_HFRCO0 | $R.CMU_CLKEN0_DPLL0
    $R.HFRCO0.CTRL_SET.$$ = $R.HFRCO_CTRL_FORCEEN
    $R.CMU.SYSCLKCTRL_SET.$$ = $R.CMU_SYSCLKCTRL_CLKSEL_HFRCODPLL
    while (($R.HFRCO0.STATUS.$$ & $R.HFRCO_STATUS_RDY) == 0) { }
    // $R.CMU.SYSCLKCTRL_SET.$$ = $R.CMU_SYSCLKCTRL_HCLKPRESC_DIV4
}