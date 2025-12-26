import '@$$emscript'
export const $U = $declare('MODULE')

import * as Console from '@em.lang/Console.em'

export namespace em$meta { }

type Bits = u32

//>> ---- em$targ ---- <<//

const SIGN_MASK = 0x8000_0000
const EXP_MASK = 0x7F80_0000
const FRAC_MASK = 0x007F_FFFF
const QNAN = 0x7FC0_0000
const EXP_SHIFT = 23
const INF_P = 0x7F80_0000
const INF_N = 0xFF80_0000

class NumBuf extends $vector<u8> { $len = 10 }

export function abs(x: f32): f32 {
    let u = toBits(x)
    u &= ~SIGN_MASK
    return fromBits(u)
}

function isInf(x: f32): bool_t {
    const u = toBits(x)
    return ((u & EXP_MASK) == EXP_MASK) && ((u & FRAC_MASK) == 0)
}

function isInfP(x: f32): bool_t {
    return toBits(x) == INF_P
}

function isInfN(x: f32): bool_t {
    return toBits(x) == INF_N
}

export function isNaN(x: f32): bool_t {
    const u = toBits(x)
    return ((u & EXP_MASK) == EXP_MASK) && ((u & FRAC_MASK) != 0)
}

function mkInfP(): f32 {
    return fromBits(INF_P)
}

function mkInfN(): f32 {
    return fromBits(INF_N)
}

export function mkNaN(): f32 {
    return fromBits(QNAN)
}

export function println(x: f32, lab: text_t = t$``, wid: u8 = 6) {
    if (lab.$len > 0) {
        Console.puts(lab.$ptr())
        const ts = t$` = `
        Console.puts(ts.$ptr())
    }
    if (isNaN(x)) {
        const ts = t$`NaN\n`
        Console.puts(ts.$ptr())
        return
    }
    if (isInfP(x)) {
        const ts = t$`+Inf\n`
        Console.puts(ts.$ptr())
        return
    }
    if (isInfN(x)) {
        const ts = t$`-Inf\n`
        Console.puts(ts.$ptr())
        return
    }
    if (x < 0.0) {
        Console.putch(c$`-`)
        x = -x
    }
    const man: u32 = <u32>x
    let num_buf = NumBuf.$make()
    let nb = Console.formatNum(num_buf, man, 10, 0, c$` `)
    Console.putbuf(nb)
    if (wid == 0) return
    Console.putch(c$`.`)
    let frac: f32 = x - <f32>man
    for (const _ of $range(wid)) {
        frac *= 10.0
        const d = <u8>frac
        Console.putch(c$`0` + d)
        frac -= d
    }
    Console.putch(c$`\n`)
}

export function toInt(x: f32): i32 {
    let u = toBits(x)
    const bs = u >> 23
    const bx = bs & 0xFF
    if (bx < 0x7F) return 0
    if (bx >= 0x7F + 31) {
        if ((u << 1) > 0xFF00_0000) return <i32>0x7FFF_FFFF
        if (bs >= 0x100) return <i32>0x8000_0000
        return <i32>0x7FFF_FFFF
    }
    u &= 0x7F_FFFF
    u |= 0x80_0000
    if (bx <= 0x7F + 23) {
        u >>= (0x7F + 23) - bx
    } else {
        u <<= bx - (0x7F + 23)
    }
    if (bs >= 0x100) {
        u = 0 - u
    }
    return <i32>u
}

// private

function copySign(mag: f32, src: f32): f32 {
    let um = toBits(mag)
    const us = toBits(src)
    um = (um & ~SIGN_MASK) | (us & SIGN_MASK)
    return fromBits(um)
}

function fromBits(x: Bits): f32 {
    e$`union { em::u32 u; em::f32 f; } v = { 0 }`
    e$`v.u = x`
    return e$`v.f`
}

function toBits(x: f32): Bits {
    e$`union { em::u32 u; em::f32 f; } v = { 0 }`
    e$`v.f = x`
    return e$`v.u`
}

function toExp(u: Bits): i32 {
    return <i32>((u >> EXP_SHIFT) & 0xFF)
}

function ldexp(x: f32, n: i32): f32 {
    let xu = toBits(x)
    const exp = toExp(xu)
    // If exp is 0 (zero/subnormal) or 255 (inf/nan), return x unchanged.
    if (<u32>(exp - 1) >= 0xFE) return x
    n += exp
    if (<u32>(n - 1) < 0xFE) {
        // Normal
        xu &= ~EXP_MASK
        xu |= <u32>n << EXP_SHIFT
    } else if (n <= 0) {
        // Underflowed -> signed zero
        xu &= SIGN_MASK
    } else {
        // Overflowed -> signed inf
        xu = INF_P | (xu & SIGN_MASK)
    }
    return fromBits(xu)
}


//>> ---- em$test ---- <<//


export function em$run() {
    printf`\n---- abs ----\n`()
    abs_T()
    printf`\n---- bits ----\n`()
    bits_T()
    printf`\n---- copySign ----\n`()
    copySign_T()
    printf`\n---- toInt ----\n`()
    toInt_T()
    printf`\n---- isNaN ----\n`()
    isNaN_T()
    printf`\n---- ldexpf ----\n`()
    ldexpf_T()
}

function bits_T() {
    const x0 = <f32>3.141529
    const xi = toBits(x0)
    const x1 = fromBits(xi)
    println(x0, t$`x0`)
    printf`xi = %08x\n`(xi)
    println(x1, t$`x1`)
}

function copySign_T() {
    const s0 = 1.0
    const s1 = -1.0
    println(copySign(3.14, 1.0), t$`pos 3.14`)
    println(copySign(3.14, -1.0), t$`neg 3.14`)
}

function abs_T() {
    const x = abs(3.14)
    println(x, t$`| 3.14|`)
    const y = abs(-3.14)
    println(y, t$`|-3.14|`)
}

function toInt_T() {
    printf`f2i(3.14) = %d\n`(toInt(3.14))
    printf`f2i(-3.14) = %d\n`(toInt(-3.14))
}

function isNaN_T() {
    printf`isNaN(-3.14) = %d\n`(isNaN(-3.14))
    printf`isNaN(NaN) = %d\n`(isNaN(mkNaN()))
}

function ldexpf_T() {
    // basic scaling
    println(ldexp(1.0, 0), t$`(1.0, 0)`)
    println(ldexp(1.0, 1), t$`(1.0, 1)`)
    println(ldexp(1.0, -1), t$`(1.0, -1)`)
    // fractional input
    println(ldexp(0.75, 1), t$`(0.75, 1)`)
    println(ldexp(0.75, -2), t$`(0.75, -2)`)
    // sign preservation
    println(ldexp(-1.0, 2), t$`(-1.0, 2)`)
    // zero
    println(ldexp(0.0, 10), t$`(0.0, 10)`)
    println(ldexp(-0.0, 10), t$`(-0.0, 10)`)
    // overflow
    println(ldexp(1.0, 200), t$`(1.0, 200)`)
    // undefflow
    println(ldexp(1.0, -200), t$`(1.0, -200)`)
    // pass through
    println(ldexp(mkNaN(), 5), t$`(NaN, 5)`)
    println(ldexp(mkInfP(), 5), t$`(+INF, 5)`)
    println(ldexp(mkInfN(), 5), t$`(-INF, 5)`)
}
