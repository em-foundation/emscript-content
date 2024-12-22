import em from '@$$emscript'
export const em$_U = em.declare('MODULE')

import BusyWait from '@bob.test/BusyWait.em'
import Pin from '@bob.test/AppLedPin.em'

namespace em$targ {
    export function em$run() {
        Pin.makeOutput()
        for (let i = 0; i < 10; i++) {
            Pin.toggle()
            BusyWait.wait(100_000)
        }
        Pin.set()
    }
}

export default { em$_U, ...em$targ }
