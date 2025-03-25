import em from '@$$emscript'
export const $U = em.$declare('MODULE')

import * as $R from '@nrf.distro.54lxx/REGS.em'

import * as IntrVec from '@em.arch.arm/IntrVec.em'
import * as TimeTypes from '@em.utils/TimeTypes.em'

export type Handler = cb_t<[]>

export namespace em$meta {
    export function em$construct() {
        IntrVec.em$meta.useIntr('GRTC_0')
    }
}

//>> ---- em$targ ---- <<//

var cur_hlr = <Handler>$null

export function em$startup() {
    $R.GRTC.MODE.$$ = $R.GRTC_MODE_SYSCOUNTEREN_Msk
    $R.GRTC.TASKS_START.$$ = 1
    IntrVec.NVIC_enable(e$`GRTC_0_IRQn`)
}

export function disable() {
    cur_hlr = $null
    $R.GRTC.INTENCLR0.$$ = 1
}

export function enable(thresh: u32, handler: Handler) {
    cur_hlr = handler
    const hi_lo = readHiLo()
    const lo_cc = (thresh & 0xFFFFFF) << 12
    const hi_cc = thresh >> 24
    $R.GRTC.EVENTS_COMPARE[0].$$ = 0
    $R.GRTC.CC[0].CCL.$$ = lo_cc
    $R.GRTC.CC[0].CCH.$$ = hi_cc
    $R.GRTC.CC[0].CCEN.$$ = 1
    $R.GRTC.INTENSET0.$$ = 1
}

export function getRawTime(): TimeTypes.RawTime {
    let res = TimeTypes.RawTime.$make()
    const hi_low: u64 = readHiLo()
    res.secs = <u32>(hi_low >> 20)
    res.subs = <u32>(((hi_low & 0xFFFFF) * 256) >> 12 << 24)
    return res
}

function readHiLo(): u64 {
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
    const hi_lo: u64 = (<u64>hi << 32) | lo
    return hi_lo
}

export function toThresh(delta: TimeTypes.Secs24p8): u32 {
    const cur_64 = readHiLo()
    const fut_64 = (cur_64 >> 12) + delta
    const fut_32 = <u32>(fut_64 & 0xFFFFFFFF)
    return fut_32
    // // printf`lo = %08x\n`(<u32>cur)
    // $['%%>'](<u32>cur)
    // const fut_32 = <u32>(((cur >> 12) + delta) & 0xFFFFFFFF)
    // $['%%>'](fut_32)
    // return fut_32
}

export function GRTC_0_isr$$() {
    $['%%a']
    IntrVec.NVIC_clear(e$`GRTC_0_IRQn`)
    const hlr = cur_hlr
    disable()
    if (hlr != $null) hlr()
}
