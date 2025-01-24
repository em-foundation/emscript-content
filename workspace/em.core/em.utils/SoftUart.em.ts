import em from '@$$emscript'
export const $U = em.$declare('MODULE')

import * as Common from '@em.mcu/Common.em'
import * as GpioI from '@em.hal/GpioI.em'

export const TxPin = $proxy<GpioI.em$_I>()

export function em$startup(): void {
    TxPin.$$.makeOutput()
    TxPin.$$.set()
}

export function flush(): void {
}

export function put(data: u8): void {
    const bit_cnt = 10
    const bit_time = 8
    var tx_byte: em.u16 = (data << 1) | 0x600
    const key = Common.GlobalInterrupts.$$.disable()
    for (let i = 0; i < bit_cnt; i++) {
        Common.UsCounter.$$.set(bit_time)
        if (tx_byte & 0x1) {
            TxPin.$$.set()
        } else {
            TxPin.$$.clear()
        }
        tx_byte >>= 1
        Common.UsCounter.$$.spin()
    }
    TxPin.$$.set()
    Common.GlobalInterrupts.$$.restore(key)
}
