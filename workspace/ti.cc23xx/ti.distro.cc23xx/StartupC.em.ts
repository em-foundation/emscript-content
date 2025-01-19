import em from '@$$emscript'
export const em$_U = em.$declare('COMPOSITE')

export function em$generate() {
    let out = new em.OutFile('ti.distro.cc23xx/startup.c')
    out.addFrag(`
        |-> #include <stdbool.h>
        |-> #include <stdint.h>
        |-> 
        |-> #include "../em.arch.arm/intr.c"
        |-> #include "../em.arch.arm/startup.c"
        |-> 
        |-> extern void em_main();
        |-> 
        |-> extern "C" bool __is_warm() {
        |->     return false;
        |-> }
        |-> 
        |-> extern const uint32_t __ccfg[] __attribute__((section(".ccfg"), used)) = {
        |->     0xFFFFFFFF, 0x00000000, 0x00000000, 0x00000000,
        |->     0xFFFFFFFF, 0xFFFFFFFF, 0xAAAAAAAA, 0x0000000F,
        |->     0xFFFFFFFF, 0xFFFFFFFF, 0x00000000, 0xFFFFFFFF,
        |->     0x00000000, 0x00000000, 0x00000000, 0x00000000,
        |->     0x00000000, 0x00000000, 0x00000000, 0x00000000,
        |->     0x00000000, 0x00000000, 0x00000000, 0x00000000,
        |->     0x00000000, 0x00000000, 0x00000000, 0x00000000,
        |->     0x00000000, 0x00000000, 0x00000000, 0x00000000,
        |->     0x00000000, 0x00000000, 0x00000000, 0x00000000,
        |->     0x00000000, 0x00000000, 0x00000000, 0x00000000,
        |->     0x00000000, 0x00000000, 0x00000000, 0x00000000,
        |->     0x00000000, 0x00000000, 0x00000000, 0x00000000,
        |->     0x00000000, 0x00000000, 0x00000000, 0x00000000,
        |->     0x00000000, 0x00000000, 0x00000000, 0x00000000,
        |->     0x00000000, 0x00000000, 0x00000000, 0x00000000,
        |->     0x00000000, 0x00000000, 0x00000000, 0x00000000,
        |->     0x00000000, 0x00000000, 0x00000000, 0x00000000,
        |->     0x00000000, 0x00000000, 0x00000000, 0x00000000,
        |->     0x00000000, 0x00000000, 0x00000000, 0x00000000,
        |->     0x00000000, 0x00000000, 0x00000000, 0x00000000,
        |->     0x00000000, 0x00000000, 0x00000000, 0x00000000,
        |->     0x00000000, 0x00000000, 0x00000000, 0x00000000,
        |->     0x00000000, 0x00000000, 0x00000000, 0x00000000,
        |->     0x00000000, 0x00000000, 0x00000000, 0x00000000,
        |->     0x00000000, 0x00000000, 0x00000000, 0x00000000,
        |->     0x00000000, 0x00000000, 0x00000000, 0x00000000,
        |->     0x00000000, 0x00000000, 0x00000000, 0x00000000,
        |->     0x00000000, 0x00000000, 0x00000000, 0x00000000,
        |->     0x00000000, 0x00000000, 0x00000000, 0x00000000,
        |->     0x00000000, 0x00000000, 0x00000000, 0x00000000,
        |->     0x00000000, 0x00000000, 0x00000000, 0x00000000,
        |->     0x00000000, 0x00000000, 0x00000000, 0x00000000,
        |->     0x00000000, 0x00000000, 0x00000000, 0x00000000,
        |->     0x00000000, 0x00000000, 0x00000000, 0x00000000,
        |->     0x00000000, 0x00000000, 0x00000000, 0x00000000,
        |->     0x00000000, 0x00000000, 0x00000000, 0x00000000,
        |->     0x00000000, 0x00000000, 0x00000000, 0x00000000,
        |->     0x00000000, 0x00000000, 0x00000000, 0x00000000,
        |->     0x00000000, 0x00000000, 0x00000000, 0x00000000,
        |->     0x00000000, 0x00000000, 0x00000000, 0x00000000,
        |->     0x00000000, 0x00000000, 0x00000000, 0x00000000,
        |->     0x00000000, 0x00000000, 0x00000000, 0x00000000,
        |->     0x00000000, 0x00000000, 0x00000000, 0x00000000,
        |->     0x00000000, 0x00000000, 0x00000000, 0x00000000,
        |->     0x00000000, 0x00000000, 0x00000000, 0x00000000,
        |->     0x00000000, 0x00000000, 0x00000000, 0x00000000,
        |->     0x00000000, 0x00000000, 0x00000000, 0x00000000,
        |->     0x00000000, 0x00000000, 0x00000000, 0x00000000,
        |->     0x00000000, 0x00000000, 0x00000000, 0x00000000,
        |->     0x00000000, 0x00000000, 0x00000000, 0x00000000,
        |->     0x00000000, 0x00000000, 0x00000000, 0x00000000,
        |->     0x00000000, 0x00000000, 0x00000000, 0x00000000,
        |->     0x00000000, 0x00000000, 0x00000000, 0x00000000,
        |->     0x00000000, 0x00000000, 0x00000000, 0x00000000,
        |->     0x00000000, 0x00000000, 0x00000000, 0x00000000,
        |->     0x00000000, 0x00000000, 0x00000000, 0x00000000,
        |->     0x00000000, 0x00000000, 0x00000000, 0x00000000,
        |->     0x00000000, 0x00000000, 0x00000000, 0x00000000,
        |->     0x00000000, 0x00000000, 0x00000000, 0x00000000,
        |->     0x00000000, 0x00000000, 0x00000000, 0x00000000,
        |->     0x00000000, 0x00000000, 0x00000000, 0x00000000,
        |->     0x00000000, 0x00000000, 0x00000000, 0x00000000,
        |->     0x00000000, 0x00000000, 0x00000000, 0x00000000,
        |->     0x00000000, 0x00000000, 0x00000000, 0x00000000,
        |->     0x00000000, 0x00000000, 0x00000000, 0x00000000,
        |->     0x00000000, 0x00000000, 0x00000000, 0x00000000,
        |->     0x00000000, 0x00000000, 0x00000000, 0x00000000,
        |->     0x00000000, 0x00000000, 0x00000000, 0x00000000,
        |->     0x00000000, 0x00000000, 0x00000000, 0x00000000,
        |->     0x00000000, 0x00000000, 0x00000000, 0x00000000,
        |->     0x00000000, 0x00000000, 0x00000000, 0x00000000,
        |->     0x00000000, 0x00000000, 0x00000000, 0x00000000,
        |->     0x00000000, 0x00000000, 0x00000000, 0x00000000,
        |->     0x00000000, 0x00000000, 0x00000000, 0x00000000,
        |->     0x00000000, 0x00000000, 0x00000000, 0x00000000,
        |->     0x00000000, 0x00000000, 0x00000000, 0x00000000,
        |->     0x00000000, 0x00000000, 0x00000000, 0x00000000,
        |->     0x00000000, 0x00000000, 0x00000000, 0x00000000,
        |->     0x00000000, 0x00000000, 0x00000000, 0x00000000,
        |->     0x00000000, 0x00000000, 0x00000000, 0x00000000,
        |->     0x00000000, 0x00000000, 0x00000000, 0x00000000,
        |->     0x00000000, 0x00000000, 0x00000000, 0x00000000,
        |->     0x00000000, 0x00000000, 0x00000000, 0x00000000,
        |->     0x00000000, 0x00000000, 0x00000000, 0x00000000,
        |->     0x00000000, 0x00000000, 0x00000000, 0x00000000,
        |->     0x00000000, 0x00000000, 0x00000000, 0x00000000,
        |->     0x00000000, 0x00000000, 0x00000000, 0x00000000,
        |->     0x00000000, 0x00000000, 0x00000000, 0x00000000,
        |->     0x00000000, 0x00000000, 0x00000000, 0x00000000,
        |->     0x00000000, 0x00000000, 0x00000000, 0x00000000,
        |->     0x00000000, 0x00000000, 0x00000000, 0x00000000,
        |->     0x00000000, 0x00000000, 0x00000000, 0x00000000,
        |->     0x00000000, 0x00000000, 0x00000000, 0x00000000,
        |->     0x00000000, 0x00000000, 0x00000000, 0x00000000,
        |->     0x00000000, 0x00000000, 0x00000000, 0x00000000,
        |->     0x00000000, 0x00000000, 0x00000000, 0x00000000,
        |->     0x00000000, 0x00000000, 0x00000000, 0x00000000,
        |->     0x00000000, 0x00000000, 0x00000000, 0x00000000,
        |->     0x00000000, 0x00000000, 0x00000000, 0x00000000,
        |->     0x00000000, 0x00000000, 0x00000000, 0x00000000,
        |->     0x00000000, 0x00000000, 0x00000000, 0x00000000,
        |->     0x00000000, 0x00000000, 0x00000000, 0x00000000,
        |->     0x00000000, 0x00000000, 0x00000000, 0x00000000,
        |->     0x00000000, 0x00000000, 0x00000000, 0x00000000,
        |->     0x00000000, 0x00000000, 0x00000000, 0x00000000,
        |->     0x00000000, 0x00000000, 0x00000000, 0x00000000,
        |->     0x00000000, 0x00000000, 0x00000000, 0x00000000,
        |->     0x00000000, 0x00000000, 0x00000000, 0x00000000,
        |->     0x00000000, 0x00000000, 0x00000000, 0x00000000,
        |->     0x00000000, 0x00000000, 0x00000000, 0x00000000,
        |->     0x00000000, 0x00000000, 0x00000000, 0x00000000,
        |->     0x00000000, 0x00000000, 0x00000000, 0x00000000,
        |->     0x00000000, 0x00000000, 0x00000000, 0x00000000,
        |->     0x00000000, 0x00000000, 0x00000000, 0x00000000,
        |->     0x00000000, 0x00000000, 0x00000000, 0x00000000,
        |->     0x00000000, 0x00000000, 0x00000000, 0x00000000,
        |->     0x00000000, 0x00000000, 0x00000000, 0x00000000,
        |->     0x00000000, 0x00000000, 0x00000000, 0x00000000,
        |->     0x00000000, 0x00000000, 0x00000000, 0x00000000,
        |->     0x00000000, 0x00000000, 0x00000000, 0x00000000,
        |->     0x00000000, 0x00000000, 0x00000000, 0x00000000,
        |->     0x00000000, 0x00000000, 0x00000000, 0x00000000,
        |->     0x00000000, 0x00000000, 0x00000000, 0x00000000,
        |->     0x00000000, 0x00000000, 0x00000000, 0x00000000,
        |->     0x00000000, 0x00000000, 0x00000000, 0x00000000,
        |->     0x0000A55A, 0x03020101, 0x150D0805, 0x36E4D76D,
        |->     0xDF31F4EB, 0xEE15AE95, 0xE48EBA03, 0xD83FC6C4,
        |->     0x5E673F45, 0x01C2D774, 0xE558902C, 0x00000000,
        |-> };
    `)
    out.close()
}
