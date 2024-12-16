import em from '@$$em-script'
export const em$_U = em.declare('MODULE')

import * as GlobalInterruptsI from '@em.hal/GlobalInterruptsI.em'

namespace em$targ {}

export default {
    em$_U,
    // ...em$targ,
    ...em.isa<GlobalInterruptsI.em$_I>()
}
