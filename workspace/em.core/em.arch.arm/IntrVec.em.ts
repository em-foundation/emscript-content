import em from '@$$emscript'
export const em$_U = em.$declare('MODULE')

export namespace em$meta {

    const intr_map = new Map<string, boolean>()

    export function em$init() {
        em$_U.used()
    }

    export function em$generate() {
        let out = $outfile('em.arch.arm/intr.c')
        out.addFrag(`
            |-> #include <stdbool.h>
            |-> #include <stdint.h>
            |-> 
            |-> typedef void( *intfunc )( void );
            |-> typedef union { intfunc fxn; void* ptr; } intvec_elem;
            |-> 
            |-> extern uint32_t __stack_top__;
            |-> extern "C" void em__start( void );
            |-> 
            |-> extern void DEFAULT_isr( void );
            |-> 
            |-> extern "C" const intvec_elem  __attribute__((section(".intvec"))) __vector_table[35] = {
            |->     { .ptr = (void*)&__stack_top__ },
            |->     { .fxn = em__start },
            |-> };
    `)
        out.close()
    }

    export function addIntr(name: string) {
        intr_map.set(name, false)
    }

    export function useIntr(name: string) {
        intr_map.set(name, true)
    }
}
