import em from '@$$emscript'
export const $U = em.$declare('MODULE')

import * as $R from '@ti.distro.cc23xx/REGS.em'

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

import * as LRF from '@ti.radio.cc23xx/LRF.em'

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
    em.$reg32[$R.LRFDRFE_BASE + $R.LRFDRFE_O_RSSI] = 127
    em.$reg16[$R.LRFD_BUFRAM_BASE + $R.PBE_COMMON_RAM_O_FIFOCMDADD] = <u16>(($R.LRFDPBE_BASE + $R.LRFDPBE_O_FCMD) & 0x0FFF) >> 2
    RfTrim.apply()
    switch (RadioConfig.getPhy()) {
        case RadioConfig.Phy.BLE_1M:
            em.$reg32[$R.LRFDPBE32_BASE + $R.LRFDPBE32_O_MDMSYNCA] = 0x8E89_BED6
            em.$reg32[$R.LRFD_BUFRAM_BASE + $R.PBE_BLE5_RAM_O_CRCINITL] = (0x555555 << 8)
            em.$reg16[$R.LRFD_BUFRAM_BASE + $R.PBE_BLE5_RAM_O_EXTRABYTES] = 6 // stat + rssi + timestamp
            em.$reg16[$R.LRFD_BUFRAM_BASE + $R.PBE_BLE5_RAM_O_OWNADRL] = 0xAAAA
            em.$reg16[$R.LRFD_BUFRAM_BASE + $R.PBE_BLE5_RAM_O_OWNADRM] = 0xBBBB
            em.$reg16[$R.LRFD_BUFRAM_BASE + $R.PBE_BLE5_RAM_O_OWNADRH] = 0xCCCC
            em.$reg16[$R.LRFD_BUFRAM_BASE + $R.PBE_BLE5_RAM_O_ADVCFG] = 0
            em.$reg16[$R.LRFD_BUFRAM_BASE + $R.PBE_BLE5_RAM_O_FILTPOLICY] = 0
            em.$reg16[$R.LRFD_BUFRAM_BASE + $R.PBE_BLE5_RAM_O_RPACONNECT] = 0
            em.$reg16[$R.LRFD_BUFRAM_BASE + $R.PBE_BLE5_RAM_O_RPACONNECT] = 0
            em.$reg16[$R.LRFD_BUFRAM_BASE + $R.PBE_BLE5_RAM_O_FL1MASK] = 0
            em.$reg16[$R.LRFD_BUFRAM_BASE + $R.PBE_BLE5_RAM_O_FL2MASK] = 0
            em.$reg16[$R.LRFD_BUFRAM_BASE + $R.PBE_BLE5_RAM_O_OPCFG] = 0
            break
        case RadioConfig.Phy.PROP_1M:
        case RadioConfig.Phy.PROP_250K:
            em.$reg32[$R.LRFDPBE32_BASE + $R.LRFDPBE32_O_MDMSYNCA] = 0x7B8A_D0C9 // scramble(0x930B_51DE)
            break
    }
    setState(State.READY)
}

function freqFromChan(chan: u32): u32 {
    const BASE = 2_404_000_000
    const SPACE = 2_000_000
    return (chan >= 0 && chan <= 10) ? BASE + (chan * SPACE) :
        (chan >= 11 && chan <= 36) ? BASE + (chan * SPACE) + SPACE :
            (chan == 37) ? 2_402_000_000 :
                (chan == 38) ? 2_426_000_000 :
                    (chan == 39) ? 2_480_000_000 :
                        0
}


function setState(s: State) {
    // em.@"%%[a:]"(@intFromEnum(s))
    cur_state = s
}

export function startCs(chan: u8, timeout: u16) {
    setState(State.CS)
    RfCtrl.enableImages()
    const cfg_val: u32 =
        (0 << $R.PBE_GENERIC_RAM_OPCFG_RXFILTEROP_S) |
        (1 << $R.PBE_GENERIC_RAM_OPCFG_RXINCLUDEHDR_S) |
        (1 << $R.PBE_GENERIC_RAM_OPCFG_RXREPEATNOK_S) |
        (0 << $R.PBE_GENERIC_RAM_OPCFG_START_S) |
        // (1 << $R.PBE_GENERIC_RAM_OPCFG_FS_NOCAL_S) |
        // (1 << $R.PBE_GENERIC_RAM_OPCFG_FS_KEEPON_S) |
        (1 << $R.PBE_GENERIC_RAM_OPCFG_NEXTOP_S) |
        (1 << $R.PBE_GENERIC_RAM_OPCFG_SINGLE_S) |
        (0 << $R.PBE_GENERIC_RAM_OPCFG_IFSPERIOD_S) |
        (0 << $R.PBE_GENERIC_RAM_OPCFG_RXREPEATOK_S) |
        (0 << $R.PBE_GENERIC_RAM_OPCFG_RFINTERVAL_S)
    em.$reg16[$R.LRFD_BUFRAM_BASE + $R.PBE_GENERIC_RAM_O_OPCFG] = <u16>cfg_val
    em.$reg16[$R.LRFD_BUFRAM_BASE + $R.PBE_GENERIC_RAM_O_NESB] = $R.PBE_GENERIC_RAM_NESB_NESBMODE_OFF
    em.$reg16[$R.LRFD_BUFRAM_BASE + $R.PBE_GENERIC_RAM_O_MAXLEN] = 32 // TODO
    em.$reg16[$R.LRFD_BUFRAM_BASE + $R.PBE_GENERIC_RAM_O_RXTIMEOUT] = timeout * 4
    em.$reg16[$R.LRFD_BUFRAM_BASE + $R.PBE_GENERIC_RAM_O_FIRSTRXTIMEOUT] = timeout * 4
    RfFreq.program(freqFromChan(chan))
    $R.LRFDDBELL.IMASK0.$$ |= e$`LRF_EventOpDone` | e$`LRF_EventOpError`
    IntrVec.NVIC_enable(e$`LRFD_IRQ0_IRQn`)
    while (em.$reg32[$R.LRFD_BUFRAM_BASE + $R.PBE_COMMON_RAM_O_MSGBOX] == 0) { }
    $R.SYSTIM.CH2CC.$$ = $R.SYSTIM.TIME250N.$$
    $R.LRFDPBE.API.$$ = $R.PBE_GENERIC_REGDEF_API_OP_RX
}

export function startCw(chan: u8, power: i8) {
    setState(State.CW)
    RfPower.program(power)
    RfCtrl.enableImages()
    const cfg_val: u32 =
        (1 << $R.PBE_GENERIC_RAM_OPCFG_TXINFINITE_S) |
        (1 << $R.PBE_GENERIC_RAM_OPCFG_TXPATTERN_S) |
        (0 << $R.PBE_GENERIC_RAM_OPCFG_TXFCMD_S) |
        (0 << $R.PBE_GENERIC_RAM_OPCFG_START_S) |
        // (1 << $R.PBE_GENERIC_RAM_OPCFG_FS_NOCAL_S) |
        // (1 << $R.PBE_GENERIC_RAM_OPCFG_FS_KEEPON_S) |
        (0 << $R.PBE_GENERIC_RAM_OPCFG_RXREPEATOK_S) |
        (0 << $R.PBE_GENERIC_RAM_OPCFG_NEXTOP_S) |
        (1 << $R.PBE_GENERIC_RAM_OPCFG_SINGLE_S) |
        (0 << $R.PBE_GENERIC_RAM_OPCFG_IFSPERIOD_S) |
        (0 << $R.PBE_GENERIC_RAM_OPCFG_RFINTERVAL_S)
    em.$reg16[$R.LRFD_BUFRAM_BASE + $R.PBE_GENERIC_RAM_O_OPCFG] = <u16>cfg_val
    em.$reg16[$R.LRFD_BUFRAM_BASE + $R.PBE_GENERIC_RAM_O_NESB] = ($R.PBE_GENERIC_RAM_NESB_NESBMODE_OFF)
    em.$reg16[$R.LRFD_BUFRAM_BASE + $R.PBE_GENERIC_RAM_O_PATTERN] = 0
    $R.LRFDMDM.MODCTRL.$$ |= $R.LRFDMDM_MODCTRL_TONEINSERT_M
    RfFreq.program(freqFromChan(chan))
    $R.LRFDDBELL.IMASK0.$$ |= e$`LRF_EventOpDone` | e$`LRF_EventOpError`
    while (em.$reg32[$R.LRFD_BUFRAM_BASE + $R.PBE_COMMON_RAM_O_MSGBOX] == 0) { }
    $R.SYSTIM.CH2CC.$$ = $R.SYSTIM.TIME250N.$$
    $R.LRFDPBE.API.$$ = $R.PBE_GENERIC_REGDEF_API_OP_TX
}

export function LRFD_IRQ0_isr$$() {
    const mis = $R.LRFDDBELL.MIS0.$$
    $R.LRFDDBELL.ICLR0.$$ = mis
    // em.@"%%[>]"(mis)
    // em.@"%%[a]"()
    if ((mis & e$`LRF_EventOpError`) != 0) {
        $['%%>'](em.$reg16[$R.LRFD_BUFRAM_BASE + $R.PBE_COMMON_RAM_O_ENDCAUSE])
        fail()
    }
    if ((mis & e$`LRF_EventSystim1`) != 0) {
        rx_timeout = true
    }
    // if ((mis & $R.LRF_EventRxOk) != 0) {
    //     em.print("peek {x}\n", .{RfFifo.peek(0)})
    // }
    IntrVec.NVIC_clear(e$`LRFD_IRQ0_IRQn`)
    setState(State.READY)
}

export function em$run() {
    enable()
}
