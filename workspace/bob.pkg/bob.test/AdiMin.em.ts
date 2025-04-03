import em from '@$$emscript'
export const $U = em.$declare('MODULE')

import * as $R from '@nordic.nrf5x/nordic.distro.nrf54/REGS.em'

export function em$run() {
    const LED1 = 1 << 25
    e$`MXC_GCR->pclkdis0 &= ~MXC_F_GCR_PCLKDIS0_GPIO0`
    //
    e$`MXC_GPIO0->outen_set = LED1`
    e$`MXC_GPIO0->en0_set = LED1`
    e$`MXC_GPIO0->out_set = LED1`
    //
    delay(2000000)
    e$`MXC_GPIO0->out_clr = LED1`
    delay(2000000)
    e$`MXC_GPIO0->out_set = LED1`
    delay(2000000)
    e$`SCB->SCR |= SCB_SCR_SLEEPDEEP_Msk`
    e$`asm volatile ("wfi")`
}

function delay(cnt: u32) {
    let dummy: volatile_t<u32>
    while (cnt) {
        dummy = 0
        cnt -= 1
    }
}
