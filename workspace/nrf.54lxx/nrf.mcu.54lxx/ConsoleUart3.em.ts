import em from '@$$emscript'
export const $U = em.$declare('MODULE', ConsoleUartI)

import * as $R from '@nrf.distro.54lxx/REGS.em'

import * as ConsoleUartI from '@em.hal/ConsoleUartI.em'
import * as GpioI from '@em.hal/GpioI.em'

// export const TxPin = $proxy<GpioI.$I>()

export namespace em$meta { }

//>> ---- em$targ ---- <<//

var txd: u8

export function em$startup() {
    $R.UARTE30.PSEL.TXD.$$ = 0
    $R.UARTE30.BAUDRATE.$$ = $R.UARTE_BAUDRATE_BAUDRATE_Baud115200
    $R.UARTE30.ENABLE.$$ = $R.UARTE_ENABLE_ENABLE_Enabled
    //
    $R.UARTE30.DMA.TX.PTR.$$ = e$`(uint32_t)&txd`
    $R.UARTE30.DMA.TX.MAXCNT.$$ = 1
}

export function flush() {
    while ($R.UARTE30.EVENTS_DMA.TX.END.$$ == 0) { }
}

export function put(data: u8) {
    txd = data
    $R.UARTE30.EVENTS_DMA.TX.END.$$ = 0
    $R.UARTE30.TASKS_DMA.TX.START.$$ = 1
    flush()
}

export function em$run() {
    put(0xAA)
    put(0xBB)
    put(0xCC)
}