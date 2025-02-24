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

    const pid = pin_num.$$ & 0xFF
    const port = <u8>(pin_num.$$ >> 8)
    const mask = 1 << pid

    const GPIOn = e$`MXC_GPIO_GET_GPIO(port)`

    export function clear(): void {
        e$`GPIOn->out_clr = mask`
    }

    export function functionSelect(select: u8): void {
        e$`GPIOn->en0_clr = mask`
        e$`GPIOn->en1_set = mask`
    }

    export function get(): bool_t {
        return false
    }

    export function isInput(): bool_t {
        return false
    }

    export function isOutput(): bool_t {
        return true
    }

    export function makeInput(): void {
        e$`GPIOn->outen_clr = mask`
        e$`GPIOn->en0_set = mask`
    }

    export function makeOutput(): void {
        e$`GPIOn->outen_set = mask`
        e$`GPIOn->en0_set = mask`
    }

    export function pinId(): i16 {
        return pid
    }

    export function reset(): void {

    }

    export function set(): void {
        e$`GPIOn->out_set = mask`
    }

    export function setInternalPulldown(enable: bool_t): void {

    }

    export function setInternalPullup(enable: bool_t): void {

    }

    export function toggle(): void {
        e$`GPIOn->out ^= mask`
    }
}

export function $clone() { return { $T, ...em$template } }
