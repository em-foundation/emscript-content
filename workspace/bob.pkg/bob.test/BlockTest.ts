import em from '@$$emscript'
export const em$_U = em.declare('MODULE')

const buf = em.Block(em.U32(), 5)

export namespace em$meta {
    buf[2].$$ = 100
    console.log(buf[2].$$)
    console.log(buf.$sizeof)
}
