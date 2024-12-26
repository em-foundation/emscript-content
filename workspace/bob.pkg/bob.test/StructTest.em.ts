import em from '@$$emscript'
export const em$_U = em.declare('MODULE')

export namespace em$meta {

    const Pair = {
        x: em.i16_t(0),
        y: em.i16_t(0),
    }

    const Obj = {
        z: em.u32_t(100),
        p: em.struct_t(Pair),
        y: em.u16_t(20),
        x: em.u8_t(10),
        c: em.u8_t(5)
    }

    console.log(em.$memory(Obj))

    // let o1 = em.struct_t(Obj)

    // o1.x.$$ += 10
    // console.log(o1.$tot_sz, o1.$max_al)
}

export function em$run() {
}
