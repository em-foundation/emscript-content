import em from '@$$emscript'
export const em$_U = em.declare('COMPOSITE')

export function em$generate() {
    let out = new em.OutFile('emscript.hpp')
    out.addFrag(`
        |-> #ifndef emscript__M
        |-> #define emscript__M
        |-> 
        |-> #include <stdint.h>
        |-> 
        |-> namespace em {
        |-> 
        |->     typedef int8_t i8;
        |->     typedef int16_t i16;
        |->     typedef int32_t i32;
        |-> 
        |->     typedef uint8_t u8;
        |->     typedef uint16_t u16;
        |->     typedef uint32_t u32;
        |-> 
        |->     static inline volatile u32* $reg32(u32 addr) { return (volatile u32*)addr; }
        |-> };
        |-> 
        |-> #endif // emscript__M
    `)
    out.close()
}
