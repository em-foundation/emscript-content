import em from '@$$emscript'
export const $U = em.$declare('MODULE')

export namespace em$meta {
    // export function em$construct() {
    //     console.log('before')
    //     for (let i of $range(5)) console.log(i)
    //     console.log('after')
    // }
}

export function em$run() {
    for (let i of $range(5)) printf`i = %d\n`(i)
    // for (let i = 0; i < 5; i++) printf`i = %d\n`(i)
}
