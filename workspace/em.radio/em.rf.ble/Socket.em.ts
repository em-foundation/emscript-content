import em from '@$$emscript'
export const $U = em.$declare('MODULE')

import * as Dev from '@em.rf.core/Dev.em'
import * as Registry from '@em.rf.core/Registry.em'
import * as Types from '@em.rf.ble/Types.em'

export namespace em$meta { }

//>> ---- em$targ ---- <<//

const ALL_ADV_CHANS = 0x7
const NUM_ADV_CHANS = 3

enum State {
    ADV_PAUSE, ADV_SCAN, CONN, CONN_PAUSE, EXCH, IDLE
}

var rx_buf = $table<u8>('rw', 40)
var tx_buf = $table<u8>('rw', 40)

var adv_con_flag: bool_t
var adv_count: u16
var adv_inter: u16
var adv_mask: u8
var adv_power: i8
var cur_adv_chan: u8
var cur_state: State = State.IDLE
var recv_done: Dev.RecvDoneFxn

export function recvMsg(on_done: Dev.RecvDoneFxn) {
    recv_done = on_done
    if (cur_state == State.IDLE) {
        const params = Registry.getParams()
        adv_con_flag = params.$$.ble_connectible
        adv_count = params.$$.send_count
        adv_mask = params.$$.ble_adv_chan_mask ? params.$$.ble_adv_chan_mask : ALL_ADV_CHANS
        adv_inter = params.$$.send_interval_ms
        adv_power = params.$$.radio_power
        cur_adv_chan = 0
        setState(State.ADV_PAUSE)
        controller()
    }

}

function controller() {
    while (true) {
        switch (cur_state) {
            case State.ADV_PAUSE: {
                radioOff()
                radioOn()
                setState(State.ADV_SCAN)
                break
            }
            case State.ADV_SCAN: {
                break
            }
        }
    }
}

function radioOff() {

}

function radioOn() {

}

function setState(s: State) {
    cur_state = s
}