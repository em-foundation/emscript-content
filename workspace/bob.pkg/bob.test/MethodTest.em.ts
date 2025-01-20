import em from '@$$emscript'
export const em$_U = em.$declare('MODULE')

class Obj extends $struct {
    x: u8 = 10
    add: (y: u8) => u8
}

export function em$run() {
    let obj = Obj.$make()
    printf`z = %d\n`(obj.add(20))
}

function Obj__add(self: ref_t<Obj>, y: u8): u8 {
    return self.$$.x + y
}
