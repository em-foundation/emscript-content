import em from '@$$emscript'
export const $U = em.$declare('MODULE')

export interface PowerTableEntry {
    power: {
        fraction: u8,
        dBm: u8,
    },
    tempCoeff: u8,
    value: {
        bits: {
            reserved: u16,
            ib: u16,
            gain: u16,
            mode: u16,
            noIfampRfLdoBypass: u16,
        },
        raw: u16,
    },
}

export declare const POWER_TABLE: frame_t<PowerTableEntry>

export namespace em$meta {
    export function em$construct() {
        $U.auxH()
    }
}

//>> ---- em$targ ---- <<//
