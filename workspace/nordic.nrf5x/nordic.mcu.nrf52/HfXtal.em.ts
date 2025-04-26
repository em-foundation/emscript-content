import em from '@$$emscript'
export const $U = em.$declare('MODULE')

import * as $R from '@nordic.distro.nrf52/REGS.em'

export namespace em$meta { }

//>> ---- em$targ ---- <<//

export function start() {
    $R.CLOCK.TASKS_HFCLKSTART.$$ = 1
}

export function stop() {
    $R.CLOCK.TASKS_HFCLKSTOP.$$ = 1
    $R.CLOCK.EVENTS_HFCLKSTARTED.$$ = 0
}

export function wait() {
    while ($R.CLOCK.EVENTS_HFCLKSTARTED.$$ == 0) { }
}