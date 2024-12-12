import em from '@EM-SCRIPT'
export const em$_U = em.declare('MODULE')

import * as BoardC from '@bob.test/BoardC.em'

import Common from '@em.mcu/Common.em'
import SoftUart from '@em.utils/SoftUart.em'

console.log(BoardC.AppLed.em$_U)
SoftUart.x_TxPin.getM().clear()
// console.log(SoftUart.em$_U )
// console.log(em.$units())
