import em from '@$$emscript'
export const $U = em.$declare('MODULE')

import * as Dev from '@em.rf.core/Dev.em'

export const ADV_CHAN = 37
export const ADV_CHAN_MAX = 39

export const ADV_IND = 0x00
export const ADV_DIRECT_IND = 0x01
export const ADV_NONCONN_IND = 0x02
export const ADV_SCAN_REQ = 0x03
export const ADV_SCAN_RSP = 0x04
export const ADV_CONNECT_IND = 0x05
export const ADV_SCAN_IND = 0x06
export const ADV_EXT_IND = 0x07

export class AdvHdr extends $struct {
    advType: u8
    pduLen: u8
    advA: Dev.Addr
    flagsLen: u8
    flagsCode: u8
    flagsVal: u8
    manLen: u8
    manCode: u8
    manIdLo: u8
    manIdHi: u8
    addData: (ptr: ptr_t<u8>, len: u8) => void
    init: (advType: u8) => void
    isMine: () => bool_t
}

export namespace em$meta { }

//>> ---- em$targ ---- <<//