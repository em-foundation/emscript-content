import em from '@$$emscript'
export const em$_U = em.declare('MODULE')

import * as GlobalInterruptsI from '@em.hal/GlobalInterruptsI.em'

export function disable(): GlobalInterruptsI.Key {
    return 0
}

export function enable() {
    return
}

export function isEnabled(): em.bool_t {
    return false
}

export function restore(key: GlobalInterruptsI.Key) {
    return
}
