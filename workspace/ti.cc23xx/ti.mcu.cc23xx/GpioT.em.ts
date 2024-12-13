import em from '@$$em-script'
export const em$_T = em.declare('TEMPLATE')

import * as GpioI from '@em.hal/GpioI.em'

namespace em$template {

    export const em$_U = em.declare<GpioI.em$_I>('MODULE')

    const em$config = {
        pin_num: new em.param<em.i16>(-1),
    }

    namespace em$meta {
        export const c_pin_num = em$config.pin_num
    }

    export const em$clone = { em$_U, ...em$meta, ...em$_U.proto }
}

export function em$clone() { return { em$_T, ...em$template.em$clone } }
