import em from '@$$emscript'
export const em$_U = $declare('COMPOSITE')

export function em$generate() {
    let out = new em.OutFile('bob.test/frag.txt')
    out.addFrag(`
                    |-> MAJOR
                    |->     MINOR
                    |->     MINOR
                    |-> 
                    |-> 
                    |-> 
        `)
    out.close()
}
