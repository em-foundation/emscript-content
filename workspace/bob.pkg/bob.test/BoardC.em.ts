import em from '@EM-SCRIPT'
let em$_U = em.declare('COMPOSITE')

import * as LedT from '@em.utils/LedT.em'

export const AppLed = LedT.em$clone()
export const SysLed = LedT.em$clone()

export function em$configureM(): void {
}

