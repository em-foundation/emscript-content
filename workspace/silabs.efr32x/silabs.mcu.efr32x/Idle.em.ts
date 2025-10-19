import '@$$emscript'
export const $U = $declare('MODULE', IdleI)

import * as IdleI from '@em.hal/IdleI.em'

export type SleepCB = cb_t<[]>

export namespace em$meta {
    export function addSleepEnter(cb: SleepCB) {
    }

    export function addSleepLeave(cb: SleepCB) {
    }

}

//>> ---- em$targ ---- <<//

export function exec() {
}

export function wakeup() { }
