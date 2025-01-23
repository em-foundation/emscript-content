import em from '@$$emscript'
export const em$_U = em.$declare('MODULE')

import * as $R from '@ti.distro.cc23xx/REGS.em'
import * as Debug from '@em.lang/Debug.em'

export function startup(): void {
    Debug.startup()
    em.$['%%a:'](2)
    $R.CKMD.LFCLKSEL.$$ = e$`CKMD_LFCLKSEL_MAIN_LFXT`
    $R.CKMD.LFXTCTL.$$ = $R.CKMD_LFXTCTL_EN
    $R.CKMD.IMSET.$$ = $R.CKMD_IMSET_HFXTFAULT | $R.CKMD_IMSET_TRACKREFLOSS | $R.CKMD_IMSET_LFCLKGOOD
}
