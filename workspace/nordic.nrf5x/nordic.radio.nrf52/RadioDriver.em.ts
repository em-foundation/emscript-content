import em from '@$$emscript'
export const $U = em.$declare('MODULE')

import * as $R from '@nordic.distro.nrf52/REGS.em'

import * as Idle from '@nordic.mcu.nrf52/Idle.em'
import * as IntrVec from '@em.arch.arm/IntrVec.em'

enum State {
    IDLE, SETUP, READY, RX, TX, CS, CW
}

export namespace em$meta {
    export function em$construct() {
        IntrVec.em$meta.useIntr('RADIO')
    }
}

//>> ---- em$targ ---- <<//

var cur_state: volatile_t<State> = State.IDLE

export function disable() {
    $R.RADIO.TASKS_DISABLE.$$ = 1
    setState(State.IDLE)
}

export function enable() {
    $R.RADIO.SHORTS.$$ = $R.RADIO_SHORTS_READY_START_Enabled | $R.RADIO_SHORTS_END_DISABLE_Enabled
    $R.RADIO.MODE.$$ = $R.RADIO_MODE_MODE_Nrf_1Mbit
    $R.RADIO.BASE0.$$ = 0xABABABAB
    $R.RADIO.PREFIX0.$$ = 0xAB
    $R.RADIO.PCNF0.$$ = (8 << $R.RADIO_PCNF0_LFLEN_Pos)
    $R.RADIO.PCNF1.$$ = (240 << $R.RADIO_PCNF1_MAXLEN_Pos)
        | (2 << $R.RADIO_PCNF1_BALEN_Pos) | $R.RADIO_PCNF1_ENDIAN_Big | $R.RADIO_PCNF1_WHITEEN_Disabled
    setState(State.READY)
}

function setState(s: State) {
    // $['%%c:'](s)
    cur_state = s
}

export function startCw(chan: u8, power: i8) {
    setState(State.CW)
    $R.RADIO.SHORTS.$$ = $R.RADIO_SHORTS_READY_START_Enabled
    $R.RADIO.TXPOWER.$$ = $R.RADIO_TXPOWER_TXPOWER_Pos4dBm
    $R.RADIO.FREQUENCY.$$ = 40
    $R.RADIO.TASKS_TXEN.$$ = 1
}

export function startRx(pkt: frame_t<u8>, chan: u8) {
    setState(State.RX)
    $R.RADIO.PACKETPTR.$$ = <u32>(e$`&pkt[0]`)
    $R.RADIO.FREQUENCY.$$ = 40
    $R.RADIO.RXADDRESSES.$$ = $R.RADIO_RXADDRESSES_ADDR0_Msk
    $R.RADIO.INTENSET.$$ = $R.RADIO_INTENSET_END_Msk
    $R.RADIO.TASKS_RXEN.$$ = 1
    IntrVec.NVIC_enable(e$`RADIO_IRQn`)
}

export function startTx(pkt: frame_t<u8>, chan: u8, power: i8) {
    setState(State.TX)
    $R.RADIO.PACKETPTR.$$ = <u32>(e$`&pkt[0]`)
    $R.RADIO.TXPOWER.$$ = $R.RADIO_TXPOWER_TXPOWER_Pos4dBm
    $R.RADIO.FREQUENCY.$$ = 40
    $R.RADIO.TXADDRESS.$$ = 0
    $R.RADIO.INTENSET.$$ = $R.RADIO_INTENSET_END_Msk
    $R.RADIO.TASKS_TXEN.$$ = 1
    IntrVec.NVIC_enable(e$`RADIO_IRQn`)
}

export function waitReady() {
    Idle.setPauseOnly(true)
    while (cur_state != State.READY) {
        Idle.exec()
    }
    Idle.setPauseOnly(false)
}

export function RADIO_isr$$() {
    // $['%%a']
    // $['%%>'](<u8>$R.RADIO.STATE.$$)
    // $['%%>'](<u16>$R.RADIO.INTENSET.$$)
    IntrVec.NVIC_clear(e$`RADIO_IRQn`)
    $R.RADIO.INTENCLR.$$ = $R.RADIO.INTENSET.$$
    setState(State.READY)
}