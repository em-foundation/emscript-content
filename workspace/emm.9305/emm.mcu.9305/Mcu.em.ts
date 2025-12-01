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

export function startup(): void {
    Debug.startup()
    $['%%a:'](2)
    if (use_sram) {
        $['%%a:'](2)
        $R.PML.RegPmlCtrl.$$ &= ~$R.PML_NVM_BO_RST_EN_MASK
        $R.PML.RegPmlDomain.$$ &= ~$R.PML_NVM_REQ_ON_MASK
        while ($R.SYS.RegPmlSts.$$ & $R.PML_NVM_REQ_ON_MASK) { }
        $R.PML.RegPmlCtrl.$$ & ~ ~$R.PML_NVM_SW_EN_MASK
        $R.SYS.RegClkCtrlDisable.$$ = $R.CLK_DIS_NVM_MASK
        // e$`*em::$reg32((uint32_t)&PML->RegPmlCtrl) = REG_PML_CTRL_RESET_VALUE`
        e$`_sr(1, IC_CTRL)`
    }
}
