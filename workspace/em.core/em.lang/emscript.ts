import * as Fs from 'fs'
import * as Path from 'path'
import * as Ts from 'typescript'

namespace em {

    const __ARRAY__ = null
    // #region

    export function Array<T>(proto: T, len: number): em$ArrayProto<T> {
        return new em$ArrayProto(proto, len);
    }

    class em$ArrayProto<T> {
        readonly $base: T;
        readonly $len: number;
        constructor(proto: T, len: number) {
            this.$base = proto;
            this.$len = len;
        }
        $make() { return instantiate(this) }

    }
    class em$ArrayVal<T> {
        $len: number;
        private items: globalThis.Array<T>;
        [index: number]: T
        constructor(len: number, defaultVal: T) {
            this.$len = len;
            this.items = new globalThis.Array(len).fill(defaultVal);
            return new globalThis.Proxy(this, {
                get(target, prop) {
                    if (typeof prop === "string" && !isNaN(Number(prop))) {
                        return target.items[Number(prop)];
                    }
                    return (target as any)[prop];
                },
                set(target, prop, value) {
                    if (typeof prop === "string" && !isNaN(Number(prop))) {
                        target.items[Number(prop)] = value;
                        return true;
                    }
                    return false;
                },
            });
        }
        [Symbol.iterator](): Iterator<ref_t<T>> {
            let idx = 0
            let items = this.items
            return {
                next(): IteratorResult<ref_t<T>> {
                    if (idx < items.length) {
                        let cur = idx
                        idx += 1
                        return { value: new em$ptr<T>(items, cur), done: false }
                    }
                    else {
                        return { value: undefined as any, done: true }
                    }
                }
            }
        }
        $frame(beg: i16, len: u16 = 0) { return frame$create<T>(this.items, 0, beg, len) }
        $ptr() { return new em$ptr<T>(this.items) }
    }

    // #endregion

    const __CHAR__ = null
    // #region
    export function char_t(cs: string): u8 {
        return cs.charCodeAt(1)
    }

    export function $C(sa: TemplateStringsArray): em.u8 {
        return sa[0].charCodeAt(0)
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

    const __FRAME__ = null
    // #region

    class em$ptr<T> implements ptr_t<T> {
        constructor(private arr: T[], private idx: u16 = 0) { }
        get $$() { return this.arr[this.idx] }
        set $$(v: T) { this.arr[this.idx] = v }
        $cur() { return this.idx }
        $dec(step: u16 = 1) { this.idx -= step }
        $inc(step: u16 = 1) { this.idx += step }
    }

    class em$frame<T> {
        private items: T[]
        $start: u16
        $len: number
        [index: number]: T
        constructor(arr: T[], start: u16, len: u16 = 0) {
            this.items = arr
            this.$start = start
            this.$len = len
            return new globalThis.Proxy(this, {
                get(target, prop) {
                    if (typeof prop === "string" && !isNaN(Number(prop))) {
                        return target.items[start + Number(prop)];
                    }
                    return (target as any)[prop];
                },
                set(target, prop, value) {
                    if (typeof prop === "string" && !isNaN(Number(prop))) {
                        target.items[start + Number(prop)] = value;
                        return true;
                    }
                    return false;
                },
            })
        }
        [Symbol.iterator](): Iterator<em$ptr<T>> {
            let idx = 0
            let items = this.items
            return {
                next(): IteratorResult<em$ptr<T>> {
                    if (idx < items.length) {
                        let cur = idx
                        idx += 1
                        return { value: new em$ptr<T>(items, cur), done: false }
                    }
                    else {
                        return { value: undefined as any, done: true }
                    }
                }
            }
        }
        $frame(beg: i16, len: u16 = 0) { return frame$create<T>(this.items, this.$start, beg, len) }
    }

    function frame$create<T>(arr: T[], start: u16, beg: i16, len: u16): em$frame<T> {
        start = (beg < 0) ? arr.length + beg : start + beg
        len = (len == 0) ? arr.length - start : len
        return new em$frame<T>(arr, start, len)
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
    export function param<T>(val?: T): em$param_t<T> & Boxed<T> {
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
    export function Proxy<I extends Object>(): em$proxy_t<I> & Boxed<I> {
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

    export type bool_t = boolean // & { __bool?: never }
    export type i8 = number // & { __i8?: never }
    export type i16 = number // & { __i16?: never }
    export type i32 = number // & { __i32?: never }
    export type u8 = number // & { __u8?: never }
    export type u16 = number // & { __u16?: never }
    export type u32 = number // & { __u32?: never }

    export class em$Scalar<T> {
        $memory: MemInfo
        $name: string
        private $val: T
        constructor(name: string, val: T, sz: number) {
            this.$name = name
            this.$val = val
            this.$memory = { size: sz, align: sz }
        }
        get $alignof(): number { return this.$memory.align }
        get $sizeof(): number { return this.$memory.size }
        get $$(): T { return this.$val }
        set $$(val: T) { this.$val = val }
    }
    export function Bool(val: bool_t = false): Contained<bool_t> & em$Scalar<bool_t> { return new em$Scalar('boot_t', val, 1) }
    export function I8(val: i8 = 0): Contained<i8> & em$Scalar<i8> { return new em$Scalar('i8', val, 1) }
    export function I16(val: i16 = 0): Contained<i16> & em$Scalar<i16> { return new em$Scalar('i16', val, 2) }
    export function I32(val: i32 = 0): Contained<i32> & em$Scalar<i32> { return new em$Scalar('i32', val, 4) }
    export function U8(val: u8 = 0): Contained<u8> & em$Scalar<u8> { return new em$Scalar('u8', val, 1) }
    export function U16(val: u16 = 0): Contained<u16> & em$Scalar<u16> { return new em$Scalar('u16', val, 2) }
    export function U32(val: u32 = 0): Contained<u32> & em$Scalar<u32> { return new em$Scalar('u32', val, 4) }

    // #endregion

    const __STRUCT__ = null
    // #region

    export function Struct<T extends Record<string, any>>(fields: T): StructProto<T> {
        return new StructProto(fields);
    }

    class StructProto<T extends Record<string, any>> {
        constructor(public $fields: T) { }
        make() { return instantiate(this) }
    }

    // #endregion

    const __TABLE__ = null
    // #region

    type TableAccess = 'ro' | 'rw'

    class em$table_t<T> {
        private $$em$config: string = 'table'
        private elems: T[] = []
        constructor(readonly access: TableAccess) { }
        $add(e: T) { this.elems.push(e) }
        get $len(): u16 { return this.elems.length }
    }
    export function Table<T>(access: TableAccess = 'rw'): em$table_t<T> & Indexed<T> {
        const handler = {
            get(targ: any, prop: string | symbol) {
                const idx = Number(prop)
                if (!isNaN(idx)) return targ.elems[idx]
                switch (prop) {
                    default: return targ[prop]
                }
            },
            set(targ: any, prop: string | symbol, val: any) {
                const idx = Number(prop)
                if (isNaN(idx)) return false
                targ.elems[idx] = val
                return true
            }
        }
        return new globalThis.Proxy(new em$table_t(access), handler)
    }

    // #endregion

    const __TEXT__ = null
    // #region

    export function $T(sa: TemplateStringsArray): em$text_t & Indexed<u8> {
        return text(sa[0])
    }

    export type text_t = em$text_t & Indexed<u8>

    class em$text_t {
        private str: string
        constructor(str: string) { this.str = str }
        private get $$() { return this.str }
        get $len() { return this.str.length }
        [Symbol.iterator](): Iterator<u8> {
            let idx = 0
            let str = this.str
            return {
                next(): IteratorResult<u8> {
                    if (idx < str.length) {
                        let cur = idx
                        idx += 1
                        return { value: str.charCodeAt(cur), done: false }
                    }
                    else {
                        return { value: undefined as any, done: true }
                    }
                }
            }
        }
    }
    function text(str: string): text_t {
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

    export interface ref_t<T> {
        $$: T
    }

    export interface ptr_t<T> extends ref_t<T> {
        $cur(): u32
        $dec(step: u16): void
        $inc(step: u16): void
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

    export let $reg32: Indexed<u32>

    type Indexed<T> = { [index: number]: T }

    interface Boxed<T> {
        $$: T
    }

    type Contained<T> = Boxed<T> & Sized

    interface MemInfo {
        size: number
        align: number
    }

    interface Factory {
        alignof: number
        sizeof: number
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
        return globalThis.Array.from(unit_map.values())
    }

    interface UnitDesc {
        readonly uid: string
        readonly kind: UnitKind
    }

    let unit_map = new Map<string, Unit>()

    // #endregion

    const __UTILS__ = null
    // #region

    class em$BoxedVal<T> {
        $$: T
        constructor(v: T) { this.$$ = v }
    }

    type Unbox<T> = T extends { $$: infer U }
        ? U // For boxed scalars
        : T extends em$ArrayProto<infer Proto>
        ? em$ArrayVal<Unbox<Proto>> // Array case
        : T extends StructProto<infer Fields>
        ? { [K in keyof Fields]: Unbox<Fields[K]> }
        : never;

    export function instantiate<T extends Object>(proto: T): Unbox<T> {
        if ('$$' in proto) {  // Boxed scalar case
            return (proto as { $$: any }).$$ as Unbox<T>;
        }
        if (proto instanceof em$ArrayProto) {  // Array case
            const len = (proto as { $len: number }).$len;
            const elementProto = (proto as { $base: any }).$base
            const defaultVal = instantiate(elementProto);
            return new em$ArrayVal<Unbox<typeof elementProto>>(len, defaultVal) as Unbox<T>;
        }
        if (proto instanceof StructProto) {
            const obj: any = {};
            for (const key in proto.$fields) {
                obj[key] = instantiate(proto.$fields[key]);
            }
            return obj as Unbox<T>;
        }
        throw new Error('Unsupported proto type.');
    }

    export function clone<T extends Object>(obj: T): T {
        if (obj === null || typeof obj !== 'object') {
            return obj
        }
        if (globalThis.Array.isArray(obj)) {
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

    export function memoryof(obj: any): MemInfo {
        if (obj === null || typeof obj !== 'object') {
            return { size: Number.NaN, align: Number.NaN }
        }
        if (obj instanceof em.em$Scalar) {
            return obj.$memory
        }
        if (obj instanceof em$ArrayProto) {
            let mi = memoryof(obj.$base)
            mi.size *= obj.$len
            return mi
        }
        if (obj instanceof StructProto) {
            return memoryof(obj.$fields)
        }
        let res = { size: 0, align: 0 }
        const align = (sz: number, al: number): number => {
            return (sz + al - 1) & ~(al - 1)
        }
        for (const [key, val] of Object.entries(obj as Object)) {
            const mi = memoryof(val)
            if (Number.isNaN(mi.size)) throw new Error(`*** memoryof: unsized field '${key}' `)
            if (mi.align > res.align) res.align = mi.align
            res.size = align(res.size, mi.align) + mi.size
        }
        res.size = align(res.size, res.align)
        return res
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

    export function alignof(proto: Object): number {
        return memoryof(proto).size
    }

    export function sizeof(proto: Object): number {
        return memoryof(proto).size
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
