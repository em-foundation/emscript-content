import '@$$emscript'
export const $U = $declare('MODULE')

import * as BoardC from '@$distro/BoardC.em'

const AppButPin = $delegate(BoardC.AppButPin)

export namespace em$meta { }

//>> ---- em$targ ---- <<//

export function em$run() {
    AppButPin.makeInput()
    printf`%d %d\n`(AppButPin.isInput(), AppButPin.get())
}