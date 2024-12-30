import em from '@$$emscript'
export const em$_U = em.declare('MODULE')

export namespace em$meta {
    const buf = em.Block(em.U32(), 5)
    buf[2].$$ = 10
    console.log(buf[2].$$)
}
