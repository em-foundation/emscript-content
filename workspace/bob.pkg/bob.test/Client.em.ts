import em from '@$$em-script'
export const em$_U = em.declare('MODULE')

import * as BoardC from '@ti.distro.cc23xx/BoardC.em'

const em$config = {}

namespace em$meta {
    export function em$configureM() {
        console.log('Client')
    }
}

namespace em$targ {}

export default { em$_U, ...em$meta /*, ...em$targ */ }
