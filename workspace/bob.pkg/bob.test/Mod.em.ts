import em from '@EM-SCRIPT'
const em$_U = em.declare('MODULE')

const em$config = {
    max: new em.param<em.u8>()
}

namespace em$meta {
    export const c_max = em$config.max
}

export default { em$_U, ...em$meta }
