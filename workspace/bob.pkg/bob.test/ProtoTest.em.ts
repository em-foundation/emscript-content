import em from '@$$emscript'
export const em$_U = em.declare('MODULE')

export namespace em$meta {

    const Vec = em.Array(em.U8(), 4)
    const vec = em.instantiate(Vec)
    const Mat = em.Array(Vec, 3)
    const mat = em.instantiate(Mat)

    // 
    // 
    // const Pair = {
    //     x: em.U8(),
    //     y: em.U8()
    // }
    // 
    // const p1 = em.instantiate(Pair)
    // const p2 = em.instantiate(Pair)
    // 
    // p1.x = 10
}
