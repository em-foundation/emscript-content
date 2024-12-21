import em from '@$$emscript'
export const em$_U = em.declare('MODULE')

const em$_C = {}

namespace em$meta {

    export function em$init() {
        em$_U.used()
    }

    export function em$generate() {
        const txt = `
#include <stdbool.h>
#include <stdint.h>

typedef void( *intfunc )( void );
typedef union { intfunc fxn; void* ptr; } intvec_elem;

extern uint32_t __stack_top__;
extern "C" void em__start( void );

extern void DEFAULT_isr( void );

extern "C" const intvec_elem  __attribute__((section(".intvec"))) __vector_table[64] = {
    { .ptr = (void*)&__stack_top__ },
    { .fxn = em__start },
};
`
        let out = new em.OutFile('em.arch.arm/intr.c')
        out.addText(txt)
        out.close()
    }

}

namespace em$targ {}

export default {
    em$_U,
    // em$_C,
    ...em$meta,
    // ...em$targ,
}
