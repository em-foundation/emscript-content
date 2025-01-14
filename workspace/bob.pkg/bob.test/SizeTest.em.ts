import em from '@$$emscript'
export const em$_U = em.declare('MODULE')

export namespace em$meta {

    class Pair extends $struct {
        x: i16 = 10
        y: i8 = -5
    }
    class Info extends $struct {
        p: Pair = Pair.$make()
        b: bool_t = true
    }
    const info = Info.$make()
    console.log($sizeof<Info>)
    console.log(info)

    /*
        type Nested = struct_t<{
            a: i16
            b: struct_t<{
                c: u8
                d: bool_t
            }>
            e: i32
        }>
    
        console.log($sizeof<Nested>)  // Expected output: 2 + (1 + 1) + 4 = 8
    */
}
