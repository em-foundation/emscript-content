import em from '@$$em-script'
export const em$_U = em.declare('MODULE')

import * as BoardC from '@ti.distro.cc23xx/BoardC.em'

const em$_C = {}

namespace em$meta {
    export function em$constructM() {
        // console.log(em$_U)
        // console.log(BoardC.AppLed.x_Pin)
    }
}

namespace em$targ {}

export default { em$_U, ...em$meta /*, ...em$targ */ }
