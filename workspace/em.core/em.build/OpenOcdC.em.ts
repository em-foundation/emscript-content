import em from '@$$emscript'
export const $U = em.$declare('COMPOSITE')

export function genLoad(cfg_file: string): string {
    return ''
}

export function genLoadScript(build_dir: string, cfg_file: string): string {
    return ''
}

import * as InstallDirC from '@em.build/InstallDirC.em'

// package em.build.misc
// 
// import InstallDir
// 
// host module OpenOCD
// 
//     template genLoad(cfgFile: string)
//     template genLoadScript(buildDir: string, cfgFile: string)
// 
// end
// 
// def genLoad(cfgFile)
//     auto ext = ^^process.platform == 'win32'^^ ? ".exe" : ""
//     auto tdir = InstallDir.find("openocd")
//     auto tool = tdir + "/openocd" + ext
//         |-> `tool` -s `tdir`/scripts -f `cfgFile`
// end
// 
// def genLoadScript(buildDir, cfgFile)
//     var sn: string = ^^`${buildDir}/load.sh`^^
//     ^^$Fs.writeFileSync^^(sn, genLoad(cfgFile))
//     ^^$Fs.chmodSync(sn, 0o755)^^
// end
