import em from '@$$emscript'
export const em$_U = $declare('INTERFACE')

export type Key = u32

export interface em$_I {
    disable(): Key
    enable(): void
    isEnabled(): bool_t
    restore(key: Key): void
}
