import em from '@$$emscript'
export const em$_U = em.declare('MODULE')

import * as BoardC from '@ti.distro.cc23xx/BoardC.em'
import * as LedT from '@em.utils/LedT.em'

export const AppLed = em.Delegate(BoardC.AppLed)
export const SysLed = em.Delegate(BoardC.SysLed)

export function em$run() {
    AppLed.$$.wink(500)
    SysLed.$$.on()
}
