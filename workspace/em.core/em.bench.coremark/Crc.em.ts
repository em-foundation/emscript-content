import em from '@$$emscript'
export const em$_U = em.declare('MODULE')

import * as Utils from '@em.bench.coremark/Utils.em'

export type sum_t = Utils.sum_t

export function add16(val: em.i16, crc: sum_t): sum_t {
    const v = val
    crc = update(v, crc)
    crc = update((v >> 8), crc)
    return crc
    /*
        auto v = <uint16>val
        crc = update(<uint8>v, crc)
        crc = update(<uint8>(v >> 8), crc)
        return crc
    
    */
}

/*

def update(data, crc)
    auto i = <uint8>0
    auto x16 = <uint8>0
    auto carry = <uint8>0
    for auto i = 0; i < 8; i++
        x16 = <uint8>((data & 1) ^ (<uint8>crc & 1))
        data >>= 1
        if x16 == 1
            crc ^= 0x4002
            carry = 1
        else
            carry = 0
        end
        crc >>= 1
        if carry
            crc |= 0x8000
        else
            crc &= 0x7fff
        end
    end
    return crc
end

*/

function update(data: u8, crc: sum_t): sum_t {
    let x16 = 0
    let carry = 0
    for (let i = 0; i < 8; i++) {
        x16 = (data & 1) ^ (crc & 1)
        data >>= 1
        if (x16 == 1) {
            crc ^= 0x4002
            carry = 1
        } else {
            carry = 0
        }
        if (carry) {
            crc |= 0x8000
        } else {
            crc &= 0x7fff
        }
    }
    return crc
}
