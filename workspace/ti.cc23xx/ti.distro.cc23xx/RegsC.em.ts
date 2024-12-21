import em from '@$$emscript'
export const em$_U = em.declare('COMPOSITE')

export function em$generate() {
    let out = new em.OutFile('ti.distro.cc23xx/REGS.hpp')
    out.addFile('../ti.cc23xx/ti.distro.cc23xx/REGS.hpp.txt')
    out.close()
}
