import em from '@$$emscript'
export const em$_U = em.$declare('MODULE')

class Obj extends $struct {
    x: u8 = 10
    foo: () => void
}

export function em$run() {
    let obj = Obj.$make()
    obj.foo()
}

function Obj__foo(self: ref_t<Obj>) {
    printf`x = %d\n`(self.$$.x)
}
