import * as Fs from 'fs'
import * as Path from 'path'
import * as Ts from 'typescript'

namespace EM {

    export type i8 = number
    export type i16 = number
    export type i32 = number

    export type u8 = number
    export type u16 = number
    export type u32 = number

    export type bool = boolean

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

    export class param<T> {
        private $$em$config: string = 'param'
        private val: T | null = null
        constructor(val?: T) { this.val = val === undefined ? null : val }
        get $$(): T | null { return this.val }
        set $$(v: T) { this.val = v }
    }

    export class proxy<I extends Object> {
        private $$em$config: string = 'proxy'
        private bound: boolean = false
        private prx: I = isa<I>()
        get $$(): I { return this.prx}
        set $$(delegate: I) { 
            this.prx = delegate
            this.bound = true
        }
    }

    export class ptr<T> {
        $: T | null = null
    }

    export function* range(min: number, max: number): Iterable<number> {
        for (let i = min; i < max; i++) {
            yield i
        }
    }

    export function reg(addr: any): {$$: any} { return {$$: undefined}}

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

    // privates

    interface UnitDesc {
        readonly uid: string
        readonly kind: UnitKind
    }

    let unit_map = new Map<string, Unit>()


    export function $Ref<T>(): _Ref<T> {
        return new _Ref<T>()
    }

    class _Ref<T> {
        private _v: T
        public get val(): T { return this._v }
        public set val(v: T) { this._v = v }
    }
}

export default EM