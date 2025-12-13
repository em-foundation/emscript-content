import '@$$emscript'
export const $U = $declare('MODULE', IdleI)

import * as $R from '@emm.distro.9305/REGS.em'

import * as Debug from '@em.lang/Debug.em'
import * as IdleI from '@em.hal/IdleI.em'
import * as MemDump from '@em.utils/MemDump.em'

export type SleepCB = cb_t<[]>

const sleep_enter_tab = $table<SleepCB>()

export namespace em$meta {
    export function addSleepEnter(cb: SleepCB) {
        sleep_enter_tab.$$add(cb)
    }

    export function addSleepLeave(cb: SleepCB) {
        // empty
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
    e$`PML_PowerDownNvmAndSleep(1)`
    $['%%b+']
}


function doSleep() {
    $R.PML.RegPmlCtrl.$$ |= $R.PML_WAKE_CLEAR_MASK
    $R.PML.RegPmlCtrl.$$ |= $R.PML_WAKE_FLG_EN_MASK
    // MemDump.print(t$`PWRM`, e$`PML_BASE`, e$`sizeof(PML_RegMap_t)`)
    // halt()
    for (let cb of sleep_enter_tab) cb()
    $['%%b:'](2)
    $['%%b-']
    Debug.reset()
    e$`PML_PowerDownNvmAndSleep(6)`
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
