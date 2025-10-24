import '@$$emscript'
export const $U = $declare('MODULE')

import * as Common from '@em.mcu/Common.em'
import * as Rtc from '@silabs.mcu.efr32x/Rtc.em'
import * as T from '@em.utils/TimeTypes.em'

export namespace em$meta { }

//>> ---- em$targ ---- <<//

export function em$run() {
    $['%%d+']
    Common.BusyWait.wait(1_500_000)
    $['%%d-']
    const raw = Rtc.getRawTime()
    printf`%ds, %dus\n`(raw.secs, T.RawSubsToUsecs(raw.subs))
}