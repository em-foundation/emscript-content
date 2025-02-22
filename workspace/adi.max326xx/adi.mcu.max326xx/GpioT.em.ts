import em from '@$$emscript'
export const $T = em.$declare('TEMPLATE')

import * as GpioI from '@em.hal/GpioI.em'

export namespace em$template {

    export const $U = em.$declare('MODULE', GpioI)

    export const pin_num = $config<i16>(-1)

    export namespace em$meta {

        export function pinId(): i16 {
            return pin_num.$$
        }
    }

    const pn = pin_num.$$
    const mask = 1 << pn

    export function clear(): void {
    }

    export function functionSelect(select: u8): void {
    }

    export function get(): bool_t {
        return false
    }

    export function isInput(): bool_t {
        return false
    }

    export function isOutput(): bool_t {
        return false
    }

    export function makeInput(): void {
    }

    export function makeOutput(): void {
    }

    export function pinId(): i16 {
        return pn
    }

    export function reset(): void {
    }

    export function set(): void {
    }

    export function setInternalPulldown(enable: bool_t): void {
    }

    export function setInternalPullup(enable: bool_t): void {
    }

    export function toggle(): void {
    }
}

export function $clone() { return { $T, ...em$template } }
