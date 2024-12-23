import em from '@$$emscript'
export const em$_U = em.declare('MODULE')

import * as Pin from '@bob.test/AppLedPin.em'

export function em$run() {
    Pin.makeOutput()
    Pin.set()
}
