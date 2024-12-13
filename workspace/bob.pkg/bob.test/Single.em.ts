import em from '@EM-SCRIPT'
export const em$_U = em.declare('MODULE')

namespace em$meta {
    export function em$initM() {
        console.log('initM')
    }
}

export default { em$_U, ...em$meta }
