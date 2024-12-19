import em from '@$$emscript'
export const em$_U = em.declare('COMPOSITE')

export function em$generate() {
    let out = new em.OutFile('emscript.hpp')
    const txt = `
#ifndef emscript__M
#define emscript__M

#include <stdint.h>

namespace em {

    typedef int8_t i8;
    typedef int16_t i16;
    typedef int32_t i32;

    typedef uint8_t u8;
    typedef uint16_t u16;
    typedef uint32_t u32;

};

#endif // emscript__M
`
    out.addText(txt)
    out.close()
}
