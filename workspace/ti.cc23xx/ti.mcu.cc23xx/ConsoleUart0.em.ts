import em from '@$$emscript'
export const em$_U = em.declare('MODULE')

import * as em$_R from '@ti.distro.cc23xx/REGS.em'
import * as GpioI from '@em.hal/GpioI.em'

export const TxPin = $proxy<GpioI.em$_I>()

export function em$startup(): void {
    em$_R.CLKCTL.CLKENSET0.$$ = em$_R.CLKCTL_CLKENSET0_UART0
    TxPin.$$.makeOutput()
    TxPin.$$.set()
    TxPin.$$.functionSelect(2)
    em$_R.UART0.CTL.$$ &= ~em$_R.UART_CTL_UARTEN
    em$_R.UART0.IBRD.$$ = 26
    em$_R.UART0.FBRD.$$ = 3
    em$_R.UART0.LCRH.$$ = em$_R.UART_LCRH_WLEN_BITL8
    em$_R.UART0.CTL.$$ |= em$_R.UART_CTL_UARTEN
}

export function flush(): void {
    while (em$_R.UART0.FR.$$ & em$_R.UART_FR_BUSY) {}
}

export function put(data: u8): void {
    em$_R.UART0.DR.$$ = data
    flush()
}
