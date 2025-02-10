import em from '@$$emscript'
export const $U = em.$declare('MODULE')

import * as BoardC from '@$distro/BoardC.em'

export const Pin = em.$delegate(BoardC.AppLedPin)

export namespace em$meta {
    export function em$construct() {
        console.log((Pin as any).prx.$U.uid)
    }
}

export function em$run() {
    Pin.$$.makeOutput()
    Pin.$$.set()
}
