import '@$$emscript'
export const $U = $declare('MODULE', ConsoleUartI)

import * as $R from '@emm.distro.9305/REGS.em'

import * as ConsoleUartI from '@em.hal/ConsoleUartI.em'
import * as GpioI from '@em.hal/GpioI.em'

export const TxPin = $proxy<GpioI.$I>()

export namespace em$meta { }

//>> ---- em$targ ---- <<//

export function em$startup() {
    TxPin.makeOutput()
    TxPin.set()
    $R.GPIO.RegGPIOOutSel1.$$ |= 3 << $R.GPIO_OUT_SEL7_SHIFT
    $R.UART.RegUARTCtrl.$$ |= $R.UART_TX_EN_MASK
}

export function flush() {
    while ($R.UART.RegUARTStat.$$ & $R.UART_TX_BUSY_MASK) { }
}

export function put(data: u8) {
    $R.UART.RegUARTTxFIFO1B.$$ = data
    flush()
}
