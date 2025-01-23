import em from '@$$emscript'
export const em$_U = em.$declare('MODULE')

export const MHZ = $param<u16>(48)

const MAX = <u32>0x00FF_FFFF

export function start() {
    e$`SysTick->CTRL = (1 << SysTick_CTRL_CLKSOURCE_Pos) | (1 << SysTick_CTRL_ENABLE_Pos)`
    e$`SysTick->LOAD = 0xFFFFFF`
    e$`SysTick->VAL = 0`
}

export function stop(): u32 {
    let lr = <u32>e$`SysTick->LOAD`
    let vr = <u32>e$`SysTick->VAL`
    let dt = (((lr - vr) << 1) / MHZ.$$) >> 1
    e$`SysTick->CTRL = 0`
    return dt
}
