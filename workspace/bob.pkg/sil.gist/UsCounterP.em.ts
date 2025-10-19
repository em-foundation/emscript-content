import '@$$emscript'
export const $U = $declare('MODULE')

import * as Common from '@em.mcu/Common.em'

export namespace em$meta { }

//>> ---- em$targ ---- <<//

export function em$run() {
    $['%%d+']
    Common.UsCounter.set(100)
    Common.UsCounter.spin()
    $['%%d-']
}