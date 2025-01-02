import em from '@$$emscript'
export const em$_U = em.declare('MODULE')



export namespace em$meta {
    const Buf = em.Array(em.U8(), 5)
    let buf = Buf.$make()
    let ptr = buf.$ptr()
    for (let i = 0; i < buf.$len; i++) {
        ptr.$$ = i + 10
        ptr.$inc()
    }
    console.log(buf)
    for (let e of buf) e.$$ *= 2
    console.log(buf)
}
