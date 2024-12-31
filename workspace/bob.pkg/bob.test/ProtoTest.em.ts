import em from '@$$emscript'
export const em$_U = em.declare('MODULE')

export namespace em$meta {


    const Pair = {
        x: em.U8(),
        y: em.U8()
    }

    const Vec = em.Array(em.U8(), 4)
    const Mat = em.Array(Vec, 3)

    const MyStruct = {
        max: em.U32(),
        // tab: Buf(em.U8(), 8),
        // tab: MyTab,
    }

    // console.log(em.memoryof(MyStruct))


    const p1 = em.instantiate(Pair)
    const p2 = em.instantiate(Pair)

    p1.x = 10

    console.log(p1)

    // console.log(em.$create(Pair))

}
