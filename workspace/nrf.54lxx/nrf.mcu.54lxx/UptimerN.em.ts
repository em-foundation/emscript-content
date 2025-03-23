import em from '@$$emscript'
export const $U = em.$declare('MODULE', UptimerI)

import * as TimeTypes from '@em.utils/TimeTypes.em'
import * as UptimerI from '@em.hal/UptimerI.em'

export function read(): TimeTypes.RawTime {
    return TimeTypes.RawTime_ZERO()
}
