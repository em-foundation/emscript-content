import em from '@$$emscript'
export const $U = em.$declare('MODULE')

import * as $R from '@ti.distro.cc23xx/REGS.em'

import * as Common from '@em.mcu/Common.em'
import * as Dma from '@ti.mcu.cc23xx/Dma.em'

class ChanCtrl extends $struct {
    src_end_addr: u32
    dst_end_addr: u32
    ctrl_word: u32
    unused: u32
}

var ctrl_tab = $table<ChanCtrl>('rw', 8, 256)

const BUFLEN = 1000

var src_buf = $table<u32>('rw', BUFLEN)
var dst_buf = $table<u32>('rw', BUFLEN)

export namespace em$meta {
    export function em$construct() {
        for (const i of $range(BUFLEN)) {
            src_buf.$add(i)
        }
    }
}

//>> ---- em$targ ---- <<//

export function em$run() {
    const chan_mask = 1 << 6
    $R.CLKCTL.CLKENSET0.$$ = $R.CLKCTL_CLKENSET0_DMA
    $R.DMA.CFG.$$ = $R.DMA_CFG_MASTERENABLE
    $R.DMA.CTRL.$$ = <u32><arg_t>ctrl_tab.$ptr()
    $R.DMA.CLEARCHNLPRIALT.$$ = chan_mask
    $R.DMA.CLEARBURST.$$ = chan_mask
    $R.DMA.CLEARREQMASK.$$ = chan_mask
    ctrl_tab[6].src_end_addr = <u32><arg_t>src_buf.$ptr() + (BUFLEN * 4)
    ctrl_tab[6].dst_end_addr = <u32><arg_t>dst_buf.$ptr() + (BUFLEN * 4)
    ctrl_tab[6].ctrl_word = (BUFLEN << Dma.XFER_SIZE_S) |
        Dma.MODE_AUTO | Dma.SIZE_32 | Dma.SRC_INC_32 | Dma.DST_INC_32 | Dma.ARB_1024
    $R.DMA.SETCHANNELEN.$$ = chan_mask
    $R.DMA.SOFTREQ.$$ = chan_mask
    $['%%d+']
    while (($R.DMA.SETCHANNELEN.$$ & chan_mask) != 0) { }
    $['%%d-']
    $['%%c+']
    for (const i of $range(BUFLEN)) {
        dst_buf[i] = src_buf[i]
    }
    $['%%c-']
    // printf`last = %d\n`(dst_buf[BUFLEN - 1])
}