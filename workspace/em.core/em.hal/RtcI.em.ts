import em from '@$$emscript'
export const $U = em.$declare('INTERFACE')

import * as T from '@em.utils/TimeTypes.em'

export type Handler = cb_t<[]>

export interface $I {
    disable(): void
    enable(thresh: T.RtcThresh, handler: Handler): void
    getRawTime(): T.RawTime
    toThresh(secs: T.Secs24p8): T.RtcThresh
}