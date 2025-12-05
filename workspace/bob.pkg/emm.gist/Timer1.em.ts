import '@$$emscript'
export const $U = $declare('MODULE')

import * as $R from '@emm.distro.9305/REGS.em'

import * as Common from '@em.mcu/Common.em'
import * as IntrVec from '@em.arch.arc/IntrVec.em'

export namespace em$meta {
    export function em$construct() {
        IntrVec.em$meta.useIntr('ARC_TIMER_1')
    }
}

//>> ---- em$targ ---- <<//

export function em$run() {
    Common.GlobalInterrupts.enable()
    e$`_sr(48_000, REG_LIMIT1)`
    e$`_sr(0x1, REG_CONTROL1)`
    e$`_sr(0, REG_COUNT1)`
    $['%%a+']
    Common.BusyWait.wait(1_000_000)
}

export function ARC_TIMER_1_isr$$() {
    $['%%a-']
}