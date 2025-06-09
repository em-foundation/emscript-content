import em from '@$$emscript'
export const $U = em.$declare('MODULE')

const max = $param<u8>(20)

export namespace em$meta {
    export function em$init() {
        printf`max = %d\n`(max)
        max.$set(max + 10)
        printf`max = %d\n`(max)
    }
}

//>> ---- em$targ ---- <<//

export function em$run() {
    printf`max = %d\n`(max)
}