import em from '@$$emscript'
export const $U = em.$declare('MODULE')

import * as BusyWaitI from '@em.hal/BusyWaitI.em'
import * as ConsoleUartI from '@em.hal/ConsoleUartI.em'
import * as GlobalInterruptsI from '@em.hal/GlobalInterruptsI.em'
import * as IdleI from '@em.hal/IdleI.em'
import * as McuI from '@em.hal/McuI.em'
import * as UsCounterI from '@em.hal/UsCounterI.em'

export const BusyWait = $proxy<BusyWaitI.em$_I>()
export const ConsoleUart = $proxy<ConsoleUartI.em$_I>()
export const GlobalInterrupts = $proxy<GlobalInterruptsI.em$_I>()
export const Idle = $proxy<IdleI.em$_I>()
export const Mcu = $proxy<McuI.em$_I>()
export const UsCounter = $proxy<UsCounterI.em$_I>()
