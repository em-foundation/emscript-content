import em from '@$$emscript'
export const em$_U = em.$declare('MODULE')

import * as $R from '@ti.distro.cc23xx/REGS.em'
import * as GpioI from '@em.hal/GpioI.em'

export const TxPin = $proxy<GpioI.em$_I>()

export function em$startup(): void {
    $R.CLKCTL.CLKENSET0.$$ = $R.CLKCTL_CLKENSET0_UART0
    TxPin.$$.makeOutput()
    TxPin.$$.set()
    TxPin.$$.functionSelect(2)
    $R.UART0.CTL.$$ &= ~$R.UART_CTL_UARTEN
    $R.UART0.IBRD.$$ = 26
    $R.UART0.FBRD.$$ = 3
    $R.UART0.LCRH.$$ = $R.UART_LCRH_WLEN_BITL8
    $R.UART0.CTL.$$ |= $R.UART_CTL_UARTEN
}

export function flush(): void {
    while ($R.UART0.FR.$$ & $R.UART_FR_BUSY) {}
}

export function put(data: u8): void {
    $R.UART0.DR.$$ = data
    flush()
}
