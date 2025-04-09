import em from '@$$emscript'
export const $U = em.$declare('MODULE')

import * as Common from '@em.mcu/Common.em'
import * as Idle from '@ti.mcu.cc23xx/Idle.em'
import * as IntrVec from '@em.arch.arm/IntrVec.em'
import * as RadioConfig from '@ti.radio.cc23xx/RadioConfig.em'
import * as RfCtrl from '@ti.radio.cc23xx/RfCtrl.em'
import * as RfFifo from '@ti.radio.cc23xx/RfFifo.em'
import * as RfFreq from '@ti.radio.cc23xx/RfFreq.em'
import * as RfPatch from '@ti.radio.cc23xx/RfPatch.em'
import * as RfPower from '@ti.radio.cc23xx/RfPower.em'
import * as RfRegs from '@ti.radio.cc23xx/RfRegs.em'
import * as RfTrim from '@ti.radio.cc23xx/RfTrim.em'
import * as RfXtal from '@ti.radio.cc23xx/RfXtal.em'

export type Handler = cb_t<[]>

enum State {
    IDLE, SETUP, READY, RX, TX, CS, CW
}

export namespace em$meta {
    export function em$construct() {
        IntrVec.em$meta.useIntr('LRFD_IRQ0')
    }
}

//>> ---- em$targ ---- <<//

var cur_state = State.IDLE
var rx_timeout = false

export function disable() {
    setState(State.IDLE)
    RfCtrl.disable()
    RfXtal.disable()
}

export function enable() {
    setState(State.SETUP)
    RfXtal.enable()
    RfCtrl.enableClocks()
    RfPatch.loadAll()
    RfXtal.waitReady()
    RfRegs.setup()
}

function setState(s: State) {
    // em.@"%%[a:]"(@intFromEnum(s));
    cur_state = s
}


