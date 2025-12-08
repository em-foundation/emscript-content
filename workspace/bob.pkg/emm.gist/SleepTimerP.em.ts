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
    $R.IRQ.RegIRQSleepTimEnSet.$$ = 1
    $R.IRQ.RegIRQSleepTimMskSet.$$ = 1
    $R.PML.RegSleepTimCompareCfg.$$ = 1
    $R.PML.RegSleepTimCompare0.$$ = 32768
    $R.PML.RegSleepTimCtrl.$$ = $R.ST_RUN_EN_MASK
    $['%%d']
    Common.Idle.exec()
}

export function SLEEP_TIMER_OUT_CMP_0_isr$$() {
    $['%%c']
    $R.IRQ.RegIRQSleepTimStsClr.$$ = 1
    $R.PML.RegSleepTimCtrl.$$ = 0
}
