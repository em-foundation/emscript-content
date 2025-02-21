import em from '@$$emscript'
export const $U = em.$declare('MODULE')

export const hoursPerDay = 24
export const minutesPerHour = 60
export const secondsPerMinute = 60
export const secondsPerHour = minutesPerHour * secondsPerMinute
export const secondsPerDay = hoursPerDay * secondsPerHour
export const millisecondsPerSecond = 1000

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
    time_parts.days = rawTime.secs / secondsPerDay
    time_parts.hours = (rawTime.secs % secondsPerDay) / secondsPerHour
    time_parts.minutes = (rawTime.secs % secondsPerHour) / secondsPerMinute
    time_parts.seconds = rawTime.secs % secondsPerMinute
    time_parts.milliseconds = RawSubsToMsecs(rawTime.subs)
    return time_parts
}
