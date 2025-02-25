import em from '@$$emscript'
export const $U = em.$declare('MODULE', McuI)

import * as Debug from '@em.lang/Debug.em'
import * as McuI from '@em.hal/McuI.em'

export namespace em$meta {}

export function startup(): void {
    // e$`MXC_ICC0->ctrl |= MXC_F_ICC_CTRL_EN`
    e$`MXC_GCR->pclkdis0 &= ~(MXC_F_GCR_PCLKDIS0_GPIO0 | MXC_F_GCR_PCLKDIS0_GPIO1)`
    Debug.startup()
    $['%%a:'](2)
}
