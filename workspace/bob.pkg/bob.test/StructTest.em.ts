import em from '@$$emscript'
export const em$_U = em.declare('MODULE')

export namespace em$meta {

    const Pair = em.Struct({
        x: em.I16(),
        y: em.I16()
    })
    const p = em.instantiate(Pair)
    p.x = 10
    p.y = 20
    console.log(p)

    // console.log(Pair)

    // const PairPT = em.proto({
    //     x: em.U8(),
    //     y: em.U8()
    // })
    // 
    // const p1 = em.struct_t(PairPT)
    // const p2 = em.struct_t(PairPT)
    // 
    // // const p2 = em.struct_t(Pair)
    // // console.log(p2)
    // // const p2 = em.struct_t(Pair)
    // 
    // p1.x.$$ = 10
    // p2.x.$$ = 20
    // 
    // console.log(p1.$sizeof, p1.x.$$ + p2.x.$$)
    // console.log(p1.$sizeof)
    // 
    // console.log(p1)
}


export function em$run() {
}
