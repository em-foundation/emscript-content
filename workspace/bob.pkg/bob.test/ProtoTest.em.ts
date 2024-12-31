import em from '@$$emscript'
export const em$_U = em.declare('MODULE')

export namespace em$meta {


    const Vec = em.Arr(em.U8(), 4)
    const Mat = em.Arr(Vec, 3)

    // console.log(em.memoryof(Mat))
    // console.log(em.inst(Mat))

    const MyStruct = {
        max: em.U32(),
        // tab: Buf(em.U8(), 8),
        // tab: MyTab,
    }

    // console.log(em.memoryof(MyStruct))



    const Pair = {
        x: em.U8(),
        y: em.U8()
    }

    const p1 = em.$create(Pair)
    const p2 = em.$create(Pair)

    console.log(em.$create(Pair))

}
