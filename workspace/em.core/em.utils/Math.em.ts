import '@$$emscript'
export const $U = $declare('MODULE')

import * as Console from '@em.lang/Console.em'

export namespace em$meta { }

//>> ---- em$targ ---- <<//

const F32_SIGN_MASK = 0x8000_0000
const F32_EXP_MASK = 0x7F80_0000
const F32_FRAC_MASK = 0x007F_FFFF
const F32_QNAN = 0x7FC0_0000
const F32_EXP_SHIFT = 23
const K_INF_U32 = 0x7F80_0000


// private

function bitcast_f32_from_u32(x: u32): f32 {
    e$`union { em::u32 u; em::f32 f; } v = { 0 }`
    e$`v.u = x`
    return e$`v.f`
}

function bitcast_u32_from_f32(x: f32): u32 {
    e$`union { em::u32 u; em::f32 f; } v = { 0 }`
    e$`v.f = x`
    return e$`v.u`
}

function copySign(mag: f32, src: f32): f32 {
    let um = bitcast_u32_from_f32(mag)
    const us = bitcast_u32_from_f32(src)
    um = (um & ~F32_SIGN_MASK) | (us & F32_SIGN_MASK)
    return bitcast_f32_from_u32(um)
}

function EXP(u: u32): i32 {
    return <i32>((u >> F32_EXP_SHIFT) & 0xFF)
}

function fabs(x: f32): f32 {
    let u = bitcast_u32_from_f32(x)
    u &= ~F32_SIGN_MASK
    return bitcast_f32_from_u32(u)
}

function f2i(x: f32): i32 {
    let u = bitcast_u32_from_f32(x)
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

function isNaN(x: f32): bool_t {
    const u = bitcast_u32_from_f32(x)
    return ((u & F32_EXP_MASK) == F32_EXP_MASK) && ((u & F32_FRAC_MASK) != 0)
}

function ldexpf(x: f32, n: i32): f32 {
    let xu = bitcast_u32_from_f32(x)
    const exp = EXP(xu)
    // If exp is 0 (zero/subnormal) or 255 (inf/nan), return x unchanged.
    if (<u32>(exp - 1) >= 0xFE) return x
    n += exp
    if (<u32>(n - 1) < 0xFE) {
        // Normal
        xu &= ~F32_EXP_MASK
        xu |= <u32>n << F32_EXP_SHIFT
    } else if (n <= 0) {
        // Underflowed -> signed zero
        xu &= F32_SIGN_MASK
    } else {
        // Overflowed -> signed inf
        xu = K_INF_U32 | (xu & F32_SIGN_MASK)
    }
    return bitcast_f32_from_u32(xu)

}

function mkNaN(): f32 {
    return bitcast_f32_from_u32(F32_QNAN)
}

//>> ---- em$test ---- <<//


export function em$run() {
    // printf`\n---- bitcast ----\n`()
    // bitcast_T()
    // printf`\n---- copySign ----\n`()
    // copySign_T()
    // printf`\n---- fabs ----\n`()
    // fabs_T()
    // printf`\n---- f2i ----\n`()
    // f2i_T()
    // printf`\n---- isNaN ----\n`()
    // isNaN_T()
    printf`\n---- ldexpf ----\n`()
    ldexpf_T()
}

function bitcast_T() {
    const x0 = <f32>3.141529
    const xi = bitcast_u32_from_f32(x0)
    const x1 = bitcast_f32_from_u32(xi)
    Console.prF32(x0, t$`x0`); Console.nl()
    printf`xi = %08x\n`(xi)
    Console.prF32(x1, t$`x1`); Console.nl()
}

function copySign_T() {
    const s0 = 1.0
    const s1 = -1.0
    Console.prF32(copySign(3.14, 1.0), t$`pos 3.14`); Console.nl()
    Console.prF32(copySign(3.14, -1.0), t$`neg 3.14`); Console.nl()
}

function fabs_T() {
    const x = fabs(3.14)
    Console.prF32(x, t$`| 3.14|`); Console.nl()
    const y = fabs(-3.14)
    Console.prF32(y, t$`|-3.14|`); Console.nl()
}

function f2i_T() {
    printf`f2i(3.14) = %d\n`(f2i(3.14))
    printf`f2i(-3.14) = %d\n`(f2i(-3.14))
}

function isNaN_T() {
    printf`isNaN(-3.14) = %d\n`(isNaN(-3.14))
    printf`isNaN(NaN) = %d\n`(isNaN(mkNaN()))
}

function ldexpf_T() {
    // // basic scaling
    // Console.prF32(ldexpf(1.0, 0), t$`(1.0, 0)`); Console.nl()
    // Console.prF32(ldexpf(1.0, 1), t$`(1.0, 1)`); Console.nl()
    // Console.prF32(ldexpf(1.0, -1), t$`(1.0, -1)`); Console.nl()
    // // fractional input
    // Console.prF32(ldexpf(0.75, 1), t$`(0.75, 1)`); Console.nl()
    // Console.prF32(ldexpf(0.75, -2), t$`(0.75, -2)`); Console.nl()
    // // sign preservation
    // Console.prF32(ldexpf(-1.0, 2), t$`(-1.0, 2)`); Console.nl()
    // // zero
    // Console.prF32(ldexpf(0.0, 10), t$`(0.0, 10)`); Console.nl()
    // Console.prF32(ldexpf(-0.0, 10), t$`(-0.0, 10)`); Console.nl()

    // overflow
    Console.prF32(ldexpf(1.0, 200), t$`(1.0, 200)`); Console.nl()
}

//  // overflow
//  ldexp_T(1.0,  200, +INF)
//  
//  // underflow
//  ldexp_T(1.0, -200, 0.0)
//  
//  // NaN / Inf passthrough
//  ldexp_T(NaN,   5, NaN)
//  ldexp_T(+INF,  5, +INF)
//  ldexp_T(-INF, -5, -INF)
