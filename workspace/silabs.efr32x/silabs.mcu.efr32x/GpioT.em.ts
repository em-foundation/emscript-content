import '@$$emscript'
export const $T = $declare('TEMPLATE')

import * as $R from '@silabs.distro.efr32x/REGS.em'

import * as GpioI from '@em.hal/GpioI.em'

export namespace em$template {
    export const $U = $declare('MODULE', GpioI)

    export const pin_num = $config<i16>(-1)

    export namespace em$meta {
        export function pinId(): i16 {
            return pin_num
        }
    }

    const pid = pin_num & 0xff
    const pn = <u8>(pin_num >> 8) - 0xA
    const mask = 1 << pid

    export function clear(): void {
        $R.GPIO.P_CLR[pn].DOUT.$$ = 1 << pid
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
        return true
    }

    export function makeInput(): void {
    }

    export function makeOutput(): void {
        $R.GPIO.P[pn].MODEL.$$ |= $R.GPIO_P_MODEL_MODE0_PUSHPULL << (pid * 4)
    }

    export function pinId(): i16 {
        return pid
    }

    export function reset(): void {
    }

    export function set(): void {
        $R.GPIO.P_SET[pn].DOUT.$$ = 1 << pid
    }

    export function setInternalPulldown(enable: bool_t): void {
    }

    export function setInternalPullup(enable: bool_t): void {
    }

    export function toggle(): void {
        $R.GPIO.P_TGL[pn].DOUT.$$ = 1 << pid
    }
}

export function $clone() {
    return { $T, ...em$template }
}
