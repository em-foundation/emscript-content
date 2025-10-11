import '@$$emscript'
export const $U = $declare('COMPOSITE')

export function em$generate() {
    let out = $outfile('silabs.distro.efr32x/REGS.hpp')
    out.addFile('../silabs.efr32x/silabs.distro.efr32x/REGS.hpp.txt')
    out.close()
}
