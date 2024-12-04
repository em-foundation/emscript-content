import em from '@EM-SCRIPT'
const em$_U = em.declare<ConsoleUartI.em$_I>('MODULE', __filename)

import * as ConsoleUartI from '@em.hal/ConsoleUartI.em'
import * as GpioI from '@em.hal/GpioI.em'

import Common from '@em.mcu/Common.em'

namespace em$config {
    export let TxPin = new em.proxy<GpioI.em$_I>
}

namespace em$meta {
    export const x_TxPin = em$config.TxPin
}

namespace em$targ {

    const TxPin = em$config.TxPin.unwrap()

    export function em$startup(): void {
        TxPin.makeOutput()
        TxPin.set()
    }

    export function flush(): void {
    }

    export function put(data: em.u8): void {
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

const em$export = { em$_U, ...em$meta, ...em$targ }
// em$_U.bind(em$export)
export default em$export
