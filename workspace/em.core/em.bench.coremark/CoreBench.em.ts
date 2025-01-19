import em from '@$$emscript'
export const em$_U = em.$declare('MODULE')

import * as Crc from '@em.bench.coremark/Crc.em'
import * as ListBench from '@em.bench.coremark/ListBench.em'
import * as MatrixBench from '@em.bench.coremark/MatrixBench.em'
import * as StateBench from '@em.bench.coremark/StateBench.em'
import * as Utils from '@em.bench.coremark/Utils.em'

const TOTAL_DATA_SIZE = $param<u16>(2000)
const NUM_ALGS = $param<u8>(3)

export namespace em$meta {

    export function em$configure() {
        let memsize = Math.floor(TOTAL_DATA_SIZE.$$ / NUM_ALGS.$$)
        ListBench.memsize.$$ = memsize
        MatrixBench.memsize.$$ = memsize
        StateBench.memsize.$$ = memsize
    }

    export function em$construct() {
        Utils.em$meta.bindSeed(1, 0x0)
        Utils.em$meta.bindSeed(2, 0x0)
        Utils.em$meta.bindSeed(3, 0x66)
    }
}

export function kind(): Utils.Kind {
    return Utils.Kind.FINAL
}

export function print() {
    ListBench.print()
    MatrixBench.print()
    StateBench.print()
}

export function run(arg: i16): Utils.sum_t {
    let crc = ListBench.run(1)
    Utils.setCrc(Utils.Kind.FINAL, Crc.add16(<i16>crc, Utils.getCrc(Utils.Kind.FINAL)))
    crc = ListBench.run(-1)
    Utils.setCrc(Utils.Kind.FINAL, Crc.add16(<i16>crc, Utils.getCrc(Utils.Kind.FINAL)))
    Utils.bindCrc(Utils.Kind.LIST, Utils.getCrc(Utils.Kind.FINAL))
    return Utils.getCrc(Utils.Kind.FINAL)
}

export function setup() {
    ListBench.setup()
    MatrixBench.setup()
    StateBench.setup()
}

// export function em$run() {
// 
//     em.$['%%a']
//     ListBench.setup()
//     em.$['%%a+']
//     let crc = ListBench.run(1)
//     em.$['%%a-']
//     ListBench.print()
//     printf`\ncrc = %04x\n`(crc)
// 
//     // em.$['%%a']
//     // StateBench.setup()
//     // em.$['%%a+']
//     // let crc = StateBench.run(0)
//     // em.$['%%a-']
//     // StateBench.print()
//     // printf`\ncrc = %04x\n`(crc)
// 
//     // em.$['%%a']
//     // MatrixBench.setup()
//     // em.$['%%a+']
//     // let crc = MatrixBench.run(0)
//     // em.$['%%a-']
//     // MatrixBench.print()
//     // printf`\ncrc = %04x\n`(crc)
// }
