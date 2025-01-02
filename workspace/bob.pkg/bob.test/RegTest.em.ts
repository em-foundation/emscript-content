import em from '@$$emscript'
export const em$_U = em.declare('MODULE')

export function em$run() {
    for (let i = 0; i < 10; i++) em.$reg32[0xaa] = i + 20
}
