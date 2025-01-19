import em from '@$$emscript'
export const em$_U = $declare('MODULE')

import * as Pin from '@bob.scratch/AppLedPin.em'

export function em$run() {
    Pin.makeOutput()
    Pin.set()
}
