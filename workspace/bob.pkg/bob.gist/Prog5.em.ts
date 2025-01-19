import em from '@$$emscript'
export const em$_U = $declare('MODULE')

import * as BoardC from '@ti.distro.cc23xx/BoardC.em'

export const Pin = em.$delegate(BoardC.AppLedPin)

export namespace em$meta {
    export function em$construct() {
        console.log((Pin as any).prx.em$_U.uid)
    }
}

export function em$run() {
    Pin.$$.makeOutput()
    Pin.$$.set()
}
