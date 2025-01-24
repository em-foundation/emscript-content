import em from '@$$emscript'
export const $U = em.$declare('MODULE')

export class RawTime extends $struct {
    secs: u32
    subs: u32
}

export type Secs24p8 = u32

export function RawSubsToMsecs(subs: u32): u32 {
    return ((subs >> 16) * 1000) / 65536
}

export function Secs24p8_initMsecs(msecs: u32): Secs24p8 {
    return (msecs * 32) / 125
}

export function Secs24p8_ZERO(): Secs24p8 {
    return 0
}
