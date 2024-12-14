import em from '@$$em-script'
export const em$_U = em.declare('MODULE')

namespace em$meta {
    export function em$initM() {
        console.log('initM', foo(10))
    }
    function foo(x: Readonly<em.u8>): em.u8 {
        x += 10
        return x
    }
}

export default { em$_U, ...em$meta }
