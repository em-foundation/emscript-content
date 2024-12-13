import em from '@$$em-script'
export const em$_U = em.declare('MODULE')

import * as GlobalInterruptsI from '@em.hal/GlobalInterruptsI.em'
import * as UsCounterI from '@em.hal/UsCounterI.em'

const em$config = {
    GlobalInterrupts: new em.proxy<GlobalInterruptsI.em$_I>(),
    UsCounter: new em.proxy<UsCounterI.em$_I>()
}

namespace em$meta {
    export const x_GlobalInterrupts = em$config.GlobalInterrupts
    export const x_UsCounter = em$config.UsCounter
}

namespace em$targ {
    export const GlobalInterrupts = em$config.GlobalInterrupts.unwrap()
    export const UsCounter = em$config.UsCounter.unwrap()
}

export default { em$_U, ...em$meta, ...em$targ }
