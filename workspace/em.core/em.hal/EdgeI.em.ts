import em from '@$$emscript'
export const em$_U = em.$declare('INTERFACE')

export type Handler = cb_t<[]>

export namespace em$meta {
    export declare function setDetectHandler(h: Handler): void
}

export interface em$_I {
    clearDetect(): void
    disableDetect(): void
    enableDetect(): void
    getState(): bool_t
    init(pullup: bool_t): void
    setDetectFalling(): void
    setDetectRising(): void
}
