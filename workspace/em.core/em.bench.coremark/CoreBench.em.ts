import em from '@$$emscript'
export const em$_U = em.declare('MODULE')

import * as MatrixBench from '@em.bench.coremark/MatrixBench.em'
import * as StateBench from '@em.bench.coremark/StateBench.em'
import * as Utils from '@em.bench.coremark/Utils.em'

const TOTAL_DATA_SIZE = $param<u16>(2000)
const NUM_ALGS = $param<u8>(3)

export namespace em$meta {

    export function em$configure() {
        let memsize = Math.floor(TOTAL_DATA_SIZE.$$ / NUM_ALGS.$$)
        MatrixBench.memsize.$$ = memsize
        StateBench.memsize.$$ = memsize
    }

    export function em$construct() {
        Utils.em$meta.bindSeed(1, 0x0)
        Utils.em$meta.bindSeed(2, 0x0)
        Utils.em$meta.bindSeed(3, 0x66)
    }
}

export function print() {
    MatrixBench.print()
    StateBench.print()
}

export function em$run() {
    StateBench.setup()
    em.$['%%a+']
    let crc = StateBench.run(0)
    em.$['%%a-']
    StateBench.print()
    printf`\ncrc = %04x\n`(crc)



    // MatrixBench.setup()
    // em.$['%%a+']
    // let crc = MatrixBench.run(0)
    // em.$['%%a-']
    // MatrixBench.print()
    // printf`\ncrc = %04x\n`(crc)
}
