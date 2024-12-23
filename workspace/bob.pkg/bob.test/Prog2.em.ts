import em from '@$$emscript'
export const em$_U = em.declare('MODULE')

import * as BusyWait from '@bob.test/BusyWait.em'
import * as Pin from '@bob.test/AppLedPin.em'

export function em$run() {
    Pin.makeOutput()
    for (let i = 0; i < 10; i++) {
        Pin.toggle()
        BusyWait.wait(500_000)
    }
    Pin.set()
}
