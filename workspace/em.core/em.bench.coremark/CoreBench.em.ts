import em from '@$$emscript'
export const em$_U = em.declare('MODULE')

import * as Utils from '@em.bench.coremark/Utils.em'

export namespace em$meta {

    export function em$configure() {

    }

    export function em$construct() {
        Utils.em$meta.bindSeed(1, 0x0)
        Utils.em$meta.bindSeed(2, 0x0)
        Utils.em$meta.bindSeed(3, 0x66)
    }
}
