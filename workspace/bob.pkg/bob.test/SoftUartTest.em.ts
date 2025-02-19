import em from '@$$emscript'
export const $U = em.$declare('MODULE')

import * as BoardC from '@$distro/BoardC.em'

import SoftUart from '@em.utils/SoftUart.em'

namespace em$meta {
    export function em$configure() {
        SoftUart.TxPinX.$$ = BoardC.AppOutPin
    }
}

export default { $U, ...em$meta }
