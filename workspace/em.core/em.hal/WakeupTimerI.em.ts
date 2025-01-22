import em from '@$$emscript'
export const em$_U = em.$declare('INTERFACE')

import * as TimeTypes from '@em.utils/TimeTypes.em'

export type Handler = cb_t<[]>
export type Secs24p8 = TimeTypes.Secs24p8
export type Thresh = u32

export interface em$_I {
    disable(): void
    enable(thresh: Thresh, handler: Handler): void
    secsAligned(secs: Secs24p8): Secs24p8
    secsToThresh(secs: Secs24p8): Thresh
}
