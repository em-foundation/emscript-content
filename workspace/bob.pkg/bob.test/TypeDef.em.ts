import em from '@$$emscript'
export const $U = em.$declare('MODULE')

// import * as GlobalInterruptsI from '@em.hal/GlobalInterruptsI.em'
// 
// export type Key = GlobalInterruptsI.Key
// export type MyKey = Key

class Tab extends $vector<u32> { $len = 10 }

export namespace em$meta {
    export function em$construct() {
        console.log($$tdefs)
        console.log($sizeof<Tab>())
    }
}


// const sz = $sizeof<GlobalInterruptsI.Key>()

// export function em$run() {
//     key = 0
// }
