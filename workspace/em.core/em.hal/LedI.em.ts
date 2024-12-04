import em from '@EM-SCRIPT'
export const em$_U = em.declare<em$_I>('INTERFACE', __filename)

export interface em$_I {
    off(): void
    on(): void
    toggle(): void
    wink(msecs: em.u32): void
}
