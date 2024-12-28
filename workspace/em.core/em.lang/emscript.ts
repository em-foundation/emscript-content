import * as Fs from 'fs'
import * as Path from 'path'
import * as Ts from 'typescript'

namespace em {

    export type bool_t = boolean
    export type i8 = number
    export type i16 = number
    export type i32 = number
    export type u8 = number
    export type u16 = number
    export type u32 = number

    export function Bool(val: bool_t = false): Sized_t<bool_t> { return new Sized_t(val, 1) }
    export function I8(val: i8 = 0): Sized_t<i8> { return new Sized_t(val, 1) }
    export function I16(val: i16 = 0): Sized_t<i16> { return new Sized_t(val, 2) }
    export function I32(val: i32= 0): Sized_t<i32> { return new Sized_t(val, 4) }
    export function U8(val: u8 = 0): Sized_t<u8> { return new Sized_t(val, 1) }
    export function U16(val: u16 = 0): Sized_t<u16> { return new Sized_t(val, 2) }
    export function U32(val: u32 = 0): Sized_t<u32> { return new Sized_t(val, 4) }

    export type UnitKind = 'MODULE' | 'INTERFACE' | 'COMPOSITE' | 'TEMPLATE'

    export class Unit {
        private _used: boolean = false
        constructor(
            readonly uid: string,
            readonly kind: UnitKind,
        ) { }
        used() { this._used = true }
    }

    class Buffer_t<T extends Object> {
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
        return new Proxy(new Buffer_t(proto, size), handler)
    }

    export function clone<T extends Object>(obj: T): T {
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

    export function declare(kind: UnitKind, path?: string): Unit {
        const uid = `${Path.basename(Path.dirname(path!))}/${Path.basename(path!, '.em.ts')}`
        const unit = new Unit(uid, kind)
        unit_map.set(uid, unit)
        return unit
    }

    export function delegate<U extends Object>(unit: U): em.proxy<U> {
        const prx = new em.proxy<U>()
        prx.$bind(unit)
        return prx
    }

    export function fail() { }
    export function halt() { }

    export function isa<T extends Object>(): T {
        return new Proxy({} as T, {
            get(_, prop: string) {
                return (...args: any[]) => {
                    return undefined; // Adjust this for specific return types if necessary
                };
            }
        });
    }

    export function $memory(obj: Object): MemInfo {
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

    export class param<T> {
        private $$em$config: string = 'param'
        private val: T | null = null
        constructor(val?: T) { this.val = val === undefined ? null : val }
        get $$(): T { return this.val! }
        $bind(v: T) { this.val = v }
    }

    export class proxy<I extends Object> {
        private $$em$config: string = 'proxy'
        private bound: boolean = false
        private prx: I = isa<I>()
        private dunit: Unit | null = null
        get $$(): I { return this.prx }
        $bind(delegate: I) {
            this.prx = delegate
            this.bound = true
            if ('em$_U' in delegate) this.dunit = delegate.em$_U as Unit
        }
    }

    export class ptr<T> {
        $: T | null = null
    }

    export function struct_t<T extends Object>(inst: T): T & { $inst: T, $memory: MemInfo } {
        class Struct_t {
            $inst: T
            $memory: MemInfo
            constructor(proto: T) {
                this.$inst = clone(proto)
                this.$memory = $memory(proto)
            }
            get<K extends keyof T>(key: K): T[K] { return this.$inst[key] }
            get $$() { return this.$inst }
        }
        const handler = {
            get(targ: any, prop: string | symbol) {
                switch (prop) {
                    case '$proto': return targ.$proto
                    case '$memory': return targ.$memory
                    default: return targ.get(prop)
                }
            }
        }
        return new Proxy(new Struct_t(clone(inst)), handler)
    }

    class Text_t {
        private str: string
        constructor(str: string) { this.str = str }
        private get $$() { return this.str }
        get $len() { return this.str.length }
    }

    export function text_t(str: string): Text_t & Indexable<u8> {
        const handler = {
            get(targ: any, prop: string | symbol) {
                const idx = Number(prop)
                if (!isNaN(idx)) return targ.$$.charCodeAt(idx)
                switch (prop) {
                    default: return targ[prop]
                }
            }
        }
        return new Proxy(new Text_t(str), handler)

    }

    export type volatile_t<T> = T

    export function* range(min: number, max: number): Iterable<number> {
        for (let i = min; i < max; i++) {
            yield i
        }
    }

    export function $units(): ReadonlyArray<UnitDesc> {
        return Array.from(unit_map.values())
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

    export interface $Reg {
        $$: number
        $: $Reg[]
    }

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

    const $$PRIVATES = null

    type Indexable<T> = { [index: number]: T }

    interface MemInfo {
        size: number
        align: number
    }

    interface UnitDesc {
        readonly uid: string
        readonly kind: UnitKind
    }

    let unit_map = new Map<string, Unit>()

    export function $Ref<T>(): _Ref<T> {
        return new _Ref<T>()
    }

    export class Sized_t<T> {
        $val: T
        $memory: MemInfo
        constructor(val: T, sz: number) {
            this.$val = val
            this.$memory = {size: sz, align: sz}
        }
        get $$(): T { return this.$val }
        set $$(val: T) { this.$val = val }
    }

    class _Ref<T> {
        private _v: T
        public get val(): T { return this._v }
        public set val(v: T) { this._v = v }
    }

}

export default em