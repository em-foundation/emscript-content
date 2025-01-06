import em from '@$$emscript'
export const em$_U = em.declare('MODULE')

export const Buf = em.Array(em.U8(), 10)
var num_buf = Buf.$make()

export namespace em$meta {

    function formatNum(buf: em.frame_t<em.u8>, num: em.u32, base: em.u8, width: em.i8, pad: em.u8): em.frame_t<em.u8> {
        let HEXDIGS = em.$T`0123456789abcdef`
        let idx = buf.$len
        for (; ;) {
            width -= 1
            idx -= 1
            buf[idx] = HEXDIGS[(num % base)]
            num = Math.floor(num / base)
            if (num == 0) break
        }
        while (width > 0) {
            width -= 1
            idx -= 1
            buf[idx] = pad
        }
        return buf.$frame(idx, 0)
    }

    function toStr(buf: em.frame_t<em.u8>): string {
        let res = ''
        for (let c of nb) res += String.fromCodePoint(c.$$)
        return res
    }

    let nb = formatNum(num_buf, 0x80001234, 16, 4, em.$C`0`)
    console.log(toStr(nb))
}
