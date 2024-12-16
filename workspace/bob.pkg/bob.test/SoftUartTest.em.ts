import em from '@$$em-script'
export const em$_U = em.declare('MODULE')

import * as BoardC from '@ti.distro.cc23xx/BoardC.em'

import SoftUart from '@em.utils/SoftUart.em'

namespace em$meta {
    export function em$configureM() {
        console.log('configure')
        SoftUart.x_TxPin.$(BoardC.AppOutPin)
    }
}

export default { em$_U, ...em$meta }
