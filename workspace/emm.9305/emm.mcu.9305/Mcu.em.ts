import '@$$emscript'
export const $U = $declare('MODULE', McuI)

import * as $R from '@emm.distro.9305/REGS.em'

import * as Debug from '@em.lang/Debug.em'
import * as McuI from '@em.hal/McuI.em'

const use_sram = $config<bool_t>()

export namespace em$meta {
    export function em$construct() {
        use_sram.$$val = $property('em.build.BootFlash', false)
    }
}

export function isWarm(): bool_t {
    const flags: u32 = e$`PML_GetResetFlags()`
    return (flags & ($R.PML_SLEEP_FLG_MASK | $R.PML_DEEP_SLEEP_FLG_MASK)) != 0
}

export function startup(): void {
    const msk =
        $R.PML_RF_SW_EN_MASK |
        $R.PML_NVM_SW_EN_MASK |
        $R.PML_NVM_BO_RST_EN_MASK |
        $R.PML_VBAT_MON_EN_MASK |
        0
    // $R.PML_SLP_TIM_ON_XTAL_MASK |
    // $R.PML_LF_XTAL_EN_SHIFT
    $R.PML.RegPmlCtrl.$$ = msk
    $R.PML.RegPmlDomain.$$ = $R.PML_NVM_REQ_ON_MASK | 0x2
    $R.PML.RegPmlPadClk.$$ = 0x9
    $R.PML.RegPmlLvl.$$ = $R.PML_LDO_DIG_LVL_MASK | 0x4f
    $R.PML.RegPmlDCDCCtrl.$$ = 0x0001_1b02
    $R.PML.RegPmlLFRC.$$ = $R.PML_LF_RC_CHOP_EN_MASK

    Debug.startup()
    $['%%a:'](2)
    //// if ($R.PML.RegPmlFlg.$$ != 0) {
    ////     $['%%a:'](2)
    //// }
    //// if (use_sram) {
    ////     e$`PML_PowerDownNvm()`
    ////     // $['%%a:'](2)
    ////     // $R.PML.RegPmlCtrl.$$ &= ~$R.PML_NVM_BO_RST_EN_MASK
    ////     // $R.PML.RegPmlDomain.$$ &= ~$R.PML_NVM_REQ_ON_MASK
    ////     // while ($R.SYS.RegPmlSts.$$ & $R.PML_NVM_REQ_ON_MASK) { }
    ////     // $R.PML.RegPmlCtrl.$$ &= ~$R.PML_NVM_SW_EN_MASK
    ////     // $R.SYS.RegClkCtrlDisable.$$ = $R.CLK_DIS_NVM_MASK
    ////     // e$`_sr(1, IC_CTRL)`
    //// }
}
