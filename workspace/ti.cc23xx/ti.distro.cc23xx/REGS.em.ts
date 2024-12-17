import em from '@$$emscript'
export const em$_U = em.declare('COMPOSITE')

// -------- MODULE CLKCTL -------- //

export interface CLKCTL_t {
    DESC: typeof DESC
    DESCEX0: typeof DESCEX0
    DESCEX1: typeof DESCEX1
    CLKCFG0: typeof CLKCFG0
    CLKCFG1: typeof CLKCFG1
    CLKENSET0: typeof CLKENSET0
    CLKENSET1: typeof CLKENSET1
    CLKENCLR0: typeof CLKENCLR0
    CLKENCLR1: typeof CLKENCLR1
    STBYPTR: typeof STBYPTR
    IDLECFG: typeof IDLECFG
}

// -------- REGISTER DESC -------- //

/**
Description Register. 

This register provides IP module ID, revision information, instance index and standard MMR registers offset.*/
const DESC = new class {
    $$: any
    /**
Module identifier used to uniquely identify this IP.    */
    MODID: any
    /**
Standard IP MMR block offset. Standard IP MMRs are the set of from aggregated IRQ registers till DTB.


0: Standard IP MMRs do not exist
0x1-0xF: Standard IP MMRs begin at offset of (64*STDIPOFF from the base IP address)    */
    STDIPOFF: any
    /**
IP Instance ID number. If multiple instances of IP exist in the device, this field can identify the instance number (0-15).    */
    INSTIDX: any
    /**
Major revision of IP 0-15    */
    MAJREV: any
    /**
Minor revision of IP 0-15.    */
    MINREV: any
}

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
const DESCEX0 = new class {
    $$: any
    /**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.    */
    RESERVED31: any
    /**
IP status on device    */
    LGPT3: any
    /**
IP status on device    */
    LGPT2: any
    /**
IP status on device    */
    LGPT1: any
    /**
IP status on device    */
    LGPT0: any
    /**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.    */
    RESERVED18: any
    /**
IP status on device    */
    DMA: any
    /**
IP status on device    */
    LAES: any
    /**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.    */
    RESERVED15: any
    /**
IP status on device    */
    ADC0: any
    /**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.    */
    RESERVED11: any
    /**
IP status on device    */
    SPI0: any
    /**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.    */
    RESERVED7: any
    /**
IP status on device    */
    I2C0: any
    /**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.    */
    RESERVED3: any
    /**
IP status on device    */
    UART0: any
    /**
IP status on device    */
    LRFD: any
    /**
IP status on device    */
    GPIO: any
}

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
const DESCEX1 = new class {
    $$: any
    /**
System flash availability    */
    FLASHSZ: any
    /**
System SRAM availability    */
    SRAMSZ: any
    /**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.    */
    RESERVED16: any
    /**
System radio feature availability    */
    ROPT: any
    /**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.    */
    RESERVED0: any
}

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
const CLKCFG0 = new class {
    $$: any
    /**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.    */
    RESERVED31: any
    /**
IP clock configuration    */
    LGPT3: any
    /**
IP clock configuration    */
    LGPT2: any
    /**
IP clock configuration    */
    LGPT1: any
    /**
IP clock configuration    */
    LGPT0: any
    /**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.    */
    RESERVED18: any
    /**
IP clock configuration    */
    DMA: any
    /**
IP clock configuration    */
    LAES: any
    /**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.    */
    RESERVED15: any
    /**
IP clock configuration    */
    ADC0: any
    /**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.    */
    RESERVED11: any
    /**
IP clock configuration    */
    SPI0: any
    /**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.    */
    RESERVED7: any
    /**
IP clock configuration    */
    I2C0: any
    /**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.    */
    RESERVED3: any
    /**
IP clock configuration    */
    UART0: any
    /**
IP clock configuration    */
    LRFD: any
    /**
IP clock configuration

    */
    GPIO: any
}

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
const CLKCFG1 = new class {
    $$: any
    /**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.    */
    RESERVED0: any
}

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const CLKCTL_CLKCFG1_RESERVED0: any = '32'


// -------- REGISTER CLKENSET0 -------- //

/**
Clock Enable Set Register 0.

This register enables IP clocks in the system. 
Used to set the corresponding fields in CLKCFG0 to 1.*/
const CLKENSET0 = new class {
    $$: any
    /**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.    */
    RESERVED31: any
    /**
Configure IP clock enable    */
    LGPT3: any
    /**
Configure IP clock enable    */
    LGPT2: any
    /**
Configure IP clock enable    */
    LGPT1: any
    /**
Configure IP clock enable    */
    LGPT0: any
    /**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.    */
    RESERVED18: any
    /**
Configure IP clock enable    */
    DMA: any
    /**
Configure IP clock enable    */
    LAES: any
    /**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.    */
    RESERVED15: any
    /**
Configure IP clock enable    */
    ADC0: any
    /**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.    */
    RESERVED11: any
    /**
Configure IP clock enable    */
    SPI0: any
    /**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.    */
    RESERVED7: any
    /**
Configure IP clock enable    */
    I2C0: any
    /**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.    */
    RESERVED3: any
    /**
Configure IP clock enable    */
    UART0: any
    /**
Configure IP clock enable    */
    LRFD: any
    /**
Configure IP clock enable    */
    GPIO: any
}

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
const CLKENSET1 = new class {
    $$: any
    /**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.    */
    RESERVED0: any
}

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const CLKCTL_CLKENSET1_RESERVED0: any = '32'


// -------- REGISTER CLKENCLR0 -------- //

/**
Clock Enable Clear Register 0.

This register disables IP clocks in the system. 
Used to clear the corresponding fields in CLKCFG0 to 0.*/
const CLKENCLR0 = new class {
    $$: any
    /**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.    */
    RESERVED31: any
    /**
Configure IP clock enable    */
    LGPT3: any
    /**
Configure IP clock enable    */
    LGPT2: any
    /**
Configure IP clock enable    */
    LGPT1: any
    /**
Configure IP clock enable    */
    LGPT0: any
    /**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.    */
    RESERVED18: any
    /**
Configure IP clock enable    */
    DMA: any
    /**
Configure IP clock enable    */
    LAES: any
    /**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.    */
    RESERVED15: any
    /**
Configure IP clock enable    */
    ADC0: any
    /**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.    */
    RESERVED11: any
    /**
Configure IP clock enable    */
    SPI0: any
    /**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.    */
    RESERVED7: any
    /**
Configure IP clock enable    */
    I2C0: any
    /**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.    */
    RESERVED3: any
    /**
Configure IP clock enable    */
    UART0: any
    /**
Configure IP clock enable    */
    LRFD: any
    /**
Configure IP clock enable    */
    GPIO: any
}

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
const CLKENCLR1 = new class {
    $$: any
    /**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.    */
    RESERVED0: any
}

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const CLKCTL_CLKENCLR1_RESERVED0: any = '32'


// -------- REGISTER STBYPTR -------- //

/**
Internal. Only to be used through TI provided API.*/
const STBYPTR = new class {
    $$: any
    /**
Internal. Only to be used through TI provided API.    */
    VAL: any
}

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
const IDLECFG = new class {
    $$: any
    /**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.    */
    RESERVED1: any
    /**
Flash LDO configuration in SLEEP/IDLE mode.    */
    MODE: any
}

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


// -------- MODULE UART -------- //

export interface UART_t {
    DR: typeof DR
    RSR_ECR: typeof RSR_ECR
    RESERVED0: typeof RESERVED0
    FR: typeof FR
    RESERVED2: typeof RESERVED2
    UARTILPR: typeof UARTILPR
    IBRD: typeof IBRD
    FBRD: typeof FBRD
    LCRH: typeof LCRH
    CTL: typeof CTL
    IFLS: typeof IFLS
    IMSC: typeof IMSC
    RIS: typeof RIS
    MIS: typeof MIS
    ICR: typeof ICR
    DMACTL: typeof DMACTL
    RESERVED1: typeof RESERVED1
    RESERVED3: typeof RESERVED3
    RESERVED4: typeof RESERVED4
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
const DR = new class {
    $$: any
    /**
    Reads to this field return zero, writes to this field are ignored.    */
    RESERVED12: any
    /**
UART Overrun Error:

This bit is set to 1 if data is received and the receive FIFO is already full. The FIFO contents remain valid because no more data is written when the FIFO is full, only the contents of the shift register are overwritten.
This is cleared to 0 once there is an empty space in the FIFO and a new character can be written to it.    */
    OE: any
    /**
UART Break Error:

This bit is set to 1 if a break condition was detected, indicating that the received data input (UARTRXD input pin) was held LOW for longer than a full-word transmission time (defined as start, data, parity and stop bits).
In FIFO mode, this error is associated with the character at the top of the FIFO (i.e., the oldest received data character since last read). When a break occurs, a 0 character is loaded into the FIFO. The next character is enabled after the receive data input (UARTRXD input pin) goes to a 1 (marking state), and the next valid start bit is received.    */
    BE: any
    /**
UART Parity Error:

When set to 1, it indicates that the parity of the received data character does not match the parity that the LCRH.EPS and LCRH.SPS select.
In FIFO mode, this error is associated with the character at the top of the FIFO (i.e., the oldest received data character since last read).    */
    PE: any
    /**
UART Framing Error:

When set to 1, it indicates that the received character did not have a valid stop bit (a valid stop bit is 1).
In FIFO mode, this error is associated with the character at the top of the FIFO (i.e., the oldest received data character since last read).    */
    FE: any
    /**
Data transmitted or received:

On writes, the transmit data character is pushed into the FIFO.
On reads, the oldest received data character since the last read is returned.    */
    DATA: any
}

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
const RSR_ECR = new class {
    $$: any
    /**
    Reads to this field return zero, writes to this field are ignored.    */
    RESERVED4: any
    /**
UART Overrun Error:

This bit is set to 1 if data is received and the receive FIFO is already full. The FIFO contents remain valid because no more data is written when the FIFO is full, only the contents of the shift register are overwritten.
This is cleared to 0 once there is an empty space in the FIFO and a new character can be written to it.    */
    OE: any
    /**
UART Break Error:

This bit is set to 1 if a break condition was detected, indicating that the received data input (UARTRXD input pin) was held LOW for longer than a full-word transmission time (defined as start, data, parity and stop bits).
When a break occurs, a 0 character is loaded into the FIFO. The next character is enabled after the receive data input (UARTRXD input pin) goes to a 1 (marking state), and the next valid start bit is received.    */
    BE: any
    /**
UART Parity Error:

When set to 1, it indicates that the parity of the received data character does not match the parity that the LCRH.EPS and LCRH.SPS select.    */
    PE: any
    /**
UART Framing Error:

When set to 1, it indicates that the received character did not have a valid stop bit (a valid stop bit is 1).    */
    FE: any
}

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
const RESERVED0 = new class {
    $$: any
    /**
    Reads to this field return zero, writes to this field are ignored.    */
    RESERVED: any
}

/**
    Reads to this field return zero, writes to this field are ignored.*/
export const UART_RESERVED0_RESERVED: any = '32'


// -------- REGISTER FR -------- //

/**
Flag

Reads from this register return the UART flags.*/
const FR = new class {
    $$: any
    /**
    Reads to this field return zero, writes to this field are ignored.    */
    RESERVED8: any
    /**
UART Transmit FIFO Empty:

The meaning of this bit depends on the state of LCRH.FEN .
  - If the FIFO is disabled, this bit is set when the transmit holding register is empty.
  - If the FIFO is enabled, this bit is set when the transmit FIFO is empty.
This bit does not indicate if there is data in the transmit shift register.    */
    TXFE: any
    /**
UART Receive FIFO Full: 

The meaning of this bit depends on the state of LCRH.FEN.
  - If the FIFO is disabled, this bit is set when the receive holding register is full.
  - If the FIFO is enabled, this bit is set when the receive FIFO is full.    */
    RXFF: any
    /**
UART Transmit FIFO Full:

Transmit FIFO full. The meaning of this bit depends on the state of LCRH.FEN.
  - If the FIFO is disabled, this bit is set when the transmit holding register is full.
  - If the FIFO is enabled, this bit is set when the transmit FIFO is full.    */
    TXFF: any
    /**
UART Receive FIFO Empty:

Receive FIFO empty. The meaning of this bit depends on the state of LCRH.FEN.
  - If the FIFO is disabled, this bit is set when the receive holding register is empty.
  - If the FIFO is enabled, this bit is set when the receive FIFO is empty.    */
    RXFE: any
    /**
UART Busy: 

If this bit is set to 1, the UART is busy transmitting data. This bit remains set until the complete byte, including all the stop bits, has been sent from the shift register.
This bit is set as soon as the transmit FIFO becomes non-empty, regardless of whether the UART is enabled or not.    */
    BUSY: any
    /**
Reserved    */
    RESERVED0: any
    /**
Clear To Send: 

This bit is the complement of the active-low UART CTS input pin.
That is, the bit is 1 when CTS input pin is LOW.    */
    CTS: any
}

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
const RESERVED2 = new class {
    $$: any
    /**
    Reads to this field return zero, writes to this field are ignored.    */
    RESERVED: any
}

/**
    Reads to this field return zero, writes to this field are ignored.*/
export const UART_RESERVED2_RESERVED: any = '32'


// -------- REGISTER UARTILPR -------- //

/**
IrDA Low-Power Counter Register.


This is an 8-bit register that stores the low-power counter divisor value used to generate the IrLPBaud16 signal by dividing down of UARTCLK.*/
const UARTILPR = new class {
    $$: any
    /**
    Reads to this field return zero, writes to this field are ignored.    */
    RESERVED8: any
    /**
8 bit low-power divisor value. In low-power IrDA mode the UART rejects random noise on the received serial data

input by ignoring SIRIN pulses that are less than 3 periods of IrLPBaud16.    */
    ILPDVSR: any
}

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
const IBRD = new class {
    $$: any
    /**
    Reads to this field return zero, writes to this field are ignored.    */
    RESERVED16: any
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
    DIVINT: any
}

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
const FBRD = new class {
    $$: any
    /**
    Reads to this field return zero, writes to this field are ignored.    */
    RESERVED6: any
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
    DIVFRAC: any
}

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
const LCRH = new class {
    $$: any
    /**
    Reads to this field return zero, writes to this field are ignored.    */
    RESERVED8: any
    /**
UART Stick Parity Select:


0: Stick parity is disabled
1: The parity bit is transmitted and checked as invert of EPS field (i.e. the parity bit is transmitted and checked as 1 when EPS = 0).

This bit has no effect when PEN disables parity checking and generation.    */
    SPS: any
    /**
UART Word Length:

These bits indicate the number of data bits transmitted or received in a frame.    */
    WLEN: any
    /**
UART Enable FIFOs    */
    FEN: any
    /**
UART Two Stop Bits Select:

If this bit is set to 1, two stop bits are transmitted at the end of the frame. The receive logic does not check for two stop bits being received.    */
    STP2: any
    /**
UART Even Parity Select    */
    EPS: any
    /**
UART Parity Enable

This bit controls generation and checking of parity bit. 
    */
    PEN: any
    /**
UART Send Break

If this bit is set to 1, a low-level is continually output on the UARTTXD output pin, after completing transmission of the current character. For the proper execution of the break command, the
software must set this bit for at least two complete frames. For normal use, this bit must be cleared to 0.    */
    BRK: any
}

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
const CTL = new class {
    $$: any
    /**
    Reads to this field return zero, writes to this field are ignored.    */
    RESERVED16: any
    /**
CTS hardware flow control enable    */
    CTSEN: any
    /**
RTS hardware flow control enable    */
    RTSEN: any
    /**
    Reads to this field return zero, writes to this field are ignored.    */
    RESERVED12: any
    /**
Request to Send

This bit is the complement of the active-low UART RTS output. That is, when the bit is programmed to a 1 then RTS output on the pins is LOW.    */
    RTS: any
    /**
    Reads to this field return zero, writes to this field are ignored.    */
    RESERVED10: any
    /**
UART Receive Enable

If the UART is disabled in the middle of reception, it completes the current character before stopping.    */
    RXE: any
    /**
UART Transmit Enable

If the UART is disabled in the middle of transmission, it completes the current character before stopping.    */
    TXE: any
    /**
UART Loop Back Enable

Enabling the loop-back mode connects the UARTTXD output from the UART to UARTRXD input of the UART.    */
    LBE: any
    /**
UART FIFO Concatenation Enable

Enabling the FIFO concatenation in TX mode resulting in 16 TX buffers.    */
    FCEN: any
    /**
    Reads to this field return zero, writes to this field are ignored.    */
    RESERVED1: any
    /**
SIR low power IrDA mode

This bit selects the IrDA encoding mode    */
    SIRLP: any
    /**
SIR Enable

This bit has no effect if UARTEN bit disables the UART.    */
    SIREN: any
    /**
UART Enable    */
    UARTEN: any
}

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
const IFLS = new class {
    $$: any
    /**
    Reads to this field return zero, writes to this field are ignored.    */
    RESERVED6: any
    /**
Receive interrupt FIFO level select:

This field sets the trigger points for the receive interrupt. Values 0b101-0b111 are reserved.    */
    RXSEL: any
    /**
Transmit interrupt FIFO level select:

This field sets the trigger points for the transmit interrupt. Values 0b101-0b111 are reserved.    */
    TXSEL: any
}

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
const IMSC = new class {
    $$: any
    /**
    Reads to this field return zero, writes to this field are ignored.    */
    RESERVED14: any
    /**
RX DMA done interrupt mask. A read returns the current mask for UART's RXDMADONE interrupt. On a write of 1, the mask of the RXDMADONE interrupt is set which means the interrupt state will be reflected in MIS.RXDMADONE. A write of 0 clears the mask which means MIS.RXDMADONE will not reflect the interrupt.    */
    RXDMADONE: any
    /**
TX DMA done interrupt mask. A read returns the current mask for UART's TXDMADONE interrupt. On a write of 1, the mask of the TXDMADONE interrupt is set which means the interrupt state will be reflected in MIS.TXDMADONE. A write of 0 clears the mask which means MIS.TXDMADONE will not reflect the interrupt.    */
    TXDMADONE: any
    /**
End of Transmission interrupt mask. A read returns the current mask for UART's EoT interrupt. On a write of 1, the mask of the EoT interrupt is set which means the interrupt state will be reflected in MIS.EOT. A write of 0 clears the mask which means MIS.EOT will not reflect the interrupt.    */
    EOT: any
    /**
Overrun error interrupt mask. A read returns the current mask for UART's overrun error interrupt. On a write of 1, the mask of the overrun error interrupt is set which means the interrupt state will be reflected in MIS.OE. A write of 0 clears the mask which means MIS.OE will not reflect the interrupt.     */
    OE: any
    /**
Break error interrupt mask. A read returns the current mask for UART's break error interrupt. On a write of 1, the mask of the overrun error interrupt is set which means the interrupt state will be reflected in MIS.BE. A write of 0 clears the mask which means MIS.BE will not reflect the interrupt.     */
    BE: any
    /**
Parity error interrupt mask. A read returns the current mask for UART's parity error interrupt. On a write of 1, the mask of the overrun error interrupt is set which means the interrupt state will be reflected in MIS.PE. A write of 0 clears the mask which means MIS.PE will not reflect the interrupt.     */
    PE: any
    /**
Framing error interrupt mask. A read returns the current mask for UART's framing error interrupt. On a write of 1, the mask of the overrun error interrupt is set which means the interrupt state will be reflected in MIS.FE. A write of 0 clears the mask which means MIS.FE will not reflect the interrupt.     */
    FE: any
    /**
Receive timeout interrupt mask. A read returns the current mask for UART's receive timeout interrupt. On a write of 1, the mask of the overrun error interrupt is set which means the interrupt state will be reflected in MIS.RT. A write of 0 clears the mask which means this bitfield will not reflect the interrupt. 

The raw interrupt for receive timeout RIS.RT cannot be set unless the mask is set (RT = 1). This is because the mask acts as an enable for power saving. That is, the same status can be read from MIS.RT and RIS.RT.    */
    RT: any
    /**
Transmit interrupt mask. A read returns the current mask for UART's transmit interrupt. On a write of 1, the mask of the overrun error interrupt is set which means the interrupt state will be reflected in MIS.TX. A write of 0 clears the mask which means MIS.TX will not reflect the interrupt.     */
    TX: any
    /**
Receive interrupt mask. A read returns the current mask for UART's receive interrupt. On a write of 1, the mask of the overrun error interrupt is set which means the interrupt state will be reflected in MIS.RX. A write of 0 clears the mask which means MIS.RX will not reflect the interrupt.     */
    RX: any
    /**
    Reads to this field return zero, writes to this field are ignored.    */
    RESERVED2: any
    /**
Clear to Send (CTS) modem interrupt mask. A read returns the current mask for UART's clear to send interrupt. On a write of 1, the mask of the overrun error interrupt is set which means the interrupt state will be reflected in MIS.CTSM. A write of 0 clears the mask which means MIS.CTSM will not reflect the interrupt.     */
    CTSM: any
    /**
    Reads to this field return zero, writes to this field are ignored.    */
    RESERVED0: any
}

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
const RIS = new class {
    $$: any
    /**
    Reads to this field return zero, writes to this field are ignored.    */
    RESERVED14: any
    /**
RX DMA done interrupt status:

This field returns the raw interrupt state of UART's RX DMA done interrupt. RX DMA done flag is set when you recieve RX DMA done status from dma module.    */
    RXDMADONE: any
    /**
TX DMA done interrupt status:

This field returns the raw interrupt state of UART's TX DMA done interrupt. TX DMA done flag is set when you recieve TX DMA done status from dma module.    */
    TXDMADONE: any
    /**
End of Transmission interrupt status:

This field returns the raw interrupt state of UART's end of transmission interrupt. End of transmission flag is set when all the Transmit data in the FIFO and on the TX Line is tranmitted.    */
    EOT: any
    /**
Overrun error interrupt status: 

This field returns the raw interrupt state of UART's overrun error interrupt. Overrun error occurs if data is received and the receive FIFO is full.    */
    OE: any
    /**
Break error interrupt status:

This field returns the raw interrupt state of UART's break error interrupt. Break error is set when a break condition is detected, indicating that the received data input (UARTRXD input pin) was held LOW for longer than a full-word transmission time (defined as start, data, parity and stop bits).    */
    BE: any
    /**
Parity error interrupt status:

This field returns the raw interrupt state of UART's parity error interrupt. Parity error is set if the parity of the received data character does not match the parity that the LCRH.EPS and LCRH.SPS select.    */
    PE: any
    /**
Framing error interrupt status:

This field returns the raw interrupt state of UART's framing error interrupt. Framing error is set if the received character does not have a valid stop bit (a valid stop bit is 1).    */
    FE: any
    /**
Receive timeout interrupt status:

This field returns the raw interrupt state of UART's receive timeout interrupt. The receive timeout interrupt is asserted when the receive FIFO is not empty, and no more data is received during a 32-bit period. The receive timeout interrupt is cleared either when the FIFO becomes empty through reading all the data, or when a 1 is written to ICR.RT.
The raw interrupt for receive timeout cannot be set unless the mask is set (IMSC.RT = 1). This is because the mask acts as an enable for power saving. That is, the same status can be read from MIS.RT and RT.    */
    RT: any
    /**
Transmit interrupt status: 

This field returns the raw interrupt state of UART's transmit interrupt.
When FIFOs are enabled (LCRH.FEN = 1), the transmit interrupt is asserted if the number of bytes in transmit FIFO is equal to or lower than the programmed trigger level (IFLS.TXSEL). The transmit interrupt is cleared by writing data to the transmit FIFO until it becomes greater than the trigger level, or by clearing the interrupt through ICR.TX.
When FIFOs are disabled (LCRH.FEN = 0), that is they have a depth of one location, the transmit interrupt is asserted if there is no data present in the transmitters single location. It is cleared by performing a single write to the transmit FIFO, or by clearing the interrupt through ICR.TX.    */
    TX: any
    /**
Receive interrupt status:

This field returns the raw interrupt state of UART's receive interrupt. 
When FIFOs are enabled (LCRH.FEN = 1), the receive interrupt is asserted if the receive FIFO reaches the programmed trigger
level (IFLS.RXSEL). The receive interrupt is cleared by reading data from the receive FIFO until it becomes less than the trigger level, or by clearing the interrupt through ICR.RX.
When FIFOs are disabled (LCRH.FEN = 0), that is they have a depth of one location, the receive interrupt is asserted if data is received
thereby filling the location. The receive interrupt is cleared by performing a single read of the receive FIFO, or by clearing the interrupt through ICR.RX.    */
    RX: any
    /**
    Reads to this field return zero, writes to this field are ignored.    */
    RESERVED2: any
    /**
Clear to Send (CTS) modem interrupt status: 

This field returns the raw interrupt state of UART's clear to send interrupt.    */
    CTSM: any
    /**
    Reads to this field return zero, writes to this field are ignored.    */
    RESERVED0: any
}

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
const MIS = new class {
    $$: any
    /**
    Reads to this field return zero, writes to this field are ignored. Read as zero, do not modify    */
    RESERVED14: any
    /**
RX DMA done interrupt status:

This field returns the masked interrupt state of the RX DMA done interrupt which is the bitiwse AND product of raw interrupt state RIS.RXDMADONE and the mask setting IMSC.RXDMADONE.    */
    RXDMADONE: any
    /**
TX DMA done interrupt status:

This field returns the masked interrupt state of the TX DMA done interrupt which is the bitwise AND product of raw interrupt state RIS.TXDMADONE and the mask setting IMSC.TXDMADONE.    */
    TXDMADONE: any
    /**
End of Transmission interrupt status:

This field returns the masked interrupt state of the End of transmission interrupt which is the bitwise AND product of raw interrupt state RIS.EOT and the mask setting IMSC.EOT.    */
    EOT: any
    /**
Overrun error masked interrupt status: 

This field returns the masked interrupt state of the overrun interrupt which is the bitwise AND product of raw interrupt state RIS.OE and the mask setting IMSC.OE.    */
    OE: any
    /**
Break error masked interrupt status: 

This field returns the masked interrupt state of the break error interrupt which is the bitiwse AND product of raw interrupt state RIS.BE and the mask setting IMSC.BE.    */
    BE: any
    /**
Parity error masked interrupt status:

This field returns the masked interrupt state of the parity error interrupt which is the bitiwise AND product of raw interrupt state RIS.PE and the mask setting IMSC.PE.    */
    PE: any
    /**
Framing error masked interrupt status: Returns the masked interrupt state of the framing error interrupt which is the bitiwse AND product of raw interrupt state RIS.FE and the mask setting IMSC.FE.    */
    FE: any
    /**
Receive timeout masked interrupt status: 

Returns the masked interrupt state of the receive timeout interrupt.
The raw interrupt for receive timeout cannot be set unless the mask is set (IMSC.RT = 1). This is because the mask acts as an enable for power saving. That is, the same status can be read from MIS.RT and RIS.RT.    */
    RT: any
    /**
Transmit masked interrupt status: 

This field returns the masked interrupt state of the transmit interrupt  which is the bitiwse AND product of raw interrupt state RIS.TX and the mask setting IMSC.TX.    */
    TX: any
    /**
Receive masked interrupt status:

This field returns the masked interrupt state of the receive interrupt  which is the bitwise AND product of raw interrupt state RIS.RX and the mask setting IMSC.RX.    */
    RX: any
    /**
    Reads to this field return zero, writes to this field are ignored.    */
    RESERVED2: any
    /**
Clear to Send (CTS) modem masked interrupt status:

This field returns the masked interrupt state of the clear to send interrupt which is the bitwise AND product of raw interrupt state RIS.CTS and the mask setting IMSC.CTS.    */
    CTSM: any
    /**
    Reads to this field return zero, writes to this field are ignored. Write 0.    */
    RESERVED0: any
}

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
const ICR = new class {
    $$: any
    /**
    Reads to this field return zero, writes to this field are ignored. Read as zero, do not modify    */
    RESERVED16: any
    /**
RX DMA Done interrupt clear:

Writing 1 to this field clears the RX DMA done interrupt (RIS.RXDMADONE). Writing 0 has no effect.    */
    RXDMADONE: any
    /**
TX DMA Done interrupt clear:

Writing 1 to this field clears the TX DMA done interrupt (RIS.TXDMADONE). Writing 0 has no effect.    */
    TXDMADONE: any
    /**
End of Transmission interrupt clear:

Writing 1 to this field clears the End of Transmission interrupt (RIS.EOT). Writing 0 has no effect.    */
    EOT: any
    /**
Overrun error interrupt clear:

Writing 1 to this field clears the overrun error interrupt (RIS.OE). Writing 0 has no effect.    */
    OE: any
    /**
Break error interrupt clear:

Writing 1 to this field clears the break error interrupt (RIS.BE). Writing 0 has no effect.    */
    BE: any
    /**
Parity error interrupt clear:

Writing 1 to this field clears the parity error interrupt (RIS.PE). Writing 0 has no effect.    */
    PE: any
    /**
Framing error interrupt clear:

Writing 1 to this field clears the framing error interrupt (RIS.FE). Writing 0 has no effect.    */
    FE: any
    /**
Receive timeout interrupt clear:

Writing 1 to this field clears the receive timeout interrupt (RIS.RT). Writing 0 has no effect.    */
    RT: any
    /**
Transmit interrupt clear:

Writing 1 to this field clears the transmit interrupt (RIS.TX). Writing 0 has no effect.    */
    TX: any
    /**
Receive interrupt clear:

Writing 1 to this field clears the receive interrupt (RIS.RX). Writing 0 has no effect.    */
    RX: any
    /**
    Reads to this field return zero, writes to this field are ignored. Write 0    */
    RESERVED2: any
    /**
Clear to Send (CTS) modem interrupt clear:

Writing 1 to this field clears the clear to send interrupt (RIS.CTS). Writing 0 has no effect.    */
    CTSM: any
    /**
    Reads to this field return zero, writes to this field are ignored. Write 0.    */
    RESERVED0: any
}

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
const DMACTL = new class {
    $$: any
    /**
    Reads to this field return zero, writes to this field are ignored. Read as zero, do not modify.    */
    RESERVED3: any
    /**
DMA on error. If this bit is set to 1, the DMA receive request outputs (for  single and burst requests) are disabled when the UART error interrupt is asserted (more specifically if any of the error interrupts RIS.PERIS, RIS.BERIS, RIS.FERIS or RIS.OERIS are asserted).    */
    DMAONERR: any
    /**
Transmit DMA enable. If this bit is set to 1, DMA for the transmit FIFO is enabled.    */
    TXDMAE: any
    /**
Receive DMA enable. If this bit is set to 1, DMA for the receive FIFO is enabled.    */
    RXDMAE: any
}

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
const RESERVED1 = new class {
    $$: any
    /**
    Reads to this field return zero, writes to this field are ignored. Read as zero, do not modify.    */
    RESERVED: any
}

/**
    Reads to this field return zero, writes to this field are ignored. Read as zero, do not modify.*/
export const UART_RESERVED1_RESERVED: any = '32'


// -------- REGISTER RESERVED3 -------- //

/**
UART Reserved Area*/
const RESERVED3 = new class {
    $$: any
    /**
    Reads to this field return zero, writes to this field are ignored.     */
    RESERVED: any
}

/**
    Reads to this field return zero, writes to this field are ignored. */
export const UART_RESERVED3_RESERVED: any = '32'


// -------- REGISTER RESERVED4 -------- //

/**
UART Reserved Area For Future ID Expansion*/
const RESERVED4 = new class {
    $$: any
    /**
    Reads to this field return zero, writes to this field are ignored.     */
    RESERVED: any
}

/**
    Reads to this field return zero, writes to this field are ignored. */
export const UART_RESERVED4_RESERVED: any = '32'


// -------- INSTANCES -------- //

export const CLKCTL = {} as CLKCTL_t
export const UART0 = {} as UART_t
