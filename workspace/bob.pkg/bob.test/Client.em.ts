import em from '@EM-SCRIPT'
export const em$_U = em.declare('MODULE')

import * as BoardC from '@ti.distro.cc23xx/BoardC.em'

const em$config = {}

namespace em$meta {
    export function em$configureM() {
        console.log('Client')
        BoardC.AppLed.em$_U.used()
        console.log(BoardC.AppLed.em$_U)
    }
}

namespace em$targ {}

export default { em$_U, ...em$meta /*, ...em$targ */ }
