import em from '@$$emscript'
export const em$_U = em.$declare('MODULE')

import * as em$_R from '@ti.distro.cc23xx/REGS.em'
import * as IntrVec from '@em.arch.arm/IntrVec.em'
import * as TimeTypes from '@em.utils/TimeTypes.em'

export namespace em$meta {
    export function em$construct() {
        IntrVec.em$meta.useIntr('CPUIRQ0')
    }
}

export type Handler = cb_t<[]>

const MSECS_SCALAR = <u16>(1000 / 8)
const RES_BITS = <u8>20

var cur_hlr = <Handler>$null

export function em$startup() {
    em$_R.CKMD.LFINCOVR.$$ = 0x8000_0000 + (1 << RES_BITS)
    em$_R.RTC.CTL.$$ = em$_R.RTC_CTL_RST
    em$_R.EVTSVT.CPUIRQ0SEL.$$ = em$_R.EVTSVT_CPUIRQ0SEL_PUBID_AON_RTC_COMB
    IntrVec.NVIC_enable(e$`CPUIRQ0_IRQn`)
}

export function disable() {
    cur_hlr = $null
    em$_R.RTC.IMCLR.$$ = em$_R.RTC_IMCLR_EV0
}

export function enable(thresh: u32, handler: Handler) {
    cur_hlr = handler
    em$_R.RTC.CH0CC8U.$$ = thresh
    em$_R.RTC.IMSET.$$ = em$_R.RTC_IMSET_EV0
}

export function getRawTime(): TimeTypes.RawTime {
    let lo: u32
    let hi: u32
    while (true) {
        lo = em$_R.RTC.TIME8U.$$
        hi = em$_R.RTC.TIME524M.$$
        if (lo == em$_R.RTC.TIME8U.$$) break
    }
    let res = TimeTypes.RawTime.$make()
    res.secs = hi
    res.subs = lo
    return res
}

export function toThresh(ticks: u32): u32 {
    return em$_R.RTC.TIME8U.$$ + ticks
}

export function CPUIRQ0_isr$$() {
    em$_R.RTC.ICLR.$$ = em$_R.RTC_ICLR_EV0
    if (cur_hlr != $null) cur_hlr()
}
