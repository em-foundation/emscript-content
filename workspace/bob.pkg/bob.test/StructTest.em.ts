import em from '@$$emscript'
export const em$_U = em.declare('MODULE')

export namespace em$meta {

    const Pair = {
        x: em.I16(),
        y: em.I16(),
    }

    const Obj = {
        z: em.U32(),
        p: em.struct_t(Pair),
        y: em.U16(),
        x: em.U8(),
        c: em.U8()
    }

    console.log(em.$memory(Obj))

    // let o1 = em.struct_t(Obj)

    // o1.x.$$ += 10
    // console.log(o1.$tot_sz, o1.$max_al)
}

export function em$run() {
}
