import em from '@EM-SCRIPT'
export const em$_U = em.declare('COMPOSITE')

import * as LedT from '@em.utils/LedT.em'

export const AppLed = LedT.em$clone()
export const SysLed = LedT.em$clone()

export function em$configureM(): void {
}

// console.log(LedT.em$_T)
// console.log(AppLed.em$_U)
