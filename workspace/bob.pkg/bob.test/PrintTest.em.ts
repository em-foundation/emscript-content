import em from '@$$emscript'
export const em$_U = em.declare('MODULE')

import * as Console from '@em.lang/Console.em'

export namespace em$meta {
    // printf`x = %d\n`(10)
}

export function em$run() {
    printf`hello world\n`()
    // Console.print(t$`hello world\n`)
}
