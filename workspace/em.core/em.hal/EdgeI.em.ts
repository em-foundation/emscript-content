import em from '@$$emscript'
export const em$_U = em.$declare('INTERFACE')

export type Handler = cb_t<[]>

export interface em$meta {
    setDetectHandler(h: Handler): void
}

export interface em$_I {
    em$meta: em$meta
    clearDetect(): void
    disableDetect(): void
    enableDetect(): void
    getState(): bool_t
    init(pullup: bool_t): void
    setDetectFalling(): void
    setDetectRising(): void
}
