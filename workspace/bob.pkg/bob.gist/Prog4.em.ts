import em from '@$$emscript'
export const em$_U = em.declare('MODULE')

import * as BusyWait from '@ti.mcu.cc23xx/BusyWait.em'
import * as Common from '@em.mcu/Common.em'

export namespace em$meta {
    export function em$configure() {
        Common.BusyWait.$bind(BusyWait)
    }
}

export function em$run() {
    em.halt()
}
