import em from '@$$emscript'
export const em$_U = em.declare('MODULE')

import * as Common from '@em.mcu/Common.em'

export function putbuf(buf: frame_t<u8>) {
    for (let p of buf) putch(p.$$)
}

export function putch(ch: u8) {
    Common.ConsoleUart.$$.put(ch)
}

export function puts(sp: ptr_t<u8>) {
    while (sp.$$) {
        putch(sp.$$)
        sp.$inc()
    }
}

export function wrC(data: u8) {
    putch(data)
}

export function wrU8(data: u8) {
    putch(0x81)
    putch(data)
}

export function wrU16(data: u16) {
    putch(0x82)
    let b = ((data >> 8) & 0xFF) as u8
    putch(b)
    b = ((data >> 0) & 0xFF) as u8
    putch(b)
}

export function wrU32(data: u32) {
    putch(0x84)
    let b = ((data >> 24) & 0xFF) as u8
    putch(b)
    b = ((data >> 16) & 0xFF) as u8
    putch(b)
    b = ((data >> 8) & 0xFF) as u8
    putch(b)
    b = ((data >> 0) & 0xFF) as u8
    putch(b)
}

// private

'static inline void wr(em::u8 data) { wrU8(data); }'
'static inline void wr(em::i8 data) { wrU8((em::u8)data); }'
'static inline void wr(em::u16 data) { wrU16(data); }'
'static inline void wr(em::i16 data) { wrU16((em::u16)data); }'
'static inline void wr(em::u32 data) { wrU32(data); }'
'static inline void wr(em::i32 data) { wrU32((em::u32)data); }'

const Args = em.Array(em.U32(), 4)
const NumBuf = em.Array(em.U8(), 10)

function c2d(ch: u8): u8 { return ch - c$`0` }

function formatNum(buf: frame_t<u8>, num: u32, base: u8, width: i8, pad: u8): frame_t<u8> {
    let HEXDIGS = t$`0123456789ABCDEF`
    let idx = buf.$len
    for (; ;) {
        width -= 1
        idx -= 1
        buf[idx] = HEXDIGS[(num % base)]
        num /= base
        if (num == 0) break
    }
    while (width > 0) {
        width -= 1
        idx -= 1
        buf[idx] = pad
    }
    return buf.$frame(idx, 0)
}

function isDigit(ch: u8): bool_t {
    return ch >= c$`0` && ch <= c$`9`
}

export function print(fmt: text_t, a1: u32 = 0, a2: u32 = 0, a3: u32 = 0, a4: u32 = 0) {
    let args = Args.$make()
    let num_buf = NumBuf.$make()
    args[0] = a1
    args[1] = a2
    args[2] = a3
    args[3] = a4
    let argp = args.$ptr()
    let idx = 0
    while (idx < fmt.$len) {
        let width = 0
        let pad = c$` `
        let ch = fmt[idx++]
        if (ch != c$`%`) {
            putch(ch)
            continue
        }
        ch = fmt[idx++]
        if (ch == c$`0`) {
            pad = ch
            ch = fmt[idx++]
        }
        while (isDigit(ch)) {
            width = width * 10 + c2d(ch)
            ch = fmt[idx++]
        }
        if (ch == c$`d`) {
            let dn = argp.$$ as i32
            argp.$inc()
            if (dn < 0) {
                putch(c$`-`)
                dn = -dn
            }
            let nb = formatNum(num_buf, dn as u32, 10, width, pad)
            putbuf(nb)
        }
        else if (ch == c$`x`) {
            let xn = argp.$$ as u32
            argp.$inc()
            let nb = formatNum(num_buf, xn, 16, width, pad)
            putbuf(nb)
        }
        else if (ch == c$`c`) {
            let cn = argp.$$
            putch(cn)
        }
        else if (ch == c$`s`) {
            let sp = argp.$$ as unknown as ptr_t<u8>
            argp.$inc()
            puts(sp)
        }
        else {
            putch(ch)
        }
    }
}
