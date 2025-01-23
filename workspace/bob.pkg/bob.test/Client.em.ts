import em from '@$$emscript'
export const em$_U = em.$declare('MODULE')

import * as BoardC from '@$distro/BoardC.em'

const em$_C = {}

namespace em$meta {
    export function em$construct() {
        // console.log(em$_U)
        // console.log(BoardC.AppLed.x_Pin)
    }
}

namespace em$targ {}

export default { em$_U, ...em$meta /*, ...em$targ */ }
