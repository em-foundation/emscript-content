import em from '@$$emscript'
export const em$_U = em.declare('MODULE')

export const Args = em.Array(em.U32(), 2)
export const NumBuf = em.Array(em.U8(), 10)

export namespace em$meta {

    let num_buf = NumBuf.$make()
    let OUT = new Array<number>

    function addOut(buf: em.frame_t<em.u8>) {
        for (let c of buf) OUT.push(c.$$)
    }

    function c2d(ch: em.u8): em.u8 { return ch - em.$C`0` }

    function formatNum(buf: em.frame_t<em.u8>, num: em.u32, base: em.u8, width: em.i8, pad: em.u8): em.frame_t<em.u8> {
        let HEXDIGS = em.$T`0123456789ABCDEF`
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

    function isDigit(ch: em.u8): em.bool_t {
        return ch >= em.$C`0` && ch <= em.$C`9`
    }

    function print(fmt: em.text_t, a1: any = 0, a2: any = 0) {
        let args = Args.$make()
        args[0] = a1
        args[1] = a2
        let argp = args.$ptr()
        let idx = 0
        while (idx < fmt.$len) {
            let width = 0
            let pad = em.$C` `
            let ch = fmt[idx++]
            if (ch != em.$C`%`) {
                OUT.push(ch)
                continue
            }
            ch = fmt[idx++]
            if (ch == em.$C`0`) {
                pad = ch
                ch = fmt[idx++]
            }
            while (isDigit(ch)) {
                width = width * 10 + c2d(ch)
                ch = fmt[idx++]
            }
            if (ch == em.$C`d`) {
                let dn = argp.$$ as em.i32
                argp.$inc()
                if (dn < 0) {
                    OUT.push(em.$C`-`)
                    dn = -dn
                }
                let nb = formatNum(num_buf, dn as em.u32, 10, width, pad)
                addOut(nb)
            }
            else if (ch == em.$C`x`) {
                let xn = argp.$$ as em.u32
                argp.$inc()
                let nb = formatNum(num_buf, xn, 16, width, pad)
                addOut(nb)
            }
            else {
                OUT.push(ch)
            }
        }
    }


    // function toStr(buf: em.frame_t<em.u8>): string {
    //     let res = ''
    //     for (let c of nb) res += String.fromCodePoint(c.$$)
    //     return res
    // }

    // print(em.$T`hello world\n`)
    print(em.$T`x = 0x%x;`, 10)
    console.log(String.fromCharCode(...OUT))
}

/*
def print(fmt, a1, a2, a3, a4, a5, a6)
    var ch: char
    var buf: char[OUTMAX]
    var args: iarg_t[6]
    var argp: iarg_t* = &args[0]
    args[0] = a1
    args[1] = a2
    args[2] = a3
    args[3] = a4
    args[4] = a5
    args[5] = a6
    while (ch = *fmt++) != 0
        auto pad = ' '
        auto len = 0
        if (ch != '%') 
            Console.wrC(ch)
            continue
        end
        ch = *fmt++
        if ch == '0'
            pad = '0'
            ch = *fmt++
            end
        while isDigit(ch)
            len = (len * 10) + c2d(ch)
            ch = *fmt++
            end
        var out: char*
        if ch == 'd'
            var dn: int32 = <int32> *argp++
            if dn < 0
                Console.wrC('-')
                dn = -dn
            end
            out = formatNum(&buf[OUTMAX], <uint32> dn, 10, pad, len)
        elif ch == 'x' 
            var xn: uint32 = <uint32> *argp++
            out = formatNum(&buf[OUTMAX], xn, 16, pad, len)
        elif ch == 's'
            out = <char*> *argp++
        else
            Console.wrC(ch == 'c' ? <char> *argp++ : ch)
            continue
        end
        puts(<string>out)
    end
end

*/
