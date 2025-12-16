import '@$$emscript'
export const $U = $declare('MODULE')

import * as BoardC from '@$distro/BoardC.em'

const AppButEdge = $delegate(BoardC.AppButEdge)

export namespace em$meta { }

//>> ---- em$targ ---- <<//

export function em$run() {
    printf`state = %d\n`(AppButEdge.getState())
}