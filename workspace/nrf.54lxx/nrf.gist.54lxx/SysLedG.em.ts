import em from '@$$emscript'
export const $U = em.$declare('MODULE')

import * as $R from '@nrf.distro.54lxx/REGS.em'

export function em$run() {
    const mask = 1 << 14
    e$`NRF_P1_S->DIRSET = mask`
    e$`NRF_P1_S->OUTSET = mask`
}
