import em from '@$$emscript'
export const $U = em.$declare('COMPOSITE')

export function em$generate() {
    let out = $outfile('adi.distro.max326xx/REGS.hpp')
    out.addFile('../adi.max326xx/adi.distro.max326xx/REGS.hpp.txt')
    out.close()
}
