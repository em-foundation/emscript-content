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

    export class Unit<T extends Object> {
        private _used: boolean = false
        constructor(
            readonly uid: string,
            readonly kind: UnitKind,
            readonly proto: T,
        ) { }
        used() { this._used = true }
    }

    export function declare<T extends Object = {}>(kind: UnitKind, path?: string): Unit<T> {
        const uid = `${Path.basename(Path.dirname(path!))}/${Path.basename(path!, '.em.ts')}`
        const stubs = genStubs<T>()
        const unit = new Unit<T>(uid, kind, stubs)
        unit_map.set(uid, unit)
        return unit
    }

    export function halt() { }

    export class param<T> {
        private $$em$config: string = 'param'
        private val: T | null = null
        constructor(val?: T) { this.val = val === undefined ? null : val }
        getM(): T | null { return this.val }
        setM(v: T) { this.val = v }
        unwrap(): T { return this.val! }
    }

    export class proxy<I extends Object> {
        private $$em$config: string = 'proxy'
        private prx: I = genStubs<I>()
        getM(): I { return this.prx }
        setM(delegate: I): void {
            (delegate as any).em$_U.used()
            this.prx = delegate }
        unwrap(): I { return this.prx }
    }

    export class ptr<T> {
        $: T | null = null
    }

    export function* range(min: number, max: number): Iterable<number> {
        for (let i = min; i < max; i++) {
            yield i
        }
    }

    export function $units(): ReadonlyArray<UnitDesc> {
        return Array.from(unit_map.values())
    }

    // privates

    interface UnitDesc {
        readonly uid: string
        readonly kind: UnitKind
    }

    let unit_map = new Map<string, Unit<Object>>

    function genStubs<T extends Object>(): T {
        return new Proxy({} as T, {
            get(_, prop: string) {
                return (...args: any[]) => {
                    return undefined; // Adjust this for specific return types if necessary
                };
            }
        });
    }

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