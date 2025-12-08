import '@$$emscript'
export const $U = $declare('MODULE', IdleI)

import * as IdleI from '@em.hal/IdleI.em'
import * as IntrVec from '@em.arch.arc/IntrVec.em'

export type SleepCB = cb_t<[]>

export namespace em$meta {
    export function addSleepEnter(cb: SleepCB) {
        return
    }

    export function addSleepLeave(cb: SleepCB) {
        return
    }
}

//>> ---- em$targ ---- <<//

var cur_pause_only = true

export function em$startup() {
    $['%%b+']
}

function doPause() {
    $['%%b:'](1)
    $['%%b-']
    e$`PML_PowerDownNvmAndSleep(1)`
    $['%%b+']
}


function doSleep() {
    $['%%b:'](2)
    $['%%b-']
    // IntrVec.wait()
    e$`PML_PowerDownNvmAndSleep(5)`
    $['%%b+']
}

export function exec() {
    if (cur_pause_only) {
        doPause()
    } else {
        doSleep()
    }
}

export function wakeup() {
    return
}
