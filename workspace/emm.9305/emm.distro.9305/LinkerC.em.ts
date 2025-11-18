import '@$$emscript'
export const $U = $declare('COMPOSITE')

export function genScript() {
    let out = $outfile('linkcmd.ld')
    out.addFile('../emm.9305/emm.distro.9305/linker.cmd')
    out.close()
}
