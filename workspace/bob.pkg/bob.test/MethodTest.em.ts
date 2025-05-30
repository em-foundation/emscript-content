import em from '@$$emscript'
export const $U = em.$declare('MODULE')

class Obj extends $struct {
    x: u8 = 10
}
interface Obj {
    add(this: Obj, y: u8): u8
}

export function em$run() {
    let obj = Obj.$make()
    printf`z = %d\n`(obj.add(20))
}

Obj.prototype.add = function (this: Obj, y: u8): u8 {
    return this.x + y
}
