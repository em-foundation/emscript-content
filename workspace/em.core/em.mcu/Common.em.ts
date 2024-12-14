import em from '@$$em-script'
export const em$_U = em.declare('MODULE')

import * as GlobalInterruptsI from '@em.hal/GlobalInterruptsI.em'
import * as UsCounterI from '@em.hal/UsCounterI.em'

const em$_C = {
    GlobalInterrupts: new em.proxy<GlobalInterruptsI.em$_I>(),
    UsCounter: new em.proxy<UsCounterI.em$_I>()
}

namespace em$meta {
    export const x_GlobalInterrupts = em$_C.GlobalInterrupts
    export const x_UsCounter = em$_C.UsCounter
}

namespace em$targ {
    export const GlobalInterrupts = em$_C.GlobalInterrupts.unwrap()
    export const UsCounter = em$_C.UsCounter.unwrap()
}

export default { em$_U, em$_C, ...em$meta, ...em$targ }
