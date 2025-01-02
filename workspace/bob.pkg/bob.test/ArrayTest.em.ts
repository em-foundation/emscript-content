import em from '@$$emscript'
export const em$_U = em.declare('MODULE')

export const Buf = em.Array(em.U8(), 5)

export namespace em$meta {
    // console.log(Buf)
}

export function em$run() {
    var my_buf = Buf.$make()
    my_buf[2] = 10
    em.halt()
}
