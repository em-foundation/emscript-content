import em from '@$$emscript'
export const em$_U = em.declare('MODULE')

import * as ConsoleUartI from '@em.hal/ConsoleUartI.em'
import * as GpioI from '@em.hal/GpioI.em'

import Common from '@em.mcu/Common.em'

const em$_C = {
    TxPin: em.Proxy<GpioI.em$_I>()
}

namespace em$meta {

    export const TxPinX = em$_C.TxPin

    export function em$construct() {
    }
}

namespace em$targ {

    const TxPin = em$_C.TxPin.$$

    export function em$startup(): void {
        TxPin.makeOutput()
        TxPin.set()
    }

    export function flush(): void {
    }

    export function put(data: u8): void {
        const bit_cnt = 10
        const bit_time = 8
        var tx_byte: em.u16 = (data << 1) | 0x600
        const key = Common.GlobalInterrupts.disable()
        for (let i = 0; i < bit_cnt; i++) {
            Common.UsCounter.set(bit_time)
            if (tx_byte & 0x1) {
                TxPin.set()
            } else {
                TxPin.clear()
            }
            tx_byte >>= 1
            Common.UsCounter.spin()
        }
        TxPin.set()
        Common.GlobalInterrupts.restore(key)
    }
}

export default { em$_U, em$_C, ...em$meta, ...em$targ }
