import em from '@$$emscript'
export const em$_U = em.$declare('MODULE')

export namespace em$meta {

    type array_t<T, N extends number> = T[] & { length: N }

    const arr: array_t<i16, 3> = [1, 2, 3]
    console.log(arr)

}
