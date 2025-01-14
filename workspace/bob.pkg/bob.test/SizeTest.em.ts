import em from '@$$emscript'
export const em$_U = em.declare('MODULE')

export namespace em$meta {

    class Pair extends $struct {
        x: i16
        y: i8
    }
    class Info extends $struct {
        p: Pair
        b: bool_t
    }
    // type Pair = struct_t<{
    //     x: i16
    //     y: i16
    // }>

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
