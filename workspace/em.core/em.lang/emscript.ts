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

    export function bool_t(val: bool_t): Sized_t<bool_t> { return new Sized_t(val, 1) }
    export function i8_t(val: i8): Sized_t<i8> { return new Sized_t(val, 1) }
    export function i16_t(val: i16): Sized_t<i16> { return new Sized_t(val, 2) }
    export function i32_t(val: i32): Sized_t<i32> { return new Sized_t(val, 4) }
    export function u8_t(val: u8): Sized_t<u8> { return new Sized_t(val, 1) }
    export function u16_t(val: u16): Sized_t<u16> { return new Sized_t(val, 2) }
    export function u32_t(val: u32): Sized_t<u32> { return new Sized_t(val, 4) }

    export type UnitKind = 'MODULE' | 'INTERFACE' | 'COMPOSITE' | 'TEMPLATE'

    export class Unit {
        private _used: boolean = false
        constructor(
            readonly uid: string,
            readonly kind: UnitKind,
        ) { }
        used() { this._used = true }
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

    export function $layout(obj: Object): { size: number, align: number} {
        const align = (sz: number, al: number): number => {
            return (sz + al - 1) & ~(al - 1)
        }
        let res = { size: 0, align: 0 }
        for (const [key, val] of Object.entries(obj)) {
            const sz = val.$sz
            if (!sz) throw new Error(`*** $sizeof: field '${key}' is of unsized type`)
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

    export function struct_t<T extends Object>(proto: T): T & { $proto: T, $tot_sz: number, $max_al: number } {
        const handler = {
            get(targ: any, prop: string | symbol) {
                switch (prop) {
                    case '$proto': return targ.$proto
                    case '$tot_sz': return targ.$tot_sz
                    case '$max_al': return targ.$max_al
                    default: return targ.get(prop)
                }
            }
        }
        return new Proxy(new Struct_t(proto), handler)
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
        $sz: number
        constructor(val: T, sz: number) {
            this.$val = val
            this.$sz = sz
        }
        get $$(): T { return this.$val }
        set $$(val: T) { this.$val = val }
    }

    export class Struct_t<T extends Object> {
        private static align(sz: number, al: number): number {
            return (sz + al - 1) & ~(al - 1)
        }
        $proto: T
        $tot_sz: number
        $max_al: number
        constructor(proto: T) {
            this.$proto = proto
            this.$tot_sz = 0
            this.$max_al = 1
            for (const [key, val] of Object.entries(proto)) {
                const sz = val.$sz
                if (!sz) throw new Error(`*** struct_t: field '${key}' is of unsized type`)
                const al = Struct_t.align(this.$tot_sz, sz)
                this.$max_al = Math.max(this.$max_al, al)
                this.$tot_sz += sz
                console.log(`tot_sz = ${this.$tot_sz}, max_al = ${this.$max_al}`)
                this.$tot_sz = Struct_t.align(this.$tot_sz, this.$max_al)
            }
        }
        get<K extends keyof T>(key: K): T[K] { return this.$proto[key] }
        get $$() { return this.$proto }
    }

    class _Ref<T> {
        private _v: T
        public get val(): T { return this._v }
        public set val(v: T) { this._v = v }
    }

}

export default em