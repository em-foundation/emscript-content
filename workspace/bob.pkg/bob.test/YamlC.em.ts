import em from '@$$emscript'
export const $U = em.$declare('COMPOSITE')

class Board {
    activeLowLeds: boolean = false
    pins = {
        appBut: <i16>-1,
        appLed: <i16>-1,
        appOut: <i16>-1,
        sysDbgA: <i16>-1,
        sysDbgB: <i16>-1,
        sysDbgC: <i16>-1,
        sysDbgD: <i16>-1,
        sysLed: <i16>-1,
    }
    static DEFAULTS = new Board()
    constructor(init?: Partial<Board>) {
        if (init) {
            Object.assign(this, init)
            if (init.pins) {
                for (const key in Board.DEFAULTS.pins) {
                    const k = key as keyof Board['pins']
                    if (init.pins[k] === undefined) {
                        init.pins[k] = Board.DEFAULTS.pins[k]
                    }
                }
            }
        }
    }
}

export function em$construct() {
    const brd = $board(Board)
    // console.log(brd.pins.appBut)
    console.log(brd)
}