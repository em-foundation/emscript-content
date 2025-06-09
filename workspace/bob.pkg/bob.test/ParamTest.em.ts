import em from '@$$emscript'
export const $U = em.$declare('MODULE')

const max = $param<u8>(0)

export namespace em$meta {
    export function em$init() {
        max.$set(10)
        printf`max = %d\n`(max)
        console.log((max as any).$$em$config)
    }
}

//>> ---- em$targ ---- <<//

export function em$run() {
    printf`max = %d\n`(max)
}