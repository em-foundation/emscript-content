import em from '@$$emscript'
export const em$_U = em.$declare('COMPOSITE')

export function em$generate() {
    let out = $outfile('emscript.hpp')
    out.addFile('../em.core/em.lang/emscript.hpp')
    out.close()
}
