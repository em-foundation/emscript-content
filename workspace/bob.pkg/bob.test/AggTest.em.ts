import em from '@$$emscript'
export const em$_U = em.declare('MODULE')

export namespace em$meta {

    /*
    class MyClass {
        private $val: number;
    
        constructor(initialValue: number) {
            this.$val = initialValue;
        }
    
        get $$() {
            return this.$val;
        }
    
        set $$(value: number) {
            this.$val = value;
        }
    }
    
    const obj = new MyClass(10);
    obj.$$ = 20; // Uses the setter
    console.log(obj); // Only $val exists internally; no explicit $$ field is added.
    
    */

    const Pair = {
        x: em.I16(),
        y: em.I16(),
    }
    // 
    // const Obj = {
    //     z: em.U32(),
    //     p: em.struct_t(Pair),
    //     y: em.U16(),
    //     x: em.U8(),
    //     c: em.U8()
    // }

    // console.log(em.$memory(Obj))

    // const obj = em.struct_t(Obj)
    // console.log(em.$memory(obj))

    // const num = em.clone(em.U8())
    // const num = em.clone(proto)
    // console.log(num)
    // num.$$ = 10
    // console.log(num)

    // const buf = em.buffer_t(em.U32(), 5)
    // buf[2].$$ = 10
    // console.log(buf[2].$$, buf[3].$$)

    const p1 = em.struct_t(Pair)
    const p2 = em.struct_t(Pair)

    p1.x.$$ = 10
    p2.x.$$ = 20

    console.log(p1.x, p2.x)

    // let o1 = em.struct_t(Obj)

    // o1.x.$$ += 10
    // console.log(o1.$tot_sz, o1.$max_al)
}

export function em$run() {
}
