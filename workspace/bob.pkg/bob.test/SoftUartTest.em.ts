import em from '@$$em-script'
export const em$_U = em.declare('MODULE')

import TxPin from '@bob.test/GpioMock.em'
import SoftUart from '@em.utils/SoftUart.em'

namespace em$meta {
    export function em$configureM() {
        console.log('configure')
        SoftUart.x_TxPin.setM(TxPin)
    }
}

export default { em$_U, ...em$meta }
