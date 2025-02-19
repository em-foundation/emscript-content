import em from '@$$emscript'
export const $U = em.$declare('MODULE')

import * as FiberMgr from '@em.utils/FiberMgr.em'
import * as TimeTypes from '@em.utils/TimeTypes.em'
import * as WakeupTimerI from '@em.hal/WakeupTimerI.em'

export const WakeupTimer = $proxy<WakeupTimerI.$I>()

export type Obj = ref_t<Alarm>

type Secs24p8 = TimeTypes.Secs24p8
type Thresh = WakeupTimerI.Thresh

class Alarm extends $struct {
    _fiber: FiberMgr.Obj
    _thresh: Thresh
    _dt_secs: Secs24p8
    cancel: () => void
    isActive: () => bool_t
    wakeup: (delta: Secs24p8) => void
    wakeupAligned: (delta: Secs24p8) => void
}
let AlarmFac = $factory(Alarm.$make())

export namespace em$meta {

    export function create(fiber: FiberMgr.Obj): Obj {
        let alarm = AlarmFac.$create()
        alarm.$$._fiber = fiber
        return alarm
    }
}

var cur_alarm = <Obj>$null

function dispatch(delta: Secs24p8) {
    WakeupTimer.$$.disable()
    let nxt_alarm = <Obj>$null
    let max_dt_secs = ~(<Secs24p8>0)
    for (let a of AlarmFac) { // iterate through all alarms
        if (a.$$._dt_secs == 0) continue // INACTIVE state
        a.$$._dt_secs -= (delta > a.$$._dt_secs) ? a.$$._dt_secs : delta
        if (a.$$._dt_secs == 0) { // RINGING state
            a.$$._fiber.$$.post() // becomes INACTIVE after post
            continue
        }
        if (a.$$._dt_secs <= max_dt_secs) { // ACTIVE state
            nxt_alarm = a // best candidate
            max_dt_secs = a.$$._dt_secs
        }
    }
    cur_alarm = nxt_alarm // $null if no candidates found
    if (cur_alarm) WakeupTimer.$$.enable(cur_alarm.$$._thresh, $cb(wakeupHandler))
}

function setup(alarm: Obj, delta: Secs24p8) {
    alarm.$$._thresh = WakeupTimer.$$.secsToThresh(delta)
    alarm.$$._dt_secs = delta
    dispatch(0)
}

function wakeupHandler() {
    dispatch(cur_alarm.$$._dt_secs)
}

function Alarm__cancel(self: Obj) {
    self.$$._dt_secs = 0 // make inactive
}

function Alarm__isActive(self: Obj): bool_t {
    return self.$$._dt_secs != 0
}

function Alarm__wakeup(self: Obj, delta: Secs24p8) {
    setup(self, delta)
}

function Alarm__wakeupAligned(self: Obj, delta: Secs24p8) {
    setup(self, WakeupTimer.$$.secsAligned(delta))
}
