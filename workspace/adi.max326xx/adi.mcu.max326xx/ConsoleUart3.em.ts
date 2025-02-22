import em from '@$$emscript'
export const $U = em.$declare('MODULE', ConsoleUartI)

import * as ConsoleUartI from '@em.hal/ConsoleUartI.em'

export namespace em$meta {}

export function flush(): void {
}

export function put(data: u8): void {
    flush()
}
