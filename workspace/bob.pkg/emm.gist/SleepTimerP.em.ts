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

    $R.PML.RegSleepTimCtrl.$$ = $R.ST_RUN_EN_MASK
    $['%%d+']
    Common.Idle.exec()
    $['%%d-']

    // $R.PML.RegPmlCtrl.$$ |= $R.PML_WAKE_CLEAR_MASK
    // $R.PML.RegPmlCtrl.$$ |= $R.PML_WAKE_FLG_EN_MASK
    // $R.PML.RegPmlCtrl.$$ |= $R.PML_LATCH_PAD_EN_MASK
    // e$`PML_SetHfClkFrequency(0)`
    // e$`PML_PowerDownNvmAndSleep(1)`
    // e$`asm ("sleep")`
    // Common.BusyWait.wait(2_000_000)
    // while ($R.PML.RegSleepTimCount.$$ < 20000) { }
    // while (($R.IRQ.RegIRQSleepTimSts.$$ & 0x1) == 0) { }


    // printf`sts = %08x\n`(sts)
    // const t0 = $R.PML.RegSleepTimCount.$$
    // const t0_hi = $R.PML.RegSleepTimCountHigh.$$
    // Common.BusyWait.wait(1_000_000)
    // const t1 = $R.PML.RegSleepTimCount.$$
    // const t1_hi = $R.PML.RegSleepTimCountHigh.$$
    // printf`t0 = %d, t0_h = %d, t1 = %d, t1_hi = %d\n`(t0, t0_hi, t1, t1_hi)
}

export function SLEEP_TIMER_OUT_CMP_0_isr$$() {
    $['%%a']
}