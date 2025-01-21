import em from '@$$emscript'
export const em$_U = em.$declare('MODULE')

export namespace em$meta {

    const NO_VEC = '<NA>'

    const core_intrs = [
        'NMI',
        'HardFault',
        NO_VEC,
        NO_VEC,
        NO_VEC,
        NO_VEC,
        NO_VEC,
        NO_VEC,
        NO_VEC,
        'SVCall',
        NO_VEC,
        NO_VEC,
        'PendSV',
        'SysTick',
    ]

    const intr_list = new Array<string>()
    const used_list = new Array<string>()

    export function em$init() {
        em$_U.used()
        for (let name of core_intrs) addIntr(name)
    }

    export function em$generate() {
        let out = $outfile('em.arch.arm/intr.cpp')
        for (let n of intr_list) {
            if (n == NO_VEC) continue
            out.addFrag(`
                        |-> #define __${n}_isr _DEFAULT_isr
            `)
        }
        out.addFrag(`
                        |-> //
                        |-> extern "C" void DEFAULT_isr$$();
                        |-> void _DEFAULT_isr( void ) { DEFAULT_isr$$(); }
                        |-> // used 
        `)
        for (let n of used_list) {
            out.addFrag(`
                        |-> #undef __${n}_isr
                        |-> #define __${n}_isr ${n}_isr$$
                        |-> extern "C" void ${n}_isr$$(); // __attribute__((weak, alias("_Z12_DEFAULT_isrv")));
            `)
        }
        out.addFrag(`
                        |-> //
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
        `)
        for (let n of intr_list) {
            const s = n == NO_VEC ? '0' : `__${n}_isr`
            out.addFrag(`
                        |-> /**/${s},
            `)
        }
        out.addFrag(`
                        |-> };
        `)
        out.close()
    }

    export function addIntr(name: string) {
        intr_list.push(name)
    }

    export function useIntr(name: string) {
        used_list.push(name)
    }
}

export function DEFAULT_isr$$() {
    em.fail()
}
