import em from '@$$emscript'
export const $U = em.$declare('MODULE')

import * as GlobalInterruptsI from '@em.hal/GlobalInterruptsI.em'

let key: GlobalInterruptsI.Key

export function em$run() {
    key = 0
}
