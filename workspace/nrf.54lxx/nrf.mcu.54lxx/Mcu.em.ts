import em from '@$$emscript'
export const $U = em.$declare('MODULE', McuI)

import * as Debug from '@em.lang/Debug.em'
import * as McuI from '@em.hal/McuI.em'

export namespace em$meta { }

export function startup(): void {
    e$`NRF_OSCILLATORS_S->PLL.FREQ = 1` // 128 MHz
    e$`NRF_APPLICATION_ICACHE_S->ENABLE = 1`
    Debug.startup()
    $['%%a:'](2)
}
