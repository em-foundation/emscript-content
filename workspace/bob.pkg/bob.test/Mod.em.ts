import em from '@$$emscript'
export const em$_U = em.declare('MODULE')

const em$_C = {}

namespace em$meta {}

namespace em$targ {
    type MyInt_t = em.u32
    export let MyInt: MyInt_t
    export const MAX: MyInt_t = (123 + 456)
}

export default {
    em$_U,
    // em$_C,
    // ...em$meta,
    ...em$targ,
}
