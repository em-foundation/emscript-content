import em from '@$$emscript'
export const $U = em.$declare('MODULE', IdleI)

import * as $R from '@adi.distro.max326xx/REGS.em'

import * as Debug from '@em.lang/Debug.em'
import * as IdleI from '@em.hal/IdleI.em'
import * as IntrVec from '@em.arch.arm/IntrVec.em'

export type SleepCB = cb_t<[]>

const sleep_enter_tab = $table<SleepCB>('ro')
const sleep_leave_tab = $table<SleepCB>('ro')

export namespace em$meta {
    export function addSleepEnter(cb: SleepCB) {
        sleep_enter_tab.$add(cb)
    }

    export function addSleepLeave(cb: SleepCB) {
        sleep_leave_tab.$add(cb)
    }
}

export namespace em$meta { }

//>> ---- em$targ ---- <<//

var cur_pause_only = true

export function em$startup() {
    $['%%b+']
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

function disablePins() {
    const mask = 0xffffffff
    $R.GPIO0.PADCTRL0.$$ = mask
    $R.GPIO0.PADCTRL1.$$ = mask
    $R.GPIO0.VSSEL.$$ = ~mask
    $R.GPIO0.OUTEN_SET.$$ = mask
    $R.GPIO0.EN0_SET.$$ = mask
    $R.GPIO0.EN1_CLR.$$ = mask
    $R.GPIO0.EN2_CLR.$$ = mask
    $R.GPIO0.OUT_SET.$$ = mask
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
    // printf`GCR.CLKCTRL = %08x\n`($R.GCR.CLKCTRL.$$)
    // printf`GCR.PM = %08x\n`($R.GCR.PM.$$)
    // printf`MCR.CTRL = %08x\n`($R.MCR.CTRL.$$)
    // printf`PWR.LPCN = %08x\n`($R.PWRSEQ.LPCN.$$)
    // printf`RTC.CTRL = %08x\n`($R.RTC.CTRL.$$)
    // halt()
    // for (let cb of sleep_enter_tab) cb()
    $['%%b:'](2)
    $['%%b-']
    // Debug.reset()
    disablePins()
    IntrVec.PRIMASK_set(1)
    $R.PWRSEQ.LPCN.$$ |= $R.F_PWRSEQ_LPCN_LPWKST_CLR
    $R.MCR.CTRL.$$ |= $R.F_MCR_CTRL_ERTCO_EN
    e$`SCB->SCR |= SCB_SCR_SLEEPDEEP_Msk`
    $R.GCR.PM.$$ |= $R.S_GCR_PM_MODE_STANDBY
    e$`asm volatile ("wfi")`
    Debug.startup()
    $['%%b+']
    for (let cb of sleep_leave_tab) cb()
    IntrVec.PRIMASK_set(0)
}

