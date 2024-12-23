import em from '@$$emscript'
const em$_U = em.declare('MODULE')

const em$_C = {
    scalar: new em.param<em.u8>(10)
}

namespace em$meta {
    export const scalar = em$_C.scalar
    export function em$construct() {
        console.log(em$_C.scalar.$$)
    }
}

namespace em$targ {

}

export default {
    em$_U,
    em$_C,
    ...em$meta,
    // ...em$targ,
}
