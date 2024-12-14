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
    export const x_BusyWait = em$_C.BusyWait
    export const x_ConsoleUart = em$_C.ConsoleUart
    export const x_GlobalInterrupts = em$_C.GlobalInterrupts
    export const x_Mcu = em$_C.Mcu
}

namespace em$targ {
    export const BusyWait = em$_C.BusyWait.unwrap()
    export const ConsoleUart = em$_C.ConsoleUart.unwrap()
    export const GlobalInterrupts = em$_C.GlobalInterrupts.unwrap()
    export const Mcu = em$_C.Mcu.unwrap()
}

export default { em$_U, em$_C, ...em$meta, ...em$targ }
