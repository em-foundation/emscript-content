import em from '@$$emscript'
export const em$_U = em.declare('MODULE')

export const Buf = em.Array(em.U8(), 5)
var buf = Buf.$make()

// export namespace em$meta {
//     let ptr = buf.$ptr()
//     for (let i = 0; i < buf.$len; i++) {
//         ptr.$$ = i + 10
//         ptr.$inc()
//     }
//     console.log(buf)
//     for (let e of buf) e.$$ *= 2
//     console.log(buf)
// }

export function em$run() {
    let ptr = buf.$ptr()
    em.$reg32[0xAA] = ptr.$$
    ptr.$inc()

}
