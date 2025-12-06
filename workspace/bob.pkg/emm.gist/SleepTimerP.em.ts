import '@$$emscript'
export const $U = $declare('MODULE')

import * as $R from '@emm.distro.9305/REGS.em'

import * as IntrVec from '@em.arch.arc/IntrVec.em'

import * as Common from '@em.mcu/Common.em'

export namespace em$meta {
    export function em$construct() {
        IntrVec.em$meta.useIntr('SLEEP_TIMER_OUT_CMP_0')
    }
}

//>> ---- em$targ ---- <<//

export function em$run() {
    Common.GlobalInterrupts.enable()
    $R.PML.RegSleepTimCompareCfg.$$ = 1
    $R.PML.RegSleepTimCompare0.$$ = 32768
    $R.IRQ.RegIRQSleepTimEn.$$ = 0x0001_0001 // $R.REG_IRQ_SLEEP_TIM_EN_MASK
    $R.IRQ.RegIRQSleepTimMsk.$$ = 1 // $R.REG_IRQ_SLEEP_TIM_MSK_MASK
    $['%%d+']
    e$`asm ("sleep 1")`
    // Common.BusyWait.wait(2_000_000)
    // Common.Idle.exec()
    $['%%d-']
}

export function SLEEP_TIMER_OUT_CMP_0_isr$$() {
    $R.IRQ.RegIRQSleepTimSts.$$ = 1
    $R.PML.RegSleepTimCtrl.$$ = $R.ST_RUN_EN_MASK
    $['%%a']
}
