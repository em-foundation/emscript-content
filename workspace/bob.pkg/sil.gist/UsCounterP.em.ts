import '@$$emscript'
export const $U = $declare('MODULE')

import * as Common from '@em.mcu/Common.em'

export namespace em$meta { }

//>> ---- em$targ ---- <<//

export function em$run() {
    Common.UsCounter.set(50)
    $['%%d+']
    Common.UsCounter.spin()
    $['%%d-']
    Common.BusyWait.wait(1000)
}