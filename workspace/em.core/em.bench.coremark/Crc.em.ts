import em from '@$$emscript'
export const em$_U = em.declare('MODULE')

import * as Utils from '@em.bench.coremark/Utils.em'

export type sum_t = Utils.sum_t

export function add16(val: i16, crc: sum_t): sum_t {
    const v = val
    crc = update(v, crc)
    crc = update((v >> 8), crc)
    return crc
}

function update(data: u8, crc: sum_t): sum_t {
    let x16 = 0 as u8
    let carry = 0 as u8
    for (let i = 0; i < 8; i++) {
        x16 = ((data & 1) ^ ((crc as u8) & 1)) as u8
        data >>= 1
        if (x16 == 1) {
            crc ^= 0x4002
            carry = 1
        }
        else {
            carry = 0
        }
        crc >>= 1
        if (carry) {
            crc |= 0x8000
        }
        else {
            crc &= 0x7fff
        }
    }
    return crc
}

export function em$run() {
    let sum = 0
    for (let i = 0; i < 5; i++) {
        sum = add16(i, sum)
    }
    printf`sum = %04x\n`(sum)
}
