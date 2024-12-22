import em from '@$$emscript'
export const em$_U = em.declare('MODULE')

import Pin from '@bob.test/AppLedPin.em'

namespace em$targ {
    export function em$run() {
        Pin.makeOutput()
        Pin.set()
    }
}

export default { em$_U, ...em$targ }
