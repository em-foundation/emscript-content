MEMORY {
    DMEM : ORIGIN = 0x0080_0000, LENGTH = 32K
    IMEM : ORIGIN = 0x0030_0000, LENGTH = 512K
}

SECTIONS {

    .boot : {
        KEEP(*(.boot))
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
        *(.rodata .rodata.* .constdata .constdata.*)
        . = ALIGN(., 4);
    } > IMEM

    __data_load_start__ = ALIGN(., 4);

    .data : AT(__data_load_start__) {
        *(.data .data.* .sdata .sdata.*)
        . = ALIGN(., 4);
    } > DMEM

    .bss (NOLOAD): {
        *(.bss .bss.*)
        *(.sbss .sbss.*)
        . = ALIGN(., 4);
    } > DMEM

    __bss_addr__ = ADDR(.bss);
    __bss_size__ = SIZEOF(.bss) / 4;
    __code_addr__ = ADDR(.text);
    __data_addr__ = ADDR(.data);
    __data_load__ = LOADADDR(.data);
    __data_size__ = SIZEOF(.data) / 4;
    __code_load__ = ~0;
    __code_size__ = ~0;
    __stack_top__ = 0x0080_8000;
}
