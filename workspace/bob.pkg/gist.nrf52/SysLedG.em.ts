import em from '@$$emscript'
export const $U = em.$declare('MODULE')

import * as $R from '@nordic.distro.nrf52/REGS.em'

export namespace em$meta { }

//>> ---- em$targ ---- <<//

export function em$run() {
    const mask = 1 << 20
    $R.P0.DIRSET.$$ = mask
    $R.P0.OUTCLR.$$ = mask
}