import em from '@$$emscript'
export const em$_U = em.declare('INTERFACE')

export interface em$_I {
    set(time_us: u32): void
    spin(): void
    start(): void
    stop(o_raw: em.ptr_t<u32>): u32
}
