import '@$$emscript'
export const $U = $declare('MODULE', McuI)

import * as $R from '@emm.distro.9305/REGS.em'

import * as Debug from '@em.lang/Debug.em'
import * as McuI from '@em.hal/McuI.em'

export namespace em$meta { }

export function startup(): void {
    Debug.startup()
    $['%%a:'](2)
}
