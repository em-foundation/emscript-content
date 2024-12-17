import em from '@$$emscript'
export const em$_U = em.declare('MODULE')

import * as LedI from '@em.hal/LedI.em'

import Common from '@em.mcu/Common.em'

const em$_C = {
    Led: new em.proxy<LedI.em$_I>()
}

namespace em$meta {
    export const x_Led = em$_C.Led
}

namespace em$targ {

    const blinkRate = 50000
    const EOT_BYTE = 0x04
    const Led = em$_C.Led.$$
    const SOT_BYTE = 0x03
    const SOT_COUNT = 13

    export function em$reset(): void {
        Common.Mcu.startup()
    }

    export function em$ready(): void {
        Led.off()
        blink(2, blinkRate)
        Common.ConsoleUart.flush()
        Common.ConsoleUart.put(0x00)
        Common.ConsoleUart.put(0x00)
        for (let i = 0; i < SOT_COUNT; i++) {
            Common.ConsoleUart.put(SOT_BYTE)
        }
        Common.ConsoleUart.flush()
    }

    export function em$fail(): void {
        Common.GlobalInterrupts.disable()
        while (true) blink(2, blinkRate)
    }

    export function em$halt(): void {
        Common.GlobalInterrupts.disable()
        Common.ConsoleUart.put(EOT_BYTE)
        Common.ConsoleUart.flush()
    }

    function blink(times: em.u8, usecs: em.u32): void {
        for (let i = 0; i < times * 2; i++) {
            Led.toggle()
            Common.BusyWait.wait(usecs)
        }
    }
}

export default { em$_U, em$_C, ...em$meta, ...em$targ }
