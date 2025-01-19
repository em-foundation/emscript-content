import em from '@$$emscript'
export const em$_U = $declare('MODULE')

import * as Mod from '@bob.test/CfgMod.em'

export namespace em$meta {
    export function em$configure() {
        Mod.scalar.$$ = 20
    }
}

export function em$run() {
}
