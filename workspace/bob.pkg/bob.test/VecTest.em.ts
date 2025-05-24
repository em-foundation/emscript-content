import em from '@$$emscript'
export const $U = em.$declare('MODULE')

class Pair extends $struct {
    x: u32
    y: u32
}

class Tab extends $vector<Pair> { $len = 10 }

var tab = Tab.$make()

export namespace em$meta {
    export function em$construct() {
        console.log($$tdefs)
    }
}

//>> ---- em$targ ---- <<//

export function em$run() {
}