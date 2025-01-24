import em from '@$$emscript'
export const $U = em.$declare('COMPOSITE')

import * as ArmStartupC from '@em.arch.arm/StartupC.em'
import * as BoardC from '@ti.distro.cc23xx/BoardC.em'
import * as IntrVec from '@em.arch.arm/IntrVec.em'
import * as LinkerC from '@ti.distro.cc23xx/LinkerC.em'
import * as REGS from '@ti.distro.cc23xx/REGS.em'
import * as StartupC from '@ti.distro.cc23xx/StartupC.em'
import * as TargC from '@em.lang/TargC.em'

const nvic_intrs = [
    'CPUIRQ0',
    'CPUIRQ1',
    'CPUIRQ2',
    'CPUIRQ3',
    'CPUIRQ4',
    'GPIO_COMB',
    'LRFD_IRQ0',
    'LRFD_IRQ1',
    'DMA_DONE_COMB',
    'AES_COMB',
    'SPI0_COMB',
    'UART0_COMB',
    'I2C0_IRQ',
    'LGPT0_COMB',
    'LGPT1_COMB',
    'ADC0_COMB',
    'CPUIRQ16',
    'LGPT2_COMB',
    'LGPT3_COMB',
]


export function em$configure() {
    ArmStartupC.$U.used()
    BoardC.$U.used()
    IntrVec.$U.used()
    LinkerC.$U.used()
    REGS.$U.used()
    StartupC.$U.used()
    TargC.$U.used()
    for (let name of nvic_intrs) IntrVec.em$meta.addIntr(name)
}

export function em$generate() {
    let out = $outfile('build.sh')
    out.addFrag(`
        |-> #!/bin/sh
        |-> 
        |-> CC=clang
        |-> LD=ld.lld
        |-> LIBC=/c/Users/biosb/emscript/libc_v6m_t_le_eabi_small.a
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
        |->     -Wno-uninitialized \\
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
        |-> $LD $LFLAGS -Map=$OUT/main.map -T linkcmd.ld -o $OUT/main.out $OUT/main.obj $LIBC
        |-> $OBJCOPY -O ihex $OUT/main.out $OUT/main.out.hex
        |-> $OBJDUMP -h -d --demangle $OUT/main.out >$OUT/main.out.dis
        |-> $OBJDUMP -t --demangle $OUT/main.out | tail -n +5 | sed -e 's/[FO] /  /' | sed -e 's/df /   /' >$OUT/main.out.sym
        |-> sort -k1 $OUT/main.out.sym > $OUT/main.out.syma
        |-> sort -k5 $OUT/main.out.sym > $OUT/main.out.symn
        |-> $OBJDUMP -h $OUT/main.out
    `)
    out.close()
    //
    out = $outfile('load.sh')
    out.addText('C:/Users/biosb/em-sdk/tools/ti-uniflash/dslite.bat -c ../ti.cc23xx/ti.distro.cc23xx/CC2340R5.ccxml .out/main.out\n')
    out.close()
}

declare global {
    const $R: typeof REGS
}

Object.assign(globalThis, {
    $R: REGS
})
