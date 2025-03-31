import em from '@$$emscript'
export const $U = em.$declare('MODULE', McuI)

import * as $R from '@nrf.distro.54lxx/REGS.em'

import * as Debug from '@em.lang/Debug.em'
import * as McuI from '@em.hal/McuI.em'

const use_sram = $config<bool_t>()

export namespace em$meta {
    export function em$construct() {
        use_sram.$$ = $property('em.build.BootFlash', false)
    }
}

export function startup(): void {
    e$`NRF_OSCILLATORS_S->PLL.FREQ = 1` // 128 MHz
    unprotect()
    if (use_sram.$$) {
        $R.RRAMC.POWER.LOWPOWERCONFIG.$$ = $R.RRAMC_POWER_LOWPOWERCONFIG_MODE_PowerOff
    } else {
        e$`NRF_APPLICATION_ICACHE_S->ENABLE = 1`
    }
    Debug.startup()
    $['%%a:'](2)
}

function unprotect() {
    const CLEAR: u32 = (
        $R.TAMPC_PROTECT_DOMAIN_DBGEN_CTRL_WRITEPROTECTION_Clear << $R.TAMPC_PROTECT_DOMAIN_DBGEN_CTRL_WRITEPROTECTION_Pos |
        $R.TAMPC_PROTECT_DOMAIN_DBGEN_CTRL_KEY_KEY << $R.TAMPC_PROTECT_DOMAIN_DBGEN_CTRL_KEY_Pos
    )
    const OPEN: u32 = (
        $R.TAMPC_PROTECT_DOMAIN_DBGEN_CTRL_VALUE_High << $R.TAMPC_PROTECT_DOMAIN_DBGEN_CTRL_VALUE_Pos |
        $R.TAMPC_PROTECT_DOMAIN_DBGEN_CTRL_LOCK_Disabled << $R.TAMPC_PROTECT_DOMAIN_DBGEN_CTRL_LOCK_Pos |
        $R.TAMPC_PROTECT_DOMAIN_DBGEN_CTRL_KEY_KEY << $R.TAMPC_PROTECT_DOMAIN_DBGEN_CTRL_KEY_Pos
    )
    $R.TAMPC.PROTECT.DOMAIN[0].DBGEN.CTRL.$$ = CLEAR
    $R.TAMPC.PROTECT.DOMAIN[0].DBGEN.CTRL.$$ = OPEN
    $R.TAMPC.PROTECT.DOMAIN[0].NIDEN.CTRL.$$ = CLEAR
    $R.TAMPC.PROTECT.DOMAIN[0].NIDEN.CTRL.$$ = OPEN
    $R.TAMPC.PROTECT.DOMAIN[0].SPIDEN.CTRL.$$ = CLEAR
    $R.TAMPC.PROTECT.DOMAIN[0].SPIDEN.CTRL.$$ = OPEN
    $R.TAMPC.PROTECT.DOMAIN[0].SPNIDEN.CTRL.$$ = CLEAR
    $R.TAMPC.PROTECT.DOMAIN[0].SPNIDEN.CTRL.$$ = OPEN
    $R.TAMPC.PROTECT.AP[0].DBGEN.CTRL.$$ = CLEAR
    $R.TAMPC.PROTECT.AP[0].DBGEN.CTRL.$$ = OPEN
}

