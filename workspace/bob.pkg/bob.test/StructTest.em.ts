import em from '@$$emscript'
export const em$_U = em.declare('MODULE')

export namespace em$meta {

    const PairPT = em.proto({
        x: em.U8(),
        y: em.U8()
    })

    const p1 = em.struct_t(PairPT)
    const p2 = em.struct_t(PairPT)

    // const p2 = em.struct_t(Pair)
    // console.log(p2)
    // const p2 = em.struct_t(Pair)

    p1.x.$$ = 10
    p2.x.$$ = 20

    console.log(p1.$sizeof, p1.x.$$ + p2.x.$$)
    console.log(p1.$sizeof)
}


export function em$run() {
}
