import * as Fs from 'fs'
import * as Path from 'path'
import * as Ts from 'typescript'

namespace em {

    const __BUFFER__ = null
    // #region

    class $$Buffer<T extends Object> {
        $$: Array<T>
        $memory: MemInfo
        constructor(proto: T, size: number) {
            let mi = $memory(proto)
            this.$memory = {size: mi.size * size, align: mi.align }
            this.$$ = new Array<T>(size)
            for (let i = 0; i < size; i++) this.$$[i] = clone(proto)
        }
    }
    export function buffer_t<T extends Object>(proto: T, size: number): Indexable<T> & {$$: ReadonlyArray<T>, $memory: MemInfo} {
        const handler = {
            get(targ: any, prop: string | symbol) {
                const idx = Number(prop)
                if (!isNaN(idx)) return targ.$$[idx]
                switch (prop) {
                    case '$$': return targ.$$ as ReadonlyArray<T>
                    default: return targ[prop]
                }
            }
        }
        return new globalThis.Proxy(new $$Buffer(proto, size), handler)
    }

    // #endregion

    const __DEBUG__ = null
    // #region

    export function fail() { }
    export function halt() { }

    export const $ = {
        '%%>': (val: any) => null as null,
        '%%a': null as null,
        '%%a+': null as null,
        '%%a-': null as null,
        '%%a:': (val: u8) => null as null,
        '%%b': null as null,
        '%%b+': null as null,
        '%%b-': null as null,
        '%%b:': (val: u8) => null as null,
        '%%c': null as null,
        '%%c+': null as null,
        '%%c-': null as null,
        '%%c:': (val: u8) => null as null,
        '%%d': null as null,
        '%%d+': null as null,
        '%%d-': null as null,
        '%%d:': (val: u8) => null as null,
    }

    // #endregion

    const __PARAM__ = null
    // #region

    class em$param_t<T> {
        private $$em$config: string = 'param'
        private val: T | null = null
        constructor(val?: T) { this.val = val === undefined ? null : val }
        get $$(): T { return this.val! }
        set $$(v: T) { this.val = v }
    }
    export function param<T>(val?: T): em$param_t<T> {
        return new em$param_t<T>(val)
    }

    // #endregion

    const __PROTO__ = null
    // #region

    class Proto_t<T extends Object> {
        readonly $memory: MemInfo
        constructor(readonly $obj: T) {
            this.$memory = $memory($obj)
        }
        get<K extends keyof T>(key: K): T[K] { return this.$obj[key] }
    }
    export function proto<T extends Object>(obj: T): T & Sized {
        const handler = {
            get(targ: any, prop: string | symbol) {
                switch (prop) {
                    case '$alignof': return targ.$memory.align
                    case '$sizeof': return targ.$memory.size
                    default: return targ.get(prop)
                }
            }
        }
        return new globalThis.Proxy(new Proto_t(obj), handler)
    }

    // #endregion

    const __PROXY__ = null
    // #region
    
    class em$proxy_t<I extends Object> {
        private $$em$config: string = 'proxy'
        private bound: boolean = false
        private prx: I = isa<I>()
        private dunit: Unit | null = null
        get $$(): I { return this.prx }
        set $$(delegate: I) {
            this.prx = delegate
            this.bound = true
            if ('em$_U' in delegate) this.dunit = delegate.em$_U as Unit
        }
    }
    export function Proxy<I extends Object>(): em$proxy_t<I> {
        return new em$proxy_t<I>()
    }

    export function Delegate<U extends Object>(unit: U): em$proxy_t<U> {
        const prx = new em$proxy_t<U>()
        prx.$$ = unit
        return prx
    }

    // #endregion

    const __SCALAR__ = null
    // #region

    export type bool_t = boolean
    export type i8 = number
    export type i16 = number
    export type i32 = number
    export type u8 = number
    export type u16 = number
    export type u32 = number

    class em$Scalar<T> {
        private $val: T
        private $memory: MemInfo
        constructor(val: T, sz: number) {
            this.$val = val
            this.$memory = {size: sz, align: sz}
        }
        get $alignof(): number { return this.$memory.align }
        get $sizeof(): number { return this.$memory.size }
        get $$(): T { return this.$val }
        set $$(val: T) { this.$val = val }
    }
    export function Bool(val: bool_t = false): em$Scalar<bool_t> & Sized { return new em$Scalar(val, 1) }
    export function I8(val: i8 = 0): em$Scalar<i8> & Sized { return new em$Scalar(val, 1) }
    export function I16(val: i16 = 0): em$Scalar<i16> & Sized { return new em$Scalar(val, 2) }
    export function I32(val: i32= 0): em$Scalar<i32> & Sized { return new em$Scalar(val, 4) }
    export function U8(val: u8 = 0): em$Scalar<u8> & Sized { return new em$Scalar(val, 1) }
    export function U16(val: u16 = 0): em$Scalar<u16> & Sized { return new em$Scalar(val, 2) }
    export function U32(val: u32 = 0): em$Scalar<u32> & Sized { return new em$Scalar(val, 4) }

    // #endregion

    const __STRUCT__ = null
    // #region

    export function struct_t<T extends Object>(inst: T): T & Sized {
        class Struct_t {
            $inst: T
            $memory: MemInfo
            constructor(proto: T) {
                this.$inst = clone((proto as any).$obj)
                this.$memory = $memory(proto)
            }
            get<K extends keyof T>(key: K): T[K] { return this.$inst[key] }
            get $$() { return this.$inst }
        }
        const handler = {
            get(targ: any, prop: string | symbol) {
                switch (prop) {
                    case '$alignof': return targ.$memory.align
                    case '$sizeof': return targ.$memory.size
                    default: return targ.get(prop)
                }
            }
        }
        return new globalThis.Proxy(new Struct_t(clone(inst)), handler)
    }

    // #endregion

    const __TABLE__ = null
    // #region

    type TableAccess = 'ro' | 'rw'

    class em$table_t<T> {
        private $$em$config: string = 'table'
        private elems: T[] = []
        constructor(readonly access: TableAccess) {}
        get $$(): T[] { return this.elems }
        $add(e: T) { this.elems.push(e) }
        get $len(): u16 { return this.elems.length }
    }
    export function table<T>(access: TableAccess = 'rw'): em$table_t<T> & Indexable<T> {
        const handler = {
            get(targ: any, prop: string | symbol) {
                const idx = Number(prop)
                if (!isNaN(idx)) return targ.$$[idx]
                switch (prop) {
                    default: return targ[prop]
                }
            },
            set(targ: any, prop: string | symbol, val: any) {
                const idx = Number(prop)
                if (isNaN(idx)) return false
                targ.$$[idx] = val
                return true
            }
        }
        return new globalThis.Proxy(new em$table_t(access), handler)
    }

    // #endregion

    const __TEXT__ = null
    // #region

    export type text_t = em$text_t
    
    class em$text_t {
        private str: string
        constructor(str: string) { this.str = str }
        private get $$() { return this.str }
        get $len() { return this.str.length }
    }
    export function text_t(str: string): em$text_t & Indexable<u8> {
        const handler = {
            get(targ: any, prop: string | symbol) {
                const idx = Number(prop)
                if (!isNaN(idx)) return targ.$$.charCodeAt(idx)
                switch (prop) {
                    default: return targ[prop]
                }
            }
        }
        return new globalThis.Proxy(new em$text_t(str), handler)
    }

    // #endregion

    const __TRAITS__ = null
    // #region

    export class ptr<T> {
        $: T | null = null
    }

    export function $Ref<T>(): _Ref<T> {
        return new _Ref<T>()
    }

    class _Ref<T> {
        private _v: T
        public get val(): T { return this._v }
        public set val(v: T) { this._v = v }
    }

    export type volatile_t<T> = T

    export interface $Reg {
        $$: number
        $: $Reg[]
    }

    type Indexable<T> = { [index: number]: T }

    interface Boxed<T> {
        $$: T
    }

    interface MemInfo {
        size: number
        align: number
    }

    type Sized = {
        $alignof: number
        $sizeof: number
    }

    // #endregion

    const __UNIT__ = null
    // #region

    export function declare(kind: UnitKind, path?: string): Unit {
        const uid = `${Path.basename(Path.dirname(path!))}/${Path.basename(path!, '.em.ts')}`
        const unit = new Unit(uid, kind)
        unit_map.set(uid, unit)
        return unit
    }

    type UnitKind = 'MODULE' | 'INTERFACE' | 'COMPOSITE' | 'TEMPLATE'

    export class Unit {
        private _used: boolean = false
        constructor(
            readonly uid: string,
            readonly kind: UnitKind,
        ) { }
        used() { this._used = true }
    }

    export function $units(): ReadonlyArray<UnitDesc> {
        return Array.from(unit_map.values())
    }

    interface UnitDesc {
        readonly uid: string
        readonly kind: UnitKind
    }

    let unit_map = new Map<string, Unit>()



    // #endregion

    const __UTILS__ = null
    // #region

    function clone<T extends Object>(obj: T): T {
        if (obj === null || typeof obj !== 'object') {
            return obj
        }
        if (Array.isArray(obj)) {
            return obj.map(e => clone(e)) as unknown as T
        }
        const cobj = Object.create(Object.getPrototypeOf(obj), Object.getOwnPropertyDescriptors(obj))
        for (const key of Object.keys(cobj)) {
            cobj[key] = clone(cobj[key])
        }
        return cobj
    }

     export function isa<T extends Object>(): T {
        return new globalThis.Proxy({} as T, {
            get(_, prop: string) {
                return (...args: any[]) => {
                    return undefined; // Adjust this for specific return types if necessary
                };
            }
        });
    }
    
    export function* range(min: number, max: number): Iterable<number> {
        for (let i = min; i < max; i++) {
            yield i
        }
    }

    function $memory(obj: Object): MemInfo {
        const mi = (obj as any).$memory
        if (mi) return mi
        const align = (sz: number, al: number): number => {
            return (sz + al - 1) & ~(al - 1)
        }
        let res = { size: 0, align: 0 }
        for (const [key, val] of Object.entries(obj)) {
            if (!val.$memory) throw new Error(`*** $memory: no information available for field '${key}' `)
            const sz = val.$memory.size
            if (sz > res.align) res.align = sz
            res.size = align(res.size, sz) + sz
        }
        res.size = align(res.size, res.align)
        return res
    }

    export class OutFile {
        static readonly TAB = 4
        private col: number
        private text: Array<string>
        constructor(readonly path: string) {
            this.col = 0
            this.path = path
            this.text = []
        }
        addFile(path: string) {
            this.addText(String(Fs.readFileSync(path)))
        }
        addFrag(frag: string) {
            this.addText(frag.replaceAll(/^\s+\|-> /gm, '').trim())
            this.addText('\n')
        }
        addText(...text: string[]) {
            text.forEach(t => this.text.push(t))
        }
        clearText(): string {
            let res = this.getText()
            this.col = 0
            this.text = []
            return res
        }
        close() {
            Fs.mkdirSync(Path.dirname(this.path), { recursive: true })
            Fs.writeFileSync(this.path, this.getText())
        }
        genTitle(msg: string) {
            this.print("\n// -------- %1 -------- //\n\n", msg)
        }
        getText(): string {
            return this.text.join('')
        }
        print(fmt: string, a0?: any, a1?: any, a2?: any, a3?: any) {
            let res = ""
            let idx = 0
            while (idx < fmt.length) {
                const c = fmt.charAt(idx++)
                if (c != '%') {
                    res += c
                    continue
                }
                switch (fmt.charAt(idx++)) {
                    case '%':
                        res += '%'
                        continue
                    case 't':
                        res += ' '.repeat(this.col)
                        continue
                    case '+':
                        this.col += OutFile.TAB
                        continue
                    case '-':
                        this.col && (this.col -= OutFile.TAB)
                        continue
                    case '1':
                        res += a0
                        continue
                    case '2':
                        res += a1
                        continue
                    case '3':
                        res += a2
                        continue
                    case '4':
                        res += a3
                        continue
                }
            }
            this.addText(res)
        }
    }

    // #endregion
}

export default em