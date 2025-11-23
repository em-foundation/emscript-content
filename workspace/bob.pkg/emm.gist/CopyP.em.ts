import '@$$emscript'
export const $U = $declare('MODULE')

export namespace em$meta { }

//>> ---- em$targ ---- <<//

export function em$run() {
    let sz = <u32>e$`&__code_size__`
    let src = <ptr_t<u32>>e$`&__code_load__`
    let dst = <ptr_t<u32>>e$`&__code_addr__`
    printf`sz = %d, src = %06x, dst = %06x\n`(sz, src, dst)
    dst.$$ = src.$$
    printf`s0 = %08x, d0 = %08x\n`(src.$$, dst.$$)
}