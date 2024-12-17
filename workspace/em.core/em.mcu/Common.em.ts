import em from '@$$em-script'
export const em$_U = em.declare('MODULE')

import * as BusyWaitI from '@em.hal/BusyWaitI.em'
import * as ConsoleUartI from '@em.hal/ConsoleUartI.em'
import * as GlobalInterruptsI from '@em.hal/GlobalInterruptsI.em'
import * as McuI from '@em.hal/McuI.em'

const em$_C = {
    BusyWait: new em.proxy<BusyWaitI.em$_I>(),
    ConsoleUart: new em.proxy<ConsoleUartI.em$_I>(),
    GlobalInterrupts: new em.proxy<GlobalInterruptsI.em$_I>(),
    Mcu: new em.proxy<McuI.em$_I>(),
}

namespace em$meta {
    export const BusyWaitX = em$_C.BusyWait
    export const ConsoleUartX = em$_C.ConsoleUart
    export const GlobalInterruptsX = em$_C.GlobalInterrupts
    export const x_Mcu = em$_C.Mcu
}

namespace em$targ {
    export const BusyWait = em$_C.BusyWait.$$
    export const ConsoleUart = em$_C.ConsoleUart.$$
    export const GlobalInterrupts = em$_C.GlobalInterrupts.$$
    export const Mcu = em$_C.Mcu.$$
}

export default { em$_U, em$_C, ...em$meta, ...em$targ }
