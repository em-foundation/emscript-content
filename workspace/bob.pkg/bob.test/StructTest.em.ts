import em from '@$$emscript'
export const em$_U = em.declare('MODULE')

class Pair extends $struct {
    x: i16 = 10
    y: i16 = 20
}

var p = Pair.$make()

export namespace em$meta {

    // class S {
    //     static $make(): S { return new this }
    //     x: i16
    // }
    // const s = S.$make()
    // console.log(s)

    // console.log($sizeof<Pair>)


    //    const Pair = $struct({
    //        x: $i16(),
    //        y: $i16()
    //    })
    //    // console.log(Pair)
    //    // console.log(Pair.$sizeof)
    //
    //    const p = Pair.$make()
    //    p.x = 10
    //    p.y = 20
    //    console.log(p)
    //    console.log(p.x)
    //    console.log(p.$sizeof)

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
    p.x += 10
    printf`x = %d, sz = %d\n`(p.x, $sizeof<Pair>)
}
