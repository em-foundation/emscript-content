import em from '@$$emscript'
export const em$_U = em.declare('MODULE')

import * as BoardC from '@bob.scratch/BoardC.em'
import * as GpioI from '@em.hal/GpioI.em'

export const SysLedPin = new em.proxy<GpioI.em$_I>()

export namespace em$meta {
    export function em$configure() {
        SysLedPin.$bind(BoardC.SysLedPin)
    }
}

export function em$run() {
    SysLedPin.$$.makeOutput()
    SysLedPin.$$.set()
}
