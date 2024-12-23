import em from '@$$emscript'
export const em$_U = em.declare('MODULE')

import * as Mod from '@bob.test/CfgMod.em'

namespace em$meta {
    export function em$configure() {
        Mod.
    }
}

namespace em$targ {
    export function em$run() {
    }
}

export default {
    em$_U,
    // em$_C,
    // ...em$meta,
    ...em$targ,
}
