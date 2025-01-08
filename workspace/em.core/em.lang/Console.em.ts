import em from '@$$emscript'
export const em$_U = em.declare('MODULE')

import * as Common from '@em.mcu/Common.em'

export function putb(b: u8) {
    Common.ConsoleUart.$$.put(b)
}

export function puts(s: text_t) {
    for (let c of s) putb(c)
}

export function wrC(data: u8) {
    putb(data)
}

export function wrU8(data: u8) {
    putb(0x81)
    putb(data)
}

export function wrU32(data: u32) {
    putb(0x84)
    let b = ((data >> 24) & 0xFF) as u8
    putb(b)
    b = ((data >> 16) & 0xFF) as u8
    putb(b)
    b = ((data >> 8) & 0xFF) as u8
    putb(b)
    b = ((data >> 0) & 0xFF) as u8
    putb(b)
}
