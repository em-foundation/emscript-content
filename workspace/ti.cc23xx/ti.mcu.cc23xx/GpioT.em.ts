import em from '@$$emscript'
export const em$_T = em.declare('TEMPLATE')

import * as GpioI from '@em.hal/GpioI.em'

namespace em$template {

    export const em$_U = em.declare('MODULE')

    const em$_C = {
        pin_num: new em.param<em.i16>(-1),
    }

    namespace em$meta {
        export const pin_num = em$_C.pin_num
    }

    export const em$clone = { em$_U, em$_C, ...em$meta, ...em.isa<GpioI.em$_I>() }
}

export function em$clone() { return { em$_T, ...em$template.em$clone } }
