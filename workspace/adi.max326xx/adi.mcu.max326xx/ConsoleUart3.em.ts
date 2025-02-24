import em from '@$$emscript'
export const $U = em.$declare('MODULE', ConsoleUartI)

import * as ConsoleUartI from '@em.hal/ConsoleUartI.em'
import * as GpioI from '@em.hal/GpioI.em'

export const TxPin = $proxy<GpioI.$I>()

export const baud = $config<u32>(115200)

const clkdiv = $config<u32>()

export namespace em$meta {

    const IBRO_FREQ = 7372800

    export function em$construct() {
        clkdiv.$$ = Math.round(IBRO_FREQ / baud.$$)
    }
}

export function em$startup() {
    e$`MXC_LPGCR->pclkdis &= ~(MXC_F_LPGCR_PCLKDIS_UART3 | MXC_F_LPGCR_PCLKDIS_GPIO2)`
    TxPin.$$.makeOutput()
    TxPin.$$.functionSelect(2)
    e$`MXC_GCR->clkctrl |= MXC_F_GCR_CLKCTRL_IBRO_EN`
    e$`MXC_SETFIELD(MXC_UART3->ctrl, MXC_F_UART_CTRL_CHAR_SIZE, MXC_S_UART_CTRL_CHAR_SIZE_8BITS)`
    e$`MXC_UART3->osr = 5`
    const cd = clkdiv.$$
    e$`MXC_UART3->clkdiv = cd`
    e$`MXC_UART3->ctrl |= (MXC_S_UART_CTRL_BCLKSRC_PERIPHERAL_CLOCK | MXC_F_UART_CTRL_BCLKEN | MXC_F_UART_CTRL_UCAGM)`
}

export function flush(): void {
    while ((e$`MXC_UART3->status & MXC_F_UART_STATUS_TX_EM`) == 0) {}
}

export function put(data: u8): void {
    e$`MXC_UART3->fifo = data`
    flush()
}
