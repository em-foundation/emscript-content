import em from '@$$emscript'
export const em$_U = em.$declare('MODULE')

import * as em$_R from '@ti.distro.cc23xx/REGS.em'
import * as Debug from '@em.lang/Debug.em'

export function startup(): void {
    Debug.startup()
    em.$['%%a:'](2)
    em$_R.CKMD.LFCLKSEL.$$ = e$`CKMD_LFCLKSEL_MAIN_LFXT`
    em$_R.CKMD.LFXTCTL.$$ = em$_R.CKMD_LFXTCTL_EN
    em$_R.CKMD.IMSET.$$ = em$_R.CKMD_IMSET_HFXTFAULT | em$_R.CKMD_IMSET_TRACKREFLOSS | em$_R.CKMD_IMSET_LFCLKGOOD
}
