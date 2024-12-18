import em from '@$$emscript'
export const em$_U = em.declare('COMPOSITE')

import * as ArmStartupC from '@em.arch.arm/StartupC.em'
import * as BoardC from '@ti.distro.cc23xx/BoardC.em'
import * as LinkerC from '@ti.distro.cc23xx/LinkerC.em'
import * as StartupC from '@ti.distro.cc23xx/StartupC.em'

const txt = `
#!/bin/sh

OUT=.out

rm -rf $OUT
mkdir $OUT

clang -c main.cpp -o $OUT/main.o
`

export function em$generate() {
    let out = new em.OutFile('build.sh')
    out.addText(txt)
    out.close()
}
