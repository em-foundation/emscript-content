import em from '@EM-SCRIPT'
let em$_U = em.declare<GpioI>('MODULE', __filename)

import GpioI from '@em.hal/GpioI.em'

namespace em$targ {
    export function clear(): void { }
    export function makeOutput(): void { }
    export function set(): void { }
    export function toggle(): void { }
}


const em$export = { em$_U, ...em$targ }
em$_U.bind(em$export)
export default em$export

