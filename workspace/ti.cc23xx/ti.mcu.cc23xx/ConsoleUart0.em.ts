import em from '@$$em-script'
export const em$_U = em.declare('MODULE')

import * as Gpio from '@em.hal/GpioI.em'

import * as em$_R from '@ti.distro.cc23xx/REGS.em'

const em$_C = {
    TxPin: new em.proxy<Gpio.em$_I>()
}

namespace em$meta {
    export const TxPinX = em$_C.TxPin
}

namespace em$targ {

    const TxPin = em$_C.TxPin.$$

    export function em$startup(): void {
        em$_R.CLKCTL.CLKENSET0.$$ = em$_R.CLKCTL_CLKENSET0_UART0
        TxPin.makeOutput()
        TxPin.set()
        TxPin.functionSelect(2)
        em$_R.UART0.CTL.$$ &= ~em$_R.UART_CTL_UARTEN
        em$_R.UART0.IBRD.$$ = 26
        em$_R.UART0.FBRD.$$ = 3
        em$_R.UART0.LCRH.$$ = em$_R.UART_LCRH_WLEN_BITL8
        em$_R.UART0.CTL.$$ |= em$_R.UART_CTL_UARTEN
    }

    export function flush(): void {
        while (em$_R.UART0.FR.BUSY) {}
    }

    export function put(data: em.u8): void {
        em$_R.UART0.DR.$$ = data
    }
}

export default { em$_U, em$_C, ...em$meta, ...em$targ }
