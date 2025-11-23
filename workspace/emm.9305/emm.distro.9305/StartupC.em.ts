import '@$$emscript'
export const $U = $declare('COMPOSITE')

export function em$generate() {
    let bf = $property('em.build.BootFlash', false) ? '1' : '0'
    let out = $outfile('emm.distro.9305/startup.cpp')
    out.addFrag(`
        |-> #define __EM_BOOT_FLASH__ ${bf}
        |-> //
    `)
    out.addFile('../emm.9305/emm.distro.9305/startup.cpp')
    out.close()
}
