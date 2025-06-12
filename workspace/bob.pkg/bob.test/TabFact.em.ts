import em from '@$$emscript'
export const $U = em.$declare('MODULE')

class Elem extends $struct {
    data: u8
    link: ref_t<Elem>
}

var elem_tab = $table<Elem>()

export namespace em$meta {
    export function em$init() {
        let prev = elem_tab.$null()
        for (const i of $range(3)) {
            const e = elem_tab.$$add(Elem.$make())
            e.$$.data = i + 10
            e.$$.link = prev
            prev = e
        }
    }
}

//>> ---- em$targ ---- <<//

export function em$run() {
    elem_tab.$ptr().$$.data
    // let efg = elem_tab.$ptr()
    // let e = efg.$$
    // printf`data = %d\n`(e.data)
    // for (const efg of elem_tab) {
    //     printf`link = %x\n`(efg.$$.link)
    // }
}