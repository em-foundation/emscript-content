import em from '@$$emscript'
export const $U = em.$declare('MODULE')

import * as $R from '@nrf.distro.54lxx/REGS.em'

import * as TimeTypes from '@em.utils/TimeTypes.em'

export namespace em$meta { }

//>> ---- em$targ ---- <<//

export function em$startup() {
    $R.GRTC.MODE.$$ = $R.GRTC_MODE_SYSCOUNTEREN_Msk
    $R.GRTC.TASKS_START.$$ = 1
}

export function getRawTime(): TimeTypes.RawTime {
    let lo: u32
    let hi: u32
    while (true) {
        lo = $R.GRTC.SYSCOUNTER[1].SYSCOUNTERL.$$
        const hi_reg = $R.GRTC.SYSCOUNTER[1].SYSCOUNTERH.$$
        hi = hi_reg & $R.GRTC_SYSCOUNTER_SYSCOUNTERH_VALUE_Msk
        if ((hi & $R.GRTC_SYSCOUNTER_SYSCOUNTERH_OVERFLOW_Msk) != 0) {
            hi - + 1
        }
        if ((hi_reg & $R.GRTC_SYSCOUNTER_SYSCOUNTERH_BUSY_Msk) == 0) break
    }
    let res = TimeTypes.RawTime.$make()
    const hi_low: u64 = (<u64>hi << 32) | lo
    res.secs = <u32>(hi_low >> 20)
    res.subs = <u32>(((hi_low & 0xFFFFF) * 256) >> 12 << 24)
    return res
}
