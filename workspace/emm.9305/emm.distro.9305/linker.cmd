MEMORY {
    DMEM : ORIGIN = 0x0080_1000, LENGTH = 24K
    IMEM : ORIGIN = 0x0030_0000, LENGTH = 512K
    // INFO : ORIGIN = 0x0040_0000, LENGTH = 32K
}

SECTIONS {

    .entry : {
        KEEP(*(.entry.*))
        . = ALIGN(., 0x400);
    } > IMEM

    .intvec : {
        KEEP(*(.intvec))
    } > IMEM

    .text : {
        *(.start)
        *(.text .text.*)
        . = ALIGN(., 4);
    } > IMEM

    .const : {
        *(.rodata .rodata* .constdata .constdata*)
        . = ALIGN(., 4);
        __data_load_start__ = ALIGN(., 4);
    } > IMEM

    .data : {
        *(.data .data.* .sdata .sdata.*)
        . = ALIGN(., 4);
    } > DMEM AT > IMEM

    .bss (NOLOAD): {
        *(.bss .bss.*)
        *(.sbss .sbss.*)
        . = ALIGN(., 4);
    } > DMEM

    // GROUP: {
    //     .info_const TYPE(data): {
    //         *(.info_const*)
    //     }
    //     .info TYPE(text): {
    //         *(.info*)
    //     }
    // } > INFO

    __bss_addr__ = ADDR(.bss);
    __bss_size__ = SIZEOF(.bss) / 4;
    __code_addr__ = ADDR(.text);
    __data_addr__ = ADDR(.data);
    __data_load__ = LOADADDR(.data);
    __data_size__ = SIZEOF(.data) / 4;
    __code_load__ = ~0;
    __code_size__ = ~0;
    __stack_top__ = 0x0080_8000;

    __CTORS_INIT = 0;
}
