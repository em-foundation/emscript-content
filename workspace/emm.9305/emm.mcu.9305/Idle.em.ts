import '@$$emscript'
export const $U = $declare('MODULE', IdleI)

import * as $R from '@emm.distro.9305/REGS.em'

import * as IdleI from '@em.hal/IdleI.em'
import * as IntrVec from '@em.arch.arc/IntrVec.em'
import * as MemDump from '@em.utils/MemDump.em'


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
    $R.PML.RegPmlCtrl.$$ |= $R.PML_WAKE_FLG_EN_MASK

    // MemDump.print(t$`PWRM`, e$`PML_BASE`, e$`sizeof(PML_RegMap_t)`)
    // MemDump.print(t$`SYST`, e$`SYS_BASE`, e$`sizeof(System_RegMap_t)`)
    // halt()


    $['%%b:'](2)
    $['%%b-']
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
