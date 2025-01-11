import em from '@$$emscript'
export const em$_U = em.declare('MODULE')

import * as Console from '@em.lang/Console.em'

export function em$run() {
    const s = t$`hello world\n`
    Console.puts(s.$ptr())
}
