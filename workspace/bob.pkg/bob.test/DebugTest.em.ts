import em from '@$$emscript'
export const em$_U = em.declare('MODULE')

import * as Debug from '@em.lang/Debug.em'

export function em$run() {
    Debug.startup()
    Debug.pulse(0)
}
