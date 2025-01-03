import em from '@$$emscript'
export const em$_U = em.declare('MODULE')

import * as Common from '@em.mcu/Common.em'

export function putb(b: em.u8) {
    Common.ConsoleUart.$$.put(b)
}

export function puts(s: em.text_t) {
    for (let c of s) putb(c)
}

export function wrC(data: em.u8) {
    putb(data)
}

export function wrU8(data: em.u8) {
    putb(0x81)
    putb(data)
}

export function wrU32(data: em.u32) {
    putb(0x84)
    let b = ((data >> 24) & 0xFF) as em.u8
    putb(b)
    b = ((data >> 16) & 0xFF) as em.u8
    putb(b)
    b = ((data >> 8) & 0xFF) as em.u8
    putb(b)
    b = ((data >> 0) & 0xFF) as em.u8
    putb(b)
}
