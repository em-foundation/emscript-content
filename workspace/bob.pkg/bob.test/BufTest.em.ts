import em from '@$$emscript'
export const em$_U = em.declare('MODULE')

export namespace em$meta {
    const buf = em.buffer_t(em.U32(10), 5)
    console.log(buf[2])
}
