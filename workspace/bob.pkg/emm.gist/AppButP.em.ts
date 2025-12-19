import '@$$emscript'
export const $U = $declare('MODULE')

import * as $R from '@emm.distro.9305/REGS.em'

import * as BoardC from '@$distro/BoardC.em'
import * as Common from '@em.mcu/Common.em'

const AppButEdge = $delegate(BoardC.AppButEdge)
const AppLed = $delegate(BoardC.AppLed)

export namespace em$meta {
    export function em$construct() {
        AppButEdge.em$meta.setDetectHandler($cb(handler))
    }
}

//>> ---- em$targ ---- <<//

export function em$run() {
    if (Common.Mcu.isWarm()) {
        const flags: u32 = e$`PML_GetResetFlags()`
        $['%%>'](flags)
        halt()
    }
    AppButEdge.init(true)
    AppButEdge.setDetectFalling()
    AppButEdge.enableDetect()
    Common.Idle.exec()
}

function handler() {
    $['%%c']
}
