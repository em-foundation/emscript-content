import em from '@$$emscript'
export const $U = em.$declare('MODULE')

export enum Phy {
    NONE, BLE_1M, PROP_1M, PROP_250K,
}

export const phy = $config<Phy>()

export namespace em$meta {
    export function em$init() {
        phy.$$ = Phy.BLE_1M
    }
}

//>> ---- em$targ ---- <<//

export function getPhy(): Phy {
    return phy.$$
}