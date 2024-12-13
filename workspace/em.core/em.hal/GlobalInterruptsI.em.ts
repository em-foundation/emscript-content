import em from '@$$em-script'
export const em$_U = em.declare('INTERFACE')

export type Key = em.u32

export interface em$_I {
    disable(): Key
    enable(): void
    isEnabled(): em.bool
    restore(key: Key): void
}
