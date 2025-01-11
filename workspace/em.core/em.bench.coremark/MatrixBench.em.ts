import em from '@$$emscript'
export const em$_U = em.declare('MODULE')

import * as Utils from '@em.bench.coremark/Utils.em'

export const memsize = em.param<u16>(0)

type matdat_t = i16
type matres_t = i32

const dimN = em.param<u8>(0)

var matA = em.Table<matdat_t>('rw')
var matB = em.Table<matdat_t>('rw')
var matC = em.Table<matres_t>('rw')

export namespace em$meta {

    export function em$construct() {
        let i = 0
        let j = 0
        while (j < memsize.$$) {
            i += 1
            j = i * i * 2 * 4
        }
        dimN.$$ = i - 1
        for (let i = 0; i < dimN.$$ * dimN.$$; i++) {
            matA.$add(0)
            matB.$add(0)
            matC.$add(0)
        }
    }
}

export function print() {
    prDat(t$`A`, matA.$frame(0))
    prDat(t$`B`, matB.$frame(0))
}

export function setup() {
    let s32 = (Utils.getSeed(1) as u32) | ((Utils.getSeed(2) as u32) << 16)
    let sd = s32 as matdat_t
    if (sd == 0) sd = 1
    let order = 1 as matdat_t
    for (let i = 0; i < dimN.$$; i++) {
        for (let j = 0; j < dimN.$$; j++) {
            sd = ((order * sd) % 65536) as matdat_t
            let val = (sd + order) as matdat_t
            val = clip(val, false)
            matB[i * dimN.$$ + j] = val
            val += order
            val = clip(val, true)
            matA[i * dimN.$$ + j] = val
            order += 1
        }
    }
}

/*

def setup()
    auto s32 = <uint32>Utils.getSeed(1) | (<uint32>Utils.getSeed(2) << 16)
    auto sd = <matdat_t>s32
    sd = 1 if sd == 0
    auto order = <matdat_t>1
    for auto i = 0; i < dimN; i++
        for auto j = 0; j < dimN; j++
            sd = <int16>((order * sd) % 65536)
            auto val = <matdat_t>(sd + order)
            val = clip(val, false)
            matB[i * dimN + j] = val
            val += order
            val = clip(val, true)
            matA[i * dimN + j] = val
            order += 1
        end
    end
end

*/

// private

function clip(d: matdat_t, b: bool_t): matdat_t {
    let x = d as u16
    return (x & (b ? 0x0ff : 0x0ffff)) as matdat_t
}

function prDat(lab: text_t, mat: frame_t<matdat_t>) {
    printf`\n%s:\n    `(lab)
    for (let i = 0; i < dimN.$$; i++) {
        let sep = t$``
        for (let j = 0; j < dimN.$$; j++) {
            printf`%s%d`(sep, mat[i * dimN.$$ + j])
            sep = t$`,`
        }
        printf`\n    `()
    }
}

/*
    for auto i = 0; i < dimN; i++
        auto sep = ""
        for auto j = 0; j < dimN; j++
            printf "%s%d", sep, mat[i * dimN + j]
            sep = ","
        end
        printf "\n    "
    end

*/
