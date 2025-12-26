import '@$$emscript'
export const $U = $declare('MODULE')

import * as Console from '@em.lang/Console.em'

export namespace em$meta { }

//>> ---- em$targ ---- <<//

const F32_SIGN_MASK = 0x8000_0000
const F32_EXP_MASK = 0x7F80_0000
const F32_FRAC_MASK = 0x007F_FFFF
const F32_EXP_SHIFT = 23

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

function fabs(x: f32): f32 {
    let u = bitcast_u32_from_f32(x)
    u &= ~F32_SIGN_MASK
    return bitcast_f32_from_u32(u)
}

//>> ---- em$test ---- <<//

export function em$run() {
    // printf`\n---- bitcast ----\n`()
    // bitcast_T()
    printf`\n---- fabs ----\n`()
    fabs_T()
}

function bitcast_T() {
    const x0 = <f32>3.141529
    const xi = bitcast_u32_from_f32(x0)
    const x1 = bitcast_f32_from_u32(xi)
    Console.prF32(x0, t$`x0`); Console.nl()
    printf`xi = %08x\n`(xi)
    Console.prF32(x1, t$`x1`); Console.nl()
}

function fabs_T() {
    const x = fabs(3.14)
    Console.prF32(x, t$`| 3.14|`); Console.nl()
    const y = fabs(-3.14)
    Console.prF32(y, t$`|-3.14|`); Console.nl()
}