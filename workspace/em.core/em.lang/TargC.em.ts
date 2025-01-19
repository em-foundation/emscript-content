import em from '@$$emscript'
export const em$_U = $declare('COMPOSITE')

export function em$generate() {
    let out = new em.OutFile('emscript.hpp')
    out.addFile('../em.core/em.lang/emscript.hpp')
    out.close()
}
