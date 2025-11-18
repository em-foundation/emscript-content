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
    let out = $outfile('build.sh', 0o755)
    out.addFile('../emm.9305/emm.distro.9305/build.sh')
    out.close()
}
