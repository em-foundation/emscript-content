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
        |->     using i8 = int8_t;
        |->     using i16 = int16_t;
        |->     using i32 = int32_t;
        |-> 
        |->     using u8 = uint8_t;
        |->     using u16 = uint16_t;
        |->     using u32 = uint32_t;
        |-> 
        |->     template <typename T>
        |->     struct param {
        |->         T $$;
        |->         constexpr param(T v) : $$(v) {}
        |->     };
        |-> 
        |->     template <typename T>
        |->     using volatile_t = volatile T;
        |-> 
        |->     static inline volatile u32* $reg32(u32 addr) { return (volatile u32*)addr; }
        |-> };
        |-> 
        |-> #endif // emscript__M
    `)
    out.close()
}
