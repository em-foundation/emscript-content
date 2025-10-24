import '@$$emscript'
export const $U = $declare('MODULE', IdleI)

import * as IdleI from '@em.hal/IdleI.em'
import * as IntrVec from '@em.arch.arm/IntrVec.em'

export type SleepCB = cb_t<[]>

export namespace em$meta {
    export function addSleepEnter(cb: SleepCB) {
    }

    export function addSleepLeave(cb: SleepCB) {
    }

}

//>> ---- em$targ ---- <<//

var cur_pause_only = false

export function em$startup() {
    $['%%b+']
}

function doPause() {
    $['%%b:'](1)
    $['%%b-']
    IntrVec.PRIMASK_set(1)
    e$`asm volatile ("wfi")`
    $['%%b+']
    IntrVec.PRIMASK_set(0)
}

function doSleep() {
    $['%%b:'](2)
    $['%%b-']
    IntrVec.PRIMASK_set(1)
    e$`SCB->SCR |= SCB_SCR_SLEEPDEEP_Msk`
    e$`asm volatile ("wfi")`
    $['%%b+']
    IntrVec.PRIMASK_set(0)
}

export function exec() {
    if (cur_pause_only) {
        doPause()
    } else {
        doSleep()
    }
}

export function setPauseOnly(pause_only: bool_t) {
    cur_pause_only = pause_only
}

export function wakeup() { }
