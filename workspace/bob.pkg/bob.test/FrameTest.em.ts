import em from '@$$emscript'
export const em$_U = em.declare('MODULE')

export const Buf = em.Array(em.U8(), 3)

export namespace em$meta {
    let buf = Buf.$make()
    for (let i = 0; i < buf.$len; i++) buf[i] = 10 + i
    let ptr = buf.$ptr()
    for (let i = 0; i < buf.$len; i++) { ptr.$$ *= 2; ptr.$inc() }

    // let frm_a = buf.$frame(-5, 3)
    // for (let e of buf) e.$$ *= 2
    for (let e of buf) console.log(e.$$)
    // let frm_b = frm_a.$frame(1)
    // for (let e of frm_b) console.log(e.$$)


}
