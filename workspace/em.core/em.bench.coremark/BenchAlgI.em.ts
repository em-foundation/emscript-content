import em from '@$$emscript'
export const em$_U = em.declare('INTERFACE')

import * as Utils from '@em.bench.coremark/Utils.em'

export interface em$_I {
    dump(): void
    kind(): Utils.Kind
    print(): void
    run(arg: i16): Utils.sum_t
    setup(): void
}
