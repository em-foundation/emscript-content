import em from '@$$emscript'
export const $U = em.$declare('MODULE')

import * as Common from '@em.mcu/Common.em'
import * as BusyWait from '@ti.mcu.cc23xx/BusyWait.em'

Common.BusyWait.$$.wait(100)
BusyWait.wait(200)

type MyInt = u8
type MyInt2 = MyInt

const x = <MyInt2>10

function foo(x: MyInt2) {
    let y = 10
    x += y
}
