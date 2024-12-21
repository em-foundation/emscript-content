import em from '@$$emscript'
export const em$_U = em.declare('COMPOSITE')

export function em$generate() {
    let out = new em.OutFile('ti.distro.cc23xx/REGS.hpp')
    out.addFile('../ti.cc23xx/ti.distro.cc23xx/REGS.hpp.txt')
    out.close()
}

// -------- MODULE CLKCTL -------- //

export interface CLKCTL_t {
    DESC: em.$Reg
    DESCEX0: em.$Reg
    DESCEX1: em.$Reg
    CLKCFG0: em.$Reg
    CLKCFG1: em.$Reg
    CLKENSET0: em.$Reg
    CLKENSET1: em.$Reg
    CLKENCLR0: em.$Reg
    CLKENCLR1: em.$Reg
    STBYPTR: em.$Reg
    IDLECFG: em.$Reg
}

// -------- REGISTER DESC -------- //

/**
Description Register. 

This register provides IP module ID, revision information, instance index and standard MMR registers offset.*/
/**
Module identifier used to uniquely identify this IP.*/
export const CLKCTL_DESC_MODID: any = '16'

/**
Standard IP MMR block offset. Standard IP MMRs are the set of from aggregated IRQ registers till DTB.


0: Standard IP MMRs do not exist
0x1-0xF: Standard IP MMRs begin at offset of (64*STDIPOFF from the base IP address)*/
export const CLKCTL_DESC_STDIPOFF: any = '4'

/**
IP Instance ID number. If multiple instances of IP exist in the device, this field can identify the instance number (0-15).*/
export const CLKCTL_DESC_INSTIDX: any = '4'

/**
Major revision of IP 0-15*/
export const CLKCTL_DESC_MAJREV: any = '4'

/**
Minor revision of IP 0-15.*/
export const CLKCTL_DESC_MINREV: any = '4'


// -------- REGISTER DESCEX0 -------- //

/**
Extended Description Register 0. 

This register shows SVT IP availability, HW features and memory size configuration.*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const CLKCTL_DESCEX0_RESERVED31: any = '1'

/**
IP status on device*/
export const CLKCTL_DESCEX0_LGPT3: any = '1'

/**
IP is available*/
export const CLKCTL_DESCEX0_LGPT3_IP_AVAIL: any = '1'

/**
IP is unavailable*/
export const CLKCTL_DESCEX0_LGPT3_IP_UNAVAIL: any = '0'

/**
IP status on device*/
export const CLKCTL_DESCEX0_LGPT2: any = '1'

/**
IP is available*/
export const CLKCTL_DESCEX0_LGPT2_IP_AVAIL: any = '1'

/**
IP is unavailable*/
export const CLKCTL_DESCEX0_LGPT2_IP_UNAVAIL: any = '0'

/**
IP status on device*/
export const CLKCTL_DESCEX0_LGPT1: any = '1'

/**
IP is available*/
export const CLKCTL_DESCEX0_LGPT1_IP_AVAIL: any = '1'

/**
IP is unavailable*/
export const CLKCTL_DESCEX0_LGPT1_IP_UNAVAIL: any = '0'

/**
IP status on device*/
export const CLKCTL_DESCEX0_LGPT0: any = '1'

/**
IP is available*/
export const CLKCTL_DESCEX0_LGPT0_IP_AVAIL: any = '1'

/**
IP is unavailable*/
export const CLKCTL_DESCEX0_LGPT0_IP_UNAVAIL: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const CLKCTL_DESCEX0_RESERVED18: any = '9'

/**
IP status on device*/
export const CLKCTL_DESCEX0_DMA: any = '1'

/**
IP is available*/
export const CLKCTL_DESCEX0_DMA_IP_AVAIL: any = '1'

/**
IP is unavailable*/
export const CLKCTL_DESCEX0_DMA_IP_UNAVAIL: any = '0'

/**
IP status on device*/
export const CLKCTL_DESCEX0_LAES: any = '1'

/**
IP is available*/
export const CLKCTL_DESCEX0_LAES_IP_AVAIL: any = '1'

/**
IP is unavailable*/
export const CLKCTL_DESCEX0_LAES_IP_UNAVAIL: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const CLKCTL_DESCEX0_RESERVED15: any = '1'

/**
IP status on device*/
export const CLKCTL_DESCEX0_ADC0: any = '1'

/**
IP is available*/
export const CLKCTL_DESCEX0_ADC0_IP_AVAIL: any = '1'

/**
IP is unavailable*/
export const CLKCTL_DESCEX0_ADC0_IP_UNAVAIL: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const CLKCTL_DESCEX0_RESERVED11: any = '3'

/**
IP status on device*/
export const CLKCTL_DESCEX0_SPI0: any = '1'

/**
IP is available*/
export const CLKCTL_DESCEX0_SPI0_IP_AVAIL: any = '1'

/**
IP is unavailable*/
export const CLKCTL_DESCEX0_SPI0_IP_UNAVAIL: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const CLKCTL_DESCEX0_RESERVED7: any = '3'

/**
IP status on device*/
export const CLKCTL_DESCEX0_I2C0: any = '1'

/**
IP is available*/
export const CLKCTL_DESCEX0_I2C0_IP_AVAIL: any = '1'

/**
IP is unavailable*/
export const CLKCTL_DESCEX0_I2C0_IP_UNAVAIL: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const CLKCTL_DESCEX0_RESERVED3: any = '3'

/**
IP status on device*/
export const CLKCTL_DESCEX0_UART0: any = '1'

/**
IP is available*/
export const CLKCTL_DESCEX0_UART0_IP_AVAIL: any = '1'

/**
IP is unavailable*/
export const CLKCTL_DESCEX0_UART0_IP_UNAVAIL: any = '0'

/**
IP status on device*/
export const CLKCTL_DESCEX0_LRFD: any = '1'

/**
IP is available*/
export const CLKCTL_DESCEX0_LRFD_IP_AVAIL: any = '1'

/**
IP is unavailable*/
export const CLKCTL_DESCEX0_LRFD_IP_UNAVAIL: any = '0'

/**
IP status on device*/
export const CLKCTL_DESCEX0_GPIO: any = '1'

/**
IP is available*/
export const CLKCTL_DESCEX0_GPIO_IP_AVAIL: any = '1'

/**
IP is unavailable*/
export const CLKCTL_DESCEX0_GPIO_IP_UNAVAIL: any = '0'


// -------- REGISTER DESCEX1 -------- //

/**
Extended Description Register 1. 

This register shows SVT IP availability, HW features and memory size configuration.*/
/**
System flash availability*/
export const CLKCTL_DESCEX1_FLASHSZ: any = '2'

/**
Flash size set to level 3 (Max size)*/
export const CLKCTL_DESCEX1_FLASHSZ_SZ3: any = '3'

/**
Flash size set to level 2*/
export const CLKCTL_DESCEX1_FLASHSZ_SZ2: any = '2'

/**
Flash size set to level 1*/
export const CLKCTL_DESCEX1_FLASHSZ_SZ1: any = '1'

/**
Flash size set to level 0 (Min size)*/
export const CLKCTL_DESCEX1_FLASHSZ_SZ0: any = '0'

/**
System SRAM availability*/
export const CLKCTL_DESCEX1_SRAMSZ: any = '2'

/**
SRAM size set to level 3 (Max size)*/
export const CLKCTL_DESCEX1_SRAMSZ_SZ3: any = '3'

/**
SRAM size set to level 2*/
export const CLKCTL_DESCEX1_SRAMSZ_SZ2: any = '2'

/**
SRAM size set to level 1*/
export const CLKCTL_DESCEX1_SRAMSZ_SZ1: any = '1'

/**
SRAM size set to level 0 (Min size)*/
export const CLKCTL_DESCEX1_SRAMSZ_SZ0: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const CLKCTL_DESCEX1_RESERVED16: any = '12'

/**
System radio feature availability*/
export const CLKCTL_DESCEX1_ROPT: any = '8'

/**
All features available*/
export const CLKCTL_DESCEX1_ROPT_MAX: any = '255'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const CLKCTL_DESCEX1_RESERVED0: any = '8'


// -------- REGISTER CLKCFG0 -------- //

/**
Clock Configuration Register 0.

This register shows the IP clock configuration for the system.
The configuration is updated through CLKENSET0 and CLKENCLR0.*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const CLKCTL_CLKCFG0_RESERVED31: any = '1'

/**
IP clock configuration*/
export const CLKCTL_CLKCFG0_LGPT3: any = '1'

/**
Clock is enabled*/
export const CLKCTL_CLKCFG0_LGPT3_CLK_EN: any = '1'

/**
Clock is disabled*/
export const CLKCTL_CLKCFG0_LGPT3_CLK_DIS: any = '0'

/**
IP clock configuration*/
export const CLKCTL_CLKCFG0_LGPT2: any = '1'

/**
Clock is enabled*/
export const CLKCTL_CLKCFG0_LGPT2_CLK_EN: any = '1'

/**
Clock is disabled*/
export const CLKCTL_CLKCFG0_LGPT2_CLK_DIS: any = '0'

/**
IP clock configuration*/
export const CLKCTL_CLKCFG0_LGPT1: any = '1'

/**
Clock is enabled*/
export const CLKCTL_CLKCFG0_LGPT1_CLK_EN: any = '1'

/**
Clock is disabled*/
export const CLKCTL_CLKCFG0_LGPT1_CLK_DIS: any = '0'

/**
IP clock configuration*/
export const CLKCTL_CLKCFG0_LGPT0: any = '1'

/**
Clock is enabled*/
export const CLKCTL_CLKCFG0_LGPT0_CLK_EN: any = '1'

/**
Clock is disabled*/
export const CLKCTL_CLKCFG0_LGPT0_CLK_DIS: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const CLKCTL_CLKCFG0_RESERVED18: any = '9'

/**
IP clock configuration*/
export const CLKCTL_CLKCFG0_DMA: any = '1'

/**
Clock is enabled*/
export const CLKCTL_CLKCFG0_DMA_CLK_EN: any = '1'

/**
Clock is disabled*/
export const CLKCTL_CLKCFG0_DMA_CLK_DIS: any = '0'

/**
IP clock configuration*/
export const CLKCTL_CLKCFG0_LAES: any = '1'

/**
Clock is enabled*/
export const CLKCTL_CLKCFG0_LAES_CLK_EN: any = '1'

/**
Clock is disabled*/
export const CLKCTL_CLKCFG0_LAES_CLK_DIS: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const CLKCTL_CLKCFG0_RESERVED15: any = '1'

/**
IP clock configuration*/
export const CLKCTL_CLKCFG0_ADC0: any = '1'

/**
Clock is enabled*/
export const CLKCTL_CLKCFG0_ADC0_CLK_EN: any = '1'

/**
Clock is disabled*/
export const CLKCTL_CLKCFG0_ADC0_CLK_DIS: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const CLKCTL_CLKCFG0_RESERVED11: any = '3'

/**
IP clock configuration*/
export const CLKCTL_CLKCFG0_SPI0: any = '1'

/**
Clock is enabled*/
export const CLKCTL_CLKCFG0_SPI0_CLK_EN: any = '1'

/**
Clock is disabled*/
export const CLKCTL_CLKCFG0_SPI0_CLK_DIS: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const CLKCTL_CLKCFG0_RESERVED7: any = '3'

/**
IP clock configuration*/
export const CLKCTL_CLKCFG0_I2C0: any = '1'

/**
Clock is enabled*/
export const CLKCTL_CLKCFG0_I2C0_CLK_EN: any = '1'

/**
Clock is disabled*/
export const CLKCTL_CLKCFG0_I2C0_CLK_DIS: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const CLKCTL_CLKCFG0_RESERVED3: any = '3'

/**
IP clock configuration*/
export const CLKCTL_CLKCFG0_UART0: any = '1'

/**
Clock is enabled*/
export const CLKCTL_CLKCFG0_UART0_CLK_EN: any = '1'

/**
Clock is disabled*/
export const CLKCTL_CLKCFG0_UART0_CLK_DIS: any = '0'

/**
IP clock configuration*/
export const CLKCTL_CLKCFG0_LRFD: any = '1'

/**
Clock is enabled*/
export const CLKCTL_CLKCFG0_LRFD_CLK_EN: any = '1'

/**
Clock is disabled*/
export const CLKCTL_CLKCFG0_LRFD_CLK_DIS: any = '0'

/**
IP clock configuration

*/
export const CLKCTL_CLKCFG0_GPIO: any = '1'

/**
Clock is enabled*/
export const CLKCTL_CLKCFG0_GPIO_CLK_EN: any = '1'

/**
Clock is disabled*/
export const CLKCTL_CLKCFG0_GPIO_CLK_DIS: any = '0'


// -------- REGISTER CLKCFG1 -------- //

/**
Clock Configuration Register 1.

This register shows the IP clock configuration for the system.
The configuration is updated through CLKENSET1 and CLKENCLR1.*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const CLKCTL_CLKCFG1_RESERVED0: any = '32'


// -------- REGISTER CLKENSET0 -------- //

/**
Clock Enable Set Register 0.

This register enables IP clocks in the system. 
Used to set the corresponding fields in CLKCFG0 to 1.*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const CLKCTL_CLKENSET0_RESERVED31: any = '1'

/**
Configure IP clock enable*/
export const CLKCTL_CLKENSET0_LGPT3: any = '1'

/**
Set IP clock enable*/
export const CLKCTL_CLKENSET0_LGPT3_CLK_SET: any = '1'

/**
IP clock enable is unchanged*/
export const CLKCTL_CLKENSET0_LGPT3_CLK_UNCHGD: any = '0'

/**
Configure IP clock enable*/
export const CLKCTL_CLKENSET0_LGPT2: any = '1'

/**
Set IP clock enable*/
export const CLKCTL_CLKENSET0_LGPT2_CLK_SET: any = '1'

/**
IP clock enable is unchanged*/
export const CLKCTL_CLKENSET0_LGPT2_CLK_UNCHGD: any = '0'

/**
Configure IP clock enable*/
export const CLKCTL_CLKENSET0_LGPT1: any = '1'

/**
Set IP clock enable*/
export const CLKCTL_CLKENSET0_LGPT1_CLK_SET: any = '1'

/**
IP clock enable is unchanged*/
export const CLKCTL_CLKENSET0_LGPT1_CLK_UNCHGD: any = '0'

/**
Configure IP clock enable*/
export const CLKCTL_CLKENSET0_LGPT0: any = '1'

/**
Set IP clock enable*/
export const CLKCTL_CLKENSET0_LGPT0_CLK_SET: any = '1'

/**
IP clock enable is unchanged*/
export const CLKCTL_CLKENSET0_LGPT0_CLK_UNCHGD: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const CLKCTL_CLKENSET0_RESERVED18: any = '9'

/**
Configure IP clock enable*/
export const CLKCTL_CLKENSET0_DMA: any = '1'

/**
Set IP clock enable*/
export const CLKCTL_CLKENSET0_DMA_CLK_SET: any = '1'

/**
IP clock enable is unchanged*/
export const CLKCTL_CLKENSET0_DMA_CLK_UNCHGD: any = '0'

/**
Configure IP clock enable*/
export const CLKCTL_CLKENSET0_LAES: any = '1'

/**
Set IP clock enable*/
export const CLKCTL_CLKENSET0_LAES_CLK_SET: any = '1'

/**
IP clock enable is unchanged*/
export const CLKCTL_CLKENSET0_LAES_CLK_UNCHGD: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const CLKCTL_CLKENSET0_RESERVED15: any = '1'

/**
Configure IP clock enable*/
export const CLKCTL_CLKENSET0_ADC0: any = '1'

/**
Set IP clock enable*/
export const CLKCTL_CLKENSET0_ADC0_CLK_SET: any = '1'

/**
IP clock enable is unchanged*/
export const CLKCTL_CLKENSET0_ADC0_CLK_UNCHGD: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const CLKCTL_CLKENSET0_RESERVED11: any = '3'

/**
Configure IP clock enable*/
export const CLKCTL_CLKENSET0_SPI0: any = '1'

/**
Set IP clock enable*/
export const CLKCTL_CLKENSET0_SPI0_CLK_SET: any = '1'

/**
IP clock enable is unchanged*/
export const CLKCTL_CLKENSET0_SPI0_CLK_UNCHGD: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const CLKCTL_CLKENSET0_RESERVED7: any = '3'

/**
Configure IP clock enable*/
export const CLKCTL_CLKENSET0_I2C0: any = '1'

/**
Set IP clock enable*/
export const CLKCTL_CLKENSET0_I2C0_CLK_SET: any = '1'

/**
IP clock enable is unchanged*/
export const CLKCTL_CLKENSET0_I2C0_CLK_UNCHGD: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const CLKCTL_CLKENSET0_RESERVED3: any = '3'

/**
Configure IP clock enable*/
export const CLKCTL_CLKENSET0_UART0: any = '1'

/**
Set IP clock enable*/
export const CLKCTL_CLKENSET0_UART0_CLK_SET: any = '1'

/**
IP clock enable is unchanged*/
export const CLKCTL_CLKENSET0_UART0_CLK_UNCHGD: any = '0'

/**
Configure IP clock enable*/
export const CLKCTL_CLKENSET0_LRFD: any = '1'

/**
Set IP clock enable*/
export const CLKCTL_CLKENSET0_LRFD_CLK_SET: any = '1'

/**
IP clock enable is unchanged*/
export const CLKCTL_CLKENSET0_LRFD_CLK_UNCHGD: any = '0'

/**
Configure IP clock enable*/
export const CLKCTL_CLKENSET0_GPIO: any = '1'

/**
Set IP clock enable*/
export const CLKCTL_CLKENSET0_GPIO_CLK_SET: any = '1'

/**
IP clock enable is unchanged*/
export const CLKCTL_CLKENSET0_GPIO_CLK_UNCHGD: any = '0'


// -------- REGISTER CLKENSET1 -------- //

/**
Clock Enable Set Register 1.

This register enables IP clocks in the system. 
Used to set the corresponding fields in CLKCFG1 to 1.*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const CLKCTL_CLKENSET1_RESERVED0: any = '32'


// -------- REGISTER CLKENCLR0 -------- //

/**
Clock Enable Clear Register 0.

This register disables IP clocks in the system. 
Used to clear the corresponding fields in CLKCFG0 to 0.*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const CLKCTL_CLKENCLR0_RESERVED31: any = '1'

/**
Configure IP clock enable*/
export const CLKCTL_CLKENCLR0_LGPT3: any = '1'

/**
Clear IP clock enable*/
export const CLKCTL_CLKENCLR0_LGPT3_CLK_CLR: any = '1'

/**
IP clock enable is unchanged*/
export const CLKCTL_CLKENCLR0_LGPT3_CLK_UNCHGD: any = '0'

/**
Configure IP clock enable*/
export const CLKCTL_CLKENCLR0_LGPT2: any = '1'

/**
Clear IP clock enable*/
export const CLKCTL_CLKENCLR0_LGPT2_CLK_CLR: any = '1'

/**
IP clock enable is unchanged*/
export const CLKCTL_CLKENCLR0_LGPT2_CLK_UNCHGD: any = '0'

/**
Configure IP clock enable*/
export const CLKCTL_CLKENCLR0_LGPT1: any = '1'

/**
Clear IP clock enable*/
export const CLKCTL_CLKENCLR0_LGPT1_CLK_CLR: any = '1'

/**
IP clock enable is unchanged*/
export const CLKCTL_CLKENCLR0_LGPT1_CLK_UNCHGD: any = '0'

/**
Configure IP clock enable*/
export const CLKCTL_CLKENCLR0_LGPT0: any = '1'

/**
Clear IP clock enable*/
export const CLKCTL_CLKENCLR0_LGPT0_CLK_CLR: any = '1'

/**
IP clock enable is unchanged*/
export const CLKCTL_CLKENCLR0_LGPT0_CLK_UNCHGD: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const CLKCTL_CLKENCLR0_RESERVED18: any = '9'

/**
Configure IP clock enable*/
export const CLKCTL_CLKENCLR0_DMA: any = '1'

/**
Clear IP clock enable*/
export const CLKCTL_CLKENCLR0_DMA_CLK_CLR: any = '1'

/**
IP clock enable is unchanged*/
export const CLKCTL_CLKENCLR0_DMA_CLK_UNCHGD: any = '0'

/**
Configure IP clock enable*/
export const CLKCTL_CLKENCLR0_LAES: any = '1'

/**
Clear IP clock enable*/
export const CLKCTL_CLKENCLR0_LAES_CLK_CLR: any = '1'

/**
IP clock enable is unchanged*/
export const CLKCTL_CLKENCLR0_LAES_CLK_UNCHGD: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const CLKCTL_CLKENCLR0_RESERVED15: any = '1'

/**
Configure IP clock enable*/
export const CLKCTL_CLKENCLR0_ADC0: any = '1'

/**
Clear IP clock enable*/
export const CLKCTL_CLKENCLR0_ADC0_CLK_CLR: any = '1'

/**
IP clock enable is unchanged*/
export const CLKCTL_CLKENCLR0_ADC0_CLK_UNCHGD: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const CLKCTL_CLKENCLR0_RESERVED11: any = '3'

/**
Configure IP clock enable*/
export const CLKCTL_CLKENCLR0_SPI0: any = '1'

/**
Clear IP clock enable*/
export const CLKCTL_CLKENCLR0_SPI0_CLK_CLR: any = '1'

/**
IP clock enable is unchanged*/
export const CLKCTL_CLKENCLR0_SPI0_CLK_UNCHGD: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const CLKCTL_CLKENCLR0_RESERVED7: any = '3'

/**
Configure IP clock enable*/
export const CLKCTL_CLKENCLR0_I2C0: any = '1'

/**
Clear IP clock enable*/
export const CLKCTL_CLKENCLR0_I2C0_CLK_CLR: any = '1'

/**
IP clock enable is unchanged*/
export const CLKCTL_CLKENCLR0_I2C0_CLK_UNCHGD: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const CLKCTL_CLKENCLR0_RESERVED3: any = '3'

/**
Configure IP clock enable*/
export const CLKCTL_CLKENCLR0_UART0: any = '1'

/**
Clear IP clock enable*/
export const CLKCTL_CLKENCLR0_UART0_CLK_CLR: any = '1'

/**
IP clock enable is unchanged*/
export const CLKCTL_CLKENCLR0_UART0_CLK_UNCHGD: any = '0'

/**
Configure IP clock enable*/
export const CLKCTL_CLKENCLR0_LRFD: any = '1'

/**
Clear IP clock enable*/
export const CLKCTL_CLKENCLR0_LRFD_CLK_CLR: any = '1'

/**
IP clock enable is unchanged*/
export const CLKCTL_CLKENCLR0_LRFD_CLK_UNCHGD: any = '0'

/**
Configure IP clock enable*/
export const CLKCTL_CLKENCLR0_GPIO: any = '1'

/**
Clear IP clock enable*/
export const CLKCTL_CLKENCLR0_GPIO_CLK_CLR: any = '1'

/**
IP clock enable is unchanged*/
export const CLKCTL_CLKENCLR0_GPIO_CLK_UNCHGD: any = '0'


// -------- REGISTER CLKENCLR1 -------- //

/**
Clock Enable Clear Register 1.

This register disables IP clocks in the system. 
Used to clear the corresponding fields in CLKCFG1 to 0.*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const CLKCTL_CLKENCLR1_RESERVED0: any = '32'


// -------- REGISTER STBYPTR -------- //

/**
Internal. Only to be used through TI provided API.*/
/**
Internal. Only to be used through TI provided API.*/
export const CLKCTL_STBYPTR_VAL: any = '32'

/**
Internal. Only to be used through TI provided API.*/
export const CLKCTL_STBYPTR_VAL_MIN: any = '0'


// -------- REGISTER IDLECFG -------- //

/**
IDLE Configuration Register.

This register contains flash LDO configuration for IDLE mode.*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const CLKCTL_IDLECFG_RESERVED1: any = '31'

/**
Flash LDO configuration in SLEEP/IDLE mode.*/
export const CLKCTL_IDLECFG_MODE: any = '1'

/**
Flash LDO is off in SLEEP/IDLE mode. 

Decreases power consumption in SLEEP/IDLE mode, but gives longer wake up time.

Note: NVM clock is turned off independent of DMA status. Therefore SW must ensure that DMA never access NVM in this mode.*/
export const CLKCTL_IDLECFG_MODE_LDO_OFF: any = '1'

/**
Flash LDO is on in SLEEP/IDLE mode.

Gives fast wake up time from SLEEP/IDLE mode, but increased power consumption.*/
export const CLKCTL_IDLECFG_MODE_LDO_ON: any = '0'


// -------- MODULE GPIO -------- //

export interface GPIO_t {
    DESC: em.$Reg
    DESCEX: em.$Reg
    IMASK: em.$Reg
    RIS: em.$Reg
    MIS: em.$Reg
    ISET: em.$Reg
    ICLR: em.$Reg
    IMSET: em.$Reg
    IMCLR: em.$Reg
    DOUT3_0: em.$Reg
    DOUT7_4: em.$Reg
    DOUT11_8: em.$Reg
    DOUT15_12: em.$Reg
    DOUT19_16: em.$Reg
    DOUT23_20: em.$Reg
    DOUT27_24: em.$Reg
    DOUT31_0: em.$Reg
    DOUTSET31_0: em.$Reg
    DOUTCLR31_0: em.$Reg
    DOUTTGL31_0: em.$Reg
    DOUTTGL3_0: em.$Reg
    DOUTTGL7_4: em.$Reg
    DOUTTGL11_8: em.$Reg
    DOUTTGL15_12: em.$Reg
    DOUTTGL19_16: em.$Reg
    DOUTTGL23_20: em.$Reg
    DOUTTGL27_24: em.$Reg
    DOE3_0: em.$Reg
    DOE7_4: em.$Reg
    DOE11_8: em.$Reg
    DOE15_12: em.$Reg
    DOE19_16: em.$Reg
    DOE23_20: em.$Reg
    DOE27_24: em.$Reg
    DOE31_0: em.$Reg
    DOESET31_0: em.$Reg
    DOECLR31_0: em.$Reg
    DOETGL31_0: em.$Reg
    DIN3_0: em.$Reg
    DIN7_4: em.$Reg
    DIN11_8: em.$Reg
    DIN15_12: em.$Reg
    DIN19_16: em.$Reg
    DIN23_20: em.$Reg
    DIN27_24: em.$Reg
    DIN31_0: em.$Reg
    EVTCFG: em.$Reg
}

// -------- REGISTER DESC -------- //

/**
Description Register. This register provides IP module ID, revision information, instance index and standard MMR registers offset.*/
/**
Module identifier used to uniquely identify this IP.*/
export const GPIO_DESC_MODID: any = '16'

/**
Standard IP MMR block offset. Standard IP MMRs are the set from aggregated IRQ registers till DTB.


0: Standard IP MMRs do not exist

0x1-0xF: Standard IP MMRs begin at offset of (64*STDIPOFF from the base IP address)*/
export const GPIO_DESC_STDIPOFF: any = '4'

/**
IP Instance ID number. If multiple instances of IP exist in the device, this field can identify the instance number (0-15).*/
export const GPIO_DESC_INSTIDX: any = '4'

/**
Major revision of IP (0-15).*/
export const GPIO_DESC_MAJREV: any = '4'

/**
Minor revision of IP (0-15).*/
export const GPIO_DESC_MINREV: any = '4'


// -------- REGISTER DESCEX -------- //

/**
Extended Description Register. This register provides configuration details of the IP to software drivers and end users.*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_DESCEX_RESERVED6: any = '26'

/**
This provides the total number of DIOs supported by GPIO. The number of DIOs supprted is NUMDIO + 1*/
export const GPIO_DESCEX_NUMDIO: any = '6'


// -------- REGISTER IMASK -------- //

/**
Interrupt mask for DIO pins*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_IMASK_RESERVED26: any = '6'

/**
Interrupt mask for DIO25*/
export const GPIO_IMASK_DIO25: any = '1'

/**
Set Interrrupt Mask*/
export const GPIO_IMASK_DIO25_SET: any = '1'

/**
Clear Interrupt Mask*/
export const GPIO_IMASK_DIO25_CLR: any = '0'

/**
Interrupt mask for DIO24*/
export const GPIO_IMASK_DIO24: any = '1'

/**
Set Interrrupt Mask*/
export const GPIO_IMASK_DIO24_SET: any = '1'

/**
Clear Interrupt Mask*/
export const GPIO_IMASK_DIO24_CLR: any = '0'

/**
Interrupt mask for DIO23*/
export const GPIO_IMASK_DIO23: any = '1'

/**
Set Interrrupt Mask*/
export const GPIO_IMASK_DIO23_SET: any = '1'

/**
Clear Interrupt Mask*/
export const GPIO_IMASK_DIO23_CLR: any = '0'

/**
Interrupt mask for DIO22*/
export const GPIO_IMASK_DIO22: any = '1'

/**
Set Interrrupt Mask*/
export const GPIO_IMASK_DIO22_SET: any = '1'

/**
Clear Interrupt Mask*/
export const GPIO_IMASK_DIO22_CLR: any = '0'

/**
Interrupt mask for DIO21*/
export const GPIO_IMASK_DIO21: any = '1'

/**
Set Interrrupt Mask*/
export const GPIO_IMASK_DIO21_SET: any = '1'

/**
Clear Interrupt Mask*/
export const GPIO_IMASK_DIO21_CLR: any = '0'

/**
Interrupt mask for DIO20*/
export const GPIO_IMASK_DIO20: any = '1'

/**
Set Interrrupt Mask*/
export const GPIO_IMASK_DIO20_SET: any = '1'

/**
Clear Interrupt Mask*/
export const GPIO_IMASK_DIO20_CLR: any = '0'

/**
Interrupt mask for DIO19*/
export const GPIO_IMASK_DIO19: any = '1'

/**
Set Interrrupt Mask*/
export const GPIO_IMASK_DIO19_SET: any = '1'

/**
Clear Interrupt Mask*/
export const GPIO_IMASK_DIO19_CLR: any = '0'

/**
Interrupt mask for DIO18*/
export const GPIO_IMASK_DIO18: any = '1'

/**
Set Interrrupt Mask*/
export const GPIO_IMASK_DIO18_SET: any = '1'

/**
Clear Interrupt Mask*/
export const GPIO_IMASK_DIO18_CLR: any = '0'

/**
Interrupt mask for DIO17*/
export const GPIO_IMASK_DIO17: any = '1'

/**
Set Interrrupt Mask*/
export const GPIO_IMASK_DIO17_SET: any = '1'

/**
Clear Interrupt Mask*/
export const GPIO_IMASK_DIO17_CLR: any = '0'

/**
Interrupt mask for DIO16*/
export const GPIO_IMASK_DIO16: any = '1'

/**
Set Interrrupt Mask*/
export const GPIO_IMASK_DIO16_SET: any = '1'

/**
Clear Interrupt Mask*/
export const GPIO_IMASK_DIO16_CLR: any = '0'

/**
Interrupt mask for DIO15*/
export const GPIO_IMASK_DIO15: any = '1'

/**
Set Interrrupt Mask*/
export const GPIO_IMASK_DIO15_SET: any = '1'

/**
Clear Interrupt Mask*/
export const GPIO_IMASK_DIO15_CLR: any = '0'

/**
Interrupt mask for DIO14*/
export const GPIO_IMASK_DIO14: any = '1'

/**
Set Interrrupt Mask*/
export const GPIO_IMASK_DIO14_SET: any = '1'

/**
Clear Interrupt Mask*/
export const GPIO_IMASK_DIO14_CLR: any = '0'

/**
Interrupt mask for DIO13*/
export const GPIO_IMASK_DIO13: any = '1'

/**
Set Interrrupt Mask*/
export const GPIO_IMASK_DIO13_SET: any = '1'

/**
Clear Interrupt Mask*/
export const GPIO_IMASK_DIO13_CLR: any = '0'

/**
Interrupt mask for DIO12*/
export const GPIO_IMASK_DIO12: any = '1'

/**
Set Interrrupt Mask*/
export const GPIO_IMASK_DIO12_SET: any = '1'

/**
Clear Interrupt Mask*/
export const GPIO_IMASK_DIO12_CLR: any = '0'

/**
Interrupt mask for DIO11*/
export const GPIO_IMASK_DIO11: any = '1'

/**
Set Interrrupt Mask*/
export const GPIO_IMASK_DIO11_SET: any = '1'

/**
Clear Interrupt Mask*/
export const GPIO_IMASK_DIO11_CLR: any = '0'

/**
Interrupt mask for DIO10*/
export const GPIO_IMASK_DIO10: any = '1'

/**
Set Interrrupt Mask*/
export const GPIO_IMASK_DIO10_SET: any = '1'

/**
Clear Interrupt Mask*/
export const GPIO_IMASK_DIO10_CLR: any = '0'

/**
Interrupt mask for DIO9*/
export const GPIO_IMASK_DIO9: any = '1'

/**
Set Interrrupt Mask*/
export const GPIO_IMASK_DIO9_SET: any = '1'

/**
Clear Interrupt Mask*/
export const GPIO_IMASK_DIO9_CLR: any = '0'

/**
Interrupt mask for DIO8*/
export const GPIO_IMASK_DIO8: any = '1'

/**
Set Interrrupt Mask*/
export const GPIO_IMASK_DIO8_SET: any = '1'

/**
Clear Interrupt Mask*/
export const GPIO_IMASK_DIO8_CLR: any = '0'

/**
Interrupt mask for DIO7*/
export const GPIO_IMASK_DIO7: any = '1'

/**
Set Interrrupt Mask*/
export const GPIO_IMASK_DIO7_SET: any = '1'

/**
Clear Interrupt Mask*/
export const GPIO_IMASK_DIO7_CLR: any = '0'

/**
Interrupt mask for DIO6*/
export const GPIO_IMASK_DIO6: any = '1'

/**
Set Interrrupt Mask*/
export const GPIO_IMASK_DIO6_SET: any = '1'

/**
Clear Interrupt Mask*/
export const GPIO_IMASK_DIO6_CLR: any = '0'

/**
Interrupt mask for DIO5*/
export const GPIO_IMASK_DIO5: any = '1'

/**
Set Interrrupt Mask*/
export const GPIO_IMASK_DIO5_SET: any = '1'

/**
Clear Interrupt Mask*/
export const GPIO_IMASK_DIO5_CLR: any = '0'

/**
Interrupt mask for DIO4*/
export const GPIO_IMASK_DIO4: any = '1'

/**
Set Interrrupt Mask*/
export const GPIO_IMASK_DIO4_SET: any = '1'

/**
Clear Interrupt Mask*/
export const GPIO_IMASK_DIO4_CLR: any = '0'

/**
Interrupt mask for DIO3*/
export const GPIO_IMASK_DIO3: any = '1'

/**
Set Interrrupt Mask*/
export const GPIO_IMASK_DIO3_SET: any = '1'

/**
Clear Interrupt Mask*/
export const GPIO_IMASK_DIO3_CLR: any = '0'

/**
Interrupt mask for DIO2*/
export const GPIO_IMASK_DIO2: any = '1'

/**
Set Interrrupt Mask*/
export const GPIO_IMASK_DIO2_SET: any = '1'

/**
Clear Interrupt Mask*/
export const GPIO_IMASK_DIO2_CLR: any = '0'

/**
Interrupt mask for DIO1*/
export const GPIO_IMASK_DIO1: any = '1'

/**
Set Interrrupt Mask*/
export const GPIO_IMASK_DIO1_SET: any = '1'

/**
Clear Interrupt Mask*/
export const GPIO_IMASK_DIO1_CLR: any = '0'

/**
Interrupt mask for DIO0*/
export const GPIO_IMASK_DIO0: any = '1'

/**
Set Interrrupt Mask*/
export const GPIO_IMASK_DIO0_SET: any = '1'

/**
Clear Interrupt Mask*/
export const GPIO_IMASK_DIO0_CLR: any = '0'


// -------- REGISTER RIS -------- //

/**
Raw interrupt flag for DIO pins*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_RIS_RESERVED26: any = '6'

/**
Raw interrupt flag for DIO25*/
export const GPIO_RIS_DIO25: any = '1'

/**
Interrupt occured*/
export const GPIO_RIS_DIO25_SET: any = '1'

/**
Interrupt did not occur*/
export const GPIO_RIS_DIO25_CLR: any = '0'

/**
Raw interrupt flag for DIO24*/
export const GPIO_RIS_DIO24: any = '1'

/**
Interrupt occured*/
export const GPIO_RIS_DIO24_SET: any = '1'

/**
Interrupt did not occur*/
export const GPIO_RIS_DIO24_CLR: any = '0'

/**
Raw interrupt flag for DIO23*/
export const GPIO_RIS_DIO23: any = '1'

/**
Interrupt occured*/
export const GPIO_RIS_DIO23_SET: any = '1'

/**
Interrupt did not occur*/
export const GPIO_RIS_DIO23_CLR: any = '0'

/**
Raw interrupt flag for DIO22*/
export const GPIO_RIS_DIO22: any = '1'

/**
Interrupt occured*/
export const GPIO_RIS_DIO22_SET: any = '1'

/**
Interrupt did not occur*/
export const GPIO_RIS_DIO22_CLR: any = '0'

/**
Raw interrupt flag for DIO21*/
export const GPIO_RIS_DIO21: any = '1'

/**
Interrupt occured*/
export const GPIO_RIS_DIO21_SET: any = '1'

/**
Interrupt did not occur*/
export const GPIO_RIS_DIO21_CLR: any = '0'

/**
Raw interrupt flag for DIO20*/
export const GPIO_RIS_DIO20: any = '1'

/**
Interrupt occured*/
export const GPIO_RIS_DIO20_SET: any = '1'

/**
Interrupt did not occur*/
export const GPIO_RIS_DIO20_CLR: any = '0'

/**
Raw interrupt flag for DIO19*/
export const GPIO_RIS_DIO19: any = '1'

/**
Interrupt occured*/
export const GPIO_RIS_DIO19_SET: any = '1'

/**
Interrupt did not occur*/
export const GPIO_RIS_DIO19_CLR: any = '0'

/**
Raw interrupt flag for DIO18*/
export const GPIO_RIS_DIO18: any = '1'

/**
Interrupt occured*/
export const GPIO_RIS_DIO18_SET: any = '1'

/**
Interrupt did not occur*/
export const GPIO_RIS_DIO18_CLR: any = '0'

/**
Raw interrupt flag for DIO17*/
export const GPIO_RIS_DIO17: any = '1'

/**
Interrupt occured*/
export const GPIO_RIS_DIO17_SET: any = '1'

/**
Interrupt did not occur*/
export const GPIO_RIS_DIO17_CLR: any = '0'

/**
Raw interrupt flag for DIO16*/
export const GPIO_RIS_DIO16: any = '1'

/**
Interrupt occured*/
export const GPIO_RIS_DIO16_SET: any = '1'

/**
Interrupt did not occur*/
export const GPIO_RIS_DIO16_CLR: any = '0'

/**
Raw interrupt flag for DIO15*/
export const GPIO_RIS_DIO15: any = '1'

/**
Interrupt occured*/
export const GPIO_RIS_DIO15_SET: any = '1'

/**
Interrupt did not occur*/
export const GPIO_RIS_DIO15_CLR: any = '0'

/**
Raw interrupt flag for DIO14*/
export const GPIO_RIS_DIO14: any = '1'

/**
Interrupt occured*/
export const GPIO_RIS_DIO14_SET: any = '1'

/**
Interrupt did not occur*/
export const GPIO_RIS_DIO14_CLR: any = '0'

/**
Raw interrupt flag for DIO13*/
export const GPIO_RIS_DIO13: any = '1'

/**
Interrupt occured*/
export const GPIO_RIS_DIO13_SET: any = '1'

/**
Interrupt did not occur*/
export const GPIO_RIS_DIO13_CLR: any = '0'

/**
Raw interrupt flag for DIO12*/
export const GPIO_RIS_DIO12: any = '1'

/**
Interrupt occured*/
export const GPIO_RIS_DIO12_SET: any = '1'

/**
Interrupt did not occur*/
export const GPIO_RIS_DIO12_CLR: any = '0'

/**
Raw interrupt flag for DIO11*/
export const GPIO_RIS_DIO11: any = '1'

/**
Interrupt occured*/
export const GPIO_RIS_DIO11_SET: any = '1'

/**
Interrupt did not occur*/
export const GPIO_RIS_DIO11_CLR: any = '0'

/**
Raw interrupt flag for DIO10*/
export const GPIO_RIS_DIO10: any = '1'

/**
Interrupt occured*/
export const GPIO_RIS_DIO10_SET: any = '1'

/**
Interrupt did not occur*/
export const GPIO_RIS_DIO10_CLR: any = '0'

/**
Raw interrupt flag for DIO9*/
export const GPIO_RIS_DIO9: any = '1'

/**
Interrupt occured*/
export const GPIO_RIS_DIO9_SET: any = '1'

/**
Interrupt did not occur*/
export const GPIO_RIS_DIO9_CLR: any = '0'

/**
Raw interrupt flag for DIO8*/
export const GPIO_RIS_DIO8: any = '1'

/**
Interrupt occured*/
export const GPIO_RIS_DIO8_SET: any = '1'

/**
Interrupt did not occur*/
export const GPIO_RIS_DIO8_CLR: any = '0'

/**
Raw interrupt flag for DIO7*/
export const GPIO_RIS_DIO7: any = '1'

/**
Interrupt occured*/
export const GPIO_RIS_DIO7_SET: any = '1'

/**
Interrupt did not occur*/
export const GPIO_RIS_DIO7_CLR: any = '0'

/**
Raw interrupt flag for DIO6*/
export const GPIO_RIS_DIO6: any = '1'

/**
Interrupt occured*/
export const GPIO_RIS_DIO6_SET: any = '1'

/**
Interrupt did not occur*/
export const GPIO_RIS_DIO6_CLR: any = '0'

/**
Raw interrupt flag for DIO5*/
export const GPIO_RIS_DIO5: any = '1'

/**
Interrupt occured*/
export const GPIO_RIS_DIO5_SET: any = '1'

/**
Interrupt did not occur*/
export const GPIO_RIS_DIO5_CLR: any = '0'

/**
Raw interrupt flag for DIO4*/
export const GPIO_RIS_DIO4: any = '1'

/**
Interrupt occured*/
export const GPIO_RIS_DIO4_SET: any = '1'

/**
Interrupt did not occur*/
export const GPIO_RIS_DIO4_CLR: any = '0'

/**
Raw interrupt flag for DIO3*/
export const GPIO_RIS_DIO3: any = '1'

/**
Interrupt occured*/
export const GPIO_RIS_DIO3_SET: any = '1'

/**
Interrupt did not occur*/
export const GPIO_RIS_DIO3_CLR: any = '0'

/**
Raw interrupt flag for DIO2*/
export const GPIO_RIS_DIO2: any = '1'

/**
Interrupt occured*/
export const GPIO_RIS_DIO2_SET: any = '1'

/**
Interrupt did not occur*/
export const GPIO_RIS_DIO2_CLR: any = '0'

/**
Raw interrupt flag for DIO1*/
export const GPIO_RIS_DIO1: any = '1'

/**
Interrupt occured*/
export const GPIO_RIS_DIO1_SET: any = '1'

/**
Interrupt did not occur*/
export const GPIO_RIS_DIO1_CLR: any = '0'

/**
Raw interrupt flag for DIO0*/
export const GPIO_RIS_DIO0: any = '1'

/**
Interrupt occured*/
export const GPIO_RIS_DIO0_SET: any = '1'

/**
Interrupt did not occur*/
export const GPIO_RIS_DIO0_CLR: any = '0'


// -------- REGISTER MIS -------- //

/**
Masked interrupt flag for DIO pins*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_MIS_RESERVED26: any = '6'

/**
Masked interrupt flag for DIO25*/
export const GPIO_MIS_DIO25: any = '1'

/**
Interrupt occured*/
export const GPIO_MIS_DIO25_SET: any = '1'

/**
Interrupt did not occur*/
export const GPIO_MIS_DIO25_CLR: any = '0'

/**
Masked interrupt flag for DIO24*/
export const GPIO_MIS_DIO24: any = '1'

/**
Interrupt occured*/
export const GPIO_MIS_DIO24_SET: any = '1'

/**
Interrupt did not occur*/
export const GPIO_MIS_DIO24_CLR: any = '0'

/**
Masked interrupt flag for DIO23*/
export const GPIO_MIS_DIO23: any = '1'

/**
Interrupt occured*/
export const GPIO_MIS_DIO23_SET: any = '1'

/**
Interrupt did not occur*/
export const GPIO_MIS_DIO23_CLR: any = '0'

/**
Masked interrupt flag for DIO22*/
export const GPIO_MIS_DIO22: any = '1'

/**
Interrupt occured*/
export const GPIO_MIS_DIO22_SET: any = '1'

/**
Interrupt did not occur*/
export const GPIO_MIS_DIO22_CLR: any = '0'

/**
Masked interrupt flag for DIO21*/
export const GPIO_MIS_DIO21: any = '1'

/**
Interrupt occured*/
export const GPIO_MIS_DIO21_SET: any = '1'

/**
Interrupt did not occur*/
export const GPIO_MIS_DIO21_CLR: any = '0'

/**
Masked interrupt flag for DIO20*/
export const GPIO_MIS_DIO20: any = '1'

/**
Interrupt occured*/
export const GPIO_MIS_DIO20_SET: any = '1'

/**
Interrupt did not occur*/
export const GPIO_MIS_DIO20_CLR: any = '0'

/**
Masked interrupt flag for DIO19*/
export const GPIO_MIS_DIO19: any = '1'

/**
Interrupt occured*/
export const GPIO_MIS_DIO19_SET: any = '1'

/**
Interrupt did not occur*/
export const GPIO_MIS_DIO19_CLR: any = '0'

/**
Masked interrupt flag for DIO18*/
export const GPIO_MIS_DIO18: any = '1'

/**
Interrupt occured*/
export const GPIO_MIS_DIO18_SET: any = '1'

/**
Interrupt did not occur*/
export const GPIO_MIS_DIO18_CLR: any = '0'

/**
Masked interrupt flag for DIO17*/
export const GPIO_MIS_DIO17: any = '1'

/**
Interrupt occured*/
export const GPIO_MIS_DIO17_SET: any = '1'

/**
Interrupt did not occur*/
export const GPIO_MIS_DIO17_CLR: any = '0'

/**
Masked interrupt flag for DIO16*/
export const GPIO_MIS_DIO16: any = '1'

/**
Interrupt occured*/
export const GPIO_MIS_DIO16_SET: any = '1'

/**
Interrupt did not occur*/
export const GPIO_MIS_DIO16_CLR: any = '0'

/**
Masked interrupt flag for DIO15*/
export const GPIO_MIS_DIO15: any = '1'

/**
Interrupt occured*/
export const GPIO_MIS_DIO15_SET: any = '1'

/**
Interrupt did not occur*/
export const GPIO_MIS_DIO15_CLR: any = '0'

/**
Masked interrupt flag for DIO14*/
export const GPIO_MIS_DIO14: any = '1'

/**
Interrupt occured*/
export const GPIO_MIS_DIO14_SET: any = '1'

/**
Interrupt did not occur*/
export const GPIO_MIS_DIO14_CLR: any = '0'

/**
Masked interrupt flag for DIO13*/
export const GPIO_MIS_DIO13: any = '1'

/**
Interrupt occured*/
export const GPIO_MIS_DIO13_SET: any = '1'

/**
Interrupt did not occur*/
export const GPIO_MIS_DIO13_CLR: any = '0'

/**
Masked interrupt flag for DIO12*/
export const GPIO_MIS_DIO12: any = '1'

/**
Interrupt occured*/
export const GPIO_MIS_DIO12_SET: any = '1'

/**
Interrupt did not occur*/
export const GPIO_MIS_DIO12_CLR: any = '0'

/**
Masked interrupt flag for DIO11*/
export const GPIO_MIS_DIO11: any = '1'

/**
Interrupt occured*/
export const GPIO_MIS_DIO11_SET: any = '1'

/**
Interrupt did not occur*/
export const GPIO_MIS_DIO11_CLR: any = '0'

/**
Masked interrupt flag for DIO10*/
export const GPIO_MIS_DIO10: any = '1'

/**
Interrupt occured*/
export const GPIO_MIS_DIO10_SET: any = '1'

/**
Interrupt did not occur*/
export const GPIO_MIS_DIO10_CLR: any = '0'

/**
Masked interrupt flag for DIO9*/
export const GPIO_MIS_DIO9: any = '1'

/**
Interrupt occured*/
export const GPIO_MIS_DIO9_SET: any = '1'

/**
Interrupt did not occur*/
export const GPIO_MIS_DIO9_CLR: any = '0'

/**
Masked interrupt flag for DIO8*/
export const GPIO_MIS_DIO8: any = '1'

/**
Interrupt occured*/
export const GPIO_MIS_DIO8_SET: any = '1'

/**
Interrupt did not occur*/
export const GPIO_MIS_DIO8_CLR: any = '0'

/**
Masked interrupt flag for DIO7*/
export const GPIO_MIS_DIO7: any = '1'

/**
Interrupt occured*/
export const GPIO_MIS_DIO7_SET: any = '1'

/**
Interrupt did not occur*/
export const GPIO_MIS_DIO7_CLR: any = '0'

/**
Masked interrupt flag for DIO6*/
export const GPIO_MIS_DIO6: any = '1'

/**
Interrupt occured*/
export const GPIO_MIS_DIO6_SET: any = '1'

/**
Interrupt did not occur*/
export const GPIO_MIS_DIO6_CLR: any = '0'

/**
Masked interrupt flag for DIO5*/
export const GPIO_MIS_DIO5: any = '1'

/**
Interrupt occured*/
export const GPIO_MIS_DIO5_SET: any = '1'

/**
Interrupt did not occur*/
export const GPIO_MIS_DIO5_CLR: any = '0'

/**
Masked interrupt flag for DIO4*/
export const GPIO_MIS_DIO4: any = '1'

/**
Interrupt occured*/
export const GPIO_MIS_DIO4_SET: any = '1'

/**
Interrupt did not occur*/
export const GPIO_MIS_DIO4_CLR: any = '0'

/**
Masked interrupt flag for DIO3*/
export const GPIO_MIS_DIO3: any = '1'

/**
Interrupt occured*/
export const GPIO_MIS_DIO3_SET: any = '1'

/**
Interrupt did not occur*/
export const GPIO_MIS_DIO3_CLR: any = '0'

/**
Masked interrupt flag for DIO2*/
export const GPIO_MIS_DIO2: any = '1'

/**
Interrupt occured*/
export const GPIO_MIS_DIO2_SET: any = '1'

/**
Interrupt did not occur*/
export const GPIO_MIS_DIO2_CLR: any = '0'

/**
Masked interrupt flag for DIO1*/
export const GPIO_MIS_DIO1: any = '1'

/**
Interrupt occured*/
export const GPIO_MIS_DIO1_SET: any = '1'

/**
Interrupt did not occur*/
export const GPIO_MIS_DIO1_CLR: any = '0'

/**
Masked interrupt flag for DIO0*/
export const GPIO_MIS_DIO0: any = '1'

/**
Interrupt occured*/
export const GPIO_MIS_DIO0_SET: any = '1'

/**
Interrupt did not occur*/
export const GPIO_MIS_DIO0_CLR: any = '0'


// -------- REGISTER ISET -------- //

/**
Set interrupt flag in RIS by writing a one*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_ISET_RESERVED26: any = '6'

/**
Set DIO25 in RIS*/
export const GPIO_ISET_DIO25: any = '1'

/**
Set Interrupt*/
export const GPIO_ISET_DIO25_SET: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_ISET_DIO25_NOEFF: any = '0'

/**
Set DIO24 in RIS*/
export const GPIO_ISET_DIO24: any = '1'

/**
Set Interrupt*/
export const GPIO_ISET_DIO24_SET: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_ISET_DIO24_NOEFF: any = '0'

/**
Set DIO23 in RIS*/
export const GPIO_ISET_DIO23: any = '1'

/**
Set Interrupt*/
export const GPIO_ISET_DIO23_SET: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_ISET_DIO23_NOEFF: any = '0'

/**
Set DIO22 in RIS*/
export const GPIO_ISET_DIO22: any = '1'

/**
Set Interrupt*/
export const GPIO_ISET_DIO22_SET: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_ISET_DIO22_NOEFF: any = '0'

/**
Set DIO21 in RIS*/
export const GPIO_ISET_DIO21: any = '1'

/**
Set Interrupt*/
export const GPIO_ISET_DIO21_SET: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_ISET_DIO21_NOEFF: any = '0'

/**
Set DIO20 in RIS*/
export const GPIO_ISET_DIO20: any = '1'

/**
Set Interrupt*/
export const GPIO_ISET_DIO20_SET: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_ISET_DIO20_NOEFF: any = '0'

/**
Set DIO19 in RIS*/
export const GPIO_ISET_DIO19: any = '1'

/**
Set Interrupt*/
export const GPIO_ISET_DIO19_SET: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_ISET_DIO19_NOEFF: any = '0'

/**
Set DIO18 in RIS*/
export const GPIO_ISET_DIO18: any = '1'

/**
Set Interrupt*/
export const GPIO_ISET_DIO18_SET: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_ISET_DIO18_NOEFF: any = '0'

/**
Set DIO17 in RIS*/
export const GPIO_ISET_DIO17: any = '1'

/**
Set Interrupt*/
export const GPIO_ISET_DIO17_SET: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_ISET_DIO17_NOEFF: any = '0'

/**
Set DIO16 in RIS*/
export const GPIO_ISET_DIO16: any = '1'

/**
Set Interrupt*/
export const GPIO_ISET_DIO16_SET: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_ISET_DIO16_NOEFF: any = '0'

/**
Set DIO15 in RIS*/
export const GPIO_ISET_DIO15: any = '1'

/**
Set Interrupt*/
export const GPIO_ISET_DIO15_SET: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_ISET_DIO15_NOEFF: any = '0'

/**
Set DIO14 in RIS*/
export const GPIO_ISET_DIO14: any = '1'

/**
Set Interrupt*/
export const GPIO_ISET_DIO14_SET: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_ISET_DIO14_NOEFF: any = '0'

/**
Set DIO13 in RIS*/
export const GPIO_ISET_DIO13: any = '1'

/**
Set Interrupt*/
export const GPIO_ISET_DIO13_SET: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_ISET_DIO13_NOEFF: any = '0'

/**
Set DIO12 in RIS*/
export const GPIO_ISET_DIO12: any = '1'

/**
Set Interrupt*/
export const GPIO_ISET_DIO12_SET: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_ISET_DIO12_NOEFF: any = '0'

/**
Set DIO11 in RIS*/
export const GPIO_ISET_DIO11: any = '1'

/**
Set Interrupt*/
export const GPIO_ISET_DIO11_SET: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_ISET_DIO11_NOEFF: any = '0'

/**
Set DIO10 in RIS*/
export const GPIO_ISET_DIO10: any = '1'

/**
Set Interrupt*/
export const GPIO_ISET_DIO10_SET: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_ISET_DIO10_NOEFF: any = '0'

/**
Set DIO9 in RIS*/
export const GPIO_ISET_DIO9: any = '1'

/**
Set Interrupt*/
export const GPIO_ISET_DIO9_SET: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_ISET_DIO9_NOEFF: any = '0'

/**
Set DIO8 in RIS*/
export const GPIO_ISET_DIO8: any = '1'

/**
Set Interrupt*/
export const GPIO_ISET_DIO8_SET: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_ISET_DIO8_NOEFF: any = '0'

/**
Set DIO7 in RIS*/
export const GPIO_ISET_DIO7: any = '1'

/**
Set Interrupt*/
export const GPIO_ISET_DIO7_SET: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_ISET_DIO7_NOEFF: any = '0'

/**
Set DIO6 in RIS*/
export const GPIO_ISET_DIO6: any = '1'

/**
Set Interrupt*/
export const GPIO_ISET_DIO6_SET: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_ISET_DIO6_NOEFF: any = '0'

/**
Set DIO5 in RIS*/
export const GPIO_ISET_DIO5: any = '1'

/**
Set Interrupt*/
export const GPIO_ISET_DIO5_SET: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_ISET_DIO5_NOEFF: any = '0'

/**
Set DIO4 in RIS*/
export const GPIO_ISET_DIO4: any = '1'

/**
Set Interrupt*/
export const GPIO_ISET_DIO4_SET: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_ISET_DIO4_NOEFF: any = '0'

/**
Set DIO3 in RIS*/
export const GPIO_ISET_DIO3: any = '1'

/**
Set Interrupt*/
export const GPIO_ISET_DIO3_SET: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_ISET_DIO3_NOEFF: any = '0'

/**
Set DIO2 in RIS*/
export const GPIO_ISET_DIO2: any = '1'

/**
Set Interrupt*/
export const GPIO_ISET_DIO2_SET: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_ISET_DIO2_NOEFF: any = '0'

/**
Set DIO1 in RIS*/
export const GPIO_ISET_DIO1: any = '1'

/**
Set Interrupt*/
export const GPIO_ISET_DIO1_SET: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_ISET_DIO1_NOEFF: any = '0'

/**
Set DIO0 in RIS*/
export const GPIO_ISET_DIO0: any = '1'

/**
Set Interrupt*/
export const GPIO_ISET_DIO0_SET: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_ISET_DIO0_NOEFF: any = '0'


// -------- REGISTER ICLR -------- //

/**
Clear interrupt flag in RIS by writing a one*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_ICLR_RESERVED26: any = '6'

/**
Clears DIO25 in RIS*/
export const GPIO_ICLR_DIO25: any = '1'

/**
Clear Interrupt*/
export const GPIO_ICLR_DIO25_CLR: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_ICLR_DIO25_NOEFF: any = '0'

/**
Clears DIO24 in RIS*/
export const GPIO_ICLR_DIO24: any = '1'

/**
Clear Interrupt*/
export const GPIO_ICLR_DIO24_CLR: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_ICLR_DIO24_NOEFF: any = '0'

/**
Clears DIO23 in RIS*/
export const GPIO_ICLR_DIO23: any = '1'

/**
Clear Interrupt*/
export const GPIO_ICLR_DIO23_CLR: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_ICLR_DIO23_NOEFF: any = '0'

/**
Clears DIO22 in RIS*/
export const GPIO_ICLR_DIO22: any = '1'

/**
Clear Interrupt*/
export const GPIO_ICLR_DIO22_CLR: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_ICLR_DIO22_NOEFF: any = '0'

/**
Clears DIO21 in RIS*/
export const GPIO_ICLR_DIO21: any = '1'

/**
Clear Interrupt*/
export const GPIO_ICLR_DIO21_CLR: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_ICLR_DIO21_NOEFF: any = '0'

/**
Clears DIO20 in RIS*/
export const GPIO_ICLR_DIO20: any = '1'

/**
Clear Interrupt*/
export const GPIO_ICLR_DIO20_CLR: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_ICLR_DIO20_NOEFF: any = '0'

/**
Clears DIO19 in RIS*/
export const GPIO_ICLR_DIO19: any = '1'

/**
Clear Interrupt*/
export const GPIO_ICLR_DIO19_CLR: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_ICLR_DIO19_NOEFF: any = '0'

/**
Clears DIO18 in RIS*/
export const GPIO_ICLR_DIO18: any = '1'

/**
Clear Interrupt*/
export const GPIO_ICLR_DIO18_CLR: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_ICLR_DIO18_NOEFF: any = '0'

/**
Clears DIO17 in RIS*/
export const GPIO_ICLR_DIO17: any = '1'

/**
Clear Interrupt*/
export const GPIO_ICLR_DIO17_CLR: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_ICLR_DIO17_NOEFF: any = '0'

/**
Clears DIO16 in RIS*/
export const GPIO_ICLR_DIO16: any = '1'

/**
Clear Interrupt*/
export const GPIO_ICLR_DIO16_CLR: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_ICLR_DIO16_NOEFF: any = '0'

/**
Clears DIO15 in RIS*/
export const GPIO_ICLR_DIO15: any = '1'

/**
Clear Interrupt*/
export const GPIO_ICLR_DIO15_CLR: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_ICLR_DIO15_NOEFF: any = '0'

/**
Clears DIO14 in RIS*/
export const GPIO_ICLR_DIO14: any = '1'

/**
Clear Interrupt*/
export const GPIO_ICLR_DIO14_CLR: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_ICLR_DIO14_NOEFF: any = '0'

/**
Clears DIO13 in RIS*/
export const GPIO_ICLR_DIO13: any = '1'

/**
Clear Interrupt*/
export const GPIO_ICLR_DIO13_CLR: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_ICLR_DIO13_NOEFF: any = '0'

/**
Clears DIO12 in RIS*/
export const GPIO_ICLR_DIO12: any = '1'

/**
Clear Interrupt*/
export const GPIO_ICLR_DIO12_CLR: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_ICLR_DIO12_NOEFF: any = '0'

/**
Clears DIO11 in RIS*/
export const GPIO_ICLR_DIO11: any = '1'

/**
Clear Interrupt*/
export const GPIO_ICLR_DIO11_CLR: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_ICLR_DIO11_NOEFF: any = '0'

/**
Clears DIO10 in RIS*/
export const GPIO_ICLR_DIO10: any = '1'

/**
Clear Interrupt*/
export const GPIO_ICLR_DIO10_CLR: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_ICLR_DIO10_NOEFF: any = '0'

/**
Clears DIO9 in RIS*/
export const GPIO_ICLR_DIO9: any = '1'

/**
Clear Interrupt*/
export const GPIO_ICLR_DIO9_CLR: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_ICLR_DIO9_NOEFF: any = '0'

/**
Clears DIO8 in RIS*/
export const GPIO_ICLR_DIO8: any = '1'

/**
Clear Interrupt*/
export const GPIO_ICLR_DIO8_CLR: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_ICLR_DIO8_NOEFF: any = '0'

/**
Clears DIO7 in RIS*/
export const GPIO_ICLR_DIO7: any = '1'

/**
Clear Interrupt*/
export const GPIO_ICLR_DIO7_CLR: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_ICLR_DIO7_NOEFF: any = '0'

/**
Clears DIO6 in RIS*/
export const GPIO_ICLR_DIO6: any = '1'

/**
Clear Interrupt*/
export const GPIO_ICLR_DIO6_CLR: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_ICLR_DIO6_NOEFF: any = '0'

/**
Clears DIO5 in RIS*/
export const GPIO_ICLR_DIO5: any = '1'

/**
Clear Interrupt*/
export const GPIO_ICLR_DIO5_CLR: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_ICLR_DIO5_NOEFF: any = '0'

/**
Clears DIO4 in RIS*/
export const GPIO_ICLR_DIO4: any = '1'

/**
Clear Interrupt*/
export const GPIO_ICLR_DIO4_CLR: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_ICLR_DIO4_NOEFF: any = '0'

/**
Clears DIO3 in RIS*/
export const GPIO_ICLR_DIO3: any = '1'

/**
Clear Interrupt*/
export const GPIO_ICLR_DIO3_CLR: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_ICLR_DIO3_NOEFF: any = '0'

/**
Clears DIO2 in RIS*/
export const GPIO_ICLR_DIO2: any = '1'

/**
Clear Interrupt*/
export const GPIO_ICLR_DIO2_CLR: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_ICLR_DIO2_NOEFF: any = '0'

/**
Clears DIO1 in RIS*/
export const GPIO_ICLR_DIO1: any = '1'

/**
Clear Interrupt*/
export const GPIO_ICLR_DIO1_CLR: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_ICLR_DIO1_NOEFF: any = '0'

/**
Clears DIO0 in RIS*/
export const GPIO_ICLR_DIO0: any = '1'

/**
Clear Interrupt*/
export const GPIO_ICLR_DIO0_CLR: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_ICLR_DIO0_NOEFF: any = '0'


// -------- REGISTER IMSET -------- //

/**
Set interrupt mask in IMASK by writing a one*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_IMSET_RESERVED26: any = '6'

/**
Sets DIO25 in IMASK*/
export const GPIO_IMSET_DIO25: any = '1'

/**
Set interrupt mask*/
export const GPIO_IMSET_DIO25_SET: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_IMSET_DIO25_NOEFF: any = '0'

/**
Sets DIO24 in IMASK*/
export const GPIO_IMSET_DIO24: any = '1'

/**
Set interrupt mask*/
export const GPIO_IMSET_DIO24_SET: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_IMSET_DIO24_NOEFF: any = '0'

/**
Sets DIO23 in IMASK*/
export const GPIO_IMSET_DIO23: any = '1'

/**
Set interrupt mask*/
export const GPIO_IMSET_DIO23_SET: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_IMSET_DIO23_NOEFF: any = '0'

/**
Sets DIO22 in IMASK*/
export const GPIO_IMSET_DIO22: any = '1'

/**
Set interrupt mask*/
export const GPIO_IMSET_DIO22_SET: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_IMSET_DIO22_NOEFF: any = '0'

/**
Sets DIO21 in IMASK*/
export const GPIO_IMSET_DIO21: any = '1'

/**
Set interrupt mask*/
export const GPIO_IMSET_DIO21_SET: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_IMSET_DIO21_NOEFF: any = '0'

/**
Sets DIO20 in IMASK*/
export const GPIO_IMSET_DIO20: any = '1'

/**
Set interrupt mask*/
export const GPIO_IMSET_DIO20_SET: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_IMSET_DIO20_NOEFF: any = '0'

/**
Sets DIO19 in IMASK*/
export const GPIO_IMSET_DIO19: any = '1'

/**
Set interrupt mask*/
export const GPIO_IMSET_DIO19_SET: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_IMSET_DIO19_NOEFF: any = '0'

/**
Sets DIO18 in IMASK*/
export const GPIO_IMSET_DIO18: any = '1'

/**
Set interrupt mask*/
export const GPIO_IMSET_DIO18_SET: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_IMSET_DIO18_NOEFF: any = '0'

/**
Sets DIO17 in IMASK*/
export const GPIO_IMSET_DIO17: any = '1'

/**
Set interrupt mask*/
export const GPIO_IMSET_DIO17_SET: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_IMSET_DIO17_NOEFF: any = '0'

/**
Sets DIO16 in IMASK*/
export const GPIO_IMSET_DIO16: any = '1'

/**
Set interrupt mask*/
export const GPIO_IMSET_DIO16_SET: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_IMSET_DIO16_NOEFF: any = '0'

/**
Sets DIO15 in IMASK*/
export const GPIO_IMSET_DIO15: any = '1'

/**
Set interrupt mask*/
export const GPIO_IMSET_DIO15_SET: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_IMSET_DIO15_NOEFF: any = '0'

/**
Sets DIO14 in IMASK*/
export const GPIO_IMSET_DIO14: any = '1'

/**
Set interrupt mask*/
export const GPIO_IMSET_DIO14_SET: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_IMSET_DIO14_NOEFF: any = '0'

/**
Sets DIO13 in IMASK*/
export const GPIO_IMSET_DIO13: any = '1'

/**
Set interrupt mask*/
export const GPIO_IMSET_DIO13_SET: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_IMSET_DIO13_NOEFF: any = '0'

/**
Sets DIO12 in IMASK*/
export const GPIO_IMSET_DIO12: any = '1'

/**
Set interrupt mask*/
export const GPIO_IMSET_DIO12_SET: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_IMSET_DIO12_NOEFF: any = '0'

/**
Sets DIO11 in IMASK*/
export const GPIO_IMSET_DIO11: any = '1'

/**
Set interrupt mask*/
export const GPIO_IMSET_DIO11_SET: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_IMSET_DIO11_NOEFF: any = '0'

/**
Sets DIO10 in IMASK*/
export const GPIO_IMSET_DIO10: any = '1'

/**
Set interrupt mask*/
export const GPIO_IMSET_DIO10_SET: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_IMSET_DIO10_NOEFF: any = '0'

/**
Sets DIO9 in IMASK*/
export const GPIO_IMSET_DIO9: any = '1'

/**
Set interrupt mask*/
export const GPIO_IMSET_DIO9_SET: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_IMSET_DIO9_NOEFF: any = '0'

/**
Sets DIO8 in IMASK*/
export const GPIO_IMSET_DIO8: any = '1'

/**
Set interrupt mask*/
export const GPIO_IMSET_DIO8_SET: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_IMSET_DIO8_NOEFF: any = '0'

/**
Sets DIO7 in IMASK*/
export const GPIO_IMSET_DIO7: any = '1'

/**
Set interrupt mask*/
export const GPIO_IMSET_DIO7_SET: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_IMSET_DIO7_NOEFF: any = '0'

/**
Sets DIO6 in IMASK*/
export const GPIO_IMSET_DIO6: any = '1'

/**
Set interrupt mask*/
export const GPIO_IMSET_DIO6_SET: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_IMSET_DIO6_NOEFF: any = '0'

/**
Sets DIO5 in IMASK*/
export const GPIO_IMSET_DIO5: any = '1'

/**
Set interrupt mask*/
export const GPIO_IMSET_DIO5_SET: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_IMSET_DIO5_NOEFF: any = '0'

/**
Sets DIO4 in IMASK*/
export const GPIO_IMSET_DIO4: any = '1'

/**
Set interrupt mask*/
export const GPIO_IMSET_DIO4_SET: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_IMSET_DIO4_NOEFF: any = '0'

/**
Sets DIO3 in IMASK*/
export const GPIO_IMSET_DIO3: any = '1'

/**
Set interrupt mask*/
export const GPIO_IMSET_DIO3_SET: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_IMSET_DIO3_NOEFF: any = '0'

/**
Sets DIO2 in IMASK*/
export const GPIO_IMSET_DIO2: any = '1'

/**
Set interrupt mask*/
export const GPIO_IMSET_DIO2_SET: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_IMSET_DIO2_NOEFF: any = '0'

/**
Sets DIO1 in IMASK*/
export const GPIO_IMSET_DIO1: any = '1'

/**
Set interrupt mask*/
export const GPIO_IMSET_DIO1_SET: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_IMSET_DIO1_NOEFF: any = '0'

/**
Sets DIO0 in IMASK*/
export const GPIO_IMSET_DIO0: any = '1'

/**
Set interrupt mask*/
export const GPIO_IMSET_DIO0_SET: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_IMSET_DIO0_NOEFF: any = '0'


// -------- REGISTER IMCLR -------- //

/**
Clear interrupt mask in IMASK by writing a one*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_IMCLR_RESERVED26: any = '6'

/**
Clears DIO25 in IMASK*/
export const GPIO_IMCLR_DIO25: any = '1'

/**
Clear interrupt mask*/
export const GPIO_IMCLR_DIO25_CLR: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_IMCLR_DIO25_NOEFF: any = '0'

/**
Clears DIO24 in IMASK*/
export const GPIO_IMCLR_DIO24: any = '1'

/**
Clear interrupt mask*/
export const GPIO_IMCLR_DIO24_CLR: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_IMCLR_DIO24_NOEFF: any = '0'

/**
Clears DIO23 in IMASK*/
export const GPIO_IMCLR_DIO23: any = '1'

/**
Clear interrupt mask*/
export const GPIO_IMCLR_DIO23_CLR: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_IMCLR_DIO23_NOEFF: any = '0'

/**
Clears DIO22 in IMASK*/
export const GPIO_IMCLR_DIO22: any = '1'

/**
Clear interrupt mask*/
export const GPIO_IMCLR_DIO22_CLR: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_IMCLR_DIO22_NOEFF: any = '0'

/**
Clears DIO21 in IMASK*/
export const GPIO_IMCLR_DIO21: any = '1'

/**
Clear interrupt mask*/
export const GPIO_IMCLR_DIO21_CLR: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_IMCLR_DIO21_NOEFF: any = '0'

/**
Clears DIO20 in IMASK*/
export const GPIO_IMCLR_DIO20: any = '1'

/**
Clear interrupt mask*/
export const GPIO_IMCLR_DIO20_CLR: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_IMCLR_DIO20_NOEFF: any = '0'

/**
Clears DIO19 in IMASK*/
export const GPIO_IMCLR_DIO19: any = '1'

/**
Clear interrupt mask*/
export const GPIO_IMCLR_DIO19_CLR: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_IMCLR_DIO19_NOEFF: any = '0'

/**
Clears DIO18 in IMASK*/
export const GPIO_IMCLR_DIO18: any = '1'

/**
Clear interrupt mask*/
export const GPIO_IMCLR_DIO18_CLR: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_IMCLR_DIO18_NOEFF: any = '0'

/**
Clears DIO17 in IMASK*/
export const GPIO_IMCLR_DIO17: any = '1'

/**
Clear interrupt mask*/
export const GPIO_IMCLR_DIO17_CLR: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_IMCLR_DIO17_NOEFF: any = '0'

/**
Clears DIO16 in IMASK*/
export const GPIO_IMCLR_DIO16: any = '1'

/**
Clear interrupt mask*/
export const GPIO_IMCLR_DIO16_CLR: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_IMCLR_DIO16_NOEFF: any = '0'

/**
Clears DIO15 in IMASK*/
export const GPIO_IMCLR_DIO15: any = '1'

/**
Clear interrupt mask*/
export const GPIO_IMCLR_DIO15_CLR: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_IMCLR_DIO15_NOEFF: any = '0'

/**
Clears DIO14 in IMASK*/
export const GPIO_IMCLR_DIO14: any = '1'

/**
Clear interrupt mask*/
export const GPIO_IMCLR_DIO14_CLR: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_IMCLR_DIO14_NOEFF: any = '0'

/**
Clears DIO13 in IMASK*/
export const GPIO_IMCLR_DIO13: any = '1'

/**
Clear interrupt mask*/
export const GPIO_IMCLR_DIO13_CLR: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_IMCLR_DIO13_NOEFF: any = '0'

/**
Clears DIO12 in IMASK*/
export const GPIO_IMCLR_DIO12: any = '1'

/**
Clear interrupt mask*/
export const GPIO_IMCLR_DIO12_CLR: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_IMCLR_DIO12_NOEFF: any = '0'

/**
Clears DIO11 in IMASK*/
export const GPIO_IMCLR_DIO11: any = '1'

/**
Clear interrupt mask*/
export const GPIO_IMCLR_DIO11_CLR: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_IMCLR_DIO11_NOEFF: any = '0'

/**
Clears DIO10 in IMASK*/
export const GPIO_IMCLR_DIO10: any = '1'

/**
Clear interrupt mask*/
export const GPIO_IMCLR_DIO10_CLR: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_IMCLR_DIO10_NOEFF: any = '0'

/**
Clears DIO9 in IMASK*/
export const GPIO_IMCLR_DIO9: any = '1'

/**
Clear interrupt mask*/
export const GPIO_IMCLR_DIO9_CLR: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_IMCLR_DIO9_NOEFF: any = '0'

/**
Clears DIO8 in IMASK*/
export const GPIO_IMCLR_DIO8: any = '1'

/**
Clear interrupt mask*/
export const GPIO_IMCLR_DIO8_CLR: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_IMCLR_DIO8_NOEFF: any = '0'

/**
Clears DIO7 in IMASK*/
export const GPIO_IMCLR_DIO7: any = '1'

/**
Clear interrupt mask*/
export const GPIO_IMCLR_DIO7_CLR: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_IMCLR_DIO7_NOEFF: any = '0'

/**
Clears DIO6 in IMASK*/
export const GPIO_IMCLR_DIO6: any = '1'

/**
Clear interrupt mask*/
export const GPIO_IMCLR_DIO6_CLR: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_IMCLR_DIO6_NOEFF: any = '0'

/**
Clears DIO5 in IMASK*/
export const GPIO_IMCLR_DIO5: any = '1'

/**
Clear interrupt mask*/
export const GPIO_IMCLR_DIO5_CLR: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_IMCLR_DIO5_NOEFF: any = '0'

/**
Clears DIO4 in IMASK*/
export const GPIO_IMCLR_DIO4: any = '1'

/**
Clear interrupt mask*/
export const GPIO_IMCLR_DIO4_CLR: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_IMCLR_DIO4_NOEFF: any = '0'

/**
Clears DIO3 in IMASK*/
export const GPIO_IMCLR_DIO3: any = '1'

/**
Clear interrupt mask*/
export const GPIO_IMCLR_DIO3_CLR: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_IMCLR_DIO3_NOEFF: any = '0'

/**
Clears DIO2 in IMASK*/
export const GPIO_IMCLR_DIO2: any = '1'

/**
Clear interrupt mask*/
export const GPIO_IMCLR_DIO2_CLR: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_IMCLR_DIO2_NOEFF: any = '0'

/**
Clears DIO1 in IMASK*/
export const GPIO_IMCLR_DIO1: any = '1'

/**
Clear interrupt mask*/
export const GPIO_IMCLR_DIO1_CLR: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_IMCLR_DIO1_NOEFF: any = '0'

/**
Clears DIO0 in IMASK*/
export const GPIO_IMCLR_DIO0: any = '1'

/**
Clear interrupt mask*/
export const GPIO_IMCLR_DIO0_CLR: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_IMCLR_DIO0_NOEFF: any = '0'


// -------- REGISTER DOUT3_0 -------- //

/**
Alias register for byte access to DOUT31_0[3:0] bits.*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_DOUT3_0_RESERVED25: any = '7'

/**
Data output for DIO3*/
export const GPIO_DOUT3_0_DIO3: any = '1'

/**
Output is set to 1*/
export const GPIO_DOUT3_0_DIO3_ONE: any = '1'

/**
Output is set to 0*/
export const GPIO_DOUT3_0_DIO3_ZERO: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_DOUT3_0_RESERVED17: any = '7'

/**
Data output for DIO2*/
export const GPIO_DOUT3_0_DIO2: any = '1'

/**
Output is set to 1*/
export const GPIO_DOUT3_0_DIO2_ONE: any = '1'

/**
Output is set to 0*/
export const GPIO_DOUT3_0_DIO2_ZERO: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_DOUT3_0_RESERVED9: any = '7'

/**
Data output for DIO1*/
export const GPIO_DOUT3_0_DIO1: any = '1'

/**
Output is set to 1*/
export const GPIO_DOUT3_0_DIO1_ONE: any = '1'

/**
Output is set to 0*/
export const GPIO_DOUT3_0_DIO1_ZERO: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_DOUT3_0_RESERVED1: any = '7'

/**
Data output for DIO0*/
export const GPIO_DOUT3_0_DIO0: any = '1'

/**
Output is set to 1*/
export const GPIO_DOUT3_0_DIO0_ONE: any = '1'

/**
Output is set to 0*/
export const GPIO_DOUT3_0_DIO0_ZERO: any = '0'


// -------- REGISTER DOUT7_4 -------- //

/**
Alias register for byte access to DOUT31_0[7:4] bits*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_DOUT7_4_RESERVED25: any = '7'

/**
Data output for DIO7*/
export const GPIO_DOUT7_4_DIO7: any = '1'

/**
Output is set to 1*/
export const GPIO_DOUT7_4_DIO7_ONE: any = '1'

/**
Output is set to 0*/
export const GPIO_DOUT7_4_DIO7_ZERO: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_DOUT7_4_RESERVED17: any = '7'

/**
Data output for DIO6*/
export const GPIO_DOUT7_4_DIO6: any = '1'

/**
Output is set to 1*/
export const GPIO_DOUT7_4_DIO6_ONE: any = '1'

/**
Output is set to 0*/
export const GPIO_DOUT7_4_DIO6_ZERO: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_DOUT7_4_RESERVED9: any = '7'

/**
Data output for DIO5*/
export const GPIO_DOUT7_4_DIO5: any = '1'

/**
Output is set to 1*/
export const GPIO_DOUT7_4_DIO5_ONE: any = '1'

/**
Output is set to 0*/
export const GPIO_DOUT7_4_DIO5_ZERO: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_DOUT7_4_RESERVED1: any = '7'

/**
Data output for DIO4*/
export const GPIO_DOUT7_4_DIO4: any = '1'

/**
Output is set to 1*/
export const GPIO_DOUT7_4_DIO4_ONE: any = '1'

/**
Output is set to 0*/
export const GPIO_DOUT7_4_DIO4_ZERO: any = '0'


// -------- REGISTER DOUT11_8 -------- //

/**
Alias register for byte access to DOUT31_0[11:8] bits*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_DOUT11_8_RESERVED25: any = '7'

/**
Data output for DIO11*/
export const GPIO_DOUT11_8_DIO11: any = '1'

/**
Output is set to 1*/
export const GPIO_DOUT11_8_DIO11_ONE: any = '1'

/**
Output is set to 0*/
export const GPIO_DOUT11_8_DIO11_ZERO: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_DOUT11_8_RESERVED17: any = '7'

/**
Data output for DIO10*/
export const GPIO_DOUT11_8_DIO10: any = '1'

/**
Output is set to 1*/
export const GPIO_DOUT11_8_DIO10_ONE: any = '1'

/**
Output is set to 0*/
export const GPIO_DOUT11_8_DIO10_ZERO: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_DOUT11_8_RESERVED9: any = '7'

/**
Data output for DIO9*/
export const GPIO_DOUT11_8_DIO9: any = '1'

/**
Output is set to 1*/
export const GPIO_DOUT11_8_DIO9_ONE: any = '1'

/**
Output is set to 0*/
export const GPIO_DOUT11_8_DIO9_ZERO: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_DOUT11_8_RESERVED1: any = '7'

/**
Data output for DIO8*/
export const GPIO_DOUT11_8_DIO8: any = '1'

/**
Output is set to 1*/
export const GPIO_DOUT11_8_DIO8_ONE: any = '1'

/**
Output is set to 0*/
export const GPIO_DOUT11_8_DIO8_ZERO: any = '0'


// -------- REGISTER DOUT15_12 -------- //

/**
Alias register for byte access to DOUT31_0[15:12] bits*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_DOUT15_12_RESERVED25: any = '7'

/**
Data output for DIO15*/
export const GPIO_DOUT15_12_DIO15: any = '1'

/**
Output is set to 1*/
export const GPIO_DOUT15_12_DIO15_ONE: any = '1'

/**
Output is set to 0*/
export const GPIO_DOUT15_12_DIO15_ZERO: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_DOUT15_12_RESERVED17: any = '7'

/**
Data output for DIO14*/
export const GPIO_DOUT15_12_DIO14: any = '1'

/**
Output is set to 1*/
export const GPIO_DOUT15_12_DIO14_ONE: any = '1'

/**
Output is set to 0*/
export const GPIO_DOUT15_12_DIO14_ZERO: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_DOUT15_12_RESERVED9: any = '7'

/**
Data output for DIO13*/
export const GPIO_DOUT15_12_DIO13: any = '1'

/**
Output is set to 1*/
export const GPIO_DOUT15_12_DIO13_ONE: any = '1'

/**
Output is set to 0*/
export const GPIO_DOUT15_12_DIO13_ZERO: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_DOUT15_12_RESERVED1: any = '7'

/**
Data output for DIO12*/
export const GPIO_DOUT15_12_DIO12: any = '1'

/**
Output is set to 1*/
export const GPIO_DOUT15_12_DIO12_ONE: any = '1'

/**
Output is set to 0*/
export const GPIO_DOUT15_12_DIO12_ZERO: any = '0'


// -------- REGISTER DOUT19_16 -------- //

/**
Alias register for byte access to DOUT31_0[19:16] bits*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_DOUT19_16_RESERVED25: any = '7'

/**
Data output for DIO19*/
export const GPIO_DOUT19_16_DIO19: any = '1'

/**
Output is set to 1*/
export const GPIO_DOUT19_16_DIO19_ONE: any = '1'

/**
Output is set to 0*/
export const GPIO_DOUT19_16_DIO19_ZERO: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_DOUT19_16_RESERVED17: any = '7'

/**
Data output for DIO18*/
export const GPIO_DOUT19_16_DIO18: any = '1'

/**
Output is set to 1*/
export const GPIO_DOUT19_16_DIO18_ONE: any = '1'

/**
Output is set to 0*/
export const GPIO_DOUT19_16_DIO18_ZERO: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_DOUT19_16_RESERVED9: any = '7'

/**
Data output for DIO17*/
export const GPIO_DOUT19_16_DIO17: any = '1'

/**
Output is set to 1*/
export const GPIO_DOUT19_16_DIO17_ONE: any = '1'

/**
Output is set to 0*/
export const GPIO_DOUT19_16_DIO17_ZERO: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_DOUT19_16_RESERVED1: any = '7'

/**
Data output for DIO16*/
export const GPIO_DOUT19_16_DIO16: any = '1'

/**
Output is set to 1*/
export const GPIO_DOUT19_16_DIO16_ONE: any = '1'

/**
Output is set to 0*/
export const GPIO_DOUT19_16_DIO16_ZERO: any = '0'


// -------- REGISTER DOUT23_20 -------- //

/**
Alias register for byte access to DOUT31_0[23:20] bits*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_DOUT23_20_RESERVED25: any = '7'

/**
Data output for DIO23*/
export const GPIO_DOUT23_20_DIO23: any = '1'

/**
Output is set to 1*/
export const GPIO_DOUT23_20_DIO23_ONE: any = '1'

/**
Output is set to 0*/
export const GPIO_DOUT23_20_DIO23_ZERO: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_DOUT23_20_RESERVED17: any = '7'

/**
Data output for DIO22*/
export const GPIO_DOUT23_20_DIO22: any = '1'

/**
Output is set to 1*/
export const GPIO_DOUT23_20_DIO22_ONE: any = '1'

/**
Output is set to 0*/
export const GPIO_DOUT23_20_DIO22_ZERO: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_DOUT23_20_RESERVED9: any = '7'

/**
Data output for DIO21*/
export const GPIO_DOUT23_20_DIO21: any = '1'

/**
Output is set to 1*/
export const GPIO_DOUT23_20_DIO21_ONE: any = '1'

/**
Output is set to 0*/
export const GPIO_DOUT23_20_DIO21_ZERO: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_DOUT23_20_RESERVED1: any = '7'

/**
Data output for DIO20*/
export const GPIO_DOUT23_20_DIO20: any = '1'

/**
Output is set to 1*/
export const GPIO_DOUT23_20_DIO20_ONE: any = '1'

/**
Output is set to 0*/
export const GPIO_DOUT23_20_DIO20_ZERO: any = '0'


// -------- REGISTER DOUT27_24 -------- //

/**
Alias register for byte access to DOUT31_0[27:24] bits*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_DOUT27_24_RESERVED9: any = '23'

/**
Data output for DIO25*/
export const GPIO_DOUT27_24_DIO25: any = '1'

/**
Output is set to 1*/
export const GPIO_DOUT27_24_DIO25_ONE: any = '1'

/**
Output is set to 0*/
export const GPIO_DOUT27_24_DIO25_ZERO: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_DOUT27_24_RESERVED1: any = '7'

/**
Data output for DIO24*/
export const GPIO_DOUT27_24_DIO24: any = '1'

/**
Output is set to 1*/
export const GPIO_DOUT27_24_DIO24_ONE: any = '1'

/**
Output is set to 0*/
export const GPIO_DOUT27_24_DIO24_ZERO: any = '0'


// -------- REGISTER DOUT31_0 -------- //

/**
Data Output for DIO 31 to 0 pins.*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_DOUT31_0_RESERVED26: any = '6'

/**
Data output for DIO25*/
export const GPIO_DOUT31_0_DIO25: any = '1'

/**
Output is set to 1*/
export const GPIO_DOUT31_0_DIO25_ONE: any = '1'

/**
Output is set to 0*/
export const GPIO_DOUT31_0_DIO25_ZERO: any = '0'

/**
Data output for DIO24*/
export const GPIO_DOUT31_0_DIO24: any = '1'

/**
Output is set to 1*/
export const GPIO_DOUT31_0_DIO24_ONE: any = '1'

/**
Output is set to 0*/
export const GPIO_DOUT31_0_DIO24_ZERO: any = '0'

/**
Data output for DIO23*/
export const GPIO_DOUT31_0_DIO23: any = '1'

/**
Output is set to 1*/
export const GPIO_DOUT31_0_DIO23_ONE: any = '1'

/**
Output is set to 0*/
export const GPIO_DOUT31_0_DIO23_ZERO: any = '0'

/**
Data output for DIO22*/
export const GPIO_DOUT31_0_DIO22: any = '1'

/**
Output is set to 1*/
export const GPIO_DOUT31_0_DIO22_ONE: any = '1'

/**
Output is set to 0*/
export const GPIO_DOUT31_0_DIO22_ZERO: any = '0'

/**
Data output for DIO21*/
export const GPIO_DOUT31_0_DIO21: any = '1'

/**
Output is set to 1*/
export const GPIO_DOUT31_0_DIO21_ONE: any = '1'

/**
Output is set to 0*/
export const GPIO_DOUT31_0_DIO21_ZERO: any = '0'

/**
Data output for DIO20*/
export const GPIO_DOUT31_0_DIO20: any = '1'

/**
Output is set to 1*/
export const GPIO_DOUT31_0_DIO20_ONE: any = '1'

/**
Output is set to 0*/
export const GPIO_DOUT31_0_DIO20_ZERO: any = '0'

/**
Data output for DIO19*/
export const GPIO_DOUT31_0_DIO19: any = '1'

/**
Output is set to 1*/
export const GPIO_DOUT31_0_DIO19_ONE: any = '1'

/**
Output is set to 0*/
export const GPIO_DOUT31_0_DIO19_ZERO: any = '0'

/**
Data output for DIO18*/
export const GPIO_DOUT31_0_DIO18: any = '1'

/**
Output is set to 1*/
export const GPIO_DOUT31_0_DIO18_ONE: any = '1'

/**
Output is set to 0*/
export const GPIO_DOUT31_0_DIO18_ZERO: any = '0'

/**
Data output for DIO17*/
export const GPIO_DOUT31_0_DIO17: any = '1'

/**
Output is set to 1*/
export const GPIO_DOUT31_0_DIO17_ONE: any = '1'

/**
Output is set to 0*/
export const GPIO_DOUT31_0_DIO17_ZERO: any = '0'

/**
Data output for DIO16*/
export const GPIO_DOUT31_0_DIO16: any = '1'

/**
Output is set to 1*/
export const GPIO_DOUT31_0_DIO16_ONE: any = '1'

/**
Output is set to 0*/
export const GPIO_DOUT31_0_DIO16_ZERO: any = '0'

/**
Data output for DIO15*/
export const GPIO_DOUT31_0_DIO15: any = '1'

/**
Output is set to 1*/
export const GPIO_DOUT31_0_DIO15_ONE: any = '1'

/**
Output is set to 0*/
export const GPIO_DOUT31_0_DIO15_ZERO: any = '0'

/**
Data output for DIO14*/
export const GPIO_DOUT31_0_DIO14: any = '1'

/**
Output is set to 1*/
export const GPIO_DOUT31_0_DIO14_ONE: any = '1'

/**
Output is set to 0*/
export const GPIO_DOUT31_0_DIO14_ZERO: any = '0'

/**
Data output for DIO13*/
export const GPIO_DOUT31_0_DIO13: any = '1'

/**
Output is set to 1*/
export const GPIO_DOUT31_0_DIO13_ONE: any = '1'

/**
Output is set to 0*/
export const GPIO_DOUT31_0_DIO13_ZERO: any = '0'

/**
Data output for DIO12*/
export const GPIO_DOUT31_0_DIO12: any = '1'

/**
Output is set to 1*/
export const GPIO_DOUT31_0_DIO12_ONE: any = '1'

/**
Output is set to 0*/
export const GPIO_DOUT31_0_DIO12_ZERO: any = '0'

/**
Data output for DIO11*/
export const GPIO_DOUT31_0_DIO11: any = '1'

/**
Output is set to 1*/
export const GPIO_DOUT31_0_DIO11_ONE: any = '1'

/**
Output is set to 0*/
export const GPIO_DOUT31_0_DIO11_ZERO: any = '0'

/**
Data output for DIO10*/
export const GPIO_DOUT31_0_DIO10: any = '1'

/**
Output is set to 1*/
export const GPIO_DOUT31_0_DIO10_ONE: any = '1'

/**
Output is set to 0*/
export const GPIO_DOUT31_0_DIO10_ZERO: any = '0'

/**
Data output for DIO9*/
export const GPIO_DOUT31_0_DIO9: any = '1'

/**
Output is set to 1*/
export const GPIO_DOUT31_0_DIO9_ONE: any = '1'

/**
Output is set to 0*/
export const GPIO_DOUT31_0_DIO9_ZERO: any = '0'

/**
Data output for DIO8*/
export const GPIO_DOUT31_0_DIO8: any = '1'

/**
Output is set to 1*/
export const GPIO_DOUT31_0_DIO8_ONE: any = '1'

/**
Output is set to 0*/
export const GPIO_DOUT31_0_DIO8_ZERO: any = '0'

/**
Data output for DIO7*/
export const GPIO_DOUT31_0_DIO7: any = '1'

/**
Output is set to 1*/
export const GPIO_DOUT31_0_DIO7_ONE: any = '1'

/**
Output is set to 0*/
export const GPIO_DOUT31_0_DIO7_ZERO: any = '0'

/**
Data output for DIO6*/
export const GPIO_DOUT31_0_DIO6: any = '1'

/**
Output is set to 1*/
export const GPIO_DOUT31_0_DIO6_ONE: any = '1'

/**
Output is set to 0*/
export const GPIO_DOUT31_0_DIO6_ZERO: any = '0'

/**
Data output for DIO5*/
export const GPIO_DOUT31_0_DIO5: any = '1'

/**
Output is set to 1*/
export const GPIO_DOUT31_0_DIO5_ONE: any = '1'

/**
Output is set to 0*/
export const GPIO_DOUT31_0_DIO5_ZERO: any = '0'

/**
Data output for DIO4*/
export const GPIO_DOUT31_0_DIO4: any = '1'

/**
Output is set to 1*/
export const GPIO_DOUT31_0_DIO4_ONE: any = '1'

/**
Output is set to 0*/
export const GPIO_DOUT31_0_DIO4_ZERO: any = '0'

/**
Data output for DIO3*/
export const GPIO_DOUT31_0_DIO3: any = '1'

/**
Output is set to 1*/
export const GPIO_DOUT31_0_DIO3_ONE: any = '1'

/**
Output is set to 0*/
export const GPIO_DOUT31_0_DIO3_ZERO: any = '0'

/**
Data output for DIO2*/
export const GPIO_DOUT31_0_DIO2: any = '1'

/**
Output is set to 1*/
export const GPIO_DOUT31_0_DIO2_ONE: any = '1'

/**
Output is set to 0*/
export const GPIO_DOUT31_0_DIO2_ZERO: any = '0'

/**
Data output for DIO1*/
export const GPIO_DOUT31_0_DIO1: any = '1'

/**
Output is set to 1*/
export const GPIO_DOUT31_0_DIO1_ONE: any = '1'

/**
Output is set to 0*/
export const GPIO_DOUT31_0_DIO1_ZERO: any = '0'

/**
Data output for DIO0*/
export const GPIO_DOUT31_0_DIO0: any = '1'

/**
Output is set to 1*/
export const GPIO_DOUT31_0_DIO0_ONE: any = '1'

/**
Output is set to 0*/
export const GPIO_DOUT31_0_DIO0_ZERO: any = '0'


// -------- REGISTER DOUTSET31_0 -------- //

/**
Alias regiser to set the corresponding bits of DOUT31_0 register.*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_DOUTSET31_0_RESERVED26: any = '6'

/**
Set bit DOUT31_0.DIO25*/
export const GPIO_DOUTSET31_0_DIO25: any = '1'

/**
Set*/
export const GPIO_DOUTSET31_0_DIO25_SET: any = '1'

/**
No effect*/
export const GPIO_DOUTSET31_0_DIO25_NOEFF: any = '0'

/**
Set bit DOUT31_0.DIO24*/
export const GPIO_DOUTSET31_0_DIO24: any = '1'

/**
Set*/
export const GPIO_DOUTSET31_0_DIO24_SET: any = '1'

/**
No effect*/
export const GPIO_DOUTSET31_0_DIO24_NOEFF: any = '0'

/**
Set bit DOUT31_0.DIO23*/
export const GPIO_DOUTSET31_0_DIO23: any = '1'

/**
Set*/
export const GPIO_DOUTSET31_0_DIO23_SET: any = '1'

/**
No effect*/
export const GPIO_DOUTSET31_0_DIO23_NOEFF: any = '0'

/**
Set bit DOUT31_0.DIO22*/
export const GPIO_DOUTSET31_0_DIO22: any = '1'

/**
Set*/
export const GPIO_DOUTSET31_0_DIO22_SET: any = '1'

/**
No effect*/
export const GPIO_DOUTSET31_0_DIO22_NOEFF: any = '0'

/**
Set bit DOUT31_0.DIO21*/
export const GPIO_DOUTSET31_0_DIO21: any = '1'

/**
Set*/
export const GPIO_DOUTSET31_0_DIO21_SET: any = '1'

/**
No effect*/
export const GPIO_DOUTSET31_0_DIO21_NOEFF: any = '0'

/**
Set bit DOUT31_0.DIO20*/
export const GPIO_DOUTSET31_0_DIO20: any = '1'

/**
Set*/
export const GPIO_DOUTSET31_0_DIO20_SET: any = '1'

/**
No effect*/
export const GPIO_DOUTSET31_0_DIO20_NOEFF: any = '0'

/**
Set bit DOUT31_0.DIO19*/
export const GPIO_DOUTSET31_0_DIO19: any = '1'

/**
Set*/
export const GPIO_DOUTSET31_0_DIO19_SET: any = '1'

/**
No effect*/
export const GPIO_DOUTSET31_0_DIO19_NOEFF: any = '0'

/**
Set bit DOUT31_0.DIO18*/
export const GPIO_DOUTSET31_0_DIO18: any = '1'

/**
Set*/
export const GPIO_DOUTSET31_0_DIO18_SET: any = '1'

/**
No effect*/
export const GPIO_DOUTSET31_0_DIO18_NOEFF: any = '0'

/**
Set bit DOUT31_0.DIO17*/
export const GPIO_DOUTSET31_0_DIO17: any = '1'

/**
Set*/
export const GPIO_DOUTSET31_0_DIO17_SET: any = '1'

/**
No effect*/
export const GPIO_DOUTSET31_0_DIO17_NOEFF: any = '0'

/**
Set bit DOUT31_0.DIO16*/
export const GPIO_DOUTSET31_0_DIO16: any = '1'

/**
Set*/
export const GPIO_DOUTSET31_0_DIO16_SET: any = '1'

/**
No effect*/
export const GPIO_DOUTSET31_0_DIO16_NOEFF: any = '0'

/**
Set bit DOUT31_0.DIO15*/
export const GPIO_DOUTSET31_0_DIO15: any = '1'

/**
Set*/
export const GPIO_DOUTSET31_0_DIO15_SET: any = '1'

/**
No effect*/
export const GPIO_DOUTSET31_0_DIO15_NOEFF: any = '0'

/**
Set bit DOUT31_0.DIO14*/
export const GPIO_DOUTSET31_0_DIO14: any = '1'

/**
Set*/
export const GPIO_DOUTSET31_0_DIO14_SET: any = '1'

/**
No effect*/
export const GPIO_DOUTSET31_0_DIO14_NOEFF: any = '0'

/**
Set bit DOUT31_0.DIO13 */
export const GPIO_DOUTSET31_0_DIO13: any = '1'

/**
Set*/
export const GPIO_DOUTSET31_0_DIO13_SET: any = '1'

/**
No effect*/
export const GPIO_DOUTSET31_0_DIO13_NOEFF: any = '0'

/**
Set bit DOUT31_0.DIO12*/
export const GPIO_DOUTSET31_0_DIO12: any = '1'

/**
Set*/
export const GPIO_DOUTSET31_0_DIO12_SET: any = '1'

/**
No effect*/
export const GPIO_DOUTSET31_0_DIO12_NOEFF: any = '0'

/**
Set bit DOUT31_0.DIO11*/
export const GPIO_DOUTSET31_0_DIO11: any = '1'

/**
Set*/
export const GPIO_DOUTSET31_0_DIO11_SET: any = '1'

/**
No effect*/
export const GPIO_DOUTSET31_0_DIO11_NOEFF: any = '0'

/**
Set bit DOUT31_0.DIO10*/
export const GPIO_DOUTSET31_0_DIO10: any = '1'

/**
Set*/
export const GPIO_DOUTSET31_0_DIO10_SET: any = '1'

/**
No effect*/
export const GPIO_DOUTSET31_0_DIO10_NOEFF: any = '0'

/**
Set bit DOUT31_0.DIO9*/
export const GPIO_DOUTSET31_0_DIO9: any = '1'

/**
Set*/
export const GPIO_DOUTSET31_0_DIO9_SET: any = '1'

/**
No effect*/
export const GPIO_DOUTSET31_0_DIO9_NOEFF: any = '0'

/**
Set bit DOUT31_0.DIO8*/
export const GPIO_DOUTSET31_0_DIO8: any = '1'

/**
Set*/
export const GPIO_DOUTSET31_0_DIO8_SET: any = '1'

/**
No effect*/
export const GPIO_DOUTSET31_0_DIO8_NOEFF: any = '0'

/**
Set bit DOUT31_0.DIO7*/
export const GPIO_DOUTSET31_0_DIO7: any = '1'

/**
Set*/
export const GPIO_DOUTSET31_0_DIO7_SET: any = '1'

/**
No effect*/
export const GPIO_DOUTSET31_0_DIO7_NOEFF: any = '0'

/**
Set bit DOUT31_0.DIO6*/
export const GPIO_DOUTSET31_0_DIO6: any = '1'

/**
Set*/
export const GPIO_DOUTSET31_0_DIO6_SET: any = '1'

/**
No effect*/
export const GPIO_DOUTSET31_0_DIO6_NOEFF: any = '0'

/**
Set bit DOUT31_0.DIO5*/
export const GPIO_DOUTSET31_0_DIO5: any = '1'

/**
Set*/
export const GPIO_DOUTSET31_0_DIO5_SET: any = '1'

/**
No effect*/
export const GPIO_DOUTSET31_0_DIO5_NOEFF: any = '0'

/**
Set bit DOUT31_0.DIO4*/
export const GPIO_DOUTSET31_0_DIO4: any = '1'

/**
Set*/
export const GPIO_DOUTSET31_0_DIO4_SET: any = '1'

/**
No effect*/
export const GPIO_DOUTSET31_0_DIO4_NOEFF: any = '0'

/**
Set bit DOUT31_0.DIO3*/
export const GPIO_DOUTSET31_0_DIO3: any = '1'

/**
Set*/
export const GPIO_DOUTSET31_0_DIO3_SET: any = '1'

/**
No effect*/
export const GPIO_DOUTSET31_0_DIO3_NOEFF: any = '0'

/**
Set bit DOUT31_0.DIO2*/
export const GPIO_DOUTSET31_0_DIO2: any = '1'

/**
Set*/
export const GPIO_DOUTSET31_0_DIO2_SET: any = '1'

/**
No effect*/
export const GPIO_DOUTSET31_0_DIO2_NOEFF: any = '0'

/**
Set bit DOUT31_0.DIO1 */
export const GPIO_DOUTSET31_0_DIO1: any = '1'

/**
Set*/
export const GPIO_DOUTSET31_0_DIO1_SET: any = '1'

/**
No effect*/
export const GPIO_DOUTSET31_0_DIO1_NOEFF: any = '0'

/**
Set bit DOUT31_0.DIO0 */
export const GPIO_DOUTSET31_0_DIO0: any = '1'

/**
Set*/
export const GPIO_DOUTSET31_0_DIO0_SET: any = '1'

/**
No effect*/
export const GPIO_DOUTSET31_0_DIO0_NOEFF: any = '0'


// -------- REGISTER DOUTCLR31_0 -------- //

/**
Alias regiser to clear the corresponding bits of DOUT31_0 register.*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_DOUTCLR31_0_RESERVED26: any = '6'

/**
Clear bit DOUT31_0.DIO25*/
export const GPIO_DOUTCLR31_0_DIO25: any = '1'

/**
Clear*/
export const GPIO_DOUTCLR31_0_DIO25_CLR: any = '1'

/**
No effect*/
export const GPIO_DOUTCLR31_0_DIO25_NOEFF: any = '0'

/**
Clear bit DOUT31_0.DIO24*/
export const GPIO_DOUTCLR31_0_DIO24: any = '1'

/**
Clear*/
export const GPIO_DOUTCLR31_0_DIO24_CLR: any = '1'

/**
No effect*/
export const GPIO_DOUTCLR31_0_DIO24_NOEFF: any = '0'

/**
Clear bit DOUT31_0.DIO23*/
export const GPIO_DOUTCLR31_0_DIO23: any = '1'

/**
Clear*/
export const GPIO_DOUTCLR31_0_DIO23_CLR: any = '1'

/**
No effect*/
export const GPIO_DOUTCLR31_0_DIO23_NOEFF: any = '0'

/**
Clear bit DOUT31_0.DIO22*/
export const GPIO_DOUTCLR31_0_DIO22: any = '1'

/**
Clear*/
export const GPIO_DOUTCLR31_0_DIO22_CLR: any = '1'

/**
No effect*/
export const GPIO_DOUTCLR31_0_DIO22_NOEFF: any = '0'

/**
Clear bit DOUT31_0.DIO21*/
export const GPIO_DOUTCLR31_0_DIO21: any = '1'

/**
Clear*/
export const GPIO_DOUTCLR31_0_DIO21_CLR: any = '1'

/**
No effect*/
export const GPIO_DOUTCLR31_0_DIO21_NOEFF: any = '0'

/**
Clear bit DOUT31_0.DIO20*/
export const GPIO_DOUTCLR31_0_DIO20: any = '1'

/**
Clear*/
export const GPIO_DOUTCLR31_0_DIO20_CLR: any = '1'

/**
No effect*/
export const GPIO_DOUTCLR31_0_DIO20_NOEFF: any = '0'

/**
Clear bit DOUT31_0.DIO19*/
export const GPIO_DOUTCLR31_0_DIO19: any = '1'

/**
Clear*/
export const GPIO_DOUTCLR31_0_DIO19_CLR: any = '1'

/**
No effect*/
export const GPIO_DOUTCLR31_0_DIO19_NOEFF: any = '0'

/**
Clear bit DOUT31_0.DIO18*/
export const GPIO_DOUTCLR31_0_DIO18: any = '1'

/**
Clear*/
export const GPIO_DOUTCLR31_0_DIO18_CLR: any = '1'

/**
No effect*/
export const GPIO_DOUTCLR31_0_DIO18_NOEFF: any = '0'

/**
Clear bit DOUT31_0.DIO17*/
export const GPIO_DOUTCLR31_0_DIO17: any = '1'

/**
Clear*/
export const GPIO_DOUTCLR31_0_DIO17_CLR: any = '1'

/**
No effect*/
export const GPIO_DOUTCLR31_0_DIO17_NOEFF: any = '0'

/**
Clear bit DOUT31_0.DIO16*/
export const GPIO_DOUTCLR31_0_DIO16: any = '1'

/**
Clear*/
export const GPIO_DOUTCLR31_0_DIO16_CLR: any = '1'

/**
No effect*/
export const GPIO_DOUTCLR31_0_DIO16_NOEFF: any = '0'

/**
Clear bit DOUT31_0.DIO15*/
export const GPIO_DOUTCLR31_0_DIO15: any = '1'

/**
Clear*/
export const GPIO_DOUTCLR31_0_DIO15_CLR: any = '1'

/**
No effect*/
export const GPIO_DOUTCLR31_0_DIO15_NOEFF: any = '0'

/**
Clear bit DOUT31_0.DIO14*/
export const GPIO_DOUTCLR31_0_DIO14: any = '1'

/**
Clear*/
export const GPIO_DOUTCLR31_0_DIO14_CLR: any = '1'

/**
No effect*/
export const GPIO_DOUTCLR31_0_DIO14_NOEFF: any = '0'

/**
Clear bit DOUT31_0.DIO13*/
export const GPIO_DOUTCLR31_0_DIO13: any = '1'

/**
Clear*/
export const GPIO_DOUTCLR31_0_DIO13_CLR: any = '1'

/**
No effect*/
export const GPIO_DOUTCLR31_0_DIO13_NOEFF: any = '0'

/**
Clear bit DOUT31_0.DIO12*/
export const GPIO_DOUTCLR31_0_DIO12: any = '1'

/**
Clear*/
export const GPIO_DOUTCLR31_0_DIO12_CLR: any = '1'

/**
No effect*/
export const GPIO_DOUTCLR31_0_DIO12_NOEFF: any = '0'

/**
Clear bit DOUT31_0.DIO11*/
export const GPIO_DOUTCLR31_0_DIO11: any = '1'

/**
Clear*/
export const GPIO_DOUTCLR31_0_DIO11_CLR: any = '1'

/**
No effect*/
export const GPIO_DOUTCLR31_0_DIO11_NOEFF: any = '0'

/**
Clear bit DOUT31_0.DIO10*/
export const GPIO_DOUTCLR31_0_DIO10: any = '1'

/**
Clear*/
export const GPIO_DOUTCLR31_0_DIO10_CLR: any = '1'

/**
No effect*/
export const GPIO_DOUTCLR31_0_DIO10_NOEFF: any = '0'

/**
Clear bit DOUT31_0.DIO9*/
export const GPIO_DOUTCLR31_0_DIO9: any = '1'

/**
Clear*/
export const GPIO_DOUTCLR31_0_DIO9_CLR: any = '1'

/**
No effect*/
export const GPIO_DOUTCLR31_0_DIO9_NOEFF: any = '0'

/**
Clear bit DOUT31_0.DIO8*/
export const GPIO_DOUTCLR31_0_DIO8: any = '1'

/**
Clear*/
export const GPIO_DOUTCLR31_0_DIO8_CLR: any = '1'

/**
No effect*/
export const GPIO_DOUTCLR31_0_DIO8_NOEFF: any = '0'

/**
Clear bit DOUT31_0.DIO7*/
export const GPIO_DOUTCLR31_0_DIO7: any = '1'

/**
Clear*/
export const GPIO_DOUTCLR31_0_DIO7_CLR: any = '1'

/**
No effect*/
export const GPIO_DOUTCLR31_0_DIO7_NOEFF: any = '0'

/**
Clear bit DOUT31_0.DIO6*/
export const GPIO_DOUTCLR31_0_DIO6: any = '1'

/**
Clear*/
export const GPIO_DOUTCLR31_0_DIO6_CLR: any = '1'

/**
No effect*/
export const GPIO_DOUTCLR31_0_DIO6_NOEFF: any = '0'

/**
Clear bit DOUT31_0.DIO5*/
export const GPIO_DOUTCLR31_0_DIO5: any = '1'

/**
Clear*/
export const GPIO_DOUTCLR31_0_DIO5_CLR: any = '1'

/**
No effect*/
export const GPIO_DOUTCLR31_0_DIO5_NOEFF: any = '0'

/**
Clear bit DOUT31_0.DIO4*/
export const GPIO_DOUTCLR31_0_DIO4: any = '1'

/**
Clear*/
export const GPIO_DOUTCLR31_0_DIO4_CLR: any = '1'

/**
No effect*/
export const GPIO_DOUTCLR31_0_DIO4_NOEFF: any = '0'

/**
Clear bit DOUT31_0.DIO3*/
export const GPIO_DOUTCLR31_0_DIO3: any = '1'

/**
Clear*/
export const GPIO_DOUTCLR31_0_DIO3_CLR: any = '1'

/**
No effect*/
export const GPIO_DOUTCLR31_0_DIO3_NOEFF: any = '0'

/**
Clear bit DOUT31_0.DIO2*/
export const GPIO_DOUTCLR31_0_DIO2: any = '1'

/**
Clear*/
export const GPIO_DOUTCLR31_0_DIO2_CLR: any = '1'

/**
No effect*/
export const GPIO_DOUTCLR31_0_DIO2_NOEFF: any = '0'

/**
Clear bit DOUT31_0.DIO1*/
export const GPIO_DOUTCLR31_0_DIO1: any = '1'

/**
Clear*/
export const GPIO_DOUTCLR31_0_DIO1_CLR: any = '1'

/**
No effect*/
export const GPIO_DOUTCLR31_0_DIO1_NOEFF: any = '0'

/**
Clear bit DOUT31_0.DIO0*/
export const GPIO_DOUTCLR31_0_DIO0: any = '1'

/**
Clear*/
export const GPIO_DOUTCLR31_0_DIO0_CLR: any = '1'

/**
No effect*/
export const GPIO_DOUTCLR31_0_DIO0_NOEFF: any = '0'


// -------- REGISTER DOUTTGL31_0 -------- //

/**
Alias regiser to toggle the corresponding bits of DOUT31_0 register.*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_DOUTTGL31_0_RESERVED26: any = '6'

/**
Toggles bit DOUT31_0.DIO25*/
export const GPIO_DOUTTGL31_0_DIO25: any = '1'

/**
Toggle*/
export const GPIO_DOUTTGL31_0_DIO25_TOGGLE: any = '1'

/**
No effect*/
export const GPIO_DOUTTGL31_0_DIO25_NOEFF: any = '0'

/**
Toggles bit DOUT31_0.DIO24*/
export const GPIO_DOUTTGL31_0_DIO24: any = '1'

/**
Toggle*/
export const GPIO_DOUTTGL31_0_DIO24_TOGGLE: any = '1'

/**
No effect*/
export const GPIO_DOUTTGL31_0_DIO24_NOEFF: any = '0'

/**
Toggles bit DOUT31_0.DIO23*/
export const GPIO_DOUTTGL31_0_DIO23: any = '1'

/**
Toggle*/
export const GPIO_DOUTTGL31_0_DIO23_TOGGLE: any = '1'

/**
No effect*/
export const GPIO_DOUTTGL31_0_DIO23_NOEFF: any = '0'

/**
Toggles bit DOUT31_0.DIO22*/
export const GPIO_DOUTTGL31_0_DIO22: any = '1'

/**
Toggle*/
export const GPIO_DOUTTGL31_0_DIO22_TOGGLE: any = '1'

/**
No effect*/
export const GPIO_DOUTTGL31_0_DIO22_NOEFF: any = '0'

/**
Toggles bit DOUT31_0.DIO21*/
export const GPIO_DOUTTGL31_0_DIO21: any = '1'

/**
Toggle*/
export const GPIO_DOUTTGL31_0_DIO21_TOGGLE: any = '1'

/**
No effect*/
export const GPIO_DOUTTGL31_0_DIO21_NOEFF: any = '0'

/**
Toggles bit DOUT31_0.DIO20*/
export const GPIO_DOUTTGL31_0_DIO20: any = '1'

/**
Toggle*/
export const GPIO_DOUTTGL31_0_DIO20_TOGGLE: any = '1'

/**
No effect*/
export const GPIO_DOUTTGL31_0_DIO20_NOEFF: any = '0'

/**
Toggles bit DOUT31_0.DIO19*/
export const GPIO_DOUTTGL31_0_DIO19: any = '1'

/**
Toggle*/
export const GPIO_DOUTTGL31_0_DIO19_TOGGLE: any = '1'

/**
No effect*/
export const GPIO_DOUTTGL31_0_DIO19_NOEFF: any = '0'

/**
Toggles bit DOUT31_0.DIO18*/
export const GPIO_DOUTTGL31_0_DIO18: any = '1'

/**
Toggle*/
export const GPIO_DOUTTGL31_0_DIO18_TOGGLE: any = '1'

/**
No effect*/
export const GPIO_DOUTTGL31_0_DIO18_NOEFF: any = '0'

/**
Toggles bit DOUT31_0.DIO17*/
export const GPIO_DOUTTGL31_0_DIO17: any = '1'

/**
Toggle*/
export const GPIO_DOUTTGL31_0_DIO17_TOGGLE: any = '1'

/**
No effect*/
export const GPIO_DOUTTGL31_0_DIO17_NOEFF: any = '0'

/**
Toggles bit DOUT31_0.DIO16*/
export const GPIO_DOUTTGL31_0_DIO16: any = '1'

/**
Toggle*/
export const GPIO_DOUTTGL31_0_DIO16_TOGGLE: any = '1'

/**
No effect*/
export const GPIO_DOUTTGL31_0_DIO16_NOEFF: any = '0'

/**
Toggles bit DOUT31_0.DIO15*/
export const GPIO_DOUTTGL31_0_DIO15: any = '1'

/**
Toggle*/
export const GPIO_DOUTTGL31_0_DIO15_TOGGLE: any = '1'

/**
No effect*/
export const GPIO_DOUTTGL31_0_DIO15_NOEFF: any = '0'

/**
Toggles bit DOUT31_0.DIO14*/
export const GPIO_DOUTTGL31_0_DIO14: any = '1'

/**
Toggle*/
export const GPIO_DOUTTGL31_0_DIO14_TOGGLE: any = '1'

/**
No effect*/
export const GPIO_DOUTTGL31_0_DIO14_NOEFF: any = '0'

/**
Toggles bit DOUT31_0.DIO13*/
export const GPIO_DOUTTGL31_0_DIO13: any = '1'

/**
Toggle*/
export const GPIO_DOUTTGL31_0_DIO13_TOGGLE: any = '1'

/**
No effect*/
export const GPIO_DOUTTGL31_0_DIO13_NOEFF: any = '0'

/**
Toggles bit DOUT31_0.DIO12*/
export const GPIO_DOUTTGL31_0_DIO12: any = '1'

/**
Toggle*/
export const GPIO_DOUTTGL31_0_DIO12_TOGGLE: any = '1'

/**
No effect*/
export const GPIO_DOUTTGL31_0_DIO12_NOEFF: any = '0'

/**
Toggles bit DOUT31_0.DIO11*/
export const GPIO_DOUTTGL31_0_DIO11: any = '1'

/**
Toggle*/
export const GPIO_DOUTTGL31_0_DIO11_TOGGLE: any = '1'

/**
No effect*/
export const GPIO_DOUTTGL31_0_DIO11_NOEFF: any = '0'

/**
Toggles bit DOUT31_0.DIO10*/
export const GPIO_DOUTTGL31_0_DIO10: any = '1'

/**
Toggle*/
export const GPIO_DOUTTGL31_0_DIO10_TOGGLE: any = '1'

/**
No effect*/
export const GPIO_DOUTTGL31_0_DIO10_NOEFF: any = '0'

/**
Toggles bit DOUT31_0.DIO9*/
export const GPIO_DOUTTGL31_0_DIO9: any = '1'

/**
Toggle*/
export const GPIO_DOUTTGL31_0_DIO9_TOGGLE: any = '1'

/**
No effect*/
export const GPIO_DOUTTGL31_0_DIO9_NOEFF: any = '0'

/**
Toggles bit DOUT31_0.DIO8*/
export const GPIO_DOUTTGL31_0_DIO8: any = '1'

/**
Toggle*/
export const GPIO_DOUTTGL31_0_DIO8_TOGGLE: any = '1'

/**
No effect*/
export const GPIO_DOUTTGL31_0_DIO8_NOEFF: any = '0'

/**
Toggles bit DOUT31_0.DIO7*/
export const GPIO_DOUTTGL31_0_DIO7: any = '1'

/**
Toggle*/
export const GPIO_DOUTTGL31_0_DIO7_TOGGLE: any = '1'

/**
No effect*/
export const GPIO_DOUTTGL31_0_DIO7_NOEFF: any = '0'

/**
Toggles bit DOUT31_0.DIO6*/
export const GPIO_DOUTTGL31_0_DIO6: any = '1'

/**
Toggle*/
export const GPIO_DOUTTGL31_0_DIO6_TOGGLE: any = '1'

/**
No effect*/
export const GPIO_DOUTTGL31_0_DIO6_NOEFF: any = '0'

/**
Toggles bit DOUT31_0.DIO5*/
export const GPIO_DOUTTGL31_0_DIO5: any = '1'

/**
Toggle*/
export const GPIO_DOUTTGL31_0_DIO5_TOGGLE: any = '1'

/**
No effect*/
export const GPIO_DOUTTGL31_0_DIO5_NOEFF: any = '0'

/**
Toggles bit DOUT31_0.DIO4*/
export const GPIO_DOUTTGL31_0_DIO4: any = '1'

/**
Toggle*/
export const GPIO_DOUTTGL31_0_DIO4_TOGGLE: any = '1'

/**
No effect*/
export const GPIO_DOUTTGL31_0_DIO4_NOEFF: any = '0'

/**
Toggles bit DOUT31_0.DIO3*/
export const GPIO_DOUTTGL31_0_DIO3: any = '1'

/**
Toggle*/
export const GPIO_DOUTTGL31_0_DIO3_TOGGLE: any = '1'

/**
No effect*/
export const GPIO_DOUTTGL31_0_DIO3_NOEFF: any = '0'

/**
Toggles bit DOUT31_0.DIO2*/
export const GPIO_DOUTTGL31_0_DIO2: any = '1'

/**
Toggle*/
export const GPIO_DOUTTGL31_0_DIO2_TOGGLE: any = '1'

/**
No effect*/
export const GPIO_DOUTTGL31_0_DIO2_NOEFF: any = '0'

/**
Toggles bit DOUT31_0.DIO1*/
export const GPIO_DOUTTGL31_0_DIO1: any = '1'

/**
Toggle*/
export const GPIO_DOUTTGL31_0_DIO1_TOGGLE: any = '1'

/**
No effect*/
export const GPIO_DOUTTGL31_0_DIO1_NOEFF: any = '0'

/**
Toggles bit DOUT31_0.DIO0*/
export const GPIO_DOUTTGL31_0_DIO0: any = '1'

/**
Toggle*/
export const GPIO_DOUTTGL31_0_DIO0_TOGGLE: any = '1'

/**
No effect*/
export const GPIO_DOUTTGL31_0_DIO0_NOEFF: any = '0'


// -------- REGISTER DOUTTGL3_0 -------- //

/**
Alias regiser to toggle the corresponding bits of DOUT31_0[3:0] register.*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_DOUTTGL3_0_RESERVED25: any = '7'

/**
Toggles bit DOUT31_0.DIO3*/
export const GPIO_DOUTTGL3_0_DIO3: any = '1'

/**
Toggle*/
export const GPIO_DOUTTGL3_0_DIO3_TOGGLE: any = '1'

/**
No effect*/
export const GPIO_DOUTTGL3_0_DIO3_NOEFF: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_DOUTTGL3_0_RESERVED17: any = '7'

/**
Toggles bit DOUT31_0.DIO2*/
export const GPIO_DOUTTGL3_0_DIO2: any = '1'

/**
Toggle*/
export const GPIO_DOUTTGL3_0_DIO2_TOGGLE: any = '1'

/**
No effect*/
export const GPIO_DOUTTGL3_0_DIO2_NOEFF: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_DOUTTGL3_0_RESERVED9: any = '7'

/**
Toggles bit DOUT31_0.DIO1*/
export const GPIO_DOUTTGL3_0_DIO1: any = '1'

/**
Toggle*/
export const GPIO_DOUTTGL3_0_DIO1_TOGGLE: any = '1'

/**
No effect*/
export const GPIO_DOUTTGL3_0_DIO1_NOEFF: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_DOUTTGL3_0_RESERVED1: any = '7'

/**
Toggles bit DOUT31_0.DIO0*/
export const GPIO_DOUTTGL3_0_DIO0: any = '1'

/**
Toggle*/
export const GPIO_DOUTTGL3_0_DIO0_TOGGLE: any = '1'

/**
No effect*/
export const GPIO_DOUTTGL3_0_DIO0_NOEFF: any = '0'


// -------- REGISTER DOUTTGL7_4 -------- //

/**
Alias regiser to toggle the corresponding bits of DOUT31_0[7:4] register.*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_DOUTTGL7_4_RESERVED25: any = '7'

/**
Toggles bit DOUT31_0.DIO7*/
export const GPIO_DOUTTGL7_4_DIO7: any = '1'

/**
Toggle*/
export const GPIO_DOUTTGL7_4_DIO7_TOGGLE: any = '1'

/**
No effect*/
export const GPIO_DOUTTGL7_4_DIO7_NOEFF: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_DOUTTGL7_4_RESERVED17: any = '7'

/**
Toggles bit DOUT31_0.DIO6*/
export const GPIO_DOUTTGL7_4_DIO6: any = '1'

/**
Toggle*/
export const GPIO_DOUTTGL7_4_DIO6_TOGGLE: any = '1'

/**
No effect*/
export const GPIO_DOUTTGL7_4_DIO6_NOEFF: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_DOUTTGL7_4_RESERVED9: any = '7'

/**
Toggles bit DOUT31_0.DIO5*/
export const GPIO_DOUTTGL7_4_DIO5: any = '1'

/**
Toggle*/
export const GPIO_DOUTTGL7_4_DIO5_TOGGLE: any = '1'

/**
No effect*/
export const GPIO_DOUTTGL7_4_DIO5_NOEFF: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_DOUTTGL7_4_RESERVED1: any = '7'

/**
Toggles bit DOUT31_0.DIO4*/
export const GPIO_DOUTTGL7_4_DIO4: any = '1'

/**
Toggle*/
export const GPIO_DOUTTGL7_4_DIO4_TOGGLE: any = '1'

/**
No effect*/
export const GPIO_DOUTTGL7_4_DIO4_NOEFF: any = '0'


// -------- REGISTER DOUTTGL11_8 -------- //

/**
Alias regiser to toggle the corresponding bits of DOUT31_0[11:8] register.*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_DOUTTGL11_8_RESERVED25: any = '7'

/**
Toggles bit DOUT31_0.DIO11*/
export const GPIO_DOUTTGL11_8_DIO11: any = '1'

/**
Toggle*/
export const GPIO_DOUTTGL11_8_DIO11_TOGGLE: any = '1'

/**
No effect*/
export const GPIO_DOUTTGL11_8_DIO11_NOEFF: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_DOUTTGL11_8_RESERVED17: any = '7'

/**
Toggles bit DOUT31_0.DIO10*/
export const GPIO_DOUTTGL11_8_DIO10: any = '1'

/**
Toggle*/
export const GPIO_DOUTTGL11_8_DIO10_TOGGLE: any = '1'

/**
No effect*/
export const GPIO_DOUTTGL11_8_DIO10_NOEFF: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_DOUTTGL11_8_RESERVED9: any = '7'

/**
Toggles bit DOUT31_0.DIO9*/
export const GPIO_DOUTTGL11_8_DIO9: any = '1'

/**
Toggle*/
export const GPIO_DOUTTGL11_8_DIO9_TOGGLE: any = '1'

/**
No effect*/
export const GPIO_DOUTTGL11_8_DIO9_NOEFF: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_DOUTTGL11_8_RESERVED1: any = '7'

/**
Toggles bit DOUT31_0.DIO8*/
export const GPIO_DOUTTGL11_8_DIO8: any = '1'

/**
Toggle*/
export const GPIO_DOUTTGL11_8_DIO8_TOGGLE: any = '1'

/**
No effect*/
export const GPIO_DOUTTGL11_8_DIO8_NOEFF: any = '0'


// -------- REGISTER DOUTTGL15_12 -------- //

/**
Alias regiser to toggle the corresponding bits of DOUT31_0[15:12] register.*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_DOUTTGL15_12_RESERVED25: any = '7'

/**
Toggles bit DOUT31_0.DIO15*/
export const GPIO_DOUTTGL15_12_DIO15: any = '1'

/**
Toggle*/
export const GPIO_DOUTTGL15_12_DIO15_TOGGLE: any = '1'

/**
No effect*/
export const GPIO_DOUTTGL15_12_DIO15_NOEFF: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_DOUTTGL15_12_RESERVED17: any = '7'

/**
Toggles bit DOUT31_0.DIO14*/
export const GPIO_DOUTTGL15_12_DIO14: any = '1'

/**
Toggle*/
export const GPIO_DOUTTGL15_12_DIO14_TOGGLE: any = '1'

/**
No effect*/
export const GPIO_DOUTTGL15_12_DIO14_NOEFF: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_DOUTTGL15_12_RESERVED9: any = '7'

/**
Toggles bit DOUT31_0.DIO13*/
export const GPIO_DOUTTGL15_12_DIO13: any = '1'

/**
Toggle*/
export const GPIO_DOUTTGL15_12_DIO13_TOGGLE: any = '1'

/**
No effect*/
export const GPIO_DOUTTGL15_12_DIO13_NOEFF: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_DOUTTGL15_12_RESERVED1: any = '7'

/**
Toggles bit DOUT31_0.DIO12*/
export const GPIO_DOUTTGL15_12_DIO12: any = '1'

/**
Toggle*/
export const GPIO_DOUTTGL15_12_DIO12_TOGGLE: any = '1'

/**
No effect*/
export const GPIO_DOUTTGL15_12_DIO12_NOEFF: any = '0'


// -------- REGISTER DOUTTGL19_16 -------- //

/**
Alias regiser to toggle the corresponding bits of DOUT31_0[19:16] register.*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_DOUTTGL19_16_RESERVED25: any = '7'

/**
Toggles bit DOUT31_0.DIO19*/
export const GPIO_DOUTTGL19_16_DIO19: any = '1'

/**
Toggle*/
export const GPIO_DOUTTGL19_16_DIO19_TOGGLE: any = '1'

/**
No effect*/
export const GPIO_DOUTTGL19_16_DIO19_NOEFF: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_DOUTTGL19_16_RESERVED17: any = '7'

/**
Toggles bit DOUT31_0.DIO18*/
export const GPIO_DOUTTGL19_16_DIO18: any = '1'

/**
Toggle*/
export const GPIO_DOUTTGL19_16_DIO18_TOGGLE: any = '1'

/**
No effect*/
export const GPIO_DOUTTGL19_16_DIO18_NOEFF: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_DOUTTGL19_16_RESERVED9: any = '7'

/**
Toggles bit DOUT31_0.DIO17*/
export const GPIO_DOUTTGL19_16_DIO17: any = '1'

/**
Toggle*/
export const GPIO_DOUTTGL19_16_DIO17_TOGGLE: any = '1'

/**
No effect*/
export const GPIO_DOUTTGL19_16_DIO17_NOEFF: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_DOUTTGL19_16_RESERVED1: any = '7'

/**
Toggles bit DOUT31_0.DIO16*/
export const GPIO_DOUTTGL19_16_DIO16: any = '1'

/**
Toggle*/
export const GPIO_DOUTTGL19_16_DIO16_TOGGLE: any = '1'

/**
No effect*/
export const GPIO_DOUTTGL19_16_DIO16_NOEFF: any = '0'


// -------- REGISTER DOUTTGL23_20 -------- //

/**
Alias regiser to toggle the corresponding bits of DOUT31_0[23:20] register.*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_DOUTTGL23_20_RESERVED25: any = '7'

/**
Toggles bit DOUT31_0.DIO23*/
export const GPIO_DOUTTGL23_20_DIO23: any = '1'

/**
Toggle*/
export const GPIO_DOUTTGL23_20_DIO23_TOGGLE: any = '1'

/**
No effect*/
export const GPIO_DOUTTGL23_20_DIO23_NOEFF: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_DOUTTGL23_20_RESERVED17: any = '7'

/**
Toggles bit DOUT31_0.DIO22*/
export const GPIO_DOUTTGL23_20_DIO22: any = '1'

/**
Toggle*/
export const GPIO_DOUTTGL23_20_DIO22_TOGGLE: any = '1'

/**
No effect*/
export const GPIO_DOUTTGL23_20_DIO22_NOEFF: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_DOUTTGL23_20_RESERVED9: any = '7'

/**
Toggles bit DOUT31_0.DIO21*/
export const GPIO_DOUTTGL23_20_DIO21: any = '1'

/**
Toggle*/
export const GPIO_DOUTTGL23_20_DIO21_TOGGLE: any = '1'

/**
No effect*/
export const GPIO_DOUTTGL23_20_DIO21_NOEFF: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_DOUTTGL23_20_RESERVED1: any = '7'

/**
Toggles bit DOUT31_0.DIO20*/
export const GPIO_DOUTTGL23_20_DIO20: any = '1'

/**
Toggle*/
export const GPIO_DOUTTGL23_20_DIO20_TOGGLE: any = '1'

/**
No effect*/
export const GPIO_DOUTTGL23_20_DIO20_NOEFF: any = '0'


// -------- REGISTER DOUTTGL27_24 -------- //

/**
Alias regiser to toggle the corresponding bits of DOUT31_0[27:24] register.*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_DOUTTGL27_24_RESERVED9: any = '23'

/**
Toggles bit DOUT31_0.DIO25*/
export const GPIO_DOUTTGL27_24_DIO25: any = '1'

/**
Toggle*/
export const GPIO_DOUTTGL27_24_DIO25_TOGGLE: any = '1'

/**
No effect*/
export const GPIO_DOUTTGL27_24_DIO25_NOEFF: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_DOUTTGL27_24_RESERVED1: any = '7'

/**
Toggles bit DOUT31_0.DIO24*/
export const GPIO_DOUTTGL27_24_DIO24: any = '1'

/**
Toggle*/
export const GPIO_DOUTTGL27_24_DIO24_TOGGLE: any = '1'

/**
No effect*/
export const GPIO_DOUTTGL27_24_DIO24_NOEFF: any = '0'


// -------- REGISTER DOE3_0 -------- //

/**
Alias register for byte access to DOE31_0[3:0] bits.*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_DOE3_0_RESERVED25: any = '7'

/**
Data output enable for DIO3*/
export const GPIO_DOE3_0_DIO3: any = '1'

/**
Output enabled*/
export const GPIO_DOE3_0_DIO3_EN: any = '1'

/**
Output disabled*/
export const GPIO_DOE3_0_DIO3_DIS: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_DOE3_0_RESERVED17: any = '7'

/**
Data output enable for DIO2*/
export const GPIO_DOE3_0_DIO2: any = '1'

/**
Output enabled*/
export const GPIO_DOE3_0_DIO2_EN: any = '1'

/**
Output disabled*/
export const GPIO_DOE3_0_DIO2_DIS: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_DOE3_0_RESERVED9: any = '7'

/**
Data output enable for DIO1*/
export const GPIO_DOE3_0_DIO1: any = '1'

/**
Output enabled*/
export const GPIO_DOE3_0_DIO1_EN: any = '1'

/**
Output disabled*/
export const GPIO_DOE3_0_DIO1_DIS: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_DOE3_0_RESERVED1: any = '7'

/**
Data output enable for DIO0*/
export const GPIO_DOE3_0_DIO0: any = '1'

/**
Output enabled*/
export const GPIO_DOE3_0_DIO0_EN: any = '1'

/**
Output disabled*/
export const GPIO_DOE3_0_DIO0_DIS: any = '0'


// -------- REGISTER DOE7_4 -------- //

/**
Alias register for byte access to DOUT31_0[7:4] bits.*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_DOE7_4_RESERVED25: any = '7'

/**
Data output enable for DIO7*/
export const GPIO_DOE7_4_DIO7: any = '1'

/**
Output enabled*/
export const GPIO_DOE7_4_DIO7_EN: any = '1'

/**
Output disabled*/
export const GPIO_DOE7_4_DIO7_DIS: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_DOE7_4_RESERVED17: any = '7'

/**
Data output enable for DIO6*/
export const GPIO_DOE7_4_DIO6: any = '1'

/**
Output enabled*/
export const GPIO_DOE7_4_DIO6_EN: any = '1'

/**
Output disabled*/
export const GPIO_DOE7_4_DIO6_DIS: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_DOE7_4_RESERVED9: any = '7'

/**
Data output enable for DIO5*/
export const GPIO_DOE7_4_DIO5: any = '1'

/**
Output enabled*/
export const GPIO_DOE7_4_DIO5_EN: any = '1'

/**
Output disabled*/
export const GPIO_DOE7_4_DIO5_DIS: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_DOE7_4_RESERVED1: any = '7'

/**
Data output enable for DIO4*/
export const GPIO_DOE7_4_DIO4: any = '1'

/**
Output enabled*/
export const GPIO_DOE7_4_DIO4_EN: any = '1'

/**
Output disabled*/
export const GPIO_DOE7_4_DIO4_DIS: any = '0'


// -------- REGISTER DOE11_8 -------- //

/**
Alias register for byte access to DOUT31_0[11:8] bits.*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_DOE11_8_RESERVED25: any = '7'

/**
Data output enable for DIO11*/
export const GPIO_DOE11_8_DIO11: any = '1'

/**
Output enabled*/
export const GPIO_DOE11_8_DIO11_EN: any = '1'

/**
Output disabled*/
export const GPIO_DOE11_8_DIO11_DIS: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_DOE11_8_RESERVED17: any = '7'

/**
Data output enable for DIO10*/
export const GPIO_DOE11_8_DIO10: any = '1'

/**
Output enabled*/
export const GPIO_DOE11_8_DIO10_EN: any = '1'

/**
Output disabled*/
export const GPIO_DOE11_8_DIO10_DIS: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_DOE11_8_RESERVED9: any = '7'

/**
Data output enable for DIO9*/
export const GPIO_DOE11_8_DIO9: any = '1'

/**
Output enabled*/
export const GPIO_DOE11_8_DIO9_EN: any = '1'

/**
Output disabled*/
export const GPIO_DOE11_8_DIO9_DIS: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_DOE11_8_RESERVED1: any = '7'

/**
Data output enable for DIO8*/
export const GPIO_DOE11_8_DIO8: any = '1'

/**
Output enabled*/
export const GPIO_DOE11_8_DIO8_EN: any = '1'

/**
Output disabled*/
export const GPIO_DOE11_8_DIO8_DIS: any = '0'


// -------- REGISTER DOE15_12 -------- //

/**
Alias register for byte access to DOUT31_0[15:12] bits.*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_DOE15_12_RESERVED25: any = '7'

/**
Data output enable for DIO15*/
export const GPIO_DOE15_12_DIO15: any = '1'

/**
Output enabled*/
export const GPIO_DOE15_12_DIO15_EN: any = '1'

/**
Output disabled*/
export const GPIO_DOE15_12_DIO15_DIS: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_DOE15_12_RESERVED17: any = '7'

/**
Data output enable for DIO14*/
export const GPIO_DOE15_12_DIO14: any = '1'

/**
Output enabled*/
export const GPIO_DOE15_12_DIO14_EN: any = '1'

/**
Output disabled*/
export const GPIO_DOE15_12_DIO14_DIS: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_DOE15_12_RESERVED9: any = '7'

/**
Data output enable for DIO13*/
export const GPIO_DOE15_12_DIO13: any = '1'

/**
Output enabled*/
export const GPIO_DOE15_12_DIO13_EN: any = '1'

/**
Output disabled*/
export const GPIO_DOE15_12_DIO13_DIS: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_DOE15_12_RESERVED1: any = '7'

/**
Data output enable for DIO12*/
export const GPIO_DOE15_12_DIO12: any = '1'

/**
Output enabled*/
export const GPIO_DOE15_12_DIO12_EN: any = '1'

/**
Output disabled*/
export const GPIO_DOE15_12_DIO12_DIS: any = '0'


// -------- REGISTER DOE19_16 -------- //

/**
Alias register for byte access to DOUT31_0[19:16] bits.*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_DOE19_16_RESERVED25: any = '7'

/**
Data output enable for DIO19*/
export const GPIO_DOE19_16_DIO19: any = '1'

/**
Output enabled*/
export const GPIO_DOE19_16_DIO19_EN: any = '1'

/**
Output disabled*/
export const GPIO_DOE19_16_DIO19_DIS: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_DOE19_16_RESERVED17: any = '7'

/**
Data output enable for DIO18*/
export const GPIO_DOE19_16_DIO18: any = '1'

/**
Output enabled*/
export const GPIO_DOE19_16_DIO18_EN: any = '1'

/**
Output disabled*/
export const GPIO_DOE19_16_DIO18_DIS: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_DOE19_16_RESERVED9: any = '7'

/**
Data output enable for DIO17*/
export const GPIO_DOE19_16_DIO17: any = '1'

/**
Output enabled*/
export const GPIO_DOE19_16_DIO17_EN: any = '1'

/**
Output disabled*/
export const GPIO_DOE19_16_DIO17_DIS: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_DOE19_16_RESERVED1: any = '7'

/**
Data output enable for DIO16*/
export const GPIO_DOE19_16_DIO16: any = '1'

/**
Output enabled*/
export const GPIO_DOE19_16_DIO16_EN: any = '1'

/**
Output disabled*/
export const GPIO_DOE19_16_DIO16_DIS: any = '0'


// -------- REGISTER DOE23_20 -------- //

/**
Alias register for byte access to DOUT31_0[23:20] bits.*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_DOE23_20_RESERVED25: any = '7'

/**
Data output enable for DIO23*/
export const GPIO_DOE23_20_DIO23: any = '1'

/**
Output enabled*/
export const GPIO_DOE23_20_DIO23_EN: any = '1'

/**
Output disabled*/
export const GPIO_DOE23_20_DIO23_DIS: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_DOE23_20_RESERVED17: any = '7'

/**
Data output enable for DIO22*/
export const GPIO_DOE23_20_DIO22: any = '1'

/**
Output enabled*/
export const GPIO_DOE23_20_DIO22_EN: any = '1'

/**
Output disabled*/
export const GPIO_DOE23_20_DIO22_DIS: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_DOE23_20_RESERVED9: any = '7'

/**
Data output enable for DIO21*/
export const GPIO_DOE23_20_DIO21: any = '1'

/**
Output enabled*/
export const GPIO_DOE23_20_DIO21_EN: any = '1'

/**
Output disabled*/
export const GPIO_DOE23_20_DIO21_DIS: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_DOE23_20_RESERVED1: any = '7'

/**
Data output enable for DIO20*/
export const GPIO_DOE23_20_DIO20: any = '1'

/**
Output enabled*/
export const GPIO_DOE23_20_DIO20_EN: any = '1'

/**
Output disabled*/
export const GPIO_DOE23_20_DIO20_DIS: any = '0'


// -------- REGISTER DOE27_24 -------- //

/**
Alias register for byte access to DOUT31_0[27:24] bits.*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_DOE27_24_RESERVED9: any = '23'

/**
Data output enable for DIO25*/
export const GPIO_DOE27_24_DIO25: any = '1'

/**
Output enabled*/
export const GPIO_DOE27_24_DIO25_EN: any = '1'

/**
Output disabled*/
export const GPIO_DOE27_24_DIO25_DIS: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_DOE27_24_RESERVED1: any = '7'

/**
Data output enable for DIO24*/
export const GPIO_DOE27_24_DIO24: any = '1'

/**
Output enabled*/
export const GPIO_DOE27_24_DIO24_EN: any = '1'

/**
Output disabled*/
export const GPIO_DOE27_24_DIO24_DIS: any = '0'


// -------- REGISTER DOE31_0 -------- //

/**
Data output control for DIO 31 to 0 pins.*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_DOE31_0_RESERVED26: any = '6'

/**
Data output enable for DIO25*/
export const GPIO_DOE31_0_DIO25: any = '1'

/**
Output enabled*/
export const GPIO_DOE31_0_DIO25_EN: any = '1'

/**
Output disabled*/
export const GPIO_DOE31_0_DIO25_DIS: any = '0'

/**
Data output enable for DIO24*/
export const GPIO_DOE31_0_DIO24: any = '1'

/**
Output enabled*/
export const GPIO_DOE31_0_DIO24_EN: any = '1'

/**
Output disabled*/
export const GPIO_DOE31_0_DIO24_DIS: any = '0'

/**
Data output enable for DIO23*/
export const GPIO_DOE31_0_DIO23: any = '1'

/**
Output enabled*/
export const GPIO_DOE31_0_DIO23_EN: any = '1'

/**
Output disabled*/
export const GPIO_DOE31_0_DIO23_DIS: any = '0'

/**
Data output enable for DIO22*/
export const GPIO_DOE31_0_DIO22: any = '1'

/**
Output enabled*/
export const GPIO_DOE31_0_DIO22_EN: any = '1'

/**
Output disabled*/
export const GPIO_DOE31_0_DIO22_DIS: any = '0'

/**
Data output enable for DIO21*/
export const GPIO_DOE31_0_DIO21: any = '1'

/**
Output enabled*/
export const GPIO_DOE31_0_DIO21_EN: any = '1'

/**
Output disabled*/
export const GPIO_DOE31_0_DIO21_DIS: any = '0'

/**
Data output enable for DIO20*/
export const GPIO_DOE31_0_DIO20: any = '1'

/**
Output enabled*/
export const GPIO_DOE31_0_DIO20_EN: any = '1'

/**
Output disabled*/
export const GPIO_DOE31_0_DIO20_DIS: any = '0'

/**
Data output enable for DIO19*/
export const GPIO_DOE31_0_DIO19: any = '1'

/**
Output enabled*/
export const GPIO_DOE31_0_DIO19_EN: any = '1'

/**
Output disabled*/
export const GPIO_DOE31_0_DIO19_DIS: any = '0'

/**
Data output enable for DIO18*/
export const GPIO_DOE31_0_DIO18: any = '1'

/**
Output enabled*/
export const GPIO_DOE31_0_DIO18_EN: any = '1'

/**
Output disabled*/
export const GPIO_DOE31_0_DIO18_DIS: any = '0'

/**
Data output enable for DIO17*/
export const GPIO_DOE31_0_DIO17: any = '1'

/**
Output enabled*/
export const GPIO_DOE31_0_DIO17_EN: any = '1'

/**
Output disabled*/
export const GPIO_DOE31_0_DIO17_DIS: any = '0'

/**
Data output enable for DIO16*/
export const GPIO_DOE31_0_DIO16: any = '1'

/**
Output enabled*/
export const GPIO_DOE31_0_DIO16_EN: any = '1'

/**
Output disabled*/
export const GPIO_DOE31_0_DIO16_DIS: any = '0'

/**
Data output enable for DIO15*/
export const GPIO_DOE31_0_DIO15: any = '1'

/**
Output enabled*/
export const GPIO_DOE31_0_DIO15_EN: any = '1'

/**
Output disabled*/
export const GPIO_DOE31_0_DIO15_DIS: any = '0'

/**
Data output enable for DIO14*/
export const GPIO_DOE31_0_DIO14: any = '1'

/**
Output enabled*/
export const GPIO_DOE31_0_DIO14_EN: any = '1'

/**
Output disabled*/
export const GPIO_DOE31_0_DIO14_DIS: any = '0'

/**
Data output enable for DIO13*/
export const GPIO_DOE31_0_DIO13: any = '1'

/**
Output enabled*/
export const GPIO_DOE31_0_DIO13_EN: any = '1'

/**
Output disabled*/
export const GPIO_DOE31_0_DIO13_DIS: any = '0'

/**
Data output enable for DIO12*/
export const GPIO_DOE31_0_DIO12: any = '1'

/**
Output enabled*/
export const GPIO_DOE31_0_DIO12_EN: any = '1'

/**
Output disabled*/
export const GPIO_DOE31_0_DIO12_DIS: any = '0'

/**
Data output enable for DIO11*/
export const GPIO_DOE31_0_DIO11: any = '1'

/**
Output enabled*/
export const GPIO_DOE31_0_DIO11_EN: any = '1'

/**
Output disabled*/
export const GPIO_DOE31_0_DIO11_DIS: any = '0'

/**
Data output enable for DIO10*/
export const GPIO_DOE31_0_DIO10: any = '1'

/**
Output enabled*/
export const GPIO_DOE31_0_DIO10_EN: any = '1'

/**
Output disabled*/
export const GPIO_DOE31_0_DIO10_DIS: any = '0'

/**
Data output enable for DIO9*/
export const GPIO_DOE31_0_DIO9: any = '1'

/**
Output enabled*/
export const GPIO_DOE31_0_DIO9_EN: any = '1'

/**
Output disabled*/
export const GPIO_DOE31_0_DIO9_DIS: any = '0'

/**
Data output enable for DIO8*/
export const GPIO_DOE31_0_DIO8: any = '1'

/**
Output enabled*/
export const GPIO_DOE31_0_DIO8_EN: any = '1'

/**
Output disabled*/
export const GPIO_DOE31_0_DIO8_DIS: any = '0'

/**
Data output enable for DIO7*/
export const GPIO_DOE31_0_DIO7: any = '1'

/**
Output enabled*/
export const GPIO_DOE31_0_DIO7_EN: any = '1'

/**
Output disabled*/
export const GPIO_DOE31_0_DIO7_DIS: any = '0'

/**
Data output enable for DIO6*/
export const GPIO_DOE31_0_DIO6: any = '1'

/**
Output enabled*/
export const GPIO_DOE31_0_DIO6_EN: any = '1'

/**
Output disabled*/
export const GPIO_DOE31_0_DIO6_DIS: any = '0'

/**
Data output enable for DIO5*/
export const GPIO_DOE31_0_DIO5: any = '1'

/**
Output enabled*/
export const GPIO_DOE31_0_DIO5_EN: any = '1'

/**
Output disabled*/
export const GPIO_DOE31_0_DIO5_DIS: any = '0'

/**
Data output enable for DIO4*/
export const GPIO_DOE31_0_DIO4: any = '1'

/**
Output enabled*/
export const GPIO_DOE31_0_DIO4_EN: any = '1'

/**
Output disabled*/
export const GPIO_DOE31_0_DIO4_DIS: any = '0'

/**
Data output enable for DIO3*/
export const GPIO_DOE31_0_DIO3: any = '1'

/**
Output enabled*/
export const GPIO_DOE31_0_DIO3_EN: any = '1'

/**
Output disabled*/
export const GPIO_DOE31_0_DIO3_DIS: any = '0'

/**
Data output enable for DIO2*/
export const GPIO_DOE31_0_DIO2: any = '1'

/**
Output enabled*/
export const GPIO_DOE31_0_DIO2_EN: any = '1'

/**
Output disabled*/
export const GPIO_DOE31_0_DIO2_DIS: any = '0'

/**
Data output enable for DIO1*/
export const GPIO_DOE31_0_DIO1: any = '1'

/**
Output enabled*/
export const GPIO_DOE31_0_DIO1_EN: any = '1'

/**
Output disabled*/
export const GPIO_DOE31_0_DIO1_DIS: any = '0'

/**
Data output enable for DIO0*/
export const GPIO_DOE31_0_DIO0: any = '1'

/**
Output enabled*/
export const GPIO_DOE31_0_DIO0_EN: any = '1'

/**
Output disabled*/
export const GPIO_DOE31_0_DIO0_DIS: any = '0'


// -------- REGISTER DOESET31_0 -------- //

/**
Alias regiser to set the corresponding bits of DOE31_0 register.*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_DOESET31_0_RESERVED26: any = '6'

/**
Sets bit DOE31_0.DIO25*/
export const GPIO_DOESET31_0_DIO25: any = '1'

/**
Set*/
export const GPIO_DOESET31_0_DIO25_SET: any = '1'

/**
No effect*/
export const GPIO_DOESET31_0_DIO25_NOEFF: any = '0'

/**
Sets bit DOE31_0.DIO24*/
export const GPIO_DOESET31_0_DIO24: any = '1'

/**
Set*/
export const GPIO_DOESET31_0_DIO24_SET: any = '1'

/**
No effect*/
export const GPIO_DOESET31_0_DIO24_NOEFF: any = '0'

/**
Sets bit DOE31_0.DIO23*/
export const GPIO_DOESET31_0_DIO23: any = '1'

/**
Set*/
export const GPIO_DOESET31_0_DIO23_SET: any = '1'

/**
No effect*/
export const GPIO_DOESET31_0_DIO23_NOEFF: any = '0'

/**
Sets bit DOE31_0.DIO22*/
export const GPIO_DOESET31_0_DIO22: any = '1'

/**
Set*/
export const GPIO_DOESET31_0_DIO22_SET: any = '1'

/**
No effect*/
export const GPIO_DOESET31_0_DIO22_NOEFF: any = '0'

/**
Sets bit DOE31_0.DIO21 */
export const GPIO_DOESET31_0_DIO21: any = '1'

/**
Set*/
export const GPIO_DOESET31_0_DIO21_SET: any = '1'

/**
No effect*/
export const GPIO_DOESET31_0_DIO21_NOEFF: any = '0'

/**
Sets bit DOE31_0.DIO20 */
export const GPIO_DOESET31_0_DIO20: any = '1'

/**
Set*/
export const GPIO_DOESET31_0_DIO20_SET: any = '1'

/**
No effect*/
export const GPIO_DOESET31_0_DIO20_NOEFF: any = '0'

/**
Sets bit DOE31_0.DIO19 */
export const GPIO_DOESET31_0_DIO19: any = '1'

/**
Set*/
export const GPIO_DOESET31_0_DIO19_SET: any = '1'

/**
No effect*/
export const GPIO_DOESET31_0_DIO19_NOEFF: any = '0'

/**
Sets bit DOE31_0.DIO18 */
export const GPIO_DOESET31_0_DIO18: any = '1'

/**
Set*/
export const GPIO_DOESET31_0_DIO18_SET: any = '1'

/**
No effect*/
export const GPIO_DOESET31_0_DIO18_NOEFF: any = '0'

/**
Sets bit DOE31_0.DIO17 */
export const GPIO_DOESET31_0_DIO17: any = '1'

/**
Set*/
export const GPIO_DOESET31_0_DIO17_SET: any = '1'

/**
No effect*/
export const GPIO_DOESET31_0_DIO17_NOEFF: any = '0'

/**
Sets bit DOE31_0.DIO16 */
export const GPIO_DOESET31_0_DIO16: any = '1'

/**
Set*/
export const GPIO_DOESET31_0_DIO16_SET: any = '1'

/**
No effect*/
export const GPIO_DOESET31_0_DIO16_NOEFF: any = '0'

/**
Sets bit DOE31_0.DIO15 */
export const GPIO_DOESET31_0_DIO15: any = '1'

/**
Set*/
export const GPIO_DOESET31_0_DIO15_SET: any = '1'

/**
No effect*/
export const GPIO_DOESET31_0_DIO15_NOEFF: any = '0'

/**
Sets bit DOE31_0.DIO14 */
export const GPIO_DOESET31_0_DIO14: any = '1'

/**
Set*/
export const GPIO_DOESET31_0_DIO14_SET: any = '1'

/**
No effect*/
export const GPIO_DOESET31_0_DIO14_NOEFF: any = '0'

/**
Sets bit DOE31_0.DIO13 */
export const GPIO_DOESET31_0_DIO13: any = '1'

/**
Set*/
export const GPIO_DOESET31_0_DIO13_SET: any = '1'

/**
No effect*/
export const GPIO_DOESET31_0_DIO13_NOEFF: any = '0'

/**
Sets bit DOE31_0.DIO12 */
export const GPIO_DOESET31_0_DIO12: any = '1'

/**
Set*/
export const GPIO_DOESET31_0_DIO12_SET: any = '1'

/**
No effect*/
export const GPIO_DOESET31_0_DIO12_NOEFF: any = '0'

/**
Sets bit DOE31_0.DIO11 */
export const GPIO_DOESET31_0_DIO11: any = '1'

/**
Set*/
export const GPIO_DOESET31_0_DIO11_SET: any = '1'

/**
No effect*/
export const GPIO_DOESET31_0_DIO11_NOEFF: any = '0'

/**
Sets bit DOE31_0.DIO10 */
export const GPIO_DOESET31_0_DIO10: any = '1'

/**
Set*/
export const GPIO_DOESET31_0_DIO10_SET: any = '1'

/**
No effect*/
export const GPIO_DOESET31_0_DIO10_NOEFF: any = '0'

/**
Sets bit DOE31_0.DIO9 */
export const GPIO_DOESET31_0_DIO9: any = '1'

/**
Set*/
export const GPIO_DOESET31_0_DIO9_SET: any = '1'

/**
No effect*/
export const GPIO_DOESET31_0_DIO9_NOEFF: any = '0'

/**
Sets bit DOE31_0.DIO8*/
export const GPIO_DOESET31_0_DIO8: any = '1'

/**
Set*/
export const GPIO_DOESET31_0_DIO8_SET: any = '1'

/**
No effect*/
export const GPIO_DOESET31_0_DIO8_NOEFF: any = '0'

/**
Sets bit DOE31_0.DIO7 */
export const GPIO_DOESET31_0_DIO7: any = '1'

/**
Set*/
export const GPIO_DOESET31_0_DIO7_SET: any = '1'

/**
No effect*/
export const GPIO_DOESET31_0_DIO7_NOEFF: any = '0'

/**
Sets bit DOE31_0.DIO6 */
export const GPIO_DOESET31_0_DIO6: any = '1'

/**
Set*/
export const GPIO_DOESET31_0_DIO6_SET: any = '1'

/**
No effect*/
export const GPIO_DOESET31_0_DIO6_NOEFF: any = '0'

/**
Sets bit DOE31_0.DIO5 */
export const GPIO_DOESET31_0_DIO5: any = '1'

/**
Set*/
export const GPIO_DOESET31_0_DIO5_SET: any = '1'

/**
No effect*/
export const GPIO_DOESET31_0_DIO5_NOEFF: any = '0'

/**
Sets bit DOE31_0.DIO4 */
export const GPIO_DOESET31_0_DIO4: any = '1'

/**
Set*/
export const GPIO_DOESET31_0_DIO4_SET: any = '1'

/**
No effect*/
export const GPIO_DOESET31_0_DIO4_NOEFF: any = '0'

/**
Sets bit DOE31_0.DIO3 */
export const GPIO_DOESET31_0_DIO3: any = '1'

/**
Set*/
export const GPIO_DOESET31_0_DIO3_SET: any = '1'

/**
No effect*/
export const GPIO_DOESET31_0_DIO3_NOEFF: any = '0'

/**
Sets bit DOE31_0.DIO2 */
export const GPIO_DOESET31_0_DIO2: any = '1'

/**
Set*/
export const GPIO_DOESET31_0_DIO2_SET: any = '1'

/**
No effect*/
export const GPIO_DOESET31_0_DIO2_NOEFF: any = '0'

/**
Sets bit DOE31_0.DIO1 */
export const GPIO_DOESET31_0_DIO1: any = '1'

/**
Set*/
export const GPIO_DOESET31_0_DIO1_SET: any = '1'

/**
No effect*/
export const GPIO_DOESET31_0_DIO1_NOEFF: any = '0'

/**
Sets bit DOE31_0.DIO0 */
export const GPIO_DOESET31_0_DIO0: any = '1'

/**
Set*/
export const GPIO_DOESET31_0_DIO0_SET: any = '1'

/**
No effect*/
export const GPIO_DOESET31_0_DIO0_NOEFF: any = '0'


// -------- REGISTER DOECLR31_0 -------- //

/**
Alias regiser to clear the corresponding bits of DOE31_0 register.*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_DOECLR31_0_RESERVED26: any = '6'

/**
Clears bit DOE31_0.DIO25*/
export const GPIO_DOECLR31_0_DIO25: any = '1'

/**
Clear*/
export const GPIO_DOECLR31_0_DIO25_CLR: any = '1'

/**
No effect*/
export const GPIO_DOECLR31_0_DIO25_NOEFF: any = '0'

/**
Clears bit DOE31_0.DIO24*/
export const GPIO_DOECLR31_0_DIO24: any = '1'

/**
Clear*/
export const GPIO_DOECLR31_0_DIO24_CLR: any = '1'

/**
No effect*/
export const GPIO_DOECLR31_0_DIO24_NOEFF: any = '0'

/**
Clears bit DOE31_0.DIO23*/
export const GPIO_DOECLR31_0_DIO23: any = '1'

/**
Clear*/
export const GPIO_DOECLR31_0_DIO23_CLR: any = '1'

/**
No effect*/
export const GPIO_DOECLR31_0_DIO23_NOEFF: any = '0'

/**
Clears bit DOE31_0.DIO22*/
export const GPIO_DOECLR31_0_DIO22: any = '1'

/**
Clear*/
export const GPIO_DOECLR31_0_DIO22_CLR: any = '1'

/**
No effect*/
export const GPIO_DOECLR31_0_DIO22_NOEFF: any = '0'

/**
Clears bit DOE31_0.DIO21*/
export const GPIO_DOECLR31_0_DIO21: any = '1'

/**
Clear*/
export const GPIO_DOECLR31_0_DIO21_CLR: any = '1'

/**
No effect*/
export const GPIO_DOECLR31_0_DIO21_NOEFF: any = '0'

/**
Clears bit DOE31_0.DIO20*/
export const GPIO_DOECLR31_0_DIO20: any = '1'

/**
Clear*/
export const GPIO_DOECLR31_0_DIO20_CLR: any = '1'

/**
No effect*/
export const GPIO_DOECLR31_0_DIO20_NOEFF: any = '0'

/**
Clears bit DOE31_0.DIO19*/
export const GPIO_DOECLR31_0_DIO19: any = '1'

/**
Clear*/
export const GPIO_DOECLR31_0_DIO19_CLR: any = '1'

/**
No effect*/
export const GPIO_DOECLR31_0_DIO19_NOEFF: any = '0'

/**
Clears bit DOE31_0.DIO18*/
export const GPIO_DOECLR31_0_DIO18: any = '1'

/**
Clear*/
export const GPIO_DOECLR31_0_DIO18_CLR: any = '1'

/**
No effect*/
export const GPIO_DOECLR31_0_DIO18_NOEFF: any = '0'

/**
Clears bit DOE31_0.DIO17*/
export const GPIO_DOECLR31_0_DIO17: any = '1'

/**
Clear*/
export const GPIO_DOECLR31_0_DIO17_CLR: any = '1'

/**
No effect*/
export const GPIO_DOECLR31_0_DIO17_NOEFF: any = '0'

/**
Clears bit DOE31_0.DIO16*/
export const GPIO_DOECLR31_0_DIO16: any = '1'

/**
Clear*/
export const GPIO_DOECLR31_0_DIO16_CLR: any = '1'

/**
No effect*/
export const GPIO_DOECLR31_0_DIO16_NOEFF: any = '0'

/**
Clears bit DOE31_0.DIO15*/
export const GPIO_DOECLR31_0_DIO15: any = '1'

/**
Clear*/
export const GPIO_DOECLR31_0_DIO15_CLR: any = '1'

/**
No effect*/
export const GPIO_DOECLR31_0_DIO15_NOEFF: any = '0'

/**
Clears bit DOE31_0.DIO14*/
export const GPIO_DOECLR31_0_DIO14: any = '1'

/**
Clear*/
export const GPIO_DOECLR31_0_DIO14_CLR: any = '1'

/**
No effect*/
export const GPIO_DOECLR31_0_DIO14_NOEFF: any = '0'

/**
Clears bit DOE31_0.DIO13*/
export const GPIO_DOECLR31_0_DIO13: any = '1'

/**
Clear*/
export const GPIO_DOECLR31_0_DIO13_CLR: any = '1'

/**
No effect*/
export const GPIO_DOECLR31_0_DIO13_NOEFF: any = '0'

/**
Clears bit DOE31_0.DIO12*/
export const GPIO_DOECLR31_0_DIO12: any = '1'

/**
Clear*/
export const GPIO_DOECLR31_0_DIO12_CLR: any = '1'

/**
No effect*/
export const GPIO_DOECLR31_0_DIO12_NOEFF: any = '0'

/**
Clears bit DOE31_0.DIO11*/
export const GPIO_DOECLR31_0_DIO11: any = '1'

/**
Clear*/
export const GPIO_DOECLR31_0_DIO11_CLR: any = '1'

/**
No effect*/
export const GPIO_DOECLR31_0_DIO11_NOEFF: any = '0'

/**
Clears bit DOE31_0.DIO10*/
export const GPIO_DOECLR31_0_DIO10: any = '1'

/**
Clear*/
export const GPIO_DOECLR31_0_DIO10_CLR: any = '1'

/**
No effect*/
export const GPIO_DOECLR31_0_DIO10_NOEFF: any = '0'

/**
Clears bit DOE31_0.DIO9*/
export const GPIO_DOECLR31_0_DIO9: any = '1'

/**
Clear*/
export const GPIO_DOECLR31_0_DIO9_CLR: any = '1'

/**
No effect*/
export const GPIO_DOECLR31_0_DIO9_NOEFF: any = '0'

/**
Clears bit DOE31_0.DIO8*/
export const GPIO_DOECLR31_0_DIO8: any = '1'

/**
Clear*/
export const GPIO_DOECLR31_0_DIO8_CLR: any = '1'

/**
No effect*/
export const GPIO_DOECLR31_0_DIO8_NOEFF: any = '0'

/**
Clears bit DOE31_0.DIO7*/
export const GPIO_DOECLR31_0_DIO7: any = '1'

/**
Clear*/
export const GPIO_DOECLR31_0_DIO7_CLR: any = '1'

/**
No effect*/
export const GPIO_DOECLR31_0_DIO7_NOEFF: any = '0'

/**
Clears bit DOE31_0.DIO6*/
export const GPIO_DOECLR31_0_DIO6: any = '1'

/**
Clear*/
export const GPIO_DOECLR31_0_DIO6_CLR: any = '1'

/**
No effect*/
export const GPIO_DOECLR31_0_DIO6_NOEFF: any = '0'

/**
Clears bit DOE31_0.DIO5*/
export const GPIO_DOECLR31_0_DIO5: any = '1'

/**
Clear*/
export const GPIO_DOECLR31_0_DIO5_CLR: any = '1'

/**
No effect*/
export const GPIO_DOECLR31_0_DIO5_NOEFF: any = '0'

/**
Clears bit DOE31_0.DIO4*/
export const GPIO_DOECLR31_0_DIO4: any = '1'

/**
Clear*/
export const GPIO_DOECLR31_0_DIO4_CLR: any = '1'

/**
No effect*/
export const GPIO_DOECLR31_0_DIO4_NOEFF: any = '0'

/**
Clears bit DOE31_0.DIO3*/
export const GPIO_DOECLR31_0_DIO3: any = '1'

/**
Clear*/
export const GPIO_DOECLR31_0_DIO3_CLR: any = '1'

/**
No effect*/
export const GPIO_DOECLR31_0_DIO3_NOEFF: any = '0'

/**
Clears bit DOE31_0.DIO2*/
export const GPIO_DOECLR31_0_DIO2: any = '1'

/**
Clear*/
export const GPIO_DOECLR31_0_DIO2_CLR: any = '1'

/**
No effect*/
export const GPIO_DOECLR31_0_DIO2_NOEFF: any = '0'

/**
Clears bit DOE31_0.DIO1*/
export const GPIO_DOECLR31_0_DIO1: any = '1'

/**
Clear*/
export const GPIO_DOECLR31_0_DIO1_CLR: any = '1'

/**
No effect*/
export const GPIO_DOECLR31_0_DIO1_NOEFF: any = '0'

/**
Clears bit DOE31_0.DIO0*/
export const GPIO_DOECLR31_0_DIO0: any = '1'

/**
Clear*/
export const GPIO_DOECLR31_0_DIO0_CLR: any = '1'

/**
No effect*/
export const GPIO_DOECLR31_0_DIO0_NOEFF: any = '0'


// -------- REGISTER DOETGL31_0 -------- //

/**
Alias regiser to toggle the corresponding bits of DOE31_0 register.*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_DOETGL31_0_RESERVED26: any = '6'

/**
Toggles bit DOE31_0.DIO25*/
export const GPIO_DOETGL31_0_DIO25: any = '1'

/**
Toggle*/
export const GPIO_DOETGL31_0_DIO25_TOGGLE: any = '1'

/**
No effect*/
export const GPIO_DOETGL31_0_DIO25_NOEFF: any = '0'

/**
Toggles bit DOE31_0.DIO24*/
export const GPIO_DOETGL31_0_DIO24: any = '1'

/**
Toggle*/
export const GPIO_DOETGL31_0_DIO24_TOGGLE: any = '1'

/**
No effect*/
export const GPIO_DOETGL31_0_DIO24_NOEFF: any = '0'

/**
Toggles bit DOE31_0.DIO23*/
export const GPIO_DOETGL31_0_DIO23: any = '1'

/**
Toggle*/
export const GPIO_DOETGL31_0_DIO23_TOGGLE: any = '1'

/**
No effect*/
export const GPIO_DOETGL31_0_DIO23_NOEFF: any = '0'

/**
Toggles bit DOE31_0.DIO22*/
export const GPIO_DOETGL31_0_DIO22: any = '1'

/**
Toggle*/
export const GPIO_DOETGL31_0_DIO22_TOGGLE: any = '1'

/**
No effect*/
export const GPIO_DOETGL31_0_DIO22_NOEFF: any = '0'

/**
Toggles bit DOE31_0.DIO21*/
export const GPIO_DOETGL31_0_DIO21: any = '1'

/**
Toggle*/
export const GPIO_DOETGL31_0_DIO21_TOGGLE: any = '1'

/**
No effect*/
export const GPIO_DOETGL31_0_DIO21_NOEFF: any = '0'

/**
Toggles bit DOE31_0.DIO20*/
export const GPIO_DOETGL31_0_DIO20: any = '1'

/**
Toggle*/
export const GPIO_DOETGL31_0_DIO20_TOGGLE: any = '1'

/**
No effect*/
export const GPIO_DOETGL31_0_DIO20_NOEFF: any = '0'

/**
Toggles bit DOE31_0.DIO19*/
export const GPIO_DOETGL31_0_DIO19: any = '1'

/**
Toggle*/
export const GPIO_DOETGL31_0_DIO19_TOGGLE: any = '1'

/**
No effect*/
export const GPIO_DOETGL31_0_DIO19_NOEFF: any = '0'

/**
Toggles bit DOE31_0.DIO18*/
export const GPIO_DOETGL31_0_DIO18: any = '1'

/**
Toggle*/
export const GPIO_DOETGL31_0_DIO18_TOGGLE: any = '1'

/**
No effect*/
export const GPIO_DOETGL31_0_DIO18_NOEFF: any = '0'

/**
Toggles bit DOE31_0.DIO17*/
export const GPIO_DOETGL31_0_DIO17: any = '1'

/**
Toggle*/
export const GPIO_DOETGL31_0_DIO17_TOGGLE: any = '1'

/**
No effect*/
export const GPIO_DOETGL31_0_DIO17_NOEFF: any = '0'

/**
Toggles bit DOE31_0.DIO16*/
export const GPIO_DOETGL31_0_DIO16: any = '1'

/**
Toggle*/
export const GPIO_DOETGL31_0_DIO16_TOGGLE: any = '1'

/**
No effect*/
export const GPIO_DOETGL31_0_DIO16_NOEFF: any = '0'

/**
Toggles bit DOE31_0.DIO15*/
export const GPIO_DOETGL31_0_DIO15: any = '1'

/**
Toggle*/
export const GPIO_DOETGL31_0_DIO15_TOGGLE: any = '1'

/**
No effect*/
export const GPIO_DOETGL31_0_DIO15_NOEFF: any = '0'

/**
Toggles bit DOE31_0.DIO14*/
export const GPIO_DOETGL31_0_DIO14: any = '1'

/**
Toggle*/
export const GPIO_DOETGL31_0_DIO14_TOGGLE: any = '1'

/**
No effect*/
export const GPIO_DOETGL31_0_DIO14_NOEFF: any = '0'

/**
Toggles bit DOE31_0.DIO13*/
export const GPIO_DOETGL31_0_DIO13: any = '1'

/**
Toggle*/
export const GPIO_DOETGL31_0_DIO13_TOGGLE: any = '1'

/**
No effect*/
export const GPIO_DOETGL31_0_DIO13_NOEFF: any = '0'

/**
Toggles bit DOE31_0.DIO12*/
export const GPIO_DOETGL31_0_DIO12: any = '1'

/**
Toggle*/
export const GPIO_DOETGL31_0_DIO12_TOGGLE: any = '1'

/**
No effect*/
export const GPIO_DOETGL31_0_DIO12_NOEFF: any = '0'

/**
Toggles bit DOE31_0.DIO11*/
export const GPIO_DOETGL31_0_DIO11: any = '1'

/**
Toggle*/
export const GPIO_DOETGL31_0_DIO11_TOGGLE: any = '1'

/**
No effect*/
export const GPIO_DOETGL31_0_DIO11_NOEFF: any = '0'

/**
Toggles bit DOE31_0.DIO10*/
export const GPIO_DOETGL31_0_DIO10: any = '1'

/**
Toggle*/
export const GPIO_DOETGL31_0_DIO10_TOGGLE: any = '1'

/**
No effect*/
export const GPIO_DOETGL31_0_DIO10_NOEFF: any = '0'

/**
Toggles bit DOE31_0.DIO9*/
export const GPIO_DOETGL31_0_DIO9: any = '1'

/**
Toggle*/
export const GPIO_DOETGL31_0_DIO9_TOGGLE: any = '1'

/**
No effect*/
export const GPIO_DOETGL31_0_DIO9_NOEFF: any = '0'

/**
Toggles bit DOE31_0.DIO8*/
export const GPIO_DOETGL31_0_DIO8: any = '1'

/**
Toggle*/
export const GPIO_DOETGL31_0_DIO8_TOGGLE: any = '1'

/**
No effect*/
export const GPIO_DOETGL31_0_DIO8_NOEFF: any = '0'

/**
Toggles bit DOE31_0.DIO7*/
export const GPIO_DOETGL31_0_DIO7: any = '1'

/**
Toggle*/
export const GPIO_DOETGL31_0_DIO7_TOGGLE: any = '1'

/**
No effect*/
export const GPIO_DOETGL31_0_DIO7_NOEFF: any = '0'

/**
Toggles bit DOE31_0.DIO6*/
export const GPIO_DOETGL31_0_DIO6: any = '1'

/**
Toggle*/
export const GPIO_DOETGL31_0_DIO6_TOGGLE: any = '1'

/**
No effect*/
export const GPIO_DOETGL31_0_DIO6_NOEFF: any = '0'

/**
Toggles bit DOE31_0.DIO5*/
export const GPIO_DOETGL31_0_DIO5: any = '1'

/**
Toggle*/
export const GPIO_DOETGL31_0_DIO5_TOGGLE: any = '1'

/**
No effect*/
export const GPIO_DOETGL31_0_DIO5_NOEFF: any = '0'

/**
Toggles bit DOE31_0.DIO4*/
export const GPIO_DOETGL31_0_DIO4: any = '1'

/**
Toggle*/
export const GPIO_DOETGL31_0_DIO4_TOGGLE: any = '1'

/**
No effect*/
export const GPIO_DOETGL31_0_DIO4_NOEFF: any = '0'

/**
Toggles bit DOE31_0.DIO3*/
export const GPIO_DOETGL31_0_DIO3: any = '1'

/**
Toggle*/
export const GPIO_DOETGL31_0_DIO3_TOGGLE: any = '1'

/**
No effect*/
export const GPIO_DOETGL31_0_DIO3_NOEFF: any = '0'

/**
Toggles bit DOE31_0.DIO2*/
export const GPIO_DOETGL31_0_DIO2: any = '1'

/**
Toggle*/
export const GPIO_DOETGL31_0_DIO2_TOGGLE: any = '1'

/**
No effect*/
export const GPIO_DOETGL31_0_DIO2_NOEFF: any = '0'

/**
Toggles bit DOE31_0.DIO1*/
export const GPIO_DOETGL31_0_DIO1: any = '1'

/**
Toggle*/
export const GPIO_DOETGL31_0_DIO1_TOGGLE: any = '1'

/**
No effect*/
export const GPIO_DOETGL31_0_DIO1_NOEFF: any = '0'

/**
Toggles bit DOE31_0.DIO0*/
export const GPIO_DOETGL31_0_DIO0: any = '1'

/**
Toggle*/
export const GPIO_DOETGL31_0_DIO0_TOGGLE: any = '1'

/**
No effect*/
export const GPIO_DOETGL31_0_DIO0_NOEFF: any = '0'


// -------- REGISTER DIN3_0 -------- //

/**
Alias register for byte access to DIN31_0[3:0] bits.*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_DIN3_0_RESERVED25: any = '7'

/**
Data input from DIO3*/
export const GPIO_DIN3_0_DIO3: any = '1'

/**
Input value is 1*/
export const GPIO_DIN3_0_DIO3_ONE: any = '1'

/**
Input value is 0*/
export const GPIO_DIN3_0_DIO3_ZERO: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_DIN3_0_RESERVED17: any = '7'

/**
Data input from DIO2*/
export const GPIO_DIN3_0_DIO2: any = '1'

/**
Input value is 1*/
export const GPIO_DIN3_0_DIO2_ONE: any = '1'

/**
Input value is 0*/
export const GPIO_DIN3_0_DIO2_ZERO: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_DIN3_0_RESERVED9: any = '7'

/**
Data input from DIO1*/
export const GPIO_DIN3_0_DIO1: any = '1'

/**
Input value is 1*/
export const GPIO_DIN3_0_DIO1_ONE: any = '1'

/**
Input value is 0*/
export const GPIO_DIN3_0_DIO1_ZERO: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_DIN3_0_RESERVED1: any = '7'

/**
Data input from DIO0*/
export const GPIO_DIN3_0_DIO0: any = '1'

/**
Input value is 1*/
export const GPIO_DIN3_0_DIO0_ONE: any = '1'

/**
Input value is 0*/
export const GPIO_DIN3_0_DIO0_ZERO: any = '0'


// -------- REGISTER DIN7_4 -------- //

/**
Alias register for byte access to DIN31_0[7:4] bits.*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_DIN7_4_RESERVED25: any = '7'

/**
Data input from DIO7*/
export const GPIO_DIN7_4_DIO7: any = '1'

/**
Input value is 1*/
export const GPIO_DIN7_4_DIO7_ONE: any = '1'

/**
Input value is 0*/
export const GPIO_DIN7_4_DIO7_ZERO: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_DIN7_4_RESERVED17: any = '7'

/**
Data input from DIO6*/
export const GPIO_DIN7_4_DIO6: any = '1'

/**
Input value is 1*/
export const GPIO_DIN7_4_DIO6_ONE: any = '1'

/**
Input value is 0*/
export const GPIO_DIN7_4_DIO6_ZERO: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_DIN7_4_RESERVED9: any = '7'

/**
Data input from DIO5*/
export const GPIO_DIN7_4_DIO5: any = '1'

/**
Input value is 1*/
export const GPIO_DIN7_4_DIO5_ONE: any = '1'

/**
Input value is 0*/
export const GPIO_DIN7_4_DIO5_ZERO: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_DIN7_4_RESERVED1: any = '7'

/**
Data input from DIO4*/
export const GPIO_DIN7_4_DIO4: any = '1'

/**
Input value is 1*/
export const GPIO_DIN7_4_DIO4_ONE: any = '1'

/**
Input value is 0*/
export const GPIO_DIN7_4_DIO4_ZERO: any = '0'


// -------- REGISTER DIN11_8 -------- //

/**
Alias register for byte access to DIN31_0[11:8] bits.*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_DIN11_8_RESERVED25: any = '7'

/**
Data input from DIO11*/
export const GPIO_DIN11_8_DIO11: any = '1'

/**
Input value is 1*/
export const GPIO_DIN11_8_DIO11_ONE: any = '1'

/**
Input value is 0*/
export const GPIO_DIN11_8_DIO11_ZERO: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_DIN11_8_RESERVED17: any = '7'

/**
Data input from DIO10*/
export const GPIO_DIN11_8_DIO10: any = '1'

/**
Input value is 1*/
export const GPIO_DIN11_8_DIO10_ONE: any = '1'

/**
Input value is 0*/
export const GPIO_DIN11_8_DIO10_ZERO: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_DIN11_8_RESERVED9: any = '7'

/**
Data input from DIO9*/
export const GPIO_DIN11_8_DIO9: any = '1'

/**
Input value is 1*/
export const GPIO_DIN11_8_DIO9_ONE: any = '1'

/**
Input value is 0*/
export const GPIO_DIN11_8_DIO9_ZERO: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_DIN11_8_RESERVED1: any = '7'

/**
Data input from DIO8*/
export const GPIO_DIN11_8_DIO8: any = '1'

/**
Input value is 1*/
export const GPIO_DIN11_8_DIO8_ONE: any = '1'

/**
Input value is 0*/
export const GPIO_DIN11_8_DIO8_ZERO: any = '0'


// -------- REGISTER DIN15_12 -------- //

/**
Alias register for byte access to DIN31_0[15:12] bits.*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_DIN15_12_RESERVED25: any = '7'

/**
Data input from DIO15*/
export const GPIO_DIN15_12_DIO15: any = '1'

/**
Input value is 1*/
export const GPIO_DIN15_12_DIO15_ONE: any = '1'

/**
Input value is 0*/
export const GPIO_DIN15_12_DIO15_ZERO: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_DIN15_12_RESERVED17: any = '7'

/**
Data input from DIO14*/
export const GPIO_DIN15_12_DIO14: any = '1'

/**
Input value is 1*/
export const GPIO_DIN15_12_DIO14_ONE: any = '1'

/**
Input value is 0*/
export const GPIO_DIN15_12_DIO14_ZERO: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_DIN15_12_RESERVED9: any = '7'

/**
Data input from DIO13*/
export const GPIO_DIN15_12_DIO13: any = '1'

/**
Input value is 1*/
export const GPIO_DIN15_12_DIO13_ONE: any = '1'

/**
Input value is 0*/
export const GPIO_DIN15_12_DIO13_ZERO: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_DIN15_12_RESERVED1: any = '7'

/**
Data input from DIO12*/
export const GPIO_DIN15_12_DIO12: any = '1'

/**
Input value is 1*/
export const GPIO_DIN15_12_DIO12_ONE: any = '1'

/**
Input value is 0*/
export const GPIO_DIN15_12_DIO12_ZERO: any = '0'


// -------- REGISTER DIN19_16 -------- //

/**
Alias register for byte access to DIN31_0[19:16] bits.*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_DIN19_16_RESERVED25: any = '7'

/**
Data input from DIO19*/
export const GPIO_DIN19_16_DIO19: any = '1'

/**
Input value is 1*/
export const GPIO_DIN19_16_DIO19_ONE: any = '1'

/**
Input value is 0*/
export const GPIO_DIN19_16_DIO19_ZERO: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_DIN19_16_RESERVED17: any = '7'

/**
Data input from DIO18*/
export const GPIO_DIN19_16_DIO18: any = '1'

/**
Input value is 1*/
export const GPIO_DIN19_16_DIO18_ONE: any = '1'

/**
Input value is 0*/
export const GPIO_DIN19_16_DIO18_ZERO: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_DIN19_16_RESERVED9: any = '7'

/**
Data input from DIO17*/
export const GPIO_DIN19_16_DIO17: any = '1'

/**
Input value is 1*/
export const GPIO_DIN19_16_DIO17_ONE: any = '1'

/**
Input value is 0*/
export const GPIO_DIN19_16_DIO17_ZERO: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_DIN19_16_RESERVED1: any = '7'

/**
Data input from DIO16*/
export const GPIO_DIN19_16_DIO16: any = '1'

/**
Input value is 1*/
export const GPIO_DIN19_16_DIO16_ONE: any = '1'

/**
Input value is 0*/
export const GPIO_DIN19_16_DIO16_ZERO: any = '0'


// -------- REGISTER DIN23_20 -------- //

/**
Alias register for byte access to DIN31_0[23:20] bits.*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_DIN23_20_RESERVED25: any = '7'

/**
Data input from DIO23*/
export const GPIO_DIN23_20_DIO23: any = '1'

/**
Input value is 1*/
export const GPIO_DIN23_20_DIO23_ONE: any = '1'

/**
Input value is 0*/
export const GPIO_DIN23_20_DIO23_ZERO: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_DIN23_20_RESERVED17: any = '7'

/**
Data input from DIO22*/
export const GPIO_DIN23_20_DIO22: any = '1'

/**
Input value is 1*/
export const GPIO_DIN23_20_DIO22_ONE: any = '1'

/**
Input value is 0*/
export const GPIO_DIN23_20_DIO22_ZERO: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_DIN23_20_RESERVED9: any = '7'

/**
Data input from DIO21*/
export const GPIO_DIN23_20_DIO21: any = '1'

/**
Input value is 1*/
export const GPIO_DIN23_20_DIO21_ONE: any = '1'

/**
Input value is 0*/
export const GPIO_DIN23_20_DIO21_ZERO: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_DIN23_20_RESERVED1: any = '7'

/**
Data input from DIO20*/
export const GPIO_DIN23_20_DIO20: any = '1'

/**
Input value is 1*/
export const GPIO_DIN23_20_DIO20_ONE: any = '1'

/**
Input value is 0*/
export const GPIO_DIN23_20_DIO20_ZERO: any = '0'


// -------- REGISTER DIN27_24 -------- //

/**
Alias register for byte access to DIN31_0[27:24] bits.*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_DIN27_24_RESERVED9: any = '23'

/**
Data input from DIO25*/
export const GPIO_DIN27_24_DIO25: any = '1'

/**
Input value is 1*/
export const GPIO_DIN27_24_DIO25_ONE: any = '1'

/**
Input value is 0*/
export const GPIO_DIN27_24_DIO25_ZERO: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_DIN27_24_RESERVED1: any = '7'

/**
Data input from DIO24*/
export const GPIO_DIN27_24_DIO24: any = '1'

/**
Input value is 1*/
export const GPIO_DIN27_24_DIO24_ONE: any = '1'

/**
Input value is 0*/
export const GPIO_DIN27_24_DIO24_ZERO: any = '0'


// -------- REGISTER DIN31_0 -------- //

/**
Data input from DIO 31 to 0 pins.*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_DIN31_0_RESERVED26: any = '6'

/**
Data input from DIO25*/
export const GPIO_DIN31_0_DIO25: any = '1'

/**
Input value is 1*/
export const GPIO_DIN31_0_DIO25_ONE: any = '1'

/**
Input value is 0*/
export const GPIO_DIN31_0_DIO25_ZERO: any = '0'

/**
Data input from DIO24*/
export const GPIO_DIN31_0_DIO24: any = '1'

/**
Input value is 1*/
export const GPIO_DIN31_0_DIO24_ONE: any = '1'

/**
Input value is 0*/
export const GPIO_DIN31_0_DIO24_ZERO: any = '0'

/**
Data input from DIO23*/
export const GPIO_DIN31_0_DIO23: any = '1'

/**
Input value is 1*/
export const GPIO_DIN31_0_DIO23_ONE: any = '1'

/**
Input value is 0*/
export const GPIO_DIN31_0_DIO23_ZERO: any = '0'

/**
Data input from DIO22*/
export const GPIO_DIN31_0_DIO22: any = '1'

/**
Input value is 1*/
export const GPIO_DIN31_0_DIO22_ONE: any = '1'

/**
Input value is 0*/
export const GPIO_DIN31_0_DIO22_ZERO: any = '0'

/**
Data input from DIO21*/
export const GPIO_DIN31_0_DIO21: any = '1'

/**
Input value is 1*/
export const GPIO_DIN31_0_DIO21_ONE: any = '1'

/**
Input value is 0*/
export const GPIO_DIN31_0_DIO21_ZERO: any = '0'

/**
Data input from DIO20*/
export const GPIO_DIN31_0_DIO20: any = '1'

/**
Input value is 1*/
export const GPIO_DIN31_0_DIO20_ONE: any = '1'

/**
Input value is 0*/
export const GPIO_DIN31_0_DIO20_ZERO: any = '0'

/**
Data input from DIO19*/
export const GPIO_DIN31_0_DIO19: any = '1'

/**
Input value is 1*/
export const GPIO_DIN31_0_DIO19_ONE: any = '1'

/**
Input value is 0*/
export const GPIO_DIN31_0_DIO19_ZERO: any = '0'

/**
Data input from DIO18*/
export const GPIO_DIN31_0_DIO18: any = '1'

/**
Input value is 1*/
export const GPIO_DIN31_0_DIO18_ONE: any = '1'

/**
Input value is 0*/
export const GPIO_DIN31_0_DIO18_ZERO: any = '0'

/**
Data input from DIO17*/
export const GPIO_DIN31_0_DIO17: any = '1'

/**
Input value is 1*/
export const GPIO_DIN31_0_DIO17_ONE: any = '1'

/**
Input value is 0*/
export const GPIO_DIN31_0_DIO17_ZERO: any = '0'

/**
Data input from DIO16*/
export const GPIO_DIN31_0_DIO16: any = '1'

/**
Input value is 1*/
export const GPIO_DIN31_0_DIO16_ONE: any = '1'

/**
Input value is 0*/
export const GPIO_DIN31_0_DIO16_ZERO: any = '0'

/**
Data input from DIO15*/
export const GPIO_DIN31_0_DIO15: any = '1'

/**
Input value is 1*/
export const GPIO_DIN31_0_DIO15_ONE: any = '1'

/**
Input value is 0*/
export const GPIO_DIN31_0_DIO15_ZERO: any = '0'

/**
Data input from DIO14*/
export const GPIO_DIN31_0_DIO14: any = '1'

/**
Input value is 1*/
export const GPIO_DIN31_0_DIO14_ONE: any = '1'

/**
Input value is 0*/
export const GPIO_DIN31_0_DIO14_ZERO: any = '0'

/**
Data input from DIO13*/
export const GPIO_DIN31_0_DIO13: any = '1'

/**
Input value is 1*/
export const GPIO_DIN31_0_DIO13_ONE: any = '1'

/**
Input value is 0*/
export const GPIO_DIN31_0_DIO13_ZERO: any = '0'

/**
Data input from DIO12*/
export const GPIO_DIN31_0_DIO12: any = '1'

/**
Input value is 1*/
export const GPIO_DIN31_0_DIO12_ONE: any = '1'

/**
Input value is 0*/
export const GPIO_DIN31_0_DIO12_ZERO: any = '0'

/**
Data input from DIO11*/
export const GPIO_DIN31_0_DIO11: any = '1'

/**
Input value is 1*/
export const GPIO_DIN31_0_DIO11_ONE: any = '1'

/**
Input value is 0*/
export const GPIO_DIN31_0_DIO11_ZERO: any = '0'

/**
Data input from DIO10*/
export const GPIO_DIN31_0_DIO10: any = '1'

/**
Input value is 1*/
export const GPIO_DIN31_0_DIO10_ONE: any = '1'

/**
Input value is 0*/
export const GPIO_DIN31_0_DIO10_ZERO: any = '0'

/**
Data input from DIO9*/
export const GPIO_DIN31_0_DIO9: any = '1'

/**
Input value is 1*/
export const GPIO_DIN31_0_DIO9_ONE: any = '1'

/**
Input value is 0*/
export const GPIO_DIN31_0_DIO9_ZERO: any = '0'

/**
Data input from DIO8*/
export const GPIO_DIN31_0_DIO8: any = '1'

/**
Input value is 1*/
export const GPIO_DIN31_0_DIO8_ONE: any = '1'

/**
Input value is 0*/
export const GPIO_DIN31_0_DIO8_ZERO: any = '0'

/**
Data input from DIO7*/
export const GPIO_DIN31_0_DIO7: any = '1'

/**
Input value is 1*/
export const GPIO_DIN31_0_DIO7_ONE: any = '1'

/**
Input value is 0*/
export const GPIO_DIN31_0_DIO7_ZERO: any = '0'

/**
Data input from DIO6*/
export const GPIO_DIN31_0_DIO6: any = '1'

/**
Input value is 1*/
export const GPIO_DIN31_0_DIO6_ONE: any = '1'

/**
Input value is 0*/
export const GPIO_DIN31_0_DIO6_ZERO: any = '0'

/**
Data input from DIO5*/
export const GPIO_DIN31_0_DIO5: any = '1'

/**
Input value is 1*/
export const GPIO_DIN31_0_DIO5_ONE: any = '1'

/**
Input value is 0*/
export const GPIO_DIN31_0_DIO5_ZERO: any = '0'

/**
Data input from DIO4*/
export const GPIO_DIN31_0_DIO4: any = '1'

/**
Input value is 1*/
export const GPIO_DIN31_0_DIO4_ONE: any = '1'

/**
Input value is 0*/
export const GPIO_DIN31_0_DIO4_ZERO: any = '0'

/**
Data input from DIO3*/
export const GPIO_DIN31_0_DIO3: any = '1'

/**
Input value is 1*/
export const GPIO_DIN31_0_DIO3_ONE: any = '1'

/**
Input value is 0*/
export const GPIO_DIN31_0_DIO3_ZERO: any = '0'

/**
Data input from DIO2*/
export const GPIO_DIN31_0_DIO2: any = '1'

/**
Input value is 1*/
export const GPIO_DIN31_0_DIO2_ONE: any = '1'

/**
Input value is 0*/
export const GPIO_DIN31_0_DIO2_ZERO: any = '0'

/**
Data input from DIO1*/
export const GPIO_DIN31_0_DIO1: any = '1'

/**
Input value is 1*/
export const GPIO_DIN31_0_DIO1_ONE: any = '1'

/**
Input value is 0*/
export const GPIO_DIN31_0_DIO1_ZERO: any = '0'

/**
Data input from DIO0*/
export const GPIO_DIN31_0_DIO0: any = '1'

/**
Input value is 1*/
export const GPIO_DIN31_0_DIO0_ONE: any = '1'

/**
Input value is 0*/
export const GPIO_DIN31_0_DIO0_ZERO: any = '0'


// -------- REGISTER EVTCFG -------- //

/**
Event configuration. This register is used to select DIO for GPIO to publish event on SVT event fabric (EVTSVT). It also contains enable bit that is used to mask the event.*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_EVTCFG_RESERVED9: any = '23'

/**
Enables GPIO to publish edge qualified selected DIO event on SVT event fabric. 

Design note: The edge detector flop is cleared automatically for the selected DIO once the event is published.*/
export const GPIO_EVTCFG_EVTEN: any = '1'

/**
Enable*/
export const GPIO_EVTCFG_EVTEN_EN: any = '1'

/**
Disable*/
export const GPIO_EVTCFG_EVTEN_DIS: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_EVTCFG_RESERVED6: any = '2'

/**
This is used to select DIO for event generation. For example, DIOSEL = 0x0 selects DIO0 and DIOSEL = 0x8 selects DIO8.*/
export const GPIO_EVTCFG_DIOSEL: any = '6'

/**
Maximum value*/
export const GPIO_EVTCFG_DIOSEL_MAXIMUM: any = '63'

/**
Minimum value*/
export const GPIO_EVTCFG_DIOSEL_MINIMUM: any = '0'


// -------- MODULE IOC -------- //

export interface IOC_t {
    DESC: em.$Reg
    DESCEX: em.$Reg
    IOC0: em.$Reg
    IOC1: em.$Reg
    IOC2: em.$Reg
    IOC3: em.$Reg
    IOC4: em.$Reg
    IOC5: em.$Reg
    IOC6: em.$Reg
    IOC7: em.$Reg
    IOC8: em.$Reg
    IOC9: em.$Reg
    IOC10: em.$Reg
    IOC11: em.$Reg
    IOC12: em.$Reg
    IOC13: em.$Reg
    IOC14: em.$Reg
    IOC15: em.$Reg
    IOC16: em.$Reg
    IOC17: em.$Reg
    IOC18: em.$Reg
    IOC19: em.$Reg
    IOC20: em.$Reg
    IOC21: em.$Reg
    IOC22: em.$Reg
    IOC23: em.$Reg
    IOC24: em.$Reg
    IOC25: em.$Reg
    DTBCFG: em.$Reg
    DTBOE: em.$Reg
    EVTCFG: em.$Reg
    TEST: em.$Reg
    DTBSTAT: em.$Reg
}

// -------- REGISTER DESC -------- //

/**
Description Register. This register provides IP module ID, revision information, instance index and standard MMR registers offset.*/
/**
Module identifier used to uniquely identify this IP.*/
export const IOC_DESC_MODID: any = '16'

/**
Standard IP MMR block offset. Standard IP MMRs are the set of from aggregated IRQ registers till DTB.


0: Standard IP MMRs do not exist

0x1-0xF: Standard IP MMRs begin at offset of (64*STDIPOFF from the base IP address)*/
export const IOC_DESC_STDIPOFF: any = '4'

/**
IP Instance ID number. If multiple instances of IP exist in the device, this field can identify the instance number (0-15).*/
export const IOC_DESC_INSTIDX: any = '4'

/**
Major revision of IP (0-15).*/
export const IOC_DESC_MAJREV: any = '4'

/**
Minor revision of IP (0-15).*/
export const IOC_DESC_MINREV: any = '4'


// -------- REGISTER DESCEX -------- //

/**
Extended Description Register. This register provides configuration details of the IP to software drivers and end users.*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_DESCEX_RESERVED16: any = '16'

/**
Number of DTB IOs supported. Total DTB IOs supported is NUMDTBIO value +1.*/
export const IOC_DESCEX_NUMDTBIO: any = '4'

/**
Highest possible value*/
export const IOC_DESCEX_NUMDTBIO_MAXIMUM: any = '15'

/**
Smallest value*/
export const IOC_DESCEX_NUMDTBIO_MINIMUM: any = '0'

/**
Number of high drive IOs supported. Total high drive IOs supported is NUMHDIO value +1.*/
export const IOC_DESCEX_NUMHDIO: any = '5'

/**
Highest possible value*/
export const IOC_DESCEX_NUMHDIO_MAXIMUM: any = '31'

/**
Smallest value*/
export const IOC_DESCEX_NUMHDIO_MINIMUM: any = '0'

/**
High drive IO supported by IOC.*/
export const IOC_DESCEX_HDIO: any = '1'

/**
HD IO supported by IOC*/
export const IOC_DESCEX_HDIO_PRESENT: any = '1'

/**
HD IO not supported by IOC*/
export const IOC_DESCEX_HDIO_ABSENT: any = '0'

/**
Number of DIOs supported. Total DIOs supported is NUMDIO value +1.*/
export const IOC_DESCEX_NUMDIO: any = '6'

/**
Highest possible value*/
export const IOC_DESCEX_NUMDIO_MAXIMUM: any = '63'

/**
Smallest value*/
export const IOC_DESCEX_NUMDIO_MINIMUM: any = '0'


// -------- REGISTER IOC0 -------- //

/**
Configuration of DIO0*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_IOC0_RESERVED31: any = '1'

/**
This field controls input hysteresis*/
export const IOC_IOC0_HYSTEN: any = '1'

/**
Input hysteresis enabled*/
export const IOC_IOC0_HYSTEN_EN: any = '1'

/**
Input hysteresis disabled*/
export const IOC_IOC0_HYSTEN_DIS: any = '0'

/**
This field controls the input capability of DIO*/
export const IOC_IOC0_INPEN: any = '1'

/**
Input enabled*/
export const IOC_IOC0_INPEN_EN: any = '1'

/**
Input disabled*/
export const IOC_IOC0_INPEN_DIS: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_IOC0_RESERVED27: any = '2'

/**
IO Mode. Setting this to value 0x6 or 0x7 will default to normal IO behavior.*/
export const IOC_IOC0_IOMODE: any = '3'

/**
Open Source, inverted IO*/
export const IOC_IOC0_IOMODE_OPENS_INV: any = '5'

/**
Open Source, normal IO*/
export const IOC_IOC0_IOMODE_OPENS: any = '4'

/**
Open Drain, inverted IO*/
export const IOC_IOC0_IOMODE_OPEND_INV: any = '3'

/**
Open Drain, normal IO*/
export const IOC_IOC0_IOMODE_OPEND: any = '2'

/**
Inverted IO*/
export const IOC_IOC0_IOMODE_INVERTED: any = '1'

/**
Normal IO*/
export const IOC_IOC0_IOMODE_NORMAL: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_IOC0_RESERVED22: any = '2'

/**
Wakeup configuration from shutdown*/
export const IOC_IOC0_WUCFGSD: any = '2'

/**
Wakeup triggered when pad level is high*/
export const IOC_IOC0_WUCFGSD_WAKE_HIGH: any = '3'

/**
Wakeup triggered when pad level is low*/
export const IOC_IOC0_WUCFGSD_WAKE_LOW: any = '2'

/**
Wakeup disabled*/
export const IOC_IOC0_WUCFGSD_DIS_1: any = '1'

/**
Wakeup disabled*/
export const IOC_IOC0_WUCFGSD_DIS_0: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_IOC0_RESERVED19: any = '1'

/**
Wakeup enable from standby*/
export const IOC_IOC0_WUENSB: any = '1'

/**
Wakeup enabled (effective only if EDGEDET is enabled)*/
export const IOC_IOC0_WUENSB_EN: any = '1'

/**
Wakeup disabled*/
export const IOC_IOC0_WUENSB_DIS: any = '0'

/**
Edge detect configuration*/
export const IOC_IOC0_EDGEDET: any = '2'

/**
Positive and negative edge detection*/
export const IOC_IOC0_EDGEDET_EDGE_BOTH: any = '3'

/**
Positive edge detection*/
export const IOC_IOC0_EDGEDET_EDGE_POS: any = '2'

/**
Negative edge detection*/
export const IOC_IOC0_EDGEDET_EDGE_NEG: any = '1'

/**
No edge detection*/
export const IOC_IOC0_EDGEDET_EDGE_DIS: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_IOC0_RESERVED15: any = '1'

/**
Pull control. Setting this to value 0x3 disables pull.*/
export const IOC_IOC0_PULLCTL: any = '2'

/**
Pull up enabled*/
export const IOC_IOC0_PULLCTL_PULL_UP: any = '2'

/**
Pull down enabled*/
export const IOC_IOC0_PULLCTL_PULL_DOWN: any = '1'

/**
No pull*/
export const IOC_IOC0_PULLCTL_PULL_DIS: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_IOC0_RESERVED3: any = '10'

/**
Selects usage of DIO0*/
export const IOC_IOC0_PORTCFG: any = '3'

/**
Digital Test Bus function*/
export const IOC_IOC0_PORTCFG_DTB: any = '7'

/**
Analog function*/
export const IOC_IOC0_PORTCFG_ANA: any = '6'

/**
Digital peripheral function-5*/
export const IOC_IOC0_PORTCFG_PFUNC5: any = '5'

/**
Digital peripheral function-4*/
export const IOC_IOC0_PORTCFG_PFUNC4: any = '4'

/**
Digital peripheral function-3*/
export const IOC_IOC0_PORTCFG_PFUNC3: any = '3'

/**
Digital peripheral function-2*/
export const IOC_IOC0_PORTCFG_PFUNC2: any = '2'

/**
Digital peripheral function-1 */
export const IOC_IOC0_PORTCFG_PFUNC1: any = '1'

/**
Base function*/
export const IOC_IOC0_PORTCFG_BASE: any = '0'


// -------- REGISTER IOC1 -------- //

/**
Configuration of DIO1*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_IOC1_RESERVED31: any = '1'

/**
This field controls input hysteresis*/
export const IOC_IOC1_HYSTEN: any = '1'

/**
Input hysteresis enabled*/
export const IOC_IOC1_HYSTEN_EN: any = '1'

/**
Input hysteresis disabled*/
export const IOC_IOC1_HYSTEN_DIS: any = '0'

/**
This field controls the input capability of DIO*/
export const IOC_IOC1_INPEN: any = '1'

/**
Input enabled*/
export const IOC_IOC1_INPEN_EN: any = '1'

/**
Input disabled*/
export const IOC_IOC1_INPEN_DIS: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_IOC1_RESERVED27: any = '2'

/**
IO Mode. Setting this to value 0x6 or 0x7 will default to normal IO behavior.*/
export const IOC_IOC1_IOMODE: any = '3'

/**
Open Source, inverted IO*/
export const IOC_IOC1_IOMODE_OPENS_INV: any = '5'

/**
Open Source, normal IO*/
export const IOC_IOC1_IOMODE_OPENS: any = '4'

/**
Open Drain, inverted IO*/
export const IOC_IOC1_IOMODE_OPEND_INV: any = '3'

/**
Open Drain, normal IO*/
export const IOC_IOC1_IOMODE_OPEND: any = '2'

/**
Inverted IO*/
export const IOC_IOC1_IOMODE_INVERTED: any = '1'

/**
Normal IO*/
export const IOC_IOC1_IOMODE_NORMAL: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_IOC1_RESERVED22: any = '2'

/**
Wakeup configuration from shutdown*/
export const IOC_IOC1_WUCFGSD: any = '2'

/**
Wakeup triggered when pad level is high*/
export const IOC_IOC1_WUCFGSD_WAKE_HIGH: any = '3'

/**
Wakeup triggered when pad level is low*/
export const IOC_IOC1_WUCFGSD_WAKE_LOW: any = '2'

/**
Wakeup disabled*/
export const IOC_IOC1_WUCFGSD_DIS_1: any = '1'

/**
Wakeup disabled*/
export const IOC_IOC1_WUCFGSD_DIS_0: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_IOC1_RESERVED19: any = '1'

/**
Wakeup enable from standby*/
export const IOC_IOC1_WUENSB: any = '1'

/**
Wakeup enabled (effective only if EDGEDET is enabled)*/
export const IOC_IOC1_WUENSB_EN: any = '1'

/**
Wakeup disabled*/
export const IOC_IOC1_WUENSB_DIS: any = '0'

/**
Edge detect configuration*/
export const IOC_IOC1_EDGEDET: any = '2'

/**
Positive and negative edge detection*/
export const IOC_IOC1_EDGEDET_EDGE_BOTH: any = '3'

/**
Positive edge detection*/
export const IOC_IOC1_EDGEDET_EDGE_POS: any = '2'

/**
Negative edge detection*/
export const IOC_IOC1_EDGEDET_EDGE_NEG: any = '1'

/**
No edge detection*/
export const IOC_IOC1_EDGEDET_EDGE_DIS: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_IOC1_RESERVED15: any = '1'

/**
Pull control. Setting this to value 0x3 disables pull.*/
export const IOC_IOC1_PULLCTL: any = '2'

/**
Pull up enabled*/
export const IOC_IOC1_PULLCTL_PULL_UP: any = '2'

/**
Pull down enabled*/
export const IOC_IOC1_PULLCTL_PULL_DOWN: any = '1'

/**
No pull*/
export const IOC_IOC1_PULLCTL_PULL_DIS: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_IOC1_RESERVED3: any = '10'

/**
Selects usage of DIO1*/
export const IOC_IOC1_PORTCFG: any = '3'

/**
Digital Test Bus function*/
export const IOC_IOC1_PORTCFG_DTB: any = '7'

/**
Analog function*/
export const IOC_IOC1_PORTCFG_ANA: any = '6'

/**
Digital peripheral function-5*/
export const IOC_IOC1_PORTCFG_PFUNC5: any = '5'

/**
Digital peripheral function-4*/
export const IOC_IOC1_PORTCFG_PFUNC4: any = '4'

/**
Digital peripheral function-3*/
export const IOC_IOC1_PORTCFG_PFUNC3: any = '3'

/**
Digital peripheral function-2*/
export const IOC_IOC1_PORTCFG_PFUNC2: any = '2'

/**
Digital peripheral function-1 */
export const IOC_IOC1_PORTCFG_PFUNC1: any = '1'

/**
Base function*/
export const IOC_IOC1_PORTCFG_BASE: any = '0'


// -------- REGISTER IOC2 -------- //

/**
Selects usage of DIO2*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_IOC2_RESERVED31: any = '1'

/**
This field controls input hysteresis*/
export const IOC_IOC2_HYSTEN: any = '1'

/**
Input hysteresis enabled*/
export const IOC_IOC2_HYSTEN_EN: any = '1'

/**
Input hysteresis disabled*/
export const IOC_IOC2_HYSTEN_DIS: any = '0'

/**
This field controls the input capability of DIO*/
export const IOC_IOC2_INPEN: any = '1'

/**
Input enabled*/
export const IOC_IOC2_INPEN_EN: any = '1'

/**
Input disabled*/
export const IOC_IOC2_INPEN_DIS: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_IOC2_RESERVED27: any = '2'

/**
IO Mode. Setting this to value 0x6 or 0x7 will default to normal IO behavior.*/
export const IOC_IOC2_IOMODE: any = '3'

/**
Open Source, inverted IO*/
export const IOC_IOC2_IOMODE_OPENS_INV: any = '5'

/**
Open Source, normal IO*/
export const IOC_IOC2_IOMODE_OPENS: any = '4'

/**
Open Drain, inverted IO*/
export const IOC_IOC2_IOMODE_OPEND_INV: any = '3'

/**
Open Drain, normal IO*/
export const IOC_IOC2_IOMODE_OPEND: any = '2'

/**
Inverted IO*/
export const IOC_IOC2_IOMODE_INVERTED: any = '1'

/**
Normal IO*/
export const IOC_IOC2_IOMODE_NORMAL: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_IOC2_RESERVED22: any = '2'

/**
Wakeup configuration from shutdown*/
export const IOC_IOC2_WUCFGSD: any = '2'

/**
Wakeup triggered when pad level is high*/
export const IOC_IOC2_WUCFGSD_WAKE_HIGH: any = '3'

/**
Wakeup triggered when pad level is low*/
export const IOC_IOC2_WUCFGSD_WAKE_LOW: any = '2'

/**
Wakeup disabled*/
export const IOC_IOC2_WUCFGSD_DIS_1: any = '1'

/**
Wakeup disabled*/
export const IOC_IOC2_WUCFGSD_DIS_0: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_IOC2_RESERVED19: any = '1'

/**
Wakeup enable from standby*/
export const IOC_IOC2_WUENSB: any = '1'

/**
Wakeup enabled (effective only if EDGEDET is enabled)*/
export const IOC_IOC2_WUENSB_EN: any = '1'

/**
Wakeup disabled*/
export const IOC_IOC2_WUENSB_DIS: any = '0'

/**
Edge detect configuration*/
export const IOC_IOC2_EDGEDET: any = '2'

/**
Positive and negative edge detection*/
export const IOC_IOC2_EDGEDET_EDGE_BOTH: any = '3'

/**
Positive edge detection*/
export const IOC_IOC2_EDGEDET_EDGE_POS: any = '2'

/**
Negative edge detection*/
export const IOC_IOC2_EDGEDET_EDGE_NEG: any = '1'

/**
No edge detection*/
export const IOC_IOC2_EDGEDET_EDGE_DIS: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_IOC2_RESERVED15: any = '1'

/**
Pull control. Setting this to value 0x3 disables pull.*/
export const IOC_IOC2_PULLCTL: any = '2'

/**
Pull up enabled*/
export const IOC_IOC2_PULLCTL_PULL_UP: any = '2'

/**
Pull down enabled*/
export const IOC_IOC2_PULLCTL_PULL_DOWN: any = '1'

/**
No pull*/
export const IOC_IOC2_PULLCTL_PULL_DIS: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_IOC2_RESERVED3: any = '10'

/**
Selects usage of DIO2*/
export const IOC_IOC2_PORTCFG: any = '3'

/**
Digital Test Bus function*/
export const IOC_IOC2_PORTCFG_DTB: any = '7'

/**
Analog function*/
export const IOC_IOC2_PORTCFG_ANA: any = '6'

/**
Digital peripheral function-5*/
export const IOC_IOC2_PORTCFG_PFUNC5: any = '5'

/**
Digital peripheral function-4*/
export const IOC_IOC2_PORTCFG_PFUNC4: any = '4'

/**
Digital peripheral function-3*/
export const IOC_IOC2_PORTCFG_PFUNC3: any = '3'

/**
Digital peripheral function-2*/
export const IOC_IOC2_PORTCFG_PFUNC2: any = '2'

/**
Digital peripheral function-1 */
export const IOC_IOC2_PORTCFG_PFUNC1: any = '1'

/**
Base function*/
export const IOC_IOC2_PORTCFG_BASE: any = '0'


// -------- REGISTER IOC3 -------- //

/**
Configuration of DIO3*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_IOC3_RESERVED31: any = '1'

/**
This field controls input hysteresis*/
export const IOC_IOC3_HYSTEN: any = '1'

/**
Input hysteresis enabled*/
export const IOC_IOC3_HYSTEN_EN: any = '1'

/**
Input hysteresis disabled*/
export const IOC_IOC3_HYSTEN_DIS: any = '0'

/**
This field controls the input capability of DIO*/
export const IOC_IOC3_INPEN: any = '1'

/**
Input enabled*/
export const IOC_IOC3_INPEN_EN: any = '1'

/**
Input disabled*/
export const IOC_IOC3_INPEN_DIS: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_IOC3_RESERVED27: any = '2'

/**
IO Mode. Setting this to value 0x6 or 0x7 will default to normal IO behavior.*/
export const IOC_IOC3_IOMODE: any = '3'

/**
Open Source, inverted IO*/
export const IOC_IOC3_IOMODE_OPENS_INV: any = '5'

/**
Open Source, normal IO*/
export const IOC_IOC3_IOMODE_OPENS: any = '4'

/**
Open Drain, inverted IO*/
export const IOC_IOC3_IOMODE_OPEND_INV: any = '3'

/**
Open Drain, normal IO*/
export const IOC_IOC3_IOMODE_OPEND: any = '2'

/**
Inverted IO*/
export const IOC_IOC3_IOMODE_INVERTED: any = '1'

/**
Normal IO*/
export const IOC_IOC3_IOMODE_NORMAL: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_IOC3_RESERVED22: any = '2'

/**
Wakeup configuration from shutdown*/
export const IOC_IOC3_WUCFGSD: any = '2'

/**
Wakeup triggered when pad level is high*/
export const IOC_IOC3_WUCFGSD_WAKE_HIGH: any = '3'

/**
Wakeup triggered when pad level is low*/
export const IOC_IOC3_WUCFGSD_WAKE_LOW: any = '2'

/**
Wakeup disabled*/
export const IOC_IOC3_WUCFGSD_DIS_1: any = '1'

/**
Wakeup disabled*/
export const IOC_IOC3_WUCFGSD_DIS_0: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_IOC3_RESERVED19: any = '1'

/**
Wakeup enable from standby*/
export const IOC_IOC3_WUENSB: any = '1'

/**
Wakeup enabled (effective only if EDGEDET is enabled)*/
export const IOC_IOC3_WUENSB_EN: any = '1'

/**
Wakeup disabled*/
export const IOC_IOC3_WUENSB_DIS: any = '0'

/**
Edge detect configuration*/
export const IOC_IOC3_EDGEDET: any = '2'

/**
Positive and negative edge detection*/
export const IOC_IOC3_EDGEDET_EDGE_BOTH: any = '3'

/**
Positive edge detection*/
export const IOC_IOC3_EDGEDET_EDGE_POS: any = '2'

/**
Negative edge detection*/
export const IOC_IOC3_EDGEDET_EDGE_NEG: any = '1'

/**
No edge detection*/
export const IOC_IOC3_EDGEDET_EDGE_DIS: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_IOC3_RESERVED15: any = '1'

/**
Pull control. Setting this to value 0x3 disables pull.*/
export const IOC_IOC3_PULLCTL: any = '2'

/**
Pull up enabled*/
export const IOC_IOC3_PULLCTL_PULL_UP: any = '2'

/**
Pull down enabled*/
export const IOC_IOC3_PULLCTL_PULL_DOWN: any = '1'

/**
No pull*/
export const IOC_IOC3_PULLCTL_PULL_DIS: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_IOC3_RESERVED3: any = '10'

/**
Selects usage of DIO3*/
export const IOC_IOC3_PORTCFG: any = '3'

/**
Digital Test Bus function*/
export const IOC_IOC3_PORTCFG_DTB: any = '7'

/**
Analog function*/
export const IOC_IOC3_PORTCFG_ANA: any = '6'

/**
Digital peripheral function-5*/
export const IOC_IOC3_PORTCFG_PFUNC5: any = '5'

/**
Digital peripheral function-4*/
export const IOC_IOC3_PORTCFG_PFUNC4: any = '4'

/**
Digital peripheral function-3*/
export const IOC_IOC3_PORTCFG_PFUNC3: any = '3'

/**
Digital peripheral function-2*/
export const IOC_IOC3_PORTCFG_PFUNC2: any = '2'

/**
Digital peripheral function-1 */
export const IOC_IOC3_PORTCFG_PFUNC1: any = '1'

/**
Base function*/
export const IOC_IOC3_PORTCFG_BASE: any = '0'


// -------- REGISTER IOC4 -------- //

/**
Configuration of DIO4*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_IOC4_RESERVED31: any = '1'

/**
This field controls input hysteresis*/
export const IOC_IOC4_HYSTEN: any = '1'

/**
Input hysteresis enabled*/
export const IOC_IOC4_HYSTEN_EN: any = '1'

/**
Input hysteresis disabled*/
export const IOC_IOC4_HYSTEN_DIS: any = '0'

/**
This field controls the input capability of DIO*/
export const IOC_IOC4_INPEN: any = '1'

/**
Input enabled*/
export const IOC_IOC4_INPEN_EN: any = '1'

/**
Input disabled*/
export const IOC_IOC4_INPEN_DIS: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_IOC4_RESERVED27: any = '2'

/**
IO Mode. Setting this to value 0x6 or 0x7 will default to normal IO behavior.*/
export const IOC_IOC4_IOMODE: any = '3'

/**
Open Source, inverted IO*/
export const IOC_IOC4_IOMODE_OPENS_INV: any = '5'

/**
Open Source, normal IO*/
export const IOC_IOC4_IOMODE_OPENS: any = '4'

/**
Open Drain, inverted IO*/
export const IOC_IOC4_IOMODE_OPEND_INV: any = '3'

/**
Open Drain, normal IO*/
export const IOC_IOC4_IOMODE_OPEND: any = '2'

/**
Inverted IO*/
export const IOC_IOC4_IOMODE_INVERTED: any = '1'

/**
Normal IO*/
export const IOC_IOC4_IOMODE_NORMAL: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_IOC4_RESERVED22: any = '2'

/**
Wakeup configuration from shutdown*/
export const IOC_IOC4_WUCFGSD: any = '2'

/**
Wakeup triggered when pad level is high*/
export const IOC_IOC4_WUCFGSD_WAKE_HIGH: any = '3'

/**
Wakeup triggered when pad level is low*/
export const IOC_IOC4_WUCFGSD_WAKE_LOW: any = '2'

/**
Wakeup disabled*/
export const IOC_IOC4_WUCFGSD_DIS_1: any = '1'

/**
Wakeup disabled*/
export const IOC_IOC4_WUCFGSD_DIS_0: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_IOC4_RESERVED19: any = '1'

/**
Wakeup enable from standby*/
export const IOC_IOC4_WUENSB: any = '1'

/**
Wakeup enabled (effective only if EDGEDET is enabled)*/
export const IOC_IOC4_WUENSB_EN: any = '1'

/**
Wakeup disabled*/
export const IOC_IOC4_WUENSB_DIS: any = '0'

/**
Edge detect configuration*/
export const IOC_IOC4_EDGEDET: any = '2'

/**
Positive and negative edge detection*/
export const IOC_IOC4_EDGEDET_EDGE_BOTH: any = '3'

/**
Positive edge detection*/
export const IOC_IOC4_EDGEDET_EDGE_POS: any = '2'

/**
Negative edge detection*/
export const IOC_IOC4_EDGEDET_EDGE_NEG: any = '1'

/**
No edge detection*/
export const IOC_IOC4_EDGEDET_EDGE_DIS: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_IOC4_RESERVED15: any = '1'

/**
Pull control. Setting this to value 0x3 disables pull.*/
export const IOC_IOC4_PULLCTL: any = '2'

/**
Pull up enabled*/
export const IOC_IOC4_PULLCTL_PULL_UP: any = '2'

/**
Pull down enabled*/
export const IOC_IOC4_PULLCTL_PULL_DOWN: any = '1'

/**
No pull*/
export const IOC_IOC4_PULLCTL_PULL_DIS: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_IOC4_RESERVED3: any = '10'

/**
Selects usage of DIO4*/
export const IOC_IOC4_PORTCFG: any = '3'

/**
Digital Test Bus function*/
export const IOC_IOC4_PORTCFG_DTB: any = '7'

/**
Analog function*/
export const IOC_IOC4_PORTCFG_ANA: any = '6'

/**
Digital peripheral function-5*/
export const IOC_IOC4_PORTCFG_PFUNC5: any = '5'

/**
Digital peripheral function-4*/
export const IOC_IOC4_PORTCFG_PFUNC4: any = '4'

/**
Digital peripheral function-3*/
export const IOC_IOC4_PORTCFG_PFUNC3: any = '3'

/**
Digital peripheral function-2*/
export const IOC_IOC4_PORTCFG_PFUNC2: any = '2'

/**
Digital peripheral function-1 */
export const IOC_IOC4_PORTCFG_PFUNC1: any = '1'

/**
Base function*/
export const IOC_IOC4_PORTCFG_BASE: any = '0'


// -------- REGISTER IOC5 -------- //

/**
Configuration of DIO5*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_IOC5_RESERVED31: any = '1'

/**
This field controls input hysteresis*/
export const IOC_IOC5_HYSTEN: any = '1'

/**
Input hysteresis enabled*/
export const IOC_IOC5_HYSTEN_EN: any = '1'

/**
Input hysteresis disabled*/
export const IOC_IOC5_HYSTEN_DIS: any = '0'

/**
This field controls the input capability of DIO*/
export const IOC_IOC5_INPEN: any = '1'

/**
Input enabled*/
export const IOC_IOC5_INPEN_EN: any = '1'

/**
Input disabled*/
export const IOC_IOC5_INPEN_DIS: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_IOC5_RESERVED27: any = '2'

/**
IO Mode. Setting this to value 0x6 or 0x7 will default to normal IO behavior.*/
export const IOC_IOC5_IOMODE: any = '3'

/**
Open Source, inverted IO*/
export const IOC_IOC5_IOMODE_OPENS_INV: any = '5'

/**
Open Source, normal IO*/
export const IOC_IOC5_IOMODE_OPENS: any = '4'

/**
Open Drain, inverted IO*/
export const IOC_IOC5_IOMODE_OPEND_INV: any = '3'

/**
Open Drain, normal IO*/
export const IOC_IOC5_IOMODE_OPEND: any = '2'

/**
Inverted IO*/
export const IOC_IOC5_IOMODE_INVERTED: any = '1'

/**
Normal IO*/
export const IOC_IOC5_IOMODE_NORMAL: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_IOC5_RESERVED22: any = '2'

/**
Wakeup configuration from shutdown*/
export const IOC_IOC5_WUCFGSD: any = '2'

/**
Wakeup triggered when pad level is high*/
export const IOC_IOC5_WUCFGSD_WAKE_HIGH: any = '3'

/**
Wakeup triggered when pad level is low*/
export const IOC_IOC5_WUCFGSD_WAKE_LOW: any = '2'

/**
Wakeup disabled*/
export const IOC_IOC5_WUCFGSD_DIS_1: any = '1'

/**
Wakeup disabled*/
export const IOC_IOC5_WUCFGSD_DIS_0: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_IOC5_RESERVED19: any = '1'

/**
Wakeup enable from standby*/
export const IOC_IOC5_WUENSB: any = '1'

/**
Wakeup enabled (effective only if EDGEDET is enabled)*/
export const IOC_IOC5_WUENSB_EN: any = '1'

/**
Wakeup disabled*/
export const IOC_IOC5_WUENSB_DIS: any = '0'

/**
Edge detect configuration*/
export const IOC_IOC5_EDGEDET: any = '2'

/**
Positive and negative edge detection*/
export const IOC_IOC5_EDGEDET_EDGE_BOTH: any = '3'

/**
Positive edge detection*/
export const IOC_IOC5_EDGEDET_EDGE_POS: any = '2'

/**
Negative edge detection*/
export const IOC_IOC5_EDGEDET_EDGE_NEG: any = '1'

/**
No edge detection*/
export const IOC_IOC5_EDGEDET_EDGE_DIS: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_IOC5_RESERVED15: any = '1'

/**
Pull control. Setting this to value 0x3 disables pull.*/
export const IOC_IOC5_PULLCTL: any = '2'

/**
Pull up enabled*/
export const IOC_IOC5_PULLCTL_PULL_UP: any = '2'

/**
Pull down enabled*/
export const IOC_IOC5_PULLCTL_PULL_DOWN: any = '1'

/**
No pull*/
export const IOC_IOC5_PULLCTL_PULL_DIS: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_IOC5_RESERVED3: any = '10'

/**
Selects usage of DIO5*/
export const IOC_IOC5_PORTCFG: any = '3'

/**
Digital Test Bus function*/
export const IOC_IOC5_PORTCFG_DTB: any = '7'

/**
Analog function*/
export const IOC_IOC5_PORTCFG_ANA: any = '6'

/**
Digital peripheral function-5*/
export const IOC_IOC5_PORTCFG_PFUNC5: any = '5'

/**
Digital peripheral function-4*/
export const IOC_IOC5_PORTCFG_PFUNC4: any = '4'

/**
Digital peripheral function-3*/
export const IOC_IOC5_PORTCFG_PFUNC3: any = '3'

/**
Digital peripheral function-2*/
export const IOC_IOC5_PORTCFG_PFUNC2: any = '2'

/**
Digital peripheral function-1 */
export const IOC_IOC5_PORTCFG_PFUNC1: any = '1'

/**
Base function*/
export const IOC_IOC5_PORTCFG_BASE: any = '0'


// -------- REGISTER IOC6 -------- //

/**
Configuration of DIO6*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_IOC6_RESERVED31: any = '1'

/**
This field controls input hysteresis*/
export const IOC_IOC6_HYSTEN: any = '1'

/**
Input hysteresis enabled*/
export const IOC_IOC6_HYSTEN_EN: any = '1'

/**
Input hysteresis disabled*/
export const IOC_IOC6_HYSTEN_DIS: any = '0'

/**
This field controls the input capability of DIO*/
export const IOC_IOC6_INPEN: any = '1'

/**
Input enabled*/
export const IOC_IOC6_INPEN_EN: any = '1'

/**
Input disabled*/
export const IOC_IOC6_INPEN_DIS: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_IOC6_RESERVED27: any = '2'

/**
IO Mode. Setting this to value 0x6 or 0x7 will default to normal IO behavior.*/
export const IOC_IOC6_IOMODE: any = '3'

/**
Open Source, inverted IO*/
export const IOC_IOC6_IOMODE_OPENS_INV: any = '5'

/**
Open Source, normal IO*/
export const IOC_IOC6_IOMODE_OPENS: any = '4'

/**
Open Drain, inverted IO*/
export const IOC_IOC6_IOMODE_OPEND_INV: any = '3'

/**
Open Drain, normal IO*/
export const IOC_IOC6_IOMODE_OPEND: any = '2'

/**
Inverted IO*/
export const IOC_IOC6_IOMODE_INVERTED: any = '1'

/**
Normal IO*/
export const IOC_IOC6_IOMODE_NORMAL: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_IOC6_RESERVED22: any = '2'

/**
Wakeup configuration from shutdown*/
export const IOC_IOC6_WUCFGSD: any = '2'

/**
Wakeup triggered when pad level is high*/
export const IOC_IOC6_WUCFGSD_WAKE_HIGH: any = '3'

/**
Wakeup triggered when pad level is low*/
export const IOC_IOC6_WUCFGSD_WAKE_LOW: any = '2'

/**
Wakeup disabled*/
export const IOC_IOC6_WUCFGSD_DIS_1: any = '1'

/**
Wakeup disabled*/
export const IOC_IOC6_WUCFGSD_DIS_0: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_IOC6_RESERVED19: any = '1'

/**
Wakeup enable from standby*/
export const IOC_IOC6_WUENSB: any = '1'

/**
Wakeup enabled (effective only if EDGEDET is enabled)*/
export const IOC_IOC6_WUENSB_EN: any = '1'

/**
Wakeup disabled*/
export const IOC_IOC6_WUENSB_DIS: any = '0'

/**
Edge detect configuration*/
export const IOC_IOC6_EDGEDET: any = '2'

/**
Positive and negative edge detection*/
export const IOC_IOC6_EDGEDET_EDGE_BOTH: any = '3'

/**
Positive edge detection*/
export const IOC_IOC6_EDGEDET_EDGE_POS: any = '2'

/**
Negative edge detection*/
export const IOC_IOC6_EDGEDET_EDGE_NEG: any = '1'

/**
No edge detection*/
export const IOC_IOC6_EDGEDET_EDGE_DIS: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_IOC6_RESERVED15: any = '1'

/**
Pull control. Setting this to value 0x3 disables pull.*/
export const IOC_IOC6_PULLCTL: any = '2'

/**
Pull up enabled*/
export const IOC_IOC6_PULLCTL_PULL_UP: any = '2'

/**
Pull down enabled*/
export const IOC_IOC6_PULLCTL_PULL_DOWN: any = '1'

/**
No pull*/
export const IOC_IOC6_PULLCTL_PULL_DIS: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_IOC6_RESERVED3: any = '10'

/**
Selects usage of DIO6*/
export const IOC_IOC6_PORTCFG: any = '3'

/**
Digital Test Bus function*/
export const IOC_IOC6_PORTCFG_DTB: any = '7'

/**
Analog function*/
export const IOC_IOC6_PORTCFG_ANA: any = '6'

/**
Digital peripheral function-5*/
export const IOC_IOC6_PORTCFG_PFUNC5: any = '5'

/**
Digital peripheral function-4*/
export const IOC_IOC6_PORTCFG_PFUNC4: any = '4'

/**
Digital peripheral function-3*/
export const IOC_IOC6_PORTCFG_PFUNC3: any = '3'

/**
Digital peripheral function-2*/
export const IOC_IOC6_PORTCFG_PFUNC2: any = '2'

/**
Digital peripheral function-1 */
export const IOC_IOC6_PORTCFG_PFUNC1: any = '1'

/**
Base function*/
export const IOC_IOC6_PORTCFG_BASE: any = '0'


// -------- REGISTER IOC7 -------- //

/**
Configuration of DIO7*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_IOC7_RESERVED31: any = '1'

/**
This field controls input hysteresis*/
export const IOC_IOC7_HYSTEN: any = '1'

/**
Input hysteresis enabled*/
export const IOC_IOC7_HYSTEN_EN: any = '1'

/**
Input hysteresis disabled*/
export const IOC_IOC7_HYSTEN_DIS: any = '0'

/**
This field controls the input capability of DIO*/
export const IOC_IOC7_INPEN: any = '1'

/**
Input enabled*/
export const IOC_IOC7_INPEN_EN: any = '1'

/**
Input disabled*/
export const IOC_IOC7_INPEN_DIS: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_IOC7_RESERVED27: any = '2'

/**
IO Mode. Setting this to value 0x6 or 0x7 will default to normal IO behavior.*/
export const IOC_IOC7_IOMODE: any = '3'

/**
Open Source, inverted IO*/
export const IOC_IOC7_IOMODE_OPENS_INV: any = '5'

/**
Open Source, normal IO*/
export const IOC_IOC7_IOMODE_OPENS: any = '4'

/**
Open Drain, inverted IO*/
export const IOC_IOC7_IOMODE_OPEND_INV: any = '3'

/**
Open Drain, normal IO*/
export const IOC_IOC7_IOMODE_OPEND: any = '2'

/**
Inverted IO*/
export const IOC_IOC7_IOMODE_INVERTED: any = '1'

/**
Normal IO*/
export const IOC_IOC7_IOMODE_NORMAL: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_IOC7_RESERVED22: any = '2'

/**
Wakeup configuration from shutdown*/
export const IOC_IOC7_WUCFGSD: any = '2'

/**
Wakeup triggered when pad level is high*/
export const IOC_IOC7_WUCFGSD_WAKE_HIGH: any = '3'

/**
Wakeup triggered when pad level is low*/
export const IOC_IOC7_WUCFGSD_WAKE_LOW: any = '2'

/**
Wakeup disabled*/
export const IOC_IOC7_WUCFGSD_DIS_1: any = '1'

/**
Wakeup disabled*/
export const IOC_IOC7_WUCFGSD_DIS_0: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_IOC7_RESERVED19: any = '1'

/**
Wakeup enable from standby*/
export const IOC_IOC7_WUENSB: any = '1'

/**
Wakeup enabled (effective only if EDGEDET is enabled)*/
export const IOC_IOC7_WUENSB_EN: any = '1'

/**
Wakeup disabled*/
export const IOC_IOC7_WUENSB_DIS: any = '0'

/**
Edge detect configuration*/
export const IOC_IOC7_EDGEDET: any = '2'

/**
Positive and negative edge detection*/
export const IOC_IOC7_EDGEDET_EDGE_BOTH: any = '3'

/**
Positive edge detection*/
export const IOC_IOC7_EDGEDET_EDGE_POS: any = '2'

/**
Negative edge detection*/
export const IOC_IOC7_EDGEDET_EDGE_NEG: any = '1'

/**
No edge detection*/
export const IOC_IOC7_EDGEDET_EDGE_DIS: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_IOC7_RESERVED15: any = '1'

/**
Pull control. Setting this to value 0x3 disables pull.*/
export const IOC_IOC7_PULLCTL: any = '2'

/**
Pull up enabled*/
export const IOC_IOC7_PULLCTL_PULL_UP: any = '2'

/**
Pull down enabled*/
export const IOC_IOC7_PULLCTL_PULL_DOWN: any = '1'

/**
No pull*/
export const IOC_IOC7_PULLCTL_PULL_DIS: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_IOC7_RESERVED3: any = '10'

/**
Selects usage of DIO7*/
export const IOC_IOC7_PORTCFG: any = '3'

/**
Digital Test Bus function*/
export const IOC_IOC7_PORTCFG_DTB: any = '7'

/**
Analog function*/
export const IOC_IOC7_PORTCFG_ANA: any = '6'

/**
Digital peripheral function-5*/
export const IOC_IOC7_PORTCFG_PFUNC5: any = '5'

/**
Digital peripheral function-4*/
export const IOC_IOC7_PORTCFG_PFUNC4: any = '4'

/**
Digital peripheral function-3*/
export const IOC_IOC7_PORTCFG_PFUNC3: any = '3'

/**
Digital peripheral function-2*/
export const IOC_IOC7_PORTCFG_PFUNC2: any = '2'

/**
Digital peripheral function-1 */
export const IOC_IOC7_PORTCFG_PFUNC1: any = '1'

/**
Base function*/
export const IOC_IOC7_PORTCFG_BASE: any = '0'


// -------- REGISTER IOC8 -------- //

/**
Configuration of DIO8*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_IOC8_RESERVED31: any = '1'

/**
This field controls input hysteresis*/
export const IOC_IOC8_HYSTEN: any = '1'

/**
Input hysteresis enabled*/
export const IOC_IOC8_HYSTEN_EN: any = '1'

/**
Input hysteresis disabled*/
export const IOC_IOC8_HYSTEN_DIS: any = '0'

/**
This field controls the input capability of DIO*/
export const IOC_IOC8_INPEN: any = '1'

/**
Input enabled*/
export const IOC_IOC8_INPEN_EN: any = '1'

/**
Input disabled*/
export const IOC_IOC8_INPEN_DIS: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_IOC8_RESERVED27: any = '2'

/**
IO Mode. Setting this to value 0x6 or 0x7 will default to normal IO behavior.*/
export const IOC_IOC8_IOMODE: any = '3'

/**
Open Source, inverted IO*/
export const IOC_IOC8_IOMODE_OPENS_INV: any = '5'

/**
Open Source, normal IO*/
export const IOC_IOC8_IOMODE_OPENS: any = '4'

/**
Open Drain, inverted IO*/
export const IOC_IOC8_IOMODE_OPEND_INV: any = '3'

/**
Open Drain, normal IO*/
export const IOC_IOC8_IOMODE_OPEND: any = '2'

/**
Inverted IO*/
export const IOC_IOC8_IOMODE_INVERTED: any = '1'

/**
Normal IO*/
export const IOC_IOC8_IOMODE_NORMAL: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_IOC8_RESERVED22: any = '2'

/**
Wakeup configuration from shutdown*/
export const IOC_IOC8_WUCFGSD: any = '2'

/**
Wakeup triggered when pad level is high*/
export const IOC_IOC8_WUCFGSD_WAKE_HIGH: any = '3'

/**
Wakeup triggered when pad level is low*/
export const IOC_IOC8_WUCFGSD_WAKE_LOW: any = '2'

/**
Wakeup disabled*/
export const IOC_IOC8_WUCFGSD_DIS_1: any = '1'

/**
Wakeup disabled*/
export const IOC_IOC8_WUCFGSD_DIS_0: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_IOC8_RESERVED19: any = '1'

/**
Wakeup enable from standby*/
export const IOC_IOC8_WUENSB: any = '1'

/**
Wakeup enabled (effective only if EDGEDET is enabled)*/
export const IOC_IOC8_WUENSB_EN: any = '1'

/**
Wakeup disabled*/
export const IOC_IOC8_WUENSB_DIS: any = '0'

/**
Edge detect configuration*/
export const IOC_IOC8_EDGEDET: any = '2'

/**
Positive and negative edge detection*/
export const IOC_IOC8_EDGEDET_EDGE_BOTH: any = '3'

/**
Positive edge detection*/
export const IOC_IOC8_EDGEDET_EDGE_POS: any = '2'

/**
Negative edge detection*/
export const IOC_IOC8_EDGEDET_EDGE_NEG: any = '1'

/**
No edge detection*/
export const IOC_IOC8_EDGEDET_EDGE_DIS: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_IOC8_RESERVED15: any = '1'

/**
Pull control. Setting this to value 0x3 disables pull.*/
export const IOC_IOC8_PULLCTL: any = '2'

/**
Pull up enabled*/
export const IOC_IOC8_PULLCTL_PULL_UP: any = '2'

/**
Pull down enabled*/
export const IOC_IOC8_PULLCTL_PULL_DOWN: any = '1'

/**
No pull*/
export const IOC_IOC8_PULLCTL_PULL_DIS: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_IOC8_RESERVED3: any = '10'

/**
Selects usage of DIO8*/
export const IOC_IOC8_PORTCFG: any = '3'

/**
Digital Test Bus function*/
export const IOC_IOC8_PORTCFG_DTB: any = '7'

/**
Analog function*/
export const IOC_IOC8_PORTCFG_ANA: any = '6'

/**
Digital peripheral function-5*/
export const IOC_IOC8_PORTCFG_PFUNC5: any = '5'

/**
Digital peripheral function-4*/
export const IOC_IOC8_PORTCFG_PFUNC4: any = '4'

/**
Digital peripheral function-3*/
export const IOC_IOC8_PORTCFG_PFUNC3: any = '3'

/**
Digital peripheral function-2*/
export const IOC_IOC8_PORTCFG_PFUNC2: any = '2'

/**
Digital peripheral function-1 */
export const IOC_IOC8_PORTCFG_PFUNC1: any = '1'

/**
Base function*/
export const IOC_IOC8_PORTCFG_BASE: any = '0'


// -------- REGISTER IOC9 -------- //

/**
Configuration of DIO9*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_IOC9_RESERVED31: any = '1'

/**
This field controls input hysteresis*/
export const IOC_IOC9_HYSTEN: any = '1'

/**
Input hysteresis enabled*/
export const IOC_IOC9_HYSTEN_EN: any = '1'

/**
Input hysteresis disabled*/
export const IOC_IOC9_HYSTEN_DIS: any = '0'

/**
This field controls the input capability of DIO*/
export const IOC_IOC9_INPEN: any = '1'

/**
Input enabled*/
export const IOC_IOC9_INPEN_EN: any = '1'

/**
Input disabled*/
export const IOC_IOC9_INPEN_DIS: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_IOC9_RESERVED27: any = '2'

/**
IO Mode. Setting this to value 0x6 or 0x7 will default to normal IO behavior.*/
export const IOC_IOC9_IOMODE: any = '3'

/**
Open Source, inverted IO*/
export const IOC_IOC9_IOMODE_OPENS_INV: any = '5'

/**
Open Source, normal IO*/
export const IOC_IOC9_IOMODE_OPENS: any = '4'

/**
Open Drain, inverted IO*/
export const IOC_IOC9_IOMODE_OPEND_INV: any = '3'

/**
Open Drain, normal IO*/
export const IOC_IOC9_IOMODE_OPEND: any = '2'

/**
Inverted IO*/
export const IOC_IOC9_IOMODE_INVERTED: any = '1'

/**
Normal IO*/
export const IOC_IOC9_IOMODE_NORMAL: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_IOC9_RESERVED22: any = '2'

/**
Wakeup configuration from shutdown*/
export const IOC_IOC9_WUCFGSD: any = '2'

/**
Wakeup triggered when pad level is high*/
export const IOC_IOC9_WUCFGSD_WAKE_HIGH: any = '3'

/**
Wakeup triggered when pad level is low*/
export const IOC_IOC9_WUCFGSD_WAKE_LOW: any = '2'

/**
Wakeup disabled*/
export const IOC_IOC9_WUCFGSD_DIS_1: any = '1'

/**
Wakeup disabled*/
export const IOC_IOC9_WUCFGSD_DIS_0: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_IOC9_RESERVED19: any = '1'

/**
Wakeup enable from standby*/
export const IOC_IOC9_WUENSB: any = '1'

/**
Wakeup enabled (effective only if EDGEDET is enabled)*/
export const IOC_IOC9_WUENSB_EN: any = '1'

/**
Wakeup disabled*/
export const IOC_IOC9_WUENSB_DIS: any = '0'

/**
Edge detect configuration*/
export const IOC_IOC9_EDGEDET: any = '2'

/**
Positive and negative edge detection*/
export const IOC_IOC9_EDGEDET_EDGE_BOTH: any = '3'

/**
Positive edge detection*/
export const IOC_IOC9_EDGEDET_EDGE_POS: any = '2'

/**
Negative edge detection*/
export const IOC_IOC9_EDGEDET_EDGE_NEG: any = '1'

/**
No edge detection*/
export const IOC_IOC9_EDGEDET_EDGE_DIS: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_IOC9_RESERVED15: any = '1'

/**
Pull control. Setting this to value 0x3 disables pull.*/
export const IOC_IOC9_PULLCTL: any = '2'

/**
Pull up enabled*/
export const IOC_IOC9_PULLCTL_PULL_UP: any = '2'

/**
Pull down enabled*/
export const IOC_IOC9_PULLCTL_PULL_DOWN: any = '1'

/**
No pull*/
export const IOC_IOC9_PULLCTL_PULL_DIS: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_IOC9_RESERVED3: any = '10'

/**
Selects usage of DIO9*/
export const IOC_IOC9_PORTCFG: any = '3'

/**
Digital Test Bus function*/
export const IOC_IOC9_PORTCFG_DTB: any = '7'

/**
Analog function*/
export const IOC_IOC9_PORTCFG_ANA: any = '6'

/**
Digital peripheral function-5*/
export const IOC_IOC9_PORTCFG_PFUNC5: any = '5'

/**
Digital peripheral function-4*/
export const IOC_IOC9_PORTCFG_PFUNC4: any = '4'

/**
Digital peripheral function-3*/
export const IOC_IOC9_PORTCFG_PFUNC3: any = '3'

/**
Digital peripheral function-2*/
export const IOC_IOC9_PORTCFG_PFUNC2: any = '2'

/**
Digital peripheral function-1 */
export const IOC_IOC9_PORTCFG_PFUNC1: any = '1'

/**
Base function*/
export const IOC_IOC9_PORTCFG_BASE: any = '0'


// -------- REGISTER IOC10 -------- //

/**
Configuration of DIO10*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_IOC10_RESERVED31: any = '1'

/**
This field controls input hysteresis*/
export const IOC_IOC10_HYSTEN: any = '1'

/**
Input hysteresis enabled*/
export const IOC_IOC10_HYSTEN_EN: any = '1'

/**
Input hysteresis disabled*/
export const IOC_IOC10_HYSTEN_DIS: any = '0'

/**
This field controls the input capability of DIO*/
export const IOC_IOC10_INPEN: any = '1'

/**
Input enabled*/
export const IOC_IOC10_INPEN_EN: any = '1'

/**
Input disabled*/
export const IOC_IOC10_INPEN_DIS: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_IOC10_RESERVED27: any = '2'

/**
IO Mode. Setting this to value 0x6 or 0x7 will default to normal IO behavior.*/
export const IOC_IOC10_IOMODE: any = '3'

/**
Open Source, inverted IO*/
export const IOC_IOC10_IOMODE_OPENS_INV: any = '5'

/**
Open Source, normal IO*/
export const IOC_IOC10_IOMODE_OPENS: any = '4'

/**
Open Drain, inverted IO*/
export const IOC_IOC10_IOMODE_OPEND_INV: any = '3'

/**
Open Drain, normal IO*/
export const IOC_IOC10_IOMODE_OPEND: any = '2'

/**
Inverted IO*/
export const IOC_IOC10_IOMODE_INVERTED: any = '1'

/**
Normal IO*/
export const IOC_IOC10_IOMODE_NORMAL: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_IOC10_RESERVED22: any = '2'

/**
Wakeup configuration from shutdown*/
export const IOC_IOC10_WUCFGSD: any = '2'

/**
Wakeup triggered when pad level is high*/
export const IOC_IOC10_WUCFGSD_WAKE_HIGH: any = '3'

/**
Wakeup triggered when pad level is low*/
export const IOC_IOC10_WUCFGSD_WAKE_LOW: any = '2'

/**
Wakeup disabled*/
export const IOC_IOC10_WUCFGSD_DIS_1: any = '1'

/**
Wakeup disabled*/
export const IOC_IOC10_WUCFGSD_DIS_0: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_IOC10_RESERVED19: any = '1'

/**
Wakeup enable from standby*/
export const IOC_IOC10_WUENSB: any = '1'

/**
Wakeup enabled (effective only if EDGEDET is enabled)*/
export const IOC_IOC10_WUENSB_EN: any = '1'

/**
Wakeup disabled*/
export const IOC_IOC10_WUENSB_DIS: any = '0'

/**
Edge detect configuration*/
export const IOC_IOC10_EDGEDET: any = '2'

/**
Positive and negative edge detection*/
export const IOC_IOC10_EDGEDET_EDGE_BOTH: any = '3'

/**
Positive edge detection*/
export const IOC_IOC10_EDGEDET_EDGE_POS: any = '2'

/**
Negative edge detection*/
export const IOC_IOC10_EDGEDET_EDGE_NEG: any = '1'

/**
No edge detection*/
export const IOC_IOC10_EDGEDET_EDGE_DIS: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_IOC10_RESERVED15: any = '1'

/**
Pull control. Setting this to value 0x3 disables pull.*/
export const IOC_IOC10_PULLCTL: any = '2'

/**
Pull up enabled*/
export const IOC_IOC10_PULLCTL_PULL_UP: any = '2'

/**
Pull down enabled*/
export const IOC_IOC10_PULLCTL_PULL_DOWN: any = '1'

/**
No pull*/
export const IOC_IOC10_PULLCTL_PULL_DIS: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_IOC10_RESERVED3: any = '10'

/**
Selects usage of DIO10*/
export const IOC_IOC10_PORTCFG: any = '3'

/**
Digital Test Bus function*/
export const IOC_IOC10_PORTCFG_DTB: any = '7'

/**
Analog function*/
export const IOC_IOC10_PORTCFG_ANA: any = '6'

/**
Digital peripheral function-5*/
export const IOC_IOC10_PORTCFG_PFUNC5: any = '5'

/**
Digital peripheral function-4*/
export const IOC_IOC10_PORTCFG_PFUNC4: any = '4'

/**
Digital peripheral function-3*/
export const IOC_IOC10_PORTCFG_PFUNC3: any = '3'

/**
Digital peripheral function-2*/
export const IOC_IOC10_PORTCFG_PFUNC2: any = '2'

/**
Digital peripheral function-1 */
export const IOC_IOC10_PORTCFG_PFUNC1: any = '1'

/**
Base function*/
export const IOC_IOC10_PORTCFG_BASE: any = '0'


// -------- REGISTER IOC11 -------- //

/**
Configuration of DIO11*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_IOC11_RESERVED31: any = '1'

/**
This field controls input hysteresis*/
export const IOC_IOC11_HYSTEN: any = '1'

/**
Input hysteresis enabled*/
export const IOC_IOC11_HYSTEN_EN: any = '1'

/**
Input hysteresis disabled*/
export const IOC_IOC11_HYSTEN_DIS: any = '0'

/**
This field controls the input capability of DIO*/
export const IOC_IOC11_INPEN: any = '1'

/**
Input enabled*/
export const IOC_IOC11_INPEN_EN: any = '1'

/**
Input disabled*/
export const IOC_IOC11_INPEN_DIS: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_IOC11_RESERVED27: any = '2'

/**
IO Mode. Setting this to value 0x6 or 0x7 will default to normal IO behavior.*/
export const IOC_IOC11_IOMODE: any = '3'

/**
Open Source, inverted IO*/
export const IOC_IOC11_IOMODE_OPENS_INV: any = '5'

/**
Open Source, normal IO*/
export const IOC_IOC11_IOMODE_OPENS: any = '4'

/**
Open Drain, inverted IO*/
export const IOC_IOC11_IOMODE_OPEND_INV: any = '3'

/**
Open Drain, normal IO*/
export const IOC_IOC11_IOMODE_OPEND: any = '2'

/**
Inverted IO*/
export const IOC_IOC11_IOMODE_INVERTED: any = '1'

/**
Normal IO*/
export const IOC_IOC11_IOMODE_NORMAL: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_IOC11_RESERVED22: any = '2'

/**
Wakeup configuration from shutdown*/
export const IOC_IOC11_WUCFGSD: any = '2'

/**
Wakeup triggered when pad level is high*/
export const IOC_IOC11_WUCFGSD_WAKE_HIGH: any = '3'

/**
Wakeup triggered when pad level is low*/
export const IOC_IOC11_WUCFGSD_WAKE_LOW: any = '2'

/**
Wakeup disabled*/
export const IOC_IOC11_WUCFGSD_DIS_1: any = '1'

/**
Wakeup disabled*/
export const IOC_IOC11_WUCFGSD_DIS_0: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_IOC11_RESERVED19: any = '1'

/**
Wakeup enable from standby*/
export const IOC_IOC11_WUENSB: any = '1'

/**
Wakeup enabled (effective only if EDGEDET is enabled)*/
export const IOC_IOC11_WUENSB_EN: any = '1'

/**
Wakeup disabled*/
export const IOC_IOC11_WUENSB_DIS: any = '0'

/**
Edge detect configuration*/
export const IOC_IOC11_EDGEDET: any = '2'

/**
Positive and negative edge detection*/
export const IOC_IOC11_EDGEDET_EDGE_BOTH: any = '3'

/**
Positive edge detection*/
export const IOC_IOC11_EDGEDET_EDGE_POS: any = '2'

/**
Negative edge detection*/
export const IOC_IOC11_EDGEDET_EDGE_NEG: any = '1'

/**
No edge detection*/
export const IOC_IOC11_EDGEDET_EDGE_DIS: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_IOC11_RESERVED15: any = '1'

/**
Pull control. Setting this to value 0x3 disables pull.*/
export const IOC_IOC11_PULLCTL: any = '2'

/**
Pull up enabled*/
export const IOC_IOC11_PULLCTL_PULL_UP: any = '2'

/**
Pull down enabled*/
export const IOC_IOC11_PULLCTL_PULL_DOWN: any = '1'

/**
No pull*/
export const IOC_IOC11_PULLCTL_PULL_DIS: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_IOC11_RESERVED3: any = '10'

/**
Selects usage of DIO11*/
export const IOC_IOC11_PORTCFG: any = '3'

/**
Digital Test Bus function*/
export const IOC_IOC11_PORTCFG_DTB: any = '7'

/**
Analog function*/
export const IOC_IOC11_PORTCFG_ANA: any = '6'

/**
Digital peripheral function-5*/
export const IOC_IOC11_PORTCFG_PFUNC5: any = '5'

/**
Digital peripheral function-4*/
export const IOC_IOC11_PORTCFG_PFUNC4: any = '4'

/**
Digital peripheral function-3*/
export const IOC_IOC11_PORTCFG_PFUNC3: any = '3'

/**
Digital peripheral function-2*/
export const IOC_IOC11_PORTCFG_PFUNC2: any = '2'

/**
Digital peripheral function-1 */
export const IOC_IOC11_PORTCFG_PFUNC1: any = '1'

/**
Base function*/
export const IOC_IOC11_PORTCFG_BASE: any = '0'


// -------- REGISTER IOC12 -------- //

/**
Configuration of DIO12*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_IOC12_RESERVED31: any = '1'

/**
This field controls input hysteresis*/
export const IOC_IOC12_HYSTEN: any = '1'

/**
Input hysteresis enabled*/
export const IOC_IOC12_HYSTEN_EN: any = '1'

/**
Input hysteresis disabled*/
export const IOC_IOC12_HYSTEN_DIS: any = '0'

/**
This field controls the input capability of DIO*/
export const IOC_IOC12_INPEN: any = '1'

/**
Input enabled*/
export const IOC_IOC12_INPEN_EN: any = '1'

/**
Input disabled*/
export const IOC_IOC12_INPEN_DIS: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_IOC12_RESERVED27: any = '2'

/**
IO Mode. Setting this to value 0x6 or 0x7 will default to normal IO behavior.*/
export const IOC_IOC12_IOMODE: any = '3'

/**
Open Source, inverted IO*/
export const IOC_IOC12_IOMODE_OPENS_INV: any = '5'

/**
Open Source, normal IO*/
export const IOC_IOC12_IOMODE_OPENS: any = '4'

/**
Open Drain, inverted IO*/
export const IOC_IOC12_IOMODE_OPEND_INV: any = '3'

/**
Open Drain, normal IO*/
export const IOC_IOC12_IOMODE_OPEND: any = '2'

/**
Inverted IO*/
export const IOC_IOC12_IOMODE_INVERTED: any = '1'

/**
Normal IO*/
export const IOC_IOC12_IOMODE_NORMAL: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_IOC12_RESERVED22: any = '2'

/**
Wakeup configuration from shutdown*/
export const IOC_IOC12_WUCFGSD: any = '2'

/**
Wakeup triggered when pad level is high*/
export const IOC_IOC12_WUCFGSD_WAKE_HIGH: any = '3'

/**
Wakeup triggered when pad level is low*/
export const IOC_IOC12_WUCFGSD_WAKE_LOW: any = '2'

/**
Wakeup disabled*/
export const IOC_IOC12_WUCFGSD_DIS_1: any = '1'

/**
Wakeup disabled*/
export const IOC_IOC12_WUCFGSD_DIS_0: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_IOC12_RESERVED19: any = '1'

/**
Wakeup enable from standby*/
export const IOC_IOC12_WUENSB: any = '1'

/**
Wakeup enabled (effective only if EDGEDET is enabled)*/
export const IOC_IOC12_WUENSB_EN: any = '1'

/**
Wakeup disabled*/
export const IOC_IOC12_WUENSB_DIS: any = '0'

/**
Edge detect configuration*/
export const IOC_IOC12_EDGEDET: any = '2'

/**
Positive and negative edge detection*/
export const IOC_IOC12_EDGEDET_EDGE_BOTH: any = '3'

/**
Positive edge detection*/
export const IOC_IOC12_EDGEDET_EDGE_POS: any = '2'

/**
Negative edge detection*/
export const IOC_IOC12_EDGEDET_EDGE_NEG: any = '1'

/**
No edge detection*/
export const IOC_IOC12_EDGEDET_EDGE_DIS: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_IOC12_RESERVED15: any = '1'

/**
Pull control. Setting this to value 0x3 disables pull.*/
export const IOC_IOC12_PULLCTL: any = '2'

/**
Pull up enabled*/
export const IOC_IOC12_PULLCTL_PULL_UP: any = '2'

/**
Pull down enabled*/
export const IOC_IOC12_PULLCTL_PULL_DOWN: any = '1'

/**
No pull*/
export const IOC_IOC12_PULLCTL_PULL_DIS: any = '0'

/**
Slew rate configuration*/
export const IOC_IOC12_SLEWRED: any = '1'

/**
Reduced slew rate*/
export const IOC_IOC12_SLEWRED_REDUCED: any = '1'

/**
Normal slew rate*/
export const IOC_IOC12_SLEWRED_NORMAL: any = '0'

/**
Output current configuration. Writing value 0x3 defaults to 2mA current setting.*/
export const IOC_IOC12_IOCURR: any = '2'

/**
8mA*/
export const IOC_IOC12_IOCURR_CUR_8MA: any = '2'

/**
4mA*/
export const IOC_IOC12_IOCURR_CUR_4MA: any = '1'

/**
2mA*/
export const IOC_IOC12_IOCURR_CUR_2MA: any = '0'

/**
Drive strength configuration*/
export const IOC_IOC12_IOSTR: any = '2'

/**
Maximum drive strength*/
export const IOC_IOC12_IOSTR_MAX: any = '3'

/**
Medium drive strength*/
export const IOC_IOC12_IOSTR_MEDIUM: any = '2'

/**
Minimum drive stregnth*/
export const IOC_IOC12_IOSTR_MIN: any = '1'

/**
Automatic drive strength adjustment*/
export const IOC_IOC12_IOSTR_AUTO: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_IOC12_RESERVED3: any = '5'

/**
Selects usage of DIO12*/
export const IOC_IOC12_PORTCFG: any = '3'

/**
Digital Test Bus function*/
export const IOC_IOC12_PORTCFG_DTB: any = '7'

/**
Analog function*/
export const IOC_IOC12_PORTCFG_ANA: any = '6'

/**
Digital peripheral function-5*/
export const IOC_IOC12_PORTCFG_PFUNC5: any = '5'

/**
Digital peripheral function-4*/
export const IOC_IOC12_PORTCFG_PFUNC4: any = '4'

/**
Digital peripheral function-3*/
export const IOC_IOC12_PORTCFG_PFUNC3: any = '3'

/**
Digital peripheral function-2*/
export const IOC_IOC12_PORTCFG_PFUNC2: any = '2'

/**
Digital peripheral function-1 */
export const IOC_IOC12_PORTCFG_PFUNC1: any = '1'

/**
Base function*/
export const IOC_IOC12_PORTCFG_BASE: any = '0'


// -------- REGISTER IOC13 -------- //

/**
Configuration of DIO13*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_IOC13_RESERVED31: any = '1'

/**
This field controls input hysteresis*/
export const IOC_IOC13_HYSTEN: any = '1'

/**
Input hysteresis enabled*/
export const IOC_IOC13_HYSTEN_EN: any = '1'

/**
Input hysteresis disabled*/
export const IOC_IOC13_HYSTEN_DIS: any = '0'

/**
This field controls the input capability of DIO*/
export const IOC_IOC13_INPEN: any = '1'

/**
Input enabled*/
export const IOC_IOC13_INPEN_EN: any = '1'

/**
Input disabled*/
export const IOC_IOC13_INPEN_DIS: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_IOC13_RESERVED27: any = '2'

/**
IO Mode. Setting this to value 0x6 or 0x7 will default to normal IO behavior.*/
export const IOC_IOC13_IOMODE: any = '3'

/**
Open Source, inverted IO*/
export const IOC_IOC13_IOMODE_OPENS_INV: any = '5'

/**
Open Source, normal IO*/
export const IOC_IOC13_IOMODE_OPENS: any = '4'

/**
Open Drain, inverted IO*/
export const IOC_IOC13_IOMODE_OPEND_INV: any = '3'

/**
Open Drain, normal IO*/
export const IOC_IOC13_IOMODE_OPEND: any = '2'

/**
Inverted IO*/
export const IOC_IOC13_IOMODE_INVERTED: any = '1'

/**
Normal IO*/
export const IOC_IOC13_IOMODE_NORMAL: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_IOC13_RESERVED22: any = '2'

/**
Wakeup configuration from shutdown*/
export const IOC_IOC13_WUCFGSD: any = '2'

/**
Wakeup triggered when pad level is high*/
export const IOC_IOC13_WUCFGSD_WAKE_HIGH: any = '3'

/**
Wakeup triggered when pad level is low*/
export const IOC_IOC13_WUCFGSD_WAKE_LOW: any = '2'

/**
Wakeup disabled*/
export const IOC_IOC13_WUCFGSD_DIS_1: any = '1'

/**
Wakeup disabled*/
export const IOC_IOC13_WUCFGSD_DIS_0: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_IOC13_RESERVED19: any = '1'

/**
Wakeup enable from standby*/
export const IOC_IOC13_WUENSB: any = '1'

/**
Wakeup enabled (effective only if EDGEDET is enabled)*/
export const IOC_IOC13_WUENSB_EN: any = '1'

/**
Wakeup disabled*/
export const IOC_IOC13_WUENSB_DIS: any = '0'

/**
Edge detect configuration*/
export const IOC_IOC13_EDGEDET: any = '2'

/**
Positive and negative edge detection*/
export const IOC_IOC13_EDGEDET_EDGE_BOTH: any = '3'

/**
Positive edge detection*/
export const IOC_IOC13_EDGEDET_EDGE_POS: any = '2'

/**
Negative edge detection*/
export const IOC_IOC13_EDGEDET_EDGE_NEG: any = '1'

/**
No edge detection*/
export const IOC_IOC13_EDGEDET_EDGE_DIS: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_IOC13_RESERVED15: any = '1'

/**
Pull control. Setting this to value 0x3 disables pull.*/
export const IOC_IOC13_PULLCTL: any = '2'

/**
Pull up enabled*/
export const IOC_IOC13_PULLCTL_PULL_UP: any = '2'

/**
Pull down enabled*/
export const IOC_IOC13_PULLCTL_PULL_DOWN: any = '1'

/**
No pull*/
export const IOC_IOC13_PULLCTL_PULL_DIS: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_IOC13_RESERVED3: any = '10'

/**
Selects usage of DIO13*/
export const IOC_IOC13_PORTCFG: any = '3'

/**
Digital Test Bus function*/
export const IOC_IOC13_PORTCFG_DTB: any = '7'

/**
Analog function*/
export const IOC_IOC13_PORTCFG_ANA: any = '6'

/**
Digital peripheral function-5*/
export const IOC_IOC13_PORTCFG_PFUNC5: any = '5'

/**
Digital peripheral function-4*/
export const IOC_IOC13_PORTCFG_PFUNC4: any = '4'

/**
Digital peripheral function-3*/
export const IOC_IOC13_PORTCFG_PFUNC3: any = '3'

/**
Digital peripheral function-2*/
export const IOC_IOC13_PORTCFG_PFUNC2: any = '2'

/**
Digital peripheral function-1 */
export const IOC_IOC13_PORTCFG_PFUNC1: any = '1'

/**
Base function*/
export const IOC_IOC13_PORTCFG_BASE: any = '0'


// -------- REGISTER IOC14 -------- //

/**
Configuration of DIO14*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_IOC14_RESERVED31: any = '1'

/**
This field controls input hysteresis*/
export const IOC_IOC14_HYSTEN: any = '1'

/**
Input hysteresis enabled*/
export const IOC_IOC14_HYSTEN_EN: any = '1'

/**
Input hysteresis disabled*/
export const IOC_IOC14_HYSTEN_DIS: any = '0'

/**
This field controls the input capability of DIO*/
export const IOC_IOC14_INPEN: any = '1'

/**
Input enabled*/
export const IOC_IOC14_INPEN_EN: any = '1'

/**
Input disabled*/
export const IOC_IOC14_INPEN_DIS: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_IOC14_RESERVED27: any = '2'

/**
IO Mode. Setting this to value 0x6 or 0x7 will default to normal IO behavior.*/
export const IOC_IOC14_IOMODE: any = '3'

/**
Open Source, inverted IO*/
export const IOC_IOC14_IOMODE_OPENS_INV: any = '5'

/**
Open Source, normal IO*/
export const IOC_IOC14_IOMODE_OPENS: any = '4'

/**
Open Drain, inverted IO*/
export const IOC_IOC14_IOMODE_OPEND_INV: any = '3'

/**
Open Drain, normal IO*/
export const IOC_IOC14_IOMODE_OPEND: any = '2'

/**
Inverted IO*/
export const IOC_IOC14_IOMODE_INVERTED: any = '1'

/**
Normal IO*/
export const IOC_IOC14_IOMODE_NORMAL: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_IOC14_RESERVED22: any = '2'

/**
Wakeup configuration from shutdown*/
export const IOC_IOC14_WUCFGSD: any = '2'

/**
Wakeup triggered when pad level is high*/
export const IOC_IOC14_WUCFGSD_WAKE_HIGH: any = '3'

/**
Wakeup triggered when pad level is low*/
export const IOC_IOC14_WUCFGSD_WAKE_LOW: any = '2'

/**
Wakeup disabled*/
export const IOC_IOC14_WUCFGSD_DIS_1: any = '1'

/**
Wakeup disabled*/
export const IOC_IOC14_WUCFGSD_DIS_0: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_IOC14_RESERVED19: any = '1'

/**
Wakeup enable from standby*/
export const IOC_IOC14_WUENSB: any = '1'

/**
Wakeup enabled (effective only if EDGEDET is enabled)*/
export const IOC_IOC14_WUENSB_EN: any = '1'

/**
Wakeup disabled*/
export const IOC_IOC14_WUENSB_DIS: any = '0'

/**
Edge detect configuration*/
export const IOC_IOC14_EDGEDET: any = '2'

/**
Positive and negative edge detection*/
export const IOC_IOC14_EDGEDET_EDGE_BOTH: any = '3'

/**
Positive edge detection*/
export const IOC_IOC14_EDGEDET_EDGE_POS: any = '2'

/**
Negative edge detection*/
export const IOC_IOC14_EDGEDET_EDGE_NEG: any = '1'

/**
No edge detection*/
export const IOC_IOC14_EDGEDET_EDGE_DIS: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_IOC14_RESERVED15: any = '1'

/**
Pull control. Setting this to value 0x3 disables pull.*/
export const IOC_IOC14_PULLCTL: any = '2'

/**
Pull up enabled*/
export const IOC_IOC14_PULLCTL_PULL_UP: any = '2'

/**
Pull down enabled*/
export const IOC_IOC14_PULLCTL_PULL_DOWN: any = '1'

/**
No pull*/
export const IOC_IOC14_PULLCTL_PULL_DIS: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_IOC14_RESERVED3: any = '10'

/**
Selects usage of DIO14*/
export const IOC_IOC14_PORTCFG: any = '3'

/**
Digital Test Bus function*/
export const IOC_IOC14_PORTCFG_DTB: any = '7'

/**
Analog function*/
export const IOC_IOC14_PORTCFG_ANA: any = '6'

/**
Digital peripheral function-5*/
export const IOC_IOC14_PORTCFG_PFUNC5: any = '5'

/**
Digital peripheral function-4*/
export const IOC_IOC14_PORTCFG_PFUNC4: any = '4'

/**
Digital peripheral function-3*/
export const IOC_IOC14_PORTCFG_PFUNC3: any = '3'

/**
Digital peripheral function-2*/
export const IOC_IOC14_PORTCFG_PFUNC2: any = '2'

/**
Digital peripheral function-1 */
export const IOC_IOC14_PORTCFG_PFUNC1: any = '1'

/**
Base function*/
export const IOC_IOC14_PORTCFG_BASE: any = '0'


// -------- REGISTER IOC15 -------- //

/**
Configuration of DIO15*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_IOC15_RESERVED31: any = '1'

/**
This field controls input hysteresis*/
export const IOC_IOC15_HYSTEN: any = '1'

/**
Input hysteresis enabled*/
export const IOC_IOC15_HYSTEN_EN: any = '1'

/**
Input hysteresis disabled*/
export const IOC_IOC15_HYSTEN_DIS: any = '0'

/**
This field controls the input capability of DIO*/
export const IOC_IOC15_INPEN: any = '1'

/**
Input enabled*/
export const IOC_IOC15_INPEN_EN: any = '1'

/**
Input disabled*/
export const IOC_IOC15_INPEN_DIS: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_IOC15_RESERVED27: any = '2'

/**
IO Mode. Setting this to value 0x6 or 0x7 will default to normal IO behavior.*/
export const IOC_IOC15_IOMODE: any = '3'

/**
Open Source, inverted IO*/
export const IOC_IOC15_IOMODE_OPENS_INV: any = '5'

/**
Open Source, normal IO*/
export const IOC_IOC15_IOMODE_OPENS: any = '4'

/**
Open Drain, inverted IO*/
export const IOC_IOC15_IOMODE_OPEND_INV: any = '3'

/**
Open Drain, normal IO*/
export const IOC_IOC15_IOMODE_OPEND: any = '2'

/**
Inverted IO*/
export const IOC_IOC15_IOMODE_INVERTED: any = '1'

/**
Normal IO*/
export const IOC_IOC15_IOMODE_NORMAL: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_IOC15_RESERVED22: any = '2'

/**
Wakeup configuration from shutdown*/
export const IOC_IOC15_WUCFGSD: any = '2'

/**
Wakeup triggered when pad level is high*/
export const IOC_IOC15_WUCFGSD_WAKE_HIGH: any = '3'

/**
Wakeup triggered when pad level is low*/
export const IOC_IOC15_WUCFGSD_WAKE_LOW: any = '2'

/**
Wakeup disabled*/
export const IOC_IOC15_WUCFGSD_DIS_1: any = '1'

/**
Wakeup disabled*/
export const IOC_IOC15_WUCFGSD_DIS_0: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_IOC15_RESERVED19: any = '1'

/**
Wakeup enable from standby*/
export const IOC_IOC15_WUENSB: any = '1'

/**
Wakeup enabled (effective only if EDGEDET is enabled)*/
export const IOC_IOC15_WUENSB_EN: any = '1'

/**
Wakeup disabled*/
export const IOC_IOC15_WUENSB_DIS: any = '0'

/**
Edge detect configuration*/
export const IOC_IOC15_EDGEDET: any = '2'

/**
Positive and negative edge detection*/
export const IOC_IOC15_EDGEDET_EDGE_BOTH: any = '3'

/**
Positive edge detection*/
export const IOC_IOC15_EDGEDET_EDGE_POS: any = '2'

/**
Negative edge detection*/
export const IOC_IOC15_EDGEDET_EDGE_NEG: any = '1'

/**
No edge detection*/
export const IOC_IOC15_EDGEDET_EDGE_DIS: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_IOC15_RESERVED15: any = '1'

/**
Pull control. Setting this to value 0x3 disables pull.*/
export const IOC_IOC15_PULLCTL: any = '2'

/**
Pull up enabled*/
export const IOC_IOC15_PULLCTL_PULL_UP: any = '2'

/**
Pull down enabled*/
export const IOC_IOC15_PULLCTL_PULL_DOWN: any = '1'

/**
No pull*/
export const IOC_IOC15_PULLCTL_PULL_DIS: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_IOC15_RESERVED3: any = '10'

/**
Selects usage of DIO15*/
export const IOC_IOC15_PORTCFG: any = '3'

/**
Digital Test Bus function*/
export const IOC_IOC15_PORTCFG_DTB: any = '7'

/**
Analog function*/
export const IOC_IOC15_PORTCFG_ANA: any = '6'

/**
Digital peripheral function-5*/
export const IOC_IOC15_PORTCFG_PFUNC5: any = '5'

/**
Digital peripheral function-4*/
export const IOC_IOC15_PORTCFG_PFUNC4: any = '4'

/**
Digital peripheral function-3*/
export const IOC_IOC15_PORTCFG_PFUNC3: any = '3'

/**
Digital peripheral function-2*/
export const IOC_IOC15_PORTCFG_PFUNC2: any = '2'

/**
Digital peripheral function-1 */
export const IOC_IOC15_PORTCFG_PFUNC1: any = '1'

/**
Base function*/
export const IOC_IOC15_PORTCFG_BASE: any = '0'


// -------- REGISTER IOC16 -------- //

/**
Configuration of DIO16*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_IOC16_RESERVED31: any = '1'

/**
This field controls input hysteresis*/
export const IOC_IOC16_HYSTEN: any = '1'

/**
Input hysteresis enabled*/
export const IOC_IOC16_HYSTEN_EN: any = '1'

/**
Input hysteresis disabled*/
export const IOC_IOC16_HYSTEN_DIS: any = '0'

/**
This field controls the input capability of DIO*/
export const IOC_IOC16_INPEN: any = '1'

/**
Input enabled*/
export const IOC_IOC16_INPEN_EN: any = '1'

/**
Input disabled*/
export const IOC_IOC16_INPEN_DIS: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_IOC16_RESERVED27: any = '2'

/**
IO Mode. Setting this to value 0x6 or 0x7 will default to normal IO behavior.*/
export const IOC_IOC16_IOMODE: any = '3'

/**
Open Source, inverted IO*/
export const IOC_IOC16_IOMODE_OPENS_INV: any = '5'

/**
Open Source, normal IO*/
export const IOC_IOC16_IOMODE_OPENS: any = '4'

/**
Open Drain, inverted IO*/
export const IOC_IOC16_IOMODE_OPEND_INV: any = '3'

/**
Open Drain, normal IO*/
export const IOC_IOC16_IOMODE_OPEND: any = '2'

/**
Inverted IO*/
export const IOC_IOC16_IOMODE_INVERTED: any = '1'

/**
Normal IO*/
export const IOC_IOC16_IOMODE_NORMAL: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_IOC16_RESERVED22: any = '2'

/**
Wakeup configuration from shutdown*/
export const IOC_IOC16_WUCFGSD: any = '2'

/**
Wakeup triggered when pad level is high*/
export const IOC_IOC16_WUCFGSD_WAKE_HIGH: any = '3'

/**
Wakeup triggered when pad level is low*/
export const IOC_IOC16_WUCFGSD_WAKE_LOW: any = '2'

/**
Wakeup disabled*/
export const IOC_IOC16_WUCFGSD_DIS_1: any = '1'

/**
Wakeup disabled*/
export const IOC_IOC16_WUCFGSD_DIS_0: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_IOC16_RESERVED19: any = '1'

/**
Wakeup enable from standby*/
export const IOC_IOC16_WUENSB: any = '1'

/**
Wakeup enabled (effective only if EDGEDET is enabled)*/
export const IOC_IOC16_WUENSB_EN: any = '1'

/**
Wakeup disabled*/
export const IOC_IOC16_WUENSB_DIS: any = '0'

/**
Edge detect configuration*/
export const IOC_IOC16_EDGEDET: any = '2'

/**
Positive and negative edge detection*/
export const IOC_IOC16_EDGEDET_EDGE_BOTH: any = '3'

/**
Positive edge detection*/
export const IOC_IOC16_EDGEDET_EDGE_POS: any = '2'

/**
Negative edge detection*/
export const IOC_IOC16_EDGEDET_EDGE_NEG: any = '1'

/**
No edge detection*/
export const IOC_IOC16_EDGEDET_EDGE_DIS: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_IOC16_RESERVED15: any = '1'

/**
Pull control. Setting this to value 0x3 disables pull.*/
export const IOC_IOC16_PULLCTL: any = '2'

/**
Pull up enabled*/
export const IOC_IOC16_PULLCTL_PULL_UP: any = '2'

/**
Pull down enabled*/
export const IOC_IOC16_PULLCTL_PULL_DOWN: any = '1'

/**
No pull*/
export const IOC_IOC16_PULLCTL_PULL_DIS: any = '0'

/**
Slew rate configuration*/
export const IOC_IOC16_SLEWRED: any = '1'

/**
Reduced slew rate*/
export const IOC_IOC16_SLEWRED_REDUCED: any = '1'

/**
Normal slew rate*/
export const IOC_IOC16_SLEWRED_NORMAL: any = '0'

/**
Output current configuration. Writing value 0x3 defaults to 2mA current setting.*/
export const IOC_IOC16_IOCURR: any = '2'

/**
8mA*/
export const IOC_IOC16_IOCURR_CUR_8MA: any = '2'

/**
4mA*/
export const IOC_IOC16_IOCURR_CUR_4MA: any = '1'

/**
2mA*/
export const IOC_IOC16_IOCURR_CUR_2MA: any = '0'

/**
Drive strength configuration*/
export const IOC_IOC16_IOSTR: any = '2'

/**
Maximum drive strength*/
export const IOC_IOC16_IOSTR_MAX: any = '3'

/**
Medium drive strength*/
export const IOC_IOC16_IOSTR_MEDIUM: any = '2'

/**
Minimum drive stregnth*/
export const IOC_IOC16_IOSTR_MIN: any = '1'

/**
Automatic drive strength adjustment*/
export const IOC_IOC16_IOSTR_AUTO: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_IOC16_RESERVED3: any = '5'

/**
Selects usage of DIO16*/
export const IOC_IOC16_PORTCFG: any = '3'

/**
Digital Test Bus function*/
export const IOC_IOC16_PORTCFG_DTB: any = '7'

/**
Analog function*/
export const IOC_IOC16_PORTCFG_ANA: any = '6'

/**
Digital peripheral function-5*/
export const IOC_IOC16_PORTCFG_PFUNC5: any = '5'

/**
Digital peripheral function-4*/
export const IOC_IOC16_PORTCFG_PFUNC4: any = '4'

/**
Digital peripheral function-3*/
export const IOC_IOC16_PORTCFG_PFUNC3: any = '3'

/**
Digital peripheral function-2*/
export const IOC_IOC16_PORTCFG_PFUNC2: any = '2'

/**
Digital peripheral function-1 */
export const IOC_IOC16_PORTCFG_PFUNC1: any = '1'

/**
Base function*/
export const IOC_IOC16_PORTCFG_BASE: any = '0'


// -------- REGISTER IOC17 -------- //

/**
Configuration of DIO17*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_IOC17_RESERVED31: any = '1'

/**
This field controls input hysteresis*/
export const IOC_IOC17_HYSTEN: any = '1'

/**
Input hysteresis enabled*/
export const IOC_IOC17_HYSTEN_EN: any = '1'

/**
Input hysteresis disabled*/
export const IOC_IOC17_HYSTEN_DIS: any = '0'

/**
This field controls the input capability of DIO*/
export const IOC_IOC17_INPEN: any = '1'

/**
Input enabled*/
export const IOC_IOC17_INPEN_EN: any = '1'

/**
Input disabled*/
export const IOC_IOC17_INPEN_DIS: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_IOC17_RESERVED27: any = '2'

/**
IO Mode. Setting this to value 0x6 or 0x7 will default to normal IO behavior.*/
export const IOC_IOC17_IOMODE: any = '3'

/**
Open Source, inverted IO*/
export const IOC_IOC17_IOMODE_OPENS_INV: any = '5'

/**
Open Source, normal IO*/
export const IOC_IOC17_IOMODE_OPENS: any = '4'

/**
Open Drain, inverted IO*/
export const IOC_IOC17_IOMODE_OPEND_INV: any = '3'

/**
Open Drain, normal IO*/
export const IOC_IOC17_IOMODE_OPEND: any = '2'

/**
Inverted IO*/
export const IOC_IOC17_IOMODE_INVERTED: any = '1'

/**
Normal IO*/
export const IOC_IOC17_IOMODE_NORMAL: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_IOC17_RESERVED22: any = '2'

/**
Wakeup configuration from shutdown*/
export const IOC_IOC17_WUCFGSD: any = '2'

/**
Wakeup triggered when pad level is high*/
export const IOC_IOC17_WUCFGSD_WAKE_HIGH: any = '3'

/**
Wakeup triggered when pad level is low*/
export const IOC_IOC17_WUCFGSD_WAKE_LOW: any = '2'

/**
Wakeup disabled*/
export const IOC_IOC17_WUCFGSD_DIS_1: any = '1'

/**
Wakeup disabled*/
export const IOC_IOC17_WUCFGSD_DIS_0: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_IOC17_RESERVED19: any = '1'

/**
Wakeup enable from standby*/
export const IOC_IOC17_WUENSB: any = '1'

/**
Wakeup enabled (effective only if EDGEDET is enabled)*/
export const IOC_IOC17_WUENSB_EN: any = '1'

/**
Wakeup disabled*/
export const IOC_IOC17_WUENSB_DIS: any = '0'

/**
Edge detect configuration*/
export const IOC_IOC17_EDGEDET: any = '2'

/**
Positive and negative edge detection*/
export const IOC_IOC17_EDGEDET_EDGE_BOTH: any = '3'

/**
Positive edge detection*/
export const IOC_IOC17_EDGEDET_EDGE_POS: any = '2'

/**
Negative edge detection*/
export const IOC_IOC17_EDGEDET_EDGE_NEG: any = '1'

/**
No edge detection*/
export const IOC_IOC17_EDGEDET_EDGE_DIS: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_IOC17_RESERVED15: any = '1'

/**
Pull control. Setting this to value 0x3 disables pull.*/
export const IOC_IOC17_PULLCTL: any = '2'

/**
Pull up enabled*/
export const IOC_IOC17_PULLCTL_PULL_UP: any = '2'

/**
Pull down enabled*/
export const IOC_IOC17_PULLCTL_PULL_DOWN: any = '1'

/**
No pull*/
export const IOC_IOC17_PULLCTL_PULL_DIS: any = '0'

/**
Slew rate configuration*/
export const IOC_IOC17_SLEWRED: any = '1'

/**
Reduced slew rate*/
export const IOC_IOC17_SLEWRED_REDUCED: any = '1'

/**
Normal slew rate*/
export const IOC_IOC17_SLEWRED_NORMAL: any = '0'

/**
Output current configuration. Writing value 0x3 defaults to 2mA current setting.*/
export const IOC_IOC17_IOCURR: any = '2'

/**
8mA*/
export const IOC_IOC17_IOCURR_CUR_8MA: any = '2'

/**
4mA*/
export const IOC_IOC17_IOCURR_CUR_4MA: any = '1'

/**
2mA*/
export const IOC_IOC17_IOCURR_CUR_2MA: any = '0'

/**
Drive strength configuration*/
export const IOC_IOC17_IOSTR: any = '2'

/**
Maximum drive strength*/
export const IOC_IOC17_IOSTR_MAX: any = '3'

/**
Medium drive strength*/
export const IOC_IOC17_IOSTR_MEDIUM: any = '2'

/**
Minimum drive stregnth*/
export const IOC_IOC17_IOSTR_MIN: any = '1'

/**
Automatic drive strength adjustment*/
export const IOC_IOC17_IOSTR_AUTO: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_IOC17_RESERVED3: any = '5'

/**
Selects usage of DIO17*/
export const IOC_IOC17_PORTCFG: any = '3'

/**
Digital Test Bus function*/
export const IOC_IOC17_PORTCFG_DTB: any = '7'

/**
Analog function*/
export const IOC_IOC17_PORTCFG_ANA: any = '6'

/**
Digital peripheral function-5*/
export const IOC_IOC17_PORTCFG_PFUNC5: any = '5'

/**
Digital peripheral function-4*/
export const IOC_IOC17_PORTCFG_PFUNC4: any = '4'

/**
Digital peripheral function-3*/
export const IOC_IOC17_PORTCFG_PFUNC3: any = '3'

/**
Digital peripheral function-2*/
export const IOC_IOC17_PORTCFG_PFUNC2: any = '2'

/**
Digital peripheral function-1 */
export const IOC_IOC17_PORTCFG_PFUNC1: any = '1'

/**
Base function*/
export const IOC_IOC17_PORTCFG_BASE: any = '0'


// -------- REGISTER IOC18 -------- //

/**
Configuration of DIO18*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_IOC18_RESERVED31: any = '1'

/**
This field controls input hysteresis*/
export const IOC_IOC18_HYSTEN: any = '1'

/**
Input hysteresis enabled*/
export const IOC_IOC18_HYSTEN_EN: any = '1'

/**
Input hysteresis disabled*/
export const IOC_IOC18_HYSTEN_DIS: any = '0'

/**
This field controls the input capability of DIO*/
export const IOC_IOC18_INPEN: any = '1'

/**
Input enabled*/
export const IOC_IOC18_INPEN_EN: any = '1'

/**
Input disabled*/
export const IOC_IOC18_INPEN_DIS: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_IOC18_RESERVED27: any = '2'

/**
IO Mode. Setting this to value 0x6 or 0x7 will default to normal IO behavior.*/
export const IOC_IOC18_IOMODE: any = '3'

/**
Open Source, inverted IO*/
export const IOC_IOC18_IOMODE_OPENS_INV: any = '5'

/**
Open Source, normal IO*/
export const IOC_IOC18_IOMODE_OPENS: any = '4'

/**
Open Drain, inverted IO*/
export const IOC_IOC18_IOMODE_OPEND_INV: any = '3'

/**
Open Drain, normal IO*/
export const IOC_IOC18_IOMODE_OPEND: any = '2'

/**
Inverted IO*/
export const IOC_IOC18_IOMODE_INVERTED: any = '1'

/**
Normal IO*/
export const IOC_IOC18_IOMODE_NORMAL: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_IOC18_RESERVED22: any = '2'

/**
Wakeup configuration from shutdown*/
export const IOC_IOC18_WUCFGSD: any = '2'

/**
Wakeup triggered when pad level is high*/
export const IOC_IOC18_WUCFGSD_WAKE_HIGH: any = '3'

/**
Wakeup triggered when pad level is low*/
export const IOC_IOC18_WUCFGSD_WAKE_LOW: any = '2'

/**
Wakeup disabled*/
export const IOC_IOC18_WUCFGSD_DIS_1: any = '1'

/**
Wakeup disabled*/
export const IOC_IOC18_WUCFGSD_DIS_0: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_IOC18_RESERVED19: any = '1'

/**
Wakeup enable from standby*/
export const IOC_IOC18_WUENSB: any = '1'

/**
Wakeup enabled (effective only if EDGEDET is enabled)*/
export const IOC_IOC18_WUENSB_EN: any = '1'

/**
Wakeup disabled*/
export const IOC_IOC18_WUENSB_DIS: any = '0'

/**
Edge detect configuration*/
export const IOC_IOC18_EDGEDET: any = '2'

/**
Positive and negative edge detection*/
export const IOC_IOC18_EDGEDET_EDGE_BOTH: any = '3'

/**
Positive edge detection*/
export const IOC_IOC18_EDGEDET_EDGE_POS: any = '2'

/**
Negative edge detection*/
export const IOC_IOC18_EDGEDET_EDGE_NEG: any = '1'

/**
No edge detection*/
export const IOC_IOC18_EDGEDET_EDGE_DIS: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_IOC18_RESERVED15: any = '1'

/**
Pull control. Setting this to value 0x3 disables pull.*/
export const IOC_IOC18_PULLCTL: any = '2'

/**
Pull up enabled*/
export const IOC_IOC18_PULLCTL_PULL_UP: any = '2'

/**
Pull down enabled*/
export const IOC_IOC18_PULLCTL_PULL_DOWN: any = '1'

/**
No pull*/
export const IOC_IOC18_PULLCTL_PULL_DIS: any = '0'

/**
Slew rate configuration*/
export const IOC_IOC18_SLEWRED: any = '1'

/**
Reduced slew rate*/
export const IOC_IOC18_SLEWRED_REDUCED: any = '1'

/**
Normal slew rate*/
export const IOC_IOC18_SLEWRED_NORMAL: any = '0'

/**
Output current configuration. Writing value 0x3 defaults to 2mA current setting.*/
export const IOC_IOC18_IOCURR: any = '2'

/**
8mA*/
export const IOC_IOC18_IOCURR_CUR_8MA: any = '2'

/**
4mA*/
export const IOC_IOC18_IOCURR_CUR_4MA: any = '1'

/**
2mA*/
export const IOC_IOC18_IOCURR_CUR_2MA: any = '0'

/**
Drive strength configuration*/
export const IOC_IOC18_IOSTR: any = '2'

/**
Maximum drive strength*/
export const IOC_IOC18_IOSTR_MAX: any = '3'

/**
Medium drive strength*/
export const IOC_IOC18_IOSTR_MEDIUM: any = '2'

/**
Minimum drive stregnth*/
export const IOC_IOC18_IOSTR_MIN: any = '1'

/**
Automatic drive strength adjustment*/
export const IOC_IOC18_IOSTR_AUTO: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_IOC18_RESERVED3: any = '5'

/**
Selects usage of DIO18*/
export const IOC_IOC18_PORTCFG: any = '3'

/**
Digital Test Bus function*/
export const IOC_IOC18_PORTCFG_DTB: any = '7'

/**
Analog function*/
export const IOC_IOC18_PORTCFG_ANA: any = '6'

/**
Digital peripheral function-5*/
export const IOC_IOC18_PORTCFG_PFUNC5: any = '5'

/**
Digital peripheral function-4*/
export const IOC_IOC18_PORTCFG_PFUNC4: any = '4'

/**
Digital peripheral function-3*/
export const IOC_IOC18_PORTCFG_PFUNC3: any = '3'

/**
Digital peripheral function-2*/
export const IOC_IOC18_PORTCFG_PFUNC2: any = '2'

/**
Digital peripheral function-1 */
export const IOC_IOC18_PORTCFG_PFUNC1: any = '1'

/**
Base function*/
export const IOC_IOC18_PORTCFG_BASE: any = '0'


// -------- REGISTER IOC19 -------- //

/**
Configuration of DIO19*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_IOC19_RESERVED31: any = '1'

/**
This field controls input hysteresis*/
export const IOC_IOC19_HYSTEN: any = '1'

/**
Input hysteresis enabled*/
export const IOC_IOC19_HYSTEN_EN: any = '1'

/**
Input hysteresis disabled*/
export const IOC_IOC19_HYSTEN_DIS: any = '0'

/**
This field controls the input capability of DIO*/
export const IOC_IOC19_INPEN: any = '1'

/**
Input enabled*/
export const IOC_IOC19_INPEN_EN: any = '1'

/**
Input disabled*/
export const IOC_IOC19_INPEN_DIS: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_IOC19_RESERVED27: any = '2'

/**
IO Mode. Setting this to value 0x6 or 0x7 will default to normal IO behavior.*/
export const IOC_IOC19_IOMODE: any = '3'

/**
Open Source, inverted IO*/
export const IOC_IOC19_IOMODE_OPENS_INV: any = '5'

/**
Open Source, normal IO*/
export const IOC_IOC19_IOMODE_OPENS: any = '4'

/**
Open Drain, inverted IO*/
export const IOC_IOC19_IOMODE_OPEND_INV: any = '3'

/**
Open Drain, normal IO*/
export const IOC_IOC19_IOMODE_OPEND: any = '2'

/**
Inverted IO*/
export const IOC_IOC19_IOMODE_INVERTED: any = '1'

/**
Normal IO*/
export const IOC_IOC19_IOMODE_NORMAL: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_IOC19_RESERVED22: any = '2'

/**
Wakeup configuration from shutdown*/
export const IOC_IOC19_WUCFGSD: any = '2'

/**
Wakeup triggered when pad level is high*/
export const IOC_IOC19_WUCFGSD_WAKE_HIGH: any = '3'

/**
Wakeup triggered when pad level is low*/
export const IOC_IOC19_WUCFGSD_WAKE_LOW: any = '2'

/**
Wakeup disabled*/
export const IOC_IOC19_WUCFGSD_DIS_1: any = '1'

/**
Wakeup disabled*/
export const IOC_IOC19_WUCFGSD_DIS_0: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_IOC19_RESERVED19: any = '1'

/**
Wakeup enable from standby*/
export const IOC_IOC19_WUENSB: any = '1'

/**
Wakeup enabled (effective only if EDGEDET is enabled)*/
export const IOC_IOC19_WUENSB_EN: any = '1'

/**
Wakeup disabled*/
export const IOC_IOC19_WUENSB_DIS: any = '0'

/**
Edge detect configuration*/
export const IOC_IOC19_EDGEDET: any = '2'

/**
Positive and negative edge detection*/
export const IOC_IOC19_EDGEDET_EDGE_BOTH: any = '3'

/**
Positive edge detection*/
export const IOC_IOC19_EDGEDET_EDGE_POS: any = '2'

/**
Negative edge detection*/
export const IOC_IOC19_EDGEDET_EDGE_NEG: any = '1'

/**
No edge detection*/
export const IOC_IOC19_EDGEDET_EDGE_DIS: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_IOC19_RESERVED15: any = '1'

/**
Pull control. Setting this to value 0x3 disables pull.*/
export const IOC_IOC19_PULLCTL: any = '2'

/**
Pull up enabled*/
export const IOC_IOC19_PULLCTL_PULL_UP: any = '2'

/**
Pull down enabled*/
export const IOC_IOC19_PULLCTL_PULL_DOWN: any = '1'

/**
No pull*/
export const IOC_IOC19_PULLCTL_PULL_DIS: any = '0'

/**
Slew rate configuration*/
export const IOC_IOC19_SLEWRED: any = '1'

/**
Reduced slew rate*/
export const IOC_IOC19_SLEWRED_REDUCED: any = '1'

/**
Normal slew rate*/
export const IOC_IOC19_SLEWRED_NORMAL: any = '0'

/**
Output current configuration. Writing value 0x3 defaults to 2mA current setting.*/
export const IOC_IOC19_IOCURR: any = '2'

/**
8mA*/
export const IOC_IOC19_IOCURR_CUR_8MA: any = '2'

/**
4mA*/
export const IOC_IOC19_IOCURR_CUR_4MA: any = '1'

/**
2mA*/
export const IOC_IOC19_IOCURR_CUR_2MA: any = '0'

/**
Drive strength configuration*/
export const IOC_IOC19_IOSTR: any = '2'

/**
Maximum drive strength*/
export const IOC_IOC19_IOSTR_MAX: any = '3'

/**
Medium drive strength*/
export const IOC_IOC19_IOSTR_MEDIUM: any = '2'

/**
Minimum drive stregnth*/
export const IOC_IOC19_IOSTR_MIN: any = '1'

/**
Automatic drive strength adjustment*/
export const IOC_IOC19_IOSTR_AUTO: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_IOC19_RESERVED3: any = '5'

/**
Selects usage of DIO19*/
export const IOC_IOC19_PORTCFG: any = '3'

/**
Digital Test Bus function*/
export const IOC_IOC19_PORTCFG_DTB: any = '7'

/**
Analog function*/
export const IOC_IOC19_PORTCFG_ANA: any = '6'

/**
Digital peripheral function-5*/
export const IOC_IOC19_PORTCFG_PFUNC5: any = '5'

/**
Digital peripheral function-4*/
export const IOC_IOC19_PORTCFG_PFUNC4: any = '4'

/**
Digital peripheral function-3*/
export const IOC_IOC19_PORTCFG_PFUNC3: any = '3'

/**
Digital peripheral function-2*/
export const IOC_IOC19_PORTCFG_PFUNC2: any = '2'

/**
Digital peripheral function-1 */
export const IOC_IOC19_PORTCFG_PFUNC1: any = '1'

/**
Base function*/
export const IOC_IOC19_PORTCFG_BASE: any = '0'


// -------- REGISTER IOC20 -------- //

/**
Configuration of DIO20*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_IOC20_RESERVED31: any = '1'

/**
This field controls input hysteresis*/
export const IOC_IOC20_HYSTEN: any = '1'

/**
Input hysteresis enabled*/
export const IOC_IOC20_HYSTEN_EN: any = '1'

/**
Input hysteresis disabled*/
export const IOC_IOC20_HYSTEN_DIS: any = '0'

/**
This field controls the input capability of DIO*/
export const IOC_IOC20_INPEN: any = '1'

/**
Input enabled*/
export const IOC_IOC20_INPEN_EN: any = '1'

/**
Input disabled*/
export const IOC_IOC20_INPEN_DIS: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_IOC20_RESERVED27: any = '2'

/**
IO Mode. Setting this to value 0x6 or 0x7 will default to normal IO behavior.*/
export const IOC_IOC20_IOMODE: any = '3'

/**
Open Source, inverted IO*/
export const IOC_IOC20_IOMODE_OPENS_INV: any = '5'

/**
Open Source, normal IO*/
export const IOC_IOC20_IOMODE_OPENS: any = '4'

/**
Open Drain, inverted IO*/
export const IOC_IOC20_IOMODE_OPEND_INV: any = '3'

/**
Open Drain, normal IO*/
export const IOC_IOC20_IOMODE_OPEND: any = '2'

/**
Inverted IO*/
export const IOC_IOC20_IOMODE_INVERTED: any = '1'

/**
Normal IO*/
export const IOC_IOC20_IOMODE_NORMAL: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_IOC20_RESERVED22: any = '2'

/**
Wakeup configuration from shutdown*/
export const IOC_IOC20_WUCFGSD: any = '2'

/**
Wakeup triggered when pad level is high*/
export const IOC_IOC20_WUCFGSD_WAKE_HIGH: any = '3'

/**
Wakeup triggered when pad level is low*/
export const IOC_IOC20_WUCFGSD_WAKE_LOW: any = '2'

/**
Wakeup disabled*/
export const IOC_IOC20_WUCFGSD_DIS_1: any = '1'

/**
Wakeup disabled*/
export const IOC_IOC20_WUCFGSD_DIS_0: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_IOC20_RESERVED19: any = '1'

/**
Wakeup enable from standby*/
export const IOC_IOC20_WUENSB: any = '1'

/**
Wakeup enabled (effective only if EDGEDET is enabled)*/
export const IOC_IOC20_WUENSB_EN: any = '1'

/**
Wakeup disabled*/
export const IOC_IOC20_WUENSB_DIS: any = '0'

/**
Edge detect configuration*/
export const IOC_IOC20_EDGEDET: any = '2'

/**
Positive and negative edge detection*/
export const IOC_IOC20_EDGEDET_EDGE_BOTH: any = '3'

/**
Positive edge detection*/
export const IOC_IOC20_EDGEDET_EDGE_POS: any = '2'

/**
Negative edge detection*/
export const IOC_IOC20_EDGEDET_EDGE_NEG: any = '1'

/**
No edge detection*/
export const IOC_IOC20_EDGEDET_EDGE_DIS: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_IOC20_RESERVED15: any = '1'

/**
Pull control. Setting this to value 0x3 disables pull.*/
export const IOC_IOC20_PULLCTL: any = '2'

/**
Pull up enabled*/
export const IOC_IOC20_PULLCTL_PULL_UP: any = '2'

/**
Pull down enabled*/
export const IOC_IOC20_PULLCTL_PULL_DOWN: any = '1'

/**
No pull*/
export const IOC_IOC20_PULLCTL_PULL_DIS: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_IOC20_RESERVED3: any = '10'

/**
Selects usage of DIO20*/
export const IOC_IOC20_PORTCFG: any = '3'

/**
Digital Test Bus function*/
export const IOC_IOC20_PORTCFG_DTB: any = '7'

/**
Analog function*/
export const IOC_IOC20_PORTCFG_ANA: any = '6'

/**
Digital peripheral function-5*/
export const IOC_IOC20_PORTCFG_PFUNC5: any = '5'

/**
Digital peripheral function-4*/
export const IOC_IOC20_PORTCFG_PFUNC4: any = '4'

/**
Digital peripheral function-3*/
export const IOC_IOC20_PORTCFG_PFUNC3: any = '3'

/**
Digital peripheral function-2*/
export const IOC_IOC20_PORTCFG_PFUNC2: any = '2'

/**
Digital peripheral function-1 */
export const IOC_IOC20_PORTCFG_PFUNC1: any = '1'

/**
Base function*/
export const IOC_IOC20_PORTCFG_BASE: any = '0'


// -------- REGISTER IOC21 -------- //

/**
Configuration of DIO21*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_IOC21_RESERVED31: any = '1'

/**
This field controls input hysteresis*/
export const IOC_IOC21_HYSTEN: any = '1'

/**
Input hysteresis enabled*/
export const IOC_IOC21_HYSTEN_EN: any = '1'

/**
Input hysteresis disabled*/
export const IOC_IOC21_HYSTEN_DIS: any = '0'

/**
This field controls the input capability of DIO*/
export const IOC_IOC21_INPEN: any = '1'

/**
Input enabled*/
export const IOC_IOC21_INPEN_EN: any = '1'

/**
Input disabled*/
export const IOC_IOC21_INPEN_DIS: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_IOC21_RESERVED27: any = '2'

/**
IO Mode. Setting this to value 0x6 or 0x7 will default to normal IO behavior.*/
export const IOC_IOC21_IOMODE: any = '3'

/**
Open Source, inverted IO*/
export const IOC_IOC21_IOMODE_OPENS_INV: any = '5'

/**
Open Source, normal IO*/
export const IOC_IOC21_IOMODE_OPENS: any = '4'

/**
Open Drain, inverted IO*/
export const IOC_IOC21_IOMODE_OPEND_INV: any = '3'

/**
Open Drain, normal IO*/
export const IOC_IOC21_IOMODE_OPEND: any = '2'

/**
Inverted IO*/
export const IOC_IOC21_IOMODE_INVERTED: any = '1'

/**
Normal IO*/
export const IOC_IOC21_IOMODE_NORMAL: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_IOC21_RESERVED22: any = '2'

/**
Wakeup configuration from shutdown*/
export const IOC_IOC21_WUCFGSD: any = '2'

/**
Wakeup triggered when pad level is high*/
export const IOC_IOC21_WUCFGSD_WAKE_HIGH: any = '3'

/**
Wakeup triggered when pad level is low*/
export const IOC_IOC21_WUCFGSD_WAKE_LOW: any = '2'

/**
Wakeup disabled*/
export const IOC_IOC21_WUCFGSD_DIS_1: any = '1'

/**
Wakeup disabled*/
export const IOC_IOC21_WUCFGSD_DIS_0: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_IOC21_RESERVED19: any = '1'

/**
Wakeup enable from standby*/
export const IOC_IOC21_WUENSB: any = '1'

/**
Wakeup enabled (effective only if EDGEDET is enabled)*/
export const IOC_IOC21_WUENSB_EN: any = '1'

/**
Wakeup disabled*/
export const IOC_IOC21_WUENSB_DIS: any = '0'

/**
Edge detect configuration*/
export const IOC_IOC21_EDGEDET: any = '2'

/**
Positive and negative edge detection*/
export const IOC_IOC21_EDGEDET_EDGE_BOTH: any = '3'

/**
Positive edge detection*/
export const IOC_IOC21_EDGEDET_EDGE_POS: any = '2'

/**
Negative edge detection*/
export const IOC_IOC21_EDGEDET_EDGE_NEG: any = '1'

/**
No edge detection*/
export const IOC_IOC21_EDGEDET_EDGE_DIS: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_IOC21_RESERVED15: any = '1'

/**
Pull control. Setting this to value 0x3 disables pull.*/
export const IOC_IOC21_PULLCTL: any = '2'

/**
Pull up enabled*/
export const IOC_IOC21_PULLCTL_PULL_UP: any = '2'

/**
Pull down enabled*/
export const IOC_IOC21_PULLCTL_PULL_DOWN: any = '1'

/**
No pull*/
export const IOC_IOC21_PULLCTL_PULL_DIS: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_IOC21_RESERVED3: any = '10'

/**
Selects usage of DIO21*/
export const IOC_IOC21_PORTCFG: any = '3'

/**
Digital Test Bus function*/
export const IOC_IOC21_PORTCFG_DTB: any = '7'

/**
Analog function*/
export const IOC_IOC21_PORTCFG_ANA: any = '6'

/**
Digital peripheral function-5*/
export const IOC_IOC21_PORTCFG_PFUNC5: any = '5'

/**
Digital peripheral function-4*/
export const IOC_IOC21_PORTCFG_PFUNC4: any = '4'

/**
Digital peripheral function-3*/
export const IOC_IOC21_PORTCFG_PFUNC3: any = '3'

/**
Digital peripheral function-2*/
export const IOC_IOC21_PORTCFG_PFUNC2: any = '2'

/**
Digital peripheral function-1 */
export const IOC_IOC21_PORTCFG_PFUNC1: any = '1'

/**
Base function*/
export const IOC_IOC21_PORTCFG_BASE: any = '0'


// -------- REGISTER IOC22 -------- //

/**
Configuration of DIO22*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_IOC22_RESERVED31: any = '1'

/**
This field controls input hysteresis*/
export const IOC_IOC22_HYSTEN: any = '1'

/**
Input hysteresis enabled*/
export const IOC_IOC22_HYSTEN_EN: any = '1'

/**
Input hysteresis disabled*/
export const IOC_IOC22_HYSTEN_DIS: any = '0'

/**
This field controls the input capability of DIO*/
export const IOC_IOC22_INPEN: any = '1'

/**
Input enabled*/
export const IOC_IOC22_INPEN_EN: any = '1'

/**
Input disabled*/
export const IOC_IOC22_INPEN_DIS: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_IOC22_RESERVED27: any = '2'

/**
IO Mode. Setting this to value 0x6 or 0x7 will default to normal IO behavior.*/
export const IOC_IOC22_IOMODE: any = '3'

/**
Open Source, inverted IO*/
export const IOC_IOC22_IOMODE_OPENS_INV: any = '5'

/**
Open Source, normal IO*/
export const IOC_IOC22_IOMODE_OPENS: any = '4'

/**
Open Drain, inverted IO*/
export const IOC_IOC22_IOMODE_OPEND_INV: any = '3'

/**
Open Drain, normal IO*/
export const IOC_IOC22_IOMODE_OPEND: any = '2'

/**
Inverted IO*/
export const IOC_IOC22_IOMODE_INVERTED: any = '1'

/**
Normal IO*/
export const IOC_IOC22_IOMODE_NORMAL: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_IOC22_RESERVED22: any = '2'

/**
Wakeup configuration from shutdown*/
export const IOC_IOC22_WUCFGSD: any = '2'

/**
Wakeup triggered when pad level is high*/
export const IOC_IOC22_WUCFGSD_WAKE_HIGH: any = '3'

/**
Wakeup triggered when pad level is low*/
export const IOC_IOC22_WUCFGSD_WAKE_LOW: any = '2'

/**
Wakeup disabled*/
export const IOC_IOC22_WUCFGSD_DIS_1: any = '1'

/**
Wakeup disabled*/
export const IOC_IOC22_WUCFGSD_DIS_0: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_IOC22_RESERVED19: any = '1'

/**
Wakeup enable from standby*/
export const IOC_IOC22_WUENSB: any = '1'

/**
Wakeup enabled (effective only if EDGEDET is enabled)*/
export const IOC_IOC22_WUENSB_EN: any = '1'

/**
Wakeup disabled*/
export const IOC_IOC22_WUENSB_DIS: any = '0'

/**
Edge detect configuration*/
export const IOC_IOC22_EDGEDET: any = '2'

/**
Positive and negative edge detection*/
export const IOC_IOC22_EDGEDET_EDGE_BOTH: any = '3'

/**
Positive edge detection*/
export const IOC_IOC22_EDGEDET_EDGE_POS: any = '2'

/**
Negative edge detection*/
export const IOC_IOC22_EDGEDET_EDGE_NEG: any = '1'

/**
No edge detection*/
export const IOC_IOC22_EDGEDET_EDGE_DIS: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_IOC22_RESERVED15: any = '1'

/**
Pull control. Setting this to value 0x3 disables pull.*/
export const IOC_IOC22_PULLCTL: any = '2'

/**
Pull up enabled*/
export const IOC_IOC22_PULLCTL_PULL_UP: any = '2'

/**
Pull down enabled*/
export const IOC_IOC22_PULLCTL_PULL_DOWN: any = '1'

/**
No pull*/
export const IOC_IOC22_PULLCTL_PULL_DIS: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_IOC22_RESERVED3: any = '10'

/**
Selects usage of DIO22*/
export const IOC_IOC22_PORTCFG: any = '3'

/**
Digital Test Bus function*/
export const IOC_IOC22_PORTCFG_DTB: any = '7'

/**
Analog function*/
export const IOC_IOC22_PORTCFG_ANA: any = '6'

/**
Digital peripheral function-5*/
export const IOC_IOC22_PORTCFG_PFUNC5: any = '5'

/**
Digital peripheral function-4*/
export const IOC_IOC22_PORTCFG_PFUNC4: any = '4'

/**
Digital peripheral function-3*/
export const IOC_IOC22_PORTCFG_PFUNC3: any = '3'

/**
Digital peripheral function-2*/
export const IOC_IOC22_PORTCFG_PFUNC2: any = '2'

/**
Digital peripheral function-1 */
export const IOC_IOC22_PORTCFG_PFUNC1: any = '1'

/**
Base function*/
export const IOC_IOC22_PORTCFG_BASE: any = '0'


// -------- REGISTER IOC23 -------- //

/**
Configuration of DIO23*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_IOC23_RESERVED31: any = '1'

/**
This field controls input hysteresis*/
export const IOC_IOC23_HYSTEN: any = '1'

/**
Input hysteresis enabled*/
export const IOC_IOC23_HYSTEN_EN: any = '1'

/**
Input hysteresis disabled*/
export const IOC_IOC23_HYSTEN_DIS: any = '0'

/**
This field controls the input capability of DIO*/
export const IOC_IOC23_INPEN: any = '1'

/**
Input enabled*/
export const IOC_IOC23_INPEN_EN: any = '1'

/**
Input disabled*/
export const IOC_IOC23_INPEN_DIS: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_IOC23_RESERVED27: any = '2'

/**
IO Mode. Setting this to value 0x6 or 0x7 will default to normal IO behavior.*/
export const IOC_IOC23_IOMODE: any = '3'

/**
Open Source, inverted IO*/
export const IOC_IOC23_IOMODE_OPENS_INV: any = '5'

/**
Open Source, normal IO*/
export const IOC_IOC23_IOMODE_OPENS: any = '4'

/**
Open Drain, inverted IO*/
export const IOC_IOC23_IOMODE_OPEND_INV: any = '3'

/**
Open Drain, normal IO*/
export const IOC_IOC23_IOMODE_OPEND: any = '2'

/**
Inverted IO*/
export const IOC_IOC23_IOMODE_INVERTED: any = '1'

/**
Normal IO*/
export const IOC_IOC23_IOMODE_NORMAL: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_IOC23_RESERVED22: any = '2'

/**
Wakeup configuration from shutdown*/
export const IOC_IOC23_WUCFGSD: any = '2'

/**
Wakeup triggered when pad level is high*/
export const IOC_IOC23_WUCFGSD_WAKE_HIGH: any = '3'

/**
Wakeup triggered when pad level is low*/
export const IOC_IOC23_WUCFGSD_WAKE_LOW: any = '2'

/**
Wakeup disabled*/
export const IOC_IOC23_WUCFGSD_DIS_1: any = '1'

/**
Wakeup disabled*/
export const IOC_IOC23_WUCFGSD_DIS_0: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_IOC23_RESERVED19: any = '1'

/**
Wakeup enable from standby*/
export const IOC_IOC23_WUENSB: any = '1'

/**
Wakeup enabled (effective only if EDGEDET is enabled)*/
export const IOC_IOC23_WUENSB_EN: any = '1'

/**
Wakeup disabled*/
export const IOC_IOC23_WUENSB_DIS: any = '0'

/**
Edge detect configuration*/
export const IOC_IOC23_EDGEDET: any = '2'

/**
Positive and negative edge detection*/
export const IOC_IOC23_EDGEDET_EDGE_BOTH: any = '3'

/**
Positive edge detection*/
export const IOC_IOC23_EDGEDET_EDGE_POS: any = '2'

/**
Negative edge detection*/
export const IOC_IOC23_EDGEDET_EDGE_NEG: any = '1'

/**
No edge detection*/
export const IOC_IOC23_EDGEDET_EDGE_DIS: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_IOC23_RESERVED15: any = '1'

/**
Pull control. Setting this to value 0x3 disables pull.*/
export const IOC_IOC23_PULLCTL: any = '2'

/**
Pull up enabled*/
export const IOC_IOC23_PULLCTL_PULL_UP: any = '2'

/**
Pull down enabled*/
export const IOC_IOC23_PULLCTL_PULL_DOWN: any = '1'

/**
No pull*/
export const IOC_IOC23_PULLCTL_PULL_DIS: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_IOC23_RESERVED3: any = '10'

/**
Selects usage of DIO23*/
export const IOC_IOC23_PORTCFG: any = '3'

/**
Digital Test Bus function*/
export const IOC_IOC23_PORTCFG_DTB: any = '7'

/**
Analog function*/
export const IOC_IOC23_PORTCFG_ANA: any = '6'

/**
Digital peripheral function-5*/
export const IOC_IOC23_PORTCFG_PFUNC5: any = '5'

/**
Digital peripheral function-4*/
export const IOC_IOC23_PORTCFG_PFUNC4: any = '4'

/**
Digital peripheral function-3*/
export const IOC_IOC23_PORTCFG_PFUNC3: any = '3'

/**
Digital peripheral function-2*/
export const IOC_IOC23_PORTCFG_PFUNC2: any = '2'

/**
Digital peripheral function-1 */
export const IOC_IOC23_PORTCFG_PFUNC1: any = '1'

/**
Base function*/
export const IOC_IOC23_PORTCFG_BASE: any = '0'


// -------- REGISTER IOC24 -------- //

/**
Configuration of DIO24*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_IOC24_RESERVED31: any = '1'

/**
This field controls input hysteresis*/
export const IOC_IOC24_HYSTEN: any = '1'

/**
Input hysteresis enabled*/
export const IOC_IOC24_HYSTEN_EN: any = '1'

/**
Input hysteresis disabled*/
export const IOC_IOC24_HYSTEN_DIS: any = '0'

/**
This field controls the input capability of DIO*/
export const IOC_IOC24_INPEN: any = '1'

/**
Input enabled*/
export const IOC_IOC24_INPEN_EN: any = '1'

/**
Input disabled*/
export const IOC_IOC24_INPEN_DIS: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_IOC24_RESERVED27: any = '2'

/**
IO Mode. Setting this to value 0x6 or 0x7 will default to normal IO behavior.*/
export const IOC_IOC24_IOMODE: any = '3'

/**
Open Source, inverted IO*/
export const IOC_IOC24_IOMODE_OPENS_INV: any = '5'

/**
Open Source, normal IO*/
export const IOC_IOC24_IOMODE_OPENS: any = '4'

/**
Open Drain, inverted IO*/
export const IOC_IOC24_IOMODE_OPEND_INV: any = '3'

/**
Open Drain, normal IO*/
export const IOC_IOC24_IOMODE_OPEND: any = '2'

/**
Inverted IO*/
export const IOC_IOC24_IOMODE_INVERTED: any = '1'

/**
Normal IO*/
export const IOC_IOC24_IOMODE_NORMAL: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_IOC24_RESERVED22: any = '2'

/**
Wakeup configuration from shutdown*/
export const IOC_IOC24_WUCFGSD: any = '2'

/**
Wakeup triggered when pad level is high*/
export const IOC_IOC24_WUCFGSD_WAKE_HIGH: any = '3'

/**
Wakeup triggered when pad level is low*/
export const IOC_IOC24_WUCFGSD_WAKE_LOW: any = '2'

/**
Wakeup disabled*/
export const IOC_IOC24_WUCFGSD_DIS_1: any = '1'

/**
Wakeup disabled*/
export const IOC_IOC24_WUCFGSD_DIS_0: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_IOC24_RESERVED19: any = '1'

/**
Wakeup enable from standby*/
export const IOC_IOC24_WUENSB: any = '1'

/**
Wakeup enabled (effective only if EDGEDET is enabled)*/
export const IOC_IOC24_WUENSB_EN: any = '1'

/**
Wakeup disabled*/
export const IOC_IOC24_WUENSB_DIS: any = '0'

/**
Edge detect configuration*/
export const IOC_IOC24_EDGEDET: any = '2'

/**
Positive and negative edge detection*/
export const IOC_IOC24_EDGEDET_EDGE_BOTH: any = '3'

/**
Positive edge detection*/
export const IOC_IOC24_EDGEDET_EDGE_POS: any = '2'

/**
Negative edge detection*/
export const IOC_IOC24_EDGEDET_EDGE_NEG: any = '1'

/**
No edge detection*/
export const IOC_IOC24_EDGEDET_EDGE_DIS: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_IOC24_RESERVED15: any = '1'

/**
Pull control. Setting this to value 0x3 disables pull.*/
export const IOC_IOC24_PULLCTL: any = '2'

/**
Pull up enabled*/
export const IOC_IOC24_PULLCTL_PULL_UP: any = '2'

/**
Pull down enabled*/
export const IOC_IOC24_PULLCTL_PULL_DOWN: any = '1'

/**
No pull*/
export const IOC_IOC24_PULLCTL_PULL_DIS: any = '0'

/**
Slew rate configuration*/
export const IOC_IOC24_SLEWRED: any = '1'

/**
Reduced slew rate*/
export const IOC_IOC24_SLEWRED_REDUCED: any = '1'

/**
Normal slew rate*/
export const IOC_IOC24_SLEWRED_NORMAL: any = '0'

/**
Output current configuration. Writing value 0x3 defaults to 2mA current setting.*/
export const IOC_IOC24_IOCURR: any = '2'

/**
8mA*/
export const IOC_IOC24_IOCURR_CUR_8MA: any = '2'

/**
4mA*/
export const IOC_IOC24_IOCURR_CUR_4MA: any = '1'

/**
2mA*/
export const IOC_IOC24_IOCURR_CUR_2MA: any = '0'

/**
Drive strength configuration*/
export const IOC_IOC24_IOSTR: any = '2'

/**
Maximum drive strength*/
export const IOC_IOC24_IOSTR_MAX: any = '3'

/**
Medium drive strength*/
export const IOC_IOC24_IOSTR_MEDIUM: any = '2'

/**
Minimum drive stregnth*/
export const IOC_IOC24_IOSTR_MIN: any = '1'

/**
Automatic drive strength adjustment*/
export const IOC_IOC24_IOSTR_AUTO: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_IOC24_RESERVED3: any = '5'

/**
Selects usage of DIO24*/
export const IOC_IOC24_PORTCFG: any = '3'

/**
Digital Test Bus function*/
export const IOC_IOC24_PORTCFG_DTB: any = '7'

/**
Analog function*/
export const IOC_IOC24_PORTCFG_ANA: any = '6'

/**
Digital peripheral function-5*/
export const IOC_IOC24_PORTCFG_PFUNC5: any = '5'

/**
Digital peripheral function-4*/
export const IOC_IOC24_PORTCFG_PFUNC4: any = '4'

/**
Digital peripheral function-3*/
export const IOC_IOC24_PORTCFG_PFUNC3: any = '3'

/**
Digital peripheral function-2*/
export const IOC_IOC24_PORTCFG_PFUNC2: any = '2'

/**
Digital peripheral function-1 */
export const IOC_IOC24_PORTCFG_PFUNC1: any = '1'

/**
Base function*/
export const IOC_IOC24_PORTCFG_BASE: any = '0'


// -------- REGISTER IOC25 -------- //

/**
Selects usage of DIO25*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_IOC25_RESERVED31: any = '1'

/**
This field controls input hysteresis*/
export const IOC_IOC25_HYSTEN: any = '1'

/**
Input hysteresis enabled*/
export const IOC_IOC25_HYSTEN_EN: any = '1'

/**
Input hysteresis disabled*/
export const IOC_IOC25_HYSTEN_DIS: any = '0'

/**
This field controls the input capability of DIO*/
export const IOC_IOC25_INPEN: any = '1'

/**
Input enabled*/
export const IOC_IOC25_INPEN_EN: any = '1'

/**
Input disabled*/
export const IOC_IOC25_INPEN_DIS: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_IOC25_RESERVED27: any = '2'

/**
IO Mode. Setting this to value 0x6 or 0x7 will default to normal IO behavior.*/
export const IOC_IOC25_IOMODE: any = '3'

/**
Open Source, inverted IO*/
export const IOC_IOC25_IOMODE_OPENS_INV: any = '5'

/**
Open Source, normal IO*/
export const IOC_IOC25_IOMODE_OPENS: any = '4'

/**
Open Drain, inverted IO*/
export const IOC_IOC25_IOMODE_OPEND_INV: any = '3'

/**
Open Drain, normal IO*/
export const IOC_IOC25_IOMODE_OPEND: any = '2'

/**
Inverted IO*/
export const IOC_IOC25_IOMODE_INVERTED: any = '1'

/**
Normal IO*/
export const IOC_IOC25_IOMODE_NORMAL: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_IOC25_RESERVED22: any = '2'

/**
Wakeup configuration from shutdown*/
export const IOC_IOC25_WUCFGSD: any = '2'

/**
Wakeup triggered when pad level is high*/
export const IOC_IOC25_WUCFGSD_WAKE_HIGH: any = '3'

/**
Wakeup triggered when pad level is low*/
export const IOC_IOC25_WUCFGSD_WAKE_LOW: any = '2'

/**
Wakeup disabled*/
export const IOC_IOC25_WUCFGSD_DIS_1: any = '1'

/**
Wakeup disabled*/
export const IOC_IOC25_WUCFGSD_DIS_0: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_IOC25_RESERVED19: any = '1'

/**
Wakeup enable from standby*/
export const IOC_IOC25_WUENSB: any = '1'

/**
Wakeup enabled (effective only if EDGEDET is enabled)*/
export const IOC_IOC25_WUENSB_EN: any = '1'

/**
Wakeup disabled*/
export const IOC_IOC25_WUENSB_DIS: any = '0'

/**
Edge detect configuration*/
export const IOC_IOC25_EDGEDET: any = '2'

/**
Positive and negative edge detection*/
export const IOC_IOC25_EDGEDET_EDGE_BOTH: any = '3'

/**
Positive edge detection*/
export const IOC_IOC25_EDGEDET_EDGE_POS: any = '2'

/**
Negative edge detection*/
export const IOC_IOC25_EDGEDET_EDGE_NEG: any = '1'

/**
No edge detection*/
export const IOC_IOC25_EDGEDET_EDGE_DIS: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_IOC25_RESERVED15: any = '1'

/**
Pull control. Setting this to value 0x3 disables pull.*/
export const IOC_IOC25_PULLCTL: any = '2'

/**
Pull up enabled*/
export const IOC_IOC25_PULLCTL_PULL_UP: any = '2'

/**
Pull down enabled*/
export const IOC_IOC25_PULLCTL_PULL_DOWN: any = '1'

/**
No pull*/
export const IOC_IOC25_PULLCTL_PULL_DIS: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_IOC25_RESERVED3: any = '10'

/**
Selects usage of DIO25*/
export const IOC_IOC25_PORTCFG: any = '3'

/**
Digital Test Bus function*/
export const IOC_IOC25_PORTCFG_DTB: any = '7'

/**
Analog function*/
export const IOC_IOC25_PORTCFG_ANA: any = '6'

/**
Digital peripheral function-5*/
export const IOC_IOC25_PORTCFG_PFUNC5: any = '5'

/**
Digital peripheral function-4*/
export const IOC_IOC25_PORTCFG_PFUNC4: any = '4'

/**
Digital peripheral function-3*/
export const IOC_IOC25_PORTCFG_PFUNC3: any = '3'

/**
Digital peripheral function-2*/
export const IOC_IOC25_PORTCFG_PFUNC2: any = '2'

/**
Digital peripheral function-1 */
export const IOC_IOC25_PORTCFG_PFUNC1: any = '1'

/**
Base function*/
export const IOC_IOC25_PORTCFG_BASE: any = '0'


// -------- REGISTER DTBCFG -------- //

/**
DTB configuration*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_DTBCFG_RESERVED24: any = '8'

/**
This bit is used to divide DTB[0] output by 8.*/
export const IOC_DTBCFG_DTB0DIV: any = '1'

/**
Divide DTB[0] output by 8*/
export const IOC_DTBCFG_DTB0DIV_EN: any = '1'

/**
No divide*/
export const IOC_DTBCFG_DTB0DIV_DIS: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_DTBCFG_RESERVED19: any = '4'

/**
Selects which 3 DTB lines out of total 16 are routed to DTB pins 15 to 13.*/
export const IOC_DTBCFG_PADSEL: any = '3'

/**
DTB[2:0] selected*/
export const IOC_DTBCFG_PADSEL_DTB2TO0: any = '5'

/**
DTB[5:3] selected*/
export const IOC_DTBCFG_PADSEL_DTB5TO3: any = '4'

/**
DTB[8:6] selected*/
export const IOC_DTBCFG_PADSEL_DTB8TO6: any = '3'

/**
DTB[11:9] selected*/
export const IOC_DTBCFG_PADSEL_DTB11TO9: any = '2'

/**
DTB[14:12] selected*/
export const IOC_DTBCFG_PADSEL_DTB14TO12: any = '1'

/**
DTB[15:13] selected*/
export const IOC_DTBCFG_PADSEL_DTB15TO13: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_DTBCFG_RESERVED13: any = '3'

/**
ULL DTB Mux selection*/
export const IOC_DTBCFG_ULLSEL: any = '5'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_DTBCFG_RESERVED5: any = '3'

/**
SVT DTB Mux selection*/
export const IOC_DTBCFG_SVTSEL: any = '5'


// -------- REGISTER DTBOE -------- //

/**
DTB output enable*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_DTBOE_RESERVED16: any = '16'

/**
Enables DTB output 15*/
export const IOC_DTBOE_EN15: any = '1'

/**
DTB output enabled*/
export const IOC_DTBOE_EN15_EN: any = '1'

/**
DTB output disabled*/
export const IOC_DTBOE_EN15_DIS: any = '0'

/**
Enables DTB output 14*/
export const IOC_DTBOE_EN14: any = '1'

/**
DTB output enabled*/
export const IOC_DTBOE_EN14_EN: any = '1'

/**
DTB output disabled*/
export const IOC_DTBOE_EN14_DIS: any = '0'

/**
Enables DTB output 13*/
export const IOC_DTBOE_EN13: any = '1'

/**
DTB output enabled*/
export const IOC_DTBOE_EN13_EN: any = '1'

/**
DTB output disabled*/
export const IOC_DTBOE_EN13_DIS: any = '0'

/**
Enables DTB output 12*/
export const IOC_DTBOE_EN12: any = '1'

/**
DTB output enabled*/
export const IOC_DTBOE_EN12_EN: any = '1'

/**
DTB output disabled*/
export const IOC_DTBOE_EN12_DIS: any = '0'

/**
Enables DTB output 11*/
export const IOC_DTBOE_EN11: any = '1'

/**
DTB output enabled*/
export const IOC_DTBOE_EN11_EN: any = '1'

/**
DTB output disabled*/
export const IOC_DTBOE_EN11_DIS: any = '0'

/**
Enables DTB output 10*/
export const IOC_DTBOE_EN10: any = '1'

/**
DTB output enabled*/
export const IOC_DTBOE_EN10_EN: any = '1'

/**
DTB output disabled*/
export const IOC_DTBOE_EN10_DIS: any = '0'

/**
Enables DTB output 9*/
export const IOC_DTBOE_EN9: any = '1'

/**
DTB output enabled*/
export const IOC_DTBOE_EN9_EN: any = '1'

/**
DTB output disabled*/
export const IOC_DTBOE_EN9_DIS: any = '0'

/**
Enables DTB output 8*/
export const IOC_DTBOE_EN8: any = '1'

/**
DTB output enabled*/
export const IOC_DTBOE_EN8_EN: any = '1'

/**
DTB output disabled*/
export const IOC_DTBOE_EN8_DIS: any = '0'

/**
Enables DTB output 7*/
export const IOC_DTBOE_EN7: any = '1'

/**
DTB output enabled*/
export const IOC_DTBOE_EN7_EN: any = '1'

/**
DTB output disabled*/
export const IOC_DTBOE_EN7_DIS: any = '0'

/**
Enables DTB output 6*/
export const IOC_DTBOE_EN6: any = '1'

/**
DTB output enabled*/
export const IOC_DTBOE_EN6_EN: any = '1'

/**
DTB output disabled*/
export const IOC_DTBOE_EN6_DIS: any = '0'

/**
Enables DTB output 5*/
export const IOC_DTBOE_EN5: any = '1'

/**
DTB output enabled*/
export const IOC_DTBOE_EN5_EN: any = '1'

/**
DTB output disabled*/
export const IOC_DTBOE_EN5_DIS: any = '0'

/**
Enables DTB output 4*/
export const IOC_DTBOE_EN4: any = '1'

/**
DTB output enabled*/
export const IOC_DTBOE_EN4_EN: any = '1'

/**
DTB output disabled*/
export const IOC_DTBOE_EN4_DIS: any = '0'

/**
Enables DTB output 3*/
export const IOC_DTBOE_EN3: any = '1'

/**
DTB output enabled*/
export const IOC_DTBOE_EN3_EN: any = '1'

/**
DTB output disabled*/
export const IOC_DTBOE_EN3_DIS: any = '0'

/**
Enables DTB output 2*/
export const IOC_DTBOE_EN2: any = '1'

/**
DTB output enabled*/
export const IOC_DTBOE_EN2_EN: any = '1'

/**
DTB output disabled*/
export const IOC_DTBOE_EN2_DIS: any = '0'

/**
Enables DTB output 1*/
export const IOC_DTBOE_EN1: any = '1'

/**
DTB output enabled*/
export const IOC_DTBOE_EN1_EN: any = '1'

/**
DTB output disabled*/
export const IOC_DTBOE_EN1_DIS: any = '0'

/**
Enables DTB output 0*/
export const IOC_DTBOE_EN0: any = '1'

/**
DTB output enabled*/
export const IOC_DTBOE_EN0_EN: any = '1'

/**
DTB output disabled*/
export const IOC_DTBOE_EN0_DIS: any = '0'


// -------- REGISTER EVTCFG -------- //

/**
Event configuration. This register is used to select DIO for IOC to publish event on ULL event fabric. It also contains enable bit that is used to mask the event and event flag bit.*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_EVTCFG_RESERVED9: any = '23'

/**
Event flag. It is set when edge is detected on selected DIO.

Note: The edge detector flop is cleared for the selected DIO when EVTIFG is cleared by software.*/
export const IOC_EVTCFG_EVTIFG: any = '1'

/**
Set ULL event*/
export const IOC_EVTCFG_EVTIFG_SET: any = '1'

/**
Clear ULL event*/
export const IOC_EVTCFG_EVTIFG_CLR: any = '0'

/**
Enables IOC to publish event on AON event fabric when EVTIFG is set. */
export const IOC_EVTCFG_EVTEN: any = '1'

/**
Enable*/
export const IOC_EVTCFG_EVTEN_EN: any = '1'

/**
Disable*/
export const IOC_EVTCFG_EVTEN_DIS: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_EVTCFG_RESERVED6: any = '1'

/**
This is used to select DIO for event generation. For example, DIOSEL = 0x0 selects DIO0 and DIOSEL = 0x8 selects DIO8.*/
export const IOC_EVTCFG_DIOSEL: any = '6'


// -------- REGISTER TEST -------- //

/**
Test register.*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_TEST_RESERVED1: any = '31'

/**
This is used to drive SWDIO (Serial Wire DIO) output data and output enable from debug sub-system onto DIO12 (Test Data Output) pad.*/
export const IOC_TEST_SEL: any = '1'

/**
Output data and output enable driven based on debug sub-system inputs*/
export const IOC_TEST_SEL_HI: any = '1'

/**
Output data and output enable managed by IOC*/
export const IOC_TEST_SEL_LO: any = '0'


// -------- REGISTER DTBSTAT -------- //

/**
DTB status register.*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_DTBSTAT_RESERVED16: any = '16'

/**
This bit field captures the final 16-bit value of DTB signals provided from IOC to device pins.*/
export const IOC_DTBSTAT_VAL: any = '16'


// -------- MODULE UART -------- //

export interface UART_t {
    DR: em.$Reg
    RSR_ECR: em.$Reg
    RESERVED0: em.$Reg
    FR: em.$Reg
    RESERVED2: em.$Reg
    UARTILPR: em.$Reg
    IBRD: em.$Reg
    FBRD: em.$Reg
    LCRH: em.$Reg
    CTL: em.$Reg
    IFLS: em.$Reg
    IMSC: em.$Reg
    RIS: em.$Reg
    MIS: em.$Reg
    ICR: em.$Reg
    DMACTL: em.$Reg
    RESERVED1: em.$Reg
    RESERVED3: em.$Reg
    RESERVED4: em.$Reg
}

// -------- REGISTER DR -------- //

/**
Data

For words to be transmitted:
  - if the FIFOs are enabled (LCRH.FEN = 1), data written to this location is pushed onto the transmit FIFO
  - if the FIFOs are not enabled (LCRH.FEN = 0), data is stored in the transmitter holding register (the bottom word of the transmit FIFO).
The write operation initiates transmission from the UART. The data is prefixed with a start bit, appended with the appropriate parity bit (if parity is enabled), and a stop bit.
The resultant word is then transmitted.
For received words:
  - if the FIFOs are enabled (LCRH.FEN = 1), the data byte and the 4-bit status (break, frame, parity, and overrun) is pushed onto the 12-bit wide receive FIFO 
  - if the FIFOs are not enabled (LCRH.FEN = 0), the data byte and status are stored in the receiving holding register (the bottom word of the receive FIFO).
The received data byte is read by performing reads from this register along with the corresponding status information. The status information can also be read by a read of the RSR_ECR register.*/
/**
	Reads to this field return zero, writes to this field are ignored.*/
export const UART_DR_RESERVED12: any = '20'

/**
UART Overrun Error:

This bit is set to 1 if data is received and the receive FIFO is already full. The FIFO contents remain valid because no more data is written when the FIFO is full, only the contents of the shift register are overwritten.
This is cleared to 0 once there is an empty space in the FIFO and a new character can be written to it.*/
export const UART_DR_OE: any = '1'

/**
UART Break Error:

This bit is set to 1 if a break condition was detected, indicating that the received data input (UARTRXD input pin) was held LOW for longer than a full-word transmission time (defined as start, data, parity and stop bits).
In FIFO mode, this error is associated with the character at the top of the FIFO (i.e., the oldest received data character since last read). When a break occurs, a 0 character is loaded into the FIFO. The next character is enabled after the receive data input (UARTRXD input pin) goes to a 1 (marking state), and the next valid start bit is received.*/
export const UART_DR_BE: any = '1'

/**
UART Parity Error:

When set to 1, it indicates that the parity of the received data character does not match the parity that the LCRH.EPS and LCRH.SPS select.
In FIFO mode, this error is associated with the character at the top of the FIFO (i.e., the oldest received data character since last read).*/
export const UART_DR_PE: any = '1'

/**
UART Framing Error:

When set to 1, it indicates that the received character did not have a valid stop bit (a valid stop bit is 1).
In FIFO mode, this error is associated with the character at the top of the FIFO (i.e., the oldest received data character since last read).*/
export const UART_DR_FE: any = '1'

/**
Data transmitted or received:

On writes, the transmit data character is pushed into the FIFO.
On reads, the oldest received data character since the last read is returned.*/
export const UART_DR_DATA: any = '8'


// -------- REGISTER RSR_ECR -------- //

/**
Status

This register is mapped to the same address as ECR register.  Reads from this address are associated with RSR_ECR register and return the receive status. Writes to this address are associated with ECR register and clear the receive status flags (framing, parity, break, and overrun errors).
If the status is read from this register, then the status information for break, framing and parity corresponds to the data character read from the Data Register DR, prior to reading the RSR_ECR. The status information for overrun is set immediately when an overrun condition occurs.*/
/**
	Reads to this field return zero, writes to this field are ignored.*/
export const UART_RSR_ECR_RESERVED4: any = '28'

/**
UART Overrun Error:

This bit is set to 1 if data is received and the receive FIFO is already full. The FIFO contents remain valid because no more data is written when the FIFO is full, only the contents of the shift register are overwritten.
This is cleared to 0 once there is an empty space in the FIFO and a new character can be written to it.*/
export const UART_RSR_ECR_OE: any = '1'

/**
Clears error flag if error is set. Write value is not important.*/
export const UART_RSR_ECR_OE_CLEAR_ERROR_1: any = '1'

/**
Error flag is not set*/
export const UART_RSR_ECR_OE_ERROR_NOTSET: any = '0'

/**
UART Break Error:

This bit is set to 1 if a break condition was detected, indicating that the received data input (UARTRXD input pin) was held LOW for longer than a full-word transmission time (defined as start, data, parity and stop bits).
When a break occurs, a 0 character is loaded into the FIFO. The next character is enabled after the receive data input (UARTRXD input pin) goes to a 1 (marking state), and the next valid start bit is received.*/
export const UART_RSR_ECR_BE: any = '1'

/**
Clears error flag if error is set. Write value is not important.*/
export const UART_RSR_ECR_BE_CLEAR_ERROR_1: any = '1'

/**
Error flag is not set*/
export const UART_RSR_ECR_BE_ERROR_NOTSET: any = '0'

/**
UART Parity Error:

When set to 1, it indicates that the parity of the received data character does not match the parity that the LCRH.EPS and LCRH.SPS select.*/
export const UART_RSR_ECR_PE: any = '1'

/**
Clears error flag if error is set. Write value is not important.*/
export const UART_RSR_ECR_PE_CLEAR_ERROR_1: any = '1'

/**
Error flag is not set*/
export const UART_RSR_ECR_PE_ERROR_NOTSET: any = '0'

/**
UART Framing Error:

When set to 1, it indicates that the received character did not have a valid stop bit (a valid stop bit is 1).*/
export const UART_RSR_ECR_FE: any = '1'

/**
Clears error flag if error is set. Write value is not important.*/
export const UART_RSR_ECR_FE_CLEAR_ERROR_1: any = '1'

/**
Error flag is not set*/
export const UART_RSR_ECR_FE_ERROR_NOTSET: any = '0'


// -------- REGISTER RESERVED0 -------- //

/**
UART Reserved Area*/
/**
	Reads to this field return zero, writes to this field are ignored.*/
export const UART_RESERVED0_RESERVED: any = '32'


// -------- REGISTER FR -------- //

/**
Flag

Reads from this register return the UART flags.*/
/**
	Reads to this field return zero, writes to this field are ignored.*/
export const UART_FR_RESERVED8: any = '24'

/**
UART Transmit FIFO Empty:

The meaning of this bit depends on the state of LCRH.FEN .
  - If the FIFO is disabled, this bit is set when the transmit holding register is empty.
  - If the FIFO is enabled, this bit is set when the transmit FIFO is empty.
This bit does not indicate if there is data in the transmit shift register.*/
export const UART_FR_TXFE: any = '1'

/**
UART Receive FIFO Full: 

The meaning of this bit depends on the state of LCRH.FEN.
  - If the FIFO is disabled, this bit is set when the receive holding register is full.
  - If the FIFO is enabled, this bit is set when the receive FIFO is full.*/
export const UART_FR_RXFF: any = '1'

/**
UART Transmit FIFO Full:

Transmit FIFO full. The meaning of this bit depends on the state of LCRH.FEN.
  - If the FIFO is disabled, this bit is set when the transmit holding register is full.
  - If the FIFO is enabled, this bit is set when the transmit FIFO is full.*/
export const UART_FR_TXFF: any = '1'

/**
UART Receive FIFO Empty:

Receive FIFO empty. The meaning of this bit depends on the state of LCRH.FEN.
  - If the FIFO is disabled, this bit is set when the receive holding register is empty.
  - If the FIFO is enabled, this bit is set when the receive FIFO is empty.*/
export const UART_FR_RXFE: any = '1'

/**
UART Busy: 

If this bit is set to 1, the UART is busy transmitting data. This bit remains set until the complete byte, including all the stop bits, has been sent from the shift register.
This bit is set as soon as the transmit FIFO becomes non-empty, regardless of whether the UART is enabled or not.*/
export const UART_FR_BUSY: any = '1'

/**
Reserved*/
export const UART_FR_RESERVED0: any = '2'

/**
Clear To Send: 

This bit is the complement of the active-low UART CTS input pin.
That is, the bit is 1 when CTS input pin is LOW.*/
export const UART_FR_CTS: any = '1'


// -------- REGISTER RESERVED2 -------- //

/**
UART Reserved Area*/
/**
	Reads to this field return zero, writes to this field are ignored.*/
export const UART_RESERVED2_RESERVED: any = '32'


// -------- REGISTER UARTILPR -------- //

/**
IrDA Low-Power Counter Register.


This is an 8-bit register that stores the low-power counter divisor value used to generate the IrLPBaud16 signal by dividing down of UARTCLK.*/
/**
	Reads to this field return zero, writes to this field are ignored.*/
export const UART_UARTILPR_RESERVED8: any = '24'

/**
8 bit low-power divisor value. In low-power IrDA mode the UART rejects random noise on the received serial data

input by ignoring SIRIN pulses that are less than 3 periods of IrLPBaud16.*/
export const UART_UARTILPR_ILPDVSR: any = '8'


// -------- REGISTER IBRD -------- //

/**
Integer Baud-Rate Divisor

If this register is modified while trasmission or reception is on-going, the baudrate will not be updated until transmission or reception of the current character is complete.*/
/**
	Reads to this field return zero, writes to this field are ignored.*/
export const UART_IBRD_RESERVED16: any = '16'

/**
The integer baud rate divisor:

The baud rate divisor is calculated using the formula below:
Baud rate divisor = (UART reference clock frequency) / (16 * Baud rate)
Baud rate divisor must be minimum 1 and maximum 65535. 
That is, DIVINT=0 does not give a valid baud rate. 
Similarly, if DIVINT=0xFFFF, any non-zero values in FBRD.DIVFRAC will be illegal.
Refer to Section 19.1.5 for an example calculation.
A valid value must be written to this field before the UART can be used for RX or TX operations.
*/
export const UART_IBRD_DIVINT: any = '16'


// -------- REGISTER FBRD -------- //

/**
Fractional Baud-Rate Divisor

If this register is modified while trasmission or reception is on-going, the baudrate will not be updated until transmission or reception of the current character is complete.*/
/**
	Reads to this field return zero, writes to this field are ignored.*/
export const UART_FBRD_RESERVED6: any = '26'

/**
Fractional Baud-Rate Divisor:

The baud rate divisor is calculated using the formula below:
Baud rate divisor = (UART reference clock frequency) / (16 * Baud rate)
Baud rate divisor must be minimum 1 and maximum 65535. 
That is, IBRD.DIVINT=0 does not give a valid baud rate. 
Similarly, if IBRD.DIVINT=0xFFFF, any non-zero values in DIVFRAC will be illegal.
Refer to Section 19.1.5 for an example calculation.
A valid value must be written to this field before the UART can be used for RX or TX operations.
*/
export const UART_FBRD_DIVFRAC: any = '6'


// -------- REGISTER LCRH -------- //

/**
Line Control*/
/**
	Reads to this field return zero, writes to this field are ignored.*/
export const UART_LCRH_RESERVED8: any = '24'

/**
UART Stick Parity Select:


0: Stick parity is disabled
1: The parity bit is transmitted and checked as invert of EPS field (i.e. the parity bit is transmitted and checked as 1 when EPS = 0).

This bit has no effect when PEN disables parity checking and generation.*/
export const UART_LCRH_SPS: any = '1'

/**
UART Word Length:

These bits indicate the number of data bits transmitted or received in a frame.*/
export const UART_LCRH_WLEN: any = '2'

/**
Word Length 8 bits*/
export const UART_LCRH_WLEN_BITL8: any = '3'

/**
Word Length 7 bits*/
export const UART_LCRH_WLEN_BITL7: any = '2'

/**
Word Length 6 bits*/
export const UART_LCRH_WLEN_BITL6: any = '1'

/**
Word Length 5 bits*/
export const UART_LCRH_WLEN_BITL5: any = '0'

/**
UART Enable FIFOs*/
export const UART_LCRH_FEN: any = '1'

/**
Transmit and receive FIFO buffers are enabled (FIFO mode)*/
export const UART_LCRH_FEN_EN: any = '1'

/**
FIFOs are disabled (character mode) that is, the FIFOs become 1-byte-deep holding registers.*/
export const UART_LCRH_FEN_DIS: any = '0'

/**
UART Two Stop Bits Select:

If this bit is set to 1, two stop bits are transmitted at the end of the frame. The receive logic does not check for two stop bits being received.*/
export const UART_LCRH_STP2: any = '1'

/**
UART Even Parity Select*/
export const UART_LCRH_EPS: any = '1'

/**
Even parity: The UART generates or checks for an even number of 1s in the data and parity bits.*/
export const UART_LCRH_EPS_EVEN: any = '1'

/**
Odd parity: The UART generates or checks for an odd number of 1s in the data and parity bits.*/
export const UART_LCRH_EPS_ODD: any = '0'

/**
UART Parity Enable

This bit controls generation and checking of parity bit. 
*/
export const UART_LCRH_PEN: any = '1'

/**
Parity checking and generation is enabled.*/
export const UART_LCRH_PEN_EN: any = '1'

/**
Parity is disabled and no parity bit is added to the data frame*/
export const UART_LCRH_PEN_DIS: any = '0'

/**
UART Send Break

If this bit is set to 1, a low-level is continually output on the UARTTXD output pin, after completing transmission of the current character. For the proper execution of the break command, the
software must set this bit for at least two complete frames. For normal use, this bit must be cleared to 0.*/
export const UART_LCRH_BRK: any = '1'


// -------- REGISTER CTL -------- //

/**
Control*/
/**
	Reads to this field return zero, writes to this field are ignored.*/
export const UART_CTL_RESERVED16: any = '16'

/**
CTS hardware flow control enable*/
export const UART_CTL_CTSEN: any = '1'

/**
CTS hardware flow control enabled*/
export const UART_CTL_CTSEN_EN: any = '1'

/**
CTS hardware flow control disabled*/
export const UART_CTL_CTSEN_DIS: any = '0'

/**
RTS hardware flow control enable*/
export const UART_CTL_RTSEN: any = '1'

/**
RTS hardware flow control enabled*/
export const UART_CTL_RTSEN_EN: any = '1'

/**
RTS hardware flow control disabled*/
export const UART_CTL_RTSEN_DIS: any = '0'

/**
	Reads to this field return zero, writes to this field are ignored.*/
export const UART_CTL_RESERVED12: any = '2'

/**
Request to Send

This bit is the complement of the active-low UART RTS output. That is, when the bit is programmed to a 1 then RTS output on the pins is LOW.*/
export const UART_CTL_RTS: any = '1'

/**
	Reads to this field return zero, writes to this field are ignored.*/
export const UART_CTL_RESERVED10: any = '1'

/**
UART Receive Enable

If the UART is disabled in the middle of reception, it completes the current character before stopping.*/
export const UART_CTL_RXE: any = '1'

/**
UART Receive enabled*/
export const UART_CTL_RXE_EN: any = '1'

/**
UART Receive disabled*/
export const UART_CTL_RXE_DIS: any = '0'

/**
UART Transmit Enable

If the UART is disabled in the middle of transmission, it completes the current character before stopping.*/
export const UART_CTL_TXE: any = '1'

/**
UART Transmit enabled*/
export const UART_CTL_TXE_EN: any = '1'

/**
UART Transmit disabled*/
export const UART_CTL_TXE_DIS: any = '0'

/**
UART Loop Back Enable

Enabling the loop-back mode connects the UARTTXD output from the UART to UARTRXD input of the UART.*/
export const UART_CTL_LBE: any = '1'

/**
Loop Back enabled*/
export const UART_CTL_LBE_EN: any = '1'

/**
Loop Back disabled*/
export const UART_CTL_LBE_DIS: any = '0'

/**
UART FIFO Concatenation Enable

Enabling the FIFO concatenation in TX mode resulting in 16 TX buffers.*/
export const UART_CTL_FCEN: any = '1'

/**
UART FIFO Concatenation  enabled*/
export const UART_CTL_FCEN_EN: any = '1'

/**
UART FIFO Concatenation  disabled*/
export const UART_CTL_FCEN_DIS: any = '0'

/**
	Reads to this field return zero, writes to this field are ignored.*/
export const UART_CTL_RESERVED1: any = '3'

/**
SIR low power IrDA mode

This bit selects the IrDA encoding mode*/
export const UART_CTL_SIRLP: any = '1'

/**
Low-level bits are transmitted with a pulse width of 3 times the period of IrLPBaud16(which has a frequency of (UARTCLK frequency)/UARTILP.ILPDVSR), regardless of the selected bit rate.

In low-power IrDA mode the UART rejects random noise on the received serial data
input by ignoring SIRIN pulses that are less than 3 periods of IrLPBaud16.*/
export const UART_CTL_SIRLP_EN: any = '1'

/**
Low-level bits are transmitted as active high with a 3/16th period width,*/
export const UART_CTL_SIRLP_DIS: any = '0'

/**
SIR Enable

This bit has no effect if UARTEN bit disables the UART.*/
export const UART_CTL_SIREN: any = '1'

/**
IrDA SIR ENDEC is enabled. Data is transmitted and received via nSIROUT and SIRIN.*/
export const UART_CTL_SIREN_EN: any = '1'

/**
IrDA SIR ENDEC is disabled*/
export const UART_CTL_SIREN_DIS: any = '0'

/**
UART Enable*/
export const UART_CTL_UARTEN: any = '1'

/**
UART enabled*/
export const UART_CTL_UARTEN_EN: any = '1'

/**
UART disabled*/
export const UART_CTL_UARTEN_DIS: any = '0'


// -------- REGISTER IFLS -------- //

/**
Interrupt FIFO Level Select*/
/**
	Reads to this field return zero, writes to this field are ignored.*/
export const UART_IFLS_RESERVED6: any = '26'

/**
Receive interrupt FIFO level select:

This field sets the trigger points for the receive interrupt. Values 0b101-0b111 are reserved.*/
export const UART_IFLS_RXSEL: any = '3'

/**
Receive FIFO becomes $gt;= 3/4 full*/
export const UART_IFLS_RXSEL_THREEQU: any = '3'

/**
Receive FIFO becomes $gt;= 1/2 full*/
export const UART_IFLS_RXSEL_HALF: any = '2'

/**
Receive FIFO becomes $gt;= 1/4 full*/
export const UART_IFLS_RXSEL_QUARTER: any = '1'

/**
Transmit interrupt FIFO level select:

This field sets the trigger points for the transmit interrupt. Values 0b101-0b111 are reserved.*/
export const UART_IFLS_TXSEL: any = '3'

/**
Transmit FIFO becomes $lt;= 3/4 full*/
export const UART_IFLS_TXSEL_THREEQU: any = '3'

/**
Transmit FIFO becomes $lt;= 1/2 full*/
export const UART_IFLS_TXSEL_HALF: any = '2'

/**
Transmit FIFO becomes $lt;= 1/4 full*/
export const UART_IFLS_TXSEL_QUARTER: any = '1'


// -------- REGISTER IMSC -------- //

/**
Interrupt Mask Set/Clear*/
/**
	Reads to this field return zero, writes to this field are ignored.*/
export const UART_IMSC_RESERVED14: any = '18'

/**
RX DMA done interrupt mask. A read returns the current mask for UART's RXDMADONE interrupt. On a write of 1, the mask of the RXDMADONE interrupt is set which means the interrupt state will be reflected in MIS.RXDMADONE. A write of 0 clears the mask which means MIS.RXDMADONE will not reflect the interrupt.*/
export const UART_IMSC_RXDMADONE: any = '1'

/**
TX DMA done interrupt mask. A read returns the current mask for UART's TXDMADONE interrupt. On a write of 1, the mask of the TXDMADONE interrupt is set which means the interrupt state will be reflected in MIS.TXDMADONE. A write of 0 clears the mask which means MIS.TXDMADONE will not reflect the interrupt.*/
export const UART_IMSC_TXDMADONE: any = '1'

/**
End of Transmission interrupt mask. A read returns the current mask for UART's EoT interrupt. On a write of 1, the mask of the EoT interrupt is set which means the interrupt state will be reflected in MIS.EOT. A write of 0 clears the mask which means MIS.EOT will not reflect the interrupt.*/
export const UART_IMSC_EOT: any = '1'

/**
Overrun error interrupt mask. A read returns the current mask for UART's overrun error interrupt. On a write of 1, the mask of the overrun error interrupt is set which means the interrupt state will be reflected in MIS.OE. A write of 0 clears the mask which means MIS.OE will not reflect the interrupt. */
export const UART_IMSC_OE: any = '1'

/**
Break error interrupt mask. A read returns the current mask for UART's break error interrupt. On a write of 1, the mask of the overrun error interrupt is set which means the interrupt state will be reflected in MIS.BE. A write of 0 clears the mask which means MIS.BE will not reflect the interrupt. */
export const UART_IMSC_BE: any = '1'

/**
Parity error interrupt mask. A read returns the current mask for UART's parity error interrupt. On a write of 1, the mask of the overrun error interrupt is set which means the interrupt state will be reflected in MIS.PE. A write of 0 clears the mask which means MIS.PE will not reflect the interrupt. */
export const UART_IMSC_PE: any = '1'

/**
Framing error interrupt mask. A read returns the current mask for UART's framing error interrupt. On a write of 1, the mask of the overrun error interrupt is set which means the interrupt state will be reflected in MIS.FE. A write of 0 clears the mask which means MIS.FE will not reflect the interrupt. */
export const UART_IMSC_FE: any = '1'

/**
Receive timeout interrupt mask. A read returns the current mask for UART's receive timeout interrupt. On a write of 1, the mask of the overrun error interrupt is set which means the interrupt state will be reflected in MIS.RT. A write of 0 clears the mask which means this bitfield will not reflect the interrupt. 

The raw interrupt for receive timeout RIS.RT cannot be set unless the mask is set (RT = 1). This is because the mask acts as an enable for power saving. That is, the same status can be read from MIS.RT and RIS.RT.*/
export const UART_IMSC_RT: any = '1'

/**
Transmit interrupt mask. A read returns the current mask for UART's transmit interrupt. On a write of 1, the mask of the overrun error interrupt is set which means the interrupt state will be reflected in MIS.TX. A write of 0 clears the mask which means MIS.TX will not reflect the interrupt. */
export const UART_IMSC_TX: any = '1'

/**
Receive interrupt mask. A read returns the current mask for UART's receive interrupt. On a write of 1, the mask of the overrun error interrupt is set which means the interrupt state will be reflected in MIS.RX. A write of 0 clears the mask which means MIS.RX will not reflect the interrupt. */
export const UART_IMSC_RX: any = '1'

/**
	Reads to this field return zero, writes to this field are ignored.*/
export const UART_IMSC_RESERVED2: any = '2'

/**
Clear to Send (CTS) modem interrupt mask. A read returns the current mask for UART's clear to send interrupt. On a write of 1, the mask of the overrun error interrupt is set which means the interrupt state will be reflected in MIS.CTSM. A write of 0 clears the mask which means MIS.CTSM will not reflect the interrupt. */
export const UART_IMSC_CTSM: any = '1'

/**
	Reads to this field return zero, writes to this field are ignored.*/
export const UART_IMSC_RESERVED0: any = '1'


// -------- REGISTER RIS -------- //

/**
Raw Interrupt Status*/
/**
	Reads to this field return zero, writes to this field are ignored.*/
export const UART_RIS_RESERVED14: any = '18'

/**
RX DMA done interrupt status:

This field returns the raw interrupt state of UART's RX DMA done interrupt. RX DMA done flag is set when you recieve RX DMA done status from dma module.*/
export const UART_RIS_RXDMADONE: any = '1'

/**
TX DMA done interrupt status:

This field returns the raw interrupt state of UART's TX DMA done interrupt. TX DMA done flag is set when you recieve TX DMA done status from dma module.*/
export const UART_RIS_TXDMADONE: any = '1'

/**
End of Transmission interrupt status:

This field returns the raw interrupt state of UART's end of transmission interrupt. End of transmission flag is set when all the Transmit data in the FIFO and on the TX Line is tranmitted.*/
export const UART_RIS_EOT: any = '1'

/**
Overrun error interrupt status: 

This field returns the raw interrupt state of UART's overrun error interrupt. Overrun error occurs if data is received and the receive FIFO is full.*/
export const UART_RIS_OE: any = '1'

/**
Break error interrupt status:

This field returns the raw interrupt state of UART's break error interrupt. Break error is set when a break condition is detected, indicating that the received data input (UARTRXD input pin) was held LOW for longer than a full-word transmission time (defined as start, data, parity and stop bits).*/
export const UART_RIS_BE: any = '1'

/**
Parity error interrupt status:

This field returns the raw interrupt state of UART's parity error interrupt. Parity error is set if the parity of the received data character does not match the parity that the LCRH.EPS and LCRH.SPS select.*/
export const UART_RIS_PE: any = '1'

/**
Framing error interrupt status:

This field returns the raw interrupt state of UART's framing error interrupt. Framing error is set if the received character does not have a valid stop bit (a valid stop bit is 1).*/
export const UART_RIS_FE: any = '1'

/**
Receive timeout interrupt status:

This field returns the raw interrupt state of UART's receive timeout interrupt. The receive timeout interrupt is asserted when the receive FIFO is not empty, and no more data is received during a 32-bit period. The receive timeout interrupt is cleared either when the FIFO becomes empty through reading all the data, or when a 1 is written to ICR.RT.
The raw interrupt for receive timeout cannot be set unless the mask is set (IMSC.RT = 1). This is because the mask acts as an enable for power saving. That is, the same status can be read from MIS.RT and RT.*/
export const UART_RIS_RT: any = '1'

/**
Transmit interrupt status: 

This field returns the raw interrupt state of UART's transmit interrupt.
When FIFOs are enabled (LCRH.FEN = 1), the transmit interrupt is asserted if the number of bytes in transmit FIFO is equal to or lower than the programmed trigger level (IFLS.TXSEL). The transmit interrupt is cleared by writing data to the transmit FIFO until it becomes greater than the trigger level, or by clearing the interrupt through ICR.TX.
When FIFOs are disabled (LCRH.FEN = 0), that is they have a depth of one location, the transmit interrupt is asserted if there is no data present in the transmitters single location. It is cleared by performing a single write to the transmit FIFO, or by clearing the interrupt through ICR.TX.*/
export const UART_RIS_TX: any = '1'

/**
Receive interrupt status:

This field returns the raw interrupt state of UART's receive interrupt. 
When FIFOs are enabled (LCRH.FEN = 1), the receive interrupt is asserted if the receive FIFO reaches the programmed trigger
level (IFLS.RXSEL). The receive interrupt is cleared by reading data from the receive FIFO until it becomes less than the trigger level, or by clearing the interrupt through ICR.RX.
When FIFOs are disabled (LCRH.FEN = 0), that is they have a depth of one location, the receive interrupt is asserted if data is received
thereby filling the location. The receive interrupt is cleared by performing a single read of the receive FIFO, or by clearing the interrupt through ICR.RX.*/
export const UART_RIS_RX: any = '1'

/**
	Reads to this field return zero, writes to this field are ignored.*/
export const UART_RIS_RESERVED2: any = '2'

/**
Clear to Send (CTS) modem interrupt status: 

This field returns the raw interrupt state of UART's clear to send interrupt.*/
export const UART_RIS_CTSM: any = '1'

/**
	Reads to this field return zero, writes to this field are ignored.*/
export const UART_RIS_RESERVED0: any = '1'


// -------- REGISTER MIS -------- //

/**
Masked Interrupt Status*/
/**
	Reads to this field return zero, writes to this field are ignored. Read as zero, do not modify*/
export const UART_MIS_RESERVED14: any = '18'

/**
RX DMA done interrupt status:

This field returns the masked interrupt state of the RX DMA done interrupt which is the bitiwse AND product of raw interrupt state RIS.RXDMADONE and the mask setting IMSC.RXDMADONE.*/
export const UART_MIS_RXDMADONE: any = '1'

/**
TX DMA done interrupt status:

This field returns the masked interrupt state of the TX DMA done interrupt which is the bitwise AND product of raw interrupt state RIS.TXDMADONE and the mask setting IMSC.TXDMADONE.*/
export const UART_MIS_TXDMADONE: any = '1'

/**
End of Transmission interrupt status:

This field returns the masked interrupt state of the End of transmission interrupt which is the bitwise AND product of raw interrupt state RIS.EOT and the mask setting IMSC.EOT.*/
export const UART_MIS_EOT: any = '1'

/**
Overrun error masked interrupt status: 

This field returns the masked interrupt state of the overrun interrupt which is the bitwise AND product of raw interrupt state RIS.OE and the mask setting IMSC.OE.*/
export const UART_MIS_OE: any = '1'

/**
Break error masked interrupt status: 

This field returns the masked interrupt state of the break error interrupt which is the bitiwse AND product of raw interrupt state RIS.BE and the mask setting IMSC.BE.*/
export const UART_MIS_BE: any = '1'

/**
Parity error masked interrupt status:

This field returns the masked interrupt state of the parity error interrupt which is the bitiwise AND product of raw interrupt state RIS.PE and the mask setting IMSC.PE.*/
export const UART_MIS_PE: any = '1'

/**
Framing error masked interrupt status: Returns the masked interrupt state of the framing error interrupt which is the bitiwse AND product of raw interrupt state RIS.FE and the mask setting IMSC.FE.*/
export const UART_MIS_FE: any = '1'

/**
Receive timeout masked interrupt status: 

Returns the masked interrupt state of the receive timeout interrupt.
The raw interrupt for receive timeout cannot be set unless the mask is set (IMSC.RT = 1). This is because the mask acts as an enable for power saving. That is, the same status can be read from MIS.RT and RIS.RT.*/
export const UART_MIS_RT: any = '1'

/**
Transmit masked interrupt status: 

This field returns the masked interrupt state of the transmit interrupt  which is the bitiwse AND product of raw interrupt state RIS.TX and the mask setting IMSC.TX.*/
export const UART_MIS_TX: any = '1'

/**
Receive masked interrupt status:

This field returns the masked interrupt state of the receive interrupt  which is the bitwise AND product of raw interrupt state RIS.RX and the mask setting IMSC.RX.*/
export const UART_MIS_RX: any = '1'

/**
	Reads to this field return zero, writes to this field are ignored.*/
export const UART_MIS_RESERVED2: any = '2'

/**
Clear to Send (CTS) modem masked interrupt status:

This field returns the masked interrupt state of the clear to send interrupt which is the bitwise AND product of raw interrupt state RIS.CTS and the mask setting IMSC.CTS.*/
export const UART_MIS_CTSM: any = '1'

/**
	Reads to this field return zero, writes to this field are ignored. Write 0.*/
export const UART_MIS_RESERVED0: any = '1'


// -------- REGISTER ICR -------- //

/**
Interrupt Clear

On a write of 1, the corresponding interrupt is cleared. A write of 0 has no effect.*/
/**
	Reads to this field return zero, writes to this field are ignored. Read as zero, do not modify*/
export const UART_ICR_RESERVED16: any = '18'

/**
RX DMA Done interrupt clear:

Writing 1 to this field clears the RX DMA done interrupt (RIS.RXDMADONE). Writing 0 has no effect.*/
export const UART_ICR_RXDMADONE: any = '1'

/**
TX DMA Done interrupt clear:

Writing 1 to this field clears the TX DMA done interrupt (RIS.TXDMADONE). Writing 0 has no effect.*/
export const UART_ICR_TXDMADONE: any = '1'

/**
End of Transmission interrupt clear:

Writing 1 to this field clears the End of Transmission interrupt (RIS.EOT). Writing 0 has no effect.*/
export const UART_ICR_EOT: any = '1'

/**
Overrun error interrupt clear:

Writing 1 to this field clears the overrun error interrupt (RIS.OE). Writing 0 has no effect.*/
export const UART_ICR_OE: any = '1'

/**
Break error interrupt clear:

Writing 1 to this field clears the break error interrupt (RIS.BE). Writing 0 has no effect.*/
export const UART_ICR_BE: any = '1'

/**
Parity error interrupt clear:

Writing 1 to this field clears the parity error interrupt (RIS.PE). Writing 0 has no effect.*/
export const UART_ICR_PE: any = '1'

/**
Framing error interrupt clear:

Writing 1 to this field clears the framing error interrupt (RIS.FE). Writing 0 has no effect.*/
export const UART_ICR_FE: any = '1'

/**
Receive timeout interrupt clear:

Writing 1 to this field clears the receive timeout interrupt (RIS.RT). Writing 0 has no effect.*/
export const UART_ICR_RT: any = '1'

/**
Transmit interrupt clear:

Writing 1 to this field clears the transmit interrupt (RIS.TX). Writing 0 has no effect.*/
export const UART_ICR_TX: any = '1'

/**
Receive interrupt clear:

Writing 1 to this field clears the receive interrupt (RIS.RX). Writing 0 has no effect.*/
export const UART_ICR_RX: any = '1'

/**
	Reads to this field return zero, writes to this field are ignored. Write 0*/
export const UART_ICR_RESERVED2: any = '2'

/**
Clear to Send (CTS) modem interrupt clear:

Writing 1 to this field clears the clear to send interrupt (RIS.CTS). Writing 0 has no effect.*/
export const UART_ICR_CTSM: any = '1'

/**
	Reads to this field return zero, writes to this field are ignored. Write 0.*/
export const UART_ICR_RESERVED0: any = '1'


// -------- REGISTER DMACTL -------- //

/**
DMA Control*/
/**
	Reads to this field return zero, writes to this field are ignored. Read as zero, do not modify.*/
export const UART_DMACTL_RESERVED3: any = '29'

/**
DMA on error. If this bit is set to 1, the DMA receive request outputs (for  single and burst requests) are disabled when the UART error interrupt is asserted (more specifically if any of the error interrupts RIS.PERIS, RIS.BERIS, RIS.FERIS or RIS.OERIS are asserted).*/
export const UART_DMACTL_DMAONERR: any = '1'

/**
Transmit DMA enable. If this bit is set to 1, DMA for the transmit FIFO is enabled.*/
export const UART_DMACTL_TXDMAE: any = '1'

/**
Receive DMA enable. If this bit is set to 1, DMA for the receive FIFO is enabled.*/
export const UART_DMACTL_RXDMAE: any = '1'


// -------- REGISTER RESERVED1 -------- //

/**
UART Reserved Area*/
/**
	Reads to this field return zero, writes to this field are ignored. Read as zero, do not modify.*/
export const UART_RESERVED1_RESERVED: any = '32'


// -------- REGISTER RESERVED3 -------- //

/**
UART Reserved Area*/
/**
	Reads to this field return zero, writes to this field are ignored. */
export const UART_RESERVED3_RESERVED: any = '32'


// -------- REGISTER RESERVED4 -------- //

/**
UART Reserved Area For Future ID Expansion*/
/**
	Reads to this field return zero, writes to this field are ignored. */
export const UART_RESERVED4_RESERVED: any = '32'


// -------- INSTANCES -------- //

export const IOC = { } as IOC_t
export const CLKCTL = { } as CLKCTL_t
export const GPIO = { } as GPIO_t
export const UART0 = { } as UART_t

