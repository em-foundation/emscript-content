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
    type Bad = { k: u8 }
    const sz = $sizeof<Bad>
    console.log(sz)

}
