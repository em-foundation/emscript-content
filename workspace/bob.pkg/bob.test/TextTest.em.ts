import em from '@$$emscript'
export const em$_U = em.declare('MODULE')

export namespace em$meta {
    const s = em.text_t("hello world\n")
    console.log(s.$$, s.$len, s[0])
}

export function em$run() {
    em.halt()
}
