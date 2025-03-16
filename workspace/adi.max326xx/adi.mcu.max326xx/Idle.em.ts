import em from '@$$emscript'
export const $U = em.$declare('MODULE', IdleI)

import * as $R from '@adi.distro.max326xx/REGS.em'

import * as IdleI from '@em.hal/IdleI.em'
import * as IntrVec from '@em.arch.arm/IntrVec.em'

export namespace em$meta { }

//>> ---- em$targ ---- <<//

var cur_pause_only = true

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
    // $R.PWRSEQ.LPCN.$$ |= $R.F_PWRSEQ_LPCN_LPWKST_CLR
    $R.MCR.CTRL.$$ |= $R.F_MCR_CTRL_ERTCO_EN
    e$`SCB->SCR |= SCB_SCR_SLEEPDEEP_Msk`
    // $R.GCR.PM.$$ |= $R.S_GCR_PM_MODE_STANDBY
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
    // cur_pause_only = pause_only
    cur_pause_only = true
}

export function wakeup() { }
