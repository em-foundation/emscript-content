import '@$$emscript'
export const $U = $declare('MODULE')

import * as $R from '@emm.distro.9305/REGS.em'

import * as Common from '@em.mcu/Common.em'

export namespace em$meta { }

//>> ---- em$targ ---- <<//

export function em$run() {
    $R.PML.RegSleepTimCompareCfg.$$ = 1
    $R.PML.RegSleepTimCompare0.$$ = 32768
    $R.IRQ.RegIRQSleepTimEn.$$ = 1 // $R.REG_IRQ_SLEEP_TIM_EN_MASK
    // $R.IRQ.RegIRQSleepTimMsk.$$ = 1 // $R.REG_IRQ_SLEEP_TIM_MSK_MASK

    $R.PML.RegSleepTimCtrl.$$ = $R.ST_RUN_EN_MASK
    $['%%d+']
    // while ($R.PML.RegSleepTimCount.$$ < 20000) { }
    while (($R.IRQ.RegIRQSleepTimSts.$$ & 0x1) == 0) { }
    $['%%d-']
    // printf`sts = %08x\n`(sts)
    // const t0 = $R.PML.RegSleepTimCount.$$
    // const t0_hi = $R.PML.RegSleepTimCountHigh.$$
    // Common.BusyWait.wait(1_000_000)
    // const t1 = $R.PML.RegSleepTimCount.$$
    // const t1_hi = $R.PML.RegSleepTimCountHigh.$$
    // printf`t0 = %d, t0_h = %d, t1 = %d, t1_hi = %d\n`(t0, t0_hi, t1, t1_hi)
}