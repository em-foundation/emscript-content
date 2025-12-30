import '@$$emscript'
export const $U = $declare('MODULE')

import * as $R from '@emm.distro.9305/REGS.em'

import * as BoardC from '@$distro/BoardC.em'
import * as Common from '@em.mcu/Common.em'
import * as IntrVec from '@em.arch.arc/IntrVec.em'
import * as MemDump from '@em.utils/MemDump.em'

const AppButPin = $delegate(BoardC.AppButPin)
const AppLed = $delegate(BoardC.AppLed)

export namespace em$meta {
    export function em$construct() {
        IntrVec.em$meta.useIntr('SLEEP_TIMER_OUT_CMP_0')
    }
}

//>> ---- em$targ ---- <<//

var cnt: u8 = 10

export function em$run() {
    // printf`isWarm = %d\n`(Common.Mcu.isWarm())
    // if ($R.PML.RegSleepTimCount.$$ != 0) {
    //     // MemDump.print(t$`PWRM`, e$`PML_BASE`, e$`sizeof(PML_RegMap_t)`)
    //     // MemDump.print(t$`SYST`, e$`SYS_BASE`, e$`sizeof(System_RegMap_t)`)
    //     halt();
    // }

    $['%%>'](cnt++)
    Common.GlobalInterrupts.enable()
    $R.IRQ.RegIRQSleepTimEnSet.$$ = 1
    $R.IRQ.RegIRQSleepTimMskSet.$$ = 1
    $R.PML.RegSleepTimCtrl.$$ = $R.ST_CLEAR_MASK
    $R.PML.RegSleepTimCtrl.$$ = 0
    // const sts = $R.IRQ.RegIRQSleepTimSts.$$
    // $['%%>'](<u8>sts)
    $R.PML.RegSleepTimCompareCfg.$$ = 0x0001_0001
    $R.PML.RegSleepTimCompare0.$$ = 32768 / 2
    while ($R.PML.RegSleepTimCount.$$ != 0) { }
    $R.PML.RegSleepTimCtrl.$$ = $R.ST_RUN_EN_MASK


    $['%%d']
    Common.Idle.exec()
}

export function SLEEP_TIMER_OUT_CMP_0_isr$$() {
    $['%%c']
    $R.IRQ.RegIRQSleepTimStsClr.$$ = 1
    $R.PML.RegSleepTimCtrl.$$ = 0
}


