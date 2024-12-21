import em from '@$$emscript'
export const em$_U = em.declare('MODULE')

import Mod from '@bob.test/Mod.em'

namespace em$targ {

    // export type MyInt = em.u32
    // export const MAX: MyInt = (123 + 456)
    var x: typeof Mod.MyInt

    function fxn(x: typeof Mod.MyInt = 20) {
        if (x < Mod.MAX) {
            x += 10
        }
        else if (x > Mod.MAX) {
            x -= 20
        }
    }

    export function em$run() {
        fxn()
        fxn(30)
    }
}

export default {
    em$_U,
    ...em$targ,
}
