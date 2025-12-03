import '@$$emscript'
export const $U = $declare('MODULE')

import * as IsrI from '@em.hal/IsrI.em'

export const IsrDefault = $proxy<IsrI.$I>()

export namespace em$meta {
    //
    const NO_VEC = '<NA>'

    const core_intrs = [
        'MemErr',
        'InstErr',
        NO_VEC,
        NO_VEC,
        NO_VEC,
        NO_VEC,
        NO_VEC,
        'SWI',
        'Trap',
        NO_VEC,
        'DivZero',
        NO_VEC,
        NO_VEC,
        NO_VEC,
        NO_VEC,
    ]

    const intr_list = new Array<string>()
    const used_list = new Array<string>()
    const used_set = new Set<string>()

    export function em$init() {
        for (let name of core_intrs) addIntr(name)
    }

    export function em$generate() {
        let len = intr_list.length + 1
        let out = $outfile('em.arch.arc/intr.cpp')
        out.addFrag(`
                        |-> //
                        |-> typedef void( *intfunc )( void );
                        |-> 
                        |-> extern "C" void em__start( void );
                        |-> 
                        |-> extern "C" void DEFAULT_isr$$( void );
                        |-> 
                        |-> extern "C" const intfunc  __attribute__((section(".intvec"))) __vector_table[${len}] = {
                        |->     em__start,
        `)
        for (let n of intr_list) {
            const s =
                n == NO_VEC
                    ? '0'
                    : used_set.has(n)
                        ? `${n}_isr$$`
                        : 'DEFAULT_isr$$'
            out.addFrag(`
                        |-> /**/${s},
            `)
        }
        out.addFrag(`
                        |-> };
        `)
        out.close()
    }

    export function addIntr(name: string | null) {
        intr_list.push(name ?? NO_VEC)
    }

    export function useIntr(name: string) {
        used_list.push(name)
        used_set.add(name)
    }
}

//>> ---- em$targ ---- <<//

export function em$startup() {
    e$`_sr((int)(&__vector_table), INT_VECTOR_BASE)`
}

export function DEFAULT_isr$$() {
    IsrDefault.exec()
    fail()
}
// 
// function emptyIsr() { }
