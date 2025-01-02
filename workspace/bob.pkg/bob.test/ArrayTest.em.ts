import em from '@$$emscript'
export const em$_U = em.declare('MODULE')

export const Buf = em.Array(em.U8(), 5)

export namespace em$meta {
    // console.log(Buf)
}

export function em$run() {
    var my_buf = Buf.$make()
    for (let i = 0; i < my_buf.$len; i++) my_buf[i] = i + 10

    // my_buf[2] = em.$reg32[0xAA]
    em.$reg32[0xBB] = my_buf[2]
}
