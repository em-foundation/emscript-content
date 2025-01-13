import em from '@$$emscript'
export const em$_U = em.declare('MODULE')

/*
type ElemType = {
    data: ReturnType<typeof $i16>
    elem: em.em$RefProto<ElemType> // Reference to ElemType
}

const Elem = $struct<ElemType>({
    data: $i16(),
    elem: em.ref<ElemType>(),
})

const e = Elem.$make()
e.data = 10
e.elem = new em.em$RefVal(e) // Assign directly, no errors
e.elem.target!.data = 20
*/


export namespace em$meta {

    type Proto<T> = {
        [K in keyof T]: T[K] extends em.em$Scalar<any> ? em.em$Scalar<any> : T[K] extends em.em$RefVal<any> ? em.em$RefVal<any> : never
    }

    function generateProto<T>(Ctor: new () => T): Proto<T> {
        const proto: any = new Ctor()
        for (const key in proto) {
            if (proto[key] instanceof em.em$Scalar) {
                proto[key] = 0
            } else if (proto[key] instanceof em.em$RefVal) {
                proto[key] = new em.em$RefVal(proto[key])
            }
        }
        return proto as Proto<T>
    }

    class ElemType {
        data: ReturnType<typeof $i16>
        elem: em.em$RefProto<ElemType> // Reference to ElemType
    }

    const ElemProto = generateProto(ElemType)
    const Elem = $struct(ElemProto)
    const e = Elem.$make()

    e.data = 10
    e.elem = new em.em$RefVal(e)
    e.elem.target!.data = 20

}
