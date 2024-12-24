import em from '@$$emscript'
export const em$_U = em.declare('MODULE')

import * as BoardC from '@bob.scratch/BoardC.em'

export const Pin = em.delegate(BoardC.AppLedPin)

export namespace em$meta {
    export function em$construct() {
        console.log((Pin as any).prx.em$_U.uid)
    }
}

export function em$run() {
    Pin.$$.makeOutput()
    Pin.$$.set()
}
