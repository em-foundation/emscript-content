import em from '@$$emscript'
export const em$_U = em.declare('MODULE')

namespace em$targ {
    type MyInt = em.u8
    const MAX: MyInt = (123 + 456)
}

export default {
    em$_U,
    ...em$targ,
}
