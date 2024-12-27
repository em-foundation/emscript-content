import em from '@$$emscript'
export const em$_U = em.declare('COMPOSITE')

import * as ArmStartupC from '@em.arch.arm/StartupC.em'
import * as BoardC from '@ti.distro.cc23xx/BoardC.em'
import * as IntrVec from '@em.arch.arm/IntrVec.em'
import * as LinkerC from '@ti.distro.cc23xx/LinkerC.em'
import * as REGS from '@ti.distro.cc23xx/REGS.em'
import * as StartupC from '@ti.distro.cc23xx/StartupC.em'
import * as TargC from '@em.lang/TargC.em'

export function em$configure() {
    ArmStartupC.em$_U.used()
    BoardC.em$_U.used()
    IntrVec.em$_U.used()
    LinkerC.em$_U.used()
    REGS.em$_U.used()
    StartupC.em$_U.used()
    TargC.em$_U.used()
}

export function em$generate() {
    let out = new em.OutFile('build.sh')
    out.addFrag(`
        |-> #!/bin/sh
        |-> 
        |-> CC=clang
        |-> LD=ld.lld
        |-> OBJCOPY=llvm-objcopy
        |-> OBJDUMP=llvm-objdump
        |-> 
        |-> OUT=.out
        |-> 
        |-> rm -rf $OUT
        |-> mkdir $OUT
        |-> 
        |-> CFLAGS="\\
        |->     -D__EM_ARCH_arm__ \\
        |->     -D__EM_BOOT__=0 \\
        |->     -D__EM_BOOT_FLASH__=0 \\
        |->     -D__EM_COMPILER_segger__ \\
        |->     -D__EM_CPU_cortex_m0plus__ \\
        |->     -D__EM_MCU_null__ \\
        |->     -D__EM_LANG__=1 \\
        |-> 
        |->     --std=c++14 \\
        |->     -target arm-none-eabi \\
        |->     -mcpu=cortex-m0plus \\
        |-> 
        |->     -ffunction-sections \\
        |->     -fdata-sections \\
        |->     -fomit-frame-pointer \\
        |->     -fno-exceptions \\
        |->     -fno-threadsafe-statics \\
        |->     -nostdlib \\
        |->     -Wno-deprecated-register \\
        |->     -Wno-invalid-noreturn \\
        |->     -Wno-switch \\
        |->     -Wno-c99-designator \\
        |->     -Wno-c++20-designator \\
        |->     -Wpointer-to-int-cast \\
        |-> "
        |-> 
        |-> CINCS="\\
        |->     -I. \\
        |-> "
        |-> 
        |-> COPTS="\\
        |->     -Oz \\
        |-> "
        |-> 
        |-> LFLAGS="\\
        |->     -eem__start \\
        |->     -N \\
        |->     --gc-sections \\
        |-> "
        |-> 
        |-> $CC -c $CFLAGS $COPTS $CINCS main.cpp -o $OUT/main.obj
        |-> $LD $LFLAGS -Map=$OUT/main.map -T linkcmd.ld -o $OUT/main.out $OUT/main.obj
        |-> $OBJCOPY -O ihex $OUT/main.out $OUT/main.out.hex
        |-> $OBJDUMP -h -d $OUT/main.out >$OUT/main.out.dis
        |-> $OBJDUMP -t $OUT/main.out | tail -n +5 | sed -e 's/[FO] /  /' | sed -e 's/df /   /' >$OUT/main.out.sym
        |-> sort -k1 $OUT/main.out.sym > $OUT/main.out.syma
        |-> sort -k5 $OUT/main.out.sym > $OUT/main.out.symn
        |-> $OBJDUMP -h $OUT/main.out
    `)
    out.close()
    //
    out = new em.OutFile('load.sh')
    out.addText('C:/Users/biosb/em-sdk/tools/ti-uniflash/dslite.bat -c ../ti.cc23xx/ti.distro.cc23xx/CC2340R5.ccxml .out/main.out\n')
    out.close()
}
