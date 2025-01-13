import em from '@$$emscript'
export const em$_U = em.declare('MODULE')

export namespace em$meta {

    // type Pair = {
    //     x: i16
    //     y: i8
    // }
    // type Info = {
    //     p: Pair
    //     b: bool_t
    // }
    type Pair = struct_t<{
        x: i16
        y: i16
    }>

    console.log($sizeof<Pair>)


    type Nested = struct_t<{
        a: i16
        b: struct_t<{
            c: u8
            d: bool_t
        }>
        e: i32
    }>

    console.log($sizeof<Nested>)  // Expected output: 2 + (1 + 1) + 4 = 8

}
