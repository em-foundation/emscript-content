import em from '@$$emscript'
export const $U = em.$declare('MODULE', McuI)

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
    if (!use_sram.$$) {
        e$`NRF_APPLICATION_ICACHE_S->ENABLE = 1`
    }
    Debug.startup()
    $['%%a:'](2)
}
