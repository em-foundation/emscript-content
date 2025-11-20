import '@$$emscript'
export const $U = $declare('COMPOSITE')

import * as LinkerC from '@emm.distro.9305/LinkerC.em'
import * as REGS from '@emm.distro.9305/REGS.em'
import * as StartupC from '@emm.distro.9305/StartupC.em'
import * as TargC from '@em.lang/TargC.em'

export function em$configure() {
    $using(LinkerC)
    $using(REGS)
    $using(StartupC)
    $using(TargC)
}

export function em$generate() {
    LinkerC.genScript()
    let opt = $property('em.build.Optimize', 'Oz')
    let tools = $property('em.build.ToolsHome', '')
    let bld_out = $outfile('build.sh', 0o755)
    bld_out.addFile('../emm.9305/emm.distro.9305/build.sh')
    bld_out.close()
    let dbg_out = $outfile('debug.sh', 0o755)
    dbg_out.addFile('../emm.9305/emm.distro.9305/debug.sh')
    dbg_out.close()
    let lod_out = $outfile('load.sh', 0o755)
    lod_out.addFile('../emm.9305/emm.distro.9305/load.sh')
    lod_out.close()
}