import em from '@$$emscript'
export const em$_U = em.$declare('MODULE')

import * as IntrVec from '@em.arch.arm/IntrVec.em'

function doWait() {
    em.$['%%b:'](0)
    em.$['%%b-']
    IntrVec.PRIMASK_set(1)
    'asm volatile ("wfi")'
    em.$['%%b+']
    IntrVec.PRIMASK_set(0)
}

export function exec() {
    doWait()
}

export function wakeup() {

}
