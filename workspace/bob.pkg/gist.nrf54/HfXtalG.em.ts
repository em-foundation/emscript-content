import em from '@$$emscript'
export const $U = em.$declare('MODULE')

import * as Common from '@em.mcu/Common.em'
import * as HfXtal from '@nordic.mcu.nrf54/HfXtal.em'

export namespace em$meta { }

//>> ---- em$targ ---- <<//

export function em$run() {
    Common.GlobalInterrupts.$$.enable()
    HfXtal.start()
    HfXtal.wait()
    HfXtal.stop()
    Common.BusyWait.$$.wait(100000)
    $['%%d']
    HfXtal.start()
    HfXtal.wait()
    HfXtal.stop()
}