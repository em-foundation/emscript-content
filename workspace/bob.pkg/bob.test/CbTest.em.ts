import em from '@$$emscript'
export const em$_U = em.$declare('MODULE')

// type Fxn = cb_t<[u8]>

export namespace em$meta {

    type CallA = cb_t<[]>
    type CallB = cb_t<[u8]>

    function cb0() { console.log('cb0()') }
    function cb1(x: u8) { console.log(`cb1(${x})`) }

    let cb = $cb<CallB>(cb1)
    cb.$$(10)
}
