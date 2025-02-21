import em from '@$$emscript'
export const $U = em.$declare('MODULE')

export const hours_per_day = 24
export const minutes_per_hour = 60
export const seconds_per_minute = 60
export const seconds_per_hour = minutes_per_hour * seconds_per_minute
export const seconds_per_day = hours_per_day * seconds_per_hour
export const milliseconds_per_second = 1000

export class RawTime extends $struct {
    secs: u32
    subs: u32
}

export class TimeParts extends $struct {
    days: u32
    hours: u32
    minutes: u32
    seconds: u32
    milliseconds: u32
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

export function RawTimeToTimeParts(rawTime: RawTime): TimeParts {
    let time_parts = TimeParts.$make()
    time_parts.days = rawTime.secs / seconds_per_day
    time_parts.hours = (rawTime.secs % seconds_per_day) / seconds_per_hour
    time_parts.minutes = (rawTime.secs % seconds_per_hour) / seconds_per_minute
    time_parts.seconds = rawTime.secs % seconds_per_minute
    time_parts.milliseconds = RawSubsToMsecs(rawTime.subs)
    return time_parts
}
