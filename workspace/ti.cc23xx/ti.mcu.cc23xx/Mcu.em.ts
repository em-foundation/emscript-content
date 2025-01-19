import em from '@$$emscript'
export const em$_U = $declare('MODULE')

import * as Debug from '@em.lang/Debug.em'

export function startup(): void {
    Debug.startup()
    em.$['%%a:'](2)
}
