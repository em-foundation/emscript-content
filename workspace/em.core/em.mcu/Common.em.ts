import em from '@$$emscript'
export const em$_U = em.declare('MODULE')

import * as BusyWaitI from '@em.hal/BusyWaitI.em'
import * as ConsoleUartI from '@em.hal/ConsoleUartI.em'
import * as GlobalInterruptsI from '@em.hal/GlobalInterruptsI.em'
import * as McuI from '@em.hal/McuI.em'

export const BusyWait = em.Proxy<BusyWaitI.em$_I>()
export const ConsoleUart = em.Proxy<ConsoleUartI.em$_I>()
export const GlobalInterrupts = em.Proxy<GlobalInterruptsI.em$_I>()
export const Mcu = em.Proxy<McuI.em$_I>()
