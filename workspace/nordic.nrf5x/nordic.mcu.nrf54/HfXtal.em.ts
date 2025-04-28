import em from '@$$emscript'
export const $U = em.$declare('MODULE')

import * as $R from '@nordic.distro.nrf54/REGS.em'

import * as Common from '@em.mcu/Common.em'
import * as Idle from '@nordic.mcu.nrf54/Idle.em'
import * as IntrVec from '@em.arch.arm/IntrVec.em'

export namespace em$meta {
    export function em$construct() {
        Idle.em$meta.addSleepLeave($cb(start))
        IntrVec.em$meta.useIntr('CLOCK_POWER')
    }
}

//>> ---- em$targ ---- <<//

var ready: volatile_t<bool_t> = false

export function em$startup() {
    // IntrVec.NVIC_enable(e$`CLOCK_POWER_IRQn`)
}

export function start() {
    ready = false
    $R.CLOCK.INTENSET.$$ = $R.CLOCK_INTENSET_XOTUNED_Set
    $R.CLOCK.EVENTS_XOTUNED.$$ = 0
    $R.CLOCK.TASKS_XOSTART.$$ = 1
}

export function stop() {
    $R.CLOCK.TASKS_XOSTOP.$$ = 1
    $R.CLOCK.EVENTS_XOTUNED.$$ = 0
}

export function wait() {
    $['%%c+']
    Idle.setPauseOnly(true)
    while (!ready) {
        ready = $R.CLOCK.EVENTS_XOTUNED.$$ != 0
        // Idle.exec()
    }
    Idle.setPauseOnly(false)
    $['%%c-']
}

export function CLOCK_POWER_isr$$() {
    $['%%a']
    ready = true
    $R.CLOCK.INTENCLR.$$ = $R.CLOCK_INTENCLR_XOTUNED_Clear
    IntrVec.NVIC_clear(e$`CLOCK_POWER_IRQn`)
}