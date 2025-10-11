import '@$$emscript'
export const $U = $declare('COMPOSITE')

import * as ArmStartupC from '@em.arch.arm/StartupC.em'
import * as BoardC from '@silabs.distro.efr32x/BoardC.em'
import * as IsrDefault from '@em.arch.arm/IsrEmpty.em'
import * as IntrVec from '@em.arch.arm/IntrVec.em'
import * as LinkerC from '@em.build.segger/LinkerC.em'
import * as REGS from '@silabs.distro.efr32x/REGS.em'
import * as StartupC from '@silabs.distro.efr32x/StartupC.em'
import * as TargC from '@em.lang/TargC.em'

const NVIC_INTRS = [
    'CRYPTOACC',
    'TRNG',
    'PKE',
    'SMU_SECURE',
    'SMU_S_PRIVILEGED',
    'SMU_NS_PRIVILEGED',
    'EMU',
    'TIMER0',
    'TIMER1',
    'TIMER2',
    'TIMER3',
    'TIMER4',
    'RTCC',
    'USART0_RX',
    'USART0_TX',
    'USART1_RX',
    'USART1_TX',
    'ICACHE0',
    'BURTC',
    'LETIMER0',
    'SYSCFG',
    'LDMA',
    'LFXO',
    'LFRCO',
    'ULFRCO',
    'GPIO_ODD',
    'GPIO_EVEN',
    'I2C0',
    'I2C1',
    'EMUDG',
    'EMUSE',
    'AGC',
    'BUFC',
    'FRC_PRI',
    'FRC',
    'MODEM',
    'PROTIMER',
    'RAC_RSM',
    'RAC_SEQ',
    'RDMAILBOX',
    'RFSENSE',
    'PRORTC',
    'SYNTH',
    'WDOG0',
    'HFXO0',
    'HFRCO0',
    'CMU',
    'AES',
    'IADC',
    'MSC',
    'DPLL0',
    'PDM',
    'SW0',
    'SW1',
    'SW2',
    'SW3',
    'KERNEL0',
    'KERNEL1',
    'M33CTI0',
    'M33CTI1',
    'EMUEFP',
    'DCDC',
    'EUART0_RX',
    'EUART0_TX',
]

export function em$configure() {
    $using(ArmStartupC)
    $using(BoardC)
    $using(IntrVec)
    $using(LinkerC)
    $using(REGS)
    $using(StartupC)
    $using(TargC)
    IntrVec.IsrDefault.$$dlg = IsrDefault
    for (let name of NVIC_INTRS) IntrVec.em$meta.addIntr(name)
}

export function em$generate() {
    LinkerC.genScript({
        dmem_flash: { orig: 0x20000000, len: 0x00008000 },
        imem_flash: { orig: 0x00000000, len: 0x00080000 },
        dmem_sram: { orig: 0x20004000, len: 0x00004000 },
        imem_sram: { orig: 0x20004000, len: 0x00004000 },
        lmem_sram: { orig: 0x10000000, len: 0x00004000 },
    })
}
