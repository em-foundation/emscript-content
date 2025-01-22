import em from '@$$emscript'
export const em$_U = em.$declare('COMPOSITE')

export function em$generate() {
    let out = new em.$outfile('ti.distro.cc23xx/REGS.hpp')
    out.addFile('../ti.cc23xx/ti.distro.cc23xx/REGS.hpp.txt')
    out.close()
}

// -------- MODULE CKMD -------- //

export interface CKMD_t {
    DESC: em.$Reg
    IMASK: em.$Reg
    RIS: em.$Reg
    MIS: em.$Reg
    ISET: em.$Reg
    ICLR: em.$Reg
    IMSET: em.$Reg
    IMCLR: em.$Reg
    HFOSCCTL: em.$Reg
    HFXTCTL: em.$Reg
    LFOSCCTL: em.$Reg
    LFXTCTL: em.$Reg
    LFQUALCTL: em.$Reg
    LFINCCTL: em.$Reg
    LFINCOVR: em.$Reg
    AMPADCCTL: em.$Reg
    HFTRACKCTL: em.$Reg
    LDOCTL: em.$Reg
    NABIASCTL: em.$Reg
    LFMONCTL: em.$Reg
    LFCLKSEL: em.$Reg
    TDCCLKSEL: em.$Reg
    ADCCLKSEL: em.$Reg
    LFCLKSTAT: em.$Reg
    HFXTSTAT: em.$Reg
    AMPADCSTAT: em.$Reg
    TRACKSTAT: em.$Reg
    AMPSTAT: em.$Reg
    ATBCTL0: em.$Reg
    ATBCTL1: em.$Reg
    DTBCTL: em.$Reg
    TRIM0: em.$Reg
    TRIM1: em.$Reg
    HFXTINIT: em.$Reg
    HFXTTARG: em.$Reg
    HFXTDYN: em.$Reg
    AMPCFG0: em.$Reg
    AMPCFG1: em.$Reg
    LOOPCFG: em.$Reg
    TDCCTL: em.$Reg
    TDCSTAT: em.$Reg
    TDCRESULT: em.$Reg
    TDCSATCFG: em.$Reg
    TDCTRIGSRC: em.$Reg
    TDCTRIGCNT: em.$Reg
    TDCTRIGCNTLOAD: em.$Reg
    TDCTRIGCNTCFG: em.$Reg
    TDCPRECTL: em.$Reg
    TDCPRECNTR: em.$Reg
    WDTCNT: em.$Reg
    WDTTEST: em.$Reg
    WDTLOCK: em.$Reg
}

// -------- REGISTER DESC -------- //

/**
Description Register.


This register provides IP module ID, revision information, instance index and standard MMR registers offset.*/
/**
Module identifier used to uniquely identify this IP.*/
export const CKMD_DESC_MODID: any = '16'
export const CKMD_DESC_MODID_M: any = '16'
export const CKMD_DESC_MODID_S: any = '16'
/**
Standard IP MMR block offset. Standard IP MMRs are the set of from aggregated IRQ registers till DTB.

0: Standard IP MMRs do not exist
0x1-0xF: Standard IP MMRs begin at offset of (64*STDIPOFF from the base IP address)

NOTE: This IP does not have DTB as part of the Standard IP MMRs. It uses DTBCTL instead.*/
export const CKMD_DESC_STDIPOFF: any = '4'
export const CKMD_DESC_STDIPOFF_M: any = '4'
export const CKMD_DESC_STDIPOFF_S: any = '4'
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const CKMD_DESC_RESERVED8: any = '4'
export const CKMD_DESC_RESERVED8_M: any = '4'
export const CKMD_DESC_RESERVED8_S: any = '4'
/**
Major revision of IP (0-15).*/
export const CKMD_DESC_MAJREV: any = '4'
export const CKMD_DESC_MAJREV_M: any = '4'
export const CKMD_DESC_MAJREV_S: any = '4'
/**
Minor revision of IP (0-15).

*/
export const CKMD_DESC_MINREV: any = '4'
export const CKMD_DESC_MINREV_M: any = '4'
export const CKMD_DESC_MINREV_S: any = '4'

// -------- REGISTER IMASK -------- //

/**
Interrupt mask.


This register selects interrupt sources which are allowed to pass from RIS to MIS when the corresponding bit-fields are set to 1.*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const CKMD_IMASK_RESERVED18: any = '14'
export const CKMD_IMASK_RESERVED18_M: any = '14'
export const CKMD_IMASK_RESERVED18_S: any = '14'
/**
32kHz TICK to RTC and WDT.


Either derived from selected LFCLK or generated from CLKULL in absence of LFCLK.*/
export const CKMD_IMASK_LFTICK: any = '1'
export const CKMD_IMASK_LFTICK_M: any = '1'
export const CKMD_IMASK_LFTICK_S: any = '1'
/**
LFINC filter gearing restart.


Indicates that the LFINC filter restarted gearing. Subsequent LFINC estimates may have higher variation.*/
export const CKMD_IMASK_LFGEARRSTRT: any = '1'
export const CKMD_IMASK_LFGEARRSTRT_M: any = '1'
export const CKMD_IMASK_LFGEARRSTRT_S: any = '1'
/**
HFXT Amplitude compensation - settled


Indicates that the amplitude compensation FSM has reached the SETTLED or TCXOMODE state,
and the controls configured in HFXTTARG or HFXTDYN are reached.
*/
export const CKMD_IMASK_AMPSETTLED: any = '1'
export const CKMD_IMASK_AMPSETTLED_M: any = '1'
export const CKMD_IMASK_AMPSETTLED_S: any = '1'
/**
HFXT Amplitude compensation - controls at target


Indicates that the control values configured in HFXTTARG or HFXTDYN are reached.
Applies to Q1CAP, Q2CAP and IREF.*/
export const CKMD_IMASK_AMPCTRLATTARG: any = '1'
export const CKMD_IMASK_AMPCTRLATTARG_M: any = '1'
export const CKMD_IMASK_AMPCTRLATTARG_S: any = '1'
/**
Pre-LF clock edge detect.


Indicates that a positive edge occured on the selected pre-LF clock LFCLKSEL.PRE.
Can be used by software to confirm that a LF clock source is running and within the expected frequency,
before selecting it as the main LF clock source.*/
export const CKMD_IMASK_PRELFEDGE: any = '1'
export const CKMD_IMASK_PRELFEDGE_M: any = '1'
export const CKMD_IMASK_PRELFEDGE_S: any = '1'
/**
LF clock is lost.


Indicates that no LF clock edge occured for ~49us (~1.6 times nominal period).
The system will automatically fall-back to generating LFTICK based on CLKULL,
to avoid timing corruption.
Note that this signal is NOT related to the analog LF clock-loss detector which can reset the device during STANDBY.*/
export const CKMD_IMASK_LFCLKLOSS: any = '1'
export const CKMD_IMASK_LFCLKLOSS_M: any = '1'
export const CKMD_IMASK_LFCLKLOSS_S: any = '1'
/**
LF clock period out-of-range.


Indicates that a LF clock period was measured to be out-of-range,
according to LFQUALCTL.MAXERR.*/
export const CKMD_IMASK_LFCLKOOR: any = '1'
export const CKMD_IMASK_LFCLKOOR_M: any = '1'
export const CKMD_IMASK_LFCLKOOR_S: any = '1'
/**
LF clock good.


Indicates that the LF clock is good, according to the configuration in LFQUALCTL.*/
export const CKMD_IMASK_LFCLKGOOD: any = '1'
export const CKMD_IMASK_LFCLKGOOD_M: any = '1'
export const CKMD_IMASK_LFCLKGOOD_S: any = '1'
/**
LFINC updated.


Indicates that a new LFINC measurement value is available in LFCLKSTAT.LFINC.*/
export const CKMD_IMASK_LFINCUPD: any = '1'
export const CKMD_IMASK_LFINCUPD_M: any = '1'
export const CKMD_IMASK_LFINCUPD_S: any = '1'
/**
TDC done event.


Indicates that the TDC measurement is done.*/
export const CKMD_IMASK_TDCDONE: any = '1'
export const CKMD_IMASK_TDCDONE_M: any = '1'
export const CKMD_IMASK_TDCDONE_S: any = '1'
/**
HFXT-ADC PEAK measurement update event.


Indicates that the HFXT-ADC PEAK measurement is done.*/
export const CKMD_IMASK_ADCPEAKUPD: any = '1'
export const CKMD_IMASK_ADCPEAKUPD_M: any = '1'
export const CKMD_IMASK_ADCPEAKUPD_S: any = '1'
/**
HFXT-ADC BIAS measurement update event.


Indicates that the HFXT-ADC BIAS measurement is done.*/
export const CKMD_IMASK_ADCBIASUPD: any = '1'
export const CKMD_IMASK_ADCBIASUPD_M: any = '1'
export const CKMD_IMASK_ADCBIASUPD_S: any = '1'
/**
HFXT-ADC comparison update event.


Indicates that the HFXT-ADC comparison is done.*/
export const CKMD_IMASK_ADCCOMPUPD: any = '1'
export const CKMD_IMASK_ADCCOMPUPD_M: any = '1'
export const CKMD_IMASK_ADCCOMPUPD_S: any = '1'
/**
Out-of-range indication from the tracking loop.


Indicates that the selected reference clock frequency of the tracking loop is out-of-range.*/
export const CKMD_IMASK_TRACKREFOOR: any = '1'
export const CKMD_IMASK_TRACKREFOOR_M: any = '1'
export const CKMD_IMASK_TRACKREFOOR_S: any = '1'
/**
Clock loss indication from the tracking loop.


Indicates that the selected reference clock of the tracking loop is lost.*/
export const CKMD_IMASK_TRACKREFLOSS: any = '1'
export const CKMD_IMASK_TRACKREFLOSS_M: any = '1'
export const CKMD_IMASK_TRACKREFLOSS_S: any = '1'
/**
HFXT amplitude good indication.*/
export const CKMD_IMASK_HFXTAMPGOOD: any = '1'
export const CKMD_IMASK_HFXTAMPGOOD_M: any = '1'
export const CKMD_IMASK_HFXTAMPGOOD_S: any = '1'
/**
HFXT fault indication.


Indicates that HFXT did not start correctly, or its frequency is too low.
HFXT will not recover from this fault and has to be restarted.
This is only a one-time check at HFXT startup.*/
export const CKMD_IMASK_HFXTFAULT: any = '1'
export const CKMD_IMASK_HFXTFAULT_M: any = '1'
export const CKMD_IMASK_HFXTFAULT_S: any = '1'
/**
HFXT good indication.


Indicates that HFXT started correctly. The frequency is not necessarily good enough for radio operation.
This is only a one-time check at HFXT startup.*/
export const CKMD_IMASK_HFXTGOOD: any = '1'
export const CKMD_IMASK_HFXTGOOD_M: any = '1'
export const CKMD_IMASK_HFXTGOOD_S: any = '1'

// -------- REGISTER RIS -------- //

/**
Raw interrupt status.


This register reflects the state of all pending interrupts, regardless of masking. This register allows the user to implement a poll scheme. A flag set in this register can be cleared by writing 1 to the corresponding ICLR register bit.*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const CKMD_RIS_RESERVED18: any = '14'
export const CKMD_RIS_RESERVED18_M: any = '14'
export const CKMD_RIS_RESERVED18_S: any = '14'
/**
32kHz TICK to RTC and WDT.


Either derived from selected LFCLK or generated from CLKULL in absence of LFCLK.*/
export const CKMD_RIS_LFTICK: any = '1'
export const CKMD_RIS_LFTICK_M: any = '1'
export const CKMD_RIS_LFTICK_S: any = '1'
/**
LFINC filter gearing restart.


Indicates that the LFINC filter restarted gearing. Subsequent LFINC estimates may have higher variation.*/
export const CKMD_RIS_LFGEARRSTRT: any = '1'
export const CKMD_RIS_LFGEARRSTRT_M: any = '1'
export const CKMD_RIS_LFGEARRSTRT_S: any = '1'
/**
HFXT Amplitude compensation - settled


Indicates that the amplitude compensation FSM has reached the SETTLED or TCXOMODE state,
and the controls configured in HFXTTARG or HFXTDYN are reached.
*/
export const CKMD_RIS_AMPSETTLED: any = '1'
export const CKMD_RIS_AMPSETTLED_M: any = '1'
export const CKMD_RIS_AMPSETTLED_S: any = '1'
/**
HFXT Amplitude compensation - controls at target


Indicates that the control values configured in HFXTTARG or HFXTDYN are reached.
Applies to Q1CAP, Q2CAP and IREF.*/
export const CKMD_RIS_AMPCTRLATTARG: any = '1'
export const CKMD_RIS_AMPCTRLATTARG_M: any = '1'
export const CKMD_RIS_AMPCTRLATTARG_S: any = '1'
/**
Pre-LF clock edge detect.


Indicates that a positive edge occured on the selected pre-LF clock LFCLKSEL.PRE.
Can be used by software to confirm that a LF clock source is running and within the expected frequency,
before selecting it as the main LF clock source.*/
export const CKMD_RIS_PRELFEDGE: any = '1'
export const CKMD_RIS_PRELFEDGE_M: any = '1'
export const CKMD_RIS_PRELFEDGE_S: any = '1'
/**
LF clock is lost.


Indicates that no LF clock edge occured for ~49us (~1.6 times nominal period).
The system will automatically fall-back to generating LFTICK based on CLKULL,
to avoid timing corruption.
Note that this signal is NOT related to the analog LF clock-loss detector which can reset the device during STANDBY.*/
export const CKMD_RIS_LFCLKLOSS: any = '1'
export const CKMD_RIS_LFCLKLOSS_M: any = '1'
export const CKMD_RIS_LFCLKLOSS_S: any = '1'
/**
LF clock period out-of-range.


Indicates that a LF clock period was measured to be out-of-range,
according to LFQUALCTL.MAXERR.*/
export const CKMD_RIS_LFCLKOOR: any = '1'
export const CKMD_RIS_LFCLKOOR_M: any = '1'
export const CKMD_RIS_LFCLKOOR_S: any = '1'
/**
LF clock good.


Indicates that the LF clock is good, according to the configuration in LFQUALCTL.*/
export const CKMD_RIS_LFCLKGOOD: any = '1'
export const CKMD_RIS_LFCLKGOOD_M: any = '1'
export const CKMD_RIS_LFCLKGOOD_S: any = '1'
/**
LFINC updated.


Indicates that a new LFINC measurement value is available in LFCLKSTAT.LFINC.*/
export const CKMD_RIS_LFINCUPD: any = '1'
export const CKMD_RIS_LFINCUPD_M: any = '1'
export const CKMD_RIS_LFINCUPD_S: any = '1'
/**
TDC done event.


Indicates that the TDC measurement is done.*/
export const CKMD_RIS_TDCDONE: any = '1'
export const CKMD_RIS_TDCDONE_M: any = '1'
export const CKMD_RIS_TDCDONE_S: any = '1'
/**
HFXT-ADC PEAK measurement update event.


Indicates that the HFXT-ADC PEAK measurement is done.*/
export const CKMD_RIS_ADCPEAKUPD: any = '1'
export const CKMD_RIS_ADCPEAKUPD_M: any = '1'
export const CKMD_RIS_ADCPEAKUPD_S: any = '1'
/**
HFXT-ADC BIAS measurement update event.


Indicates that the HFXT-ADC BIAS measurement is done.*/
export const CKMD_RIS_ADCBIASUPD: any = '1'
export const CKMD_RIS_ADCBIASUPD_M: any = '1'
export const CKMD_RIS_ADCBIASUPD_S: any = '1'
/**
HFXT-ADC comparison update event.


Indicates that the HFXT-ADC comparison is done.*/
export const CKMD_RIS_ADCCOMPUPD: any = '1'
export const CKMD_RIS_ADCCOMPUPD_M: any = '1'
export const CKMD_RIS_ADCCOMPUPD_S: any = '1'
/**
Out-of-range indication from the tracking loop.


Indicates that the selected reference clock frequency of the tracking loop is out-of-range.*/
export const CKMD_RIS_TRACKREFOOR: any = '1'
export const CKMD_RIS_TRACKREFOOR_M: any = '1'
export const CKMD_RIS_TRACKREFOOR_S: any = '1'
/**
Clock loss indication from the tracking loop.


Indicates that the selected reference clock of the tracking loop is lost.*/
export const CKMD_RIS_TRACKREFLOSS: any = '1'
export const CKMD_RIS_TRACKREFLOSS_M: any = '1'
export const CKMD_RIS_TRACKREFLOSS_S: any = '1'
/**
HFXT amplitude good indication.*/
export const CKMD_RIS_HFXTAMPGOOD: any = '1'
export const CKMD_RIS_HFXTAMPGOOD_M: any = '1'
export const CKMD_RIS_HFXTAMPGOOD_S: any = '1'
/**
HFXT fault indication.


Indicates that HFXT did not start correctly, or its frequency is too low.
HFXT will not recover from this fault and has to be restarted.
This is only a one-time check at HFXT startup.*/
export const CKMD_RIS_HFXTFAULT: any = '1'
export const CKMD_RIS_HFXTFAULT_M: any = '1'
export const CKMD_RIS_HFXTFAULT_S: any = '1'
/**
HFXT good indication.


Indicates that HFXT started correctly. The frequency is not necessarily good enough for radio operation.
This is only a one-time check at HFXT startup.*/
export const CKMD_RIS_HFXTGOOD: any = '1'
export const CKMD_RIS_HFXTGOOD_M: any = '1'
export const CKMD_RIS_HFXTGOOD_S: any = '1'

// -------- REGISTER MIS -------- //

/**
Masked interrupt status.


This register is simply a bitwise AND of the contents of IMASK and RIS.*] registers. A flag set in this register can be cleared by writing 1 to the corresponding ICLR register bit.*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const CKMD_MIS_RESERVED18: any = '14'
export const CKMD_MIS_RESERVED18_M: any = '14'
export const CKMD_MIS_RESERVED18_S: any = '14'
/**
32kHz TICK to RTC and WDT.


Either derived from selected LFCLK or generated from CLKULL in absence of LFCLK.*/
export const CKMD_MIS_LFTICK: any = '1'
export const CKMD_MIS_LFTICK_M: any = '1'
export const CKMD_MIS_LFTICK_S: any = '1'
/**
LFINC filter gearing restart.


Indicates that the LFINC filter restarted gearing. Subsequent LFINC estimates may have higher variation.*/
export const CKMD_MIS_LFGEARRSTRT: any = '1'
export const CKMD_MIS_LFGEARRSTRT_M: any = '1'
export const CKMD_MIS_LFGEARRSTRT_S: any = '1'
/**
HFXT Amplitude compensation - settled


Indicates that the amplitude compensation FSM has reached the SETTLED or TCXOMODE state,
and the controls configured in HFXTTARG or HFXTDYN are reached.
*/
export const CKMD_MIS_AMPSETTLED: any = '1'
export const CKMD_MIS_AMPSETTLED_M: any = '1'
export const CKMD_MIS_AMPSETTLED_S: any = '1'
/**
HFXT Amplitude compensation - controls at target


Indicates that the control values configured in HFXTTARG or HFXTDYN are reached.
Applies to Q1CAP, Q2CAP and IREF.*/
export const CKMD_MIS_AMPCTRLATTARG: any = '1'
export const CKMD_MIS_AMPCTRLATTARG_M: any = '1'
export const CKMD_MIS_AMPCTRLATTARG_S: any = '1'
/**
Pre-LF clock edge detect.


Indicates that a positive edge occured on the selected pre-LF clock LFCLKSEL.PRE.
Can be used by software to confirm that a LF clock source is running and within the expected frequency,
before selecting it as the main LF clock source.*/
export const CKMD_MIS_PRELFEDGE: any = '1'
export const CKMD_MIS_PRELFEDGE_M: any = '1'
export const CKMD_MIS_PRELFEDGE_S: any = '1'
/**
LF clock is lost.


Indicates that no LF clock edge occured for ~49us (~1.6 times nominal period).
The system will automatically fall-back to generating LFTICK based on CLKULL,
to avoid timing corruption.
Note that this signal is NOT related to the analog LF clock-loss detector which can reset the device during STANDBY.*/
export const CKMD_MIS_LFCLKLOSS: any = '1'
export const CKMD_MIS_LFCLKLOSS_M: any = '1'
export const CKMD_MIS_LFCLKLOSS_S: any = '1'
/**
LF clock period out-of-range.


Indicates that a LF clock period was measured to be out-of-range,
according to LFQUALCTL.MAXERR.*/
export const CKMD_MIS_LFCLKOOR: any = '1'
export const CKMD_MIS_LFCLKOOR_M: any = '1'
export const CKMD_MIS_LFCLKOOR_S: any = '1'
/**
LF clock good.


Indicates that the LF clock is good, according to the configuration in LFQUALCTL.*/
export const CKMD_MIS_LFCLKGOOD: any = '1'
export const CKMD_MIS_LFCLKGOOD_M: any = '1'
export const CKMD_MIS_LFCLKGOOD_S: any = '1'
/**
LFINC updated.


Indicates that a new LFINC measurement value is available in LFCLKSTAT.LFINC.*/
export const CKMD_MIS_LFINCUPD: any = '1'
export const CKMD_MIS_LFINCUPD_M: any = '1'
export const CKMD_MIS_LFINCUPD_S: any = '1'
/**
TDC done event.


Indicates that the TDC measurement is done.*/
export const CKMD_MIS_TDCDONE: any = '1'
export const CKMD_MIS_TDCDONE_M: any = '1'
export const CKMD_MIS_TDCDONE_S: any = '1'
/**
HFXT-ADC PEAK measurement update event.


Indicates that the HFXT-ADC PEAK measurement is done.*/
export const CKMD_MIS_ADCPEAKUPD: any = '1'
export const CKMD_MIS_ADCPEAKUPD_M: any = '1'
export const CKMD_MIS_ADCPEAKUPD_S: any = '1'
/**
HFXT-ADC BIAS measurement update event.


Indicates that the HFXT-ADC BIAS measurement is done.*/
export const CKMD_MIS_ADCBIASUPD: any = '1'
export const CKMD_MIS_ADCBIASUPD_M: any = '1'
export const CKMD_MIS_ADCBIASUPD_S: any = '1'
/**
HFXT-ADC comparison update event.


Indicates that the HFXT-ADC comparison is done.*/
export const CKMD_MIS_ADCCOMPUPD: any = '1'
export const CKMD_MIS_ADCCOMPUPD_M: any = '1'
export const CKMD_MIS_ADCCOMPUPD_S: any = '1'
/**
Out-of-range indication from the tracking loop.


Indicates that the selected reference clock frequency of the tracking loop is out-of-range.*/
export const CKMD_MIS_TRACKREFOOR: any = '1'
export const CKMD_MIS_TRACKREFOOR_M: any = '1'
export const CKMD_MIS_TRACKREFOOR_S: any = '1'
/**
Clock loss indication from the tracking loop.


Indicates that the selected reference clock of the tracking loop is lost.*/
export const CKMD_MIS_TRACKREFLOSS: any = '1'
export const CKMD_MIS_TRACKREFLOSS_M: any = '1'
export const CKMD_MIS_TRACKREFLOSS_S: any = '1'
/**
HFXT amplitude good indication.*/
export const CKMD_MIS_HFXTAMPGOOD: any = '1'
export const CKMD_MIS_HFXTAMPGOOD_M: any = '1'
export const CKMD_MIS_HFXTAMPGOOD_S: any = '1'
/**
HFXT fault indication.


Indicates that HFXT did not start correctly, or its frequency is too low.
HFXT will not recover from this fault and has to be restarted.
This is only a one-time check at HFXT startup.*/
export const CKMD_MIS_HFXTFAULT: any = '1'
export const CKMD_MIS_HFXTFAULT_M: any = '1'
export const CKMD_MIS_HFXTFAULT_S: any = '1'
/**
HFXT good indication.


Indicates that HFXT started correctly. The frequency is not necessarily good enough for radio operation.
This is only a one-time check at HFXT startup.*/
export const CKMD_MIS_HFXTGOOD: any = '1'
export const CKMD_MIS_HFXTGOOD_M: any = '1'
export const CKMD_MIS_HFXTGOOD_S: any = '1'

// -------- REGISTER ISET -------- //

/**
Interrupt set register.


This register can used by software for diagnostics and safety checking purposes. Writing a 1 to a bit in this register will set the event and the corresponding RIS bit also gets set. If the corresponding IMASK bit is set, then the corresponding MIS register bit also gets set.*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const CKMD_ISET_RESERVED18: any = '14'
export const CKMD_ISET_RESERVED18_M: any = '14'
export const CKMD_ISET_RESERVED18_S: any = '14'
/**
32kHz TICK to RTC and WDT.


Either derived from selected LFCLK or generated from CLKULL in absence of LFCLK.*/
export const CKMD_ISET_LFTICK: any = '1'
export const CKMD_ISET_LFTICK_M: any = '1'
export const CKMD_ISET_LFTICK_S: any = '1'
/**
LFINC filter gearing restart.


Indicates that the LFINC filter restarted gearing. Subsequent LFINC estimates may have higher variation.*/
export const CKMD_ISET_LFGEARRSTRT: any = '1'
export const CKMD_ISET_LFGEARRSTRT_M: any = '1'
export const CKMD_ISET_LFGEARRSTRT_S: any = '1'
/**
HFXT Amplitude compensation - settled


Indicates that the amplitude compensation FSM has reached the SETTLED or TCXOMODE state,
and the controls configured in HFXTTARG or HFXTDYN are reached.
*/
export const CKMD_ISET_AMPSETTLED: any = '1'
export const CKMD_ISET_AMPSETTLED_M: any = '1'
export const CKMD_ISET_AMPSETTLED_S: any = '1'
/**
HFXT Amplitude compensation - controls at target


Indicates that the control values configured in HFXTTARG.Q1CAP, HFXTTARG.Q2CAP and HFXTTARG.IREF or HFXTDYN.Q1CAP, HFXTDYN.Q2CAP and HFXTDYN.IREF are reached.*/
export const CKMD_ISET_AMPCTRLATTARG: any = '1'
export const CKMD_ISET_AMPCTRLATTARG_M: any = '1'
export const CKMD_ISET_AMPCTRLATTARG_S: any = '1'
/**
Pre-LF clock edge detect.


Indicates that a positive edge occured on the selected pre-LF clock LFCLKSEL.PRE.
Can be used by software to confirm that a LF clock source is running and within the expected frequency,
before selecting it as the main LF clock source.*/
export const CKMD_ISET_PRELFEDGE: any = '1'
export const CKMD_ISET_PRELFEDGE_M: any = '1'
export const CKMD_ISET_PRELFEDGE_S: any = '1'
/**
LF clock is lost.


Indicates that no LF clock edge occured for ~49us (~1.6 times nominal period).
The system will automatically fall-back to generating LFTICK based on CLKULL,
to avoid timing corruption.
Note that this signal is NOT related to the analog LF clock-loss detector which can reset the device during STANDBY.*/
export const CKMD_ISET_LFCLKLOSS: any = '1'
export const CKMD_ISET_LFCLKLOSS_M: any = '1'
export const CKMD_ISET_LFCLKLOSS_S: any = '1'
/**
LF clock period out-of-range.


Indicates that a LF clock period was measured to be out-of-range,
according to LFQUALCTL.MAXERR.*/
export const CKMD_ISET_LFCLKOOR: any = '1'
export const CKMD_ISET_LFCLKOOR_M: any = '1'
export const CKMD_ISET_LFCLKOOR_S: any = '1'
/**
LF clock good.


Indicates that the LF clock is good, according to the configuration in LFQUALCTL.*/
export const CKMD_ISET_LFCLKGOOD: any = '1'
export const CKMD_ISET_LFCLKGOOD_M: any = '1'
export const CKMD_ISET_LFCLKGOOD_S: any = '1'
/**
LFINC updated.


Indicates that a new LFINC measurement value is available in LFCLKSTAT.LFINC.*/
export const CKMD_ISET_LFINCUPD: any = '1'
export const CKMD_ISET_LFINCUPD_M: any = '1'
export const CKMD_ISET_LFINCUPD_S: any = '1'
/**
TDC done event.


Indicates that the TDC measurement is done.*/
export const CKMD_ISET_TDCDONE: any = '1'
export const CKMD_ISET_TDCDONE_M: any = '1'
export const CKMD_ISET_TDCDONE_S: any = '1'
/**
HFXT-ADC PEAK measurement update event.


Indicates that the HFXT-ADC PEAK measurement is done.*/
export const CKMD_ISET_ADCPEAKUPD: any = '1'
export const CKMD_ISET_ADCPEAKUPD_M: any = '1'
export const CKMD_ISET_ADCPEAKUPD_S: any = '1'
/**
HFXT-ADC BIAS measurement update event.


Indicates that the HFXT-ADC BIAS measurement is done.*/
export const CKMD_ISET_ADCBIASUPD: any = '1'
export const CKMD_ISET_ADCBIASUPD_M: any = '1'
export const CKMD_ISET_ADCBIASUPD_S: any = '1'
/**
HFXT-ADC comparison update event.


Indicates that the HFXT-ADC comparison is done.*/
export const CKMD_ISET_ADCCOMPUPD: any = '1'
export const CKMD_ISET_ADCCOMPUPD_M: any = '1'
export const CKMD_ISET_ADCCOMPUPD_S: any = '1'
/**
Out-of-range indication from the tracking loop.


Indicates that the selected reference clock frequency of the tracking loop is out-of-range.*/
export const CKMD_ISET_TRACKREFOOR: any = '1'
export const CKMD_ISET_TRACKREFOOR_M: any = '1'
export const CKMD_ISET_TRACKREFOOR_S: any = '1'
/**
Clock loss indication from the tracking loop.


Indicates that the selected reference clock of the tracking loop is lost.*/
export const CKMD_ISET_TRACKREFLOSS: any = '1'
export const CKMD_ISET_TRACKREFLOSS_M: any = '1'
export const CKMD_ISET_TRACKREFLOSS_S: any = '1'
/**
HFXT amplitude good indication.*/
export const CKMD_ISET_HFXTAMPGOOD: any = '1'
export const CKMD_ISET_HFXTAMPGOOD_M: any = '1'
export const CKMD_ISET_HFXTAMPGOOD_S: any = '1'
/**
HFXT fault indication.


Indicates that HFXT did not start correctly, or its frequency is too low.
HFXT will not recover from this fault and has to be restarted.
This is only a one-time check at HFXT startup.*/
export const CKMD_ISET_HFXTFAULT: any = '1'
export const CKMD_ISET_HFXTFAULT_M: any = '1'
export const CKMD_ISET_HFXTFAULT_S: any = '1'
/**
HFXT good indication.


Indicates that HFXT started correctly. The frequency is not necessarily good enough for radio operation.
This is only a one-time check at HFXT startup.*/
export const CKMD_ISET_HFXTGOOD: any = '1'
export const CKMD_ISET_HFXTGOOD_M: any = '1'
export const CKMD_ISET_HFXTGOOD_S: any = '1'

// -------- REGISTER ICLR -------- //

/**
Interrupt clear register.


This register allows software to clear interrupts. Writing a 1 to a bit in this register will clear the event and the corresponding RIS bit also gets cleared. If the corresponding IMASK bit is set, then the corresponding MIS register bit also gets cleared.*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const CKMD_ICLR_RESERVED18: any = '14'
export const CKMD_ICLR_RESERVED18_M: any = '14'
export const CKMD_ICLR_RESERVED18_S: any = '14'
/**
32kHz TICK to RTC and WDT.


Either derived from selected LFCLK or generated from CLKULL in absence of LFCLK.*/
export const CKMD_ICLR_LFTICK: any = '1'
export const CKMD_ICLR_LFTICK_M: any = '1'
export const CKMD_ICLR_LFTICK_S: any = '1'
/**
LFINC filter gearing restart.


Indicates that the LFINC filter restarted gearing. Subsequent LFINC estimates may have higher variation.*/
export const CKMD_ICLR_LFGEARRSTRT: any = '1'
export const CKMD_ICLR_LFGEARRSTRT_M: any = '1'
export const CKMD_ICLR_LFGEARRSTRT_S: any = '1'
/**
HFXT Amplitude compensation - settled


Indicates that the amplitude compensation FSM has reached the SETTLED or TCXOMODE state,
and the controls configured in HFXTTARG or HFXTDYN are reached.
*/
export const CKMD_ICLR_AMPSETTLED: any = '1'
export const CKMD_ICLR_AMPSETTLED_M: any = '1'
export const CKMD_ICLR_AMPSETTLED_S: any = '1'
/**
HFXT Amplitude compensation - controls at target


Indicates that the control values configured in HFXTTARG or HFXTDYN are reached.
Applies to Q1CAP, Q2CAP and IREF.*/
export const CKMD_ICLR_AMPCTRLATTARG: any = '1'
export const CKMD_ICLR_AMPCTRLATTARG_M: any = '1'
export const CKMD_ICLR_AMPCTRLATTARG_S: any = '1'
/**
Pre-LF clock edge detect.


Indicates that a positive edge occured on the selected pre-LF clock LFCLKSEL.PRE.
Can be used by software to confirm that a LF clock source is running and within the expected frequency,
before selecting it as the main LF clock source.*/
export const CKMD_ICLR_PRELFEDGE: any = '1'
export const CKMD_ICLR_PRELFEDGE_M: any = '1'
export const CKMD_ICLR_PRELFEDGE_S: any = '1'
/**
LF clock is lost.


Indicates that no LF clock edge occured for ~49us (~1.6 times nominal period).
The system will automatically fall-back to generating LFTICK based on CLKULL,
to avoid timing corruption.
Note that this signal is NOT related to the analog LF clock-loss detector which can reset the device during STANDBY.*/
export const CKMD_ICLR_LFCLKLOSS: any = '1'
export const CKMD_ICLR_LFCLKLOSS_M: any = '1'
export const CKMD_ICLR_LFCLKLOSS_S: any = '1'
/**
LF clock period out-of-range.


Indicates that a LF clock period was measured to be out-of-range,
according to LFQUALCTL.MAXERR.*/
export const CKMD_ICLR_LFCLKOOR: any = '1'
export const CKMD_ICLR_LFCLKOOR_M: any = '1'
export const CKMD_ICLR_LFCLKOOR_S: any = '1'
/**
LF clock good.


Indicates that the LF clock is good, according to the configuration in LFQUALCTL.*/
export const CKMD_ICLR_LFCLKGOOD: any = '1'
export const CKMD_ICLR_LFCLKGOOD_M: any = '1'
export const CKMD_ICLR_LFCLKGOOD_S: any = '1'
/**
LFINC updated.


Indicates that a new LFINC measurement value is available in LFCLKSTAT.LFINC.*/
export const CKMD_ICLR_LFINCUPD: any = '1'
export const CKMD_ICLR_LFINCUPD_M: any = '1'
export const CKMD_ICLR_LFINCUPD_S: any = '1'
/**
TDC done event.


Indicates that the TDC measurement is done.*/
export const CKMD_ICLR_TDCDONE: any = '1'
export const CKMD_ICLR_TDCDONE_M: any = '1'
export const CKMD_ICLR_TDCDONE_S: any = '1'
/**
HFXT-ADC PEAK measurement update event.


Indicates that the HFXT-ADC PEAK measurement is done.*/
export const CKMD_ICLR_ADCPEAKUPD: any = '1'
export const CKMD_ICLR_ADCPEAKUPD_M: any = '1'
export const CKMD_ICLR_ADCPEAKUPD_S: any = '1'
/**
HFXT-ADC BIAS measurement update event.


Indicates that the HFXT-ADC BIAS measurement is done.*/
export const CKMD_ICLR_ADCBIASUPD: any = '1'
export const CKMD_ICLR_ADCBIASUPD_M: any = '1'
export const CKMD_ICLR_ADCBIASUPD_S: any = '1'
/**
HFXT-ADC comparison update event.


Indicates that the HFXT-ADC comparison is done.*/
export const CKMD_ICLR_ADCCOMPUPD: any = '1'
export const CKMD_ICLR_ADCCOMPUPD_M: any = '1'
export const CKMD_ICLR_ADCCOMPUPD_S: any = '1'
/**
Out-of-range indication from the tracking loop.


Indicates that the selected reference clock frequency of the tracking loop is out-of-range.*/
export const CKMD_ICLR_TRACKREFOOR: any = '1'
export const CKMD_ICLR_TRACKREFOOR_M: any = '1'
export const CKMD_ICLR_TRACKREFOOR_S: any = '1'
/**
Clock loss indication from the tracking loop.


Indicates that the selected reference clock of the tracking loop is lost.*/
export const CKMD_ICLR_TRACKREFLOSS: any = '1'
export const CKMD_ICLR_TRACKREFLOSS_M: any = '1'
export const CKMD_ICLR_TRACKREFLOSS_S: any = '1'
/**
HFXT amplitude good indication.*/
export const CKMD_ICLR_HFXTAMPGOOD: any = '1'
export const CKMD_ICLR_HFXTAMPGOOD_M: any = '1'
export const CKMD_ICLR_HFXTAMPGOOD_S: any = '1'
/**
HFXT fault indication.


Indicates that HFXT did not start correctly, or its frequency is too low.
HFXT will not recover from this fault and has to be restarted.
This is only a one-time check at HFXT startup.*/
export const CKMD_ICLR_HFXTFAULT: any = '1'
export const CKMD_ICLR_HFXTFAULT_M: any = '1'
export const CKMD_ICLR_HFXTFAULT_S: any = '1'
/**
HFXT good indication.


Indicates that HFXT started correctly. The frequency is not necessarily good enough for radio operation.
This is only a one-time check at HFXT startup.*/
export const CKMD_ICLR_HFXTGOOD: any = '1'
export const CKMD_ICLR_HFXTGOOD_M: any = '1'
export const CKMD_ICLR_HFXTGOOD_S: any = '1'

// -------- REGISTER IMSET -------- //

/**
Interrupt mask set register.


Writing a 1 to a bit in this register will set the corresponding IMASK bit.*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const CKMD_IMSET_RESERVED18: any = '14'
export const CKMD_IMSET_RESERVED18_M: any = '14'
export const CKMD_IMSET_RESERVED18_S: any = '14'
/**
32kHz TICK to RTC and WDT.


Either derived from selected LFCLK or generated from CLKULL in absence of LFCLK.*/
export const CKMD_IMSET_LFTICK: any = '1'
export const CKMD_IMSET_LFTICK_M: any = '1'
export const CKMD_IMSET_LFTICK_S: any = '1'
/**
LFINC filter gearing restart.


Indicates that the LFINC filter restarted gearing. Subsequent LFINC estimates may have higher variation.*/
export const CKMD_IMSET_LFGEARRSTRT: any = '1'
export const CKMD_IMSET_LFGEARRSTRT_M: any = '1'
export const CKMD_IMSET_LFGEARRSTRT_S: any = '1'
/**
HFXT Amplitude compensation - settled


Indicates that the amplitude compensation FSM has reached the SETTLED or TCXOMODE state,
and the controls configured in HFXTTARG or HFXTDYN are reached.
*/
export const CKMD_IMSET_AMPSETTLED: any = '1'
export const CKMD_IMSET_AMPSETTLED_M: any = '1'
export const CKMD_IMSET_AMPSETTLED_S: any = '1'
/**
HFXT Amplitude compensation - controls at target


Indicates that the control values configured in HFXTTARG or HFXTDYN are reached.
Applies to Q1CAP, Q2CAP and IREF.*/
export const CKMD_IMSET_AMPCTRLATTARG: any = '1'
export const CKMD_IMSET_AMPCTRLATTARG_M: any = '1'
export const CKMD_IMSET_AMPCTRLATTARG_S: any = '1'
/**
Pre-LF clock edge detect.


Indicates that a positive edge occured on the selected pre-LF clock LFCLKSEL.PRE.
Can be used by software to confirm that a LF clock source is running and within the expected frequency,
before selecting it as the main LF clock source.*/
export const CKMD_IMSET_PRELFEDGE: any = '1'
export const CKMD_IMSET_PRELFEDGE_M: any = '1'
export const CKMD_IMSET_PRELFEDGE_S: any = '1'
/**
LF clock is lost.


Indicates that no LF clock edge occured for ~49us (~1.6 times nominal period).
The system will automatically fall-back to generating LFTICK based on CLKULL,
to avoid timing corruption.
Note that this signal is NOT related to the analog LF clock-loss detector which can reset the device during STANDBY.*/
export const CKMD_IMSET_LFCLKLOSS: any = '1'
export const CKMD_IMSET_LFCLKLOSS_M: any = '1'
export const CKMD_IMSET_LFCLKLOSS_S: any = '1'
/**
LF clock period out-of-range.


Indicates that a LF clock period was measured to be out-of-range,
according to LFQUALCTL.MAXERR.*/
export const CKMD_IMSET_LFCLKOOR: any = '1'
export const CKMD_IMSET_LFCLKOOR_M: any = '1'
export const CKMD_IMSET_LFCLKOOR_S: any = '1'
/**
LF clock good.


Indicates that the LF clock is good, according to the configuration in LFQUALCTL.*/
export const CKMD_IMSET_LFCLKGOOD: any = '1'
export const CKMD_IMSET_LFCLKGOOD_M: any = '1'
export const CKMD_IMSET_LFCLKGOOD_S: any = '1'
/**
LFINC updated.


Indicates that a new LFINC measurement value is available in LFCLKSTAT.LFINC.*/
export const CKMD_IMSET_LFINCUPD: any = '1'
export const CKMD_IMSET_LFINCUPD_M: any = '1'
export const CKMD_IMSET_LFINCUPD_S: any = '1'
/**
TDC done event.


Indicates that the TDC measurement is done.*/
export const CKMD_IMSET_TDCDONE: any = '1'
export const CKMD_IMSET_TDCDONE_M: any = '1'
export const CKMD_IMSET_TDCDONE_S: any = '1'
/**
HFXT-ADC PEAK measurement update event.


Indicates that the HFXT-ADC PEAK measurement is done.*/
export const CKMD_IMSET_ADCPEAKUPD: any = '1'
export const CKMD_IMSET_ADCPEAKUPD_M: any = '1'
export const CKMD_IMSET_ADCPEAKUPD_S: any = '1'
/**
HFXT-ADC BIAS measurement update event.


Indicates that the HFXT-ADC BIAS measurement is done.*/
export const CKMD_IMSET_ADCBIASUPD: any = '1'
export const CKMD_IMSET_ADCBIASUPD_M: any = '1'
export const CKMD_IMSET_ADCBIASUPD_S: any = '1'
/**
HFXT-ADC comparison update event.


Indicates that the HFXT-ADC comparison is done.*/
export const CKMD_IMSET_ADCCOMPUPD: any = '1'
export const CKMD_IMSET_ADCCOMPUPD_M: any = '1'
export const CKMD_IMSET_ADCCOMPUPD_S: any = '1'
/**
Out-of-range indication from the tracking loop.


Indicates that the selected reference clock frequency of the tracking loop is out-of-range.*/
export const CKMD_IMSET_TRACKREFOOR: any = '1'
export const CKMD_IMSET_TRACKREFOOR_M: any = '1'
export const CKMD_IMSET_TRACKREFOOR_S: any = '1'
/**
Clock loss indication from the tracking loop.


Indicates that the selected reference clock of the tracking loop is lost.*/
export const CKMD_IMSET_TRACKREFLOSS: any = '1'
export const CKMD_IMSET_TRACKREFLOSS_M: any = '1'
export const CKMD_IMSET_TRACKREFLOSS_S: any = '1'
/**
HFXT amplitude good indication.*/
export const CKMD_IMSET_HFXTAMPGOOD: any = '1'
export const CKMD_IMSET_HFXTAMPGOOD_M: any = '1'
export const CKMD_IMSET_HFXTAMPGOOD_S: any = '1'
/**
HFXT fault indication.


Indicates that HFXT did not start correctly, or its frequency is too low.
HFXT will not recover from this fault and has to be restarted.
This is only a one-time check at HFXT startup.*/
export const CKMD_IMSET_HFXTFAULT: any = '1'
export const CKMD_IMSET_HFXTFAULT_M: any = '1'
export const CKMD_IMSET_HFXTFAULT_S: any = '1'
/**
HFXT good indication.


Indicates that HFXT started correctly. The frequency is not necessarily good enough for radio operation.
This is only a one-time check at HFXT startup.*/
export const CKMD_IMSET_HFXTGOOD: any = '1'
export const CKMD_IMSET_HFXTGOOD_M: any = '1'
export const CKMD_IMSET_HFXTGOOD_S: any = '1'

// -------- REGISTER IMCLR -------- //

/**
Interrupt mask clear register.


Writing a 1 to a bit in this register will clear the corresponding IMASK bit.*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const CKMD_IMCLR_RESERVED18: any = '14'
export const CKMD_IMCLR_RESERVED18_M: any = '14'
export const CKMD_IMCLR_RESERVED18_S: any = '14'
/**
32kHz TICK to RTC and WDT.


Either derived from selected LFCLK or generated from CLKULL in absence of LFCLK.*/
export const CKMD_IMCLR_LFTICK: any = '1'
export const CKMD_IMCLR_LFTICK_M: any = '1'
export const CKMD_IMCLR_LFTICK_S: any = '1'
/**
LFINC filter gearing restart.


Indicates that the LFINC filter restarted gearing. Subsequent LFINC estimates may have higher variation.*/
export const CKMD_IMCLR_LFGEARRSTRT: any = '1'
export const CKMD_IMCLR_LFGEARRSTRT_M: any = '1'
export const CKMD_IMCLR_LFGEARRSTRT_S: any = '1'
/**
HFXT Amplitude compensation - settled


Indicates that the amplitude compensation FSM has reached the SETTLED or TCXOMODE state,
and the controls configured in HFXTTARG or HFXTDYN are reached.
*/
export const CKMD_IMCLR_AMPSETTLED: any = '1'
export const CKMD_IMCLR_AMPSETTLED_M: any = '1'
export const CKMD_IMCLR_AMPSETTLED_S: any = '1'
/**
HFXT Amplitude compensation - controls at target


Indicates that the control values configured in HFXTTARG or HFXTDYN are reached.
Applies to Q1CAP, Q2CAP and IREF.*/
export const CKMD_IMCLR_AMPCTRLATTARG: any = '1'
export const CKMD_IMCLR_AMPCTRLATTARG_M: any = '1'
export const CKMD_IMCLR_AMPCTRLATTARG_S: any = '1'
/**
Pre-LF clock edge detect.


Indicates that a positive edge occured on the selected pre-LF clock LFCLKSEL.PRE.
Can be used by software to confirm that a LF clock source is running and within the expected frequency,
before selecting it as the main LF clock source.*/
export const CKMD_IMCLR_PRELFEDGE: any = '1'
export const CKMD_IMCLR_PRELFEDGE_M: any = '1'
export const CKMD_IMCLR_PRELFEDGE_S: any = '1'
/**
LF clock is lost.


Indicates that no LF clock edge occured for ~49us (~1.6 times nominal period).
The system will automatically fall-back to generating LFTICK based on CLKULL,
to avoid timing corruption.
Note that this signal is NOT related to the analog LF clock-loss detector which can reset the device during STANDBY.*/
export const CKMD_IMCLR_LFCLKLOSS: any = '1'
export const CKMD_IMCLR_LFCLKLOSS_M: any = '1'
export const CKMD_IMCLR_LFCLKLOSS_S: any = '1'
/**
LF clock period out-of-range.


Indicates that a LF clock period was measured to be out-of-range,
according to LFQUALCTL.MAXERR.*/
export const CKMD_IMCLR_LFCLKOOR: any = '1'
export const CKMD_IMCLR_LFCLKOOR_M: any = '1'
export const CKMD_IMCLR_LFCLKOOR_S: any = '1'
/**
LF clock good.


Indicates that the LF clock is good, according to the configuration in LFQUALCTL.*/
export const CKMD_IMCLR_LFCLKGOOD: any = '1'
export const CKMD_IMCLR_LFCLKGOOD_M: any = '1'
export const CKMD_IMCLR_LFCLKGOOD_S: any = '1'
/**
LFINC updated.


Indicates that a new LFINC measurement value is available in LFCLKSTAT.LFINC.*/
export const CKMD_IMCLR_LFINCUPD: any = '1'
export const CKMD_IMCLR_LFINCUPD_M: any = '1'
export const CKMD_IMCLR_LFINCUPD_S: any = '1'
/**
TDC done event.


Indicates that the TDC measurement is done.*/
export const CKMD_IMCLR_TDCDONE: any = '1'
export const CKMD_IMCLR_TDCDONE_M: any = '1'
export const CKMD_IMCLR_TDCDONE_S: any = '1'
/**
HFXT-ADC PEAK measurement update event.


Indicates that the HFXT-ADC PEAK measurement is done.*/
export const CKMD_IMCLR_ADCPEAKUPD: any = '1'
export const CKMD_IMCLR_ADCPEAKUPD_M: any = '1'
export const CKMD_IMCLR_ADCPEAKUPD_S: any = '1'
/**
HFXT-ADC BIAS measurement update event.


Indicates that the HFXT-ADC BIAS measurement is done.*/
export const CKMD_IMCLR_ADCBIASUPD: any = '1'
export const CKMD_IMCLR_ADCBIASUPD_M: any = '1'
export const CKMD_IMCLR_ADCBIASUPD_S: any = '1'
/**
HFXT-ADC comparison update event.


Indicates that the HFXT-ADC comparison is done.*/
export const CKMD_IMCLR_ADCCOMPUPD: any = '1'
export const CKMD_IMCLR_ADCCOMPUPD_M: any = '1'
export const CKMD_IMCLR_ADCCOMPUPD_S: any = '1'
/**
Out-of-range indication from the tracking loop.


Indicates that the selected reference clock frequency of the tracking loop is out-of-range.*/
export const CKMD_IMCLR_TRACKREFOOR: any = '1'
export const CKMD_IMCLR_TRACKREFOOR_M: any = '1'
export const CKMD_IMCLR_TRACKREFOOR_S: any = '1'
/**
Clock loss indication from the tracking loop.


Indicates that the selected reference clock of the tracking loop is lost.*/
export const CKMD_IMCLR_TRACKREFLOSS: any = '1'
export const CKMD_IMCLR_TRACKREFLOSS_M: any = '1'
export const CKMD_IMCLR_TRACKREFLOSS_S: any = '1'
/**
HFXT amplitude good indication.*/
export const CKMD_IMCLR_HFXTAMPGOOD: any = '1'
export const CKMD_IMCLR_HFXTAMPGOOD_M: any = '1'
export const CKMD_IMCLR_HFXTAMPGOOD_S: any = '1'
/**
HFXT fault indication.


Indicates that HFXT did not start correctly, or its frequency is too low.
HFXT will not recover from this fault and has to be restarted.
This is only a one-time check at HFXT startup.*/
export const CKMD_IMCLR_HFXTFAULT: any = '1'
export const CKMD_IMCLR_HFXTFAULT_M: any = '1'
export const CKMD_IMCLR_HFXTFAULT_S: any = '1'
/**
HFXT good indication.


Indicates that HFXT started correctly. The frequency is not necessarily good enough for radio operation.
This is only a one-time check at HFXT startup.*/
export const CKMD_IMCLR_HFXTGOOD: any = '1'
export const CKMD_IMCLR_HFXTGOOD_M: any = '1'
export const CKMD_IMCLR_HFXTGOOD_S: any = '1'

// -------- REGISTER HFOSCCTL -------- //

/**
Internal. Only to be used through TI provided API.*/
/**
Internal. Only to be used through TI provided API.*/
export const CKMD_HFOSCCTL_PW: any = '8'
export const CKMD_HFOSCCTL_PW_M: any = '8'
export const CKMD_HFOSCCTL_PW_S: any = '8'
/**
Internal. Only to be used through TI provided API.*/
export const CKMD_HFOSCCTL_RESERVED9: any = '15'
export const CKMD_HFOSCCTL_RESERVED9_M: any = '15'
export const CKMD_HFOSCCTL_RESERVED9_S: any = '15'
/**
Internal. Only to be used through TI provided API.*/
export const CKMD_HFOSCCTL_CLKSVTOVR: any = '1'
export const CKMD_HFOSCCTL_CLKSVTOVR_M: any = '1'
export const CKMD_HFOSCCTL_CLKSVTOVR_S: any = '1'
/**
Internal. Only to be used through TI provided API.*/
export const CKMD_HFOSCCTL_CLKSVTOVR_HFXT: any = '1'

/**
Internal. Only to be used through TI provided API.*/
export const CKMD_HFOSCCTL_CLKSVTOVR_HFOSC: any = '0'

/**
Internal. Only to be used through TI provided API.*/
export const CKMD_HFOSCCTL_RESERVED2: any = '6'
export const CKMD_HFOSCCTL_RESERVED2_M: any = '6'
export const CKMD_HFOSCCTL_RESERVED2_S: any = '6'
/**
Internal. Only to be used through TI provided API.*/
export const CKMD_HFOSCCTL_FORCEOFF: any = '1'
export const CKMD_HFOSCCTL_FORCEOFF_M: any = '1'
export const CKMD_HFOSCCTL_FORCEOFF_S: any = '1'
/**
Internal. Only to be used through TI provided API.*/
export const CKMD_HFOSCCTL_QUALBYP: any = '1'
export const CKMD_HFOSCCTL_QUALBYP_M: any = '1'
export const CKMD_HFOSCCTL_QUALBYP_S: any = '1'

// -------- REGISTER HFXTCTL -------- //

/**
High frequency crystal control*/
/**
Internal. Only to be used through TI provided API.*/
export const CKMD_HFXTCTL_AMPOVR: any = '1'
export const CKMD_HFXTCTL_AMPOVR_M: any = '1'
export const CKMD_HFXTCTL_AMPOVR_S: any = '1'
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const CKMD_HFXTCTL_RESERVED27: any = '4'
export const CKMD_HFXTCTL_RESERVED27_M: any = '4'
export const CKMD_HFXTCTL_RESERVED27_S: any = '4'
/**
Internal. Only to be used through TI provided API.*/
export const CKMD_HFXTCTL_BIASEN: any = '1'
export const CKMD_HFXTCTL_BIASEN_M: any = '1'
export const CKMD_HFXTCTL_BIASEN_S: any = '1'
/**
Internal. Only to be used through TI provided API.*/
export const CKMD_HFXTCTL_LPBUFEN: any = '1'
export const CKMD_HFXTCTL_LPBUFEN_M: any = '1'
export const CKMD_HFXTCTL_LPBUFEN_S: any = '1'
/**
Internal. Only to be used through TI provided API.*/
export const CKMD_HFXTCTL_INJECT: any = '1'
export const CKMD_HFXTCTL_INJECT_M: any = '1'
export const CKMD_HFXTCTL_INJECT_S: any = '1'
/**
Internal. Only to be used through TI provided API.*/
export const CKMD_HFXTCTL_QUALBYP: any = '1'
export const CKMD_HFXTCTL_QUALBYP_M: any = '1'
export const CKMD_HFXTCTL_QUALBYP_S: any = '1'
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const CKMD_HFXTCTL_RESERVED20: any = '3'
export const CKMD_HFXTCTL_RESERVED20_M: any = '3'
export const CKMD_HFXTCTL_RESERVED20_S: any = '3'
/**
Skip potentially unstable clock cycles after enabling HFXT.

Number of cycles skipped is 8*QUALDLY.*/
export const CKMD_HFXTCTL_QUALDLY: any = '12'
export const CKMD_HFXTCTL_QUALDLY_M: any = '12'
export const CKMD_HFXTCTL_QUALDLY_S: any = '12'
/**
Temperature compensated crystal oscillator mode.


Set this bit if a TXCO is connected.*/
export const CKMD_HFXTCTL_TCXOMODE: any = '1'
export const CKMD_HFXTCTL_TCXOMODE_M: any = '1'
export const CKMD_HFXTCTL_TCXOMODE_S: any = '1'
/**
Type of temperature compensated crystal used.


Only has effect if TCXOMODE is set.*/
export const CKMD_HFXTCTL_TCXOTYPE: any = '1'
export const CKMD_HFXTCTL_TCXOTYPE_M: any = '1'
export const CKMD_HFXTCTL_TCXOTYPE_S: any = '1'
/**
Use with CMOS TCXO*/
export const CKMD_HFXTCTL_TCXOTYPE_CMOS: any = '1'

/**
Use with clipped-sine TCXO*/
export const CKMD_HFXTCTL_TCXOTYPE_CLIPPEDSINE: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const CKMD_HFXTCTL_RESERVED3: any = '3'
export const CKMD_HFXTCTL_RESERVED3_M: any = '3'
export const CKMD_HFXTCTL_RESERVED3_S: any = '3'
/**
Internal. Only to be used through TI provided API.*/
export const CKMD_HFXTCTL_AUTOEN: any = '1'
export const CKMD_HFXTCTL_AUTOEN_M: any = '1'
export const CKMD_HFXTCTL_AUTOEN_S: any = '1'
/**
High performance clock buffer enable.


This bit controls the clock output for the RF PLL.
It is required for radio operation.*/
export const CKMD_HFXTCTL_HPBUFEN: any = '1'
export const CKMD_HFXTCTL_HPBUFEN_M: any = '1'
export const CKMD_HFXTCTL_HPBUFEN_S: any = '1'
/**
Internal. Only to be used through TI provided API.*/
export const CKMD_HFXTCTL_EN: any = '1'
export const CKMD_HFXTCTL_EN_M: any = '1'
export const CKMD_HFXTCTL_EN_S: any = '1'

// -------- REGISTER LFOSCCTL -------- //

/**
Low frequency oscillator control*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const CKMD_LFOSCCTL_RESERVED1: any = '31'
export const CKMD_LFOSCCTL_RESERVED1_M: any = '31'
export const CKMD_LFOSCCTL_RESERVED1_S: any = '31'
/**
LFOSC enable*/
export const CKMD_LFOSCCTL_EN: any = '1'
export const CKMD_LFOSCCTL_EN_M: any = '1'
export const CKMD_LFOSCCTL_EN_S: any = '1'

// -------- REGISTER LFXTCTL -------- //

/**
Low frequency crystal control*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const CKMD_LFXTCTL_RESERVED15: any = '17'
export const CKMD_LFXTCTL_RESERVED15_M: any = '17'
export const CKMD_LFXTCTL_RESERVED15_S: any = '17'
/**
Leakage compensation control*/
export const CKMD_LFXTCTL_LEAKCOMP: any = '2'
export const CKMD_LFXTCTL_LEAKCOMP_M: any = '2'
export const CKMD_LFXTCTL_LEAKCOMP_S: any = '2'
/**
No leakage compensation*/
export const CKMD_LFXTCTL_LEAKCOMP_OFF: any = '3'

/**
Half leakage compensation*/
export const CKMD_LFXTCTL_LEAKCOMP_HALF: any = '1'

/**
Full leakage compensation*/
export const CKMD_LFXTCTL_LEAKCOMP_FULL: any = '0'

/**
Control the BIAS current of the input amp in LP buffer*/
export const CKMD_LFXTCTL_BUFBIAS: any = '1'
export const CKMD_LFXTCTL_BUFBIAS_M: any = '1'
export const CKMD_LFXTCTL_BUFBIAS_S: any = '1'
/**
Maximum bias current: 50nA*/
export const CKMD_LFXTCTL_BUFBIAS_MAX: any = '1'

/**
Minimum bias current: 25nA*/
export const CKMD_LFXTCTL_BUFBIAS_MIN: any = '0'

/**
Adjust current mirror ratio into oscillator core. This value is depending on crystal and is set by FW. This field uses a 2's complement encoding.*/
export const CKMD_LFXTCTL_AMPBIAS: any = '4'
export const CKMD_LFXTCTL_AMPBIAS_M: any = '4'
export const CKMD_LFXTCTL_AMPBIAS_S: any = '4'
/**
Boost oscillator amplitude


This value depends on the crystal and needs to be configured by Firmware.*/
export const CKMD_LFXTCTL_BIASBOOST: any = '2'
export const CKMD_LFXTCTL_BIASBOOST_M: any = '2'
export const CKMD_LFXTCTL_BIASBOOST_S: any = '2'
/**
Regulation loop bias resistor value


This value depends on the crystal and needs to be configured by Firmware.*/
export const CKMD_LFXTCTL_REGBIAS: any = '2'
export const CKMD_LFXTCTL_REGBIAS_M: any = '2'
export const CKMD_LFXTCTL_REGBIAS_S: any = '2'
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const CKMD_LFXTCTL_RESERVED3: any = '1'
export const CKMD_LFXTCTL_RESERVED3_M: any = '1'
export const CKMD_LFXTCTL_RESERVED3_S: any = '1'
/**
Control the buffer used. In normal operation, low-power buffer is used in all device modes. The high-performance buffer is only used for test purposes.

*/
export const CKMD_LFXTCTL_HPBUFEN: any = '1'
export const CKMD_LFXTCTL_HPBUFEN_M: any = '1'
export const CKMD_LFXTCTL_HPBUFEN_S: any = '1'
/**
Amplitude regulation mode*/
export const CKMD_LFXTCTL_AMPREGMODE: any = '1'
export const CKMD_LFXTCTL_AMPREGMODE_M: any = '1'
export const CKMD_LFXTCTL_AMPREGMODE_S: any = '1'
/**
Amplitude control loop disabled*/
export const CKMD_LFXTCTL_AMPREGMODE_LOOPDIS: any = '1'

/**
Amplitude control loop enabled*/
export const CKMD_LFXTCTL_AMPREGMODE_LOOPEN: any = '0'

/**
LFXT enable*/
export const CKMD_LFXTCTL_EN: any = '1'
export const CKMD_LFXTCTL_EN_M: any = '1'
export const CKMD_LFXTCTL_EN_S: any = '1'

// -------- REGISTER LFQUALCTL -------- //

/**
Low frequency clock qualification control*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const CKMD_LFQUALCTL_RESERVED14: any = '18'
export const CKMD_LFQUALCTL_RESERVED14_M: any = '18'
export const CKMD_LFQUALCTL_RESERVED14_S: any = '18'
/**
Maximum LFCLK period error.


Value given in microseconds, 3 integer bits + 3 fractional bits.*/
export const CKMD_LFQUALCTL_MAXERR: any = '6'
export const CKMD_LFQUALCTL_MAXERR_M: any = '6'
export const CKMD_LFQUALCTL_MAXERR_S: any = '6'
/**
Number of consecutive times the LFCLK period error has to be 

smaller than MAXERR to be considered "good".
Setting this value to 0 will bypass clock qualification,
and the "good" indicator will always be 1.*/
export const CKMD_LFQUALCTL_CONSEC: any = '8'
export const CKMD_LFQUALCTL_CONSEC_M: any = '8'
export const CKMD_LFQUALCTL_CONSEC_S: any = '8'

// -------- REGISTER LFINCCTL -------- //

/**
Low frequency time increment control*/
/**
Controls if the LFINC filter prevents STANBY entry until settled.

*/
export const CKMD_LFINCCTL_PREVENTSTBY: any = '1'
export const CKMD_LFINCCTL_PREVENTSTBY_M: any = '1'
export const CKMD_LFINCCTL_PREVENTSTBY_S: any = '1'
/**
Enable. Prevent STANDBY entry.*/
export const CKMD_LFINCCTL_PREVENTSTBY_ON: any = '1'

/**
Disable. Do not prevent STANDBY entry.*/
export const CKMD_LFINCCTL_PREVENTSTBY_OFF: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const CKMD_LFINCCTL_RESERVED30: any = '1'
export const CKMD_LFINCCTL_RESERVED30_M: any = '1'
export const CKMD_LFINCCTL_RESERVED30_S: any = '1'
/**
Integral part of the LFINC filter.


This value is updated by Hardware to reflect the current state of the filter.
It can also be written to change the current state.*/
export const CKMD_LFINCCTL_INT: any = '22'
export const CKMD_LFINCCTL_INT_M: any = '22'
export const CKMD_LFINCCTL_INT_S: any = '22'
/**
Controls the final gear of the LFINC filter.*/
export const CKMD_LFINCCTL_STOPGEAR: any = '1'
export const CKMD_LFINCCTL_STOPGEAR_M: any = '1'
export const CKMD_LFINCCTL_STOPGEAR_S: any = '1'
/**
Highest final gear. Best dynamic frequency tracking, but higher variation in filter value.*/
export const CKMD_LFINCCTL_STOPGEAR_HIGH: any = '1'

/**
Lowest final gear. Best settling, but less dynamic frequency tracking.*/
export const CKMD_LFINCCTL_STOPGEAR_LOW: any = '0'

/**
Controls the threshold for gearing restart of the LFINC filter.


Only effective if GEARRSTRT is not ONETHR or TWOTHR.*/
export const CKMD_LFINCCTL_ERRTHR: any = '2'
export const CKMD_LFINCCTL_ERRTHR_M: any = '2'
export const CKMD_LFINCCTL_ERRTHR_S: any = '2'
/**
Restart gearing on small error. Potentially more false restarts, faster response on small frequency shifts.*/
export const CKMD_LFINCCTL_ERRTHR_SMALL: any = '3'

/**
Middle value towards SMALL.*/
export const CKMD_LFINCCTL_ERRTHR_MIDSMALL: any = '2'

/**
Middle value towards LARGE.*/
export const CKMD_LFINCCTL_ERRTHR_MIDLARGE: any = '1'

/**
Restart gearing on large error. Fewer false restarts, slower response on small frequency shifts.*/
export const CKMD_LFINCCTL_ERRTHR_LARGE: any = '0'

/**
Controls gearing restart of the LFINC filter.*/
export const CKMD_LFINCCTL_GEARRSTRT: any = '2'
export const CKMD_LFINCCTL_GEARRSTRT_M: any = '2'
export const CKMD_LFINCCTL_GEARRSTRT_S: any = '2'
/**
Restart gearing when the error accumulator crosses the threshold twice in a row.*/
export const CKMD_LFINCCTL_GEARRSTRT_TWOTHR: any = '2'

/**
Restart gearing when the error accumulator crosses the threshold once.*/
export const CKMD_LFINCCTL_GEARRSTRT_ONETHR: any = '1'

/**
Never restart gearing. Very stable filter value, but very slow response on frequency changes.*/
export const CKMD_LFINCCTL_GEARRSTRT_NEVER: any = '0'

/**
Use a higher gear after re-enabling / wakeup.


The filter will require 16-24 LFCLK periods to settle (depending on STOPGEAR), but may respond faster to frequency changes during STANDBY.*/
export const CKMD_LFINCCTL_SOFTRSTRT: any = '1'
export const CKMD_LFINCCTL_SOFTRSTRT_M: any = '1'
export const CKMD_LFINCCTL_SOFTRSTRT_S: any = '1'
/**
Use soft gearing restarts*/
export const CKMD_LFINCCTL_SOFTRSTRT_ON: any = '1'

/**
Don't use soft gearing restarts*/
export const CKMD_LFINCCTL_SOFTRSTRT_OFF: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const CKMD_LFINCCTL_RESERVED0: any = '2'
export const CKMD_LFINCCTL_RESERVED0_M: any = '2'
export const CKMD_LFINCCTL_RESERVED0_S: any = '2'

// -------- REGISTER LFINCOVR -------- //

/**
Low frequency time increment override control*/
/**
Override LF increment


Use the value provided in LFINC instead of the value calculated by Hardware.*/
export const CKMD_LFINCOVR_OVERRIDE: any = '1'
export const CKMD_LFINCOVR_OVERRIDE_M: any = '1'
export const CKMD_LFINCOVR_OVERRIDE_S: any = '1'
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const CKMD_LFINCOVR_RESERVED22: any = '9'
export const CKMD_LFINCOVR_RESERVED22_M: any = '9'
export const CKMD_LFINCOVR_RESERVED22_S: any = '9'
/**
LF increment value


This value is used when OVERRIDE is set to 1.
Otherwise the value is calculated automatically.*/
export const CKMD_LFINCOVR_LFINC: any = '22'
export const CKMD_LFINCOVR_LFINC_M: any = '22'
export const CKMD_LFINCOVR_LFINC_S: any = '22'

// -------- REGISTER AMPADCCTL -------- //

/**
Internal. Only to be used through TI provided API.*/
/**
Internal. Only to be used through TI provided API.*/
export const CKMD_AMPADCCTL_SWOVR: any = '1'
export const CKMD_AMPADCCTL_SWOVR_M: any = '1'
export const CKMD_AMPADCCTL_SWOVR_S: any = '1'
/**
Internal. Only to be used through TI provided API.*/
export const CKMD_AMPADCCTL_RESERVED18: any = '13'
export const CKMD_AMPADCCTL_RESERVED18_M: any = '13'
export const CKMD_AMPADCCTL_RESERVED18_S: any = '13'
/**
Internal. Only to be used through TI provided API.*/
export const CKMD_AMPADCCTL_PEAKDETEN: any = '1'
export const CKMD_AMPADCCTL_PEAKDETEN_M: any = '1'
export const CKMD_AMPADCCTL_PEAKDETEN_S: any = '1'
/**
Internal. Only to be used through TI provided API.*/
export const CKMD_AMPADCCTL_PEAKDETEN_ENABLE: any = '1'

/**
Internal. Only to be used through TI provided API.*/
export const CKMD_AMPADCCTL_PEAKDETEN_DISABLE: any = '0'

/**
Internal. Only to be used through TI provided API.*/
export const CKMD_AMPADCCTL_ADCEN: any = '1'
export const CKMD_AMPADCCTL_ADCEN_M: any = '1'
export const CKMD_AMPADCCTL_ADCEN_S: any = '1'
/**
Internal. Only to be used through TI provided API.*/
export const CKMD_AMPADCCTL_ADCEN_ENABLE: any = '1'

/**
Internal. Only to be used through TI provided API.*/
export const CKMD_AMPADCCTL_ADCEN_DISABLE: any = '0'

/**
Internal. Only to be used through TI provided API.*/
export const CKMD_AMPADCCTL_RESERVED15: any = '1'
export const CKMD_AMPADCCTL_RESERVED15_M: any = '1'
export const CKMD_AMPADCCTL_RESERVED15_S: any = '1'
/**
Internal. Only to be used through TI provided API.*/
export const CKMD_AMPADCCTL_COMPVAL: any = '7'
export const CKMD_AMPADCCTL_COMPVAL_M: any = '7'
export const CKMD_AMPADCCTL_COMPVAL_S: any = '7'
/**
Internal. Only to be used through TI provided API.*/
export const CKMD_AMPADCCTL_RESERVED5: any = '3'
export const CKMD_AMPADCCTL_RESERVED5_M: any = '3'
export const CKMD_AMPADCCTL_RESERVED5_S: any = '3'
/**
Internal. Only to be used through TI provided API.*/
export const CKMD_AMPADCCTL_SRCSEL: any = '1'
export const CKMD_AMPADCCTL_SRCSEL_M: any = '1'
export const CKMD_AMPADCCTL_SRCSEL_S: any = '1'
/**
Internal. Only to be used through TI provided API.*/
export const CKMD_AMPADCCTL_SRCSEL_PEAK: any = '1'

/**
Internal. Only to be used through TI provided API.*/
export const CKMD_AMPADCCTL_SRCSEL_BIAS: any = '0'

/**
Internal. Only to be used through TI provided API.*/
export const CKMD_AMPADCCTL_RESERVED2: any = '2'
export const CKMD_AMPADCCTL_RESERVED2_M: any = '2'
export const CKMD_AMPADCCTL_RESERVED2_S: any = '2'
/**
Internal. Only to be used through TI provided API.*/
export const CKMD_AMPADCCTL_COMPSTRT: any = '1'
export const CKMD_AMPADCCTL_COMPSTRT_M: any = '1'
export const CKMD_AMPADCCTL_COMPSTRT_S: any = '1'
/**
Internal. Only to be used through TI provided API.*/
export const CKMD_AMPADCCTL_SARSTRT: any = '1'
export const CKMD_AMPADCCTL_SARSTRT_M: any = '1'
export const CKMD_AMPADCCTL_SARSTRT_S: any = '1'

// -------- REGISTER HFTRACKCTL -------- //

/**
High frequency tracking loop control*/
/**
Enable tracking loop.*/
export const CKMD_HFTRACKCTL_EN: any = '1'
export const CKMD_HFTRACKCTL_EN_M: any = '1'
export const CKMD_HFTRACKCTL_EN_S: any = '1'
/**
Bypass Delta-Sigma-Modulation of fine trim.*/
export const CKMD_HFTRACKCTL_DSMBYP: any = '1'
export const CKMD_HFTRACKCTL_DSMBYP_M: any = '1'
export const CKMD_HFTRACKCTL_DSMBYP_S: any = '1'
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const CKMD_HFTRACKCTL_RESERVED28: any = '2'
export const CKMD_HFTRACKCTL_RESERVED28_M: any = '2'
export const CKMD_HFTRACKCTL_RESERVED28_S: any = '2'
/**
Select the reference clock for the tracking loop.

Change only while the tracking loop is disabled.*/
export const CKMD_HFTRACKCTL_REFCLK: any = '2'
export const CKMD_HFTRACKCTL_REFCLK_M: any = '2'
export const CKMD_HFTRACKCTL_REFCLK_S: any = '2'
/**
Select GPI as reference clock.*/
export const CKMD_HFTRACKCTL_REFCLK_GPI: any = '2'

/**
Select LRF reference clock.*/
export const CKMD_HFTRACKCTL_REFCLK_LRF: any = '1'

/**
Select HFXT as reference clock.*/
export const CKMD_HFTRACKCTL_REFCLK_HFXT: any = '0'

/**
Reference clock ratio.


RATIO = 24MHz / (2*reference-frequency) * 2^24
Commonly used reference clock frequencies are provided as enumerations.
*/
export const CKMD_HFTRACKCTL_RATIO: any = '26'
export const CKMD_HFTRACKCTL_RATIO_M: any = '26'
export const CKMD_HFTRACKCTL_RATIO_S: any = '26'
/**
Use for 4MHz reference clock*/
export const CKMD_HFTRACKCTL_RATIO_REF4M: any = '50331648'

/**
Use for 8MHz reference clock*/
export const CKMD_HFTRACKCTL_RATIO_REF8M: any = '25165824'

/**
Use for 48MHz reference clock*/
export const CKMD_HFTRACKCTL_RATIO_REF48M: any = '4194304'


// -------- REGISTER LDOCTL -------- //

/**
Internal. Only to be used through TI provided API.*/
/**
Internal. Only to be used through TI provided API.*/
export const CKMD_LDOCTL_SWOVR: any = '1'
export const CKMD_LDOCTL_SWOVR_M: any = '1'
export const CKMD_LDOCTL_SWOVR_S: any = '1'
/**
Internal. Only to be used through TI provided API.*/
export const CKMD_LDOCTL_RESERVED5: any = '26'
export const CKMD_LDOCTL_RESERVED5_M: any = '26'
export const CKMD_LDOCTL_RESERVED5_S: any = '26'
/**
Internal. Only to be used through TI provided API.*/
export const CKMD_LDOCTL_HFXTLVLEN: any = '1'
export const CKMD_LDOCTL_HFXTLVLEN_M: any = '1'
export const CKMD_LDOCTL_HFXTLVLEN_S: any = '1'
/**
Internal. Only to be used through TI provided API.*/
export const CKMD_LDOCTL_STARTCTL: any = '1'
export const CKMD_LDOCTL_STARTCTL_M: any = '1'
export const CKMD_LDOCTL_STARTCTL_S: any = '1'
/**
Internal. Only to be used through TI provided API.*/
export const CKMD_LDOCTL_START: any = '1'
export const CKMD_LDOCTL_START_M: any = '1'
export const CKMD_LDOCTL_START_S: any = '1'
/**
Internal. Only to be used through TI provided API.*/
export const CKMD_LDOCTL_BYPASS: any = '1'
export const CKMD_LDOCTL_BYPASS_M: any = '1'
export const CKMD_LDOCTL_BYPASS_S: any = '1'
/**
Internal. Only to be used through TI provided API.*/
export const CKMD_LDOCTL_EN: any = '1'
export const CKMD_LDOCTL_EN_M: any = '1'
export const CKMD_LDOCTL_EN_S: any = '1'

// -------- REGISTER NABIASCTL -------- //

/**
Nanoamp-bias control*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const CKMD_NABIASCTL_RESERVED1: any = '31'
export const CKMD_NABIASCTL_RESERVED1_M: any = '31'
export const CKMD_NABIASCTL_RESERVED1_S: any = '31'
/**
Enable nanoamp-bias*/
export const CKMD_NABIASCTL_EN: any = '1'
export const CKMD_NABIASCTL_EN_M: any = '1'
export const CKMD_NABIASCTL_EN_S: any = '1'

// -------- REGISTER LFMONCTL -------- //

/**
Low-frequency clock-monitor control*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const CKMD_LFMONCTL_RESERVED1: any = '31'
export const CKMD_LFMONCTL_RESERVED1_M: any = '31'
export const CKMD_LFMONCTL_RESERVED1_S: any = '31'
/**
Enable LFMONITOR.

Enable only after a LF clock source has been selected, enabled and is stable.
If LFMONITOR detects a clock loss, the system will be reset.*/
export const CKMD_LFMONCTL_EN: any = '1'
export const CKMD_LFMONCTL_EN_M: any = '1'
export const CKMD_LFMONCTL_EN_S: any = '1'

// -------- REGISTER LFCLKSEL -------- //

/**
Low frequency clock selection*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const CKMD_LFCLKSEL_RESERVED4: any = '28'
export const CKMD_LFCLKSEL_RESERVED4_M: any = '28'
export const CKMD_LFCLKSEL_RESERVED4_S: any = '28'
/**
Select low frequency clock source for the PRELFCLK interrupt.


Can be used by Software to confirm that the clock is running and it's frequency is good, before selecting it in MAIN.*/
export const CKMD_LFCLKSEL_PRE: any = '2'
export const CKMD_LFCLKSEL_PRE_M: any = '2'
export const CKMD_LFCLKSEL_PRE_S: any = '2'
/**
External LF clock through GPI.*/
export const CKMD_LFCLKSEL_PRE_EXTLF: any = '3'

/**
Low frequency crystal oscillator*/
export const CKMD_LFCLKSEL_PRE_LFXT: any = '2'

/**
Low frequency on-chip oscillator*/
export const CKMD_LFCLKSEL_PRE_LFOSC: any = '1'

/**
No clock. Output will be tied low.*/
export const CKMD_LFCLKSEL_PRE_NONE: any = '0'

/**
Select the main low frequency clock source.


If running, this clock will be used to generate LFTICK and as CLKULL during STANDBY.
If not running, LFTICK will be generated from HFOSC and STANDBY entry will be prevented.*/
export const CKMD_LFCLKSEL_MAIN: any = '2'
export const CKMD_LFCLKSEL_MAIN_M: any = '2'
export const CKMD_LFCLKSEL_MAIN_S: any = '2'
/**
External LF clock through GPI.*/
export const CKMD_LFCLKSEL_MAIN_EXTLF: any = '3'

/**
Low frequency crystal oscillator*/
export const CKMD_LFCLKSEL_MAIN_LFXT: any = '2'

/**
Low frequency on-chip oscillator*/
export const CKMD_LFCLKSEL_MAIN_LFOSC: any = '1'

/**
No LF clock selected. LFTICK will be generated from HFOSC, STANDBY entry will be prevented.*/
export const CKMD_LFCLKSEL_MAIN_FAKE: any = '0'


// -------- REGISTER TDCCLKSEL -------- //

/**
Internal. Only to be used through TI provided API.*/
/**
Internal. Only to be used through TI provided API.*/
export const CKMD_TDCCLKSEL_RESERVED2: any = '30'
export const CKMD_TDCCLKSEL_RESERVED2_M: any = '30'
export const CKMD_TDCCLKSEL_RESERVED2_S: any = '30'
/**
Internal. Only to be used through TI provided API.*/
export const CKMD_TDCCLKSEL_REFCLK: any = '2'
export const CKMD_TDCCLKSEL_REFCLK_M: any = '2'
export const CKMD_TDCCLKSEL_REFCLK_S: any = '2'
/**
Internal. Only to be used through TI provided API.*/
export const CKMD_TDCCLKSEL_REFCLK_GPI: any = '3'

/**
Internal. Only to be used through TI provided API.*/
export const CKMD_TDCCLKSEL_REFCLK_CLKULL: any = '2'

/**
Internal. Only to be used through TI provided API.*/
export const CKMD_TDCCLKSEL_REFCLK_CLKSVT: any = '1'

/**
Internal. Only to be used through TI provided API.*/
export const CKMD_TDCCLKSEL_REFCLK_NONE: any = '0'


// -------- REGISTER ADCCLKSEL -------- //

/**
ADC clock selection*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const CKMD_ADCCLKSEL_RESERVED2: any = '30'
export const CKMD_ADCCLKSEL_RESERVED2_M: any = '30'
export const CKMD_ADCCLKSEL_RESERVED2_S: any = '30'
/**
Select ADC clock source


Change only while ADC is disabled.*/
export const CKMD_ADCCLKSEL_SRC: any = '2'
export const CKMD_ADCCLKSEL_SRC_M: any = '2'
export const CKMD_ADCCLKSEL_SRC_S: any = '2'
/**
48MHz HFXT*/
export const CKMD_ADCCLKSEL_SRC_HFXT: any = '1'

/**
48MHz CLKSVT*/
export const CKMD_ADCCLKSEL_SRC_CLKSVT: any = '0'


// -------- REGISTER LFCLKSTAT -------- //

/**
Low-frequency clock status*/
/**
Low frequency clock good


Note: This is only a coarse frequency check based on LFQUALCTL. The clock may not be accurate enough for timing purposes.*/
export const CKMD_LFCLKSTAT_GOOD: any = '1'
export const CKMD_LFCLKSTAT_GOOD_M: any = '1'
export const CKMD_LFCLKSTAT_GOOD_S: any = '1'
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const CKMD_LFCLKSTAT_RESERVED26: any = '5'
export const CKMD_LFCLKSTAT_RESERVED26_M: any = '5'
export const CKMD_LFCLKSTAT_RESERVED26_S: any = '5'
/**
LFINC filter is running and settled.*/
export const CKMD_LFCLKSTAT_FLTSETTLED: any = '1'
export const CKMD_LFCLKSTAT_FLTSETTLED_M: any = '1'
export const CKMD_LFCLKSTAT_FLTSETTLED_S: any = '1'
/**
Source of LFTICK.*/
export const CKMD_LFCLKSTAT_LFTICKSRC: any = '1'
export const CKMD_LFCLKSTAT_LFTICKSRC_M: any = '1'
export const CKMD_LFCLKSTAT_LFTICKSRC_S: any = '1'
/**
LFTICK generated from CLKULL (LFCLK not available)*/
export const CKMD_LFCLKSTAT_LFTICKSRC_FAKE: any = '1'

/**
LFTICK generated from the selected LFCLK*/
export const CKMD_LFCLKSTAT_LFTICKSRC_LFCLK: any = '0'

/**
Source of LFINC used by the RTC.


This value depends on LFINCOVR.OVERRIDE, LF clock availability, HF tracking loop status and the device state (ACTIVE/STANDBY).*/
export const CKMD_LFCLKSTAT_LFINCSRC: any = '2'
export const CKMD_LFCLKSTAT_LFINCSRC_M: any = '2'
export const CKMD_LFCLKSTAT_LFINCSRC_S: any = '2'
/**
Using FAKE LFTICKs with corresponding LFINC value.*/
export const CKMD_LFCLKSTAT_LFINCSRC_FAKE: any = '3'

/**
Using override value from LFINCOVR.LFINC*/
export const CKMD_LFCLKSTAT_LFINCSRC_OVERRIDE: any = '2'

/**
Using filtered / average value.

This value is updated by hardware and can be read and updated in LFINCCTL.INT.*/
export const CKMD_LFCLKSTAT_LFINCSRC_AVG: any = '1'

/**
Using measured value.

This value is updated by hardware and can be read from LFINC.*/
export const CKMD_LFCLKSTAT_LFINCSRC_MEAS: any = '0'

/**
Measured value of LFINC.


Given in microseconds with 16 fractional bits.
This value is calculated by Hardware.
It is the LFCLK period according to CLKULL cycles.*/
export const CKMD_LFCLKSTAT_LFINC: any = '22'
export const CKMD_LFCLKSTAT_LFINC_M: any = '22'
export const CKMD_LFCLKSTAT_LFINC_S: any = '22'

// -------- REGISTER HFXTSTAT -------- //

/**
HFXT status information*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const CKMD_HFXTSTAT_RESERVED31: any = '1'
export const CKMD_HFXTSTAT_RESERVED31_M: any = '1'
export const CKMD_HFXTSTAT_RESERVED31_S: any = '1'
/**
HFXT startup time


Can be used by software to plan starting HFXT ahead in time.
Measured whenever HFXT is enabled in CLKULL periods (24MHz), from HFXTCTL.EN until the clock is good for radio operation (amplitude compensation is settled).*/
export const CKMD_HFXTSTAT_STARTUPTIME: any = '15'
export const CKMD_HFXTSTAT_STARTUPTIME_M: any = '15'
export const CKMD_HFXTSTAT_STARTUPTIME_S: any = '15'
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const CKMD_HFXTSTAT_RESERVED2: any = '14'
export const CKMD_HFXTSTAT_RESERVED2_M: any = '14'
export const CKMD_HFXTSTAT_RESERVED2_S: any = '14'
/**
HFXT clock fault


Indicates a lower than expected HFXT frequency.
HFXT will not recover from this fault, disabling and re-enabling HFXT is required.*/
export const CKMD_HFXTSTAT_FAULT: any = '1'
export const CKMD_HFXTSTAT_FAULT_M: any = '1'
export const CKMD_HFXTSTAT_FAULT_S: any = '1'
/**
HFXT clock available.


The frequency is not necessarily good enough for radio operation.*/
export const CKMD_HFXTSTAT_GOOD: any = '1'
export const CKMD_HFXTSTAT_GOOD_M: any = '1'
export const CKMD_HFXTSTAT_GOOD_S: any = '1'

// -------- REGISTER AMPADCSTAT -------- //

/**
Internal. Only to be used through TI provided API.*/
/**
Internal. Only to be used through TI provided API.*/
export const CKMD_AMPADCSTAT_RESERVED25: any = '7'
export const CKMD_AMPADCSTAT_RESERVED25_M: any = '7'
export const CKMD_AMPADCSTAT_RESERVED25_S: any = '7'
/**
Internal. Only to be used through TI provided API.*/
export const CKMD_AMPADCSTAT_COMPOUT: any = '1'
export const CKMD_AMPADCSTAT_COMPOUT_M: any = '1'
export const CKMD_AMPADCSTAT_COMPOUT_S: any = '1'
/**
Internal. Only to be used through TI provided API.*/
export const CKMD_AMPADCSTAT_RESERVED23: any = '1'
export const CKMD_AMPADCSTAT_RESERVED23_M: any = '1'
export const CKMD_AMPADCSTAT_RESERVED23_S: any = '1'
/**
Internal. Only to be used through TI provided API.*/
export const CKMD_AMPADCSTAT_PEAKRAW: any = '7'
export const CKMD_AMPADCSTAT_PEAKRAW_M: any = '7'
export const CKMD_AMPADCSTAT_PEAKRAW_S: any = '7'
/**
Internal. Only to be used through TI provided API.*/
export const CKMD_AMPADCSTAT_PEAK: any = '8'
export const CKMD_AMPADCSTAT_PEAK_M: any = '8'
export const CKMD_AMPADCSTAT_PEAK_S: any = '8'
/**
Internal. Only to be used through TI provided API.*/
export const CKMD_AMPADCSTAT_RESERVED7: any = '1'
export const CKMD_AMPADCSTAT_RESERVED7_M: any = '1'
export const CKMD_AMPADCSTAT_RESERVED7_S: any = '1'
/**
Internal. Only to be used through TI provided API.*/
export const CKMD_AMPADCSTAT_BIAS: any = '7'
export const CKMD_AMPADCSTAT_BIAS_M: any = '7'
export const CKMD_AMPADCSTAT_BIAS_S: any = '7'

// -------- REGISTER TRACKSTAT -------- //

/**
HFOSC tracking loop status information*/
/**
Current HFOSC tracking error valid


This bit is one if the tracking loop is running and the error value is valid.*/
export const CKMD_TRACKSTAT_LOOPERRVLD: any = '1'
export const CKMD_TRACKSTAT_LOOPERRVLD_M: any = '1'
export const CKMD_TRACKSTAT_LOOPERRVLD_S: any = '1'
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const CKMD_TRACKSTAT_RESERVED30: any = '1'
export const CKMD_TRACKSTAT_RESERVED30_M: any = '1'
export const CKMD_TRACKSTAT_RESERVED30_S: any = '1'
/**
Current HFOSC tracking error*/
export const CKMD_TRACKSTAT_LOOPERR: any = '14'
export const CKMD_TRACKSTAT_LOOPERR_M: any = '14'
export const CKMD_TRACKSTAT_LOOPERR_S: any = '14'
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const CKMD_TRACKSTAT_RESERVED13: any = '3'
export const CKMD_TRACKSTAT_RESERVED13_M: any = '3'
export const CKMD_TRACKSTAT_RESERVED13_S: any = '3'
/**
Current HFOSC Fine-trim value


This field uses the internal fractional representation (sign, 4 integer bits, 8 fractional bits).
The actual trim value applied to the oscillator is delta-sigma modulated 5 bits non-signed
(inverted sign bit + integer bits).

*/
export const CKMD_TRACKSTAT_FINETRIM: any = '13'
export const CKMD_TRACKSTAT_FINETRIM_M: any = '13'
export const CKMD_TRACKSTAT_FINETRIM_S: any = '13'

// -------- REGISTER AMPSTAT -------- //

/**
HFXT Amplitude Compensation Status*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const CKMD_AMPSTAT_RESERVED29: any = '3'
export const CKMD_AMPSTAT_RESERVED29_M: any = '3'
export const CKMD_AMPSTAT_RESERVED29_S: any = '3'
/**
Current AMPCOMP FSM state.*/
export const CKMD_AMPSTAT_STATE: any = '4'
export const CKMD_AMPSTAT_STATE_M: any = '4'
export const CKMD_AMPSTAT_STATE_S: any = '4'
/**
Settled state*/
export const CKMD_AMPSTAT_STATE_SETTLED: any = '15'

/**
Amplitude up correction*/
export const CKMD_AMPSTAT_STATE_UPDATEUP: any = '14'

/**
TCXO settled state*/
export const CKMD_AMPSTAT_STATE_TXCOMODE: any = '12'

/**
First shutdown state*/
export const CKMD_AMPSTAT_STATE_SHUTDN0: any = '10'

/**
Post injection settle wait*/
export const CKMD_AMPSTAT_STATE_INJWAIT: any = '7'

/**
Amplitude down correction*/
export const CKMD_AMPSTAT_STATE_UPDATEDN: any = '6'

/**
Initial amplitude ramping with HFXTINIT values*/
export const CKMD_AMPSTAT_STATE_RAMP0: any = '5'

/**
Transition to HFXTTARG values*/
export const CKMD_AMPSTAT_STATE_RAMP1: any = '4'

/**
Injecting HFOSC for fast startup*/
export const CKMD_AMPSTAT_STATE_INJECT: any = '3'

/**
Second shutdown state*/
export const CKMD_AMPSTAT_STATE_SHUTDN1: any = '2'

/**
Starting LDO*/
export const CKMD_AMPSTAT_STATE_LDOSTART: any = '1'

/**
FSM in idle state*/
export const CKMD_AMPSTAT_STATE_IDLE: any = '0'

/**
Current IDAC control value.*/
export const CKMD_AMPSTAT_IDAC: any = '7'
export const CKMD_AMPSTAT_IDAC_M: any = '7'
export const CKMD_AMPSTAT_IDAC_S: any = '7'
/**
Current IREF control value.*/
export const CKMD_AMPSTAT_IREF: any = '4'
export const CKMD_AMPSTAT_IREF_M: any = '4'
export const CKMD_AMPSTAT_IREF_S: any = '4'
/**
Current Q2CAP control value.*/
export const CKMD_AMPSTAT_Q2CAP: any = '6'
export const CKMD_AMPSTAT_Q2CAP_M: any = '6'
export const CKMD_AMPSTAT_Q2CAP_S: any = '6'
/**
Current Q1CAP control value.*/
export const CKMD_AMPSTAT_Q1CAP: any = '6'
export const CKMD_AMPSTAT_Q1CAP_M: any = '6'
export const CKMD_AMPSTAT_Q1CAP_S: any = '6'
/**
HFXT control values match target values.


This applies to IREF, Q1CAP, Q2CAP values.*/
export const CKMD_AMPSTAT_CTRLATTARGET: any = '1'
export const CKMD_AMPSTAT_CTRLATTARGET_M: any = '1'
export const CKMD_AMPSTAT_CTRLATTARGET_S: any = '1'
/**
HFXT amplitude good*/
export const CKMD_AMPSTAT_AMPGOOD: any = '1'
export const CKMD_AMPSTAT_AMPGOOD_M: any = '1'
export const CKMD_AMPSTAT_AMPGOOD_S: any = '1'

// -------- REGISTER ATBCTL0 -------- //

/**
Internal. Only to be used through TI provided API.*/
/**
Internal. Only to be used through TI provided API.*/
export const CKMD_ATBCTL0_RESERVED19: any = '13'
export const CKMD_ATBCTL0_RESERVED19_M: any = '13'
export const CKMD_ATBCTL0_RESERVED19_S: any = '13'
/**
Internal. Only to be used through TI provided API.*/
export const CKMD_ATBCTL0_SEL: any = '19'
export const CKMD_ATBCTL0_SEL_M: any = '19'
export const CKMD_ATBCTL0_SEL_S: any = '19'
/**
Internal. Only to be used through TI provided API.*/
export const CKMD_ATBCTL0_SEL_LFXTTESTCLK: any = '458752'

/**
Internal. Only to be used through TI provided API.*/
export const CKMD_ATBCTL0_SEL_LFOSCTESTCLK: any = '327680'

/**
Internal. Only to be used through TI provided API.*/
export const CKMD_ATBCTL0_SEL_HFXTTESTCLK: any = '196608'

/**
Internal. Only to be used through TI provided API.*/
export const CKMD_ATBCTL0_SEL_HFOSCTESTCLK: any = '65536'

/**
Internal. Only to be used through TI provided API.*/
export const CKMD_ATBCTL0_SEL_LFMONVTEST: any = '4096'

/**
Internal. Only to be used through TI provided API.*/
export const CKMD_ATBCTL0_SEL_LFOSCVDDL: any = '2048'

/**
Internal. Only to be used through TI provided API.*/
export const CKMD_ATBCTL0_SEL_HFOSCIBIAS: any = '1024'

/**
Internal. Only to be used through TI provided API.*/
export const CKMD_ATBCTL0_SEL_HFOSCVDDL: any = '512'

/**
Internal. Only to be used through TI provided API.*/
export const CKMD_ATBCTL0_SEL_HFOSCVREF: any = '256'

/**
Internal. Only to be used through TI provided API.*/
export const CKMD_ATBCTL0_SEL_NABIASITEST: any = '128'

/**
Internal. Only to be used through TI provided API.*/
export const CKMD_ATBCTL0_SEL_ADCDACOUT: any = '64'

/**
Internal. Only to be used through TI provided API.*/
export const CKMD_ATBCTL0_SEL_ADCCOMPIN: any = '32'

/**
Internal. Only to be used through TI provided API.*/
export const CKMD_ATBCTL0_SEL_ADCCOMPOUT: any = '16'

/**
Internal. Only to be used through TI provided API.*/
export const CKMD_ATBCTL0_SEL_LFXTANA: any = '8'

/**
Internal. Only to be used through TI provided API.*/
export const CKMD_ATBCTL0_SEL_LDOITEST: any = '4'

/**
Internal. Only to be used through TI provided API.*/
export const CKMD_ATBCTL0_SEL_VDDCKM: any = '2'

/**
Internal. Only to be used through TI provided API.*/
export const CKMD_ATBCTL0_SEL_HFXTANA: any = '1'

/**
Internal. Only to be used through TI provided API.*/
export const CKMD_ATBCTL0_SEL_OFF: any = '0'


// -------- REGISTER ATBCTL1 -------- //

/**
Internal. Only to be used through TI provided API.*/
/**
Internal. Only to be used through TI provided API.*/
export const CKMD_ATBCTL1_RESERVED15: any = '17'
export const CKMD_ATBCTL1_RESERVED15_M: any = '17'
export const CKMD_ATBCTL1_RESERVED15_S: any = '17'
/**
Internal. Only to be used through TI provided API.*/
export const CKMD_ATBCTL1_LFOSC: any = '2'
export const CKMD_ATBCTL1_LFOSC_M: any = '2'
export const CKMD_ATBCTL1_LFOSC_S: any = '2'
/**
Internal. Only to be used through TI provided API.*/
export const CKMD_ATBCTL1_LFOSC_BOTH: any = '3'

/**
Internal. Only to be used through TI provided API.*/
export const CKMD_ATBCTL1_LFOSC_VDDLOCAL: any = '2'

/**
Internal. Only to be used through TI provided API.*/
export const CKMD_ATBCTL1_LFOSC_TESTCLK: any = '1'

/**
Internal. Only to be used through TI provided API.*/
export const CKMD_ATBCTL1_LFOSC_OFF: any = '0'

/**
Internal. Only to be used through TI provided API.*/
export const CKMD_ATBCTL1_NABIAS: any = '1'
export const CKMD_ATBCTL1_NABIAS_M: any = '1'
export const CKMD_ATBCTL1_NABIAS_S: any = '1'
/**
Internal. Only to be used through TI provided API.*/
export const CKMD_ATBCTL1_RESERVED11: any = '1'
export const CKMD_ATBCTL1_RESERVED11_M: any = '1'
export const CKMD_ATBCTL1_RESERVED11_S: any = '1'
/**
Internal. Only to be used through TI provided API.*/
export const CKMD_ATBCTL1_LFXT: any = '1'
export const CKMD_ATBCTL1_LFXT_M: any = '1'
export const CKMD_ATBCTL1_LFXT_S: any = '1'
/**
Internal. Only to be used through TI provided API.*/
export const CKMD_ATBCTL1_LFXT_TESTCLK: any = '1'

/**
Internal. Only to be used through TI provided API.*/
export const CKMD_ATBCTL1_LFXT_OFF: any = '0'

/**
Internal. Only to be used through TI provided API.*/
export const CKMD_ATBCTL1_LFMON: any = '2'
export const CKMD_ATBCTL1_LFMON_M: any = '2'
export const CKMD_ATBCTL1_LFMON_S: any = '2'
/**
Internal. Only to be used through TI provided API.*/
export const CKMD_ATBCTL1_LFMON_TEST2: any = '2'

/**
Internal. Only to be used through TI provided API.*/
export const CKMD_ATBCTL1_LFMON_TEST1: any = '1'

/**
Internal. Only to be used through TI provided API.*/
export const CKMD_ATBCTL1_LFMON_OFF: any = '0'

/**
Internal. Only to be used through TI provided API.*/
export const CKMD_ATBCTL1_HFXT: any = '1'
export const CKMD_ATBCTL1_HFXT_M: any = '1'
export const CKMD_ATBCTL1_HFXT_S: any = '1'
/**
Internal. Only to be used through TI provided API.*/
export const CKMD_ATBCTL1_RESERVED1: any = '6'
export const CKMD_ATBCTL1_RESERVED1_M: any = '6'
export const CKMD_ATBCTL1_RESERVED1_S: any = '6'
/**
Internal. Only to be used through TI provided API.*/
export const CKMD_ATBCTL1_HFOSC: any = '1'
export const CKMD_ATBCTL1_HFOSC_M: any = '1'
export const CKMD_ATBCTL1_HFOSC_S: any = '1'

// -------- REGISTER DTBCTL -------- //

/**
Digital test bus mux control*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const CKMD_DTBCTL_RESERVED23: any = '9'
export const CKMD_DTBCTL_RESERVED23_M: any = '9'
export const CKMD_DTBCTL_RESERVED23_S: any = '9'
/**
Internal. Only to be used through TI provided API.*/
export const CKMD_DTBCTL_DSEL2: any = '5'
export const CKMD_DTBCTL_DSEL2_M: any = '5'
export const CKMD_DTBCTL_DSEL2_S: any = '5'
/**
Internal. Only to be used through TI provided API.*/
export const CKMD_DTBCTL_DSEL1: any = '5'
export const CKMD_DTBCTL_DSEL1_M: any = '5'
export const CKMD_DTBCTL_DSEL1_S: any = '5'
/**
Internal. Only to be used through TI provided API.*/
export const CKMD_DTBCTL_DSEL0: any = '5'
export const CKMD_DTBCTL_DSEL0_M: any = '5'
export const CKMD_DTBCTL_DSEL0_S: any = '5'
/**
Select clock to output on DTB[0]*/
export const CKMD_DTBCTL_CLKSEL: any = '4'
export const CKMD_DTBCTL_CLKSEL_M: any = '4'
export const CKMD_DTBCTL_CLKSEL_S: any = '4'
/**
Select LFXT*/
export const CKMD_DTBCTL_CLKSEL_LFXT: any = '15'

/**
Select LFOSC*/
export const CKMD_DTBCTL_CLKSEL_LFOSC: any = '14'

/**
Select HFXT*/
export const CKMD_DTBCTL_CLKSEL_HFXT: any = '13'

/**
Select HFXT divided by 8*/
export const CKMD_DTBCTL_CLKSEL_HFXTBY8: any = '12'

/**
Select HFOSC after qualification*/
export const CKMD_DTBCTL_CLKSEL_HFOSC: any = '10'

/**
Select LFCLK (selected by LFCLKSEL.MAIN)*/
export const CKMD_DTBCTL_CLKSEL_LFCLK: any = '7'

/**
Select tracking loop reference clock*/
export const CKMD_DTBCTL_CLKSEL_TRACKREF: any = '4'

/**
Select CLKADC (48 MHz)*/
export const CKMD_DTBCTL_CLKSEL_CLKADC: any = '2'

/**
Select CLKSVT (48 MHz)*/
export const CKMD_DTBCTL_CLKSEL_CLKSVT: any = '1'

/**
Select CLKULL (24 MHz during ACTIVE, 32kHz during STANDBY)*/
export const CKMD_DTBCTL_CLKSEL_CLKULL: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const CKMD_DTBCTL_RESERVED1: any = '3'
export const CKMD_DTBCTL_RESERVED1_M: any = '3'
export const CKMD_DTBCTL_RESERVED1_S: any = '3'
/**
Enable DTB output*/
export const CKMD_DTBCTL_EN: any = '1'
export const CKMD_DTBCTL_EN_M: any = '1'
export const CKMD_DTBCTL_EN_S: any = '1'

// -------- REGISTER TRIM0 -------- //

/**
Internal. Only to be used through TI provided API.*/
/**
Internal. Only to be used through TI provided API.*/
export const CKMD_TRIM0_RESERVED9: any = '23'
export const CKMD_TRIM0_RESERVED9_M: any = '23'
export const CKMD_TRIM0_RESERVED9_S: any = '23'
/**
Internal. Only to be used through TI provided API.*/
export const CKMD_TRIM0_HFOSC_CAP: any = '4'
export const CKMD_TRIM0_HFOSC_CAP_M: any = '4'
export const CKMD_TRIM0_HFOSC_CAP_S: any = '4'
/**
Internal. Only to be used through TI provided API.*/
export const CKMD_TRIM0_HFOSC_COARSE: any = '5'
export const CKMD_TRIM0_HFOSC_COARSE_M: any = '5'
export const CKMD_TRIM0_HFOSC_COARSE_S: any = '5'

// -------- REGISTER TRIM1 -------- //

/**
Internal. Only to be used through TI provided API.*/
/**
Internal. Only to be used through TI provided API.*/
export const CKMD_TRIM1_HFXTSLICER: any = '2'
export const CKMD_TRIM1_HFXTSLICER_M: any = '2'
export const CKMD_TRIM1_HFXTSLICER_S: any = '2'
/**
Internal. Only to be used through TI provided API.*/
export const CKMD_TRIM1_PEAKIBIAS: any = '2'
export const CKMD_TRIM1_PEAKIBIAS_M: any = '2'
export const CKMD_TRIM1_PEAKIBIAS_S: any = '2'
/**
Internal. Only to be used through TI provided API.*/
export const CKMD_TRIM1_NABIAS_UDIGLDO: any = '1'
export const CKMD_TRIM1_NABIAS_UDIGLDO_M: any = '1'
export const CKMD_TRIM1_NABIAS_UDIGLDO_S: any = '1'
/**
Internal. Only to be used through TI provided API.*/
export const CKMD_TRIM1_LDOBW: any = '3'
export const CKMD_TRIM1_LDOBW_M: any = '3'
export const CKMD_TRIM1_LDOBW_S: any = '3'
/**
Internal. Only to be used through TI provided API.*/
export const CKMD_TRIM1_LDOFB: any = '4'
export const CKMD_TRIM1_LDOFB_M: any = '4'
export const CKMD_TRIM1_LDOFB_S: any = '4'
/**
Internal. Only to be used through TI provided API.*/
export const CKMD_TRIM1_LFDLY: any = '4'
export const CKMD_TRIM1_LFDLY_M: any = '4'
export const CKMD_TRIM1_LFDLY_S: any = '4'
/**
Internal. Only to be used through TI provided API.*/
export const CKMD_TRIM1_NABIAS_LFOSC: any = '1'
export const CKMD_TRIM1_NABIAS_LFOSC_M: any = '1'
export const CKMD_TRIM1_NABIAS_LFOSC_S: any = '1'
/**
Internal. Only to be used through TI provided API.*/
export const CKMD_TRIM1_NABIAS_RES: any = '7'
export const CKMD_TRIM1_NABIAS_RES_M: any = '7'
export const CKMD_TRIM1_NABIAS_RES_S: any = '7'
/**
Internal. Only to be used through TI provided API.*/
export const CKMD_TRIM1_LFOSC_CAP: any = '8'
export const CKMD_TRIM1_LFOSC_CAP_M: any = '8'
export const CKMD_TRIM1_LFOSC_CAP_S: any = '8'

// -------- REGISTER HFXTINIT -------- //

/**
Initial values for HFXT ramping*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const CKMD_HFXTINIT_RESERVED30: any = '2'
export const CKMD_HFXTINIT_RESERVED30_M: any = '2'
export const CKMD_HFXTINIT_RESERVED30_S: any = '2'
/**
Amplitude threshold during HFXT ramping*/
export const CKMD_HFXTINIT_AMPTHR: any = '7'
export const CKMD_HFXTINIT_AMPTHR_M: any = '7'
export const CKMD_HFXTINIT_AMPTHR_S: any = '7'
/**
Initial HFXT IDAC current*/
export const CKMD_HFXTINIT_IDAC: any = '7'
export const CKMD_HFXTINIT_IDAC_M: any = '7'
export const CKMD_HFXTINIT_IDAC_S: any = '7'
/**
Initial HFXT IREF current*/
export const CKMD_HFXTINIT_IREF: any = '4'
export const CKMD_HFXTINIT_IREF_M: any = '4'
export const CKMD_HFXTINIT_IREF_S: any = '4'
/**
Initial HFXT Q2 cap trim*/
export const CKMD_HFXTINIT_Q2CAP: any = '6'
export const CKMD_HFXTINIT_Q2CAP_M: any = '6'
export const CKMD_HFXTINIT_Q2CAP_S: any = '6'
/**
Initial HFXT Q1 cap trim*/
export const CKMD_HFXTINIT_Q1CAP: any = '6'
export const CKMD_HFXTINIT_Q1CAP_M: any = '6'
export const CKMD_HFXTINIT_Q1CAP_S: any = '6'

// -------- REGISTER HFXTTARG -------- //

/**
Target values for HFXT ramping*/
/**
ADC hysteresis used during IDAC updates.


Every AMPCFG1.INTERVAL, IDAC will be regulated
- up as long as ADC $lt; AMPTHR
- down as long as ADC $gt; AMPTHR+AMPHYST*/
export const CKMD_HFXTTARG_AMPHYST: any = '2'
export const CKMD_HFXTTARG_AMPHYST_M: any = '2'
export const CKMD_HFXTTARG_AMPHYST_S: any = '2'
/**
Minimum HFXT amplitude*/
export const CKMD_HFXTTARG_AMPTHR: any = '7'
export const CKMD_HFXTTARG_AMPTHR_M: any = '7'
export const CKMD_HFXTTARG_AMPTHR_S: any = '7'
/**
Minimum IDAC current*/
export const CKMD_HFXTTARG_IDAC: any = '7'
export const CKMD_HFXTTARG_IDAC_M: any = '7'
export const CKMD_HFXTTARG_IDAC_S: any = '7'
/**
Target HFXT IREF current*/
export const CKMD_HFXTTARG_IREF: any = '4'
export const CKMD_HFXTTARG_IREF_M: any = '4'
export const CKMD_HFXTTARG_IREF_S: any = '4'
/**
Target HFXT Q2 cap trim*/
export const CKMD_HFXTTARG_Q2CAP: any = '6'
export const CKMD_HFXTTARG_Q2CAP_M: any = '6'
export const CKMD_HFXTTARG_Q2CAP_S: any = '6'
/**
Target HFXT Q1 cap trim*/
export const CKMD_HFXTTARG_Q1CAP: any = '6'
export const CKMD_HFXTTARG_Q1CAP_M: any = '6'
export const CKMD_HFXTTARG_Q1CAP_S: any = '6'

// -------- REGISTER HFXTDYN -------- //

/**
Alternative target values for HFXT configuration


Software can change these values to dynamically transition the HFXT configuration while HFXT is running.
Set SEL to select the alternative set of target values.*/
/**
Select the dynamic configuration.


Amplitude ramping will always happen using the values in HFXTINIT, and HFXTTARG.
Afterwards, this bit can be used to select between HFXTTARG and HFXTDYN.
Hardware will ensure a smooth transition of analog control signals.*/
export const CKMD_HFXTDYN_SEL: any = '1'
export const CKMD_HFXTDYN_SEL_M: any = '1'
export const CKMD_HFXTDYN_SEL_S: any = '1'
/**
Select configuration in HFXTDYN.*/
export const CKMD_HFXTDYN_SEL_DYNAMIC: any = '1'

/**
Select configuration in HFXTTARG.*/
export const CKMD_HFXTDYN_SEL_TARGET: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const CKMD_HFXTDYN_RESERVED30: any = '1'
export const CKMD_HFXTDYN_RESERVED30_M: any = '1'
export const CKMD_HFXTDYN_RESERVED30_S: any = '1'
/**
Minimum HFXT amplitude*/
export const CKMD_HFXTDYN_AMPTHR: any = '7'
export const CKMD_HFXTDYN_AMPTHR_M: any = '7'
export const CKMD_HFXTDYN_AMPTHR_S: any = '7'
/**
Minimum IDAC current*/
export const CKMD_HFXTDYN_IDAC: any = '7'
export const CKMD_HFXTDYN_IDAC_M: any = '7'
export const CKMD_HFXTDYN_IDAC_S: any = '7'
/**
Target HFXT IREF current*/
export const CKMD_HFXTDYN_IREF: any = '4'
export const CKMD_HFXTDYN_IREF_M: any = '4'
export const CKMD_HFXTDYN_IREF_S: any = '4'
/**
Target HFXT Q2 cap trim*/
export const CKMD_HFXTDYN_Q2CAP: any = '6'
export const CKMD_HFXTDYN_Q2CAP_M: any = '6'
export const CKMD_HFXTDYN_Q2CAP_S: any = '6'
/**
Target HFXT Q1 cap trim*/
export const CKMD_HFXTDYN_Q1CAP: any = '6'
export const CKMD_HFXTDYN_Q1CAP_M: any = '6'
export const CKMD_HFXTDYN_Q1CAP_S: any = '6'

// -------- REGISTER AMPCFG0 -------- //

/**
Amplitude Compensation Configuration 0*/
/**
Q2CAP change delay.


Number of clock cycles to wait before changing Q2CAP by one step.
Clock frequency defined in FSMRATE.*/
export const CKMD_AMPCFG0_Q2DLY: any = '4'
export const CKMD_AMPCFG0_Q2DLY_M: any = '4'
export const CKMD_AMPCFG0_Q2DLY_S: any = '4'
/**
Q1CAP change delay.


Number of clock cycles to wait before changing Q1CAP by one step.
Clock frequency defined in FSMRATE.*/
export const CKMD_AMPCFG0_Q1DLY: any = '4'
export const CKMD_AMPCFG0_Q1DLY_M: any = '4'
export const CKMD_AMPCFG0_Q1DLY_S: any = '4'
/**
ADC and PEAKDET startup time.


Number of clock cycles to wait after enabling the PEAKDET and ADC before the first measurement.
Clock frequency defined in FSMRATE.*/
export const CKMD_AMPCFG0_ADCDLY: any = '4'
export const CKMD_AMPCFG0_ADCDLY_M: any = '4'
export const CKMD_AMPCFG0_ADCDLY_S: any = '4'
/**
LDO startup time.


Number of clock cycles to bypass the LDO resistors for faster startup.
Clock frequency defined in FSMRATE.*/
export const CKMD_AMPCFG0_LDOSTART: any = '5'
export const CKMD_AMPCFG0_LDOSTART_M: any = '5'
export const CKMD_AMPCFG0_LDOSTART_S: any = '5'
/**
Inject HFOSC for faster HFXT startup.


This value specifies the number of clock cycles to wait after injection is done.
The clock speed is defined in FSMRATE.*/
export const CKMD_AMPCFG0_INJWAIT: any = '5'
export const CKMD_AMPCFG0_INJWAIT_M: any = '5'
export const CKMD_AMPCFG0_INJWAIT_S: any = '5'
/**
Inject HFOSC for faster HFXT startup.


This value specifies the number of clock cycles the injection is enabled.
The clock speed is defined in FSMRATE.
Set to 0 to disable injection.*/
export const CKMD_AMPCFG0_INJTIME: any = '5'
export const CKMD_AMPCFG0_INJTIME_M: any = '5'
export const CKMD_AMPCFG0_INJTIME_S: any = '5'
/**
Update rate for the AMPCOMP update rate.

Also affects the clock rate for the Amplitude ADC.

The update rate is 6MHz / (FSMRATE+1).*/
export const CKMD_AMPCFG0_FSMRATE: any = '5'
export const CKMD_AMPCFG0_FSMRATE_M: any = '5'
export const CKMD_AMPCFG0_FSMRATE_S: any = '5'
/**
250 kHz*/
export const CKMD_AMPCFG0_FSMRATE__250K: any = '23'

/**
500 kHz*/
export const CKMD_AMPCFG0_FSMRATE__500K: any = '11'

/**
1 MHz*/
export const CKMD_AMPCFG0_FSMRATE__1M: any = '5'

/**
2 MHz*/
export const CKMD_AMPCFG0_FSMRATE__2M: any = '2'

/**
3 MHz*/
export const CKMD_AMPCFG0_FSMRATE__3M: any = '1'

/**
6 MHz*/
export const CKMD_AMPCFG0_FSMRATE__6M: any = '0'


// -------- REGISTER AMPCFG1 -------- //

/**
Amplitude Compensation Configuration 1*/
/**
IDAC change delay.


Time to wait before changing IDAC by one step.
This time needs to be long enough for the crystal to settle.
The number of clock cycles to wait is IDACDLY$lt;$lt;4 + 15.
Clock frequency defined in AMPCFG0.FSMRATE.*/
export const CKMD_AMPCFG1_IDACDLY: any = '4'
export const CKMD_AMPCFG1_IDACDLY_M: any = '4'
export const CKMD_AMPCFG1_IDACDLY_S: any = '4'
/**
IREF change delay.


Number of clock cycles to wait before changing IREF by one step.
Clock frequency defined in AMPCFG0.FSMRATE.*/
export const CKMD_AMPCFG1_IREFDLY: any = '4'
export const CKMD_AMPCFG1_IREFDLY_M: any = '4'
export const CKMD_AMPCFG1_IREFDLY_S: any = '4'
/**
Lifetime of the amplitude ADC bias value.

This value specifies the number of adjustment intervals,
until the ADC bias value has to be measured again.
Set to 0 to disable automatic bias measurements.*/
export const CKMD_AMPCFG1_BIASLT: any = '12'
export const CKMD_AMPCFG1_BIASLT_M: any = '12'
export const CKMD_AMPCFG1_BIASLT_S: any = '12'
/**
Interval for amplitude adjustments.

Set to 0 to disable periodic adjustments.

This value specifies the number of clock cycles between adjustments.
The clock speed is defined in AMPCFG0.FSMRATE.*/
export const CKMD_AMPCFG1_INTERVAL: any = '12'
export const CKMD_AMPCFG1_INTERVAL_M: any = '12'
export const CKMD_AMPCFG1_INTERVAL_S: any = '12'

// -------- REGISTER LOOPCFG -------- //

/**
Configuration Register for the Tracking Loop*/
/**
Initial value for the resistor fine trim*/
export const CKMD_LOOPCFG_FINETRIM_INIT: any = '6'
export const CKMD_LOOPCFG_FINETRIM_INIT_M: any = '6'
export const CKMD_LOOPCFG_FINETRIM_INIT_S: any = '6'
/**
Number of error-updates using BOOST values, before using KI/KP*/
export const CKMD_LOOPCFG_BOOST_TARGET: any = '5'
export const CKMD_LOOPCFG_BOOST_TARGET_M: any = '5'
export const CKMD_LOOPCFG_BOOST_TARGET_S: any = '5'
/**
Proportional loop coefficient during BOOST*/
export const CKMD_LOOPCFG_KP_BOOST: any = '3'
export const CKMD_LOOPCFG_KP_BOOST_M: any = '3'
export const CKMD_LOOPCFG_KP_BOOST_S: any = '3'
/**
Integral loop coefficient during BOOST*/
export const CKMD_LOOPCFG_KI_BOOST: any = '3'
export const CKMD_LOOPCFG_KI_BOOST_M: any = '3'
export const CKMD_LOOPCFG_KI_BOOST_S: any = '3'
/**
Number of updates before HFOSC is considered "settled"*/
export const CKMD_LOOPCFG_SETTLED_TARGET: any = '5'
export const CKMD_LOOPCFG_SETTLED_TARGET_M: any = '5'
export const CKMD_LOOPCFG_SETTLED_TARGET_S: any = '5'
/**
Out-of-range threshold*/
export const CKMD_LOOPCFG_OOR_LIMIT: any = '4'
export const CKMD_LOOPCFG_OOR_LIMIT_M: any = '4'
export const CKMD_LOOPCFG_OOR_LIMIT_S: any = '4'
/**
Proportional loop coefficient*/
export const CKMD_LOOPCFG_KP: any = '3'
export const CKMD_LOOPCFG_KP_M: any = '3'
export const CKMD_LOOPCFG_KP_S: any = '3'
/**
Integral loop coefficient*/
export const CKMD_LOOPCFG_KI: any = '3'
export const CKMD_LOOPCFG_KI_M: any = '3'
export const CKMD_LOOPCFG_KI_S: any = '3'

// -------- REGISTER TDCCTL -------- //

/**
Internal. Only to be used through TI provided API.*/
/**
Internal. Only to be used through TI provided API.*/
export const CKMD_TDCCTL_RESERVED2: any = '30'
export const CKMD_TDCCTL_RESERVED2_M: any = '30'
export const CKMD_TDCCTL_RESERVED2_S: any = '30'
/**
Internal. Only to be used through TI provided API.*/
export const CKMD_TDCCTL_CMD: any = '2'
export const CKMD_TDCCTL_CMD_M: any = '2'
export const CKMD_TDCCTL_CMD_S: any = '2'
/**
Internal. Only to be used through TI provided API.*/
export const CKMD_TDCCTL_CMD_ABORT: any = '3'

/**
Internal. Only to be used through TI provided API.*/
export const CKMD_TDCCTL_CMD_RUN: any = '2'

/**
Internal. Only to be used through TI provided API.*/
export const CKMD_TDCCTL_CMD_RUN_SYNC_START: any = '1'

/**
Internal. Only to be used through TI provided API.*/
export const CKMD_TDCCTL_CMD_CLR_RESULT: any = '0'


// -------- REGISTER TDCSTAT -------- //

/**
Internal. Only to be used through TI provided API.*/
/**
Internal. Only to be used through TI provided API.*/
export const CKMD_TDCSTAT_RESERVED10: any = '22'
export const CKMD_TDCSTAT_RESERVED10_M: any = '22'
export const CKMD_TDCSTAT_RESERVED10_S: any = '22'
/**
Internal. Only to be used through TI provided API.*/
export const CKMD_TDCSTAT_STOP_BF: any = '1'
export const CKMD_TDCSTAT_STOP_BF_M: any = '1'
export const CKMD_TDCSTAT_STOP_BF_S: any = '1'
/**
Internal. Only to be used through TI provided API.*/
export const CKMD_TDCSTAT_START_BF: any = '1'
export const CKMD_TDCSTAT_START_BF_M: any = '1'
export const CKMD_TDCSTAT_START_BF_S: any = '1'
/**
Internal. Only to be used through TI provided API.*/
export const CKMD_TDCSTAT_SAT: any = '1'
export const CKMD_TDCSTAT_SAT_M: any = '1'
export const CKMD_TDCSTAT_SAT_S: any = '1'
/**
Internal. Only to be used through TI provided API.*/
export const CKMD_TDCSTAT_DONE: any = '1'
export const CKMD_TDCSTAT_DONE_M: any = '1'
export const CKMD_TDCSTAT_DONE_S: any = '1'
/**
Internal. Only to be used through TI provided API.*/
export const CKMD_TDCSTAT_STATE: any = '6'
export const CKMD_TDCSTAT_STATE_M: any = '6'
export const CKMD_TDCSTAT_STATE_S: any = '6'
/**
Internal. Only to be used through TI provided API.*/
export const CKMD_TDCSTAT_STATE_FORCE_STOP: any = '46'

/**
Internal. Only to be used through TI provided API.*/
export const CKMD_TDCSTAT_STATE_START_FALL: any = '30'

/**
Internal. Only to be used through TI provided API.*/
export const CKMD_TDCSTAT_STATE_WAIT_CLR_CNT_DONE: any = '22'

/**
Internal. Only to be used through TI provided API.*/
export const CKMD_TDCSTAT_STATE_POR: any = '15'

/**
Internal. Only to be used through TI provided API.*/
export const CKMD_TDCSTAT_STATE_GET_RESULT: any = '14'

/**
Internal. Only to be used through TI provided API.*/
export const CKMD_TDCSTAT_STATE_WAIT_STOP_CNTDWN: any = '12'

/**
Internal. Only to be used through TI provided API.*/
export const CKMD_TDCSTAT_STATE_WAIT_STOP: any = '8'

/**
Internal. Only to be used through TI provided API.*/
export const CKMD_TDCSTAT_STATE_CLR_CNT: any = '7'

/**
Internal. Only to be used through TI provided API.*/
export const CKMD_TDCSTAT_STATE_IDLE: any = '6'

/**
Internal. Only to be used through TI provided API.*/
export const CKMD_TDCSTAT_STATE_WAIT_START_STOP_CNT_EN: any = '4'

/**
Internal. Only to be used through TI provided API.*/
export const CKMD_TDCSTAT_STATE_WAIT_START: any = '0'


// -------- REGISTER TDCRESULT -------- //

/**
Internal. Only to be used through TI provided API.*/
/**
Internal. Only to be used through TI provided API.*/
export const CKMD_TDCRESULT_VALUE: any = '32'
export const CKMD_TDCRESULT_VALUE_M: any = '32'
export const CKMD_TDCRESULT_VALUE_S: any = '32'

// -------- REGISTER TDCSATCFG -------- //

/**
Internal. Only to be used through TI provided API.*/
/**
Internal. Only to be used through TI provided API.*/
export const CKMD_TDCSATCFG_RESERVED5: any = '27'
export const CKMD_TDCSATCFG_RESERVED5_M: any = '27'
export const CKMD_TDCSATCFG_RESERVED5_S: any = '27'
/**
Internal. Only to be used through TI provided API.*/
export const CKMD_TDCSATCFG_LIMIT: any = '5'
export const CKMD_TDCSATCFG_LIMIT_M: any = '5'
export const CKMD_TDCSATCFG_LIMIT_S: any = '5'
/**
Internal. Only to be used through TI provided API.*/
export const CKMD_TDCSATCFG_LIMIT_R30: any = '21'

/**
Internal. Only to be used through TI provided API.*/
export const CKMD_TDCSATCFG_LIMIT_R29: any = '20'

/**
Internal. Only to be used through TI provided API.*/
export const CKMD_TDCSATCFG_LIMIT_R28: any = '19'

/**
Internal. Only to be used through TI provided API.*/
export const CKMD_TDCSATCFG_LIMIT_R27: any = '18'

/**
Internal. Only to be used through TI provided API.*/
export const CKMD_TDCSATCFG_LIMIT_R26: any = '17'

/**
Internal. Only to be used through TI provided API.*/
export const CKMD_TDCSATCFG_LIMIT_R25: any = '16'

/**
Internal. Only to be used through TI provided API.*/
export const CKMD_TDCSATCFG_LIMIT_R24: any = '15'

/**
Internal. Only to be used through TI provided API.*/
export const CKMD_TDCSATCFG_LIMIT_R23: any = '14'

/**
Internal. Only to be used through TI provided API.*/
export const CKMD_TDCSATCFG_LIMIT_R22: any = '13'

/**
Internal. Only to be used through TI provided API.*/
export const CKMD_TDCSATCFG_LIMIT_R21: any = '12'

/**
Internal. Only to be used through TI provided API.*/
export const CKMD_TDCSATCFG_LIMIT_R20: any = '11'

/**
Internal. Only to be used through TI provided API.*/
export const CKMD_TDCSATCFG_LIMIT_R19: any = '10'

/**
Internal. Only to be used through TI provided API.*/
export const CKMD_TDCSATCFG_LIMIT_R18: any = '9'

/**
Internal. Only to be used through TI provided API.*/
export const CKMD_TDCSATCFG_LIMIT_R17: any = '8'

/**
Internal. Only to be used through TI provided API.*/
export const CKMD_TDCSATCFG_LIMIT_R16: any = '7'

/**
Internal. Only to be used through TI provided API.*/
export const CKMD_TDCSATCFG_LIMIT_R15: any = '6'

/**
Internal. Only to be used through TI provided API.*/
export const CKMD_TDCSATCFG_LIMIT_R14: any = '5'

/**
Internal. Only to be used through TI provided API.*/
export const CKMD_TDCSATCFG_LIMIT_R13: any = '4'

/**
Internal. Only to be used through TI provided API.*/
export const CKMD_TDCSATCFG_LIMIT_R12: any = '3'

/**
Internal. Only to be used through TI provided API.*/
export const CKMD_TDCSATCFG_LIMIT_NONE: any = '0'


// -------- REGISTER TDCTRIGSRC -------- //

/**
Internal. Only to be used through TI provided API.*/
/**
Internal. Only to be used through TI provided API.*/
export const CKMD_TDCTRIGSRC_RESERVED16: any = '16'
export const CKMD_TDCTRIGSRC_RESERVED16_M: any = '16'
export const CKMD_TDCTRIGSRC_RESERVED16_S: any = '16'
/**
Internal. Only to be used through TI provided API.*/
export const CKMD_TDCTRIGSRC_STOP_POL: any = '1'
export const CKMD_TDCTRIGSRC_STOP_POL_M: any = '1'
export const CKMD_TDCTRIGSRC_STOP_POL_S: any = '1'
/**
Internal. Only to be used through TI provided API.*/
export const CKMD_TDCTRIGSRC_STOP_POL_LOW: any = '1'

/**
Internal. Only to be used through TI provided API.*/
export const CKMD_TDCTRIGSRC_STOP_POL_HIGH: any = '0'

/**
Internal. Only to be used through TI provided API.*/
export const CKMD_TDCTRIGSRC_RESERVED13: any = '2'
export const CKMD_TDCTRIGSRC_RESERVED13_M: any = '2'
export const CKMD_TDCTRIGSRC_RESERVED13_S: any = '2'
/**
Internal. Only to be used through TI provided API.*/
export const CKMD_TDCTRIGSRC_STOP_SRC: any = '5'
export const CKMD_TDCTRIGSRC_STOP_SRC_M: any = '5'
export const CKMD_TDCTRIGSRC_STOP_SRC_S: any = '5'
/**
Internal. Only to be used through TI provided API.*/
export const CKMD_TDCTRIGSRC_STOP_SRC_TDC_PRE: any = '31'

/**
Internal. Only to be used through TI provided API.*/
export const CKMD_TDCTRIGSRC_STOP_SRC_DTB15: any = '20'

/**
Internal. Only to be used through TI provided API.*/
export const CKMD_TDCTRIGSRC_STOP_SRC_DTB14: any = '19'

/**
Internal. Only to be used through TI provided API.*/
export const CKMD_TDCTRIGSRC_STOP_SRC_DTB13: any = '18'

/**
Internal. Only to be used through TI provided API.*/
export const CKMD_TDCTRIGSRC_STOP_SRC_DTB12: any = '17'

/**
Internal. Only to be used through TI provided API.*/
export const CKMD_TDCTRIGSRC_STOP_SRC_DTB11: any = '16'

/**
Internal. Only to be used through TI provided API.*/
export const CKMD_TDCTRIGSRC_STOP_SRC_DTB10: any = '15'

/**
Internal. Only to be used through TI provided API.*/
export const CKMD_TDCTRIGSRC_STOP_SRC_DTB9: any = '14'

/**
Internal. Only to be used through TI provided API.*/
export const CKMD_TDCTRIGSRC_STOP_SRC_DTB8: any = '13'

/**
Internal. Only to be used through TI provided API.*/
export const CKMD_TDCTRIGSRC_STOP_SRC_DTB7: any = '12'

/**
Internal. Only to be used through TI provided API.*/
export const CKMD_TDCTRIGSRC_STOP_SRC_DTB6: any = '11'

/**
Internal. Only to be used through TI provided API.*/
export const CKMD_TDCTRIGSRC_STOP_SRC_DTB5: any = '10'

/**
Internal. Only to be used through TI provided API.*/
export const CKMD_TDCTRIGSRC_STOP_SRC_DTB4: any = '9'

/**
Internal. Only to be used through TI provided API.*/
export const CKMD_TDCTRIGSRC_STOP_SRC_DTB3: any = '8'

/**
Internal. Only to be used through TI provided API.*/
export const CKMD_TDCTRIGSRC_STOP_SRC_DTB2: any = '7'

/**
Internal. Only to be used through TI provided API.*/
export const CKMD_TDCTRIGSRC_STOP_SRC_DTB1: any = '6'

/**
Internal. Only to be used through TI provided API.*/
export const CKMD_TDCTRIGSRC_STOP_SRC_DTB0: any = '5'

/**
Internal. Only to be used through TI provided API.*/
export const CKMD_TDCTRIGSRC_STOP_SRC_GPI: any = '4'

/**
Internal. Only to be used through TI provided API.*/
export const CKMD_TDCTRIGSRC_STOP_SRC_LFCLK_DLY: any = '3'

/**
Internal. Only to be used through TI provided API.*/
export const CKMD_TDCTRIGSRC_STOP_SRC_LFXT: any = '2'

/**
Internal. Only to be used through TI provided API.*/
export const CKMD_TDCTRIGSRC_STOP_SRC_LFOSC: any = '1'

/**
Internal. Only to be used through TI provided API.*/
export const CKMD_TDCTRIGSRC_STOP_SRC_LFTICK: any = '0'

/**
Internal. Only to be used through TI provided API.*/
export const CKMD_TDCTRIGSRC_START_POL: any = '1'
export const CKMD_TDCTRIGSRC_START_POL_M: any = '1'
export const CKMD_TDCTRIGSRC_START_POL_S: any = '1'
/**
Internal. Only to be used through TI provided API.*/
export const CKMD_TDCTRIGSRC_START_POL_LOW: any = '1'

/**
Internal. Only to be used through TI provided API.*/
export const CKMD_TDCTRIGSRC_START_POL_HIGH: any = '0'

/**
Internal. Only to be used through TI provided API.*/
export const CKMD_TDCTRIGSRC_RESERVED5: any = '2'
export const CKMD_TDCTRIGSRC_RESERVED5_M: any = '2'
export const CKMD_TDCTRIGSRC_RESERVED5_S: any = '2'
/**
Internal. Only to be used through TI provided API.*/
export const CKMD_TDCTRIGSRC_START_SRC: any = '5'
export const CKMD_TDCTRIGSRC_START_SRC_M: any = '5'
export const CKMD_TDCTRIGSRC_START_SRC_S: any = '5'
/**
Internal. Only to be used through TI provided API.*/
export const CKMD_TDCTRIGSRC_START_SRC_TDC_PRE: any = '31'

/**
Internal. Only to be used through TI provided API.*/
export const CKMD_TDCTRIGSRC_START_SRC_DTB15: any = '20'

/**
Internal. Only to be used through TI provided API.*/
export const CKMD_TDCTRIGSRC_START_SRC_DTB14: any = '19'

/**
Internal. Only to be used through TI provided API.*/
export const CKMD_TDCTRIGSRC_START_SRC_DTB13: any = '18'

/**
Internal. Only to be used through TI provided API.*/
export const CKMD_TDCTRIGSRC_START_SRC_DTB12: any = '17'

/**
Internal. Only to be used through TI provided API.*/
export const CKMD_TDCTRIGSRC_START_SRC_DTB11: any = '16'

/**
Internal. Only to be used through TI provided API.*/
export const CKMD_TDCTRIGSRC_START_SRC_DTB10: any = '15'

/**
Internal. Only to be used through TI provided API.*/
export const CKMD_TDCTRIGSRC_START_SRC_DTB9: any = '14'

/**
Internal. Only to be used through TI provided API.*/
export const CKMD_TDCTRIGSRC_START_SRC_DTB8: any = '13'

/**
Internal. Only to be used through TI provided API.*/
export const CKMD_TDCTRIGSRC_START_SRC_DTB7: any = '12'

/**
Internal. Only to be used through TI provided API.*/
export const CKMD_TDCTRIGSRC_START_SRC_DTB6: any = '11'

/**
Internal. Only to be used through TI provided API.*/
export const CKMD_TDCTRIGSRC_START_SRC_DTB5: any = '10'

/**
Internal. Only to be used through TI provided API.*/
export const CKMD_TDCTRIGSRC_START_SRC_DTB4: any = '9'

/**
Internal. Only to be used through TI provided API.*/
export const CKMD_TDCTRIGSRC_START_SRC_DTB3: any = '8'

/**
Internal. Only to be used through TI provided API.*/
export const CKMD_TDCTRIGSRC_START_SRC_DTB2: any = '7'

/**
Internal. Only to be used through TI provided API.*/
export const CKMD_TDCTRIGSRC_START_SRC_DTB1: any = '6'

/**
Internal. Only to be used through TI provided API.*/
export const CKMD_TDCTRIGSRC_START_SRC_DTB0: any = '5'

/**
Internal. Only to be used through TI provided API.*/
export const CKMD_TDCTRIGSRC_START_SRC_GPI: any = '4'

/**
Internal. Only to be used through TI provided API.*/
export const CKMD_TDCTRIGSRC_START_SRC_LFCLK_DLY: any = '3'

/**
Internal. Only to be used through TI provided API.*/
export const CKMD_TDCTRIGSRC_START_SRC_LFXT: any = '2'

/**
Internal. Only to be used through TI provided API.*/
export const CKMD_TDCTRIGSRC_START_SRC_LFOSC: any = '1'

/**
Internal. Only to be used through TI provided API.*/
export const CKMD_TDCTRIGSRC_START_SRC_LFTICK: any = '0'


// -------- REGISTER TDCTRIGCNT -------- //

/**
Internal. Only to be used through TI provided API.*/
/**
Internal. Only to be used through TI provided API.*/
export const CKMD_TDCTRIGCNT_RESERVED16: any = '16'
export const CKMD_TDCTRIGCNT_RESERVED16_M: any = '16'
export const CKMD_TDCTRIGCNT_RESERVED16_S: any = '16'
/**
Internal. Only to be used through TI provided API.*/
export const CKMD_TDCTRIGCNT_CNT: any = '16'
export const CKMD_TDCTRIGCNT_CNT_M: any = '16'
export const CKMD_TDCTRIGCNT_CNT_S: any = '16'

// -------- REGISTER TDCTRIGCNTLOAD -------- //

/**
Internal. Only to be used through TI provided API.*/
/**
Internal. Only to be used through TI provided API.*/
export const CKMD_TDCTRIGCNTLOAD_RESERVED16: any = '16'
export const CKMD_TDCTRIGCNTLOAD_RESERVED16_M: any = '16'
export const CKMD_TDCTRIGCNTLOAD_RESERVED16_S: any = '16'
/**
Internal. Only to be used through TI provided API.*/
export const CKMD_TDCTRIGCNTLOAD_CNT: any = '16'
export const CKMD_TDCTRIGCNTLOAD_CNT_M: any = '16'
export const CKMD_TDCTRIGCNTLOAD_CNT_S: any = '16'

// -------- REGISTER TDCTRIGCNTCFG -------- //

/**
Internal. Only to be used through TI provided API.*/
/**
Internal. Only to be used through TI provided API.*/
export const CKMD_TDCTRIGCNTCFG_RESERVED1: any = '31'
export const CKMD_TDCTRIGCNTCFG_RESERVED1_M: any = '31'
export const CKMD_TDCTRIGCNTCFG_RESERVED1_S: any = '31'
/**
Internal. Only to be used through TI provided API.*/
export const CKMD_TDCTRIGCNTCFG_EN: any = '1'
export const CKMD_TDCTRIGCNTCFG_EN_M: any = '1'
export const CKMD_TDCTRIGCNTCFG_EN_S: any = '1'

// -------- REGISTER TDCPRECTL -------- //

/**
Internal. Only to be used through TI provided API.*/
/**
Internal. Only to be used through TI provided API.*/
export const CKMD_TDCPRECTL_RESERVED8: any = '24'
export const CKMD_TDCPRECTL_RESERVED8_M: any = '24'
export const CKMD_TDCPRECTL_RESERVED8_S: any = '24'
/**
Internal. Only to be used through TI provided API.*/
export const CKMD_TDCPRECTL_RESET_N: any = '1'
export const CKMD_TDCPRECTL_RESET_N_M: any = '1'
export const CKMD_TDCPRECTL_RESET_N_S: any = '1'
/**
Internal. Only to be used through TI provided API.*/
export const CKMD_TDCPRECTL_RATIO: any = '1'
export const CKMD_TDCPRECTL_RATIO_M: any = '1'
export const CKMD_TDCPRECTL_RATIO_S: any = '1'
/**
Internal. Only to be used through TI provided API.*/
export const CKMD_TDCPRECTL_RATIO_DIV64: any = '1'

/**
Internal. Only to be used through TI provided API.*/
export const CKMD_TDCPRECTL_RATIO_DIV16: any = '0'

/**
Internal. Only to be used through TI provided API.*/
export const CKMD_TDCPRECTL_RESERVED5: any = '1'
export const CKMD_TDCPRECTL_RESERVED5_M: any = '1'
export const CKMD_TDCPRECTL_RESERVED5_S: any = '1'
/**
Internal. Only to be used through TI provided API.*/
export const CKMD_TDCPRECTL_SRC: any = '5'
export const CKMD_TDCPRECTL_SRC_M: any = '5'
export const CKMD_TDCPRECTL_SRC_S: any = '5'
/**
Internal. Only to be used through TI provided API.*/
export const CKMD_TDCPRECTL_SRC_HFXT: any = '22'

/**
Internal. Only to be used through TI provided API.*/
export const CKMD_TDCPRECTL_SRC_HFOSC: any = '21'

/**
Internal. Only to be used through TI provided API.*/
export const CKMD_TDCPRECTL_SRC_DTB15: any = '20'

/**
Internal. Only to be used through TI provided API.*/
export const CKMD_TDCPRECTL_SRC_DTB14: any = '19'

/**
Internal. Only to be used through TI provided API.*/
export const CKMD_TDCPRECTL_SRC_DTB13: any = '18'

/**
Internal. Only to be used through TI provided API.*/
export const CKMD_TDCPRECTL_SRC_DTB12: any = '17'

/**
Internal. Only to be used through TI provided API.*/
export const CKMD_TDCPRECTL_SRC_DTB11: any = '16'

/**
Internal. Only to be used through TI provided API.*/
export const CKMD_TDCPRECTL_SRC_DTB10: any = '15'

/**
Internal. Only to be used through TI provided API.*/
export const CKMD_TDCPRECTL_SRC_DTB9: any = '14'

/**
Internal. Only to be used through TI provided API.*/
export const CKMD_TDCPRECTL_SRC_DTB8: any = '13'

/**
Internal. Only to be used through TI provided API.*/
export const CKMD_TDCPRECTL_SRC_DTB7: any = '12'

/**
Internal. Only to be used through TI provided API.*/
export const CKMD_TDCPRECTL_SRC_DTB6: any = '11'

/**
Internal. Only to be used through TI provided API.*/
export const CKMD_TDCPRECTL_SRC_DTB5: any = '10'

/**
Internal. Only to be used through TI provided API.*/
export const CKMD_TDCPRECTL_SRC_DTB4: any = '9'

/**
Internal. Only to be used through TI provided API.*/
export const CKMD_TDCPRECTL_SRC_DTB3: any = '8'

/**
Internal. Only to be used through TI provided API.*/
export const CKMD_TDCPRECTL_SRC_DTB2: any = '7'

/**
Internal. Only to be used through TI provided API.*/
export const CKMD_TDCPRECTL_SRC_DTB1: any = '6'

/**
Internal. Only to be used through TI provided API.*/
export const CKMD_TDCPRECTL_SRC_DTB0: any = '5'

/**
Internal. Only to be used through TI provided API.*/
export const CKMD_TDCPRECTL_SRC_GPI: any = '4'

/**
Internal. Only to be used through TI provided API.*/
export const CKMD_TDCPRECTL_SRC_LFCLK_DLY: any = '3'

/**
Internal. Only to be used through TI provided API.*/
export const CKMD_TDCPRECTL_SRC_LFXT: any = '2'

/**
Internal. Only to be used through TI provided API.*/
export const CKMD_TDCPRECTL_SRC_LFOSC: any = '1'

/**
Internal. Only to be used through TI provided API.*/
export const CKMD_TDCPRECTL_SRC_LFTICK: any = '0'


// -------- REGISTER TDCPRECNTR -------- //

/**
Internal. Only to be used through TI provided API.*/
/**
Internal. Only to be used through TI provided API.*/
export const CKMD_TDCPRECNTR_RESERVED17: any = '15'
export const CKMD_TDCPRECNTR_RESERVED17_M: any = '15'
export const CKMD_TDCPRECNTR_RESERVED17_S: any = '15'
/**
Internal. Only to be used through TI provided API.*/
export const CKMD_TDCPRECNTR_CAPT: any = '1'
export const CKMD_TDCPRECNTR_CAPT_M: any = '1'
export const CKMD_TDCPRECNTR_CAPT_S: any = '1'
/**
Internal. Only to be used through TI provided API.*/
export const CKMD_TDCPRECNTR_CNT: any = '16'
export const CKMD_TDCPRECNTR_CNT_M: any = '16'
export const CKMD_TDCPRECNTR_CNT_S: any = '16'

// -------- REGISTER WDTCNT -------- //

/**
WDT counter value register*/
/**
Counter value.


A write to this field immediately starts (or restarts) the counter. It will count down from the written value.
If the counter reaches 0, a reset will be generated.
A write value of 0 immediately generates a reset.

This field is only writable if not locked. See WDTLOCK register.
Writing this field will automatically activate the lock.

A read returns the current value of the counter.*/
export const CKMD_WDTCNT_VAL: any = '32'
export const CKMD_WDTCNT_VAL_M: any = '32'
export const CKMD_WDTCNT_VAL_S: any = '32'

// -------- REGISTER WDTTEST -------- //

/**
WDT test mode register*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const CKMD_WDTTEST_RESERVED1: any = '31'
export const CKMD_WDTTEST_RESERVED1_M: any = '31'
export const CKMD_WDTTEST_RESERVED1_S: any = '31'
/**
WDT stall enable


This field is only writable if not locked. See WDTLOCK register.*/
export const CKMD_WDTTEST_STALLEN: any = '1'
export const CKMD_WDTTEST_STALLEN_M: any = '1'
export const CKMD_WDTTEST_STALLEN_S: any = '1'
/**
ENABLE


WDT stops counting while the CPU is stopped by a debugger.*/
export const CKMD_WDTTEST_STALLEN_EN: any = '1'

/**
DISABLE


WDT continues counting while the CPU is stopped by a debugger.*/
export const CKMD_WDTTEST_STALLEN_DIS: any = '0'


// -------- REGISTER WDTLOCK -------- //

/**
WDT lock register*/
/**
A write with value 0x1ACCE551 unlocks the watchdog registers for write access.

A write with any other value locks the watchdog registers for write access.
Writing the WDTCNT register will also lock the watchdog registers.

A read of this field returns the state of the lock (0=unlocked, 1=locked).*/
export const CKMD_WDTLOCK_STAT: any = '32'
export const CKMD_WDTLOCK_STAT_M: any = '32'
export const CKMD_WDTLOCK_STAT_S: any = '32'

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
export const CLKCTL_DESC_MODID_M: any = '16'
export const CLKCTL_DESC_MODID_S: any = '16'
/**
Standard IP MMR block offset. Standard IP MMRs are the set of from aggregated IRQ registers till DTB.


0: Standard IP MMRs do not exist
0x1-0xF: Standard IP MMRs begin at offset of (64*STDIPOFF from the base IP address)*/
export const CLKCTL_DESC_STDIPOFF: any = '4'
export const CLKCTL_DESC_STDIPOFF_M: any = '4'
export const CLKCTL_DESC_STDIPOFF_S: any = '4'
/**
IP Instance ID number. If multiple instances of IP exist in the device, this field can identify the instance number (0-15).*/
export const CLKCTL_DESC_INSTIDX: any = '4'
export const CLKCTL_DESC_INSTIDX_M: any = '4'
export const CLKCTL_DESC_INSTIDX_S: any = '4'
/**
Major revision of IP 0-15*/
export const CLKCTL_DESC_MAJREV: any = '4'
export const CLKCTL_DESC_MAJREV_M: any = '4'
export const CLKCTL_DESC_MAJREV_S: any = '4'
/**
Minor revision of IP 0-15.*/
export const CLKCTL_DESC_MINREV: any = '4'
export const CLKCTL_DESC_MINREV_M: any = '4'
export const CLKCTL_DESC_MINREV_S: any = '4'

// -------- REGISTER DESCEX0 -------- //

/**
Extended Description Register 0. 

This register shows SVT IP availability, HW features and memory size configuration.*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const CLKCTL_DESCEX0_RESERVED31: any = '1'
export const CLKCTL_DESCEX0_RESERVED31_M: any = '1'
export const CLKCTL_DESCEX0_RESERVED31_S: any = '1'
/**
IP status on device*/
export const CLKCTL_DESCEX0_LGPT3: any = '1'
export const CLKCTL_DESCEX0_LGPT3_M: any = '1'
export const CLKCTL_DESCEX0_LGPT3_S: any = '1'
/**
IP is available*/
export const CLKCTL_DESCEX0_LGPT3_IP_AVAIL: any = '1'

/**
IP is unavailable*/
export const CLKCTL_DESCEX0_LGPT3_IP_UNAVAIL: any = '0'

/**
IP status on device*/
export const CLKCTL_DESCEX0_LGPT2: any = '1'
export const CLKCTL_DESCEX0_LGPT2_M: any = '1'
export const CLKCTL_DESCEX0_LGPT2_S: any = '1'
/**
IP is available*/
export const CLKCTL_DESCEX0_LGPT2_IP_AVAIL: any = '1'

/**
IP is unavailable*/
export const CLKCTL_DESCEX0_LGPT2_IP_UNAVAIL: any = '0'

/**
IP status on device*/
export const CLKCTL_DESCEX0_LGPT1: any = '1'
export const CLKCTL_DESCEX0_LGPT1_M: any = '1'
export const CLKCTL_DESCEX0_LGPT1_S: any = '1'
/**
IP is available*/
export const CLKCTL_DESCEX0_LGPT1_IP_AVAIL: any = '1'

/**
IP is unavailable*/
export const CLKCTL_DESCEX0_LGPT1_IP_UNAVAIL: any = '0'

/**
IP status on device*/
export const CLKCTL_DESCEX0_LGPT0: any = '1'
export const CLKCTL_DESCEX0_LGPT0_M: any = '1'
export const CLKCTL_DESCEX0_LGPT0_S: any = '1'
/**
IP is available*/
export const CLKCTL_DESCEX0_LGPT0_IP_AVAIL: any = '1'

/**
IP is unavailable*/
export const CLKCTL_DESCEX0_LGPT0_IP_UNAVAIL: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const CLKCTL_DESCEX0_RESERVED18: any = '9'
export const CLKCTL_DESCEX0_RESERVED18_M: any = '9'
export const CLKCTL_DESCEX0_RESERVED18_S: any = '9'
/**
IP status on device*/
export const CLKCTL_DESCEX0_DMA: any = '1'
export const CLKCTL_DESCEX0_DMA_M: any = '1'
export const CLKCTL_DESCEX0_DMA_S: any = '1'
/**
IP is available*/
export const CLKCTL_DESCEX0_DMA_IP_AVAIL: any = '1'

/**
IP is unavailable*/
export const CLKCTL_DESCEX0_DMA_IP_UNAVAIL: any = '0'

/**
IP status on device*/
export const CLKCTL_DESCEX0_LAES: any = '1'
export const CLKCTL_DESCEX0_LAES_M: any = '1'
export const CLKCTL_DESCEX0_LAES_S: any = '1'
/**
IP is available*/
export const CLKCTL_DESCEX0_LAES_IP_AVAIL: any = '1'

/**
IP is unavailable*/
export const CLKCTL_DESCEX0_LAES_IP_UNAVAIL: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const CLKCTL_DESCEX0_RESERVED15: any = '1'
export const CLKCTL_DESCEX0_RESERVED15_M: any = '1'
export const CLKCTL_DESCEX0_RESERVED15_S: any = '1'
/**
IP status on device*/
export const CLKCTL_DESCEX0_ADC0: any = '1'
export const CLKCTL_DESCEX0_ADC0_M: any = '1'
export const CLKCTL_DESCEX0_ADC0_S: any = '1'
/**
IP is available*/
export const CLKCTL_DESCEX0_ADC0_IP_AVAIL: any = '1'

/**
IP is unavailable*/
export const CLKCTL_DESCEX0_ADC0_IP_UNAVAIL: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const CLKCTL_DESCEX0_RESERVED11: any = '3'
export const CLKCTL_DESCEX0_RESERVED11_M: any = '3'
export const CLKCTL_DESCEX0_RESERVED11_S: any = '3'
/**
IP status on device*/
export const CLKCTL_DESCEX0_SPI0: any = '1'
export const CLKCTL_DESCEX0_SPI0_M: any = '1'
export const CLKCTL_DESCEX0_SPI0_S: any = '1'
/**
IP is available*/
export const CLKCTL_DESCEX0_SPI0_IP_AVAIL: any = '1'

/**
IP is unavailable*/
export const CLKCTL_DESCEX0_SPI0_IP_UNAVAIL: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const CLKCTL_DESCEX0_RESERVED7: any = '3'
export const CLKCTL_DESCEX0_RESERVED7_M: any = '3'
export const CLKCTL_DESCEX0_RESERVED7_S: any = '3'
/**
IP status on device*/
export const CLKCTL_DESCEX0_I2C0: any = '1'
export const CLKCTL_DESCEX0_I2C0_M: any = '1'
export const CLKCTL_DESCEX0_I2C0_S: any = '1'
/**
IP is available*/
export const CLKCTL_DESCEX0_I2C0_IP_AVAIL: any = '1'

/**
IP is unavailable*/
export const CLKCTL_DESCEX0_I2C0_IP_UNAVAIL: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const CLKCTL_DESCEX0_RESERVED3: any = '3'
export const CLKCTL_DESCEX0_RESERVED3_M: any = '3'
export const CLKCTL_DESCEX0_RESERVED3_S: any = '3'
/**
IP status on device*/
export const CLKCTL_DESCEX0_UART0: any = '1'
export const CLKCTL_DESCEX0_UART0_M: any = '1'
export const CLKCTL_DESCEX0_UART0_S: any = '1'
/**
IP is available*/
export const CLKCTL_DESCEX0_UART0_IP_AVAIL: any = '1'

/**
IP is unavailable*/
export const CLKCTL_DESCEX0_UART0_IP_UNAVAIL: any = '0'

/**
IP status on device*/
export const CLKCTL_DESCEX0_LRFD: any = '1'
export const CLKCTL_DESCEX0_LRFD_M: any = '1'
export const CLKCTL_DESCEX0_LRFD_S: any = '1'
/**
IP is available*/
export const CLKCTL_DESCEX0_LRFD_IP_AVAIL: any = '1'

/**
IP is unavailable*/
export const CLKCTL_DESCEX0_LRFD_IP_UNAVAIL: any = '0'

/**
IP status on device*/
export const CLKCTL_DESCEX0_GPIO: any = '1'
export const CLKCTL_DESCEX0_GPIO_M: any = '1'
export const CLKCTL_DESCEX0_GPIO_S: any = '1'
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
export const CLKCTL_DESCEX1_FLASHSZ_M: any = '2'
export const CLKCTL_DESCEX1_FLASHSZ_S: any = '2'
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
export const CLKCTL_DESCEX1_SRAMSZ_M: any = '2'
export const CLKCTL_DESCEX1_SRAMSZ_S: any = '2'
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
export const CLKCTL_DESCEX1_RESERVED16_M: any = '12'
export const CLKCTL_DESCEX1_RESERVED16_S: any = '12'
/**
System radio feature availability*/
export const CLKCTL_DESCEX1_ROPT: any = '8'
export const CLKCTL_DESCEX1_ROPT_M: any = '8'
export const CLKCTL_DESCEX1_ROPT_S: any = '8'
/**
All features available*/
export const CLKCTL_DESCEX1_ROPT_MAX: any = '255'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const CLKCTL_DESCEX1_RESERVED0: any = '8'
export const CLKCTL_DESCEX1_RESERVED0_M: any = '8'
export const CLKCTL_DESCEX1_RESERVED0_S: any = '8'

// -------- REGISTER CLKCFG0 -------- //

/**
Clock Configuration Register 0.

This register shows the IP clock configuration for the system.
The configuration is updated through CLKENSET0 and CLKENCLR0.*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const CLKCTL_CLKCFG0_RESERVED31: any = '1'
export const CLKCTL_CLKCFG0_RESERVED31_M: any = '1'
export const CLKCTL_CLKCFG0_RESERVED31_S: any = '1'
/**
IP clock configuration*/
export const CLKCTL_CLKCFG0_LGPT3: any = '1'
export const CLKCTL_CLKCFG0_LGPT3_M: any = '1'
export const CLKCTL_CLKCFG0_LGPT3_S: any = '1'
/**
Clock is enabled*/
export const CLKCTL_CLKCFG0_LGPT3_CLK_EN: any = '1'

/**
Clock is disabled*/
export const CLKCTL_CLKCFG0_LGPT3_CLK_DIS: any = '0'

/**
IP clock configuration*/
export const CLKCTL_CLKCFG0_LGPT2: any = '1'
export const CLKCTL_CLKCFG0_LGPT2_M: any = '1'
export const CLKCTL_CLKCFG0_LGPT2_S: any = '1'
/**
Clock is enabled*/
export const CLKCTL_CLKCFG0_LGPT2_CLK_EN: any = '1'

/**
Clock is disabled*/
export const CLKCTL_CLKCFG0_LGPT2_CLK_DIS: any = '0'

/**
IP clock configuration*/
export const CLKCTL_CLKCFG0_LGPT1: any = '1'
export const CLKCTL_CLKCFG0_LGPT1_M: any = '1'
export const CLKCTL_CLKCFG0_LGPT1_S: any = '1'
/**
Clock is enabled*/
export const CLKCTL_CLKCFG0_LGPT1_CLK_EN: any = '1'

/**
Clock is disabled*/
export const CLKCTL_CLKCFG0_LGPT1_CLK_DIS: any = '0'

/**
IP clock configuration*/
export const CLKCTL_CLKCFG0_LGPT0: any = '1'
export const CLKCTL_CLKCFG0_LGPT0_M: any = '1'
export const CLKCTL_CLKCFG0_LGPT0_S: any = '1'
/**
Clock is enabled*/
export const CLKCTL_CLKCFG0_LGPT0_CLK_EN: any = '1'

/**
Clock is disabled*/
export const CLKCTL_CLKCFG0_LGPT0_CLK_DIS: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const CLKCTL_CLKCFG0_RESERVED18: any = '9'
export const CLKCTL_CLKCFG0_RESERVED18_M: any = '9'
export const CLKCTL_CLKCFG0_RESERVED18_S: any = '9'
/**
IP clock configuration*/
export const CLKCTL_CLKCFG0_DMA: any = '1'
export const CLKCTL_CLKCFG0_DMA_M: any = '1'
export const CLKCTL_CLKCFG0_DMA_S: any = '1'
/**
Clock is enabled*/
export const CLKCTL_CLKCFG0_DMA_CLK_EN: any = '1'

/**
Clock is disabled*/
export const CLKCTL_CLKCFG0_DMA_CLK_DIS: any = '0'

/**
IP clock configuration*/
export const CLKCTL_CLKCFG0_LAES: any = '1'
export const CLKCTL_CLKCFG0_LAES_M: any = '1'
export const CLKCTL_CLKCFG0_LAES_S: any = '1'
/**
Clock is enabled*/
export const CLKCTL_CLKCFG0_LAES_CLK_EN: any = '1'

/**
Clock is disabled*/
export const CLKCTL_CLKCFG0_LAES_CLK_DIS: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const CLKCTL_CLKCFG0_RESERVED15: any = '1'
export const CLKCTL_CLKCFG0_RESERVED15_M: any = '1'
export const CLKCTL_CLKCFG0_RESERVED15_S: any = '1'
/**
IP clock configuration*/
export const CLKCTL_CLKCFG0_ADC0: any = '1'
export const CLKCTL_CLKCFG0_ADC0_M: any = '1'
export const CLKCTL_CLKCFG0_ADC0_S: any = '1'
/**
Clock is enabled*/
export const CLKCTL_CLKCFG0_ADC0_CLK_EN: any = '1'

/**
Clock is disabled*/
export const CLKCTL_CLKCFG0_ADC0_CLK_DIS: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const CLKCTL_CLKCFG0_RESERVED11: any = '3'
export const CLKCTL_CLKCFG0_RESERVED11_M: any = '3'
export const CLKCTL_CLKCFG0_RESERVED11_S: any = '3'
/**
IP clock configuration*/
export const CLKCTL_CLKCFG0_SPI0: any = '1'
export const CLKCTL_CLKCFG0_SPI0_M: any = '1'
export const CLKCTL_CLKCFG0_SPI0_S: any = '1'
/**
Clock is enabled*/
export const CLKCTL_CLKCFG0_SPI0_CLK_EN: any = '1'

/**
Clock is disabled*/
export const CLKCTL_CLKCFG0_SPI0_CLK_DIS: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const CLKCTL_CLKCFG0_RESERVED7: any = '3'
export const CLKCTL_CLKCFG0_RESERVED7_M: any = '3'
export const CLKCTL_CLKCFG0_RESERVED7_S: any = '3'
/**
IP clock configuration*/
export const CLKCTL_CLKCFG0_I2C0: any = '1'
export const CLKCTL_CLKCFG0_I2C0_M: any = '1'
export const CLKCTL_CLKCFG0_I2C0_S: any = '1'
/**
Clock is enabled*/
export const CLKCTL_CLKCFG0_I2C0_CLK_EN: any = '1'

/**
Clock is disabled*/
export const CLKCTL_CLKCFG0_I2C0_CLK_DIS: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const CLKCTL_CLKCFG0_RESERVED3: any = '3'
export const CLKCTL_CLKCFG0_RESERVED3_M: any = '3'
export const CLKCTL_CLKCFG0_RESERVED3_S: any = '3'
/**
IP clock configuration*/
export const CLKCTL_CLKCFG0_UART0: any = '1'
export const CLKCTL_CLKCFG0_UART0_M: any = '1'
export const CLKCTL_CLKCFG0_UART0_S: any = '1'
/**
Clock is enabled*/
export const CLKCTL_CLKCFG0_UART0_CLK_EN: any = '1'

/**
Clock is disabled*/
export const CLKCTL_CLKCFG0_UART0_CLK_DIS: any = '0'

/**
IP clock configuration*/
export const CLKCTL_CLKCFG0_LRFD: any = '1'
export const CLKCTL_CLKCFG0_LRFD_M: any = '1'
export const CLKCTL_CLKCFG0_LRFD_S: any = '1'
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
export const CLKCTL_CLKCFG0_GPIO_M: any = '1'
export const CLKCTL_CLKCFG0_GPIO_S: any = '1'
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
export const CLKCTL_CLKCFG1_RESERVED0_M: any = '32'
export const CLKCTL_CLKCFG1_RESERVED0_S: any = '32'

// -------- REGISTER CLKENSET0 -------- //

/**
Clock Enable Set Register 0.

This register enables IP clocks in the system. 
Used to set the corresponding fields in CLKCFG0 to 1.*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const CLKCTL_CLKENSET0_RESERVED31: any = '1'
export const CLKCTL_CLKENSET0_RESERVED31_M: any = '1'
export const CLKCTL_CLKENSET0_RESERVED31_S: any = '1'
/**
Configure IP clock enable*/
export const CLKCTL_CLKENSET0_LGPT3: any = '1'
export const CLKCTL_CLKENSET0_LGPT3_M: any = '1'
export const CLKCTL_CLKENSET0_LGPT3_S: any = '1'
/**
Set IP clock enable*/
export const CLKCTL_CLKENSET0_LGPT3_CLK_SET: any = '1'

/**
IP clock enable is unchanged*/
export const CLKCTL_CLKENSET0_LGPT3_CLK_UNCHGD: any = '0'

/**
Configure IP clock enable*/
export const CLKCTL_CLKENSET0_LGPT2: any = '1'
export const CLKCTL_CLKENSET0_LGPT2_M: any = '1'
export const CLKCTL_CLKENSET0_LGPT2_S: any = '1'
/**
Set IP clock enable*/
export const CLKCTL_CLKENSET0_LGPT2_CLK_SET: any = '1'

/**
IP clock enable is unchanged*/
export const CLKCTL_CLKENSET0_LGPT2_CLK_UNCHGD: any = '0'

/**
Configure IP clock enable*/
export const CLKCTL_CLKENSET0_LGPT1: any = '1'
export const CLKCTL_CLKENSET0_LGPT1_M: any = '1'
export const CLKCTL_CLKENSET0_LGPT1_S: any = '1'
/**
Set IP clock enable*/
export const CLKCTL_CLKENSET0_LGPT1_CLK_SET: any = '1'

/**
IP clock enable is unchanged*/
export const CLKCTL_CLKENSET0_LGPT1_CLK_UNCHGD: any = '0'

/**
Configure IP clock enable*/
export const CLKCTL_CLKENSET0_LGPT0: any = '1'
export const CLKCTL_CLKENSET0_LGPT0_M: any = '1'
export const CLKCTL_CLKENSET0_LGPT0_S: any = '1'
/**
Set IP clock enable*/
export const CLKCTL_CLKENSET0_LGPT0_CLK_SET: any = '1'

/**
IP clock enable is unchanged*/
export const CLKCTL_CLKENSET0_LGPT0_CLK_UNCHGD: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const CLKCTL_CLKENSET0_RESERVED18: any = '9'
export const CLKCTL_CLKENSET0_RESERVED18_M: any = '9'
export const CLKCTL_CLKENSET0_RESERVED18_S: any = '9'
/**
Configure IP clock enable*/
export const CLKCTL_CLKENSET0_DMA: any = '1'
export const CLKCTL_CLKENSET0_DMA_M: any = '1'
export const CLKCTL_CLKENSET0_DMA_S: any = '1'
/**
Set IP clock enable*/
export const CLKCTL_CLKENSET0_DMA_CLK_SET: any = '1'

/**
IP clock enable is unchanged*/
export const CLKCTL_CLKENSET0_DMA_CLK_UNCHGD: any = '0'

/**
Configure IP clock enable*/
export const CLKCTL_CLKENSET0_LAES: any = '1'
export const CLKCTL_CLKENSET0_LAES_M: any = '1'
export const CLKCTL_CLKENSET0_LAES_S: any = '1'
/**
Set IP clock enable*/
export const CLKCTL_CLKENSET0_LAES_CLK_SET: any = '1'

/**
IP clock enable is unchanged*/
export const CLKCTL_CLKENSET0_LAES_CLK_UNCHGD: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const CLKCTL_CLKENSET0_RESERVED15: any = '1'
export const CLKCTL_CLKENSET0_RESERVED15_M: any = '1'
export const CLKCTL_CLKENSET0_RESERVED15_S: any = '1'
/**
Configure IP clock enable*/
export const CLKCTL_CLKENSET0_ADC0: any = '1'
export const CLKCTL_CLKENSET0_ADC0_M: any = '1'
export const CLKCTL_CLKENSET0_ADC0_S: any = '1'
/**
Set IP clock enable*/
export const CLKCTL_CLKENSET0_ADC0_CLK_SET: any = '1'

/**
IP clock enable is unchanged*/
export const CLKCTL_CLKENSET0_ADC0_CLK_UNCHGD: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const CLKCTL_CLKENSET0_RESERVED11: any = '3'
export const CLKCTL_CLKENSET0_RESERVED11_M: any = '3'
export const CLKCTL_CLKENSET0_RESERVED11_S: any = '3'
/**
Configure IP clock enable*/
export const CLKCTL_CLKENSET0_SPI0: any = '1'
export const CLKCTL_CLKENSET0_SPI0_M: any = '1'
export const CLKCTL_CLKENSET0_SPI0_S: any = '1'
/**
Set IP clock enable*/
export const CLKCTL_CLKENSET0_SPI0_CLK_SET: any = '1'

/**
IP clock enable is unchanged*/
export const CLKCTL_CLKENSET0_SPI0_CLK_UNCHGD: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const CLKCTL_CLKENSET0_RESERVED7: any = '3'
export const CLKCTL_CLKENSET0_RESERVED7_M: any = '3'
export const CLKCTL_CLKENSET0_RESERVED7_S: any = '3'
/**
Configure IP clock enable*/
export const CLKCTL_CLKENSET0_I2C0: any = '1'
export const CLKCTL_CLKENSET0_I2C0_M: any = '1'
export const CLKCTL_CLKENSET0_I2C0_S: any = '1'
/**
Set IP clock enable*/
export const CLKCTL_CLKENSET0_I2C0_CLK_SET: any = '1'

/**
IP clock enable is unchanged*/
export const CLKCTL_CLKENSET0_I2C0_CLK_UNCHGD: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const CLKCTL_CLKENSET0_RESERVED3: any = '3'
export const CLKCTL_CLKENSET0_RESERVED3_M: any = '3'
export const CLKCTL_CLKENSET0_RESERVED3_S: any = '3'
/**
Configure IP clock enable*/
export const CLKCTL_CLKENSET0_UART0: any = '1'
export const CLKCTL_CLKENSET0_UART0_M: any = '1'
export const CLKCTL_CLKENSET0_UART0_S: any = '1'
/**
Set IP clock enable*/
export const CLKCTL_CLKENSET0_UART0_CLK_SET: any = '1'

/**
IP clock enable is unchanged*/
export const CLKCTL_CLKENSET0_UART0_CLK_UNCHGD: any = '0'

/**
Configure IP clock enable*/
export const CLKCTL_CLKENSET0_LRFD: any = '1'
export const CLKCTL_CLKENSET0_LRFD_M: any = '1'
export const CLKCTL_CLKENSET0_LRFD_S: any = '1'
/**
Set IP clock enable*/
export const CLKCTL_CLKENSET0_LRFD_CLK_SET: any = '1'

/**
IP clock enable is unchanged*/
export const CLKCTL_CLKENSET0_LRFD_CLK_UNCHGD: any = '0'

/**
Configure IP clock enable*/
export const CLKCTL_CLKENSET0_GPIO: any = '1'
export const CLKCTL_CLKENSET0_GPIO_M: any = '1'
export const CLKCTL_CLKENSET0_GPIO_S: any = '1'
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
export const CLKCTL_CLKENSET1_RESERVED0_M: any = '32'
export const CLKCTL_CLKENSET1_RESERVED0_S: any = '32'

// -------- REGISTER CLKENCLR0 -------- //

/**
Clock Enable Clear Register 0.

This register disables IP clocks in the system. 
Used to clear the corresponding fields in CLKCFG0 to 0.*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const CLKCTL_CLKENCLR0_RESERVED31: any = '1'
export const CLKCTL_CLKENCLR0_RESERVED31_M: any = '1'
export const CLKCTL_CLKENCLR0_RESERVED31_S: any = '1'
/**
Configure IP clock enable*/
export const CLKCTL_CLKENCLR0_LGPT3: any = '1'
export const CLKCTL_CLKENCLR0_LGPT3_M: any = '1'
export const CLKCTL_CLKENCLR0_LGPT3_S: any = '1'
/**
Clear IP clock enable*/
export const CLKCTL_CLKENCLR0_LGPT3_CLK_CLR: any = '1'

/**
IP clock enable is unchanged*/
export const CLKCTL_CLKENCLR0_LGPT3_CLK_UNCHGD: any = '0'

/**
Configure IP clock enable*/
export const CLKCTL_CLKENCLR0_LGPT2: any = '1'
export const CLKCTL_CLKENCLR0_LGPT2_M: any = '1'
export const CLKCTL_CLKENCLR0_LGPT2_S: any = '1'
/**
Clear IP clock enable*/
export const CLKCTL_CLKENCLR0_LGPT2_CLK_CLR: any = '1'

/**
IP clock enable is unchanged*/
export const CLKCTL_CLKENCLR0_LGPT2_CLK_UNCHGD: any = '0'

/**
Configure IP clock enable*/
export const CLKCTL_CLKENCLR0_LGPT1: any = '1'
export const CLKCTL_CLKENCLR0_LGPT1_M: any = '1'
export const CLKCTL_CLKENCLR0_LGPT1_S: any = '1'
/**
Clear IP clock enable*/
export const CLKCTL_CLKENCLR0_LGPT1_CLK_CLR: any = '1'

/**
IP clock enable is unchanged*/
export const CLKCTL_CLKENCLR0_LGPT1_CLK_UNCHGD: any = '0'

/**
Configure IP clock enable*/
export const CLKCTL_CLKENCLR0_LGPT0: any = '1'
export const CLKCTL_CLKENCLR0_LGPT0_M: any = '1'
export const CLKCTL_CLKENCLR0_LGPT0_S: any = '1'
/**
Clear IP clock enable*/
export const CLKCTL_CLKENCLR0_LGPT0_CLK_CLR: any = '1'

/**
IP clock enable is unchanged*/
export const CLKCTL_CLKENCLR0_LGPT0_CLK_UNCHGD: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const CLKCTL_CLKENCLR0_RESERVED18: any = '9'
export const CLKCTL_CLKENCLR0_RESERVED18_M: any = '9'
export const CLKCTL_CLKENCLR0_RESERVED18_S: any = '9'
/**
Configure IP clock enable*/
export const CLKCTL_CLKENCLR0_DMA: any = '1'
export const CLKCTL_CLKENCLR0_DMA_M: any = '1'
export const CLKCTL_CLKENCLR0_DMA_S: any = '1'
/**
Clear IP clock enable*/
export const CLKCTL_CLKENCLR0_DMA_CLK_CLR: any = '1'

/**
IP clock enable is unchanged*/
export const CLKCTL_CLKENCLR0_DMA_CLK_UNCHGD: any = '0'

/**
Configure IP clock enable*/
export const CLKCTL_CLKENCLR0_LAES: any = '1'
export const CLKCTL_CLKENCLR0_LAES_M: any = '1'
export const CLKCTL_CLKENCLR0_LAES_S: any = '1'
/**
Clear IP clock enable*/
export const CLKCTL_CLKENCLR0_LAES_CLK_CLR: any = '1'

/**
IP clock enable is unchanged*/
export const CLKCTL_CLKENCLR0_LAES_CLK_UNCHGD: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const CLKCTL_CLKENCLR0_RESERVED15: any = '1'
export const CLKCTL_CLKENCLR0_RESERVED15_M: any = '1'
export const CLKCTL_CLKENCLR0_RESERVED15_S: any = '1'
/**
Configure IP clock enable*/
export const CLKCTL_CLKENCLR0_ADC0: any = '1'
export const CLKCTL_CLKENCLR0_ADC0_M: any = '1'
export const CLKCTL_CLKENCLR0_ADC0_S: any = '1'
/**
Clear IP clock enable*/
export const CLKCTL_CLKENCLR0_ADC0_CLK_CLR: any = '1'

/**
IP clock enable is unchanged*/
export const CLKCTL_CLKENCLR0_ADC0_CLK_UNCHGD: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const CLKCTL_CLKENCLR0_RESERVED11: any = '3'
export const CLKCTL_CLKENCLR0_RESERVED11_M: any = '3'
export const CLKCTL_CLKENCLR0_RESERVED11_S: any = '3'
/**
Configure IP clock enable*/
export const CLKCTL_CLKENCLR0_SPI0: any = '1'
export const CLKCTL_CLKENCLR0_SPI0_M: any = '1'
export const CLKCTL_CLKENCLR0_SPI0_S: any = '1'
/**
Clear IP clock enable*/
export const CLKCTL_CLKENCLR0_SPI0_CLK_CLR: any = '1'

/**
IP clock enable is unchanged*/
export const CLKCTL_CLKENCLR0_SPI0_CLK_UNCHGD: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const CLKCTL_CLKENCLR0_RESERVED7: any = '3'
export const CLKCTL_CLKENCLR0_RESERVED7_M: any = '3'
export const CLKCTL_CLKENCLR0_RESERVED7_S: any = '3'
/**
Configure IP clock enable*/
export const CLKCTL_CLKENCLR0_I2C0: any = '1'
export const CLKCTL_CLKENCLR0_I2C0_M: any = '1'
export const CLKCTL_CLKENCLR0_I2C0_S: any = '1'
/**
Clear IP clock enable*/
export const CLKCTL_CLKENCLR0_I2C0_CLK_CLR: any = '1'

/**
IP clock enable is unchanged*/
export const CLKCTL_CLKENCLR0_I2C0_CLK_UNCHGD: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const CLKCTL_CLKENCLR0_RESERVED3: any = '3'
export const CLKCTL_CLKENCLR0_RESERVED3_M: any = '3'
export const CLKCTL_CLKENCLR0_RESERVED3_S: any = '3'
/**
Configure IP clock enable*/
export const CLKCTL_CLKENCLR0_UART0: any = '1'
export const CLKCTL_CLKENCLR0_UART0_M: any = '1'
export const CLKCTL_CLKENCLR0_UART0_S: any = '1'
/**
Clear IP clock enable*/
export const CLKCTL_CLKENCLR0_UART0_CLK_CLR: any = '1'

/**
IP clock enable is unchanged*/
export const CLKCTL_CLKENCLR0_UART0_CLK_UNCHGD: any = '0'

/**
Configure IP clock enable*/
export const CLKCTL_CLKENCLR0_LRFD: any = '1'
export const CLKCTL_CLKENCLR0_LRFD_M: any = '1'
export const CLKCTL_CLKENCLR0_LRFD_S: any = '1'
/**
Clear IP clock enable*/
export const CLKCTL_CLKENCLR0_LRFD_CLK_CLR: any = '1'

/**
IP clock enable is unchanged*/
export const CLKCTL_CLKENCLR0_LRFD_CLK_UNCHGD: any = '0'

/**
Configure IP clock enable*/
export const CLKCTL_CLKENCLR0_GPIO: any = '1'
export const CLKCTL_CLKENCLR0_GPIO_M: any = '1'
export const CLKCTL_CLKENCLR0_GPIO_S: any = '1'
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
export const CLKCTL_CLKENCLR1_RESERVED0_M: any = '32'
export const CLKCTL_CLKENCLR1_RESERVED0_S: any = '32'

// -------- REGISTER STBYPTR -------- //

/**
Internal. Only to be used through TI provided API.*/
/**
Internal. Only to be used through TI provided API.*/
export const CLKCTL_STBYPTR_VAL: any = '32'
export const CLKCTL_STBYPTR_VAL_M: any = '32'
export const CLKCTL_STBYPTR_VAL_S: any = '32'
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
export const CLKCTL_IDLECFG_RESERVED1_M: any = '31'
export const CLKCTL_IDLECFG_RESERVED1_S: any = '31'
/**
Flash LDO configuration in SLEEP/IDLE mode.*/
export const CLKCTL_IDLECFG_MODE: any = '1'
export const CLKCTL_IDLECFG_MODE_M: any = '1'
export const CLKCTL_IDLECFG_MODE_S: any = '1'
/**
Flash LDO is off in SLEEP/IDLE mode. 

Decreases power consumption in SLEEP/IDLE mode, but gives longer wake up time.

Note: NVM clock is turned off independent of DMA status. Therefore SW must ensure that DMA never access NVM in this mode.*/
export const CLKCTL_IDLECFG_MODE_LDO_OFF: any = '1'

/**
Flash LDO is on in SLEEP/IDLE mode.

Gives fast wake up time from SLEEP/IDLE mode, but increased power consumption.*/
export const CLKCTL_IDLECFG_MODE_LDO_ON: any = '0'


// -------- MODULE EVTSVT -------- //

export interface EVTSVT_t {
    DESC: em.$Reg
    DESCEX: em.$Reg
    DTB: em.$Reg
    NMISEL: em.$Reg
    CPUIRQ0SEL: em.$Reg
    CPUIRQ1SEL: em.$Reg
    CPUIRQ2SEL: em.$Reg
    CPUIRQ3SEL: em.$Reg
    CPUIRQ4SEL: em.$Reg
    CPUIRQ5SEL: em.$Reg
    CPUIRQ6SEL: em.$Reg
    CPUIRQ7SEL: em.$Reg
    CPUIRQ8SEL: em.$Reg
    CPUIRQ9SEL: em.$Reg
    CPUIRQ10SEL: em.$Reg
    CPUIRQ11SEL: em.$Reg
    CPUIRQ12SEL: em.$Reg
    CPUIRQ13SEL: em.$Reg
    CPUIRQ14SEL: em.$Reg
    CPUIRQ15SEL: em.$Reg
    CPUIRQ16SEL: em.$Reg
    CPUIRQ17SEL: em.$Reg
    CPUIRQ18SEL: em.$Reg
    SYSTIMC0SEL: em.$Reg
    SYSTIMC1SEL: em.$Reg
    SYSTIMC2SEL: em.$Reg
    SYSTIMC3SEL: em.$Reg
    SYSTIMC4SEL: em.$Reg
    ADCTRGSEL: em.$Reg
    LGPTSYNCSEL: em.$Reg
    LGPT0IN0SEL: em.$Reg
    LGPT0IN1SEL: em.$Reg
    LGPT0IN2SEL: em.$Reg
    LGPT0TENSEL: em.$Reg
    LGPT1IN0SEL: em.$Reg
    LGPT1IN1SEL: em.$Reg
    LGPT1IN2SEL: em.$Reg
    LGPT1TENSEL: em.$Reg
    LGPT2IN0SEL: em.$Reg
    LGPT2IN1SEL: em.$Reg
    LGPT2IN2SEL: em.$Reg
    LGPT2TENSEL: em.$Reg
    LGPT3IN0SEL: em.$Reg
    LGPT3IN1SEL: em.$Reg
    LGPT3IN2SEL: em.$Reg
    LGPT3TENSEL: em.$Reg
    LRFDIN0SEL: em.$Reg
    LRFDIN1SEL: em.$Reg
    LRFDIN2SEL: em.$Reg
    DMACH0SEL: em.$Reg
    DMACH1SEL: em.$Reg
    DMACH2SEL: em.$Reg
    DMACH3SEL: em.$Reg
    DMACH4SEL: em.$Reg
    DMACH5SEL: em.$Reg
    DMACH6SEL: em.$Reg
    DMACH7SEL: em.$Reg
}

// -------- REGISTER DESC -------- //

/**
Description 

                    
                    This register provides IP module ID, revision information, instance index and standard MMR registers offset.*/
/**
Module identifier used to uniquely identify this IP.*/
export const EVTSVT_DESC_MODID: any = '16'
export const EVTSVT_DESC_MODID_M: any = '16'
export const EVTSVT_DESC_MODID_S: any = '16'
/**
Standard IP MMR block offset. Standard IP MMRs are the set of from aggregated IRQ registers till DTB.

0: Standard IP MMRs do not exist
0x1-0xF: Standard IP MMRs begin at offset of (64*STDIPOFF from the base IP address)*/
export const EVTSVT_DESC_STDIPOFF: any = '4'
export const EVTSVT_DESC_STDIPOFF_M: any = '4'
export const EVTSVT_DESC_STDIPOFF_S: any = '4'
/**
IP Instance ID number. If multiple instances of IP exist in the device, this field can identify the instance number (0-15).*/
export const EVTSVT_DESC_INSTIDX: any = '4'
export const EVTSVT_DESC_INSTIDX_M: any = '4'
export const EVTSVT_DESC_INSTIDX_S: any = '4'
/**
Major revision of IP (0-15).*/
export const EVTSVT_DESC_MAJREV: any = '4'
export const EVTSVT_DESC_MAJREV_M: any = '4'
export const EVTSVT_DESC_MAJREV_S: any = '4'
/**
Minor revision of IP (0-15).*/
export const EVTSVT_DESC_MINREV: any = '4'
export const EVTSVT_DESC_MINREV_M: any = '4'
export const EVTSVT_DESC_MINREV_S: any = '4'

// -------- REGISTER DESCEX -------- //

/**
Extended Description

                    
                    This register provides configuration details of the IP to software drivers and end users.
*/
/**
Number of DMA input channels*/
export const EVTSVT_DESCEX_IDMA: any = '10'
export const EVTSVT_DESCEX_IDMA_M: any = '10'
export const EVTSVT_DESCEX_IDMA_S: any = '10'
/**
Number of DMA output channels*/
export const EVTSVT_DESCEX_NDMA: any = '5'
export const EVTSVT_DESCEX_NDMA_M: any = '5'
export const EVTSVT_DESCEX_NDMA_S: any = '5'
/**
Power Domain.

0 : SVT
 1 : ULL*/
export const EVTSVT_DESCEX_PD: any = '1'
export const EVTSVT_DESCEX_PD_M: any = '1'
export const EVTSVT_DESCEX_PD_S: any = '1'
/**
Number of Subscribers*/
export const EVTSVT_DESCEX_NSUB: any = '8'
export const EVTSVT_DESCEX_NSUB_M: any = '8'
export const EVTSVT_DESCEX_NSUB_S: any = '8'
/**
Number of Publishers*/
export const EVTSVT_DESCEX_NPUB: any = '8'
export const EVTSVT_DESCEX_NPUB_M: any = '8'
export const EVTSVT_DESCEX_NPUB_S: any = '8'

// -------- REGISTER DTB -------- //

/**
Digital test bus control 

                    
                    This register can be used to bring out IP internal signals to the pads for observation. 16 signals can be observed per select value.*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior*/
export const EVTSVT_DTB_RESERVED2: any = '30'
export const EVTSVT_DTB_RESERVED2_M: any = '30'
export const EVTSVT_DTB_RESERVED2_S: any = '30'
/**
Digital test bus selection mux control.

Non-zero select values output a 16 bit selected group of signals per value.*/
export const EVTSVT_DTB_SEL: any = '2'
export const EVTSVT_DTB_SEL_M: any = '2'
export const EVTSVT_DTB_SEL_S: any = '2'
/**
All 16 observation signals are set to zero.*/
export const EVTSVT_DTB_SEL_DIS: any = '0'


// -------- REGISTER NMISEL -------- //

/**
Output Selection for CPU NMI Exception

*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior*/
export const EVTSVT_NMISEL_RESERVED6: any = '26'
export const EVTSVT_NMISEL_RESERVED6_M: any = '26'
export const EVTSVT_NMISEL_RESERVED6_S: any = '26'
/**
Read/write selection value.

Writing any other value than values defined by a ENUM may result in undefined behavior.*/
export const EVTSVT_NMISEL_PUBID: any = '6'
export const EVTSVT_NMISEL_PUBID_M: any = '6'
export const EVTSVT_NMISEL_PUBID_S: any = '6'
/**
LGPT3 ADC trigger event, controlled by LGPT3:ADCTRG setting*/
export const EVTSVT_NMISEL_PUBID_LGPT3_ADC: any = '57'

/**
LGPT3 DMA request event, controlled by LGPT3:DMA setting*/
export const EVTSVT_NMISEL_PUBID_LGPT3_DMA: any = '56'

/**
LGPT3 combined interrupt, interrupt flags are found here LGPT3:MIS*/
export const EVTSVT_NMISEL_PUBID_LGPT3_COMB: any = '55'

/**
LGPT3 compare/capture output event 2, controlled by LGPT3:C2CFG setting*/
export const EVTSVT_NMISEL_PUBID_LGPT3C2: any = '54'

/**
LGPT3 compare/capture output event 1, controlled by LGPT3:C1CFG setting*/
export const EVTSVT_NMISEL_PUBID_LGPT3C1: any = '53'

/**
LGPT3 compare/capture output event 0, controlled by LGPT3:C0CFG setting*/
export const EVTSVT_NMISEL_PUBID_LGPT3C0: any = '52'

/**
LGPT2 ADC trigger event, controlled by LGPT2:ADCTRG setting*/
export const EVTSVT_NMISEL_PUBID_LGPT2_ADC: any = '51'

/**
LGPT2 DMA request event, controlled by LGPT2:DMA setting*/
export const EVTSVT_NMISEL_PUBID_LGPT2_DMA: any = '50'

/**
LGPT2 combined interrupt, interrupt flags are found here LGPT2:MIS*/
export const EVTSVT_NMISEL_PUBID_LGPT2_COMB: any = '49'

/**
LGPT0 compare/capture output event 2, controlled by LGPT2:C2CFG setting*/
export const EVTSVT_NMISEL_PUBID_LGPT2C2: any = '48'

/**
LGPT2 compare/capture output event 1, controlled by LGPT2:C1CFG setting*/
export const EVTSVT_NMISEL_PUBID_LGPT2C1: any = '47'

/**
LGPT2 compare/capture output event 0, controlled by LGPT2:C0CFG setting*/
export const EVTSVT_NMISEL_PUBID_LGPT2C0: any = '46'

/**
LRFD interrupt to SYSTIM, controlled by LRFDDBELL:SYSTIMOEV.SRC2*/
export const EVTSVT_NMISEL_PUBID_LRFD_EVT2: any = '44'

/**
LRFD interrupt to SYSTIM, controlled by LRFDDBELL:SYSTIMOEV.SRC1*/
export const EVTSVT_NMISEL_PUBID_LRFD_EVT1: any = '43'

/**
LRFD interrupt to SYSTIM, controlled by LRFDDBELL:SYSTIMOEV.SRC0*/
export const EVTSVT_NMISEL_PUBID_LRFD_EVT0: any = '42'

/**
LGPT1 ADC trigger event, controlled by LGPT1:ADCTRG setting*/
export const EVTSVT_NMISEL_PUBID_LGPT1_ADC: any = '41'

/**
LGPT1 DMA request event, controlled by LGPT1:DMA setting*/
export const EVTSVT_NMISEL_PUBID_LGPT1_DMA: any = '40'

/**
LGPT1 compare/capture output event 2, controlled by LGPT1:C2CFG setting*/
export const EVTSVT_NMISEL_PUBID_LGPT1C2: any = '39'

/**
LGPT1 compare/capture output event 1, controlled by LGPT1:C1CFG setting*/
export const EVTSVT_NMISEL_PUBID_LGPT1C1: any = '38'

/**
LGPT1 compare/capture output event 0, controlled by LGPT1:C0CFG setting*/
export const EVTSVT_NMISEL_PUBID_LGPT1C0: any = '37'

/**
LGPT0 ADC trigger event, controlled by LGPT0:ADCTRG setting*/
export const EVTSVT_NMISEL_PUBID_LGPT0_ADC: any = '36'

/**
LGPT0 DMA request event, controlled by LGPT0:DMA setting*/
export const EVTSVT_NMISEL_PUBID_LGPT0_DMA: any = '35'

/**
LGPT0 compare/capture output event 2, controlled by LGPT0:C2CFG setting*/
export const EVTSVT_NMISEL_PUBID_LGPT0C2: any = '34'

/**
LGPT0 compare/capture output event 1, controlled by LGPT0:C1CFG setting*/
export const EVTSVT_NMISEL_PUBID_LGPT0C1: any = '33'

/**
LGPT0 compare/capture output event 0, controlled by LGPT0:C0CFG setting*/
export const EVTSVT_NMISEL_PUBID_LGPT0C0: any = '32'

/**
SYSTIM Channel 4 event, event flag is SYSTIM:MIS.EVT4*/
export const EVTSVT_NMISEL_PUBID_SYSTIM4: any = '31'

/**
SYSTIM Channel 3 event, event flag is SYSTIM:MIS.EVT3*/
export const EVTSVT_NMISEL_PUBID_SYSTIM3: any = '30'

/**
SYSTIM Channel 2 event, event flag is SYSTIM:MIS.EVT2*/
export const EVTSVT_NMISEL_PUBID_SYSTIM2: any = '29'

/**
SYSTIM Channel 1 event, event flag is  SYSTIM:MIS.EVT1*/
export const EVTSVT_NMISEL_PUBID_SYSTIM1: any = '28'

/**
SYSTIM Channel 0 event, event flag is SYSTIM:MIS.EVT0*/
export const EVTSVT_NMISEL_PUBID_SYSTIM0: any = '27'

/**
SYSTIM interrupt driven by synchronizing LFTICK signal to SVT clock*/
export const EVTSVT_NMISEL_PUBID_SYSTIM_LT: any = '26'

/**
SYSTIM heartbeat, can be set by SYSTIM:TIMEBIT*/
export const EVTSVT_NMISEL_PUBID_SYSTIM_HB: any = '25'

/**
Interrupt event from I2C0, interrupt flags can be found here I2C0:MIS*/
export const EVTSVT_NMISEL_PUBID_I2C0_IRQ: any = '24'

/**
UART0 combined interrupt, interrupt flags are found here UART0:MIS*/
export const EVTSVT_NMISEL_PUBID_UART0_COMB: any = '23'

/**
AES accelerator combined interrupt request, interrupt flags can be found here AES:MIS*/
export const EVTSVT_NMISEL_PUBID_AES_COMB: any = '22'

/**
DMA bus error, corresponds to DMA:ERROR.STATUS*/
export const EVTSVT_NMISEL_PUBID_DMA_ERR: any = '21'

/**
DMA combined done interrupt, corresponding flags can be found here DMA:REQDONE*/
export const EVTSVT_NMISEL_PUBID_DMA_DONE_COMB: any = '20'

/**
LGPT1 combined interrupt, interrupt flags are found here LGPT1:MIS*/
export const EVTSVT_NMISEL_PUBID_LGPT1_COMB: any = '19'

/**
LGPT0 combined interrupt, interrupt flags are found here LGPT0:MIS*/
export const EVTSVT_NMISEL_PUBID_LGPT0_COMB: any = '18'

/**
ADC general published event, interrupt flags can be found here ADC:MIS1 */
export const EVTSVT_NMISEL_PUBID_ADC_EVT: any = '17'

/**
ADC combined interrupt request, interrupt flags can be found here ADC:MIS0*/
export const EVTSVT_NMISEL_PUBID_ADC_COMB: any = '16'

/**
SPI0 combined interrupt request, interrupt flags can be found here SPI0:MIS*/
export const EVTSVT_NMISEL_PUBID_SPI0_COMB: any = '15'

/**
LRFD combined event, interrupt flags can be found here LRFDDBELL:MIS2*/
export const EVTSVT_NMISEL_PUBID_LRFD_IRQ2: any = '14'

/**
LRFD combined event, interrupt flags can be found here LRFDDBELL:MIS1*/
export const EVTSVT_NMISEL_PUBID_LRFD_IRQ1: any = '13'

/**
LRFD combined event, interrupt flags can be found here LRFDDBELL:MIS0*/
export const EVTSVT_NMISEL_PUBID_LRFD_IRQ0: any = '12'

/**
NoWrapper Flash interrupt indicating that the flash operation has completed, interrupt flags can be found here FLASH:MIS*/
export const EVTSVT_NMISEL_PUBID_FLASH_IRQ: any = '11'

/**
GPIO generic published event, controlled by GPIO:EVTCFG*/
export const EVTSVT_NMISEL_PUBID_GPIO_EVT: any = '10'

/**
GPIO combined wake up interrupt, interrupt flags can be found here GPIO:MIS*/
export const EVTSVT_NMISEL_PUBID_GPIO_COMB: any = '9'

/**
SYSTIM combined interrupt, interrupt flags are found here SYSTIM:MIS*/
export const EVTSVT_NMISEL_PUBID_SYSTIM_COMB: any = '8'

/**
Selects an AON_NMI source, controlled by EVTULL:NMISEL*/
export const EVTSVT_NMISEL_PUBID_AON_NMI_SEL: any = '1'

/**
Always inactive*/
export const EVTSVT_NMISEL_PUBID_NONE: any = '0'


// -------- REGISTER CPUIRQ0SEL -------- //

/**
Output Selection for CPU Interrupt CPUIRQ0

*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior*/
export const EVTSVT_CPUIRQ0SEL_RESERVED6: any = '26'
export const EVTSVT_CPUIRQ0SEL_RESERVED6_M: any = '26'
export const EVTSVT_CPUIRQ0SEL_RESERVED6_S: any = '26'
/**
Read/write selection value.

Writing any other value than values defined by a ENUM may result in undefined behavior.*/
export const EVTSVT_CPUIRQ0SEL_PUBID: any = '6'
export const EVTSVT_CPUIRQ0SEL_PUBID_M: any = '6'
export const EVTSVT_CPUIRQ0SEL_PUBID_S: any = '6'
/**
LGPT3 ADC trigger event, controlled by LGPT3:ADCTRG setting*/
export const EVTSVT_CPUIRQ0SEL_PUBID_LGPT3_ADC: any = '57'

/**
LGPT3 DMA request event, controlled by LGPT3:DMA setting*/
export const EVTSVT_CPUIRQ0SEL_PUBID_LGPT3_DMA: any = '56'

/**
LGPT3 combined interrupt, interrupt flags are found here LGPT3:MIS*/
export const EVTSVT_CPUIRQ0SEL_PUBID_LGPT3_COMB: any = '55'

/**
LGPT3 compare/capture output event 2, controlled by LGPT3:C2CFG setting*/
export const EVTSVT_CPUIRQ0SEL_PUBID_LGPT3C2: any = '54'

/**
LGPT3 compare/capture output event 1, controlled by LGPT3:C1CFG setting*/
export const EVTSVT_CPUIRQ0SEL_PUBID_LGPT3C1: any = '53'

/**
LGPT3 compare/capture output event 0, controlled by LGPT3:C0CFG setting*/
export const EVTSVT_CPUIRQ0SEL_PUBID_LGPT3C0: any = '52'

/**
LGPT2 ADC trigger event, controlled by LGPT2:ADCTRG setting*/
export const EVTSVT_CPUIRQ0SEL_PUBID_LGPT2_ADC: any = '51'

/**
LGPT2 DMA request event, controlled by LGPT2:DMA setting*/
export const EVTSVT_CPUIRQ0SEL_PUBID_LGPT2_DMA: any = '50'

/**
LGPT2 combined interrupt, interrupt flags are found here LGPT2:MIS*/
export const EVTSVT_CPUIRQ0SEL_PUBID_LGPT2_COMB: any = '49'

/**
LGPT0 compare/capture output event 2, controlled by LGPT2:C2CFG setting*/
export const EVTSVT_CPUIRQ0SEL_PUBID_LGPT2C2: any = '48'

/**
LGPT2 compare/capture output event 1, controlled by LGPT2:C1CFG setting*/
export const EVTSVT_CPUIRQ0SEL_PUBID_LGPT2C1: any = '47'

/**
LGPT2 compare/capture output event 0, controlled by LGPT2:C0CFG setting*/
export const EVTSVT_CPUIRQ0SEL_PUBID_LGPT2C0: any = '46'

/**
LRFD interrupt to SYSTIM, controlled by LRFDDBELL:SYSTIMOEV.SRC2*/
export const EVTSVT_CPUIRQ0SEL_PUBID_LRFD_EVT2: any = '44'

/**
LRFD interrupt to SYSTIM, controlled by LRFDDBELL:SYSTIMOEV.SRC1*/
export const EVTSVT_CPUIRQ0SEL_PUBID_LRFD_EVT1: any = '43'

/**
LRFD interrupt to SYSTIM, controlled by LRFDDBELL:SYSTIMOEV.SRC0*/
export const EVTSVT_CPUIRQ0SEL_PUBID_LRFD_EVT0: any = '42'

/**
LGPT1 ADC trigger event, controlled by LGPT1:ADCTRG setting*/
export const EVTSVT_CPUIRQ0SEL_PUBID_LGPT1_ADC: any = '41'

/**
LGPT1 DMA request event, controlled by LGPT1:DMA setting*/
export const EVTSVT_CPUIRQ0SEL_PUBID_LGPT1_DMA: any = '40'

/**
LGPT1 compare/capture output event 2, controlled by LGPT1:C2CFG setting*/
export const EVTSVT_CPUIRQ0SEL_PUBID_LGPT1C2: any = '39'

/**
LGPT1 compare/capture output event 1, controlled by LGPT1:C1CFG setting*/
export const EVTSVT_CPUIRQ0SEL_PUBID_LGPT1C1: any = '38'

/**
LGPT1 compare/capture output event 0, controlled by LGPT1:C0CFG setting*/
export const EVTSVT_CPUIRQ0SEL_PUBID_LGPT1C0: any = '37'

/**
LGPT0 ADC trigger event, controlled by LGPT0:ADCTRG setting*/
export const EVTSVT_CPUIRQ0SEL_PUBID_LGPT0_ADC: any = '36'

/**
LGPT0 DMA request event, controlled by LGPT0:DMA setting*/
export const EVTSVT_CPUIRQ0SEL_PUBID_LGPT0_DMA: any = '35'

/**
LGPT0 compare/capture output event 2, controlled by LGPT0:C2CFG setting*/
export const EVTSVT_CPUIRQ0SEL_PUBID_LGPT0C2: any = '34'

/**
LGPT0 compare/capture output event 1, controlled by LGPT0:C1CFG setting*/
export const EVTSVT_CPUIRQ0SEL_PUBID_LGPT0C1: any = '33'

/**
LGPT0 compare/capture output event 0, controlled by LGPT0:C0CFG setting*/
export const EVTSVT_CPUIRQ0SEL_PUBID_LGPT0C0: any = '32'

/**
SYSTIM Channel 4 event, event flag is SYSTIM:MIS.EVT4*/
export const EVTSVT_CPUIRQ0SEL_PUBID_SYSTIM4: any = '31'

/**
SYSTIM Channel 3 event, event flag is SYSTIM:MIS.EVT3*/
export const EVTSVT_CPUIRQ0SEL_PUBID_SYSTIM3: any = '30'

/**
SYSTIM Channel 2 event, event flag is SYSTIM:MIS.EVT2*/
export const EVTSVT_CPUIRQ0SEL_PUBID_SYSTIM2: any = '29'

/**
SYSTIM Channel 1 event, event flag is  SYSTIM:MIS.EVT1*/
export const EVTSVT_CPUIRQ0SEL_PUBID_SYSTIM1: any = '28'

/**
SYSTIM Channel 0 event, event flag is SYSTIM:MIS.EVT0*/
export const EVTSVT_CPUIRQ0SEL_PUBID_SYSTIM0: any = '27'

/**
SYSTIM interrupt driven by synchronizing LFTICK signal to SVT clock*/
export const EVTSVT_CPUIRQ0SEL_PUBID_SYSTIM_LT: any = '26'

/**
SYSTIM heartbeat, can be set by SYSTIM:TIMEBIT*/
export const EVTSVT_CPUIRQ0SEL_PUBID_SYSTIM_HB: any = '25'

/**
Interrupt event from I2C0, interrupt flags can be found here I2C0:MIS*/
export const EVTSVT_CPUIRQ0SEL_PUBID_I2C0_IRQ: any = '24'

/**
UART0 combined interrupt, interrupt flags are found here UART0:MIS*/
export const EVTSVT_CPUIRQ0SEL_PUBID_UART0_COMB: any = '23'

/**
AES accelerator combined interrupt request, interrupt flags can be found here AES:MIS*/
export const EVTSVT_CPUIRQ0SEL_PUBID_AES_COMB: any = '22'

/**
DMA bus error, corresponds to DMA:ERROR.STATUS*/
export const EVTSVT_CPUIRQ0SEL_PUBID_DMA_ERR: any = '21'

/**
DMA combined done interrupt, corresponding flags can be found here DMA:REQDONE*/
export const EVTSVT_CPUIRQ0SEL_PUBID_DMA_DONE_COMB: any = '20'

/**
LGPT1 combined interrupt, interrupt flags are found here LGPT1:MIS*/
export const EVTSVT_CPUIRQ0SEL_PUBID_LGPT1_COMB: any = '19'

/**
LGPT0 combined interrupt, interrupt flags are found here LGPT0:MIS*/
export const EVTSVT_CPUIRQ0SEL_PUBID_LGPT0_COMB: any = '18'

/**
ADC general published event, interrupt flags can be found here ADC:MIS1 */
export const EVTSVT_CPUIRQ0SEL_PUBID_ADC_EVT: any = '17'

/**
ADC combined interrupt request, interrupt flags can be found here ADC:MIS0*/
export const EVTSVT_CPUIRQ0SEL_PUBID_ADC_COMB: any = '16'

/**
SPI0 combined interrupt request, interrupt flags can be found here SPI0:MIS*/
export const EVTSVT_CPUIRQ0SEL_PUBID_SPI0_COMB: any = '15'

/**
LRFD combined event, interrupt flags can be found here LRFDDBELL:MIS2*/
export const EVTSVT_CPUIRQ0SEL_PUBID_LRFD_IRQ2: any = '14'

/**
LRFD combined event, interrupt flags can be found here LRFDDBELL:MIS1*/
export const EVTSVT_CPUIRQ0SEL_PUBID_LRFD_IRQ1: any = '13'

/**
LRFD combined event, interrupt flags can be found here LRFDDBELL:MIS0*/
export const EVTSVT_CPUIRQ0SEL_PUBID_LRFD_IRQ0: any = '12'

/**
NoWrapper Flash interrupt indicating that the flash operation has completed, interrupt flags can be found here FLASH:MIS*/
export const EVTSVT_CPUIRQ0SEL_PUBID_FLASH_IRQ: any = '11'

/**
GPIO generic published event, controlled by GPIO:EVTCFG*/
export const EVTSVT_CPUIRQ0SEL_PUBID_GPIO_EVT: any = '10'

/**
GPIO combined wake up interrupt, interrupt flags can be found here GPIO:MIS*/
export const EVTSVT_CPUIRQ0SEL_PUBID_GPIO_COMB: any = '9'

/**
SYSTIM combined interrupt, interrupt flags are found here SYSTIM:MIS*/
export const EVTSVT_CPUIRQ0SEL_PUBID_SYSTIM_COMB: any = '8'

/**
IOC synchronous combined event, controlled by IOC:EVTCFG*/
export const EVTSVT_CPUIRQ0SEL_PUBID_AON_IOC_COMB: any = '7'

/**
AON LPCMP interrupt, controlled by SYS0:LPCMPCFG*/
export const EVTSVT_CPUIRQ0SEL_PUBID_AON_LPMCMP_IRQ: any = '6'

/**
DebugSS combined interrupt, interrupt flags can be found here DBGSS:MIS*/
export const EVTSVT_CPUIRQ0SEL_PUBID_AON_DBG_COMB: any = '5'

/**
AON_RTC event, controlled by the RTC:IMASK setting*/
export const EVTSVT_CPUIRQ0SEL_PUBID_AON_RTC_COMB: any = '4'

/**
CKMD combined interrupt request, interrupt flags can be found here CKMD:MIS*/
export const EVTSVT_CPUIRQ0SEL_PUBID_AON_CKM_COMB: any = '3'

/**
PMU combined interrupt request for BATMON, interrupt flags can be found here PMUD:EVENT*/
export const EVTSVT_CPUIRQ0SEL_PUBID_AON_PMU_COMB: any = '2'

/**
Always inactive*/
export const EVTSVT_CPUIRQ0SEL_PUBID_NONE: any = '0'


// -------- REGISTER CPUIRQ1SEL -------- //

/**
Output Selection for CPU Interrupt CPUIRQ1

*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior*/
export const EVTSVT_CPUIRQ1SEL_RESERVED6: any = '26'
export const EVTSVT_CPUIRQ1SEL_RESERVED6_M: any = '26'
export const EVTSVT_CPUIRQ1SEL_RESERVED6_S: any = '26'
/**
Read/write selection value.

Writing any other value than values defined by a ENUM may result in undefined behavior.*/
export const EVTSVT_CPUIRQ1SEL_PUBID: any = '6'
export const EVTSVT_CPUIRQ1SEL_PUBID_M: any = '6'
export const EVTSVT_CPUIRQ1SEL_PUBID_S: any = '6'
/**
LGPT3 ADC trigger event, controlled by LGPT3:ADCTRG setting*/
export const EVTSVT_CPUIRQ1SEL_PUBID_LGPT3_ADC: any = '57'

/**
LGPT3 DMA request event, controlled by LGPT3:DMA setting*/
export const EVTSVT_CPUIRQ1SEL_PUBID_LGPT3_DMA: any = '56'

/**
LGPT3 combined interrupt, interrupt flags are found here LGPT3:MIS*/
export const EVTSVT_CPUIRQ1SEL_PUBID_LGPT3_COMB: any = '55'

/**
LGPT3 compare/capture output event 2, controlled by LGPT3:C2CFG setting*/
export const EVTSVT_CPUIRQ1SEL_PUBID_LGPT3C2: any = '54'

/**
LGPT3 compare/capture output event 1, controlled by LGPT3:C1CFG setting*/
export const EVTSVT_CPUIRQ1SEL_PUBID_LGPT3C1: any = '53'

/**
LGPT3 compare/capture output event 0, controlled by LGPT3:C0CFG setting*/
export const EVTSVT_CPUIRQ1SEL_PUBID_LGPT3C0: any = '52'

/**
LGPT2 ADC trigger event, controlled by LGPT2:ADCTRG setting*/
export const EVTSVT_CPUIRQ1SEL_PUBID_LGPT2_ADC: any = '51'

/**
LGPT2 DMA request event, controlled by LGPT2:DMA setting*/
export const EVTSVT_CPUIRQ1SEL_PUBID_LGPT2_DMA: any = '50'

/**
LGPT2 combined interrupt, interrupt flags are found here LGPT2:MIS*/
export const EVTSVT_CPUIRQ1SEL_PUBID_LGPT2_COMB: any = '49'

/**
LGPT0 compare/capture output event 2, controlled by LGPT2:C2CFG setting*/
export const EVTSVT_CPUIRQ1SEL_PUBID_LGPT2C2: any = '48'

/**
LGPT2 compare/capture output event 1, controlled by LGPT2:C1CFG setting*/
export const EVTSVT_CPUIRQ1SEL_PUBID_LGPT2C1: any = '47'

/**
LGPT2 compare/capture output event 0, controlled by LGPT2:C0CFG setting*/
export const EVTSVT_CPUIRQ1SEL_PUBID_LGPT2C0: any = '46'

/**
LRFD interrupt to SYSTIM, controlled by LRFDDBELL:SYSTIMOEV.SRC2*/
export const EVTSVT_CPUIRQ1SEL_PUBID_LRFD_EVT2: any = '44'

/**
LRFD interrupt to SYSTIM, controlled by LRFDDBELL:SYSTIMOEV.SRC1*/
export const EVTSVT_CPUIRQ1SEL_PUBID_LRFD_EVT1: any = '43'

/**
LRFD interrupt to SYSTIM, controlled by LRFDDBELL:SYSTIMOEV.SRC0*/
export const EVTSVT_CPUIRQ1SEL_PUBID_LRFD_EVT0: any = '42'

/**
LGPT1 ADC trigger event, controlled by LGPT1:ADCTRG setting*/
export const EVTSVT_CPUIRQ1SEL_PUBID_LGPT1_ADC: any = '41'

/**
LGPT1 DMA request event, controlled by LGPT1:DMA setting*/
export const EVTSVT_CPUIRQ1SEL_PUBID_LGPT1_DMA: any = '40'

/**
LGPT1 compare/capture output event 2, controlled by LGPT1:C2CFG setting*/
export const EVTSVT_CPUIRQ1SEL_PUBID_LGPT1C2: any = '39'

/**
LGPT1 compare/capture output event 1, controlled by LGPT1:C1CFG setting*/
export const EVTSVT_CPUIRQ1SEL_PUBID_LGPT1C1: any = '38'

/**
LGPT1 compare/capture output event 0, controlled by LGPT1:C0CFG setting*/
export const EVTSVT_CPUIRQ1SEL_PUBID_LGPT1C0: any = '37'

/**
LGPT0 ADC trigger event, controlled by LGPT0:ADCTRG setting*/
export const EVTSVT_CPUIRQ1SEL_PUBID_LGPT0_ADC: any = '36'

/**
LGPT0 DMA request event, controlled by LGPT0:DMA setting*/
export const EVTSVT_CPUIRQ1SEL_PUBID_LGPT0_DMA: any = '35'

/**
LGPT0 compare/capture output event 2, controlled by LGPT0:C2CFG setting*/
export const EVTSVT_CPUIRQ1SEL_PUBID_LGPT0C2: any = '34'

/**
LGPT0 compare/capture output event 1, controlled by LGPT0:C1CFG setting*/
export const EVTSVT_CPUIRQ1SEL_PUBID_LGPT0C1: any = '33'

/**
LGPT0 compare/capture output event 0, controlled by LGPT0:C0CFG setting*/
export const EVTSVT_CPUIRQ1SEL_PUBID_LGPT0C0: any = '32'

/**
SYSTIM Channel 4 event, event flag is SYSTIM:MIS.EVT4*/
export const EVTSVT_CPUIRQ1SEL_PUBID_SYSTIM4: any = '31'

/**
SYSTIM Channel 3 event, event flag is SYSTIM:MIS.EVT3*/
export const EVTSVT_CPUIRQ1SEL_PUBID_SYSTIM3: any = '30'

/**
SYSTIM Channel 2 event, event flag is SYSTIM:MIS.EVT2*/
export const EVTSVT_CPUIRQ1SEL_PUBID_SYSTIM2: any = '29'

/**
SYSTIM Channel 1 event, event flag is  SYSTIM:MIS.EVT1*/
export const EVTSVT_CPUIRQ1SEL_PUBID_SYSTIM1: any = '28'

/**
SYSTIM Channel 0 event, event flag is SYSTIM:MIS.EVT0*/
export const EVTSVT_CPUIRQ1SEL_PUBID_SYSTIM0: any = '27'

/**
SYSTIM interrupt driven by synchronizing LFTICK signal to SVT clock*/
export const EVTSVT_CPUIRQ1SEL_PUBID_SYSTIM_LT: any = '26'

/**
SYSTIM heartbeat, can be set by SYSTIM:TIMEBIT*/
export const EVTSVT_CPUIRQ1SEL_PUBID_SYSTIM_HB: any = '25'

/**
Interrupt event from I2C0, interrupt flags can be found here I2C0:MIS*/
export const EVTSVT_CPUIRQ1SEL_PUBID_I2C0_IRQ: any = '24'

/**
UART0 combined interrupt, interrupt flags are found here UART0:MIS*/
export const EVTSVT_CPUIRQ1SEL_PUBID_UART0_COMB: any = '23'

/**
AES accelerator combined interrupt request, interrupt flags can be found here AES:MIS*/
export const EVTSVT_CPUIRQ1SEL_PUBID_AES_COMB: any = '22'

/**
DMA bus error, corresponds to DMA:ERROR.STATUS*/
export const EVTSVT_CPUIRQ1SEL_PUBID_DMA_ERR: any = '21'

/**
DMA combined done interrupt, corresponding flags can be found here DMA:REQDONE*/
export const EVTSVT_CPUIRQ1SEL_PUBID_DMA_DONE_COMB: any = '20'

/**
LGPT1 combined interrupt, interrupt flags are found here LGPT1:MIS*/
export const EVTSVT_CPUIRQ1SEL_PUBID_LGPT1_COMB: any = '19'

/**
LGPT0 combined interrupt, interrupt flags are found here LGPT0:MIS*/
export const EVTSVT_CPUIRQ1SEL_PUBID_LGPT0_COMB: any = '18'

/**
ADC general published event, interrupt flags can be found here ADC:MIS1 */
export const EVTSVT_CPUIRQ1SEL_PUBID_ADC_EVT: any = '17'

/**
ADC combined interrupt request, interrupt flags can be found here ADC:MIS0*/
export const EVTSVT_CPUIRQ1SEL_PUBID_ADC_COMB: any = '16'

/**
SPI0 combined interrupt request, interrupt flags can be found here SPI0:MIS*/
export const EVTSVT_CPUIRQ1SEL_PUBID_SPI0_COMB: any = '15'

/**
LRFD combined event, interrupt flags can be found here LRFDDBELL:MIS2*/
export const EVTSVT_CPUIRQ1SEL_PUBID_LRFD_IRQ2: any = '14'

/**
LRFD combined event, interrupt flags can be found here LRFDDBELL:MIS1*/
export const EVTSVT_CPUIRQ1SEL_PUBID_LRFD_IRQ1: any = '13'

/**
LRFD combined event, interrupt flags can be found here LRFDDBELL:MIS0*/
export const EVTSVT_CPUIRQ1SEL_PUBID_LRFD_IRQ0: any = '12'

/**
NoWrapper Flash interrupt indicating that the flash operation has completed, interrupt flags can be found here FLASH:MIS*/
export const EVTSVT_CPUIRQ1SEL_PUBID_FLASH_IRQ: any = '11'

/**
GPIO generic published event, controlled by GPIO:EVTCFG*/
export const EVTSVT_CPUIRQ1SEL_PUBID_GPIO_EVT: any = '10'

/**
GPIO combined wake up interrupt, interrupt flags can be found here GPIO:MIS*/
export const EVTSVT_CPUIRQ1SEL_PUBID_GPIO_COMB: any = '9'

/**
SYSTIM combined interrupt, interrupt flags are found here SYSTIM:MIS*/
export const EVTSVT_CPUIRQ1SEL_PUBID_SYSTIM_COMB: any = '8'

/**
IOC synchronous combined event, controlled by IOC:EVTCFG*/
export const EVTSVT_CPUIRQ1SEL_PUBID_AON_IOC_COMB: any = '7'

/**
AON LPCMP interrupt, controlled by SYS0:LPCMPCFG*/
export const EVTSVT_CPUIRQ1SEL_PUBID_AON_LPMCMP_IRQ: any = '6'

/**
DebugSS combined interrupt, interrupt flags can be found here DBGSS:MIS*/
export const EVTSVT_CPUIRQ1SEL_PUBID_AON_DBG_COMB: any = '5'

/**
AON_RTC event, controlled by the RTC:IMASK setting*/
export const EVTSVT_CPUIRQ1SEL_PUBID_AON_RTC_COMB: any = '4'

/**
CKMD combined interrupt request, interrupt flags can be found here CKMD:MIS*/
export const EVTSVT_CPUIRQ1SEL_PUBID_AON_CKM_COMB: any = '3'

/**
PMU combined interrupt request for BATMON, interrupt flags can be found here PMUD:EVENT*/
export const EVTSVT_CPUIRQ1SEL_PUBID_AON_PMU_COMB: any = '2'

/**
Always inactive*/
export const EVTSVT_CPUIRQ1SEL_PUBID_NONE: any = '0'


// -------- REGISTER CPUIRQ2SEL -------- //

/**
Output Selection for CPU Interrupt CPUIRQ2

*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior*/
export const EVTSVT_CPUIRQ2SEL_RESERVED6: any = '26'
export const EVTSVT_CPUIRQ2SEL_RESERVED6_M: any = '26'
export const EVTSVT_CPUIRQ2SEL_RESERVED6_S: any = '26'
/**
Read/write selection value.

Writing any other value than values defined by a ENUM may result in undefined behavior.*/
export const EVTSVT_CPUIRQ2SEL_PUBID: any = '6'
export const EVTSVT_CPUIRQ2SEL_PUBID_M: any = '6'
export const EVTSVT_CPUIRQ2SEL_PUBID_S: any = '6'
/**
LGPT3 combined interrupt, interrupt flags are found here LGPT3:MIS*/
export const EVTSVT_CPUIRQ2SEL_PUBID_LGPT3_COMB: any = '55'

/**
LGPT2 combined interrupt, interrupt flags are found here LGPT2:MIS*/
export const EVTSVT_CPUIRQ2SEL_PUBID_LGPT2_COMB: any = '49'

/**
Interrupt event from I2C0, interrupt flags can be found here I2C0:MIS*/
export const EVTSVT_CPUIRQ2SEL_PUBID_I2C0_IRQ: any = '24'

/**
UART0 combined interrupt, interrupt flags are found here UART0:MIS*/
export const EVTSVT_CPUIRQ2SEL_PUBID_UART0_COMB: any = '23'

/**
AES accelerator combined interrupt request, interrupt flags can be found here AES:MIS*/
export const EVTSVT_CPUIRQ2SEL_PUBID_AES_COMB: any = '22'

/**
DMA bus error, corresponds to DMA:ERROR.STATUS*/
export const EVTSVT_CPUIRQ2SEL_PUBID_DMA_ERR: any = '21'

/**
DMA combined done interrupt, corresponding flags can be found here DMA:REQDONE*/
export const EVTSVT_CPUIRQ2SEL_PUBID_DMA_DONE_COMB: any = '20'

/**
LGPT1 combined interrupt, interrupt flags are found here LGPT1:MIS*/
export const EVTSVT_CPUIRQ2SEL_PUBID_LGPT1_COMB: any = '19'

/**
LGPT0 combined interrupt, interrupt flags are found here LGPT0:MIS*/
export const EVTSVT_CPUIRQ2SEL_PUBID_LGPT0_COMB: any = '18'

/**
ADC combined interrupt request, interrupt flags can be found here ADC:MIS0*/
export const EVTSVT_CPUIRQ2SEL_PUBID_ADC_COMB: any = '16'

/**
SPI0 combined interrupt request, interrupt flags can be found here SPI0:MIS*/
export const EVTSVT_CPUIRQ2SEL_PUBID_SPI0_COMB: any = '15'

/**
LRFD combined event, interrupt flags can be found here LRFDDBELL:MIS2*/
export const EVTSVT_CPUIRQ2SEL_PUBID_LRFD_IRQ2: any = '14'

/**
LRFD combined event, interrupt flags can be found here LRFDDBELL:MIS1*/
export const EVTSVT_CPUIRQ2SEL_PUBID_LRFD_IRQ1: any = '13'

/**
LRFD combined event, interrupt flags can be found here LRFDDBELL:MIS0*/
export const EVTSVT_CPUIRQ2SEL_PUBID_LRFD_IRQ0: any = '12'

/**
NoWrapper Flash interrupt indicating that the flash operation has completed, interrupt flags can be found here FLASH:MIS*/
export const EVTSVT_CPUIRQ2SEL_PUBID_FLASH_IRQ: any = '11'

/**
GPIO combined wake up interrupt, interrupt flags can be found here GPIO:MIS*/
export const EVTSVT_CPUIRQ2SEL_PUBID_GPIO_COMB: any = '9'

/**
SYSTIM combined interrupt, interrupt flags are found here SYSTIM:MIS*/
export const EVTSVT_CPUIRQ2SEL_PUBID_SYSTIM_COMB: any = '8'

/**
IOC synchronous combined event, controlled by IOC:EVTCFG*/
export const EVTSVT_CPUIRQ2SEL_PUBID_AON_IOC_COMB: any = '7'

/**
AON LPCMP interrupt, controlled by SYS0:LPCMPCFG*/
export const EVTSVT_CPUIRQ2SEL_PUBID_AON_LPMCMP_IRQ: any = '6'

/**
DebugSS combined interrupt, interrupt flags can be found here DBGSS:MIS*/
export const EVTSVT_CPUIRQ2SEL_PUBID_AON_DBG_COMB: any = '5'

/**
AON_RTC event, controlled by the RTC:IMASK setting*/
export const EVTSVT_CPUIRQ2SEL_PUBID_AON_RTC_COMB: any = '4'

/**
CKMD combined interrupt request, interrupt flags can be found here CKMD:MIS*/
export const EVTSVT_CPUIRQ2SEL_PUBID_AON_CKM_COMB: any = '3'

/**
PMU combined interrupt request for BATMON, interrupt flags can be found here PMUD:EVENT*/
export const EVTSVT_CPUIRQ2SEL_PUBID_AON_PMU_COMB: any = '2'

/**
Always inactive*/
export const EVTSVT_CPUIRQ2SEL_PUBID_NONE: any = '0'


// -------- REGISTER CPUIRQ3SEL -------- //

/**
Output Selection for CPU Interrupt CPUIRQ3

*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior*/
export const EVTSVT_CPUIRQ3SEL_RESERVED6: any = '26'
export const EVTSVT_CPUIRQ3SEL_RESERVED6_M: any = '26'
export const EVTSVT_CPUIRQ3SEL_RESERVED6_S: any = '26'
/**
Read/write selection value.

Writing any other value than values defined by a ENUM may result in undefined behavior.*/
export const EVTSVT_CPUIRQ3SEL_PUBID: any = '6'
export const EVTSVT_CPUIRQ3SEL_PUBID_M: any = '6'
export const EVTSVT_CPUIRQ3SEL_PUBID_S: any = '6'
/**
LGPT3 combined interrupt, interrupt flags are found here LGPT3:MIS*/
export const EVTSVT_CPUIRQ3SEL_PUBID_LGPT3_COMB: any = '55'

/**
LGPT2 combined interrupt, interrupt flags are found here LGPT2:MIS*/
export const EVTSVT_CPUIRQ3SEL_PUBID_LGPT2_COMB: any = '49'

/**
Interrupt event from I2C0, interrupt flags can be found here I2C0:MIS*/
export const EVTSVT_CPUIRQ3SEL_PUBID_I2C0_IRQ: any = '24'

/**
UART0 combined interrupt, interrupt flags are found here UART0:MIS*/
export const EVTSVT_CPUIRQ3SEL_PUBID_UART0_COMB: any = '23'

/**
AES accelerator combined interrupt request, interrupt flags can be found here AES:MIS*/
export const EVTSVT_CPUIRQ3SEL_PUBID_AES_COMB: any = '22'

/**
DMA bus error, corresponds to DMA:ERROR.STATUS*/
export const EVTSVT_CPUIRQ3SEL_PUBID_DMA_ERR: any = '21'

/**
DMA combined done interrupt, corresponding flags can be found here DMA:REQDONE*/
export const EVTSVT_CPUIRQ3SEL_PUBID_DMA_DONE_COMB: any = '20'

/**
LGPT1 combined interrupt, interrupt flags are found here LGPT1:MIS*/
export const EVTSVT_CPUIRQ3SEL_PUBID_LGPT1_COMB: any = '19'

/**
LGPT0 combined interrupt, interrupt flags are found here LGPT0:MIS*/
export const EVTSVT_CPUIRQ3SEL_PUBID_LGPT0_COMB: any = '18'

/**
ADC combined interrupt request, interrupt flags can be found here ADC:MIS0*/
export const EVTSVT_CPUIRQ3SEL_PUBID_ADC_COMB: any = '16'

/**
SPI0 combined interrupt request, interrupt flags can be found here SPI0:MIS*/
export const EVTSVT_CPUIRQ3SEL_PUBID_SPI0_COMB: any = '15'

/**
LRFD combined event, interrupt flags can be found here LRFDDBELL:MIS2*/
export const EVTSVT_CPUIRQ3SEL_PUBID_LRFD_IRQ2: any = '14'

/**
LRFD combined event, interrupt flags can be found here LRFDDBELL:MIS1*/
export const EVTSVT_CPUIRQ3SEL_PUBID_LRFD_IRQ1: any = '13'

/**
LRFD combined event, interrupt flags can be found here LRFDDBELL:MIS0*/
export const EVTSVT_CPUIRQ3SEL_PUBID_LRFD_IRQ0: any = '12'

/**
NoWrapper Flash interrupt indicating that the flash operation has completed, interrupt flags can be found here FLASH:MIS*/
export const EVTSVT_CPUIRQ3SEL_PUBID_FLASH_IRQ: any = '11'

/**
GPIO combined wake up interrupt, interrupt flags can be found here GPIO:MIS*/
export const EVTSVT_CPUIRQ3SEL_PUBID_GPIO_COMB: any = '9'

/**
SYSTIM combined interrupt, interrupt flags are found here SYSTIM:MIS*/
export const EVTSVT_CPUIRQ3SEL_PUBID_SYSTIM_COMB: any = '8'

/**
IOC synchronous combined event, controlled by IOC:EVTCFG*/
export const EVTSVT_CPUIRQ3SEL_PUBID_AON_IOC_COMB: any = '7'

/**
AON LPCMP interrupt, controlled by SYS0:LPCMPCFG*/
export const EVTSVT_CPUIRQ3SEL_PUBID_AON_LPMCMP_IRQ: any = '6'

/**
DebugSS combined interrupt, interrupt flags can be found here DBGSS:MIS*/
export const EVTSVT_CPUIRQ3SEL_PUBID_AON_DBG_COMB: any = '5'

/**
AON_RTC event, controlled by the RTC:IMASK setting*/
export const EVTSVT_CPUIRQ3SEL_PUBID_AON_RTC_COMB: any = '4'

/**
CKMD combined interrupt request, interrupt flags can be found here CKMD:MIS*/
export const EVTSVT_CPUIRQ3SEL_PUBID_AON_CKM_COMB: any = '3'

/**
PMU combined interrupt request for BATMON, interrupt flags can be found here PMUD:EVENT*/
export const EVTSVT_CPUIRQ3SEL_PUBID_AON_PMU_COMB: any = '2'

/**
Always inactive*/
export const EVTSVT_CPUIRQ3SEL_PUBID_NONE: any = '0'


// -------- REGISTER CPUIRQ4SEL -------- //

/**
Output Selection for CPU Interrupt CPUIRQ4

*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior*/
export const EVTSVT_CPUIRQ4SEL_RESERVED6: any = '26'
export const EVTSVT_CPUIRQ4SEL_RESERVED6_M: any = '26'
export const EVTSVT_CPUIRQ4SEL_RESERVED6_S: any = '26'
/**
Read/write selection value.

Writing any other value than values defined by a ENUM may result in undefined behavior.*/
export const EVTSVT_CPUIRQ4SEL_PUBID: any = '6'
export const EVTSVT_CPUIRQ4SEL_PUBID_M: any = '6'
export const EVTSVT_CPUIRQ4SEL_PUBID_S: any = '6'
/**
LGPT3 combined interrupt, interrupt flags are found here LGPT3:MIS*/
export const EVTSVT_CPUIRQ4SEL_PUBID_LGPT3_COMB: any = '55'

/**
LGPT2 combined interrupt, interrupt flags are found here LGPT2:MIS*/
export const EVTSVT_CPUIRQ4SEL_PUBID_LGPT2_COMB: any = '49'

/**
Interrupt event from I2C0, interrupt flags can be found here I2C0:MIS*/
export const EVTSVT_CPUIRQ4SEL_PUBID_I2C0_IRQ: any = '24'

/**
UART0 combined interrupt, interrupt flags are found here UART0:MIS*/
export const EVTSVT_CPUIRQ4SEL_PUBID_UART0_COMB: any = '23'

/**
AES accelerator combined interrupt request, interrupt flags can be found here AES:MIS*/
export const EVTSVT_CPUIRQ4SEL_PUBID_AES_COMB: any = '22'

/**
DMA bus error, corresponds to DMA:ERROR.STATUS*/
export const EVTSVT_CPUIRQ4SEL_PUBID_DMA_ERR: any = '21'

/**
DMA combined done interrupt, corresponding flags can be found here DMA:REQDONE*/
export const EVTSVT_CPUIRQ4SEL_PUBID_DMA_DONE_COMB: any = '20'

/**
LGPT1 combined interrupt, interrupt flags are found here LGPT1:MIS*/
export const EVTSVT_CPUIRQ4SEL_PUBID_LGPT1_COMB: any = '19'

/**
LGPT0 combined interrupt, interrupt flags are found here LGPT0:MIS*/
export const EVTSVT_CPUIRQ4SEL_PUBID_LGPT0_COMB: any = '18'

/**
ADC combined interrupt request, interrupt flags can be found here ADC:MIS0*/
export const EVTSVT_CPUIRQ4SEL_PUBID_ADC_COMB: any = '16'

/**
SPI0 combined interrupt request, interrupt flags can be found here SPI0:MIS*/
export const EVTSVT_CPUIRQ4SEL_PUBID_SPI0_COMB: any = '15'

/**
LRFD combined event, interrupt flags can be found here LRFDDBELL:MIS2*/
export const EVTSVT_CPUIRQ4SEL_PUBID_LRFD_IRQ2: any = '14'

/**
LRFD combined event, interrupt flags can be found here LRFDDBELL:MIS1*/
export const EVTSVT_CPUIRQ4SEL_PUBID_LRFD_IRQ1: any = '13'

/**
LRFD combined event, interrupt flags can be found here LRFDDBELL:MIS0*/
export const EVTSVT_CPUIRQ4SEL_PUBID_LRFD_IRQ0: any = '12'

/**
NoWrapper Flash interrupt indicating that the flash operation has completed, interrupt flags can be found here FLASH:MIS*/
export const EVTSVT_CPUIRQ4SEL_PUBID_FLASH_IRQ: any = '11'

/**
GPIO combined wake up interrupt, interrupt flags can be found here GPIO:MIS*/
export const EVTSVT_CPUIRQ4SEL_PUBID_GPIO_COMB: any = '9'

/**
SYSTIM combined interrupt, interrupt flags are found here SYSTIM:MIS*/
export const EVTSVT_CPUIRQ4SEL_PUBID_SYSTIM_COMB: any = '8'

/**
IOC synchronous combined event, controlled by IOC:EVTCFG*/
export const EVTSVT_CPUIRQ4SEL_PUBID_AON_IOC_COMB: any = '7'

/**
AON LPCMP interrupt, controlled by SYS0:LPCMPCFG*/
export const EVTSVT_CPUIRQ4SEL_PUBID_AON_LPMCMP_IRQ: any = '6'

/**
DebugSS combined interrupt, interrupt flags can be found here DBGSS:MIS*/
export const EVTSVT_CPUIRQ4SEL_PUBID_AON_DBG_COMB: any = '5'

/**
AON_RTC event, controlled by the RTC:IMASK setting*/
export const EVTSVT_CPUIRQ4SEL_PUBID_AON_RTC_COMB: any = '4'

/**
CKMD combined interrupt request, interrupt flags can be found here CKMD:MIS*/
export const EVTSVT_CPUIRQ4SEL_PUBID_AON_CKM_COMB: any = '3'

/**
PMU combined interrupt request for BATMON, interrupt flags can be found here PMUD:EVENT*/
export const EVTSVT_CPUIRQ4SEL_PUBID_AON_PMU_COMB: any = '2'

/**
Always inactive*/
export const EVTSVT_CPUIRQ4SEL_PUBID_NONE: any = '0'


// -------- REGISTER CPUIRQ5SEL -------- //

/**
Output Selection for CPU Interrupt CPUIRQ5

*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior*/
export const EVTSVT_CPUIRQ5SEL_RESERVED6: any = '26'
export const EVTSVT_CPUIRQ5SEL_RESERVED6_M: any = '26'
export const EVTSVT_CPUIRQ5SEL_RESERVED6_S: any = '26'
/**
Read only selection value*/
export const EVTSVT_CPUIRQ5SEL_PUBID: any = '6'
export const EVTSVT_CPUIRQ5SEL_PUBID_M: any = '6'
export const EVTSVT_CPUIRQ5SEL_PUBID_S: any = '6'
/**
GPIO combined wake up interrupt, interrupt flags can be found here GPIO:MIS*/
export const EVTSVT_CPUIRQ5SEL_PUBID_GPIO_COMB: any = '9'


// -------- REGISTER CPUIRQ6SEL -------- //

/**
Output Selection for CPU Interrupt CPUIRQ6

*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior*/
export const EVTSVT_CPUIRQ6SEL_RESERVED6: any = '26'
export const EVTSVT_CPUIRQ6SEL_RESERVED6_M: any = '26'
export const EVTSVT_CPUIRQ6SEL_RESERVED6_S: any = '26'
/**
Read only selection value*/
export const EVTSVT_CPUIRQ6SEL_PUBID: any = '6'
export const EVTSVT_CPUIRQ6SEL_PUBID_M: any = '6'
export const EVTSVT_CPUIRQ6SEL_PUBID_S: any = '6'
/**
LRFD combined event, interrupt flags can be found here LRFDDBELL:MIS0*/
export const EVTSVT_CPUIRQ6SEL_PUBID_LRFD_IRQ0: any = '12'


// -------- REGISTER CPUIRQ7SEL -------- //

/**
Output Selection for CPU Interrupt CPUIRQ7

*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior*/
export const EVTSVT_CPUIRQ7SEL_RESERVED6: any = '26'
export const EVTSVT_CPUIRQ7SEL_RESERVED6_M: any = '26'
export const EVTSVT_CPUIRQ7SEL_RESERVED6_S: any = '26'
/**
Read only selection value*/
export const EVTSVT_CPUIRQ7SEL_PUBID: any = '6'
export const EVTSVT_CPUIRQ7SEL_PUBID_M: any = '6'
export const EVTSVT_CPUIRQ7SEL_PUBID_S: any = '6'
/**
LRFD combined event, interrupt flags can be found here LRFDDBELL:MIS1*/
export const EVTSVT_CPUIRQ7SEL_PUBID_LRFD_IRQ1: any = '13'


// -------- REGISTER CPUIRQ8SEL -------- //

/**
Output Selection for CPU Interrupt CPUIRQ8

*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior*/
export const EVTSVT_CPUIRQ8SEL_RESERVED6: any = '26'
export const EVTSVT_CPUIRQ8SEL_RESERVED6_M: any = '26'
export const EVTSVT_CPUIRQ8SEL_RESERVED6_S: any = '26'
/**
Read only selection value*/
export const EVTSVT_CPUIRQ8SEL_PUBID: any = '6'
export const EVTSVT_CPUIRQ8SEL_PUBID_M: any = '6'
export const EVTSVT_CPUIRQ8SEL_PUBID_S: any = '6'
/**
DMA combined done interrupt, corresponding flags can be found here DMA:REQDONE*/
export const EVTSVT_CPUIRQ8SEL_PUBID_DMA_DONE_COMB: any = '20'


// -------- REGISTER CPUIRQ9SEL -------- //

/**
Output Selection for CPU Interrupt CPUIRQ9

*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior*/
export const EVTSVT_CPUIRQ9SEL_RESERVED6: any = '26'
export const EVTSVT_CPUIRQ9SEL_RESERVED6_M: any = '26'
export const EVTSVT_CPUIRQ9SEL_RESERVED6_S: any = '26'
/**
Read only selection value*/
export const EVTSVT_CPUIRQ9SEL_PUBID: any = '6'
export const EVTSVT_CPUIRQ9SEL_PUBID_M: any = '6'
export const EVTSVT_CPUIRQ9SEL_PUBID_S: any = '6'
/**
AES accelerator combined interrupt request, interrupt flags can be found here AES:MIS*/
export const EVTSVT_CPUIRQ9SEL_PUBID_AES_COMB: any = '22'


// -------- REGISTER CPUIRQ10SEL -------- //

/**
Output Selection for CPU Interrupt CPUIRQ10

*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior*/
export const EVTSVT_CPUIRQ10SEL_RESERVED6: any = '26'
export const EVTSVT_CPUIRQ10SEL_RESERVED6_M: any = '26'
export const EVTSVT_CPUIRQ10SEL_RESERVED6_S: any = '26'
/**
Read only selection value*/
export const EVTSVT_CPUIRQ10SEL_PUBID: any = '6'
export const EVTSVT_CPUIRQ10SEL_PUBID_M: any = '6'
export const EVTSVT_CPUIRQ10SEL_PUBID_S: any = '6'
/**
SPI0 combined interrupt request, interrupt flags can be found here SPI0:MIS*/
export const EVTSVT_CPUIRQ10SEL_PUBID_SPI0_COMB: any = '15'


// -------- REGISTER CPUIRQ11SEL -------- //

/**
Output Selection for CPU Interrupt CPUIRQ11

*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior*/
export const EVTSVT_CPUIRQ11SEL_RESERVED6: any = '26'
export const EVTSVT_CPUIRQ11SEL_RESERVED6_M: any = '26'
export const EVTSVT_CPUIRQ11SEL_RESERVED6_S: any = '26'
/**
Read only selection value*/
export const EVTSVT_CPUIRQ11SEL_PUBID: any = '6'
export const EVTSVT_CPUIRQ11SEL_PUBID_M: any = '6'
export const EVTSVT_CPUIRQ11SEL_PUBID_S: any = '6'
/**
UART0 combined interrupt, interrupt flags are found here UART0:MIS*/
export const EVTSVT_CPUIRQ11SEL_PUBID_UART0_COMB: any = '23'


// -------- REGISTER CPUIRQ12SEL -------- //

/**
Output Selection for CPU Interrupt CPUIRQ12

*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior*/
export const EVTSVT_CPUIRQ12SEL_RESERVED6: any = '26'
export const EVTSVT_CPUIRQ12SEL_RESERVED6_M: any = '26'
export const EVTSVT_CPUIRQ12SEL_RESERVED6_S: any = '26'
/**
Read only selection value*/
export const EVTSVT_CPUIRQ12SEL_PUBID: any = '6'
export const EVTSVT_CPUIRQ12SEL_PUBID_M: any = '6'
export const EVTSVT_CPUIRQ12SEL_PUBID_S: any = '6'
/**
Interrupt event from I2C0, interrupt flags can be found here I2C0:MIS*/
export const EVTSVT_CPUIRQ12SEL_PUBID_I2C0_IRQ: any = '24'


// -------- REGISTER CPUIRQ13SEL -------- //

/**
Output Selection for CPU Interrupt CPUIRQ13

*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior*/
export const EVTSVT_CPUIRQ13SEL_RESERVED6: any = '26'
export const EVTSVT_CPUIRQ13SEL_RESERVED6_M: any = '26'
export const EVTSVT_CPUIRQ13SEL_RESERVED6_S: any = '26'
/**
Read only selection value*/
export const EVTSVT_CPUIRQ13SEL_PUBID: any = '6'
export const EVTSVT_CPUIRQ13SEL_PUBID_M: any = '6'
export const EVTSVT_CPUIRQ13SEL_PUBID_S: any = '6'
/**
LGPT0 combined interrupt, interrupt flags are found here LGPT0:MIS*/
export const EVTSVT_CPUIRQ13SEL_PUBID_LGPT0_COMB: any = '18'


// -------- REGISTER CPUIRQ14SEL -------- //

/**
Output Selection for CPU Interrupt CPUIRQ14

*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior*/
export const EVTSVT_CPUIRQ14SEL_RESERVED6: any = '26'
export const EVTSVT_CPUIRQ14SEL_RESERVED6_M: any = '26'
export const EVTSVT_CPUIRQ14SEL_RESERVED6_S: any = '26'
/**
Read only selection value*/
export const EVTSVT_CPUIRQ14SEL_PUBID: any = '6'
export const EVTSVT_CPUIRQ14SEL_PUBID_M: any = '6'
export const EVTSVT_CPUIRQ14SEL_PUBID_S: any = '6'
/**
LGPT1 combined interrupt, interrupt flags are found here LGPT1:MIS*/
export const EVTSVT_CPUIRQ14SEL_PUBID_LGPT1_COMB: any = '19'


// -------- REGISTER CPUIRQ15SEL -------- //

/**
Output Selection for CPU Interrupt CPUIRQ15

*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior*/
export const EVTSVT_CPUIRQ15SEL_RESERVED6: any = '26'
export const EVTSVT_CPUIRQ15SEL_RESERVED6_M: any = '26'
export const EVTSVT_CPUIRQ15SEL_RESERVED6_S: any = '26'
/**
Read only selection value*/
export const EVTSVT_CPUIRQ15SEL_PUBID: any = '6'
export const EVTSVT_CPUIRQ15SEL_PUBID_M: any = '6'
export const EVTSVT_CPUIRQ15SEL_PUBID_S: any = '6'
/**
ADC combined interrupt request, interrupt flags can be found here ADC:MIS0*/
export const EVTSVT_CPUIRQ15SEL_PUBID_ADC_COMB: any = '16'


// -------- REGISTER CPUIRQ16SEL -------- //

/**
Output Selection for CPU Interrupt CPUIRQ16

*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior*/
export const EVTSVT_CPUIRQ16SEL_RESERVED6: any = '26'
export const EVTSVT_CPUIRQ16SEL_RESERVED6_M: any = '26'
export const EVTSVT_CPUIRQ16SEL_RESERVED6_S: any = '26'
/**
Read/write selection value.

Writing any other value than values defined by a ENUM may result in undefined behavior.*/
export const EVTSVT_CPUIRQ16SEL_PUBID: any = '6'
export const EVTSVT_CPUIRQ16SEL_PUBID_M: any = '6'
export const EVTSVT_CPUIRQ16SEL_PUBID_S: any = '6'
/**
LGPT3 ADC trigger event, controlled by LGPT3:ADCTRG setting*/
export const EVTSVT_CPUIRQ16SEL_PUBID_LGPT3_ADC: any = '57'

/**
LGPT3 DMA request event, controlled by LGPT3:DMA setting*/
export const EVTSVT_CPUIRQ16SEL_PUBID_LGPT3_DMA: any = '56'

/**
LGPT3 combined interrupt, interrupt flags are found here LGPT3:MIS*/
export const EVTSVT_CPUIRQ16SEL_PUBID_LGPT3_COMB: any = '55'

/**
LGPT3 compare/capture output event 2, controlled by LGPT3:C2CFG setting*/
export const EVTSVT_CPUIRQ16SEL_PUBID_LGPT3C2: any = '54'

/**
LGPT3 compare/capture output event 1, controlled by LGPT3:C1CFG setting*/
export const EVTSVT_CPUIRQ16SEL_PUBID_LGPT3C1: any = '53'

/**
LGPT3 compare/capture output event 0, controlled by LGPT3:C0CFG setting*/
export const EVTSVT_CPUIRQ16SEL_PUBID_LGPT3C0: any = '52'

/**
LGPT2 ADC trigger event, controlled by LGPT2:ADCTRG setting*/
export const EVTSVT_CPUIRQ16SEL_PUBID_LGPT2_ADC: any = '51'

/**
LGPT2 DMA request event, controlled by LGPT2:DMA setting*/
export const EVTSVT_CPUIRQ16SEL_PUBID_LGPT2_DMA: any = '50'

/**
LGPT2 combined interrupt, interrupt flags are found here LGPT2:MIS*/
export const EVTSVT_CPUIRQ16SEL_PUBID_LGPT2_COMB: any = '49'

/**
LGPT0 compare/capture output event 2, controlled by LGPT2:C2CFG setting*/
export const EVTSVT_CPUIRQ16SEL_PUBID_LGPT2C2: any = '48'

/**
LGPT2 compare/capture output event 1, controlled by LGPT2:C1CFG setting*/
export const EVTSVT_CPUIRQ16SEL_PUBID_LGPT2C1: any = '47'

/**
LGPT2 compare/capture output event 0, controlled by LGPT2:C0CFG setting*/
export const EVTSVT_CPUIRQ16SEL_PUBID_LGPT2C0: any = '46'

/**
LRFD interrupt to SYSTIM, controlled by LRFDDBELL:SYSTIMOEV.SRC2*/
export const EVTSVT_CPUIRQ16SEL_PUBID_LRFD_EVT2: any = '44'

/**
LRFD interrupt to SYSTIM, controlled by LRFDDBELL:SYSTIMOEV.SRC1*/
export const EVTSVT_CPUIRQ16SEL_PUBID_LRFD_EVT1: any = '43'

/**
LRFD interrupt to SYSTIM, controlled by LRFDDBELL:SYSTIMOEV.SRC0*/
export const EVTSVT_CPUIRQ16SEL_PUBID_LRFD_EVT0: any = '42'

/**
LGPT1 ADC trigger event, controlled by LGPT1:ADCTRG setting*/
export const EVTSVT_CPUIRQ16SEL_PUBID_LGPT1_ADC: any = '41'

/**
LGPT1 DMA request event, controlled by LGPT1:DMA setting*/
export const EVTSVT_CPUIRQ16SEL_PUBID_LGPT1_DMA: any = '40'

/**
LGPT1 compare/capture output event 2, controlled by LGPT1:C2CFG setting*/
export const EVTSVT_CPUIRQ16SEL_PUBID_LGPT1C2: any = '39'

/**
LGPT1 compare/capture output event 1, controlled by LGPT1:C1CFG setting*/
export const EVTSVT_CPUIRQ16SEL_PUBID_LGPT1C1: any = '38'

/**
LGPT1 compare/capture output event 0, controlled by LGPT1:C0CFG setting*/
export const EVTSVT_CPUIRQ16SEL_PUBID_LGPT1C0: any = '37'

/**
LGPT0 ADC trigger event, controlled by LGPT0:ADCTRG setting*/
export const EVTSVT_CPUIRQ16SEL_PUBID_LGPT0_ADC: any = '36'

/**
LGPT0 DMA request event, controlled by LGPT0:DMA setting*/
export const EVTSVT_CPUIRQ16SEL_PUBID_LGPT0_DMA: any = '35'

/**
LGPT0 compare/capture output event 2, controlled by LGPT0:C2CFG setting*/
export const EVTSVT_CPUIRQ16SEL_PUBID_LGPT0C2: any = '34'

/**
LGPT0 compare/capture output event 1, controlled by LGPT0:C1CFG setting*/
export const EVTSVT_CPUIRQ16SEL_PUBID_LGPT0C1: any = '33'

/**
LGPT0 compare/capture output event 0, controlled by LGPT0:C0CFG setting*/
export const EVTSVT_CPUIRQ16SEL_PUBID_LGPT0C0: any = '32'

/**
SYSTIM Channel 4 event, event flag is SYSTIM:MIS.EVT4*/
export const EVTSVT_CPUIRQ16SEL_PUBID_SYSTIM4: any = '31'

/**
SYSTIM Channel 3 event, event flag is SYSTIM:MIS.EVT3*/
export const EVTSVT_CPUIRQ16SEL_PUBID_SYSTIM3: any = '30'

/**
SYSTIM Channel 2 event, event flag is SYSTIM:MIS.EVT2*/
export const EVTSVT_CPUIRQ16SEL_PUBID_SYSTIM2: any = '29'

/**
SYSTIM Channel 1 event, event flag is  SYSTIM:MIS.EVT1*/
export const EVTSVT_CPUIRQ16SEL_PUBID_SYSTIM1: any = '28'

/**
SYSTIM Channel 0 event, event flag is SYSTIM:MIS.EVT0*/
export const EVTSVT_CPUIRQ16SEL_PUBID_SYSTIM0: any = '27'

/**
SYSTIM interrupt driven by synchronizing LFTICK signal to SVT clock*/
export const EVTSVT_CPUIRQ16SEL_PUBID_SYSTIM_LT: any = '26'

/**
SYSTIM heartbeat, can be set by SYSTIM:TIMEBIT*/
export const EVTSVT_CPUIRQ16SEL_PUBID_SYSTIM_HB: any = '25'

/**
Interrupt event from I2C0, interrupt flags can be found here I2C0:MIS*/
export const EVTSVT_CPUIRQ16SEL_PUBID_I2C0_IRQ: any = '24'

/**
UART0 combined interrupt, interrupt flags are found here UART0:MIS*/
export const EVTSVT_CPUIRQ16SEL_PUBID_UART0_COMB: any = '23'

/**
AES accelerator combined interrupt request, interrupt flags can be found here AES:MIS*/
export const EVTSVT_CPUIRQ16SEL_PUBID_AES_COMB: any = '22'

/**
DMA bus error, corresponds to DMA:ERROR.STATUS*/
export const EVTSVT_CPUIRQ16SEL_PUBID_DMA_ERR: any = '21'

/**
DMA combined done interrupt, corresponding flags can be found here DMA:REQDONE*/
export const EVTSVT_CPUIRQ16SEL_PUBID_DMA_DONE_COMB: any = '20'

/**
LGPT1 combined interrupt, interrupt flags are found here LGPT1:MIS*/
export const EVTSVT_CPUIRQ16SEL_PUBID_LGPT1_COMB: any = '19'

/**
LGPT0 combined interrupt, interrupt flags are found here LGPT0:MIS*/
export const EVTSVT_CPUIRQ16SEL_PUBID_LGPT0_COMB: any = '18'

/**
ADC general published event, interrupt flags can be found here ADC:MIS1 */
export const EVTSVT_CPUIRQ16SEL_PUBID_ADC_EVT: any = '17'

/**
ADC combined interrupt request, interrupt flags can be found here ADC:MIS0*/
export const EVTSVT_CPUIRQ16SEL_PUBID_ADC_COMB: any = '16'

/**
SPI0 combined interrupt request, interrupt flags can be found here SPI0:MIS*/
export const EVTSVT_CPUIRQ16SEL_PUBID_SPI0_COMB: any = '15'

/**
LRFD combined event, interrupt flags can be found here LRFDDBELL:MIS2*/
export const EVTSVT_CPUIRQ16SEL_PUBID_LRFD_IRQ2: any = '14'

/**
LRFD combined event, interrupt flags can be found here LRFDDBELL:MIS1*/
export const EVTSVT_CPUIRQ16SEL_PUBID_LRFD_IRQ1: any = '13'

/**
LRFD combined event, interrupt flags can be found here LRFDDBELL:MIS0*/
export const EVTSVT_CPUIRQ16SEL_PUBID_LRFD_IRQ0: any = '12'

/**
NoWrapper Flash interrupt indicating that the flash operation has completed, interrupt flags can be found here FLASH:MIS*/
export const EVTSVT_CPUIRQ16SEL_PUBID_FLASH_IRQ: any = '11'

/**
GPIO generic published event, controlled by GPIO:EVTCFG*/
export const EVTSVT_CPUIRQ16SEL_PUBID_GPIO_EVT: any = '10'

/**
GPIO combined wake up interrupt, interrupt flags can be found here GPIO:MIS*/
export const EVTSVT_CPUIRQ16SEL_PUBID_GPIO_COMB: any = '9'

/**
SYSTIM combined interrupt, interrupt flags are found here SYSTIM:MIS*/
export const EVTSVT_CPUIRQ16SEL_PUBID_SYSTIM_COMB: any = '8'

/**
IOC synchronous combined event, controlled by IOC:EVTCFG*/
export const EVTSVT_CPUIRQ16SEL_PUBID_AON_IOC_COMB: any = '7'

/**
AON LPCMP interrupt, controlled by SYS0:LPCMPCFG*/
export const EVTSVT_CPUIRQ16SEL_PUBID_AON_LPMCMP_IRQ: any = '6'

/**
DebugSS combined interrupt, interrupt flags can be found here DBGSS:MIS*/
export const EVTSVT_CPUIRQ16SEL_PUBID_AON_DBG_COMB: any = '5'

/**
AON_RTC event, controlled by the RTC:IMASK setting*/
export const EVTSVT_CPUIRQ16SEL_PUBID_AON_RTC_COMB: any = '4'

/**
CKMD combined interrupt request, interrupt flags can be found here CKMD:MIS*/
export const EVTSVT_CPUIRQ16SEL_PUBID_AON_CKM_COMB: any = '3'

/**
PMU combined interrupt request for BATMON, interrupt flags can be found here PMUD:EVENT*/
export const EVTSVT_CPUIRQ16SEL_PUBID_AON_PMU_COMB: any = '2'

/**
Always inactive*/
export const EVTSVT_CPUIRQ16SEL_PUBID_NONE: any = '0'


// -------- REGISTER CPUIRQ17SEL -------- //

/**
Output Selection for CPU Interrupt CPUIRQ17

*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior*/
export const EVTSVT_CPUIRQ17SEL_RESERVED6: any = '26'
export const EVTSVT_CPUIRQ17SEL_RESERVED6_M: any = '26'
export const EVTSVT_CPUIRQ17SEL_RESERVED6_S: any = '26'
/**
Read only selection value*/
export const EVTSVT_CPUIRQ17SEL_PUBID: any = '6'
export const EVTSVT_CPUIRQ17SEL_PUBID_M: any = '6'
export const EVTSVT_CPUIRQ17SEL_PUBID_S: any = '6'
/**
LGPT2 combined interrupt, interrupt flags are found here LGPT2:MIS*/
export const EVTSVT_CPUIRQ17SEL_PUBID_LGPT2_COMB: any = '49'


// -------- REGISTER CPUIRQ18SEL -------- //

/**
Output Selection for CPU Interrupt CPUIRQ18

*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior*/
export const EVTSVT_CPUIRQ18SEL_RESERVED6: any = '26'
export const EVTSVT_CPUIRQ18SEL_RESERVED6_M: any = '26'
export const EVTSVT_CPUIRQ18SEL_RESERVED6_S: any = '26'
/**
Read only selection value*/
export const EVTSVT_CPUIRQ18SEL_PUBID: any = '6'
export const EVTSVT_CPUIRQ18SEL_PUBID_M: any = '6'
export const EVTSVT_CPUIRQ18SEL_PUBID_S: any = '6'
/**
LGPT3 combined interrupt, interrupt flags are found here LGPT3:MIS*/
export const EVTSVT_CPUIRQ18SEL_PUBID_LGPT3_COMB: any = '55'


// -------- REGISTER SYSTIMC0SEL -------- //

/**
Output Selection for SYSTIMC0

*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior*/
export const EVTSVT_SYSTIMC0SEL_RESERVED6: any = '26'
export const EVTSVT_SYSTIMC0SEL_RESERVED6_M: any = '26'
export const EVTSVT_SYSTIMC0SEL_RESERVED6_S: any = '26'
/**
Read only selection value*/
export const EVTSVT_SYSTIMC0SEL_PUBID: any = '6'
export const EVTSVT_SYSTIMC0SEL_PUBID_M: any = '6'
export const EVTSVT_SYSTIMC0SEL_PUBID_S: any = '6'
/**
AON_RTC event, controlled by the RTC:IMASK setting*/
export const EVTSVT_SYSTIMC0SEL_PUBID_AON_RTC_COMB: any = '4'


// -------- REGISTER SYSTIMC1SEL -------- //

/**
 Output Selection for SYSTIMC1

*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior*/
export const EVTSVT_SYSTIMC1SEL_RESERVED6: any = '26'
export const EVTSVT_SYSTIMC1SEL_RESERVED6_M: any = '26'
export const EVTSVT_SYSTIMC1SEL_RESERVED6_S: any = '26'
/**
Read/write selection value.

Writing any other value than values defined by a ENUM may result in undefined behavior.*/
export const EVTSVT_SYSTIMC1SEL_PUBID: any = '6'
export const EVTSVT_SYSTIMC1SEL_PUBID_M: any = '6'
export const EVTSVT_SYSTIMC1SEL_PUBID_S: any = '6'
/**
LGPT3 ADC trigger event, controlled by LGPT3:ADCTRG setting*/
export const EVTSVT_SYSTIMC1SEL_PUBID_LGPT3_ADC: any = '57'

/**
LGPT3 DMA request event, controlled by LGPT3:DMA setting*/
export const EVTSVT_SYSTIMC1SEL_PUBID_LGPT3_DMA: any = '56'

/**
LGPT3 combined interrupt, interrupt flags are found here LGPT3:MIS*/
export const EVTSVT_SYSTIMC1SEL_PUBID_LGPT3_COMB: any = '55'

/**
LGPT3 compare/capture output event 2, controlled by LGPT3:C2CFG setting*/
export const EVTSVT_SYSTIMC1SEL_PUBID_LGPT3C2: any = '54'

/**
LGPT3 compare/capture output event 1, controlled by LGPT3:C1CFG setting*/
export const EVTSVT_SYSTIMC1SEL_PUBID_LGPT3C1: any = '53'

/**
LGPT3 compare/capture output event 0, controlled by LGPT3:C0CFG setting*/
export const EVTSVT_SYSTIMC1SEL_PUBID_LGPT3C0: any = '52'

/**
LGPT2 ADC trigger event, controlled by LGPT2:ADCTRG setting*/
export const EVTSVT_SYSTIMC1SEL_PUBID_LGPT2_ADC: any = '51'

/**
LGPT2 DMA request event, controlled by LGPT2:DMA setting*/
export const EVTSVT_SYSTIMC1SEL_PUBID_LGPT2_DMA: any = '50'

/**
LGPT2 combined interrupt, interrupt flags are found here LGPT2:MIS*/
export const EVTSVT_SYSTIMC1SEL_PUBID_LGPT2_COMB: any = '49'

/**
LGPT0 compare/capture output event 2, controlled by LGPT2:C2CFG setting*/
export const EVTSVT_SYSTIMC1SEL_PUBID_LGPT2C2: any = '48'

/**
LGPT2 compare/capture output event 1, controlled by LGPT2:C1CFG setting*/
export const EVTSVT_SYSTIMC1SEL_PUBID_LGPT2C1: any = '47'

/**
LGPT2 compare/capture output event 0, controlled by LGPT2:C0CFG setting*/
export const EVTSVT_SYSTIMC1SEL_PUBID_LGPT2C0: any = '46'

/**
LRFD interrupt to SYSTIM, controlled by LRFDDBELL:SYSTIMOEV.SRC2*/
export const EVTSVT_SYSTIMC1SEL_PUBID_LRFD_EVT2: any = '44'

/**
LRFD interrupt to SYSTIM, controlled by LRFDDBELL:SYSTIMOEV.SRC1*/
export const EVTSVT_SYSTIMC1SEL_PUBID_LRFD_EVT1: any = '43'

/**
LRFD interrupt to SYSTIM, controlled by LRFDDBELL:SYSTIMOEV.SRC0*/
export const EVTSVT_SYSTIMC1SEL_PUBID_LRFD_EVT0: any = '42'

/**
LGPT1 ADC trigger event, controlled by LGPT1:ADCTRG setting*/
export const EVTSVT_SYSTIMC1SEL_PUBID_LGPT1_ADC: any = '41'

/**
LGPT1 DMA request event, controlled by LGPT1:DMA setting*/
export const EVTSVT_SYSTIMC1SEL_PUBID_LGPT1_DMA: any = '40'

/**
LGPT1 compare/capture output event 2, controlled by LGPT1:C2CFG setting*/
export const EVTSVT_SYSTIMC1SEL_PUBID_LGPT1C2: any = '39'

/**
LGPT1 compare/capture output event 1, controlled by LGPT1:C1CFG setting*/
export const EVTSVT_SYSTIMC1SEL_PUBID_LGPT1C1: any = '38'

/**
LGPT1 compare/capture output event 0, controlled by LGPT1:C0CFG setting*/
export const EVTSVT_SYSTIMC1SEL_PUBID_LGPT1C0: any = '37'

/**
LGPT0 ADC trigger event, controlled by LGPT0:ADCTRG setting*/
export const EVTSVT_SYSTIMC1SEL_PUBID_LGPT0_ADC: any = '36'

/**
LGPT0 DMA request event, controlled by LGPT0:DMA setting*/
export const EVTSVT_SYSTIMC1SEL_PUBID_LGPT0_DMA: any = '35'

/**
LGPT0 compare/capture output event 2, controlled by LGPT0:C2CFG setting*/
export const EVTSVT_SYSTIMC1SEL_PUBID_LGPT0C2: any = '34'

/**
LGPT0 compare/capture output event 1, controlled by LGPT0:C1CFG setting*/
export const EVTSVT_SYSTIMC1SEL_PUBID_LGPT0C1: any = '33'

/**
LGPT0 compare/capture output event 0, controlled by LGPT0:C0CFG setting*/
export const EVTSVT_SYSTIMC1SEL_PUBID_LGPT0C0: any = '32'

/**
SYSTIM Channel 4 event, event flag is SYSTIM:MIS.EVT4*/
export const EVTSVT_SYSTIMC1SEL_PUBID_SYSTIM4: any = '31'

/**
SYSTIM Channel 3 event, event flag is SYSTIM:MIS.EVT3*/
export const EVTSVT_SYSTIMC1SEL_PUBID_SYSTIM3: any = '30'

/**
SYSTIM Channel 2 event, event flag is SYSTIM:MIS.EVT2*/
export const EVTSVT_SYSTIMC1SEL_PUBID_SYSTIM2: any = '29'

/**
SYSTIM Channel 1 event, event flag is  SYSTIM:MIS.EVT1*/
export const EVTSVT_SYSTIMC1SEL_PUBID_SYSTIM1: any = '28'

/**
SYSTIM Channel 0 event, event flag is SYSTIM:MIS.EVT0*/
export const EVTSVT_SYSTIMC1SEL_PUBID_SYSTIM0: any = '27'

/**
SYSTIM interrupt driven by synchronizing LFTICK signal to SVT clock*/
export const EVTSVT_SYSTIMC1SEL_PUBID_SYSTIM_LT: any = '26'

/**
SYSTIM heartbeat, can be set by SYSTIM:TIMEBIT*/
export const EVTSVT_SYSTIMC1SEL_PUBID_SYSTIM_HB: any = '25'

/**
Interrupt event from I2C0, interrupt flags can be found here I2C0:MIS*/
export const EVTSVT_SYSTIMC1SEL_PUBID_I2C0_IRQ: any = '24'

/**
UART0 combined interrupt, interrupt flags are found here UART0:MIS*/
export const EVTSVT_SYSTIMC1SEL_PUBID_UART0_COMB: any = '23'

/**
AES accelerator combined interrupt request, interrupt flags can be found here AES:MIS*/
export const EVTSVT_SYSTIMC1SEL_PUBID_AES_COMB: any = '22'

/**
DMA bus error, corresponds to DMA:ERROR.STATUS*/
export const EVTSVT_SYSTIMC1SEL_PUBID_DMA_ERR: any = '21'

/**
DMA combined done interrupt, corresponding flags can be found here DMA:REQDONE*/
export const EVTSVT_SYSTIMC1SEL_PUBID_DMA_DONE_COMB: any = '20'

/**
LGPT1 combined interrupt, interrupt flags are found here LGPT1:MIS*/
export const EVTSVT_SYSTIMC1SEL_PUBID_LGPT1_COMB: any = '19'

/**
LGPT0 combined interrupt, interrupt flags are found here LGPT0:MIS*/
export const EVTSVT_SYSTIMC1SEL_PUBID_LGPT0_COMB: any = '18'

/**
ADC general published event, interrupt flags can be found here ADC:MIS1 */
export const EVTSVT_SYSTIMC1SEL_PUBID_ADC_EVT: any = '17'

/**
ADC combined interrupt request, interrupt flags can be found here ADC:MIS0*/
export const EVTSVT_SYSTIMC1SEL_PUBID_ADC_COMB: any = '16'

/**
SPI0 combined interrupt request, interrupt flags can be found here SPI0:MIS*/
export const EVTSVT_SYSTIMC1SEL_PUBID_SPI0_COMB: any = '15'

/**
LRFD combined event, interrupt flags can be found here LRFDDBELL:MIS2*/
export const EVTSVT_SYSTIMC1SEL_PUBID_LRFD_IRQ2: any = '14'

/**
LRFD combined event, interrupt flags can be found here LRFDDBELL:MIS1*/
export const EVTSVT_SYSTIMC1SEL_PUBID_LRFD_IRQ1: any = '13'

/**
LRFD combined event, interrupt flags can be found here LRFDDBELL:MIS0*/
export const EVTSVT_SYSTIMC1SEL_PUBID_LRFD_IRQ0: any = '12'

/**
NoWrapper Flash interrupt indicating that the flash operation has completed, interrupt flags can be found here FLASH:MIS*/
export const EVTSVT_SYSTIMC1SEL_PUBID_FLASH_IRQ: any = '11'

/**
GPIO generic published event, controlled by GPIO:EVTCFG*/
export const EVTSVT_SYSTIMC1SEL_PUBID_GPIO_EVT: any = '10'

/**
GPIO combined wake up interrupt, interrupt flags can be found here GPIO:MIS*/
export const EVTSVT_SYSTIMC1SEL_PUBID_GPIO_COMB: any = '9'

/**
SYSTIM combined interrupt, interrupt flags are found here SYSTIM:MIS*/
export const EVTSVT_SYSTIMC1SEL_PUBID_SYSTIM_COMB: any = '8'

/**
IOC synchronous combined event, controlled by IOC:EVTCFG*/
export const EVTSVT_SYSTIMC1SEL_PUBID_AON_IOC_COMB: any = '7'

/**
AON LPCMP interrupt, controlled by SYS0:LPCMPCFG*/
export const EVTSVT_SYSTIMC1SEL_PUBID_AON_LPMCMP_IRQ: any = '6'

/**
DebugSS combined interrupt, interrupt flags can be found here DBGSS:MIS*/
export const EVTSVT_SYSTIMC1SEL_PUBID_AON_DBG_COMB: any = '5'

/**
AON_RTC event, controlled by the RTC:IMASK setting*/
export const EVTSVT_SYSTIMC1SEL_PUBID_AON_RTC_COMB: any = '4'

/**
CKMD combined interrupt request, interrupt flags can be found here CKMD:MIS*/
export const EVTSVT_SYSTIMC1SEL_PUBID_AON_CKM_COMB: any = '3'

/**
PMU combined interrupt request for BATMON, interrupt flags can be found here PMUD:EVENT*/
export const EVTSVT_SYSTIMC1SEL_PUBID_AON_PMU_COMB: any = '2'

/**
Always inactive*/
export const EVTSVT_SYSTIMC1SEL_PUBID_NONE: any = '0'


// -------- REGISTER SYSTIMC2SEL -------- //

/**
Output Selection for SYSTIMC2

*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior*/
export const EVTSVT_SYSTIMC2SEL_RESERVED6: any = '26'
export const EVTSVT_SYSTIMC2SEL_RESERVED6_M: any = '26'
export const EVTSVT_SYSTIMC2SEL_RESERVED6_S: any = '26'
/**
Read only selection value*/
export const EVTSVT_SYSTIMC2SEL_PUBID: any = '6'
export const EVTSVT_SYSTIMC2SEL_PUBID_M: any = '6'
export const EVTSVT_SYSTIMC2SEL_PUBID_S: any = '6'
/**
LRFD interrupt to SYSTIM, controlled by LRFDDBELL:SYSTIMOEV.SRC0*/
export const EVTSVT_SYSTIMC2SEL_PUBID_LRFD_EVT0: any = '42'


// -------- REGISTER SYSTIMC3SEL -------- //

/**
Output Selection for SYSTIMC3

*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior*/
export const EVTSVT_SYSTIMC3SEL_RESERVED6: any = '26'
export const EVTSVT_SYSTIMC3SEL_RESERVED6_M: any = '26'
export const EVTSVT_SYSTIMC3SEL_RESERVED6_S: any = '26'
/**
Read only selection value*/
export const EVTSVT_SYSTIMC3SEL_PUBID: any = '6'
export const EVTSVT_SYSTIMC3SEL_PUBID_M: any = '6'
export const EVTSVT_SYSTIMC3SEL_PUBID_S: any = '6'
/**
LRFD interrupt to SYSTIM, controlled by LRFDDBELL:SYSTIMOEV.SRC1*/
export const EVTSVT_SYSTIMC3SEL_PUBID_LRFD_EVT1: any = '43'


// -------- REGISTER SYSTIMC4SEL -------- //

/**
Output Selection for SYSTIMC4

*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior*/
export const EVTSVT_SYSTIMC4SEL_RESERVED6: any = '26'
export const EVTSVT_SYSTIMC4SEL_RESERVED6_M: any = '26'
export const EVTSVT_SYSTIMC4SEL_RESERVED6_S: any = '26'
/**
Read only selection value*/
export const EVTSVT_SYSTIMC4SEL_PUBID: any = '6'
export const EVTSVT_SYSTIMC4SEL_PUBID_M: any = '6'
export const EVTSVT_SYSTIMC4SEL_PUBID_S: any = '6'
/**
LRFD interrupt to SYSTIM, controlled by LRFDDBELL:SYSTIMOEV.SRC2*/
export const EVTSVT_SYSTIMC4SEL_PUBID_LRFD_EVT2: any = '44'


// -------- REGISTER ADCTRGSEL -------- //

/**
Output Selection for ADCTRG

*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior*/
export const EVTSVT_ADCTRGSEL_RESERVED6: any = '26'
export const EVTSVT_ADCTRGSEL_RESERVED6_M: any = '26'
export const EVTSVT_ADCTRGSEL_RESERVED6_S: any = '26'
/**
Read/write selection value.

Writing any other value than values defined by a ENUM may result in undefined behavior.*/
export const EVTSVT_ADCTRGSEL_PUBID: any = '6'
export const EVTSVT_ADCTRGSEL_PUBID_M: any = '6'
export const EVTSVT_ADCTRGSEL_PUBID_S: any = '6'
/**
LGPT3 ADC trigger event, controlled by LGPT3:ADCTRG setting*/
export const EVTSVT_ADCTRGSEL_PUBID_LGPT3_ADC: any = '57'

/**
LGPT3 DMA request event, controlled by LGPT3:DMA setting*/
export const EVTSVT_ADCTRGSEL_PUBID_LGPT3_DMA: any = '56'

/**
LGPT3 combined interrupt, interrupt flags are found here LGPT3:MIS*/
export const EVTSVT_ADCTRGSEL_PUBID_LGPT3_COMB: any = '55'

/**
LGPT3 compare/capture output event 2, controlled by LGPT3:C2CFG setting*/
export const EVTSVT_ADCTRGSEL_PUBID_LGPT3C2: any = '54'

/**
LGPT3 compare/capture output event 1, controlled by LGPT3:C1CFG setting*/
export const EVTSVT_ADCTRGSEL_PUBID_LGPT3C1: any = '53'

/**
LGPT3 compare/capture output event 0, controlled by LGPT3:C0CFG setting*/
export const EVTSVT_ADCTRGSEL_PUBID_LGPT3C0: any = '52'

/**
LGPT2 ADC trigger event, controlled by LGPT2:ADCTRG setting*/
export const EVTSVT_ADCTRGSEL_PUBID_LGPT2_ADC: any = '51'

/**
LGPT2 DMA request event, controlled by LGPT2:DMA setting*/
export const EVTSVT_ADCTRGSEL_PUBID_LGPT2_DMA: any = '50'

/**
LGPT2 combined interrupt, interrupt flags are found here LGPT2:MIS*/
export const EVTSVT_ADCTRGSEL_PUBID_LGPT2_COMB: any = '49'

/**
LGPT0 compare/capture output event 2, controlled by LGPT2:C2CFG setting*/
export const EVTSVT_ADCTRGSEL_PUBID_LGPT2C2: any = '48'

/**
LGPT2 compare/capture output event 1, controlled by LGPT2:C1CFG setting*/
export const EVTSVT_ADCTRGSEL_PUBID_LGPT2C1: any = '47'

/**
LGPT2 compare/capture output event 0, controlled by LGPT2:C0CFG setting*/
export const EVTSVT_ADCTRGSEL_PUBID_LGPT2C0: any = '46'

/**
LRFD interrupt to SYSTIM, controlled by LRFDDBELL:SYSTIMOEV.SRC2*/
export const EVTSVT_ADCTRGSEL_PUBID_LRFD_EVT2: any = '44'

/**
LRFD interrupt to SYSTIM, controlled by LRFDDBELL:SYSTIMOEV.SRC1*/
export const EVTSVT_ADCTRGSEL_PUBID_LRFD_EVT1: any = '43'

/**
LRFD interrupt to SYSTIM, controlled by LRFDDBELL:SYSTIMOEV.SRC0*/
export const EVTSVT_ADCTRGSEL_PUBID_LRFD_EVT0: any = '42'

/**
LGPT1 ADC trigger event, controlled by LGPT1:ADCTRG setting*/
export const EVTSVT_ADCTRGSEL_PUBID_LGPT1_ADC: any = '41'

/**
LGPT1 DMA request event, controlled by LGPT1:DMA setting*/
export const EVTSVT_ADCTRGSEL_PUBID_LGPT1_DMA: any = '40'

/**
LGPT1 compare/capture output event 2, controlled by LGPT1:C2CFG setting*/
export const EVTSVT_ADCTRGSEL_PUBID_LGPT1C2: any = '39'

/**
LGPT1 compare/capture output event 1, controlled by LGPT1:C1CFG setting*/
export const EVTSVT_ADCTRGSEL_PUBID_LGPT1C1: any = '38'

/**
LGPT1 compare/capture output event 0, controlled by LGPT1:C0CFG setting*/
export const EVTSVT_ADCTRGSEL_PUBID_LGPT1C0: any = '37'

/**
LGPT0 ADC trigger event, controlled by LGPT0:ADCTRG setting*/
export const EVTSVT_ADCTRGSEL_PUBID_LGPT0_ADC: any = '36'

/**
LGPT0 DMA request event, controlled by LGPT0:DMA setting*/
export const EVTSVT_ADCTRGSEL_PUBID_LGPT0_DMA: any = '35'

/**
LGPT0 compare/capture output event 2, controlled by LGPT0:C2CFG setting*/
export const EVTSVT_ADCTRGSEL_PUBID_LGPT0C2: any = '34'

/**
LGPT0 compare/capture output event 1, controlled by LGPT0:C1CFG setting*/
export const EVTSVT_ADCTRGSEL_PUBID_LGPT0C1: any = '33'

/**
LGPT0 compare/capture output event 0, controlled by LGPT0:C0CFG setting*/
export const EVTSVT_ADCTRGSEL_PUBID_LGPT0C0: any = '32'

/**
SYSTIM Channel 4 event, event flag is SYSTIM:MIS.EVT4*/
export const EVTSVT_ADCTRGSEL_PUBID_SYSTIM4: any = '31'

/**
SYSTIM Channel 3 event, event flag is SYSTIM:MIS.EVT3*/
export const EVTSVT_ADCTRGSEL_PUBID_SYSTIM3: any = '30'

/**
SYSTIM Channel 2 event, event flag is SYSTIM:MIS.EVT2*/
export const EVTSVT_ADCTRGSEL_PUBID_SYSTIM2: any = '29'

/**
SYSTIM Channel 1 event, event flag is  SYSTIM:MIS.EVT1*/
export const EVTSVT_ADCTRGSEL_PUBID_SYSTIM1: any = '28'

/**
SYSTIM Channel 0 event, event flag is SYSTIM:MIS.EVT0*/
export const EVTSVT_ADCTRGSEL_PUBID_SYSTIM0: any = '27'

/**
SYSTIM interrupt driven by synchronizing LFTICK signal to SVT clock*/
export const EVTSVT_ADCTRGSEL_PUBID_SYSTIM_LT: any = '26'

/**
SYSTIM heartbeat, can be set by SYSTIM:TIMEBIT*/
export const EVTSVT_ADCTRGSEL_PUBID_SYSTIM_HB: any = '25'

/**
Interrupt event from I2C0, interrupt flags can be found here I2C0:MIS*/
export const EVTSVT_ADCTRGSEL_PUBID_I2C0_IRQ: any = '24'

/**
UART0 combined interrupt, interrupt flags are found here UART0:MIS*/
export const EVTSVT_ADCTRGSEL_PUBID_UART0_COMB: any = '23'

/**
AES accelerator combined interrupt request, interrupt flags can be found here AES:MIS*/
export const EVTSVT_ADCTRGSEL_PUBID_AES_COMB: any = '22'

/**
DMA bus error, corresponds to DMA:ERROR.STATUS*/
export const EVTSVT_ADCTRGSEL_PUBID_DMA_ERR: any = '21'

/**
DMA combined done interrupt, corresponding flags can be found here DMA:REQDONE*/
export const EVTSVT_ADCTRGSEL_PUBID_DMA_DONE_COMB: any = '20'

/**
LGPT1 combined interrupt, interrupt flags are found here LGPT1:MIS*/
export const EVTSVT_ADCTRGSEL_PUBID_LGPT1_COMB: any = '19'

/**
LGPT0 combined interrupt, interrupt flags are found here LGPT0:MIS*/
export const EVTSVT_ADCTRGSEL_PUBID_LGPT0_COMB: any = '18'

/**
ADC general published event, interrupt flags can be found here ADC:MIS1 */
export const EVTSVT_ADCTRGSEL_PUBID_ADC_EVT: any = '17'

/**
ADC combined interrupt request, interrupt flags can be found here ADC:MIS0*/
export const EVTSVT_ADCTRGSEL_PUBID_ADC_COMB: any = '16'

/**
SPI0 combined interrupt request, interrupt flags can be found here SPI0:MIS*/
export const EVTSVT_ADCTRGSEL_PUBID_SPI0_COMB: any = '15'

/**
LRFD combined event, interrupt flags can be found here LRFDDBELL:MIS2*/
export const EVTSVT_ADCTRGSEL_PUBID_LRFD_IRQ2: any = '14'

/**
LRFD combined event, interrupt flags can be found here LRFDDBELL:MIS1*/
export const EVTSVT_ADCTRGSEL_PUBID_LRFD_IRQ1: any = '13'

/**
LRFD combined event, interrupt flags can be found here LRFDDBELL:MIS0*/
export const EVTSVT_ADCTRGSEL_PUBID_LRFD_IRQ0: any = '12'

/**
NoWrapper Flash interrupt indicating that the flash operation has completed, interrupt flags can be found here FLASH:MIS*/
export const EVTSVT_ADCTRGSEL_PUBID_FLASH_IRQ: any = '11'

/**
GPIO generic published event, controlled by GPIO:EVTCFG*/
export const EVTSVT_ADCTRGSEL_PUBID_GPIO_EVT: any = '10'

/**
GPIO combined wake up interrupt, interrupt flags can be found here GPIO:MIS*/
export const EVTSVT_ADCTRGSEL_PUBID_GPIO_COMB: any = '9'

/**
SYSTIM combined interrupt, interrupt flags are found here SYSTIM:MIS*/
export const EVTSVT_ADCTRGSEL_PUBID_SYSTIM_COMB: any = '8'

/**
IOC synchronous combined event, controlled by IOC:EVTCFG*/
export const EVTSVT_ADCTRGSEL_PUBID_AON_IOC_COMB: any = '7'

/**
AON LPCMP interrupt, controlled by SYS0:LPCMPCFG*/
export const EVTSVT_ADCTRGSEL_PUBID_AON_LPMCMP_IRQ: any = '6'

/**
DebugSS combined interrupt, interrupt flags can be found here DBGSS:MIS*/
export const EVTSVT_ADCTRGSEL_PUBID_AON_DBG_COMB: any = '5'

/**
AON_RTC event, controlled by the RTC:IMASK setting*/
export const EVTSVT_ADCTRGSEL_PUBID_AON_RTC_COMB: any = '4'

/**
CKMD combined interrupt request, interrupt flags can be found here CKMD:MIS*/
export const EVTSVT_ADCTRGSEL_PUBID_AON_CKM_COMB: any = '3'

/**
PMU combined interrupt request for BATMON, interrupt flags can be found here PMUD:EVENT*/
export const EVTSVT_ADCTRGSEL_PUBID_AON_PMU_COMB: any = '2'

/**
Always inactive*/
export const EVTSVT_ADCTRGSEL_PUBID_NONE: any = '0'


// -------- REGISTER LGPTSYNCSEL -------- //

/**
Output Selection for LGPTSYNC

*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior*/
export const EVTSVT_LGPTSYNCSEL_RESERVED6: any = '26'
export const EVTSVT_LGPTSYNCSEL_RESERVED6_M: any = '26'
export const EVTSVT_LGPTSYNCSEL_RESERVED6_S: any = '26'
/**
Read/write selection value.

Writing any other value than values defined by a ENUM may result in undefined behavior.*/
export const EVTSVT_LGPTSYNCSEL_PUBID: any = '6'
export const EVTSVT_LGPTSYNCSEL_PUBID_M: any = '6'
export const EVTSVT_LGPTSYNCSEL_PUBID_S: any = '6'
/**
LGPT3 ADC trigger event, controlled by LGPT3:ADCTRG setting*/
export const EVTSVT_LGPTSYNCSEL_PUBID_LGPT3_ADC: any = '57'

/**
LGPT3 DMA request event, controlled by LGPT3:DMA setting*/
export const EVTSVT_LGPTSYNCSEL_PUBID_LGPT3_DMA: any = '56'

/**
LGPT3 combined interrupt, interrupt flags are found here LGPT3:MIS*/
export const EVTSVT_LGPTSYNCSEL_PUBID_LGPT3_COMB: any = '55'

/**
LGPT3 compare/capture output event 2, controlled by LGPT3:C2CFG setting*/
export const EVTSVT_LGPTSYNCSEL_PUBID_LGPT3C2: any = '54'

/**
LGPT3 compare/capture output event 1, controlled by LGPT3:C1CFG setting*/
export const EVTSVT_LGPTSYNCSEL_PUBID_LGPT3C1: any = '53'

/**
LGPT3 compare/capture output event 0, controlled by LGPT3:C0CFG setting*/
export const EVTSVT_LGPTSYNCSEL_PUBID_LGPT3C0: any = '52'

/**
LGPT2 ADC trigger event, controlled by LGPT2:ADCTRG setting*/
export const EVTSVT_LGPTSYNCSEL_PUBID_LGPT2_ADC: any = '51'

/**
LGPT2 DMA request event, controlled by LGPT2:DMA setting*/
export const EVTSVT_LGPTSYNCSEL_PUBID_LGPT2_DMA: any = '50'

/**
LGPT2 combined interrupt, interrupt flags are found here LGPT2:MIS*/
export const EVTSVT_LGPTSYNCSEL_PUBID_LGPT2_COMB: any = '49'

/**
LGPT0 compare/capture output event 2, controlled by LGPT2:C2CFG setting*/
export const EVTSVT_LGPTSYNCSEL_PUBID_LGPT2C2: any = '48'

/**
LGPT2 compare/capture output event 1, controlled by LGPT2:C1CFG setting*/
export const EVTSVT_LGPTSYNCSEL_PUBID_LGPT2C1: any = '47'

/**
LGPT2 compare/capture output event 0, controlled by LGPT2:C0CFG setting*/
export const EVTSVT_LGPTSYNCSEL_PUBID_LGPT2C0: any = '46'

/**
LRFD interrupt to SYSTIM, controlled by LRFDDBELL:SYSTIMOEV.SRC2*/
export const EVTSVT_LGPTSYNCSEL_PUBID_LRFD_EVT2: any = '44'

/**
LRFD interrupt to SYSTIM, controlled by LRFDDBELL:SYSTIMOEV.SRC1*/
export const EVTSVT_LGPTSYNCSEL_PUBID_LRFD_EVT1: any = '43'

/**
LRFD interrupt to SYSTIM, controlled by LRFDDBELL:SYSTIMOEV.SRC0*/
export const EVTSVT_LGPTSYNCSEL_PUBID_LRFD_EVT0: any = '42'

/**
LGPT1 ADC trigger event, controlled by LGPT1:ADCTRG setting*/
export const EVTSVT_LGPTSYNCSEL_PUBID_LGPT1_ADC: any = '41'

/**
LGPT1 DMA request event, controlled by LGPT1:DMA setting*/
export const EVTSVT_LGPTSYNCSEL_PUBID_LGPT1_DMA: any = '40'

/**
LGPT1 compare/capture output event 2, controlled by LGPT1:C2CFG setting*/
export const EVTSVT_LGPTSYNCSEL_PUBID_LGPT1C2: any = '39'

/**
LGPT1 compare/capture output event 1, controlled by LGPT1:C1CFG setting*/
export const EVTSVT_LGPTSYNCSEL_PUBID_LGPT1C1: any = '38'

/**
LGPT1 compare/capture output event 0, controlled by LGPT1:C0CFG setting*/
export const EVTSVT_LGPTSYNCSEL_PUBID_LGPT1C0: any = '37'

/**
LGPT0 ADC trigger event, controlled by LGPT0:ADCTRG setting*/
export const EVTSVT_LGPTSYNCSEL_PUBID_LGPT0_ADC: any = '36'

/**
LGPT0 DMA request event, controlled by LGPT0:DMA setting*/
export const EVTSVT_LGPTSYNCSEL_PUBID_LGPT0_DMA: any = '35'

/**
LGPT0 compare/capture output event 2, controlled by LGPT0:C2CFG setting*/
export const EVTSVT_LGPTSYNCSEL_PUBID_LGPT0C2: any = '34'

/**
LGPT0 compare/capture output event 1, controlled by LGPT0:C1CFG setting*/
export const EVTSVT_LGPTSYNCSEL_PUBID_LGPT0C1: any = '33'

/**
LGPT0 compare/capture output event 0, controlled by LGPT0:C0CFG setting*/
export const EVTSVT_LGPTSYNCSEL_PUBID_LGPT0C0: any = '32'

/**
SYSTIM Channel 4 event, event flag is SYSTIM:MIS.EVT4*/
export const EVTSVT_LGPTSYNCSEL_PUBID_SYSTIM4: any = '31'

/**
SYSTIM Channel 3 event, event flag is SYSTIM:MIS.EVT3*/
export const EVTSVT_LGPTSYNCSEL_PUBID_SYSTIM3: any = '30'

/**
SYSTIM Channel 2 event, event flag is SYSTIM:MIS.EVT2*/
export const EVTSVT_LGPTSYNCSEL_PUBID_SYSTIM2: any = '29'

/**
SYSTIM Channel 1 event, event flag is  SYSTIM:MIS.EVT1*/
export const EVTSVT_LGPTSYNCSEL_PUBID_SYSTIM1: any = '28'

/**
SYSTIM Channel 0 event, event flag is SYSTIM:MIS.EVT0*/
export const EVTSVT_LGPTSYNCSEL_PUBID_SYSTIM0: any = '27'

/**
SYSTIM interrupt driven by synchronizing LFTICK signal to SVT clock*/
export const EVTSVT_LGPTSYNCSEL_PUBID_SYSTIM_LT: any = '26'

/**
SYSTIM heartbeat, can be set by SYSTIM:TIMEBIT*/
export const EVTSVT_LGPTSYNCSEL_PUBID_SYSTIM_HB: any = '25'

/**
Interrupt event from I2C0, interrupt flags can be found here I2C0:MIS*/
export const EVTSVT_LGPTSYNCSEL_PUBID_I2C0_IRQ: any = '24'

/**
UART0 combined interrupt, interrupt flags are found here UART0:MIS*/
export const EVTSVT_LGPTSYNCSEL_PUBID_UART0_COMB: any = '23'

/**
AES accelerator combined interrupt request, interrupt flags can be found here AES:MIS*/
export const EVTSVT_LGPTSYNCSEL_PUBID_AES_COMB: any = '22'

/**
DMA bus error, corresponds to DMA:ERROR.STATUS*/
export const EVTSVT_LGPTSYNCSEL_PUBID_DMA_ERR: any = '21'

/**
DMA combined done interrupt, corresponding flags can be found here DMA:REQDONE*/
export const EVTSVT_LGPTSYNCSEL_PUBID_DMA_DONE_COMB: any = '20'

/**
LGPT1 combined interrupt, interrupt flags are found here LGPT1:MIS*/
export const EVTSVT_LGPTSYNCSEL_PUBID_LGPT1_COMB: any = '19'

/**
LGPT0 combined interrupt, interrupt flags are found here LGPT0:MIS*/
export const EVTSVT_LGPTSYNCSEL_PUBID_LGPT0_COMB: any = '18'

/**
ADC general published event, interrupt flags can be found here ADC:MIS1 */
export const EVTSVT_LGPTSYNCSEL_PUBID_ADC_EVT: any = '17'

/**
ADC combined interrupt request, interrupt flags can be found here ADC:MIS0*/
export const EVTSVT_LGPTSYNCSEL_PUBID_ADC_COMB: any = '16'

/**
SPI0 combined interrupt request, interrupt flags can be found here SPI0:MIS*/
export const EVTSVT_LGPTSYNCSEL_PUBID_SPI0_COMB: any = '15'

/**
LRFD combined event, interrupt flags can be found here LRFDDBELL:MIS2*/
export const EVTSVT_LGPTSYNCSEL_PUBID_LRFD_IRQ2: any = '14'

/**
LRFD combined event, interrupt flags can be found here LRFDDBELL:MIS1*/
export const EVTSVT_LGPTSYNCSEL_PUBID_LRFD_IRQ1: any = '13'

/**
LRFD combined event, interrupt flags can be found here LRFDDBELL:MIS0*/
export const EVTSVT_LGPTSYNCSEL_PUBID_LRFD_IRQ0: any = '12'

/**
NoWrapper Flash interrupt indicating that the flash operation has completed, interrupt flags can be found here FLASH:MIS*/
export const EVTSVT_LGPTSYNCSEL_PUBID_FLASH_IRQ: any = '11'

/**
GPIO generic published event, controlled by GPIO:EVTCFG*/
export const EVTSVT_LGPTSYNCSEL_PUBID_GPIO_EVT: any = '10'

/**
GPIO combined wake up interrupt, interrupt flags can be found here GPIO:MIS*/
export const EVTSVT_LGPTSYNCSEL_PUBID_GPIO_COMB: any = '9'

/**
SYSTIM combined interrupt, interrupt flags are found here SYSTIM:MIS*/
export const EVTSVT_LGPTSYNCSEL_PUBID_SYSTIM_COMB: any = '8'

/**
IOC synchronous combined event, controlled by IOC:EVTCFG*/
export const EVTSVT_LGPTSYNCSEL_PUBID_AON_IOC_COMB: any = '7'

/**
AON LPCMP interrupt, controlled by SYS0:LPCMPCFG*/
export const EVTSVT_LGPTSYNCSEL_PUBID_AON_LPMCMP_IRQ: any = '6'

/**
DebugSS combined interrupt, interrupt flags can be found here DBGSS:MIS*/
export const EVTSVT_LGPTSYNCSEL_PUBID_AON_DBG_COMB: any = '5'

/**
AON_RTC event, controlled by the RTC:IMASK setting*/
export const EVTSVT_LGPTSYNCSEL_PUBID_AON_RTC_COMB: any = '4'

/**
CKMD combined interrupt request, interrupt flags can be found here CKMD:MIS*/
export const EVTSVT_LGPTSYNCSEL_PUBID_AON_CKM_COMB: any = '3'

/**
PMU combined interrupt request for BATMON, interrupt flags can be found here PMUD:EVENT*/
export const EVTSVT_LGPTSYNCSEL_PUBID_AON_PMU_COMB: any = '2'

/**
Always inactive*/
export const EVTSVT_LGPTSYNCSEL_PUBID_NONE: any = '0'


// -------- REGISTER LGPT0IN0SEL -------- //

/**
Output Selection for LGPT0IN0

*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior*/
export const EVTSVT_LGPT0IN0SEL_RESERVED6: any = '26'
export const EVTSVT_LGPT0IN0SEL_RESERVED6_M: any = '26'
export const EVTSVT_LGPT0IN0SEL_RESERVED6_S: any = '26'
/**
Read/write selection value.

Writing any other value than values defined by a ENUM may result in undefined behavior.*/
export const EVTSVT_LGPT0IN0SEL_PUBID: any = '6'
export const EVTSVT_LGPT0IN0SEL_PUBID_M: any = '6'
export const EVTSVT_LGPT0IN0SEL_PUBID_S: any = '6'
/**
LGPT3 ADC trigger event, controlled by LGPT3:ADCTRG setting*/
export const EVTSVT_LGPT0IN0SEL_PUBID_LGPT3_ADC: any = '57'

/**
LGPT3 DMA request event, controlled by LGPT3:DMA setting*/
export const EVTSVT_LGPT0IN0SEL_PUBID_LGPT3_DMA: any = '56'

/**
LGPT3 combined interrupt, interrupt flags are found here LGPT3:MIS*/
export const EVTSVT_LGPT0IN0SEL_PUBID_LGPT3_COMB: any = '55'

/**
LGPT3 compare/capture output event 2, controlled by LGPT3:C2CFG setting*/
export const EVTSVT_LGPT0IN0SEL_PUBID_LGPT3C2: any = '54'

/**
LGPT3 compare/capture output event 1, controlled by LGPT3:C1CFG setting*/
export const EVTSVT_LGPT0IN0SEL_PUBID_LGPT3C1: any = '53'

/**
LGPT3 compare/capture output event 0, controlled by LGPT3:C0CFG setting*/
export const EVTSVT_LGPT0IN0SEL_PUBID_LGPT3C0: any = '52'

/**
LGPT2 ADC trigger event, controlled by LGPT2:ADCTRG setting*/
export const EVTSVT_LGPT0IN0SEL_PUBID_LGPT2_ADC: any = '51'

/**
LGPT2 DMA request event, controlled by LGPT2:DMA setting*/
export const EVTSVT_LGPT0IN0SEL_PUBID_LGPT2_DMA: any = '50'

/**
LGPT2 combined interrupt, interrupt flags are found here LGPT2:MIS*/
export const EVTSVT_LGPT0IN0SEL_PUBID_LGPT2_COMB: any = '49'

/**
LGPT0 compare/capture output event 2, controlled by LGPT2:C2CFG setting*/
export const EVTSVT_LGPT0IN0SEL_PUBID_LGPT2C2: any = '48'

/**
LGPT2 compare/capture output event 1, controlled by LGPT2:C1CFG setting*/
export const EVTSVT_LGPT0IN0SEL_PUBID_LGPT2C1: any = '47'

/**
LGPT2 compare/capture output event 0, controlled by LGPT2:C0CFG setting*/
export const EVTSVT_LGPT0IN0SEL_PUBID_LGPT2C0: any = '46'

/**
LRFD interrupt to SYSTIM, controlled by LRFDDBELL:SYSTIMOEV.SRC2*/
export const EVTSVT_LGPT0IN0SEL_PUBID_LRFD_EVT2: any = '44'

/**
LRFD interrupt to SYSTIM, controlled by LRFDDBELL:SYSTIMOEV.SRC1*/
export const EVTSVT_LGPT0IN0SEL_PUBID_LRFD_EVT1: any = '43'

/**
LRFD interrupt to SYSTIM, controlled by LRFDDBELL:SYSTIMOEV.SRC0*/
export const EVTSVT_LGPT0IN0SEL_PUBID_LRFD_EVT0: any = '42'

/**
LGPT1 ADC trigger event, controlled by LGPT1:ADCTRG setting*/
export const EVTSVT_LGPT0IN0SEL_PUBID_LGPT1_ADC: any = '41'

/**
LGPT1 DMA request event, controlled by LGPT1:DMA setting*/
export const EVTSVT_LGPT0IN0SEL_PUBID_LGPT1_DMA: any = '40'

/**
LGPT1 compare/capture output event 2, controlled by LGPT1:C2CFG setting*/
export const EVTSVT_LGPT0IN0SEL_PUBID_LGPT1C2: any = '39'

/**
LGPT1 compare/capture output event 1, controlled by LGPT1:C1CFG setting*/
export const EVTSVT_LGPT0IN0SEL_PUBID_LGPT1C1: any = '38'

/**
LGPT1 compare/capture output event 0, controlled by LGPT1:C0CFG setting*/
export const EVTSVT_LGPT0IN0SEL_PUBID_LGPT1C0: any = '37'

/**
LGPT0 ADC trigger event, controlled by LGPT0:ADCTRG setting*/
export const EVTSVT_LGPT0IN0SEL_PUBID_LGPT0_ADC: any = '36'

/**
LGPT0 DMA request event, controlled by LGPT0:DMA setting*/
export const EVTSVT_LGPT0IN0SEL_PUBID_LGPT0_DMA: any = '35'

/**
LGPT0 compare/capture output event 2, controlled by LGPT0:C2CFG setting*/
export const EVTSVT_LGPT0IN0SEL_PUBID_LGPT0C2: any = '34'

/**
LGPT0 compare/capture output event 1, controlled by LGPT0:C1CFG setting*/
export const EVTSVT_LGPT0IN0SEL_PUBID_LGPT0C1: any = '33'

/**
LGPT0 compare/capture output event 0, controlled by LGPT0:C0CFG setting*/
export const EVTSVT_LGPT0IN0SEL_PUBID_LGPT0C0: any = '32'

/**
SYSTIM Channel 4 event, event flag is SYSTIM:MIS.EVT4*/
export const EVTSVT_LGPT0IN0SEL_PUBID_SYSTIM4: any = '31'

/**
SYSTIM Channel 3 event, event flag is SYSTIM:MIS.EVT3*/
export const EVTSVT_LGPT0IN0SEL_PUBID_SYSTIM3: any = '30'

/**
SYSTIM Channel 2 event, event flag is SYSTIM:MIS.EVT2*/
export const EVTSVT_LGPT0IN0SEL_PUBID_SYSTIM2: any = '29'

/**
SYSTIM Channel 1 event, event flag is  SYSTIM:MIS.EVT1*/
export const EVTSVT_LGPT0IN0SEL_PUBID_SYSTIM1: any = '28'

/**
SYSTIM Channel 0 event, event flag is SYSTIM:MIS.EVT0*/
export const EVTSVT_LGPT0IN0SEL_PUBID_SYSTIM0: any = '27'

/**
SYSTIM interrupt driven by synchronizing LFTICK signal to SVT clock*/
export const EVTSVT_LGPT0IN0SEL_PUBID_SYSTIM_LT: any = '26'

/**
SYSTIM heartbeat, can be set by SYSTIM:TIMEBIT*/
export const EVTSVT_LGPT0IN0SEL_PUBID_SYSTIM_HB: any = '25'

/**
Interrupt event from I2C0, interrupt flags can be found here I2C0:MIS*/
export const EVTSVT_LGPT0IN0SEL_PUBID_I2C0_IRQ: any = '24'

/**
UART0 combined interrupt, interrupt flags are found here UART0:MIS*/
export const EVTSVT_LGPT0IN0SEL_PUBID_UART0_COMB: any = '23'

/**
AES accelerator combined interrupt request, interrupt flags can be found here AES:MIS*/
export const EVTSVT_LGPT0IN0SEL_PUBID_AES_COMB: any = '22'

/**
DMA bus error, corresponds to DMA:ERROR.STATUS*/
export const EVTSVT_LGPT0IN0SEL_PUBID_DMA_ERR: any = '21'

/**
DMA combined done interrupt, corresponding flags can be found here DMA:REQDONE*/
export const EVTSVT_LGPT0IN0SEL_PUBID_DMA_DONE_COMB: any = '20'

/**
LGPT1 combined interrupt, interrupt flags are found here LGPT1:MIS*/
export const EVTSVT_LGPT0IN0SEL_PUBID_LGPT1_COMB: any = '19'

/**
LGPT0 combined interrupt, interrupt flags are found here LGPT0:MIS*/
export const EVTSVT_LGPT0IN0SEL_PUBID_LGPT0_COMB: any = '18'

/**
ADC general published event, interrupt flags can be found here ADC:MIS1 */
export const EVTSVT_LGPT0IN0SEL_PUBID_ADC_EVT: any = '17'

/**
ADC combined interrupt request, interrupt flags can be found here ADC:MIS0*/
export const EVTSVT_LGPT0IN0SEL_PUBID_ADC_COMB: any = '16'

/**
SPI0 combined interrupt request, interrupt flags can be found here SPI0:MIS*/
export const EVTSVT_LGPT0IN0SEL_PUBID_SPI0_COMB: any = '15'

/**
LRFD combined event, interrupt flags can be found here LRFDDBELL:MIS2*/
export const EVTSVT_LGPT0IN0SEL_PUBID_LRFD_IRQ2: any = '14'

/**
LRFD combined event, interrupt flags can be found here LRFDDBELL:MIS1*/
export const EVTSVT_LGPT0IN0SEL_PUBID_LRFD_IRQ1: any = '13'

/**
LRFD combined event, interrupt flags can be found here LRFDDBELL:MIS0*/
export const EVTSVT_LGPT0IN0SEL_PUBID_LRFD_IRQ0: any = '12'

/**
NoWrapper Flash interrupt indicating that the flash operation has completed, interrupt flags can be found here FLASH:MIS*/
export const EVTSVT_LGPT0IN0SEL_PUBID_FLASH_IRQ: any = '11'

/**
GPIO generic published event, controlled by GPIO:EVTCFG*/
export const EVTSVT_LGPT0IN0SEL_PUBID_GPIO_EVT: any = '10'

/**
GPIO combined wake up interrupt, interrupt flags can be found here GPIO:MIS*/
export const EVTSVT_LGPT0IN0SEL_PUBID_GPIO_COMB: any = '9'

/**
SYSTIM combined interrupt, interrupt flags are found here SYSTIM:MIS*/
export const EVTSVT_LGPT0IN0SEL_PUBID_SYSTIM_COMB: any = '8'

/**
IOC synchronous combined event, controlled by IOC:EVTCFG*/
export const EVTSVT_LGPT0IN0SEL_PUBID_AON_IOC_COMB: any = '7'

/**
AON LPCMP interrupt, controlled by SYS0:LPCMPCFG*/
export const EVTSVT_LGPT0IN0SEL_PUBID_AON_LPMCMP_IRQ: any = '6'

/**
DebugSS combined interrupt, interrupt flags can be found here DBGSS:MIS*/
export const EVTSVT_LGPT0IN0SEL_PUBID_AON_DBG_COMB: any = '5'

/**
AON_RTC event, controlled by the RTC:IMASK setting*/
export const EVTSVT_LGPT0IN0SEL_PUBID_AON_RTC_COMB: any = '4'

/**
CKMD combined interrupt request, interrupt flags can be found here CKMD:MIS*/
export const EVTSVT_LGPT0IN0SEL_PUBID_AON_CKM_COMB: any = '3'

/**
PMU combined interrupt request for BATMON, interrupt flags can be found here PMUD:EVENT*/
export const EVTSVT_LGPT0IN0SEL_PUBID_AON_PMU_COMB: any = '2'

/**
Always inactive*/
export const EVTSVT_LGPT0IN0SEL_PUBID_NONE: any = '0'


// -------- REGISTER LGPT0IN1SEL -------- //

/**
Output Selection for LGPT0IN1

*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior*/
export const EVTSVT_LGPT0IN1SEL_RESERVED6: any = '26'
export const EVTSVT_LGPT0IN1SEL_RESERVED6_M: any = '26'
export const EVTSVT_LGPT0IN1SEL_RESERVED6_S: any = '26'
/**
Read/write selection value.

Writing any other value than values defined by a ENUM may result in undefined behavior.*/
export const EVTSVT_LGPT0IN1SEL_PUBID: any = '6'
export const EVTSVT_LGPT0IN1SEL_PUBID_M: any = '6'
export const EVTSVT_LGPT0IN1SEL_PUBID_S: any = '6'
/**
LGPT3 ADC trigger event, controlled by LGPT3:ADCTRG setting*/
export const EVTSVT_LGPT0IN1SEL_PUBID_LGPT3_ADC: any = '57'

/**
LGPT3 DMA request event, controlled by LGPT3:DMA setting*/
export const EVTSVT_LGPT0IN1SEL_PUBID_LGPT3_DMA: any = '56'

/**
LGPT3 compare/capture output event 2, controlled by LGPT3:C2CFG setting*/
export const EVTSVT_LGPT0IN1SEL_PUBID_LGPT3C2: any = '54'

/**
LGPT3 compare/capture output event 1, controlled by LGPT3:C1CFG setting*/
export const EVTSVT_LGPT0IN1SEL_PUBID_LGPT3C1: any = '53'

/**
LGPT3 compare/capture output event 0, controlled by LGPT3:C0CFG setting*/
export const EVTSVT_LGPT0IN1SEL_PUBID_LGPT3C0: any = '52'

/**
LGPT2 ADC trigger event, controlled by LGPT2:ADCTRG setting*/
export const EVTSVT_LGPT0IN1SEL_PUBID_LGPT2_ADC: any = '51'

/**
LGPT2 DMA request event, controlled by LGPT2:DMA setting*/
export const EVTSVT_LGPT0IN1SEL_PUBID_LGPT2_DMA: any = '50'

/**
LGPT0 compare/capture output event 2, controlled by LGPT2:C2CFG setting*/
export const EVTSVT_LGPT0IN1SEL_PUBID_LGPT2C2: any = '48'

/**
LGPT2 compare/capture output event 1, controlled by LGPT2:C1CFG setting*/
export const EVTSVT_LGPT0IN1SEL_PUBID_LGPT2C1: any = '47'

/**
LGPT2 compare/capture output event 0, controlled by LGPT2:C0CFG setting*/
export const EVTSVT_LGPT0IN1SEL_PUBID_LGPT2C0: any = '46'

/**
LRFD interrupt to SYSTIM, controlled by LRFDDBELL:SYSTIMOEV.SRC2*/
export const EVTSVT_LGPT0IN1SEL_PUBID_LRFD_EVT2: any = '44'

/**
LRFD interrupt to SYSTIM, controlled by LRFDDBELL:SYSTIMOEV.SRC1*/
export const EVTSVT_LGPT0IN1SEL_PUBID_LRFD_EVT1: any = '43'

/**
LRFD interrupt to SYSTIM, controlled by LRFDDBELL:SYSTIMOEV.SRC0*/
export const EVTSVT_LGPT0IN1SEL_PUBID_LRFD_EVT0: any = '42'

/**
LGPT1 ADC trigger event, controlled by LGPT1:ADCTRG setting*/
export const EVTSVT_LGPT0IN1SEL_PUBID_LGPT1_ADC: any = '41'

/**
LGPT1 DMA request event, controlled by LGPT1:DMA setting*/
export const EVTSVT_LGPT0IN1SEL_PUBID_LGPT1_DMA: any = '40'

/**
LGPT1 compare/capture output event 2, controlled by LGPT1:C2CFG setting*/
export const EVTSVT_LGPT0IN1SEL_PUBID_LGPT1C2: any = '39'

/**
LGPT1 compare/capture output event 1, controlled by LGPT1:C1CFG setting*/
export const EVTSVT_LGPT0IN1SEL_PUBID_LGPT1C1: any = '38'

/**
LGPT1 compare/capture output event 0, controlled by LGPT1:C0CFG setting*/
export const EVTSVT_LGPT0IN1SEL_PUBID_LGPT1C0: any = '37'

/**
LGPT0 ADC trigger event, controlled by LGPT0:ADCTRG setting*/
export const EVTSVT_LGPT0IN1SEL_PUBID_LGPT0_ADC: any = '36'

/**
LGPT0 DMA request event, controlled by LGPT0:DMA setting*/
export const EVTSVT_LGPT0IN1SEL_PUBID_LGPT0_DMA: any = '35'

/**
LGPT0 compare/capture output event 2, controlled by LGPT0:C2CFG setting*/
export const EVTSVT_LGPT0IN1SEL_PUBID_LGPT0C2: any = '34'

/**
LGPT0 compare/capture output event 1, controlled by LGPT0:C1CFG setting*/
export const EVTSVT_LGPT0IN1SEL_PUBID_LGPT0C1: any = '33'

/**
LGPT0 compare/capture output event 0, controlled by LGPT0:C0CFG setting*/
export const EVTSVT_LGPT0IN1SEL_PUBID_LGPT0C0: any = '32'

/**
SYSTIM Channel 4 event, event flag is SYSTIM:MIS.EVT4*/
export const EVTSVT_LGPT0IN1SEL_PUBID_SYSTIM4: any = '31'

/**
SYSTIM Channel 3 event, event flag is SYSTIM:MIS.EVT3*/
export const EVTSVT_LGPT0IN1SEL_PUBID_SYSTIM3: any = '30'

/**
SYSTIM Channel 2 event, event flag is SYSTIM:MIS.EVT2*/
export const EVTSVT_LGPT0IN1SEL_PUBID_SYSTIM2: any = '29'

/**
SYSTIM Channel 1 event, event flag is  SYSTIM:MIS.EVT1*/
export const EVTSVT_LGPT0IN1SEL_PUBID_SYSTIM1: any = '28'

/**
SYSTIM Channel 0 event, event flag is SYSTIM:MIS.EVT0*/
export const EVTSVT_LGPT0IN1SEL_PUBID_SYSTIM0: any = '27'

/**
SYSTIM interrupt driven by synchronizing LFTICK signal to SVT clock*/
export const EVTSVT_LGPT0IN1SEL_PUBID_SYSTIM_LT: any = '26'

/**
SYSTIM heartbeat, can be set by SYSTIM:TIMEBIT*/
export const EVTSVT_LGPT0IN1SEL_PUBID_SYSTIM_HB: any = '25'

/**
ADC general published event, interrupt flags can be found here ADC:MIS1 */
export const EVTSVT_LGPT0IN1SEL_PUBID_ADC_EVT: any = '17'

/**
GPIO generic published event, controlled by GPIO:EVTCFG*/
export const EVTSVT_LGPT0IN1SEL_PUBID_GPIO_EVT: any = '10'

/**
Always inactive*/
export const EVTSVT_LGPT0IN1SEL_PUBID_NONE: any = '0'


// -------- REGISTER LGPT0IN2SEL -------- //

/**
Output Selection for LGPT0IN2

*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior*/
export const EVTSVT_LGPT0IN2SEL_RESERVED6: any = '26'
export const EVTSVT_LGPT0IN2SEL_RESERVED6_M: any = '26'
export const EVTSVT_LGPT0IN2SEL_RESERVED6_S: any = '26'
/**
Read/write selection value.

Writing any other value than values defined by a ENUM may result in undefined behavior.*/
export const EVTSVT_LGPT0IN2SEL_PUBID: any = '6'
export const EVTSVT_LGPT0IN2SEL_PUBID_M: any = '6'
export const EVTSVT_LGPT0IN2SEL_PUBID_S: any = '6'
/**
LGPT3 ADC trigger event, controlled by LGPT3:ADCTRG setting*/
export const EVTSVT_LGPT0IN2SEL_PUBID_LGPT3_ADC: any = '57'

/**
LGPT3 DMA request event, controlled by LGPT3:DMA setting*/
export const EVTSVT_LGPT0IN2SEL_PUBID_LGPT3_DMA: any = '56'

/**
LGPT3 compare/capture output event 2, controlled by LGPT3:C2CFG setting*/
export const EVTSVT_LGPT0IN2SEL_PUBID_LGPT3C2: any = '54'

/**
LGPT3 compare/capture output event 1, controlled by LGPT3:C1CFG setting*/
export const EVTSVT_LGPT0IN2SEL_PUBID_LGPT3C1: any = '53'

/**
LGPT3 compare/capture output event 0, controlled by LGPT3:C0CFG setting*/
export const EVTSVT_LGPT0IN2SEL_PUBID_LGPT3C0: any = '52'

/**
LGPT2 ADC trigger event, controlled by LGPT2:ADCTRG setting*/
export const EVTSVT_LGPT0IN2SEL_PUBID_LGPT2_ADC: any = '51'

/**
LGPT2 DMA request event, controlled by LGPT2:DMA setting*/
export const EVTSVT_LGPT0IN2SEL_PUBID_LGPT2_DMA: any = '50'

/**
LGPT0 compare/capture output event 2, controlled by LGPT2:C2CFG setting*/
export const EVTSVT_LGPT0IN2SEL_PUBID_LGPT2C2: any = '48'

/**
LGPT2 compare/capture output event 1, controlled by LGPT2:C1CFG setting*/
export const EVTSVT_LGPT0IN2SEL_PUBID_LGPT2C1: any = '47'

/**
LGPT2 compare/capture output event 0, controlled by LGPT2:C0CFG setting*/
export const EVTSVT_LGPT0IN2SEL_PUBID_LGPT2C0: any = '46'

/**
LRFD interrupt to SYSTIM, controlled by LRFDDBELL:SYSTIMOEV.SRC2*/
export const EVTSVT_LGPT0IN2SEL_PUBID_LRFD_EVT2: any = '44'

/**
LRFD interrupt to SYSTIM, controlled by LRFDDBELL:SYSTIMOEV.SRC1*/
export const EVTSVT_LGPT0IN2SEL_PUBID_LRFD_EVT1: any = '43'

/**
LRFD interrupt to SYSTIM, controlled by LRFDDBELL:SYSTIMOEV.SRC0*/
export const EVTSVT_LGPT0IN2SEL_PUBID_LRFD_EVT0: any = '42'

/**
LGPT1 ADC trigger event, controlled by LGPT1:ADCTRG setting*/
export const EVTSVT_LGPT0IN2SEL_PUBID_LGPT1_ADC: any = '41'

/**
LGPT1 DMA request event, controlled by LGPT1:DMA setting*/
export const EVTSVT_LGPT0IN2SEL_PUBID_LGPT1_DMA: any = '40'

/**
LGPT1 compare/capture output event 2, controlled by LGPT1:C2CFG setting*/
export const EVTSVT_LGPT0IN2SEL_PUBID_LGPT1C2: any = '39'

/**
LGPT1 compare/capture output event 1, controlled by LGPT1:C1CFG setting*/
export const EVTSVT_LGPT0IN2SEL_PUBID_LGPT1C1: any = '38'

/**
LGPT1 compare/capture output event 0, controlled by LGPT1:C0CFG setting*/
export const EVTSVT_LGPT0IN2SEL_PUBID_LGPT1C0: any = '37'

/**
LGPT0 ADC trigger event, controlled by LGPT0:ADCTRG setting*/
export const EVTSVT_LGPT0IN2SEL_PUBID_LGPT0_ADC: any = '36'

/**
LGPT0 DMA request event, controlled by LGPT0:DMA setting*/
export const EVTSVT_LGPT0IN2SEL_PUBID_LGPT0_DMA: any = '35'

/**
LGPT0 compare/capture output event 2, controlled by LGPT0:C2CFG setting*/
export const EVTSVT_LGPT0IN2SEL_PUBID_LGPT0C2: any = '34'

/**
LGPT0 compare/capture output event 1, controlled by LGPT0:C1CFG setting*/
export const EVTSVT_LGPT0IN2SEL_PUBID_LGPT0C1: any = '33'

/**
LGPT0 compare/capture output event 0, controlled by LGPT0:C0CFG setting*/
export const EVTSVT_LGPT0IN2SEL_PUBID_LGPT0C0: any = '32'

/**
SYSTIM Channel 4 event, event flag is SYSTIM:MIS.EVT4*/
export const EVTSVT_LGPT0IN2SEL_PUBID_SYSTIM4: any = '31'

/**
SYSTIM Channel 3 event, event flag is SYSTIM:MIS.EVT3*/
export const EVTSVT_LGPT0IN2SEL_PUBID_SYSTIM3: any = '30'

/**
SYSTIM Channel 2 event, event flag is SYSTIM:MIS.EVT2*/
export const EVTSVT_LGPT0IN2SEL_PUBID_SYSTIM2: any = '29'

/**
SYSTIM Channel 1 event, event flag is  SYSTIM:MIS.EVT1*/
export const EVTSVT_LGPT0IN2SEL_PUBID_SYSTIM1: any = '28'

/**
SYSTIM Channel 0 event, event flag is SYSTIM:MIS.EVT0*/
export const EVTSVT_LGPT0IN2SEL_PUBID_SYSTIM0: any = '27'

/**
SYSTIM interrupt driven by synchronizing LFTICK signal to SVT clock*/
export const EVTSVT_LGPT0IN2SEL_PUBID_SYSTIM_LT: any = '26'

/**
SYSTIM heartbeat, can be set by SYSTIM:TIMEBIT*/
export const EVTSVT_LGPT0IN2SEL_PUBID_SYSTIM_HB: any = '25'

/**
ADC general published event, interrupt flags can be found here ADC:MIS1 */
export const EVTSVT_LGPT0IN2SEL_PUBID_ADC_EVT: any = '17'

/**
GPIO generic published event, controlled by GPIO:EVTCFG*/
export const EVTSVT_LGPT0IN2SEL_PUBID_GPIO_EVT: any = '10'

/**
Always inactive*/
export const EVTSVT_LGPT0IN2SEL_PUBID_NONE: any = '0'


// -------- REGISTER LGPT0TENSEL -------- //

/**
Output Selection for LGPT0TEN

*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior*/
export const EVTSVT_LGPT0TENSEL_RESERVED6: any = '26'
export const EVTSVT_LGPT0TENSEL_RESERVED6_M: any = '26'
export const EVTSVT_LGPT0TENSEL_RESERVED6_S: any = '26'
/**
Read/write selection value.

Writing any other value than values defined by a ENUM may result in undefined behavior.*/
export const EVTSVT_LGPT0TENSEL_PUBID: any = '6'
export const EVTSVT_LGPT0TENSEL_PUBID_M: any = '6'
export const EVTSVT_LGPT0TENSEL_PUBID_S: any = '6'
/**
LGPT3 ADC trigger event, controlled by LGPT3:ADCTRG setting*/
export const EVTSVT_LGPT0TENSEL_PUBID_LGPT3_ADC: any = '57'

/**
LGPT3 DMA request event, controlled by LGPT3:DMA setting*/
export const EVTSVT_LGPT0TENSEL_PUBID_LGPT3_DMA: any = '56'

/**
LGPT3 compare/capture output event 2, controlled by LGPT3:C2CFG setting*/
export const EVTSVT_LGPT0TENSEL_PUBID_LGPT3C2: any = '54'

/**
LGPT3 compare/capture output event 1, controlled by LGPT3:C1CFG setting*/
export const EVTSVT_LGPT0TENSEL_PUBID_LGPT3C1: any = '53'

/**
LGPT3 compare/capture output event 0, controlled by LGPT3:C0CFG setting*/
export const EVTSVT_LGPT0TENSEL_PUBID_LGPT3C0: any = '52'

/**
LGPT2 ADC trigger event, controlled by LGPT2:ADCTRG setting*/
export const EVTSVT_LGPT0TENSEL_PUBID_LGPT2_ADC: any = '51'

/**
LGPT2 DMA request event, controlled by LGPT2:DMA setting*/
export const EVTSVT_LGPT0TENSEL_PUBID_LGPT2_DMA: any = '50'

/**
LGPT0 compare/capture output event 2, controlled by LGPT2:C2CFG setting*/
export const EVTSVT_LGPT0TENSEL_PUBID_LGPT2C2: any = '48'

/**
LGPT2 compare/capture output event 1, controlled by LGPT2:C1CFG setting*/
export const EVTSVT_LGPT0TENSEL_PUBID_LGPT2C1: any = '47'

/**
LGPT2 compare/capture output event 0, controlled by LGPT2:C0CFG setting*/
export const EVTSVT_LGPT0TENSEL_PUBID_LGPT2C0: any = '46'

/**
LRFD interrupt to SYSTIM, controlled by LRFDDBELL:SYSTIMOEV.SRC2*/
export const EVTSVT_LGPT0TENSEL_PUBID_LRFD_EVT2: any = '44'

/**
LRFD interrupt to SYSTIM, controlled by LRFDDBELL:SYSTIMOEV.SRC1*/
export const EVTSVT_LGPT0TENSEL_PUBID_LRFD_EVT1: any = '43'

/**
LRFD interrupt to SYSTIM, controlled by LRFDDBELL:SYSTIMOEV.SRC0*/
export const EVTSVT_LGPT0TENSEL_PUBID_LRFD_EVT0: any = '42'

/**
LGPT1 ADC trigger event, controlled by LGPT1:ADCTRG setting*/
export const EVTSVT_LGPT0TENSEL_PUBID_LGPT1_ADC: any = '41'

/**
LGPT1 DMA request event, controlled by LGPT1:DMA setting*/
export const EVTSVT_LGPT0TENSEL_PUBID_LGPT1_DMA: any = '40'

/**
LGPT1 compare/capture output event 2, controlled by LGPT1:C2CFG setting*/
export const EVTSVT_LGPT0TENSEL_PUBID_LGPT1C2: any = '39'

/**
LGPT1 compare/capture output event 1, controlled by LGPT1:C1CFG setting*/
export const EVTSVT_LGPT0TENSEL_PUBID_LGPT1C1: any = '38'

/**
LGPT1 compare/capture output event 0, controlled by LGPT1:C0CFG setting*/
export const EVTSVT_LGPT0TENSEL_PUBID_LGPT1C0: any = '37'

/**
LGPT0 ADC trigger event, controlled by LGPT0:ADCTRG setting*/
export const EVTSVT_LGPT0TENSEL_PUBID_LGPT0_ADC: any = '36'

/**
LGPT0 DMA request event, controlled by LGPT0:DMA setting*/
export const EVTSVT_LGPT0TENSEL_PUBID_LGPT0_DMA: any = '35'

/**
LGPT0 compare/capture output event 2, controlled by LGPT0:C2CFG setting*/
export const EVTSVT_LGPT0TENSEL_PUBID_LGPT0C2: any = '34'

/**
LGPT0 compare/capture output event 1, controlled by LGPT0:C1CFG setting*/
export const EVTSVT_LGPT0TENSEL_PUBID_LGPT0C1: any = '33'

/**
LGPT0 compare/capture output event 0, controlled by LGPT0:C0CFG setting*/
export const EVTSVT_LGPT0TENSEL_PUBID_LGPT0C0: any = '32'

/**
SYSTIM Channel 4 event, event flag is SYSTIM:MIS.EVT4*/
export const EVTSVT_LGPT0TENSEL_PUBID_SYSTIM4: any = '31'

/**
SYSTIM Channel 3 event, event flag is SYSTIM:MIS.EVT3*/
export const EVTSVT_LGPT0TENSEL_PUBID_SYSTIM3: any = '30'

/**
SYSTIM Channel 2 event, event flag is SYSTIM:MIS.EVT2*/
export const EVTSVT_LGPT0TENSEL_PUBID_SYSTIM2: any = '29'

/**
SYSTIM Channel 1 event, event flag is  SYSTIM:MIS.EVT1*/
export const EVTSVT_LGPT0TENSEL_PUBID_SYSTIM1: any = '28'

/**
SYSTIM Channel 0 event, event flag is SYSTIM:MIS.EVT0*/
export const EVTSVT_LGPT0TENSEL_PUBID_SYSTIM0: any = '27'

/**
SYSTIM interrupt driven by synchronizing LFTICK signal to SVT clock*/
export const EVTSVT_LGPT0TENSEL_PUBID_SYSTIM_LT: any = '26'

/**
SYSTIM heartbeat, can be set by SYSTIM:TIMEBIT*/
export const EVTSVT_LGPT0TENSEL_PUBID_SYSTIM_HB: any = '25'

/**
ADC general published event, interrupt flags can be found here ADC:MIS1 */
export const EVTSVT_LGPT0TENSEL_PUBID_ADC_EVT: any = '17'

/**
GPIO generic published event, controlled by GPIO:EVTCFG*/
export const EVTSVT_LGPT0TENSEL_PUBID_GPIO_EVT: any = '10'

/**
Always inactive*/
export const EVTSVT_LGPT0TENSEL_PUBID_NONE: any = '0'


// -------- REGISTER LGPT1IN0SEL -------- //

/**
Output Selection for LGPT1IN0

*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior*/
export const EVTSVT_LGPT1IN0SEL_RESERVED6: any = '26'
export const EVTSVT_LGPT1IN0SEL_RESERVED6_M: any = '26'
export const EVTSVT_LGPT1IN0SEL_RESERVED6_S: any = '26'
/**
Read/write selection value.

Writing any other value than values defined by a ENUM may result in undefined behavior.*/
export const EVTSVT_LGPT1IN0SEL_PUBID: any = '6'
export const EVTSVT_LGPT1IN0SEL_PUBID_M: any = '6'
export const EVTSVT_LGPT1IN0SEL_PUBID_S: any = '6'
/**
LGPT3 ADC trigger event, controlled by LGPT3:ADCTRG setting*/
export const EVTSVT_LGPT1IN0SEL_PUBID_LGPT3_ADC: any = '57'

/**
LGPT3 DMA request event, controlled by LGPT3:DMA setting*/
export const EVTSVT_LGPT1IN0SEL_PUBID_LGPT3_DMA: any = '56'

/**
LGPT3 combined interrupt, interrupt flags are found here LGPT3:MIS*/
export const EVTSVT_LGPT1IN0SEL_PUBID_LGPT3_COMB: any = '55'

/**
LGPT3 compare/capture output event 2, controlled by LGPT3:C2CFG setting*/
export const EVTSVT_LGPT1IN0SEL_PUBID_LGPT3C2: any = '54'

/**
LGPT3 compare/capture output event 1, controlled by LGPT3:C1CFG setting*/
export const EVTSVT_LGPT1IN0SEL_PUBID_LGPT3C1: any = '53'

/**
LGPT3 compare/capture output event 0, controlled by LGPT3:C0CFG setting*/
export const EVTSVT_LGPT1IN0SEL_PUBID_LGPT3C0: any = '52'

/**
LGPT2 ADC trigger event, controlled by LGPT2:ADCTRG setting*/
export const EVTSVT_LGPT1IN0SEL_PUBID_LGPT2_ADC: any = '51'

/**
LGPT2 DMA request event, controlled by LGPT2:DMA setting*/
export const EVTSVT_LGPT1IN0SEL_PUBID_LGPT2_DMA: any = '50'

/**
LGPT2 combined interrupt, interrupt flags are found here LGPT2:MIS*/
export const EVTSVT_LGPT1IN0SEL_PUBID_LGPT2_COMB: any = '49'

/**
LGPT0 compare/capture output event 2, controlled by LGPT2:C2CFG setting*/
export const EVTSVT_LGPT1IN0SEL_PUBID_LGPT2C2: any = '48'

/**
LGPT2 compare/capture output event 1, controlled by LGPT2:C1CFG setting*/
export const EVTSVT_LGPT1IN0SEL_PUBID_LGPT2C1: any = '47'

/**
LGPT2 compare/capture output event 0, controlled by LGPT2:C0CFG setting*/
export const EVTSVT_LGPT1IN0SEL_PUBID_LGPT2C0: any = '46'

/**
LRFD interrupt to SYSTIM, controlled by LRFDDBELL:SYSTIMOEV.SRC2*/
export const EVTSVT_LGPT1IN0SEL_PUBID_LRFD_EVT2: any = '44'

/**
LRFD interrupt to SYSTIM, controlled by LRFDDBELL:SYSTIMOEV.SRC1*/
export const EVTSVT_LGPT1IN0SEL_PUBID_LRFD_EVT1: any = '43'

/**
LRFD interrupt to SYSTIM, controlled by LRFDDBELL:SYSTIMOEV.SRC0*/
export const EVTSVT_LGPT1IN0SEL_PUBID_LRFD_EVT0: any = '42'

/**
LGPT1 ADC trigger event, controlled by LGPT1:ADCTRG setting*/
export const EVTSVT_LGPT1IN0SEL_PUBID_LGPT1_ADC: any = '41'

/**
LGPT1 DMA request event, controlled by LGPT1:DMA setting*/
export const EVTSVT_LGPT1IN0SEL_PUBID_LGPT1_DMA: any = '40'

/**
LGPT1 compare/capture output event 2, controlled by LGPT1:C2CFG setting*/
export const EVTSVT_LGPT1IN0SEL_PUBID_LGPT1C2: any = '39'

/**
LGPT1 compare/capture output event 1, controlled by LGPT1:C1CFG setting*/
export const EVTSVT_LGPT1IN0SEL_PUBID_LGPT1C1: any = '38'

/**
LGPT1 compare/capture output event 0, controlled by LGPT1:C0CFG setting*/
export const EVTSVT_LGPT1IN0SEL_PUBID_LGPT1C0: any = '37'

/**
LGPT0 ADC trigger event, controlled by LGPT0:ADCTRG setting*/
export const EVTSVT_LGPT1IN0SEL_PUBID_LGPT0_ADC: any = '36'

/**
LGPT0 DMA request event, controlled by LGPT0:DMA setting*/
export const EVTSVT_LGPT1IN0SEL_PUBID_LGPT0_DMA: any = '35'

/**
LGPT0 compare/capture output event 2, controlled by LGPT0:C2CFG setting*/
export const EVTSVT_LGPT1IN0SEL_PUBID_LGPT0C2: any = '34'

/**
LGPT0 compare/capture output event 1, controlled by LGPT0:C1CFG setting*/
export const EVTSVT_LGPT1IN0SEL_PUBID_LGPT0C1: any = '33'

/**
LGPT0 compare/capture output event 0, controlled by LGPT0:C0CFG setting*/
export const EVTSVT_LGPT1IN0SEL_PUBID_LGPT0C0: any = '32'

/**
SYSTIM Channel 4 event, event flag is SYSTIM:MIS.EVT4*/
export const EVTSVT_LGPT1IN0SEL_PUBID_SYSTIM4: any = '31'

/**
SYSTIM Channel 3 event, event flag is SYSTIM:MIS.EVT3*/
export const EVTSVT_LGPT1IN0SEL_PUBID_SYSTIM3: any = '30'

/**
SYSTIM Channel 2 event, event flag is SYSTIM:MIS.EVT2*/
export const EVTSVT_LGPT1IN0SEL_PUBID_SYSTIM2: any = '29'

/**
SYSTIM Channel 1 event, event flag is  SYSTIM:MIS.EVT1*/
export const EVTSVT_LGPT1IN0SEL_PUBID_SYSTIM1: any = '28'

/**
SYSTIM Channel 0 event, event flag is SYSTIM:MIS.EVT0*/
export const EVTSVT_LGPT1IN0SEL_PUBID_SYSTIM0: any = '27'

/**
SYSTIM interrupt driven by synchronizing LFTICK signal to SVT clock*/
export const EVTSVT_LGPT1IN0SEL_PUBID_SYSTIM_LT: any = '26'

/**
SYSTIM heartbeat, can be set by SYSTIM:TIMEBIT*/
export const EVTSVT_LGPT1IN0SEL_PUBID_SYSTIM_HB: any = '25'

/**
Interrupt event from I2C0, interrupt flags can be found here I2C0:MIS*/
export const EVTSVT_LGPT1IN0SEL_PUBID_I2C0_IRQ: any = '24'

/**
UART0 combined interrupt, interrupt flags are found here UART0:MIS*/
export const EVTSVT_LGPT1IN0SEL_PUBID_UART0_COMB: any = '23'

/**
AES accelerator combined interrupt request, interrupt flags can be found here AES:MIS*/
export const EVTSVT_LGPT1IN0SEL_PUBID_AES_COMB: any = '22'

/**
DMA bus error, corresponds to DMA:ERROR.STATUS*/
export const EVTSVT_LGPT1IN0SEL_PUBID_DMA_ERR: any = '21'

/**
DMA combined done interrupt, corresponding flags can be found here DMA:REQDONE*/
export const EVTSVT_LGPT1IN0SEL_PUBID_DMA_DONE_COMB: any = '20'

/**
LGPT1 combined interrupt, interrupt flags are found here LGPT1:MIS*/
export const EVTSVT_LGPT1IN0SEL_PUBID_LGPT1_COMB: any = '19'

/**
LGPT0 combined interrupt, interrupt flags are found here LGPT0:MIS*/
export const EVTSVT_LGPT1IN0SEL_PUBID_LGPT0_COMB: any = '18'

/**
ADC general published event, interrupt flags can be found here ADC:MIS1 */
export const EVTSVT_LGPT1IN0SEL_PUBID_ADC_EVT: any = '17'

/**
ADC combined interrupt request, interrupt flags can be found here ADC:MIS0*/
export const EVTSVT_LGPT1IN0SEL_PUBID_ADC_COMB: any = '16'

/**
SPI0 combined interrupt request, interrupt flags can be found here SPI0:MIS*/
export const EVTSVT_LGPT1IN0SEL_PUBID_SPI0_COMB: any = '15'

/**
LRFD combined event, interrupt flags can be found here LRFDDBELL:MIS2*/
export const EVTSVT_LGPT1IN0SEL_PUBID_LRFD_IRQ2: any = '14'

/**
LRFD combined event, interrupt flags can be found here LRFDDBELL:MIS1*/
export const EVTSVT_LGPT1IN0SEL_PUBID_LRFD_IRQ1: any = '13'

/**
LRFD combined event, interrupt flags can be found here LRFDDBELL:MIS0*/
export const EVTSVT_LGPT1IN0SEL_PUBID_LRFD_IRQ0: any = '12'

/**
NoWrapper Flash interrupt indicating that the flash operation has completed, interrupt flags can be found here FLASH:MIS*/
export const EVTSVT_LGPT1IN0SEL_PUBID_FLASH_IRQ: any = '11'

/**
GPIO generic published event, controlled by GPIO:EVTCFG*/
export const EVTSVT_LGPT1IN0SEL_PUBID_GPIO_EVT: any = '10'

/**
GPIO combined wake up interrupt, interrupt flags can be found here GPIO:MIS*/
export const EVTSVT_LGPT1IN0SEL_PUBID_GPIO_COMB: any = '9'

/**
SYSTIM combined interrupt, interrupt flags are found here SYSTIM:MIS*/
export const EVTSVT_LGPT1IN0SEL_PUBID_SYSTIM_COMB: any = '8'

/**
IOC synchronous combined event, controlled by IOC:EVTCFG*/
export const EVTSVT_LGPT1IN0SEL_PUBID_AON_IOC_COMB: any = '7'

/**
AON LPCMP interrupt, controlled by SYS0:LPCMPCFG*/
export const EVTSVT_LGPT1IN0SEL_PUBID_AON_LPMCMP_IRQ: any = '6'

/**
DebugSS combined interrupt, interrupt flags can be found here DBGSS:MIS*/
export const EVTSVT_LGPT1IN0SEL_PUBID_AON_DBG_COMB: any = '5'

/**
AON_RTC event, controlled by the RTC:IMASK setting*/
export const EVTSVT_LGPT1IN0SEL_PUBID_AON_RTC_COMB: any = '4'

/**
CKMD combined interrupt request, interrupt flags can be found here CKMD:MIS*/
export const EVTSVT_LGPT1IN0SEL_PUBID_AON_CKM_COMB: any = '3'

/**
PMU combined interrupt request for BATMON, interrupt flags can be found here PMUD:EVENT*/
export const EVTSVT_LGPT1IN0SEL_PUBID_AON_PMU_COMB: any = '2'

/**
Always inactive*/
export const EVTSVT_LGPT1IN0SEL_PUBID_NONE: any = '0'


// -------- REGISTER LGPT1IN1SEL -------- //

/**
Output Selection for LGPT1IN1

*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior*/
export const EVTSVT_LGPT1IN1SEL_RESERVED6: any = '26'
export const EVTSVT_LGPT1IN1SEL_RESERVED6_M: any = '26'
export const EVTSVT_LGPT1IN1SEL_RESERVED6_S: any = '26'
/**
Read/write selection value.

Writing any other value than values defined by a ENUM may result in undefined behavior.*/
export const EVTSVT_LGPT1IN1SEL_PUBID: any = '6'
export const EVTSVT_LGPT1IN1SEL_PUBID_M: any = '6'
export const EVTSVT_LGPT1IN1SEL_PUBID_S: any = '6'
/**
LGPT3 ADC trigger event, controlled by LGPT3:ADCTRG setting*/
export const EVTSVT_LGPT1IN1SEL_PUBID_LGPT3_ADC: any = '57'

/**
LGPT3 DMA request event, controlled by LGPT3:DMA setting*/
export const EVTSVT_LGPT1IN1SEL_PUBID_LGPT3_DMA: any = '56'

/**
LGPT3 compare/capture output event 2, controlled by LGPT3:C2CFG setting*/
export const EVTSVT_LGPT1IN1SEL_PUBID_LGPT3C2: any = '54'

/**
LGPT3 compare/capture output event 1, controlled by LGPT3:C1CFG setting*/
export const EVTSVT_LGPT1IN1SEL_PUBID_LGPT3C1: any = '53'

/**
LGPT3 compare/capture output event 0, controlled by LGPT3:C0CFG setting*/
export const EVTSVT_LGPT1IN1SEL_PUBID_LGPT3C0: any = '52'

/**
LGPT2 ADC trigger event, controlled by LGPT2:ADCTRG setting*/
export const EVTSVT_LGPT1IN1SEL_PUBID_LGPT2_ADC: any = '51'

/**
LGPT2 DMA request event, controlled by LGPT2:DMA setting*/
export const EVTSVT_LGPT1IN1SEL_PUBID_LGPT2_DMA: any = '50'

/**
LGPT0 compare/capture output event 2, controlled by LGPT2:C2CFG setting*/
export const EVTSVT_LGPT1IN1SEL_PUBID_LGPT2C2: any = '48'

/**
LGPT2 compare/capture output event 1, controlled by LGPT2:C1CFG setting*/
export const EVTSVT_LGPT1IN1SEL_PUBID_LGPT2C1: any = '47'

/**
LGPT2 compare/capture output event 0, controlled by LGPT2:C0CFG setting*/
export const EVTSVT_LGPT1IN1SEL_PUBID_LGPT2C0: any = '46'

/**
LRFD interrupt to SYSTIM, controlled by LRFDDBELL:SYSTIMOEV.SRC2*/
export const EVTSVT_LGPT1IN1SEL_PUBID_LRFD_EVT2: any = '44'

/**
LRFD interrupt to SYSTIM, controlled by LRFDDBELL:SYSTIMOEV.SRC1*/
export const EVTSVT_LGPT1IN1SEL_PUBID_LRFD_EVT1: any = '43'

/**
LRFD interrupt to SYSTIM, controlled by LRFDDBELL:SYSTIMOEV.SRC0*/
export const EVTSVT_LGPT1IN1SEL_PUBID_LRFD_EVT0: any = '42'

/**
LGPT1 ADC trigger event, controlled by LGPT1:ADCTRG setting*/
export const EVTSVT_LGPT1IN1SEL_PUBID_LGPT1_ADC: any = '41'

/**
LGPT1 DMA request event, controlled by LGPT1:DMA setting*/
export const EVTSVT_LGPT1IN1SEL_PUBID_LGPT1_DMA: any = '40'

/**
LGPT1 compare/capture output event 2, controlled by LGPT1:C2CFG setting*/
export const EVTSVT_LGPT1IN1SEL_PUBID_LGPT1C2: any = '39'

/**
LGPT1 compare/capture output event 1, controlled by LGPT1:C1CFG setting*/
export const EVTSVT_LGPT1IN1SEL_PUBID_LGPT1C1: any = '38'

/**
LGPT1 compare/capture output event 0, controlled by LGPT1:C0CFG setting*/
export const EVTSVT_LGPT1IN1SEL_PUBID_LGPT1C0: any = '37'

/**
LGPT0 ADC trigger event, controlled by LGPT0:ADCTRG setting*/
export const EVTSVT_LGPT1IN1SEL_PUBID_LGPT0_ADC: any = '36'

/**
LGPT0 DMA request event, controlled by LGPT0:DMA setting*/
export const EVTSVT_LGPT1IN1SEL_PUBID_LGPT0_DMA: any = '35'

/**
LGPT0 compare/capture output event 2, controlled by LGPT0:C2CFG setting*/
export const EVTSVT_LGPT1IN1SEL_PUBID_LGPT0C2: any = '34'

/**
LGPT0 compare/capture output event 1, controlled by LGPT0:C1CFG setting*/
export const EVTSVT_LGPT1IN1SEL_PUBID_LGPT0C1: any = '33'

/**
LGPT0 compare/capture output event 0, controlled by LGPT0:C0CFG setting*/
export const EVTSVT_LGPT1IN1SEL_PUBID_LGPT0C0: any = '32'

/**
SYSTIM Channel 4 event, event flag is SYSTIM:MIS.EVT4*/
export const EVTSVT_LGPT1IN1SEL_PUBID_SYSTIM4: any = '31'

/**
SYSTIM Channel 3 event, event flag is SYSTIM:MIS.EVT3*/
export const EVTSVT_LGPT1IN1SEL_PUBID_SYSTIM3: any = '30'

/**
SYSTIM Channel 2 event, event flag is SYSTIM:MIS.EVT2*/
export const EVTSVT_LGPT1IN1SEL_PUBID_SYSTIM2: any = '29'

/**
SYSTIM Channel 1 event, event flag is  SYSTIM:MIS.EVT1*/
export const EVTSVT_LGPT1IN1SEL_PUBID_SYSTIM1: any = '28'

/**
SYSTIM Channel 0 event, event flag is SYSTIM:MIS.EVT0*/
export const EVTSVT_LGPT1IN1SEL_PUBID_SYSTIM0: any = '27'

/**
SYSTIM interrupt driven by synchronizing LFTICK signal to SVT clock*/
export const EVTSVT_LGPT1IN1SEL_PUBID_SYSTIM_LT: any = '26'

/**
SYSTIM heartbeat, can be set by SYSTIM:TIMEBIT*/
export const EVTSVT_LGPT1IN1SEL_PUBID_SYSTIM_HB: any = '25'

/**
ADC general published event, interrupt flags can be found here ADC:MIS1 */
export const EVTSVT_LGPT1IN1SEL_PUBID_ADC_EVT: any = '17'

/**
GPIO generic published event, controlled by GPIO:EVTCFG*/
export const EVTSVT_LGPT1IN1SEL_PUBID_GPIO_EVT: any = '10'

/**
Always inactive*/
export const EVTSVT_LGPT1IN1SEL_PUBID_NONE: any = '0'


// -------- REGISTER LGPT1IN2SEL -------- //

/**
Output Selection for LGPT1IN2

*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior*/
export const EVTSVT_LGPT1IN2SEL_RESERVED6: any = '26'
export const EVTSVT_LGPT1IN2SEL_RESERVED6_M: any = '26'
export const EVTSVT_LGPT1IN2SEL_RESERVED6_S: any = '26'
/**
Read/write selection value.

Writing any other value than values defined by a ENUM may result in undefined behavior.*/
export const EVTSVT_LGPT1IN2SEL_PUBID: any = '6'
export const EVTSVT_LGPT1IN2SEL_PUBID_M: any = '6'
export const EVTSVT_LGPT1IN2SEL_PUBID_S: any = '6'
/**
LGPT3 ADC trigger event, controlled by LGPT3:ADCTRG setting*/
export const EVTSVT_LGPT1IN2SEL_PUBID_LGPT3_ADC: any = '57'

/**
LGPT3 DMA request event, controlled by LGPT3:DMA setting*/
export const EVTSVT_LGPT1IN2SEL_PUBID_LGPT3_DMA: any = '56'

/**
LGPT3 compare/capture output event 2, controlled by LGPT3:C2CFG setting*/
export const EVTSVT_LGPT1IN2SEL_PUBID_LGPT3C2: any = '54'

/**
LGPT3 compare/capture output event 1, controlled by LGPT3:C1CFG setting*/
export const EVTSVT_LGPT1IN2SEL_PUBID_LGPT3C1: any = '53'

/**
LGPT3 compare/capture output event 0, controlled by LGPT3:C0CFG setting*/
export const EVTSVT_LGPT1IN2SEL_PUBID_LGPT3C0: any = '52'

/**
LGPT2 ADC trigger event, controlled by LGPT2:ADCTRG setting*/
export const EVTSVT_LGPT1IN2SEL_PUBID_LGPT2_ADC: any = '51'

/**
LGPT2 DMA request event, controlled by LGPT2:DMA setting*/
export const EVTSVT_LGPT1IN2SEL_PUBID_LGPT2_DMA: any = '50'

/**
LGPT0 compare/capture output event 2, controlled by LGPT2:C2CFG setting*/
export const EVTSVT_LGPT1IN2SEL_PUBID_LGPT2C2: any = '48'

/**
LGPT2 compare/capture output event 1, controlled by LGPT2:C1CFG setting*/
export const EVTSVT_LGPT1IN2SEL_PUBID_LGPT2C1: any = '47'

/**
LGPT2 compare/capture output event 0, controlled by LGPT2:C0CFG setting*/
export const EVTSVT_LGPT1IN2SEL_PUBID_LGPT2C0: any = '46'

/**
LRFD interrupt to SYSTIM, controlled by LRFDDBELL:SYSTIMOEV.SRC2*/
export const EVTSVT_LGPT1IN2SEL_PUBID_LRFD_EVT2: any = '44'

/**
LRFD interrupt to SYSTIM, controlled by LRFDDBELL:SYSTIMOEV.SRC1*/
export const EVTSVT_LGPT1IN2SEL_PUBID_LRFD_EVT1: any = '43'

/**
LRFD interrupt to SYSTIM, controlled by LRFDDBELL:SYSTIMOEV.SRC0*/
export const EVTSVT_LGPT1IN2SEL_PUBID_LRFD_EVT0: any = '42'

/**
LGPT1 ADC trigger event, controlled by LGPT1:ADCTRG setting*/
export const EVTSVT_LGPT1IN2SEL_PUBID_LGPT1_ADC: any = '41'

/**
LGPT1 DMA request event, controlled by LGPT1:DMA setting*/
export const EVTSVT_LGPT1IN2SEL_PUBID_LGPT1_DMA: any = '40'

/**
LGPT1 compare/capture output event 2, controlled by LGPT1:C2CFG setting*/
export const EVTSVT_LGPT1IN2SEL_PUBID_LGPT1C2: any = '39'

/**
LGPT1 compare/capture output event 1, controlled by LGPT1:C1CFG setting*/
export const EVTSVT_LGPT1IN2SEL_PUBID_LGPT1C1: any = '38'

/**
LGPT1 compare/capture output event 0, controlled by LGPT1:C0CFG setting*/
export const EVTSVT_LGPT1IN2SEL_PUBID_LGPT1C0: any = '37'

/**
LGPT0 ADC trigger event, controlled by LGPT0:ADCTRG setting*/
export const EVTSVT_LGPT1IN2SEL_PUBID_LGPT0_ADC: any = '36'

/**
LGPT0 DMA request event, controlled by LGPT0:DMA setting*/
export const EVTSVT_LGPT1IN2SEL_PUBID_LGPT0_DMA: any = '35'

/**
LGPT0 compare/capture output event 2, controlled by LGPT0:C2CFG setting*/
export const EVTSVT_LGPT1IN2SEL_PUBID_LGPT0C2: any = '34'

/**
LGPT0 compare/capture output event 1, controlled by LGPT0:C1CFG setting*/
export const EVTSVT_LGPT1IN2SEL_PUBID_LGPT0C1: any = '33'

/**
LGPT0 compare/capture output event 0, controlled by LGPT0:C0CFG setting*/
export const EVTSVT_LGPT1IN2SEL_PUBID_LGPT0C0: any = '32'

/**
SYSTIM Channel 4 event, event flag is SYSTIM:MIS.EVT4*/
export const EVTSVT_LGPT1IN2SEL_PUBID_SYSTIM4: any = '31'

/**
SYSTIM Channel 3 event, event flag is SYSTIM:MIS.EVT3*/
export const EVTSVT_LGPT1IN2SEL_PUBID_SYSTIM3: any = '30'

/**
SYSTIM Channel 2 event, event flag is SYSTIM:MIS.EVT2*/
export const EVTSVT_LGPT1IN2SEL_PUBID_SYSTIM2: any = '29'

/**
SYSTIM Channel 1 event, event flag is  SYSTIM:MIS.EVT1*/
export const EVTSVT_LGPT1IN2SEL_PUBID_SYSTIM1: any = '28'

/**
SYSTIM Channel 0 event, event flag is SYSTIM:MIS.EVT0*/
export const EVTSVT_LGPT1IN2SEL_PUBID_SYSTIM0: any = '27'

/**
SYSTIM interrupt driven by synchronizing LFTICK signal to SVT clock*/
export const EVTSVT_LGPT1IN2SEL_PUBID_SYSTIM_LT: any = '26'

/**
SYSTIM heartbeat, can be set by SYSTIM:TIMEBIT*/
export const EVTSVT_LGPT1IN2SEL_PUBID_SYSTIM_HB: any = '25'

/**
ADC general published event, interrupt flags can be found here ADC:MIS1 */
export const EVTSVT_LGPT1IN2SEL_PUBID_ADC_EVT: any = '17'

/**
GPIO generic published event, controlled by GPIO:EVTCFG*/
export const EVTSVT_LGPT1IN2SEL_PUBID_GPIO_EVT: any = '10'

/**
Always inactive*/
export const EVTSVT_LGPT1IN2SEL_PUBID_NONE: any = '0'


// -------- REGISTER LGPT1TENSEL -------- //

/**
Output Selection for LGPT1TEN

*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior*/
export const EVTSVT_LGPT1TENSEL_RESERVED6: any = '26'
export const EVTSVT_LGPT1TENSEL_RESERVED6_M: any = '26'
export const EVTSVT_LGPT1TENSEL_RESERVED6_S: any = '26'
/**
Read/write selection value.

Writing any other value than values defined by a ENUM may result in undefined behavior.*/
export const EVTSVT_LGPT1TENSEL_PUBID: any = '6'
export const EVTSVT_LGPT1TENSEL_PUBID_M: any = '6'
export const EVTSVT_LGPT1TENSEL_PUBID_S: any = '6'
/**
LGPT3 ADC trigger event, controlled by LGPT3:ADCTRG setting*/
export const EVTSVT_LGPT1TENSEL_PUBID_LGPT3_ADC: any = '57'

/**
LGPT3 DMA request event, controlled by LGPT3:DMA setting*/
export const EVTSVT_LGPT1TENSEL_PUBID_LGPT3_DMA: any = '56'

/**
LGPT3 compare/capture output event 2, controlled by LGPT3:C2CFG setting*/
export const EVTSVT_LGPT1TENSEL_PUBID_LGPT3C2: any = '54'

/**
LGPT3 compare/capture output event 1, controlled by LGPT3:C1CFG setting*/
export const EVTSVT_LGPT1TENSEL_PUBID_LGPT3C1: any = '53'

/**
LGPT3 compare/capture output event 0, controlled by LGPT3:C0CFG setting*/
export const EVTSVT_LGPT1TENSEL_PUBID_LGPT3C0: any = '52'

/**
LGPT2 ADC trigger event, controlled by LGPT2:ADCTRG setting*/
export const EVTSVT_LGPT1TENSEL_PUBID_LGPT2_ADC: any = '51'

/**
LGPT2 DMA request event, controlled by LGPT2:DMA setting*/
export const EVTSVT_LGPT1TENSEL_PUBID_LGPT2_DMA: any = '50'

/**
LGPT0 compare/capture output event 2, controlled by LGPT2:C2CFG setting*/
export const EVTSVT_LGPT1TENSEL_PUBID_LGPT2C2: any = '48'

/**
LGPT2 compare/capture output event 1, controlled by LGPT2:C1CFG setting*/
export const EVTSVT_LGPT1TENSEL_PUBID_LGPT2C1: any = '47'

/**
LGPT2 compare/capture output event 0, controlled by LGPT2:C0CFG setting*/
export const EVTSVT_LGPT1TENSEL_PUBID_LGPT2C0: any = '46'

/**
LRFD interrupt to SYSTIM, controlled by LRFDDBELL:SYSTIMOEV.SRC2*/
export const EVTSVT_LGPT1TENSEL_PUBID_LRFD_EVT2: any = '44'

/**
LRFD interrupt to SYSTIM, controlled by LRFDDBELL:SYSTIMOEV.SRC1*/
export const EVTSVT_LGPT1TENSEL_PUBID_LRFD_EVT1: any = '43'

/**
LRFD interrupt to SYSTIM, controlled by LRFDDBELL:SYSTIMOEV.SRC0*/
export const EVTSVT_LGPT1TENSEL_PUBID_LRFD_EVT0: any = '42'

/**
LGPT1 ADC trigger event, controlled by LGPT1:ADCTRG setting*/
export const EVTSVT_LGPT1TENSEL_PUBID_LGPT1_ADC: any = '41'

/**
LGPT1 DMA request event, controlled by LGPT1:DMA setting*/
export const EVTSVT_LGPT1TENSEL_PUBID_LGPT1_DMA: any = '40'

/**
LGPT1 compare/capture output event 2, controlled by LGPT1:C2CFG setting*/
export const EVTSVT_LGPT1TENSEL_PUBID_LGPT1C2: any = '39'

/**
LGPT1 compare/capture output event 1, controlled by LGPT1:C1CFG setting*/
export const EVTSVT_LGPT1TENSEL_PUBID_LGPT1C1: any = '38'

/**
LGPT1 compare/capture output event 0, controlled by LGPT1:C0CFG setting*/
export const EVTSVT_LGPT1TENSEL_PUBID_LGPT1C0: any = '37'

/**
LGPT0 ADC trigger event, controlled by LGPT0:ADCTRG setting*/
export const EVTSVT_LGPT1TENSEL_PUBID_LGPT0_ADC: any = '36'

/**
LGPT0 DMA request event, controlled by LGPT0:DMA setting*/
export const EVTSVT_LGPT1TENSEL_PUBID_LGPT0_DMA: any = '35'

/**
LGPT0 compare/capture output event 2, controlled by LGPT0:C2CFG setting*/
export const EVTSVT_LGPT1TENSEL_PUBID_LGPT0C2: any = '34'

/**
LGPT0 compare/capture output event 1, controlled by LGPT0:C1CFG setting*/
export const EVTSVT_LGPT1TENSEL_PUBID_LGPT0C1: any = '33'

/**
LGPT0 compare/capture output event 0, controlled by LGPT0:C0CFG setting*/
export const EVTSVT_LGPT1TENSEL_PUBID_LGPT0C0: any = '32'

/**
SYSTIM Channel 4 event, event flag is SYSTIM:MIS.EVT4*/
export const EVTSVT_LGPT1TENSEL_PUBID_SYSTIM4: any = '31'

/**
SYSTIM Channel 3 event, event flag is SYSTIM:MIS.EVT3*/
export const EVTSVT_LGPT1TENSEL_PUBID_SYSTIM3: any = '30'

/**
SYSTIM Channel 2 event, event flag is SYSTIM:MIS.EVT2*/
export const EVTSVT_LGPT1TENSEL_PUBID_SYSTIM2: any = '29'

/**
SYSTIM Channel 1 event, event flag is  SYSTIM:MIS.EVT1*/
export const EVTSVT_LGPT1TENSEL_PUBID_SYSTIM1: any = '28'

/**
SYSTIM Channel 0 event, event flag is SYSTIM:MIS.EVT0*/
export const EVTSVT_LGPT1TENSEL_PUBID_SYSTIM0: any = '27'

/**
SYSTIM interrupt driven by synchronizing LFTICK signal to SVT clock*/
export const EVTSVT_LGPT1TENSEL_PUBID_SYSTIM_LT: any = '26'

/**
SYSTIM heartbeat, can be set by SYSTIM:TIMEBIT*/
export const EVTSVT_LGPT1TENSEL_PUBID_SYSTIM_HB: any = '25'

/**
ADC general published event, interrupt flags can be found here ADC:MIS1 */
export const EVTSVT_LGPT1TENSEL_PUBID_ADC_EVT: any = '17'

/**
GPIO generic published event, controlled by GPIO:EVTCFG*/
export const EVTSVT_LGPT1TENSEL_PUBID_GPIO_EVT: any = '10'

/**
Always inactive*/
export const EVTSVT_LGPT1TENSEL_PUBID_NONE: any = '0'


// -------- REGISTER LGPT2IN0SEL -------- //

/**
Output Selection for LGPT2IN0

*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior*/
export const EVTSVT_LGPT2IN0SEL_RESERVED6: any = '26'
export const EVTSVT_LGPT2IN0SEL_RESERVED6_M: any = '26'
export const EVTSVT_LGPT2IN0SEL_RESERVED6_S: any = '26'
/**
Read/write selection value.

Writing any other value than values defined by a ENUM may result in undefined behavior.*/
export const EVTSVT_LGPT2IN0SEL_PUBID: any = '6'
export const EVTSVT_LGPT2IN0SEL_PUBID_M: any = '6'
export const EVTSVT_LGPT2IN0SEL_PUBID_S: any = '6'
/**
LGPT3 ADC trigger event, controlled by LGPT3:ADCTRG setting*/
export const EVTSVT_LGPT2IN0SEL_PUBID_LGPT3_ADC: any = '57'

/**
LGPT3 DMA request event, controlled by LGPT3:DMA setting*/
export const EVTSVT_LGPT2IN0SEL_PUBID_LGPT3_DMA: any = '56'

/**
LGPT3 combined interrupt, interrupt flags are found here LGPT3:MIS*/
export const EVTSVT_LGPT2IN0SEL_PUBID_LGPT3_COMB: any = '55'

/**
LGPT3 compare/capture output event 2, controlled by LGPT3:C2CFG setting*/
export const EVTSVT_LGPT2IN0SEL_PUBID_LGPT3C2: any = '54'

/**
LGPT3 compare/capture output event 1, controlled by LGPT3:C1CFG setting*/
export const EVTSVT_LGPT2IN0SEL_PUBID_LGPT3C1: any = '53'

/**
LGPT3 compare/capture output event 0, controlled by LGPT3:C0CFG setting*/
export const EVTSVT_LGPT2IN0SEL_PUBID_LGPT3C0: any = '52'

/**
LGPT2 ADC trigger event, controlled by LGPT2:ADCTRG setting*/
export const EVTSVT_LGPT2IN0SEL_PUBID_LGPT2_ADC: any = '51'

/**
LGPT2 DMA request event, controlled by LGPT2:DMA setting*/
export const EVTSVT_LGPT2IN0SEL_PUBID_LGPT2_DMA: any = '50'

/**
LGPT2 combined interrupt, interrupt flags are found here LGPT2:MIS*/
export const EVTSVT_LGPT2IN0SEL_PUBID_LGPT2_COMB: any = '49'

/**
LGPT0 compare/capture output event 2, controlled by LGPT2:C2CFG setting*/
export const EVTSVT_LGPT2IN0SEL_PUBID_LGPT2C2: any = '48'

/**
LGPT2 compare/capture output event 1, controlled by LGPT2:C1CFG setting*/
export const EVTSVT_LGPT2IN0SEL_PUBID_LGPT2C1: any = '47'

/**
LGPT2 compare/capture output event 0, controlled by LGPT2:C0CFG setting*/
export const EVTSVT_LGPT2IN0SEL_PUBID_LGPT2C0: any = '46'

/**
LRFD interrupt to SYSTIM, controlled by LRFDDBELL:SYSTIMOEV.SRC2*/
export const EVTSVT_LGPT2IN0SEL_PUBID_LRFD_EVT2: any = '44'

/**
LRFD interrupt to SYSTIM, controlled by LRFDDBELL:SYSTIMOEV.SRC1*/
export const EVTSVT_LGPT2IN0SEL_PUBID_LRFD_EVT1: any = '43'

/**
LRFD interrupt to SYSTIM, controlled by LRFDDBELL:SYSTIMOEV.SRC0*/
export const EVTSVT_LGPT2IN0SEL_PUBID_LRFD_EVT0: any = '42'

/**
LGPT1 ADC trigger event, controlled by LGPT1:ADCTRG setting*/
export const EVTSVT_LGPT2IN0SEL_PUBID_LGPT1_ADC: any = '41'

/**
LGPT1 DMA request event, controlled by LGPT1:DMA setting*/
export const EVTSVT_LGPT2IN0SEL_PUBID_LGPT1_DMA: any = '40'

/**
LGPT1 compare/capture output event 2, controlled by LGPT1:C2CFG setting*/
export const EVTSVT_LGPT2IN0SEL_PUBID_LGPT1C2: any = '39'

/**
LGPT1 compare/capture output event 1, controlled by LGPT1:C1CFG setting*/
export const EVTSVT_LGPT2IN0SEL_PUBID_LGPT1C1: any = '38'

/**
LGPT1 compare/capture output event 0, controlled by LGPT1:C0CFG setting*/
export const EVTSVT_LGPT2IN0SEL_PUBID_LGPT1C0: any = '37'

/**
LGPT0 ADC trigger event, controlled by LGPT0:ADCTRG setting*/
export const EVTSVT_LGPT2IN0SEL_PUBID_LGPT0_ADC: any = '36'

/**
LGPT0 DMA request event, controlled by LGPT0:DMA setting*/
export const EVTSVT_LGPT2IN0SEL_PUBID_LGPT0_DMA: any = '35'

/**
LGPT0 compare/capture output event 2, controlled by LGPT0:C2CFG setting*/
export const EVTSVT_LGPT2IN0SEL_PUBID_LGPT0C2: any = '34'

/**
LGPT0 compare/capture output event 1, controlled by LGPT0:C1CFG setting*/
export const EVTSVT_LGPT2IN0SEL_PUBID_LGPT0C1: any = '33'

/**
LGPT0 compare/capture output event 0, controlled by LGPT0:C0CFG setting*/
export const EVTSVT_LGPT2IN0SEL_PUBID_LGPT0C0: any = '32'

/**
SYSTIM Channel 4 event, event flag is SYSTIM:MIS.EVT4*/
export const EVTSVT_LGPT2IN0SEL_PUBID_SYSTIM4: any = '31'

/**
SYSTIM Channel 3 event, event flag is SYSTIM:MIS.EVT3*/
export const EVTSVT_LGPT2IN0SEL_PUBID_SYSTIM3: any = '30'

/**
SYSTIM Channel 2 event, event flag is SYSTIM:MIS.EVT2*/
export const EVTSVT_LGPT2IN0SEL_PUBID_SYSTIM2: any = '29'

/**
SYSTIM Channel 1 event, event flag is  SYSTIM:MIS.EVT1*/
export const EVTSVT_LGPT2IN0SEL_PUBID_SYSTIM1: any = '28'

/**
SYSTIM Channel 0 event, event flag is SYSTIM:MIS.EVT0*/
export const EVTSVT_LGPT2IN0SEL_PUBID_SYSTIM0: any = '27'

/**
SYSTIM interrupt driven by synchronizing LFTICK signal to SVT clock*/
export const EVTSVT_LGPT2IN0SEL_PUBID_SYSTIM_LT: any = '26'

/**
SYSTIM heartbeat, can be set by SYSTIM:TIMEBIT*/
export const EVTSVT_LGPT2IN0SEL_PUBID_SYSTIM_HB: any = '25'

/**
Interrupt event from I2C0, interrupt flags can be found here I2C0:MIS*/
export const EVTSVT_LGPT2IN0SEL_PUBID_I2C0_IRQ: any = '24'

/**
UART0 combined interrupt, interrupt flags are found here UART0:MIS*/
export const EVTSVT_LGPT2IN0SEL_PUBID_UART0_COMB: any = '23'

/**
AES accelerator combined interrupt request, interrupt flags can be found here AES:MIS*/
export const EVTSVT_LGPT2IN0SEL_PUBID_AES_COMB: any = '22'

/**
DMA bus error, corresponds to DMA:ERROR.STATUS*/
export const EVTSVT_LGPT2IN0SEL_PUBID_DMA_ERR: any = '21'

/**
DMA combined done interrupt, corresponding flags can be found here DMA:REQDONE*/
export const EVTSVT_LGPT2IN0SEL_PUBID_DMA_DONE_COMB: any = '20'

/**
LGPT1 combined interrupt, interrupt flags are found here LGPT1:MIS*/
export const EVTSVT_LGPT2IN0SEL_PUBID_LGPT1_COMB: any = '19'

/**
LGPT0 combined interrupt, interrupt flags are found here LGPT0:MIS*/
export const EVTSVT_LGPT2IN0SEL_PUBID_LGPT0_COMB: any = '18'

/**
ADC general published event, interrupt flags can be found here ADC:MIS1 */
export const EVTSVT_LGPT2IN0SEL_PUBID_ADC_EVT: any = '17'

/**
ADC combined interrupt request, interrupt flags can be found here ADC:MIS0*/
export const EVTSVT_LGPT2IN0SEL_PUBID_ADC_COMB: any = '16'

/**
SPI0 combined interrupt request, interrupt flags can be found here SPI0:MIS*/
export const EVTSVT_LGPT2IN0SEL_PUBID_SPI0_COMB: any = '15'

/**
LRFD combined event, interrupt flags can be found here LRFDDBELL:MIS2*/
export const EVTSVT_LGPT2IN0SEL_PUBID_LRFD_IRQ2: any = '14'

/**
LRFD combined event, interrupt flags can be found here LRFDDBELL:MIS1*/
export const EVTSVT_LGPT2IN0SEL_PUBID_LRFD_IRQ1: any = '13'

/**
LRFD combined event, interrupt flags can be found here LRFDDBELL:MIS0*/
export const EVTSVT_LGPT2IN0SEL_PUBID_LRFD_IRQ0: any = '12'

/**
NoWrapper Flash interrupt indicating that the flash operation has completed, interrupt flags can be found here FLASH:MIS*/
export const EVTSVT_LGPT2IN0SEL_PUBID_FLASH_IRQ: any = '11'

/**
GPIO generic published event, controlled by GPIO:EVTCFG*/
export const EVTSVT_LGPT2IN0SEL_PUBID_GPIO_EVT: any = '10'

/**
GPIO combined wake up interrupt, interrupt flags can be found here GPIO:MIS*/
export const EVTSVT_LGPT2IN0SEL_PUBID_GPIO_COMB: any = '9'

/**
SYSTIM combined interrupt, interrupt flags are found here SYSTIM:MIS*/
export const EVTSVT_LGPT2IN0SEL_PUBID_SYSTIM_COMB: any = '8'

/**
IOC synchronous combined event, controlled by IOC:EVTCFG*/
export const EVTSVT_LGPT2IN0SEL_PUBID_AON_IOC_COMB: any = '7'

/**
AON LPCMP interrupt, controlled by SYS0:LPCMPCFG*/
export const EVTSVT_LGPT2IN0SEL_PUBID_AON_LPMCMP_IRQ: any = '6'

/**
DebugSS combined interrupt, interrupt flags can be found here DBGSS:MIS*/
export const EVTSVT_LGPT2IN0SEL_PUBID_AON_DBG_COMB: any = '5'

/**
AON_RTC event, controlled by the RTC:IMASK setting*/
export const EVTSVT_LGPT2IN0SEL_PUBID_AON_RTC_COMB: any = '4'

/**
CKMD combined interrupt request, interrupt flags can be found here CKMD:MIS*/
export const EVTSVT_LGPT2IN0SEL_PUBID_AON_CKM_COMB: any = '3'

/**
PMU combined interrupt request for BATMON, interrupt flags can be found here PMUD:EVENT*/
export const EVTSVT_LGPT2IN0SEL_PUBID_AON_PMU_COMB: any = '2'

/**
Always inactive*/
export const EVTSVT_LGPT2IN0SEL_PUBID_NONE: any = '0'


// -------- REGISTER LGPT2IN1SEL -------- //

/**
Output Selection for LGPT2IN1

*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior*/
export const EVTSVT_LGPT2IN1SEL_RESERVED6: any = '26'
export const EVTSVT_LGPT2IN1SEL_RESERVED6_M: any = '26'
export const EVTSVT_LGPT2IN1SEL_RESERVED6_S: any = '26'
/**
Read/write selection value.

Writing any other value than values defined by a ENUM may result in undefined behavior.*/
export const EVTSVT_LGPT2IN1SEL_PUBID: any = '6'
export const EVTSVT_LGPT2IN1SEL_PUBID_M: any = '6'
export const EVTSVT_LGPT2IN1SEL_PUBID_S: any = '6'
/**
LGPT3 ADC trigger event, controlled by LGPT3:ADCTRG setting*/
export const EVTSVT_LGPT2IN1SEL_PUBID_LGPT3_ADC: any = '57'

/**
LGPT3 DMA request event, controlled by LGPT3:DMA setting*/
export const EVTSVT_LGPT2IN1SEL_PUBID_LGPT3_DMA: any = '56'

/**
LGPT3 compare/capture output event 2, controlled by LGPT3:C2CFG setting*/
export const EVTSVT_LGPT2IN1SEL_PUBID_LGPT3C2: any = '54'

/**
LGPT3 compare/capture output event 1, controlled by LGPT3:C1CFG setting*/
export const EVTSVT_LGPT2IN1SEL_PUBID_LGPT3C1: any = '53'

/**
LGPT3 compare/capture output event 0, controlled by LGPT3:C0CFG setting*/
export const EVTSVT_LGPT2IN1SEL_PUBID_LGPT3C0: any = '52'

/**
LGPT2 ADC trigger event, controlled by LGPT2:ADCTRG setting*/
export const EVTSVT_LGPT2IN1SEL_PUBID_LGPT2_ADC: any = '51'

/**
LGPT2 DMA request event, controlled by LGPT2:DMA setting*/
export const EVTSVT_LGPT2IN1SEL_PUBID_LGPT2_DMA: any = '50'

/**
LGPT0 compare/capture output event 2, controlled by LGPT2:C2CFG setting*/
export const EVTSVT_LGPT2IN1SEL_PUBID_LGPT2C2: any = '48'

/**
LGPT2 compare/capture output event 1, controlled by LGPT2:C1CFG setting*/
export const EVTSVT_LGPT2IN1SEL_PUBID_LGPT2C1: any = '47'

/**
LGPT2 compare/capture output event 0, controlled by LGPT2:C0CFG setting*/
export const EVTSVT_LGPT2IN1SEL_PUBID_LGPT2C0: any = '46'

/**
LRFD interrupt to SYSTIM, controlled by LRFDDBELL:SYSTIMOEV.SRC2*/
export const EVTSVT_LGPT2IN1SEL_PUBID_LRFD_EVT2: any = '44'

/**
LRFD interrupt to SYSTIM, controlled by LRFDDBELL:SYSTIMOEV.SRC1*/
export const EVTSVT_LGPT2IN1SEL_PUBID_LRFD_EVT1: any = '43'

/**
LRFD interrupt to SYSTIM, controlled by LRFDDBELL:SYSTIMOEV.SRC0*/
export const EVTSVT_LGPT2IN1SEL_PUBID_LRFD_EVT0: any = '42'

/**
LGPT1 ADC trigger event, controlled by LGPT1:ADCTRG setting*/
export const EVTSVT_LGPT2IN1SEL_PUBID_LGPT1_ADC: any = '41'

/**
LGPT1 DMA request event, controlled by LGPT1:DMA setting*/
export const EVTSVT_LGPT2IN1SEL_PUBID_LGPT1_DMA: any = '40'

/**
LGPT1 compare/capture output event 2, controlled by LGPT1:C2CFG setting*/
export const EVTSVT_LGPT2IN1SEL_PUBID_LGPT1C2: any = '39'

/**
LGPT1 compare/capture output event 1, controlled by LGPT1:C1CFG setting*/
export const EVTSVT_LGPT2IN1SEL_PUBID_LGPT1C1: any = '38'

/**
LGPT1 compare/capture output event 0, controlled by LGPT1:C0CFG setting*/
export const EVTSVT_LGPT2IN1SEL_PUBID_LGPT1C0: any = '37'

/**
LGPT0 ADC trigger event, controlled by LGPT0:ADCTRG setting*/
export const EVTSVT_LGPT2IN1SEL_PUBID_LGPT0_ADC: any = '36'

/**
LGPT0 DMA request event, controlled by LGPT0:DMA setting*/
export const EVTSVT_LGPT2IN1SEL_PUBID_LGPT0_DMA: any = '35'

/**
LGPT0 compare/capture output event 2, controlled by LGPT0:C2CFG setting*/
export const EVTSVT_LGPT2IN1SEL_PUBID_LGPT0C2: any = '34'

/**
LGPT0 compare/capture output event 1, controlled by LGPT0:C1CFG setting*/
export const EVTSVT_LGPT2IN1SEL_PUBID_LGPT0C1: any = '33'

/**
LGPT0 compare/capture output event 0, controlled by LGPT0:C0CFG setting*/
export const EVTSVT_LGPT2IN1SEL_PUBID_LGPT0C0: any = '32'

/**
SYSTIM Channel 4 event, event flag is SYSTIM:MIS.EVT4*/
export const EVTSVT_LGPT2IN1SEL_PUBID_SYSTIM4: any = '31'

/**
SYSTIM Channel 3 event, event flag is SYSTIM:MIS.EVT3*/
export const EVTSVT_LGPT2IN1SEL_PUBID_SYSTIM3: any = '30'

/**
SYSTIM Channel 2 event, event flag is SYSTIM:MIS.EVT2*/
export const EVTSVT_LGPT2IN1SEL_PUBID_SYSTIM2: any = '29'

/**
SYSTIM Channel 1 event, event flag is  SYSTIM:MIS.EVT1*/
export const EVTSVT_LGPT2IN1SEL_PUBID_SYSTIM1: any = '28'

/**
SYSTIM Channel 0 event, event flag is SYSTIM:MIS.EVT0*/
export const EVTSVT_LGPT2IN1SEL_PUBID_SYSTIM0: any = '27'

/**
SYSTIM interrupt driven by synchronizing LFTICK signal to SVT clock*/
export const EVTSVT_LGPT2IN1SEL_PUBID_SYSTIM_LT: any = '26'

/**
SYSTIM heartbeat, can be set by SYSTIM:TIMEBIT*/
export const EVTSVT_LGPT2IN1SEL_PUBID_SYSTIM_HB: any = '25'

/**
ADC general published event, interrupt flags can be found here ADC:MIS1 */
export const EVTSVT_LGPT2IN1SEL_PUBID_ADC_EVT: any = '17'

/**
GPIO generic published event, controlled by GPIO:EVTCFG*/
export const EVTSVT_LGPT2IN1SEL_PUBID_GPIO_EVT: any = '10'

/**
Always inactive*/
export const EVTSVT_LGPT2IN1SEL_PUBID_NONE: any = '0'


// -------- REGISTER LGPT2IN2SEL -------- //

/**
Output Selection for LGPT2IN2

*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior*/
export const EVTSVT_LGPT2IN2SEL_RESERVED6: any = '26'
export const EVTSVT_LGPT2IN2SEL_RESERVED6_M: any = '26'
export const EVTSVT_LGPT2IN2SEL_RESERVED6_S: any = '26'
/**
Read/write selection value.

Writing any other value than values defined by a ENUM may result in undefined behavior.*/
export const EVTSVT_LGPT2IN2SEL_PUBID: any = '6'
export const EVTSVT_LGPT2IN2SEL_PUBID_M: any = '6'
export const EVTSVT_LGPT2IN2SEL_PUBID_S: any = '6'
/**
LGPT3 ADC trigger event, controlled by LGPT3:ADCTRG setting*/
export const EVTSVT_LGPT2IN2SEL_PUBID_LGPT3_ADC: any = '57'

/**
LGPT3 DMA request event, controlled by LGPT3:DMA setting*/
export const EVTSVT_LGPT2IN2SEL_PUBID_LGPT3_DMA: any = '56'

/**
LGPT3 compare/capture output event 2, controlled by LGPT3:C2CFG setting*/
export const EVTSVT_LGPT2IN2SEL_PUBID_LGPT3C2: any = '54'

/**
LGPT3 compare/capture output event 1, controlled by LGPT3:C1CFG setting*/
export const EVTSVT_LGPT2IN2SEL_PUBID_LGPT3C1: any = '53'

/**
LGPT3 compare/capture output event 0, controlled by LGPT3:C0CFG setting*/
export const EVTSVT_LGPT2IN2SEL_PUBID_LGPT3C0: any = '52'

/**
LGPT2 ADC trigger event, controlled by LGPT2:ADCTRG setting*/
export const EVTSVT_LGPT2IN2SEL_PUBID_LGPT2_ADC: any = '51'

/**
LGPT2 DMA request event, controlled by LGPT2:DMA setting*/
export const EVTSVT_LGPT2IN2SEL_PUBID_LGPT2_DMA: any = '50'

/**
LGPT0 compare/capture output event 2, controlled by LGPT2:C2CFG setting*/
export const EVTSVT_LGPT2IN2SEL_PUBID_LGPT2C2: any = '48'

/**
LGPT2 compare/capture output event 1, controlled by LGPT2:C1CFG setting*/
export const EVTSVT_LGPT2IN2SEL_PUBID_LGPT2C1: any = '47'

/**
LGPT2 compare/capture output event 0, controlled by LGPT2:C0CFG setting*/
export const EVTSVT_LGPT2IN2SEL_PUBID_LGPT2C0: any = '46'

/**
LRFD interrupt to SYSTIM, controlled by LRFDDBELL:SYSTIMOEV.SRC2*/
export const EVTSVT_LGPT2IN2SEL_PUBID_LRFD_EVT2: any = '44'

/**
LRFD interrupt to SYSTIM, controlled by LRFDDBELL:SYSTIMOEV.SRC1*/
export const EVTSVT_LGPT2IN2SEL_PUBID_LRFD_EVT1: any = '43'

/**
LRFD interrupt to SYSTIM, controlled by LRFDDBELL:SYSTIMOEV.SRC0*/
export const EVTSVT_LGPT2IN2SEL_PUBID_LRFD_EVT0: any = '42'

/**
LGPT1 ADC trigger event, controlled by LGPT1:ADCTRG setting*/
export const EVTSVT_LGPT2IN2SEL_PUBID_LGPT1_ADC: any = '41'

/**
LGPT1 DMA request event, controlled by LGPT1:DMA setting*/
export const EVTSVT_LGPT2IN2SEL_PUBID_LGPT1_DMA: any = '40'

/**
LGPT1 compare/capture output event 2, controlled by LGPT1:C2CFG setting*/
export const EVTSVT_LGPT2IN2SEL_PUBID_LGPT1C2: any = '39'

/**
LGPT1 compare/capture output event 1, controlled by LGPT1:C1CFG setting*/
export const EVTSVT_LGPT2IN2SEL_PUBID_LGPT1C1: any = '38'

/**
LGPT1 compare/capture output event 0, controlled by LGPT1:C0CFG setting*/
export const EVTSVT_LGPT2IN2SEL_PUBID_LGPT1C0: any = '37'

/**
LGPT0 ADC trigger event, controlled by LGPT0:ADCTRG setting*/
export const EVTSVT_LGPT2IN2SEL_PUBID_LGPT0_ADC: any = '36'

/**
LGPT0 DMA request event, controlled by LGPT0:DMA setting*/
export const EVTSVT_LGPT2IN2SEL_PUBID_LGPT0_DMA: any = '35'

/**
LGPT0 compare/capture output event 2, controlled by LGPT0:C2CFG setting*/
export const EVTSVT_LGPT2IN2SEL_PUBID_LGPT0C2: any = '34'

/**
LGPT0 compare/capture output event 1, controlled by LGPT0:C1CFG setting*/
export const EVTSVT_LGPT2IN2SEL_PUBID_LGPT0C1: any = '33'

/**
LGPT0 compare/capture output event 0, controlled by LGPT0:C0CFG setting*/
export const EVTSVT_LGPT2IN2SEL_PUBID_LGPT0C0: any = '32'

/**
SYSTIM Channel 4 event, event flag is SYSTIM:MIS.EVT4*/
export const EVTSVT_LGPT2IN2SEL_PUBID_SYSTIM4: any = '31'

/**
SYSTIM Channel 3 event, event flag is SYSTIM:MIS.EVT3*/
export const EVTSVT_LGPT2IN2SEL_PUBID_SYSTIM3: any = '30'

/**
SYSTIM Channel 2 event, event flag is SYSTIM:MIS.EVT2*/
export const EVTSVT_LGPT2IN2SEL_PUBID_SYSTIM2: any = '29'

/**
SYSTIM Channel 1 event, event flag is  SYSTIM:MIS.EVT1*/
export const EVTSVT_LGPT2IN2SEL_PUBID_SYSTIM1: any = '28'

/**
SYSTIM Channel 0 event, event flag is SYSTIM:MIS.EVT0*/
export const EVTSVT_LGPT2IN2SEL_PUBID_SYSTIM0: any = '27'

/**
SYSTIM interrupt driven by synchronizing LFTICK signal to SVT clock*/
export const EVTSVT_LGPT2IN2SEL_PUBID_SYSTIM_LT: any = '26'

/**
SYSTIM heartbeat, can be set by SYSTIM:TIMEBIT*/
export const EVTSVT_LGPT2IN2SEL_PUBID_SYSTIM_HB: any = '25'

/**
ADC general published event, interrupt flags can be found here ADC:MIS1 */
export const EVTSVT_LGPT2IN2SEL_PUBID_ADC_EVT: any = '17'

/**
GPIO generic published event, controlled by GPIO:EVTCFG*/
export const EVTSVT_LGPT2IN2SEL_PUBID_GPIO_EVT: any = '10'

/**
Always inactive*/
export const EVTSVT_LGPT2IN2SEL_PUBID_NONE: any = '0'


// -------- REGISTER LGPT2TENSEL -------- //

/**
Output Selection for LGPT2TEN

*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior*/
export const EVTSVT_LGPT2TENSEL_RESERVED6: any = '26'
export const EVTSVT_LGPT2TENSEL_RESERVED6_M: any = '26'
export const EVTSVT_LGPT2TENSEL_RESERVED6_S: any = '26'
/**
Read/write selection value.

Writing any other value than values defined by a ENUM may result in undefined behavior.*/
export const EVTSVT_LGPT2TENSEL_PUBID: any = '6'
export const EVTSVT_LGPT2TENSEL_PUBID_M: any = '6'
export const EVTSVT_LGPT2TENSEL_PUBID_S: any = '6'
/**
LGPT3 ADC trigger event, controlled by LGPT3:ADCTRG setting*/
export const EVTSVT_LGPT2TENSEL_PUBID_LGPT3_ADC: any = '57'

/**
LGPT3 DMA request event, controlled by LGPT3:DMA setting*/
export const EVTSVT_LGPT2TENSEL_PUBID_LGPT3_DMA: any = '56'

/**
LGPT3 compare/capture output event 2, controlled by LGPT3:C2CFG setting*/
export const EVTSVT_LGPT2TENSEL_PUBID_LGPT3C2: any = '54'

/**
LGPT3 compare/capture output event 1, controlled by LGPT3:C1CFG setting*/
export const EVTSVT_LGPT2TENSEL_PUBID_LGPT3C1: any = '53'

/**
LGPT3 compare/capture output event 0, controlled by LGPT3:C0CFG setting*/
export const EVTSVT_LGPT2TENSEL_PUBID_LGPT3C0: any = '52'

/**
LGPT2 ADC trigger event, controlled by LGPT2:ADCTRG setting*/
export const EVTSVT_LGPT2TENSEL_PUBID_LGPT2_ADC: any = '51'

/**
LGPT2 DMA request event, controlled by LGPT2:DMA setting*/
export const EVTSVT_LGPT2TENSEL_PUBID_LGPT2_DMA: any = '50'

/**
LGPT0 compare/capture output event 2, controlled by LGPT2:C2CFG setting*/
export const EVTSVT_LGPT2TENSEL_PUBID_LGPT2C2: any = '48'

/**
LGPT2 compare/capture output event 1, controlled by LGPT2:C1CFG setting*/
export const EVTSVT_LGPT2TENSEL_PUBID_LGPT2C1: any = '47'

/**
LGPT2 compare/capture output event 0, controlled by LGPT2:C0CFG setting*/
export const EVTSVT_LGPT2TENSEL_PUBID_LGPT2C0: any = '46'

/**
LRFD interrupt to SYSTIM, controlled by LRFDDBELL:SYSTIMOEV.SRC2*/
export const EVTSVT_LGPT2TENSEL_PUBID_LRFD_EVT2: any = '44'

/**
LRFD interrupt to SYSTIM, controlled by LRFDDBELL:SYSTIMOEV.SRC1*/
export const EVTSVT_LGPT2TENSEL_PUBID_LRFD_EVT1: any = '43'

/**
LRFD interrupt to SYSTIM, controlled by LRFDDBELL:SYSTIMOEV.SRC0*/
export const EVTSVT_LGPT2TENSEL_PUBID_LRFD_EVT0: any = '42'

/**
LGPT1 ADC trigger event, controlled by LGPT1:ADCTRG setting*/
export const EVTSVT_LGPT2TENSEL_PUBID_LGPT1_ADC: any = '41'

/**
LGPT1 DMA request event, controlled by LGPT1:DMA setting*/
export const EVTSVT_LGPT2TENSEL_PUBID_LGPT1_DMA: any = '40'

/**
LGPT1 compare/capture output event 2, controlled by LGPT1:C2CFG setting*/
export const EVTSVT_LGPT2TENSEL_PUBID_LGPT1C2: any = '39'

/**
LGPT1 compare/capture output event 1, controlled by LGPT1:C1CFG setting*/
export const EVTSVT_LGPT2TENSEL_PUBID_LGPT1C1: any = '38'

/**
LGPT1 compare/capture output event 0, controlled by LGPT1:C0CFG setting*/
export const EVTSVT_LGPT2TENSEL_PUBID_LGPT1C0: any = '37'

/**
LGPT0 ADC trigger event, controlled by LGPT0:ADCTRG setting*/
export const EVTSVT_LGPT2TENSEL_PUBID_LGPT0_ADC: any = '36'

/**
LGPT0 DMA request event, controlled by LGPT0:DMA setting*/
export const EVTSVT_LGPT2TENSEL_PUBID_LGPT0_DMA: any = '35'

/**
LGPT0 compare/capture output event 2, controlled by LGPT0:C2CFG setting*/
export const EVTSVT_LGPT2TENSEL_PUBID_LGPT0C2: any = '34'

/**
LGPT0 compare/capture output event 1, controlled by LGPT0:C1CFG setting*/
export const EVTSVT_LGPT2TENSEL_PUBID_LGPT0C1: any = '33'

/**
LGPT0 compare/capture output event 0, controlled by LGPT0:C0CFG setting*/
export const EVTSVT_LGPT2TENSEL_PUBID_LGPT0C0: any = '32'

/**
SYSTIM Channel 4 event, event flag is SYSTIM:MIS.EVT4*/
export const EVTSVT_LGPT2TENSEL_PUBID_SYSTIM4: any = '31'

/**
SYSTIM Channel 3 event, event flag is SYSTIM:MIS.EVT3*/
export const EVTSVT_LGPT2TENSEL_PUBID_SYSTIM3: any = '30'

/**
SYSTIM Channel 2 event, event flag is SYSTIM:MIS.EVT2*/
export const EVTSVT_LGPT2TENSEL_PUBID_SYSTIM2: any = '29'

/**
SYSTIM Channel 1 event, event flag is  SYSTIM:MIS.EVT1*/
export const EVTSVT_LGPT2TENSEL_PUBID_SYSTIM1: any = '28'

/**
SYSTIM Channel 0 event, event flag is SYSTIM:MIS.EVT0*/
export const EVTSVT_LGPT2TENSEL_PUBID_SYSTIM0: any = '27'

/**
SYSTIM interrupt driven by synchronizing LFTICK signal to SVT clock*/
export const EVTSVT_LGPT2TENSEL_PUBID_SYSTIM_LT: any = '26'

/**
SYSTIM heartbeat, can be set by SYSTIM:TIMEBIT*/
export const EVTSVT_LGPT2TENSEL_PUBID_SYSTIM_HB: any = '25'

/**
ADC general published event, interrupt flags can be found here ADC:MIS1 */
export const EVTSVT_LGPT2TENSEL_PUBID_ADC_EVT: any = '17'

/**
GPIO generic published event, controlled by GPIO:EVTCFG*/
export const EVTSVT_LGPT2TENSEL_PUBID_GPIO_EVT: any = '10'

/**
Always inactive*/
export const EVTSVT_LGPT2TENSEL_PUBID_NONE: any = '0'


// -------- REGISTER LGPT3IN0SEL -------- //

/**
Output Selection for LGPT3IN0

*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior*/
export const EVTSVT_LGPT3IN0SEL_RESERVED6: any = '26'
export const EVTSVT_LGPT3IN0SEL_RESERVED6_M: any = '26'
export const EVTSVT_LGPT3IN0SEL_RESERVED6_S: any = '26'
/**
Read/write selection value.

Writing any other value than values defined by a ENUM may result in undefined behavior.*/
export const EVTSVT_LGPT3IN0SEL_PUBID: any = '6'
export const EVTSVT_LGPT3IN0SEL_PUBID_M: any = '6'
export const EVTSVT_LGPT3IN0SEL_PUBID_S: any = '6'
/**
LGPT3 ADC trigger event, controlled by LGPT3:ADCTRG setting*/
export const EVTSVT_LGPT3IN0SEL_PUBID_LGPT3_ADC: any = '57'

/**
LGPT3 DMA request event, controlled by LGPT3:DMA setting*/
export const EVTSVT_LGPT3IN0SEL_PUBID_LGPT3_DMA: any = '56'

/**
LGPT3 combined interrupt, interrupt flags are found here LGPT3:MIS*/
export const EVTSVT_LGPT3IN0SEL_PUBID_LGPT3_COMB: any = '55'

/**
LGPT3 compare/capture output event 2, controlled by LGPT3:C2CFG setting*/
export const EVTSVT_LGPT3IN0SEL_PUBID_LGPT3C2: any = '54'

/**
LGPT3 compare/capture output event 1, controlled by LGPT3:C1CFG setting*/
export const EVTSVT_LGPT3IN0SEL_PUBID_LGPT3C1: any = '53'

/**
LGPT3 compare/capture output event 0, controlled by LGPT3:C0CFG setting*/
export const EVTSVT_LGPT3IN0SEL_PUBID_LGPT3C0: any = '52'

/**
LGPT2 ADC trigger event, controlled by LGPT2:ADCTRG setting*/
export const EVTSVT_LGPT3IN0SEL_PUBID_LGPT2_ADC: any = '51'

/**
LGPT2 DMA request event, controlled by LGPT2:DMA setting*/
export const EVTSVT_LGPT3IN0SEL_PUBID_LGPT2_DMA: any = '50'

/**
LGPT2 combined interrupt, interrupt flags are found here LGPT2:MIS*/
export const EVTSVT_LGPT3IN0SEL_PUBID_LGPT2_COMB: any = '49'

/**
LGPT0 compare/capture output event 2, controlled by LGPT2:C2CFG setting*/
export const EVTSVT_LGPT3IN0SEL_PUBID_LGPT2C2: any = '48'

/**
LGPT2 compare/capture output event 1, controlled by LGPT2:C1CFG setting*/
export const EVTSVT_LGPT3IN0SEL_PUBID_LGPT2C1: any = '47'

/**
LGPT2 compare/capture output event 0, controlled by LGPT2:C0CFG setting*/
export const EVTSVT_LGPT3IN0SEL_PUBID_LGPT2C0: any = '46'

/**
LRFD interrupt to SYSTIM, controlled by LRFDDBELL:SYSTIMOEV.SRC2*/
export const EVTSVT_LGPT3IN0SEL_PUBID_LRFD_EVT2: any = '44'

/**
LRFD interrupt to SYSTIM, controlled by LRFDDBELL:SYSTIMOEV.SRC1*/
export const EVTSVT_LGPT3IN0SEL_PUBID_LRFD_EVT1: any = '43'

/**
LRFD interrupt to SYSTIM, controlled by LRFDDBELL:SYSTIMOEV.SRC0*/
export const EVTSVT_LGPT3IN0SEL_PUBID_LRFD_EVT0: any = '42'

/**
LGPT1 ADC trigger event, controlled by LGPT1:ADCTRG setting*/
export const EVTSVT_LGPT3IN0SEL_PUBID_LGPT1_ADC: any = '41'

/**
LGPT1 DMA request event, controlled by LGPT1:DMA setting*/
export const EVTSVT_LGPT3IN0SEL_PUBID_LGPT1_DMA: any = '40'

/**
LGPT1 compare/capture output event 2, controlled by LGPT1:C2CFG setting*/
export const EVTSVT_LGPT3IN0SEL_PUBID_LGPT1C2: any = '39'

/**
LGPT1 compare/capture output event 1, controlled by LGPT1:C1CFG setting*/
export const EVTSVT_LGPT3IN0SEL_PUBID_LGPT1C1: any = '38'

/**
LGPT1 compare/capture output event 0, controlled by LGPT1:C0CFG setting*/
export const EVTSVT_LGPT3IN0SEL_PUBID_LGPT1C0: any = '37'

/**
LGPT0 ADC trigger event, controlled by LGPT0:ADCTRG setting*/
export const EVTSVT_LGPT3IN0SEL_PUBID_LGPT0_ADC: any = '36'

/**
LGPT0 DMA request event, controlled by LGPT0:DMA setting*/
export const EVTSVT_LGPT3IN0SEL_PUBID_LGPT0_DMA: any = '35'

/**
LGPT0 compare/capture output event 2, controlled by LGPT0:C2CFG setting*/
export const EVTSVT_LGPT3IN0SEL_PUBID_LGPT0C2: any = '34'

/**
LGPT0 compare/capture output event 1, controlled by LGPT0:C1CFG setting*/
export const EVTSVT_LGPT3IN0SEL_PUBID_LGPT0C1: any = '33'

/**
LGPT0 compare/capture output event 0, controlled by LGPT0:C0CFG setting*/
export const EVTSVT_LGPT3IN0SEL_PUBID_LGPT0C0: any = '32'

/**
SYSTIM Channel 4 event, event flag is SYSTIM:MIS.EVT4*/
export const EVTSVT_LGPT3IN0SEL_PUBID_SYSTIM4: any = '31'

/**
SYSTIM Channel 3 event, event flag is SYSTIM:MIS.EVT3*/
export const EVTSVT_LGPT3IN0SEL_PUBID_SYSTIM3: any = '30'

/**
SYSTIM Channel 2 event, event flag is SYSTIM:MIS.EVT2*/
export const EVTSVT_LGPT3IN0SEL_PUBID_SYSTIM2: any = '29'

/**
SYSTIM Channel 1 event, event flag is  SYSTIM:MIS.EVT1*/
export const EVTSVT_LGPT3IN0SEL_PUBID_SYSTIM1: any = '28'

/**
SYSTIM Channel 0 event, event flag is SYSTIM:MIS.EVT0*/
export const EVTSVT_LGPT3IN0SEL_PUBID_SYSTIM0: any = '27'

/**
SYSTIM interrupt driven by synchronizing LFTICK signal to SVT clock*/
export const EVTSVT_LGPT3IN0SEL_PUBID_SYSTIM_LT: any = '26'

/**
SYSTIM heartbeat, can be set by SYSTIM:TIMEBIT*/
export const EVTSVT_LGPT3IN0SEL_PUBID_SYSTIM_HB: any = '25'

/**
Interrupt event from I2C0, interrupt flags can be found here I2C0:MIS*/
export const EVTSVT_LGPT3IN0SEL_PUBID_I2C0_IRQ: any = '24'

/**
UART0 combined interrupt, interrupt flags are found here UART0:MIS*/
export const EVTSVT_LGPT3IN0SEL_PUBID_UART0_COMB: any = '23'

/**
AES accelerator combined interrupt request, interrupt flags can be found here AES:MIS*/
export const EVTSVT_LGPT3IN0SEL_PUBID_AES_COMB: any = '22'

/**
DMA bus error, corresponds to DMA:ERROR.STATUS*/
export const EVTSVT_LGPT3IN0SEL_PUBID_DMA_ERR: any = '21'

/**
DMA combined done interrupt, corresponding flags can be found here DMA:REQDONE*/
export const EVTSVT_LGPT3IN0SEL_PUBID_DMA_DONE_COMB: any = '20'

/**
LGPT1 combined interrupt, interrupt flags are found here LGPT1:MIS*/
export const EVTSVT_LGPT3IN0SEL_PUBID_LGPT1_COMB: any = '19'

/**
LGPT0 combined interrupt, interrupt flags are found here LGPT0:MIS*/
export const EVTSVT_LGPT3IN0SEL_PUBID_LGPT0_COMB: any = '18'

/**
ADC general published event, interrupt flags can be found here ADC:MIS1 */
export const EVTSVT_LGPT3IN0SEL_PUBID_ADC_EVT: any = '17'

/**
ADC combined interrupt request, interrupt flags can be found here ADC:MIS0*/
export const EVTSVT_LGPT3IN0SEL_PUBID_ADC_COMB: any = '16'

/**
SPI0 combined interrupt request, interrupt flags can be found here SPI0:MIS*/
export const EVTSVT_LGPT3IN0SEL_PUBID_SPI0_COMB: any = '15'

/**
LRFD combined event, interrupt flags can be found here LRFDDBELL:MIS2*/
export const EVTSVT_LGPT3IN0SEL_PUBID_LRFD_IRQ2: any = '14'

/**
LRFD combined event, interrupt flags can be found here LRFDDBELL:MIS1*/
export const EVTSVT_LGPT3IN0SEL_PUBID_LRFD_IRQ1: any = '13'

/**
LRFD combined event, interrupt flags can be found here LRFDDBELL:MIS0*/
export const EVTSVT_LGPT3IN0SEL_PUBID_LRFD_IRQ0: any = '12'

/**
NoWrapper Flash interrupt indicating that the flash operation has completed, interrupt flags can be found here FLASH:MIS*/
export const EVTSVT_LGPT3IN0SEL_PUBID_FLASH_IRQ: any = '11'

/**
GPIO generic published event, controlled by GPIO:EVTCFG*/
export const EVTSVT_LGPT3IN0SEL_PUBID_GPIO_EVT: any = '10'

/**
GPIO combined wake up interrupt, interrupt flags can be found here GPIO:MIS*/
export const EVTSVT_LGPT3IN0SEL_PUBID_GPIO_COMB: any = '9'

/**
SYSTIM combined interrupt, interrupt flags are found here SYSTIM:MIS*/
export const EVTSVT_LGPT3IN0SEL_PUBID_SYSTIM_COMB: any = '8'

/**
IOC synchronous combined event, controlled by IOC:EVTCFG*/
export const EVTSVT_LGPT3IN0SEL_PUBID_AON_IOC_COMB: any = '7'

/**
AON LPCMP interrupt, controlled by SYS0:LPCMPCFG*/
export const EVTSVT_LGPT3IN0SEL_PUBID_AON_LPMCMP_IRQ: any = '6'

/**
DebugSS combined interrupt, interrupt flags can be found here DBGSS:MIS*/
export const EVTSVT_LGPT3IN0SEL_PUBID_AON_DBG_COMB: any = '5'

/**
AON_RTC event, controlled by the RTC:IMASK setting*/
export const EVTSVT_LGPT3IN0SEL_PUBID_AON_RTC_COMB: any = '4'

/**
CKMD combined interrupt request, interrupt flags can be found here CKMD:MIS*/
export const EVTSVT_LGPT3IN0SEL_PUBID_AON_CKM_COMB: any = '3'

/**
PMU combined interrupt request for BATMON, interrupt flags can be found here PMUD:EVENT*/
export const EVTSVT_LGPT3IN0SEL_PUBID_AON_PMU_COMB: any = '2'

/**
Always inactive*/
export const EVTSVT_LGPT3IN0SEL_PUBID_NONE: any = '0'


// -------- REGISTER LGPT3IN1SEL -------- //

/**
Output Selection for LGPT3IN1

*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior*/
export const EVTSVT_LGPT3IN1SEL_RESERVED6: any = '26'
export const EVTSVT_LGPT3IN1SEL_RESERVED6_M: any = '26'
export const EVTSVT_LGPT3IN1SEL_RESERVED6_S: any = '26'
/**
Read/write selection value.

Writing any other value than values defined by a ENUM may result in undefined behavior.*/
export const EVTSVT_LGPT3IN1SEL_PUBID: any = '6'
export const EVTSVT_LGPT3IN1SEL_PUBID_M: any = '6'
export const EVTSVT_LGPT3IN1SEL_PUBID_S: any = '6'
/**
LGPT3 ADC trigger event, controlled by LGPT3:ADCTRG setting*/
export const EVTSVT_LGPT3IN1SEL_PUBID_LGPT3_ADC: any = '57'

/**
LGPT3 DMA request event, controlled by LGPT3:DMA setting*/
export const EVTSVT_LGPT3IN1SEL_PUBID_LGPT3_DMA: any = '56'

/**
LGPT3 compare/capture output event 2, controlled by LGPT3:C2CFG setting*/
export const EVTSVT_LGPT3IN1SEL_PUBID_LGPT3C2: any = '54'

/**
LGPT3 compare/capture output event 1, controlled by LGPT3:C1CFG setting*/
export const EVTSVT_LGPT3IN1SEL_PUBID_LGPT3C1: any = '53'

/**
LGPT3 compare/capture output event 0, controlled by LGPT3:C0CFG setting*/
export const EVTSVT_LGPT3IN1SEL_PUBID_LGPT3C0: any = '52'

/**
LGPT2 ADC trigger event, controlled by LGPT2:ADCTRG setting*/
export const EVTSVT_LGPT3IN1SEL_PUBID_LGPT2_ADC: any = '51'

/**
LGPT2 DMA request event, controlled by LGPT2:DMA setting*/
export const EVTSVT_LGPT3IN1SEL_PUBID_LGPT2_DMA: any = '50'

/**
LGPT0 compare/capture output event 2, controlled by LGPT2:C2CFG setting*/
export const EVTSVT_LGPT3IN1SEL_PUBID_LGPT2C2: any = '48'

/**
LGPT2 compare/capture output event 1, controlled by LGPT2:C1CFG setting*/
export const EVTSVT_LGPT3IN1SEL_PUBID_LGPT2C1: any = '47'

/**
LGPT2 compare/capture output event 0, controlled by LGPT2:C0CFG setting*/
export const EVTSVT_LGPT3IN1SEL_PUBID_LGPT2C0: any = '46'

/**
LRFD interrupt to SYSTIM, controlled by LRFDDBELL:SYSTIMOEV.SRC2*/
export const EVTSVT_LGPT3IN1SEL_PUBID_LRFD_EVT2: any = '44'

/**
LRFD interrupt to SYSTIM, controlled by LRFDDBELL:SYSTIMOEV.SRC1*/
export const EVTSVT_LGPT3IN1SEL_PUBID_LRFD_EVT1: any = '43'

/**
LRFD interrupt to SYSTIM, controlled by LRFDDBELL:SYSTIMOEV.SRC0*/
export const EVTSVT_LGPT3IN1SEL_PUBID_LRFD_EVT0: any = '42'

/**
LGPT1 ADC trigger event, controlled by LGPT1:ADCTRG setting*/
export const EVTSVT_LGPT3IN1SEL_PUBID_LGPT1_ADC: any = '41'

/**
LGPT1 DMA request event, controlled by LGPT1:DMA setting*/
export const EVTSVT_LGPT3IN1SEL_PUBID_LGPT1_DMA: any = '40'

/**
LGPT1 compare/capture output event 2, controlled by LGPT1:C2CFG setting*/
export const EVTSVT_LGPT3IN1SEL_PUBID_LGPT1C2: any = '39'

/**
LGPT1 compare/capture output event 1, controlled by LGPT1:C1CFG setting*/
export const EVTSVT_LGPT3IN1SEL_PUBID_LGPT1C1: any = '38'

/**
LGPT1 compare/capture output event 0, controlled by LGPT1:C0CFG setting*/
export const EVTSVT_LGPT3IN1SEL_PUBID_LGPT1C0: any = '37'

/**
LGPT0 ADC trigger event, controlled by LGPT0:ADCTRG setting*/
export const EVTSVT_LGPT3IN1SEL_PUBID_LGPT0_ADC: any = '36'

/**
LGPT0 DMA request event, controlled by LGPT0:DMA setting*/
export const EVTSVT_LGPT3IN1SEL_PUBID_LGPT0_DMA: any = '35'

/**
LGPT0 compare/capture output event 2, controlled by LGPT0:C2CFG setting*/
export const EVTSVT_LGPT3IN1SEL_PUBID_LGPT0C2: any = '34'

/**
LGPT0 compare/capture output event 1, controlled by LGPT0:C1CFG setting*/
export const EVTSVT_LGPT3IN1SEL_PUBID_LGPT0C1: any = '33'

/**
LGPT0 compare/capture output event 0, controlled by LGPT0:C0CFG setting*/
export const EVTSVT_LGPT3IN1SEL_PUBID_LGPT0C0: any = '32'

/**
SYSTIM Channel 4 event, event flag is SYSTIM:MIS.EVT4*/
export const EVTSVT_LGPT3IN1SEL_PUBID_SYSTIM4: any = '31'

/**
SYSTIM Channel 3 event, event flag is SYSTIM:MIS.EVT3*/
export const EVTSVT_LGPT3IN1SEL_PUBID_SYSTIM3: any = '30'

/**
SYSTIM Channel 2 event, event flag is SYSTIM:MIS.EVT2*/
export const EVTSVT_LGPT3IN1SEL_PUBID_SYSTIM2: any = '29'

/**
SYSTIM Channel 1 event, event flag is  SYSTIM:MIS.EVT1*/
export const EVTSVT_LGPT3IN1SEL_PUBID_SYSTIM1: any = '28'

/**
SYSTIM Channel 0 event, event flag is SYSTIM:MIS.EVT0*/
export const EVTSVT_LGPT3IN1SEL_PUBID_SYSTIM0: any = '27'

/**
SYSTIM interrupt driven by synchronizing LFTICK signal to SVT clock*/
export const EVTSVT_LGPT3IN1SEL_PUBID_SYSTIM_LT: any = '26'

/**
SYSTIM heartbeat, can be set by SYSTIM:TIMEBIT*/
export const EVTSVT_LGPT3IN1SEL_PUBID_SYSTIM_HB: any = '25'

/**
ADC general published event, interrupt flags can be found here ADC:MIS1 */
export const EVTSVT_LGPT3IN1SEL_PUBID_ADC_EVT: any = '17'

/**
GPIO generic published event, controlled by GPIO:EVTCFG*/
export const EVTSVT_LGPT3IN1SEL_PUBID_GPIO_EVT: any = '10'

/**
Always inactive*/
export const EVTSVT_LGPT3IN1SEL_PUBID_NONE: any = '0'


// -------- REGISTER LGPT3IN2SEL -------- //

/**
Output Selection for LGPT3IN2

*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior*/
export const EVTSVT_LGPT3IN2SEL_RESERVED6: any = '26'
export const EVTSVT_LGPT3IN2SEL_RESERVED6_M: any = '26'
export const EVTSVT_LGPT3IN2SEL_RESERVED6_S: any = '26'
/**
Read/write selection value.

Writing any other value than values defined by a ENUM may result in undefined behavior.*/
export const EVTSVT_LGPT3IN2SEL_PUBID: any = '6'
export const EVTSVT_LGPT3IN2SEL_PUBID_M: any = '6'
export const EVTSVT_LGPT3IN2SEL_PUBID_S: any = '6'
/**
LGPT3 ADC trigger event, controlled by LGPT3:ADCTRG setting*/
export const EVTSVT_LGPT3IN2SEL_PUBID_LGPT3_ADC: any = '57'

/**
LGPT3 DMA request event, controlled by LGPT3:DMA setting*/
export const EVTSVT_LGPT3IN2SEL_PUBID_LGPT3_DMA: any = '56'

/**
LGPT3 compare/capture output event 2, controlled by LGPT3:C2CFG setting*/
export const EVTSVT_LGPT3IN2SEL_PUBID_LGPT3C2: any = '54'

/**
LGPT3 compare/capture output event 1, controlled by LGPT3:C1CFG setting*/
export const EVTSVT_LGPT3IN2SEL_PUBID_LGPT3C1: any = '53'

/**
LGPT3 compare/capture output event 0, controlled by LGPT3:C0CFG setting*/
export const EVTSVT_LGPT3IN2SEL_PUBID_LGPT3C0: any = '52'

/**
LGPT2 ADC trigger event, controlled by LGPT2:ADCTRG setting*/
export const EVTSVT_LGPT3IN2SEL_PUBID_LGPT2_ADC: any = '51'

/**
LGPT2 DMA request event, controlled by LGPT2:DMA setting*/
export const EVTSVT_LGPT3IN2SEL_PUBID_LGPT2_DMA: any = '50'

/**
LGPT0 compare/capture output event 2, controlled by LGPT2:C2CFG setting*/
export const EVTSVT_LGPT3IN2SEL_PUBID_LGPT2C2: any = '48'

/**
LGPT2 compare/capture output event 1, controlled by LGPT2:C1CFG setting*/
export const EVTSVT_LGPT3IN2SEL_PUBID_LGPT2C1: any = '47'

/**
LGPT2 compare/capture output event 0, controlled by LGPT2:C0CFG setting*/
export const EVTSVT_LGPT3IN2SEL_PUBID_LGPT2C0: any = '46'

/**
LRFD interrupt to SYSTIM, controlled by LRFDDBELL:SYSTIMOEV.SRC2*/
export const EVTSVT_LGPT3IN2SEL_PUBID_LRFD_EVT2: any = '44'

/**
LRFD interrupt to SYSTIM, controlled by LRFDDBELL:SYSTIMOEV.SRC1*/
export const EVTSVT_LGPT3IN2SEL_PUBID_LRFD_EVT1: any = '43'

/**
LRFD interrupt to SYSTIM, controlled by LRFDDBELL:SYSTIMOEV.SRC0*/
export const EVTSVT_LGPT3IN2SEL_PUBID_LRFD_EVT0: any = '42'

/**
LGPT1 ADC trigger event, controlled by LGPT1:ADCTRG setting*/
export const EVTSVT_LGPT3IN2SEL_PUBID_LGPT1_ADC: any = '41'

/**
LGPT1 DMA request event, controlled by LGPT1:DMA setting*/
export const EVTSVT_LGPT3IN2SEL_PUBID_LGPT1_DMA: any = '40'

/**
LGPT1 compare/capture output event 2, controlled by LGPT1:C2CFG setting*/
export const EVTSVT_LGPT3IN2SEL_PUBID_LGPT1C2: any = '39'

/**
LGPT1 compare/capture output event 1, controlled by LGPT1:C1CFG setting*/
export const EVTSVT_LGPT3IN2SEL_PUBID_LGPT1C1: any = '38'

/**
LGPT1 compare/capture output event 0, controlled by LGPT1:C0CFG setting*/
export const EVTSVT_LGPT3IN2SEL_PUBID_LGPT1C0: any = '37'

/**
LGPT0 ADC trigger event, controlled by LGPT0:ADCTRG setting*/
export const EVTSVT_LGPT3IN2SEL_PUBID_LGPT0_ADC: any = '36'

/**
LGPT0 DMA request event, controlled by LGPT0:DMA setting*/
export const EVTSVT_LGPT3IN2SEL_PUBID_LGPT0_DMA: any = '35'

/**
LGPT0 compare/capture output event 2, controlled by LGPT0:C2CFG setting*/
export const EVTSVT_LGPT3IN2SEL_PUBID_LGPT0C2: any = '34'

/**
LGPT0 compare/capture output event 1, controlled by LGPT0:C1CFG setting*/
export const EVTSVT_LGPT3IN2SEL_PUBID_LGPT0C1: any = '33'

/**
LGPT0 compare/capture output event 0, controlled by LGPT0:C0CFG setting*/
export const EVTSVT_LGPT3IN2SEL_PUBID_LGPT0C0: any = '32'

/**
SYSTIM Channel 4 event, event flag is SYSTIM:MIS.EVT4*/
export const EVTSVT_LGPT3IN2SEL_PUBID_SYSTIM4: any = '31'

/**
SYSTIM Channel 3 event, event flag is SYSTIM:MIS.EVT3*/
export const EVTSVT_LGPT3IN2SEL_PUBID_SYSTIM3: any = '30'

/**
SYSTIM Channel 2 event, event flag is SYSTIM:MIS.EVT2*/
export const EVTSVT_LGPT3IN2SEL_PUBID_SYSTIM2: any = '29'

/**
SYSTIM Channel 1 event, event flag is  SYSTIM:MIS.EVT1*/
export const EVTSVT_LGPT3IN2SEL_PUBID_SYSTIM1: any = '28'

/**
SYSTIM Channel 0 event, event flag is SYSTIM:MIS.EVT0*/
export const EVTSVT_LGPT3IN2SEL_PUBID_SYSTIM0: any = '27'

/**
SYSTIM interrupt driven by synchronizing LFTICK signal to SVT clock*/
export const EVTSVT_LGPT3IN2SEL_PUBID_SYSTIM_LT: any = '26'

/**
SYSTIM heartbeat, can be set by SYSTIM:TIMEBIT*/
export const EVTSVT_LGPT3IN2SEL_PUBID_SYSTIM_HB: any = '25'

/**
ADC general published event, interrupt flags can be found here ADC:MIS1 */
export const EVTSVT_LGPT3IN2SEL_PUBID_ADC_EVT: any = '17'

/**
GPIO generic published event, controlled by GPIO:EVTCFG*/
export const EVTSVT_LGPT3IN2SEL_PUBID_GPIO_EVT: any = '10'

/**
Always inactive*/
export const EVTSVT_LGPT3IN2SEL_PUBID_NONE: any = '0'


// -------- REGISTER LGPT3TENSEL -------- //

/**
Output Selection for LGPT3TEN

*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior*/
export const EVTSVT_LGPT3TENSEL_RESERVED6: any = '26'
export const EVTSVT_LGPT3TENSEL_RESERVED6_M: any = '26'
export const EVTSVT_LGPT3TENSEL_RESERVED6_S: any = '26'
/**
Read/write selection value.

Writing any other value than values defined by a ENUM may result in undefined behavior.*/
export const EVTSVT_LGPT3TENSEL_PUBID: any = '6'
export const EVTSVT_LGPT3TENSEL_PUBID_M: any = '6'
export const EVTSVT_LGPT3TENSEL_PUBID_S: any = '6'
/**
LGPT3 ADC trigger event, controlled by LGPT3:ADCTRG setting*/
export const EVTSVT_LGPT3TENSEL_PUBID_LGPT3_ADC: any = '57'

/**
LGPT3 DMA request event, controlled by LGPT3:DMA setting*/
export const EVTSVT_LGPT3TENSEL_PUBID_LGPT3_DMA: any = '56'

/**
LGPT3 compare/capture output event 2, controlled by LGPT3:C2CFG setting*/
export const EVTSVT_LGPT3TENSEL_PUBID_LGPT3C2: any = '54'

/**
LGPT3 compare/capture output event 1, controlled by LGPT3:C1CFG setting*/
export const EVTSVT_LGPT3TENSEL_PUBID_LGPT3C1: any = '53'

/**
LGPT3 compare/capture output event 0, controlled by LGPT3:C0CFG setting*/
export const EVTSVT_LGPT3TENSEL_PUBID_LGPT3C0: any = '52'

/**
LGPT2 ADC trigger event, controlled by LGPT2:ADCTRG setting*/
export const EVTSVT_LGPT3TENSEL_PUBID_LGPT2_ADC: any = '51'

/**
LGPT2 DMA request event, controlled by LGPT2:DMA setting*/
export const EVTSVT_LGPT3TENSEL_PUBID_LGPT2_DMA: any = '50'

/**
LGPT0 compare/capture output event 2, controlled by LGPT2:C2CFG setting*/
export const EVTSVT_LGPT3TENSEL_PUBID_LGPT2C2: any = '48'

/**
LGPT2 compare/capture output event 1, controlled by LGPT2:C1CFG setting*/
export const EVTSVT_LGPT3TENSEL_PUBID_LGPT2C1: any = '47'

/**
LGPT2 compare/capture output event 0, controlled by LGPT2:C0CFG setting*/
export const EVTSVT_LGPT3TENSEL_PUBID_LGPT2C0: any = '46'

/**
LRFD interrupt to SYSTIM, controlled by LRFDDBELL:SYSTIMOEV.SRC2*/
export const EVTSVT_LGPT3TENSEL_PUBID_LRFD_EVT2: any = '44'

/**
LRFD interrupt to SYSTIM, controlled by LRFDDBELL:SYSTIMOEV.SRC1*/
export const EVTSVT_LGPT3TENSEL_PUBID_LRFD_EVT1: any = '43'

/**
LRFD interrupt to SYSTIM, controlled by LRFDDBELL:SYSTIMOEV.SRC0*/
export const EVTSVT_LGPT3TENSEL_PUBID_LRFD_EVT0: any = '42'

/**
LGPT1 ADC trigger event, controlled by LGPT1:ADCTRG setting*/
export const EVTSVT_LGPT3TENSEL_PUBID_LGPT1_ADC: any = '41'

/**
LGPT1 DMA request event, controlled by LGPT1:DMA setting*/
export const EVTSVT_LGPT3TENSEL_PUBID_LGPT1_DMA: any = '40'

/**
LGPT1 compare/capture output event 2, controlled by LGPT1:C2CFG setting*/
export const EVTSVT_LGPT3TENSEL_PUBID_LGPT1C2: any = '39'

/**
LGPT1 compare/capture output event 1, controlled by LGPT1:C1CFG setting*/
export const EVTSVT_LGPT3TENSEL_PUBID_LGPT1C1: any = '38'

/**
LGPT1 compare/capture output event 0, controlled by LGPT1:C0CFG setting*/
export const EVTSVT_LGPT3TENSEL_PUBID_LGPT1C0: any = '37'

/**
LGPT0 ADC trigger event, controlled by LGPT0:ADCTRG setting*/
export const EVTSVT_LGPT3TENSEL_PUBID_LGPT0_ADC: any = '36'

/**
LGPT0 DMA request event, controlled by LGPT0:DMA setting*/
export const EVTSVT_LGPT3TENSEL_PUBID_LGPT0_DMA: any = '35'

/**
LGPT0 compare/capture output event 2, controlled by LGPT0:C2CFG setting*/
export const EVTSVT_LGPT3TENSEL_PUBID_LGPT0C2: any = '34'

/**
LGPT0 compare/capture output event 1, controlled by LGPT0:C1CFG setting*/
export const EVTSVT_LGPT3TENSEL_PUBID_LGPT0C1: any = '33'

/**
LGPT0 compare/capture output event 0, controlled by LGPT0:C0CFG setting*/
export const EVTSVT_LGPT3TENSEL_PUBID_LGPT0C0: any = '32'

/**
SYSTIM Channel 4 event, event flag is SYSTIM:MIS.EVT4*/
export const EVTSVT_LGPT3TENSEL_PUBID_SYSTIM4: any = '31'

/**
SYSTIM Channel 3 event, event flag is SYSTIM:MIS.EVT3*/
export const EVTSVT_LGPT3TENSEL_PUBID_SYSTIM3: any = '30'

/**
SYSTIM Channel 2 event, event flag is SYSTIM:MIS.EVT2*/
export const EVTSVT_LGPT3TENSEL_PUBID_SYSTIM2: any = '29'

/**
SYSTIM Channel 1 event, event flag is  SYSTIM:MIS.EVT1*/
export const EVTSVT_LGPT3TENSEL_PUBID_SYSTIM1: any = '28'

/**
SYSTIM Channel 0 event, event flag is SYSTIM:MIS.EVT0*/
export const EVTSVT_LGPT3TENSEL_PUBID_SYSTIM0: any = '27'

/**
SYSTIM interrupt driven by synchronizing LFTICK signal to SVT clock*/
export const EVTSVT_LGPT3TENSEL_PUBID_SYSTIM_LT: any = '26'

/**
SYSTIM heartbeat, can be set by SYSTIM:TIMEBIT*/
export const EVTSVT_LGPT3TENSEL_PUBID_SYSTIM_HB: any = '25'

/**
ADC general published event, interrupt flags can be found here ADC:MIS1 */
export const EVTSVT_LGPT3TENSEL_PUBID_ADC_EVT: any = '17'

/**
GPIO generic published event, controlled by GPIO:EVTCFG*/
export const EVTSVT_LGPT3TENSEL_PUBID_GPIO_EVT: any = '10'

/**
Always inactive*/
export const EVTSVT_LGPT3TENSEL_PUBID_NONE: any = '0'


// -------- REGISTER LRFDIN0SEL -------- //

/**
Output Selection for LRFDIN0

*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior*/
export const EVTSVT_LRFDIN0SEL_RESERVED6: any = '26'
export const EVTSVT_LRFDIN0SEL_RESERVED6_M: any = '26'
export const EVTSVT_LRFDIN0SEL_RESERVED6_S: any = '26'
/**
Read only selection value*/
export const EVTSVT_LRFDIN0SEL_PUBID: any = '6'
export const EVTSVT_LRFDIN0SEL_PUBID_M: any = '6'
export const EVTSVT_LRFDIN0SEL_PUBID_S: any = '6'
/**
SYSTIM Channel 2 event, event flag is SYSTIM:MIS.EVT2*/
export const EVTSVT_LRFDIN0SEL_PUBID_SYSTIM2: any = '29'


// -------- REGISTER LRFDIN1SEL -------- //

/**
Output Selection for LRFDIN1

*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior*/
export const EVTSVT_LRFDIN1SEL_RESERVED6: any = '26'
export const EVTSVT_LRFDIN1SEL_RESERVED6_M: any = '26'
export const EVTSVT_LRFDIN1SEL_RESERVED6_S: any = '26'
/**
Read only selection value*/
export const EVTSVT_LRFDIN1SEL_PUBID: any = '6'
export const EVTSVT_LRFDIN1SEL_PUBID_M: any = '6'
export const EVTSVT_LRFDIN1SEL_PUBID_S: any = '6'
/**
SYSTIM Channel 3 event, event flag is SYSTIM:MIS.EVT3*/
export const EVTSVT_LRFDIN1SEL_PUBID_SYSTIM3: any = '30'


// -------- REGISTER LRFDIN2SEL -------- //

/**
Output Selection for LRFDIN2

*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior*/
export const EVTSVT_LRFDIN2SEL_RESERVED6: any = '26'
export const EVTSVT_LRFDIN2SEL_RESERVED6_M: any = '26'
export const EVTSVT_LRFDIN2SEL_RESERVED6_S: any = '26'
/**
Read only selection value*/
export const EVTSVT_LRFDIN2SEL_PUBID: any = '6'
export const EVTSVT_LRFDIN2SEL_PUBID_M: any = '6'
export const EVTSVT_LRFDIN2SEL_PUBID_S: any = '6'
/**
SYSTIM Channel 4 event, event flag is SYSTIM:MIS.EVT4*/
export const EVTSVT_LRFDIN2SEL_PUBID_SYSTIM4: any = '31'


// -------- REGISTER DMACH0SEL -------- //

/**
Output Selection for DMA CH0

*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const EVTSVT_DMACH0SEL_RESERVED29: any = '3'
export const EVTSVT_DMACH0SEL_RESERVED29_M: any = '3'
export const EVTSVT_DMACH0SEL_RESERVED29_S: any = '3'
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior*/
export const EVTSVT_DMACH0SEL_RESERVED3: any = '26'
export const EVTSVT_DMACH0SEL_RESERVED3_M: any = '26'
export const EVTSVT_DMACH0SEL_RESERVED3_S: any = '26'
/**
Read/write selection value.

Writing any other value than values defined by a ENUM may result in undefined behavior.*/
export const EVTSVT_DMACH0SEL_IPID: any = '3'
export const EVTSVT_DMACH0SEL_IPID_M: any = '3'
export const EVTSVT_DMACH0SEL_IPID_S: any = '3'
/**
Selects uart0rxtrg as channel source*/
export const EVTSVT_DMACH0SEL_IPID_UART0RXTRG: any = '7'

/**
Selects spi0txtrg as channel source*/
export const EVTSVT_DMACH0SEL_IPID_SPI0TXTRG: any = '0'


// -------- REGISTER DMACH1SEL -------- //

/**
Output Selection for DMA CH1

*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const EVTSVT_DMACH1SEL_RESERVED29: any = '3'
export const EVTSVT_DMACH1SEL_RESERVED29_M: any = '3'
export const EVTSVT_DMACH1SEL_RESERVED29_S: any = '3'
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior*/
export const EVTSVT_DMACH1SEL_RESERVED3: any = '26'
export const EVTSVT_DMACH1SEL_RESERVED3_M: any = '26'
export const EVTSVT_DMACH1SEL_RESERVED3_S: any = '26'
/**
Read/write selection value.

Writing any other value than values defined by a ENUM may result in undefined behavior.*/
export const EVTSVT_DMACH1SEL_IPID: any = '3'
export const EVTSVT_DMACH1SEL_IPID_M: any = '3'
export const EVTSVT_DMACH1SEL_IPID_S: any = '3'
/**
Selects uart0txtrg as channel source*/
export const EVTSVT_DMACH1SEL_IPID_UART0TXTRG: any = '6'

/**
Selects spi0rxtrg as channel source*/
export const EVTSVT_DMACH1SEL_IPID_SPI0RXTRG: any = '1'


// -------- REGISTER DMACH2SEL -------- //

/**
Output Selection for DMA CH2

*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const EVTSVT_DMACH2SEL_RESERVED29: any = '3'
export const EVTSVT_DMACH2SEL_RESERVED29_M: any = '3'
export const EVTSVT_DMACH2SEL_RESERVED29_S: any = '3'
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior*/
export const EVTSVT_DMACH2SEL_RESERVED3: any = '26'
export const EVTSVT_DMACH2SEL_RESERVED3_M: any = '26'
export const EVTSVT_DMACH2SEL_RESERVED3_S: any = '26'
/**
Read/write selection value.

Writing any other value than values defined by a ENUM may result in undefined behavior.*/
export const EVTSVT_DMACH2SEL_IPID: any = '3'
export const EVTSVT_DMACH2SEL_IPID_M: any = '3'
export const EVTSVT_DMACH2SEL_IPID_S: any = '3'
/**
Selects uart0txtrg as channel source*/
export const EVTSVT_DMACH2SEL_IPID_UART0TXTRG: any = '6'

/**
Reserved value. Should not be programmed.

*/
export const EVTSVT_DMACH2SEL_IPID_RSVD: any = '2'


// -------- REGISTER DMACH3SEL -------- //

/**
Output Selection for DMA CH3

*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const EVTSVT_DMACH3SEL_RESERVED29: any = '3'
export const EVTSVT_DMACH3SEL_RESERVED29_M: any = '3'
export const EVTSVT_DMACH3SEL_RESERVED29_S: any = '3'
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior*/
export const EVTSVT_DMACH3SEL_RESERVED3: any = '26'
export const EVTSVT_DMACH3SEL_RESERVED3_M: any = '26'
export const EVTSVT_DMACH3SEL_RESERVED3_S: any = '26'
/**
Read/write selection value.

Writing any other value than values defined by a ENUM may result in undefined behavior.*/
export const EVTSVT_DMACH3SEL_IPID: any = '3'
export const EVTSVT_DMACH3SEL_IPID_M: any = '3'
export const EVTSVT_DMACH3SEL_IPID_S: any = '3'
/**
Selects uart0rxtrg as channel source*/
export const EVTSVT_DMACH3SEL_IPID_UART0RXTRG: any = '7'

/**
Selects adc0trg as channel source*/
export const EVTSVT_DMACH3SEL_IPID_ADC0TRG: any = '5'


// -------- REGISTER DMACH4SEL -------- //

/**
Output Selection for DMA CH4

*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const EVTSVT_DMACH4SEL_RESERVED29: any = '3'
export const EVTSVT_DMACH4SEL_RESERVED29_M: any = '3'
export const EVTSVT_DMACH4SEL_RESERVED29_S: any = '3'
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior*/
export const EVTSVT_DMACH4SEL_RESERVED3: any = '26'
export const EVTSVT_DMACH4SEL_RESERVED3_M: any = '26'
export const EVTSVT_DMACH4SEL_RESERVED3_S: any = '26'
/**
Read/write selection value.

Writing any other value than values defined by a ENUM may result in undefined behavior.*/
export const EVTSVT_DMACH4SEL_IPID: any = '3'
export const EVTSVT_DMACH4SEL_IPID_M: any = '3'
export const EVTSVT_DMACH4SEL_IPID_S: any = '3'
/**
Selects laestrga as channel source*/
export const EVTSVT_DMACH4SEL_IPID_LAESTRGA: any = '3'

/**
Reserved value. Should not be programmed.

*/
export const EVTSVT_DMACH4SEL_IPID_RSVD: any = '2'


// -------- REGISTER DMACH5SEL -------- //

/**
Output Selection for DMA CH5

*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const EVTSVT_DMACH5SEL_RESERVED29: any = '3'
export const EVTSVT_DMACH5SEL_RESERVED29_M: any = '3'
export const EVTSVT_DMACH5SEL_RESERVED29_S: any = '3'
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior*/
export const EVTSVT_DMACH5SEL_RESERVED3: any = '26'
export const EVTSVT_DMACH5SEL_RESERVED3_M: any = '26'
export const EVTSVT_DMACH5SEL_RESERVED3_S: any = '26'
/**
Read/write selection value.

Writing any other value than values defined by a ENUM may result in undefined behavior.*/
export const EVTSVT_DMACH5SEL_IPID: any = '3'
export const EVTSVT_DMACH5SEL_IPID_M: any = '3'
export const EVTSVT_DMACH5SEL_IPID_S: any = '3'
/**
Selects adc0trg as channel source*/
export const EVTSVT_DMACH5SEL_IPID_ADC0TRG: any = '5'

/**
Selects laestrgb as channel source*/
export const EVTSVT_DMACH5SEL_IPID_LAESTRGB: any = '4'


// -------- REGISTER DMACH6SEL -------- //

/**
Output Selection for DMA CH6

*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior*/
export const EVTSVT_DMACH6SEL_RESERVED17: any = '15'
export const EVTSVT_DMACH6SEL_RESERVED17_M: any = '15'
export const EVTSVT_DMACH6SEL_RESERVED17_S: any = '15'
/**
Edge detect disable.

0: Enabled.
1: Disabled*/
export const EVTSVT_DMACH6SEL_EDGDETDIS: any = '1'
export const EVTSVT_DMACH6SEL_EDGDETDIS_M: any = '1'
export const EVTSVT_DMACH6SEL_EDGDETDIS_S: any = '1'
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior*/
export const EVTSVT_DMACH6SEL_RESERVED6: any = '10'
export const EVTSVT_DMACH6SEL_RESERVED6_M: any = '10'
export const EVTSVT_DMACH6SEL_RESERVED6_S: any = '10'
/**
Read/write selection value.

Writing any other value than values defined by a ENUM may result in undefined behavior.*/
export const EVTSVT_DMACH6SEL_PUBID: any = '6'
export const EVTSVT_DMACH6SEL_PUBID_M: any = '6'
export const EVTSVT_DMACH6SEL_PUBID_S: any = '6'
/**
LGPT3 ADC trigger event, controlled by LGPT3:ADCTRG setting*/
export const EVTSVT_DMACH6SEL_PUBID_LGPT3_ADC: any = '57'

/**
LGPT3 DMA request event, controlled by LGPT3:DMA setting*/
export const EVTSVT_DMACH6SEL_PUBID_LGPT3_DMA: any = '56'

/**
LGPT3 combined interrupt, interrupt flags are found here LGPT3:MIS*/
export const EVTSVT_DMACH6SEL_PUBID_LGPT3_COMB: any = '55'

/**
LGPT3 compare/capture output event 2, controlled by LGPT3:C2CFG setting*/
export const EVTSVT_DMACH6SEL_PUBID_LGPT3C2: any = '54'

/**
LGPT3 compare/capture output event 1, controlled by LGPT3:C1CFG setting*/
export const EVTSVT_DMACH6SEL_PUBID_LGPT3C1: any = '53'

/**
LGPT3 compare/capture output event 0, controlled by LGPT3:C0CFG setting*/
export const EVTSVT_DMACH6SEL_PUBID_LGPT3C0: any = '52'

/**
LGPT2 ADC trigger event, controlled by LGPT2:ADCTRG setting*/
export const EVTSVT_DMACH6SEL_PUBID_LGPT2_ADC: any = '51'

/**
LGPT2 DMA request event, controlled by LGPT2:DMA setting*/
export const EVTSVT_DMACH6SEL_PUBID_LGPT2_DMA: any = '50'

/**
LGPT2 combined interrupt, interrupt flags are found here LGPT2:MIS*/
export const EVTSVT_DMACH6SEL_PUBID_LGPT2_COMB: any = '49'

/**
LGPT0 compare/capture output event 2, controlled by LGPT2:C2CFG setting*/
export const EVTSVT_DMACH6SEL_PUBID_LGPT2C2: any = '48'

/**
LGPT2 compare/capture output event 1, controlled by LGPT2:C1CFG setting*/
export const EVTSVT_DMACH6SEL_PUBID_LGPT2C1: any = '47'

/**
LGPT2 compare/capture output event 0, controlled by LGPT2:C0CFG setting*/
export const EVTSVT_DMACH6SEL_PUBID_LGPT2C0: any = '46'

/**
LRFD interrupt to SYSTIM, controlled by LRFDDBELL:SYSTIMOEV.SRC2*/
export const EVTSVT_DMACH6SEL_PUBID_LRFD_EVT2: any = '44'

/**
LRFD interrupt to SYSTIM, controlled by LRFDDBELL:SYSTIMOEV.SRC1*/
export const EVTSVT_DMACH6SEL_PUBID_LRFD_EVT1: any = '43'

/**
LRFD interrupt to SYSTIM, controlled by LRFDDBELL:SYSTIMOEV.SRC0*/
export const EVTSVT_DMACH6SEL_PUBID_LRFD_EVT0: any = '42'

/**
LGPT1 ADC trigger event, controlled by LGPT1:ADCTRG setting*/
export const EVTSVT_DMACH6SEL_PUBID_LGPT1_ADC: any = '41'

/**
LGPT1 DMA request event, controlled by LGPT1:DMA setting*/
export const EVTSVT_DMACH6SEL_PUBID_LGPT1_DMA: any = '40'

/**
LGPT1 compare/capture output event 2, controlled by LGPT1:C2CFG setting*/
export const EVTSVT_DMACH6SEL_PUBID_LGPT1C2: any = '39'

/**
LGPT1 compare/capture output event 1, controlled by LGPT1:C1CFG setting*/
export const EVTSVT_DMACH6SEL_PUBID_LGPT1C1: any = '38'

/**
LGPT1 compare/capture output event 0, controlled by LGPT1:C0CFG setting*/
export const EVTSVT_DMACH6SEL_PUBID_LGPT1C0: any = '37'

/**
LGPT0 ADC trigger event, controlled by LGPT0:ADCTRG setting*/
export const EVTSVT_DMACH6SEL_PUBID_LGPT0_ADC: any = '36'

/**
LGPT0 DMA request event, controlled by LGPT0:DMA setting*/
export const EVTSVT_DMACH6SEL_PUBID_LGPT0_DMA: any = '35'

/**
LGPT0 compare/capture output event 2, controlled by LGPT0:C2CFG setting*/
export const EVTSVT_DMACH6SEL_PUBID_LGPT0C2: any = '34'

/**
LGPT0 compare/capture output event 1, controlled by LGPT0:C1CFG setting*/
export const EVTSVT_DMACH6SEL_PUBID_LGPT0C1: any = '33'

/**
LGPT0 compare/capture output event 0, controlled by LGPT0:C0CFG setting*/
export const EVTSVT_DMACH6SEL_PUBID_LGPT0C0: any = '32'

/**
SYSTIM Channel 4 event, event flag is SYSTIM:MIS.EVT4*/
export const EVTSVT_DMACH6SEL_PUBID_SYSTIM4: any = '31'

/**
SYSTIM Channel 3 event, event flag is SYSTIM:MIS.EVT3*/
export const EVTSVT_DMACH6SEL_PUBID_SYSTIM3: any = '30'

/**
SYSTIM Channel 2 event, event flag is SYSTIM:MIS.EVT2*/
export const EVTSVT_DMACH6SEL_PUBID_SYSTIM2: any = '29'

/**
SYSTIM Channel 1 event, event flag is  SYSTIM:MIS.EVT1*/
export const EVTSVT_DMACH6SEL_PUBID_SYSTIM1: any = '28'

/**
SYSTIM Channel 0 event, event flag is SYSTIM:MIS.EVT0*/
export const EVTSVT_DMACH6SEL_PUBID_SYSTIM0: any = '27'

/**
SYSTIM interrupt driven by synchronizing LFTICK signal to SVT clock*/
export const EVTSVT_DMACH6SEL_PUBID_SYSTIM_LT: any = '26'

/**
SYSTIM heartbeat, can be set by SYSTIM:TIMEBIT*/
export const EVTSVT_DMACH6SEL_PUBID_SYSTIM_HB: any = '25'

/**
Interrupt event from I2C0, interrupt flags can be found here I2C0:MIS*/
export const EVTSVT_DMACH6SEL_PUBID_I2C0_IRQ: any = '24'

/**
UART0 combined interrupt, interrupt flags are found here UART0:MIS*/
export const EVTSVT_DMACH6SEL_PUBID_UART0_COMB: any = '23'

/**
AES accelerator combined interrupt request, interrupt flags can be found here AES:MIS*/
export const EVTSVT_DMACH6SEL_PUBID_AES_COMB: any = '22'

/**
DMA bus error, corresponds to DMA:ERROR.STATUS*/
export const EVTSVT_DMACH6SEL_PUBID_DMA_ERR: any = '21'

/**
DMA combined done interrupt, corresponding flags can be found here DMA:REQDONE*/
export const EVTSVT_DMACH6SEL_PUBID_DMA_DONE_COMB: any = '20'

/**
LGPT1 combined interrupt, interrupt flags are found here LGPT1:MIS*/
export const EVTSVT_DMACH6SEL_PUBID_LGPT1_COMB: any = '19'

/**
LGPT0 combined interrupt, interrupt flags are found here LGPT0:MIS*/
export const EVTSVT_DMACH6SEL_PUBID_LGPT0_COMB: any = '18'

/**
ADC general published event, interrupt flags can be found here ADC:MIS1 */
export const EVTSVT_DMACH6SEL_PUBID_ADC_EVT: any = '17'

/**
ADC combined interrupt request, interrupt flags can be found here ADC:MIS0*/
export const EVTSVT_DMACH6SEL_PUBID_ADC_COMB: any = '16'

/**
SPI0 combined interrupt request, interrupt flags can be found here SPI0:MIS*/
export const EVTSVT_DMACH6SEL_PUBID_SPI0_COMB: any = '15'

/**
LRFD combined event, interrupt flags can be found here LRFDDBELL:MIS2*/
export const EVTSVT_DMACH6SEL_PUBID_LRFD_IRQ2: any = '14'

/**
LRFD combined event, interrupt flags can be found here LRFDDBELL:MIS1*/
export const EVTSVT_DMACH6SEL_PUBID_LRFD_IRQ1: any = '13'

/**
LRFD combined event, interrupt flags can be found here LRFDDBELL:MIS0*/
export const EVTSVT_DMACH6SEL_PUBID_LRFD_IRQ0: any = '12'

/**
NoWrapper Flash interrupt indicating that the flash operation has completed, interrupt flags can be found here FLASH:MIS*/
export const EVTSVT_DMACH6SEL_PUBID_FLASH_IRQ: any = '11'

/**
GPIO generic published event, controlled by GPIO:EVTCFG*/
export const EVTSVT_DMACH6SEL_PUBID_GPIO_EVT: any = '10'

/**
GPIO combined wake up interrupt, interrupt flags can be found here GPIO:MIS*/
export const EVTSVT_DMACH6SEL_PUBID_GPIO_COMB: any = '9'

/**
SYSTIM combined interrupt, interrupt flags are found here SYSTIM:MIS*/
export const EVTSVT_DMACH6SEL_PUBID_SYSTIM_COMB: any = '8'

/**
IOC synchronous combined event, controlled by IOC:EVTCFG*/
export const EVTSVT_DMACH6SEL_PUBID_AON_IOC_COMB: any = '7'

/**
AON LPCMP interrupt, controlled by SYS0:LPCMPCFG*/
export const EVTSVT_DMACH6SEL_PUBID_AON_LPMCMP_IRQ: any = '6'

/**
DebugSS combined interrupt, interrupt flags can be found here DBGSS:MIS*/
export const EVTSVT_DMACH6SEL_PUBID_AON_DBG_COMB: any = '5'

/**
AON_RTC event, controlled by the RTC:IMASK setting*/
export const EVTSVT_DMACH6SEL_PUBID_AON_RTC_COMB: any = '4'

/**
CKMD combined interrupt request, interrupt flags can be found here CKMD:MIS*/
export const EVTSVT_DMACH6SEL_PUBID_AON_CKM_COMB: any = '3'

/**
PMU combined interrupt request for BATMON, interrupt flags can be found here PMUD:EVENT*/
export const EVTSVT_DMACH6SEL_PUBID_AON_PMU_COMB: any = '2'

/**
Always inactive*/
export const EVTSVT_DMACH6SEL_PUBID_NONE: any = '0'


// -------- REGISTER DMACH7SEL -------- //

/**
Output Selection for DMA CH7

*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior*/
export const EVTSVT_DMACH7SEL_RESERVED17: any = '15'
export const EVTSVT_DMACH7SEL_RESERVED17_M: any = '15'
export const EVTSVT_DMACH7SEL_RESERVED17_S: any = '15'
/**
Edge detect disable.

0: Enabled.
1: Disabled*/
export const EVTSVT_DMACH7SEL_EDGDETDIS: any = '1'
export const EVTSVT_DMACH7SEL_EDGDETDIS_M: any = '1'
export const EVTSVT_DMACH7SEL_EDGDETDIS_S: any = '1'
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior*/
export const EVTSVT_DMACH7SEL_RESERVED6: any = '10'
export const EVTSVT_DMACH7SEL_RESERVED6_M: any = '10'
export const EVTSVT_DMACH7SEL_RESERVED6_S: any = '10'
/**
Read/write selection value.

Writing any other value than values defined by a ENUM may result in undefined behavior.*/
export const EVTSVT_DMACH7SEL_PUBID: any = '6'
export const EVTSVT_DMACH7SEL_PUBID_M: any = '6'
export const EVTSVT_DMACH7SEL_PUBID_S: any = '6'
/**
LGPT3 ADC trigger event, controlled by LGPT3:ADCTRG setting*/
export const EVTSVT_DMACH7SEL_PUBID_LGPT3_ADC: any = '57'

/**
LGPT3 DMA request event, controlled by LGPT3:DMA setting*/
export const EVTSVT_DMACH7SEL_PUBID_LGPT3_DMA: any = '56'

/**
LGPT3 combined interrupt, interrupt flags are found here LGPT3:MIS*/
export const EVTSVT_DMACH7SEL_PUBID_LGPT3_COMB: any = '55'

/**
LGPT3 compare/capture output event 2, controlled by LGPT3:C2CFG setting*/
export const EVTSVT_DMACH7SEL_PUBID_LGPT3C2: any = '54'

/**
LGPT3 compare/capture output event 1, controlled by LGPT3:C1CFG setting*/
export const EVTSVT_DMACH7SEL_PUBID_LGPT3C1: any = '53'

/**
LGPT3 compare/capture output event 0, controlled by LGPT3:C0CFG setting*/
export const EVTSVT_DMACH7SEL_PUBID_LGPT3C0: any = '52'

/**
LGPT2 ADC trigger event, controlled by LGPT2:ADCTRG setting*/
export const EVTSVT_DMACH7SEL_PUBID_LGPT2_ADC: any = '51'

/**
LGPT2 DMA request event, controlled by LGPT2:DMA setting*/
export const EVTSVT_DMACH7SEL_PUBID_LGPT2_DMA: any = '50'

/**
LGPT2 combined interrupt, interrupt flags are found here LGPT2:MIS*/
export const EVTSVT_DMACH7SEL_PUBID_LGPT2_COMB: any = '49'

/**
LGPT0 compare/capture output event 2, controlled by LGPT2:C2CFG setting*/
export const EVTSVT_DMACH7SEL_PUBID_LGPT2C2: any = '48'

/**
LGPT2 compare/capture output event 1, controlled by LGPT2:C1CFG setting*/
export const EVTSVT_DMACH7SEL_PUBID_LGPT2C1: any = '47'

/**
LGPT2 compare/capture output event 0, controlled by LGPT2:C0CFG setting*/
export const EVTSVT_DMACH7SEL_PUBID_LGPT2C0: any = '46'

/**
LRFD interrupt to SYSTIM, controlled by LRFDDBELL:SYSTIMOEV.SRC2*/
export const EVTSVT_DMACH7SEL_PUBID_LRFD_EVT2: any = '44'

/**
LRFD interrupt to SYSTIM, controlled by LRFDDBELL:SYSTIMOEV.SRC1*/
export const EVTSVT_DMACH7SEL_PUBID_LRFD_EVT1: any = '43'

/**
LRFD interrupt to SYSTIM, controlled by LRFDDBELL:SYSTIMOEV.SRC0*/
export const EVTSVT_DMACH7SEL_PUBID_LRFD_EVT0: any = '42'

/**
LGPT1 ADC trigger event, controlled by LGPT1:ADCTRG setting*/
export const EVTSVT_DMACH7SEL_PUBID_LGPT1_ADC: any = '41'

/**
LGPT1 DMA request event, controlled by LGPT1:DMA setting*/
export const EVTSVT_DMACH7SEL_PUBID_LGPT1_DMA: any = '40'

/**
LGPT1 compare/capture output event 2, controlled by LGPT1:C2CFG setting*/
export const EVTSVT_DMACH7SEL_PUBID_LGPT1C2: any = '39'

/**
LGPT1 compare/capture output event 1, controlled by LGPT1:C1CFG setting*/
export const EVTSVT_DMACH7SEL_PUBID_LGPT1C1: any = '38'

/**
LGPT1 compare/capture output event 0, controlled by LGPT1:C0CFG setting*/
export const EVTSVT_DMACH7SEL_PUBID_LGPT1C0: any = '37'

/**
LGPT0 ADC trigger event, controlled by LGPT0:ADCTRG setting*/
export const EVTSVT_DMACH7SEL_PUBID_LGPT0_ADC: any = '36'

/**
LGPT0 DMA request event, controlled by LGPT0:DMA setting*/
export const EVTSVT_DMACH7SEL_PUBID_LGPT0_DMA: any = '35'

/**
LGPT0 compare/capture output event 2, controlled by LGPT0:C2CFG setting*/
export const EVTSVT_DMACH7SEL_PUBID_LGPT0C2: any = '34'

/**
LGPT0 compare/capture output event 1, controlled by LGPT0:C1CFG setting*/
export const EVTSVT_DMACH7SEL_PUBID_LGPT0C1: any = '33'

/**
LGPT0 compare/capture output event 0, controlled by LGPT0:C0CFG setting*/
export const EVTSVT_DMACH7SEL_PUBID_LGPT0C0: any = '32'

/**
SYSTIM Channel 4 event, event flag is SYSTIM:MIS.EVT4*/
export const EVTSVT_DMACH7SEL_PUBID_SYSTIM4: any = '31'

/**
SYSTIM Channel 3 event, event flag is SYSTIM:MIS.EVT3*/
export const EVTSVT_DMACH7SEL_PUBID_SYSTIM3: any = '30'

/**
SYSTIM Channel 2 event, event flag is SYSTIM:MIS.EVT2*/
export const EVTSVT_DMACH7SEL_PUBID_SYSTIM2: any = '29'

/**
SYSTIM Channel 1 event, event flag is  SYSTIM:MIS.EVT1*/
export const EVTSVT_DMACH7SEL_PUBID_SYSTIM1: any = '28'

/**
SYSTIM Channel 0 event, event flag is SYSTIM:MIS.EVT0*/
export const EVTSVT_DMACH7SEL_PUBID_SYSTIM0: any = '27'

/**
SYSTIM interrupt driven by synchronizing LFTICK signal to SVT clock*/
export const EVTSVT_DMACH7SEL_PUBID_SYSTIM_LT: any = '26'

/**
SYSTIM heartbeat, can be set by SYSTIM:TIMEBIT*/
export const EVTSVT_DMACH7SEL_PUBID_SYSTIM_HB: any = '25'

/**
Interrupt event from I2C0, interrupt flags can be found here I2C0:MIS*/
export const EVTSVT_DMACH7SEL_PUBID_I2C0_IRQ: any = '24'

/**
UART0 combined interrupt, interrupt flags are found here UART0:MIS*/
export const EVTSVT_DMACH7SEL_PUBID_UART0_COMB: any = '23'

/**
AES accelerator combined interrupt request, interrupt flags can be found here AES:MIS*/
export const EVTSVT_DMACH7SEL_PUBID_AES_COMB: any = '22'

/**
DMA bus error, corresponds to DMA:ERROR.STATUS*/
export const EVTSVT_DMACH7SEL_PUBID_DMA_ERR: any = '21'

/**
DMA combined done interrupt, corresponding flags can be found here DMA:REQDONE*/
export const EVTSVT_DMACH7SEL_PUBID_DMA_DONE_COMB: any = '20'

/**
LGPT1 combined interrupt, interrupt flags are found here LGPT1:MIS*/
export const EVTSVT_DMACH7SEL_PUBID_LGPT1_COMB: any = '19'

/**
LGPT0 combined interrupt, interrupt flags are found here LGPT0:MIS*/
export const EVTSVT_DMACH7SEL_PUBID_LGPT0_COMB: any = '18'

/**
ADC general published event, interrupt flags can be found here ADC:MIS1 */
export const EVTSVT_DMACH7SEL_PUBID_ADC_EVT: any = '17'

/**
ADC combined interrupt request, interrupt flags can be found here ADC:MIS0*/
export const EVTSVT_DMACH7SEL_PUBID_ADC_COMB: any = '16'

/**
SPI0 combined interrupt request, interrupt flags can be found here SPI0:MIS*/
export const EVTSVT_DMACH7SEL_PUBID_SPI0_COMB: any = '15'

/**
LRFD combined event, interrupt flags can be found here LRFDDBELL:MIS2*/
export const EVTSVT_DMACH7SEL_PUBID_LRFD_IRQ2: any = '14'

/**
LRFD combined event, interrupt flags can be found here LRFDDBELL:MIS1*/
export const EVTSVT_DMACH7SEL_PUBID_LRFD_IRQ1: any = '13'

/**
LRFD combined event, interrupt flags can be found here LRFDDBELL:MIS0*/
export const EVTSVT_DMACH7SEL_PUBID_LRFD_IRQ0: any = '12'

/**
NoWrapper Flash interrupt indicating that the flash operation has completed, interrupt flags can be found here FLASH:MIS*/
export const EVTSVT_DMACH7SEL_PUBID_FLASH_IRQ: any = '11'

/**
GPIO generic published event, controlled by GPIO:EVTCFG*/
export const EVTSVT_DMACH7SEL_PUBID_GPIO_EVT: any = '10'

/**
GPIO combined wake up interrupt, interrupt flags can be found here GPIO:MIS*/
export const EVTSVT_DMACH7SEL_PUBID_GPIO_COMB: any = '9'

/**
SYSTIM combined interrupt, interrupt flags are found here SYSTIM:MIS*/
export const EVTSVT_DMACH7SEL_PUBID_SYSTIM_COMB: any = '8'

/**
IOC synchronous combined event, controlled by IOC:EVTCFG*/
export const EVTSVT_DMACH7SEL_PUBID_AON_IOC_COMB: any = '7'

/**
AON LPCMP interrupt, controlled by SYS0:LPCMPCFG*/
export const EVTSVT_DMACH7SEL_PUBID_AON_LPMCMP_IRQ: any = '6'

/**
DebugSS combined interrupt, interrupt flags can be found here DBGSS:MIS*/
export const EVTSVT_DMACH7SEL_PUBID_AON_DBG_COMB: any = '5'

/**
AON_RTC event, controlled by the RTC:IMASK setting*/
export const EVTSVT_DMACH7SEL_PUBID_AON_RTC_COMB: any = '4'

/**
CKMD combined interrupt request, interrupt flags can be found here CKMD:MIS*/
export const EVTSVT_DMACH7SEL_PUBID_AON_CKM_COMB: any = '3'

/**
PMU combined interrupt request for BATMON, interrupt flags can be found here PMUD:EVENT*/
export const EVTSVT_DMACH7SEL_PUBID_AON_PMU_COMB: any = '2'

/**
Always inactive*/
export const EVTSVT_DMACH7SEL_PUBID_NONE: any = '0'


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
export const GPIO_DESC_MODID_M: any = '16'
export const GPIO_DESC_MODID_S: any = '16'
/**
Standard IP MMR block offset. Standard IP MMRs are the set from aggregated IRQ registers till DTB.


0: Standard IP MMRs do not exist

0x1-0xF: Standard IP MMRs begin at offset of (64*STDIPOFF from the base IP address)*/
export const GPIO_DESC_STDIPOFF: any = '4'
export const GPIO_DESC_STDIPOFF_M: any = '4'
export const GPIO_DESC_STDIPOFF_S: any = '4'
/**
IP Instance ID number. If multiple instances of IP exist in the device, this field can identify the instance number (0-15).*/
export const GPIO_DESC_INSTIDX: any = '4'
export const GPIO_DESC_INSTIDX_M: any = '4'
export const GPIO_DESC_INSTIDX_S: any = '4'
/**
Major revision of IP (0-15).*/
export const GPIO_DESC_MAJREV: any = '4'
export const GPIO_DESC_MAJREV_M: any = '4'
export const GPIO_DESC_MAJREV_S: any = '4'
/**
Minor revision of IP (0-15).*/
export const GPIO_DESC_MINREV: any = '4'
export const GPIO_DESC_MINREV_M: any = '4'
export const GPIO_DESC_MINREV_S: any = '4'

// -------- REGISTER DESCEX -------- //

/**
Extended Description Register. This register provides configuration details of the IP to software drivers and end users.*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_DESCEX_RESERVED6: any = '26'
export const GPIO_DESCEX_RESERVED6_M: any = '26'
export const GPIO_DESCEX_RESERVED6_S: any = '26'
/**
This provides the total number of DIOs supported by GPIO. The number of DIOs supprted is NUMDIO + 1*/
export const GPIO_DESCEX_NUMDIO: any = '6'
export const GPIO_DESCEX_NUMDIO_M: any = '6'
export const GPIO_DESCEX_NUMDIO_S: any = '6'

// -------- REGISTER IMASK -------- //

/**
Interrupt mask for DIO pins*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_IMASK_RESERVED26: any = '6'
export const GPIO_IMASK_RESERVED26_M: any = '6'
export const GPIO_IMASK_RESERVED26_S: any = '6'
/**
Interrupt mask for DIO25*/
export const GPIO_IMASK_DIO25: any = '1'
export const GPIO_IMASK_DIO25_M: any = '1'
export const GPIO_IMASK_DIO25_S: any = '1'
/**
Set Interrrupt Mask*/
export const GPIO_IMASK_DIO25_SET: any = '1'

/**
Clear Interrupt Mask*/
export const GPIO_IMASK_DIO25_CLR: any = '0'

/**
Interrupt mask for DIO24*/
export const GPIO_IMASK_DIO24: any = '1'
export const GPIO_IMASK_DIO24_M: any = '1'
export const GPIO_IMASK_DIO24_S: any = '1'
/**
Set Interrrupt Mask*/
export const GPIO_IMASK_DIO24_SET: any = '1'

/**
Clear Interrupt Mask*/
export const GPIO_IMASK_DIO24_CLR: any = '0'

/**
Interrupt mask for DIO23*/
export const GPIO_IMASK_DIO23: any = '1'
export const GPIO_IMASK_DIO23_M: any = '1'
export const GPIO_IMASK_DIO23_S: any = '1'
/**
Set Interrrupt Mask*/
export const GPIO_IMASK_DIO23_SET: any = '1'

/**
Clear Interrupt Mask*/
export const GPIO_IMASK_DIO23_CLR: any = '0'

/**
Interrupt mask for DIO22*/
export const GPIO_IMASK_DIO22: any = '1'
export const GPIO_IMASK_DIO22_M: any = '1'
export const GPIO_IMASK_DIO22_S: any = '1'
/**
Set Interrrupt Mask*/
export const GPIO_IMASK_DIO22_SET: any = '1'

/**
Clear Interrupt Mask*/
export const GPIO_IMASK_DIO22_CLR: any = '0'

/**
Interrupt mask for DIO21*/
export const GPIO_IMASK_DIO21: any = '1'
export const GPIO_IMASK_DIO21_M: any = '1'
export const GPIO_IMASK_DIO21_S: any = '1'
/**
Set Interrrupt Mask*/
export const GPIO_IMASK_DIO21_SET: any = '1'

/**
Clear Interrupt Mask*/
export const GPIO_IMASK_DIO21_CLR: any = '0'

/**
Interrupt mask for DIO20*/
export const GPIO_IMASK_DIO20: any = '1'
export const GPIO_IMASK_DIO20_M: any = '1'
export const GPIO_IMASK_DIO20_S: any = '1'
/**
Set Interrrupt Mask*/
export const GPIO_IMASK_DIO20_SET: any = '1'

/**
Clear Interrupt Mask*/
export const GPIO_IMASK_DIO20_CLR: any = '0'

/**
Interrupt mask for DIO19*/
export const GPIO_IMASK_DIO19: any = '1'
export const GPIO_IMASK_DIO19_M: any = '1'
export const GPIO_IMASK_DIO19_S: any = '1'
/**
Set Interrrupt Mask*/
export const GPIO_IMASK_DIO19_SET: any = '1'

/**
Clear Interrupt Mask*/
export const GPIO_IMASK_DIO19_CLR: any = '0'

/**
Interrupt mask for DIO18*/
export const GPIO_IMASK_DIO18: any = '1'
export const GPIO_IMASK_DIO18_M: any = '1'
export const GPIO_IMASK_DIO18_S: any = '1'
/**
Set Interrrupt Mask*/
export const GPIO_IMASK_DIO18_SET: any = '1'

/**
Clear Interrupt Mask*/
export const GPIO_IMASK_DIO18_CLR: any = '0'

/**
Interrupt mask for DIO17*/
export const GPIO_IMASK_DIO17: any = '1'
export const GPIO_IMASK_DIO17_M: any = '1'
export const GPIO_IMASK_DIO17_S: any = '1'
/**
Set Interrrupt Mask*/
export const GPIO_IMASK_DIO17_SET: any = '1'

/**
Clear Interrupt Mask*/
export const GPIO_IMASK_DIO17_CLR: any = '0'

/**
Interrupt mask for DIO16*/
export const GPIO_IMASK_DIO16: any = '1'
export const GPIO_IMASK_DIO16_M: any = '1'
export const GPIO_IMASK_DIO16_S: any = '1'
/**
Set Interrrupt Mask*/
export const GPIO_IMASK_DIO16_SET: any = '1'

/**
Clear Interrupt Mask*/
export const GPIO_IMASK_DIO16_CLR: any = '0'

/**
Interrupt mask for DIO15*/
export const GPIO_IMASK_DIO15: any = '1'
export const GPIO_IMASK_DIO15_M: any = '1'
export const GPIO_IMASK_DIO15_S: any = '1'
/**
Set Interrrupt Mask*/
export const GPIO_IMASK_DIO15_SET: any = '1'

/**
Clear Interrupt Mask*/
export const GPIO_IMASK_DIO15_CLR: any = '0'

/**
Interrupt mask for DIO14*/
export const GPIO_IMASK_DIO14: any = '1'
export const GPIO_IMASK_DIO14_M: any = '1'
export const GPIO_IMASK_DIO14_S: any = '1'
/**
Set Interrrupt Mask*/
export const GPIO_IMASK_DIO14_SET: any = '1'

/**
Clear Interrupt Mask*/
export const GPIO_IMASK_DIO14_CLR: any = '0'

/**
Interrupt mask for DIO13*/
export const GPIO_IMASK_DIO13: any = '1'
export const GPIO_IMASK_DIO13_M: any = '1'
export const GPIO_IMASK_DIO13_S: any = '1'
/**
Set Interrrupt Mask*/
export const GPIO_IMASK_DIO13_SET: any = '1'

/**
Clear Interrupt Mask*/
export const GPIO_IMASK_DIO13_CLR: any = '0'

/**
Interrupt mask for DIO12*/
export const GPIO_IMASK_DIO12: any = '1'
export const GPIO_IMASK_DIO12_M: any = '1'
export const GPIO_IMASK_DIO12_S: any = '1'
/**
Set Interrrupt Mask*/
export const GPIO_IMASK_DIO12_SET: any = '1'

/**
Clear Interrupt Mask*/
export const GPIO_IMASK_DIO12_CLR: any = '0'

/**
Interrupt mask for DIO11*/
export const GPIO_IMASK_DIO11: any = '1'
export const GPIO_IMASK_DIO11_M: any = '1'
export const GPIO_IMASK_DIO11_S: any = '1'
/**
Set Interrrupt Mask*/
export const GPIO_IMASK_DIO11_SET: any = '1'

/**
Clear Interrupt Mask*/
export const GPIO_IMASK_DIO11_CLR: any = '0'

/**
Interrupt mask for DIO10*/
export const GPIO_IMASK_DIO10: any = '1'
export const GPIO_IMASK_DIO10_M: any = '1'
export const GPIO_IMASK_DIO10_S: any = '1'
/**
Set Interrrupt Mask*/
export const GPIO_IMASK_DIO10_SET: any = '1'

/**
Clear Interrupt Mask*/
export const GPIO_IMASK_DIO10_CLR: any = '0'

/**
Interrupt mask for DIO9*/
export const GPIO_IMASK_DIO9: any = '1'
export const GPIO_IMASK_DIO9_M: any = '1'
export const GPIO_IMASK_DIO9_S: any = '1'
/**
Set Interrrupt Mask*/
export const GPIO_IMASK_DIO9_SET: any = '1'

/**
Clear Interrupt Mask*/
export const GPIO_IMASK_DIO9_CLR: any = '0'

/**
Interrupt mask for DIO8*/
export const GPIO_IMASK_DIO8: any = '1'
export const GPIO_IMASK_DIO8_M: any = '1'
export const GPIO_IMASK_DIO8_S: any = '1'
/**
Set Interrrupt Mask*/
export const GPIO_IMASK_DIO8_SET: any = '1'

/**
Clear Interrupt Mask*/
export const GPIO_IMASK_DIO8_CLR: any = '0'

/**
Interrupt mask for DIO7*/
export const GPIO_IMASK_DIO7: any = '1'
export const GPIO_IMASK_DIO7_M: any = '1'
export const GPIO_IMASK_DIO7_S: any = '1'
/**
Set Interrrupt Mask*/
export const GPIO_IMASK_DIO7_SET: any = '1'

/**
Clear Interrupt Mask*/
export const GPIO_IMASK_DIO7_CLR: any = '0'

/**
Interrupt mask for DIO6*/
export const GPIO_IMASK_DIO6: any = '1'
export const GPIO_IMASK_DIO6_M: any = '1'
export const GPIO_IMASK_DIO6_S: any = '1'
/**
Set Interrrupt Mask*/
export const GPIO_IMASK_DIO6_SET: any = '1'

/**
Clear Interrupt Mask*/
export const GPIO_IMASK_DIO6_CLR: any = '0'

/**
Interrupt mask for DIO5*/
export const GPIO_IMASK_DIO5: any = '1'
export const GPIO_IMASK_DIO5_M: any = '1'
export const GPIO_IMASK_DIO5_S: any = '1'
/**
Set Interrrupt Mask*/
export const GPIO_IMASK_DIO5_SET: any = '1'

/**
Clear Interrupt Mask*/
export const GPIO_IMASK_DIO5_CLR: any = '0'

/**
Interrupt mask for DIO4*/
export const GPIO_IMASK_DIO4: any = '1'
export const GPIO_IMASK_DIO4_M: any = '1'
export const GPIO_IMASK_DIO4_S: any = '1'
/**
Set Interrrupt Mask*/
export const GPIO_IMASK_DIO4_SET: any = '1'

/**
Clear Interrupt Mask*/
export const GPIO_IMASK_DIO4_CLR: any = '0'

/**
Interrupt mask for DIO3*/
export const GPIO_IMASK_DIO3: any = '1'
export const GPIO_IMASK_DIO3_M: any = '1'
export const GPIO_IMASK_DIO3_S: any = '1'
/**
Set Interrrupt Mask*/
export const GPIO_IMASK_DIO3_SET: any = '1'

/**
Clear Interrupt Mask*/
export const GPIO_IMASK_DIO3_CLR: any = '0'

/**
Interrupt mask for DIO2*/
export const GPIO_IMASK_DIO2: any = '1'
export const GPIO_IMASK_DIO2_M: any = '1'
export const GPIO_IMASK_DIO2_S: any = '1'
/**
Set Interrrupt Mask*/
export const GPIO_IMASK_DIO2_SET: any = '1'

/**
Clear Interrupt Mask*/
export const GPIO_IMASK_DIO2_CLR: any = '0'

/**
Interrupt mask for DIO1*/
export const GPIO_IMASK_DIO1: any = '1'
export const GPIO_IMASK_DIO1_M: any = '1'
export const GPIO_IMASK_DIO1_S: any = '1'
/**
Set Interrrupt Mask*/
export const GPIO_IMASK_DIO1_SET: any = '1'

/**
Clear Interrupt Mask*/
export const GPIO_IMASK_DIO1_CLR: any = '0'

/**
Interrupt mask for DIO0*/
export const GPIO_IMASK_DIO0: any = '1'
export const GPIO_IMASK_DIO0_M: any = '1'
export const GPIO_IMASK_DIO0_S: any = '1'
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
export const GPIO_RIS_RESERVED26_M: any = '6'
export const GPIO_RIS_RESERVED26_S: any = '6'
/**
Raw interrupt flag for DIO25*/
export const GPIO_RIS_DIO25: any = '1'
export const GPIO_RIS_DIO25_M: any = '1'
export const GPIO_RIS_DIO25_S: any = '1'
/**
Interrupt occured*/
export const GPIO_RIS_DIO25_SET: any = '1'

/**
Interrupt did not occur*/
export const GPIO_RIS_DIO25_CLR: any = '0'

/**
Raw interrupt flag for DIO24*/
export const GPIO_RIS_DIO24: any = '1'
export const GPIO_RIS_DIO24_M: any = '1'
export const GPIO_RIS_DIO24_S: any = '1'
/**
Interrupt occured*/
export const GPIO_RIS_DIO24_SET: any = '1'

/**
Interrupt did not occur*/
export const GPIO_RIS_DIO24_CLR: any = '0'

/**
Raw interrupt flag for DIO23*/
export const GPIO_RIS_DIO23: any = '1'
export const GPIO_RIS_DIO23_M: any = '1'
export const GPIO_RIS_DIO23_S: any = '1'
/**
Interrupt occured*/
export const GPIO_RIS_DIO23_SET: any = '1'

/**
Interrupt did not occur*/
export const GPIO_RIS_DIO23_CLR: any = '0'

/**
Raw interrupt flag for DIO22*/
export const GPIO_RIS_DIO22: any = '1'
export const GPIO_RIS_DIO22_M: any = '1'
export const GPIO_RIS_DIO22_S: any = '1'
/**
Interrupt occured*/
export const GPIO_RIS_DIO22_SET: any = '1'

/**
Interrupt did not occur*/
export const GPIO_RIS_DIO22_CLR: any = '0'

/**
Raw interrupt flag for DIO21*/
export const GPIO_RIS_DIO21: any = '1'
export const GPIO_RIS_DIO21_M: any = '1'
export const GPIO_RIS_DIO21_S: any = '1'
/**
Interrupt occured*/
export const GPIO_RIS_DIO21_SET: any = '1'

/**
Interrupt did not occur*/
export const GPIO_RIS_DIO21_CLR: any = '0'

/**
Raw interrupt flag for DIO20*/
export const GPIO_RIS_DIO20: any = '1'
export const GPIO_RIS_DIO20_M: any = '1'
export const GPIO_RIS_DIO20_S: any = '1'
/**
Interrupt occured*/
export const GPIO_RIS_DIO20_SET: any = '1'

/**
Interrupt did not occur*/
export const GPIO_RIS_DIO20_CLR: any = '0'

/**
Raw interrupt flag for DIO19*/
export const GPIO_RIS_DIO19: any = '1'
export const GPIO_RIS_DIO19_M: any = '1'
export const GPIO_RIS_DIO19_S: any = '1'
/**
Interrupt occured*/
export const GPIO_RIS_DIO19_SET: any = '1'

/**
Interrupt did not occur*/
export const GPIO_RIS_DIO19_CLR: any = '0'

/**
Raw interrupt flag for DIO18*/
export const GPIO_RIS_DIO18: any = '1'
export const GPIO_RIS_DIO18_M: any = '1'
export const GPIO_RIS_DIO18_S: any = '1'
/**
Interrupt occured*/
export const GPIO_RIS_DIO18_SET: any = '1'

/**
Interrupt did not occur*/
export const GPIO_RIS_DIO18_CLR: any = '0'

/**
Raw interrupt flag for DIO17*/
export const GPIO_RIS_DIO17: any = '1'
export const GPIO_RIS_DIO17_M: any = '1'
export const GPIO_RIS_DIO17_S: any = '1'
/**
Interrupt occured*/
export const GPIO_RIS_DIO17_SET: any = '1'

/**
Interrupt did not occur*/
export const GPIO_RIS_DIO17_CLR: any = '0'

/**
Raw interrupt flag for DIO16*/
export const GPIO_RIS_DIO16: any = '1'
export const GPIO_RIS_DIO16_M: any = '1'
export const GPIO_RIS_DIO16_S: any = '1'
/**
Interrupt occured*/
export const GPIO_RIS_DIO16_SET: any = '1'

/**
Interrupt did not occur*/
export const GPIO_RIS_DIO16_CLR: any = '0'

/**
Raw interrupt flag for DIO15*/
export const GPIO_RIS_DIO15: any = '1'
export const GPIO_RIS_DIO15_M: any = '1'
export const GPIO_RIS_DIO15_S: any = '1'
/**
Interrupt occured*/
export const GPIO_RIS_DIO15_SET: any = '1'

/**
Interrupt did not occur*/
export const GPIO_RIS_DIO15_CLR: any = '0'

/**
Raw interrupt flag for DIO14*/
export const GPIO_RIS_DIO14: any = '1'
export const GPIO_RIS_DIO14_M: any = '1'
export const GPIO_RIS_DIO14_S: any = '1'
/**
Interrupt occured*/
export const GPIO_RIS_DIO14_SET: any = '1'

/**
Interrupt did not occur*/
export const GPIO_RIS_DIO14_CLR: any = '0'

/**
Raw interrupt flag for DIO13*/
export const GPIO_RIS_DIO13: any = '1'
export const GPIO_RIS_DIO13_M: any = '1'
export const GPIO_RIS_DIO13_S: any = '1'
/**
Interrupt occured*/
export const GPIO_RIS_DIO13_SET: any = '1'

/**
Interrupt did not occur*/
export const GPIO_RIS_DIO13_CLR: any = '0'

/**
Raw interrupt flag for DIO12*/
export const GPIO_RIS_DIO12: any = '1'
export const GPIO_RIS_DIO12_M: any = '1'
export const GPIO_RIS_DIO12_S: any = '1'
/**
Interrupt occured*/
export const GPIO_RIS_DIO12_SET: any = '1'

/**
Interrupt did not occur*/
export const GPIO_RIS_DIO12_CLR: any = '0'

/**
Raw interrupt flag for DIO11*/
export const GPIO_RIS_DIO11: any = '1'
export const GPIO_RIS_DIO11_M: any = '1'
export const GPIO_RIS_DIO11_S: any = '1'
/**
Interrupt occured*/
export const GPIO_RIS_DIO11_SET: any = '1'

/**
Interrupt did not occur*/
export const GPIO_RIS_DIO11_CLR: any = '0'

/**
Raw interrupt flag for DIO10*/
export const GPIO_RIS_DIO10: any = '1'
export const GPIO_RIS_DIO10_M: any = '1'
export const GPIO_RIS_DIO10_S: any = '1'
/**
Interrupt occured*/
export const GPIO_RIS_DIO10_SET: any = '1'

/**
Interrupt did not occur*/
export const GPIO_RIS_DIO10_CLR: any = '0'

/**
Raw interrupt flag for DIO9*/
export const GPIO_RIS_DIO9: any = '1'
export const GPIO_RIS_DIO9_M: any = '1'
export const GPIO_RIS_DIO9_S: any = '1'
/**
Interrupt occured*/
export const GPIO_RIS_DIO9_SET: any = '1'

/**
Interrupt did not occur*/
export const GPIO_RIS_DIO9_CLR: any = '0'

/**
Raw interrupt flag for DIO8*/
export const GPIO_RIS_DIO8: any = '1'
export const GPIO_RIS_DIO8_M: any = '1'
export const GPIO_RIS_DIO8_S: any = '1'
/**
Interrupt occured*/
export const GPIO_RIS_DIO8_SET: any = '1'

/**
Interrupt did not occur*/
export const GPIO_RIS_DIO8_CLR: any = '0'

/**
Raw interrupt flag for DIO7*/
export const GPIO_RIS_DIO7: any = '1'
export const GPIO_RIS_DIO7_M: any = '1'
export const GPIO_RIS_DIO7_S: any = '1'
/**
Interrupt occured*/
export const GPIO_RIS_DIO7_SET: any = '1'

/**
Interrupt did not occur*/
export const GPIO_RIS_DIO7_CLR: any = '0'

/**
Raw interrupt flag for DIO6*/
export const GPIO_RIS_DIO6: any = '1'
export const GPIO_RIS_DIO6_M: any = '1'
export const GPIO_RIS_DIO6_S: any = '1'
/**
Interrupt occured*/
export const GPIO_RIS_DIO6_SET: any = '1'

/**
Interrupt did not occur*/
export const GPIO_RIS_DIO6_CLR: any = '0'

/**
Raw interrupt flag for DIO5*/
export const GPIO_RIS_DIO5: any = '1'
export const GPIO_RIS_DIO5_M: any = '1'
export const GPIO_RIS_DIO5_S: any = '1'
/**
Interrupt occured*/
export const GPIO_RIS_DIO5_SET: any = '1'

/**
Interrupt did not occur*/
export const GPIO_RIS_DIO5_CLR: any = '0'

/**
Raw interrupt flag for DIO4*/
export const GPIO_RIS_DIO4: any = '1'
export const GPIO_RIS_DIO4_M: any = '1'
export const GPIO_RIS_DIO4_S: any = '1'
/**
Interrupt occured*/
export const GPIO_RIS_DIO4_SET: any = '1'

/**
Interrupt did not occur*/
export const GPIO_RIS_DIO4_CLR: any = '0'

/**
Raw interrupt flag for DIO3*/
export const GPIO_RIS_DIO3: any = '1'
export const GPIO_RIS_DIO3_M: any = '1'
export const GPIO_RIS_DIO3_S: any = '1'
/**
Interrupt occured*/
export const GPIO_RIS_DIO3_SET: any = '1'

/**
Interrupt did not occur*/
export const GPIO_RIS_DIO3_CLR: any = '0'

/**
Raw interrupt flag for DIO2*/
export const GPIO_RIS_DIO2: any = '1'
export const GPIO_RIS_DIO2_M: any = '1'
export const GPIO_RIS_DIO2_S: any = '1'
/**
Interrupt occured*/
export const GPIO_RIS_DIO2_SET: any = '1'

/**
Interrupt did not occur*/
export const GPIO_RIS_DIO2_CLR: any = '0'

/**
Raw interrupt flag for DIO1*/
export const GPIO_RIS_DIO1: any = '1'
export const GPIO_RIS_DIO1_M: any = '1'
export const GPIO_RIS_DIO1_S: any = '1'
/**
Interrupt occured*/
export const GPIO_RIS_DIO1_SET: any = '1'

/**
Interrupt did not occur*/
export const GPIO_RIS_DIO1_CLR: any = '0'

/**
Raw interrupt flag for DIO0*/
export const GPIO_RIS_DIO0: any = '1'
export const GPIO_RIS_DIO0_M: any = '1'
export const GPIO_RIS_DIO0_S: any = '1'
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
export const GPIO_MIS_RESERVED26_M: any = '6'
export const GPIO_MIS_RESERVED26_S: any = '6'
/**
Masked interrupt flag for DIO25*/
export const GPIO_MIS_DIO25: any = '1'
export const GPIO_MIS_DIO25_M: any = '1'
export const GPIO_MIS_DIO25_S: any = '1'
/**
Interrupt occured*/
export const GPIO_MIS_DIO25_SET: any = '1'

/**
Interrupt did not occur*/
export const GPIO_MIS_DIO25_CLR: any = '0'

/**
Masked interrupt flag for DIO24*/
export const GPIO_MIS_DIO24: any = '1'
export const GPIO_MIS_DIO24_M: any = '1'
export const GPIO_MIS_DIO24_S: any = '1'
/**
Interrupt occured*/
export const GPIO_MIS_DIO24_SET: any = '1'

/**
Interrupt did not occur*/
export const GPIO_MIS_DIO24_CLR: any = '0'

/**
Masked interrupt flag for DIO23*/
export const GPIO_MIS_DIO23: any = '1'
export const GPIO_MIS_DIO23_M: any = '1'
export const GPIO_MIS_DIO23_S: any = '1'
/**
Interrupt occured*/
export const GPIO_MIS_DIO23_SET: any = '1'

/**
Interrupt did not occur*/
export const GPIO_MIS_DIO23_CLR: any = '0'

/**
Masked interrupt flag for DIO22*/
export const GPIO_MIS_DIO22: any = '1'
export const GPIO_MIS_DIO22_M: any = '1'
export const GPIO_MIS_DIO22_S: any = '1'
/**
Interrupt occured*/
export const GPIO_MIS_DIO22_SET: any = '1'

/**
Interrupt did not occur*/
export const GPIO_MIS_DIO22_CLR: any = '0'

/**
Masked interrupt flag for DIO21*/
export const GPIO_MIS_DIO21: any = '1'
export const GPIO_MIS_DIO21_M: any = '1'
export const GPIO_MIS_DIO21_S: any = '1'
/**
Interrupt occured*/
export const GPIO_MIS_DIO21_SET: any = '1'

/**
Interrupt did not occur*/
export const GPIO_MIS_DIO21_CLR: any = '0'

/**
Masked interrupt flag for DIO20*/
export const GPIO_MIS_DIO20: any = '1'
export const GPIO_MIS_DIO20_M: any = '1'
export const GPIO_MIS_DIO20_S: any = '1'
/**
Interrupt occured*/
export const GPIO_MIS_DIO20_SET: any = '1'

/**
Interrupt did not occur*/
export const GPIO_MIS_DIO20_CLR: any = '0'

/**
Masked interrupt flag for DIO19*/
export const GPIO_MIS_DIO19: any = '1'
export const GPIO_MIS_DIO19_M: any = '1'
export const GPIO_MIS_DIO19_S: any = '1'
/**
Interrupt occured*/
export const GPIO_MIS_DIO19_SET: any = '1'

/**
Interrupt did not occur*/
export const GPIO_MIS_DIO19_CLR: any = '0'

/**
Masked interrupt flag for DIO18*/
export const GPIO_MIS_DIO18: any = '1'
export const GPIO_MIS_DIO18_M: any = '1'
export const GPIO_MIS_DIO18_S: any = '1'
/**
Interrupt occured*/
export const GPIO_MIS_DIO18_SET: any = '1'

/**
Interrupt did not occur*/
export const GPIO_MIS_DIO18_CLR: any = '0'

/**
Masked interrupt flag for DIO17*/
export const GPIO_MIS_DIO17: any = '1'
export const GPIO_MIS_DIO17_M: any = '1'
export const GPIO_MIS_DIO17_S: any = '1'
/**
Interrupt occured*/
export const GPIO_MIS_DIO17_SET: any = '1'

/**
Interrupt did not occur*/
export const GPIO_MIS_DIO17_CLR: any = '0'

/**
Masked interrupt flag for DIO16*/
export const GPIO_MIS_DIO16: any = '1'
export const GPIO_MIS_DIO16_M: any = '1'
export const GPIO_MIS_DIO16_S: any = '1'
/**
Interrupt occured*/
export const GPIO_MIS_DIO16_SET: any = '1'

/**
Interrupt did not occur*/
export const GPIO_MIS_DIO16_CLR: any = '0'

/**
Masked interrupt flag for DIO15*/
export const GPIO_MIS_DIO15: any = '1'
export const GPIO_MIS_DIO15_M: any = '1'
export const GPIO_MIS_DIO15_S: any = '1'
/**
Interrupt occured*/
export const GPIO_MIS_DIO15_SET: any = '1'

/**
Interrupt did not occur*/
export const GPIO_MIS_DIO15_CLR: any = '0'

/**
Masked interrupt flag for DIO14*/
export const GPIO_MIS_DIO14: any = '1'
export const GPIO_MIS_DIO14_M: any = '1'
export const GPIO_MIS_DIO14_S: any = '1'
/**
Interrupt occured*/
export const GPIO_MIS_DIO14_SET: any = '1'

/**
Interrupt did not occur*/
export const GPIO_MIS_DIO14_CLR: any = '0'

/**
Masked interrupt flag for DIO13*/
export const GPIO_MIS_DIO13: any = '1'
export const GPIO_MIS_DIO13_M: any = '1'
export const GPIO_MIS_DIO13_S: any = '1'
/**
Interrupt occured*/
export const GPIO_MIS_DIO13_SET: any = '1'

/**
Interrupt did not occur*/
export const GPIO_MIS_DIO13_CLR: any = '0'

/**
Masked interrupt flag for DIO12*/
export const GPIO_MIS_DIO12: any = '1'
export const GPIO_MIS_DIO12_M: any = '1'
export const GPIO_MIS_DIO12_S: any = '1'
/**
Interrupt occured*/
export const GPIO_MIS_DIO12_SET: any = '1'

/**
Interrupt did not occur*/
export const GPIO_MIS_DIO12_CLR: any = '0'

/**
Masked interrupt flag for DIO11*/
export const GPIO_MIS_DIO11: any = '1'
export const GPIO_MIS_DIO11_M: any = '1'
export const GPIO_MIS_DIO11_S: any = '1'
/**
Interrupt occured*/
export const GPIO_MIS_DIO11_SET: any = '1'

/**
Interrupt did not occur*/
export const GPIO_MIS_DIO11_CLR: any = '0'

/**
Masked interrupt flag for DIO10*/
export const GPIO_MIS_DIO10: any = '1'
export const GPIO_MIS_DIO10_M: any = '1'
export const GPIO_MIS_DIO10_S: any = '1'
/**
Interrupt occured*/
export const GPIO_MIS_DIO10_SET: any = '1'

/**
Interrupt did not occur*/
export const GPIO_MIS_DIO10_CLR: any = '0'

/**
Masked interrupt flag for DIO9*/
export const GPIO_MIS_DIO9: any = '1'
export const GPIO_MIS_DIO9_M: any = '1'
export const GPIO_MIS_DIO9_S: any = '1'
/**
Interrupt occured*/
export const GPIO_MIS_DIO9_SET: any = '1'

/**
Interrupt did not occur*/
export const GPIO_MIS_DIO9_CLR: any = '0'

/**
Masked interrupt flag for DIO8*/
export const GPIO_MIS_DIO8: any = '1'
export const GPIO_MIS_DIO8_M: any = '1'
export const GPIO_MIS_DIO8_S: any = '1'
/**
Interrupt occured*/
export const GPIO_MIS_DIO8_SET: any = '1'

/**
Interrupt did not occur*/
export const GPIO_MIS_DIO8_CLR: any = '0'

/**
Masked interrupt flag for DIO7*/
export const GPIO_MIS_DIO7: any = '1'
export const GPIO_MIS_DIO7_M: any = '1'
export const GPIO_MIS_DIO7_S: any = '1'
/**
Interrupt occured*/
export const GPIO_MIS_DIO7_SET: any = '1'

/**
Interrupt did not occur*/
export const GPIO_MIS_DIO7_CLR: any = '0'

/**
Masked interrupt flag for DIO6*/
export const GPIO_MIS_DIO6: any = '1'
export const GPIO_MIS_DIO6_M: any = '1'
export const GPIO_MIS_DIO6_S: any = '1'
/**
Interrupt occured*/
export const GPIO_MIS_DIO6_SET: any = '1'

/**
Interrupt did not occur*/
export const GPIO_MIS_DIO6_CLR: any = '0'

/**
Masked interrupt flag for DIO5*/
export const GPIO_MIS_DIO5: any = '1'
export const GPIO_MIS_DIO5_M: any = '1'
export const GPIO_MIS_DIO5_S: any = '1'
/**
Interrupt occured*/
export const GPIO_MIS_DIO5_SET: any = '1'

/**
Interrupt did not occur*/
export const GPIO_MIS_DIO5_CLR: any = '0'

/**
Masked interrupt flag for DIO4*/
export const GPIO_MIS_DIO4: any = '1'
export const GPIO_MIS_DIO4_M: any = '1'
export const GPIO_MIS_DIO4_S: any = '1'
/**
Interrupt occured*/
export const GPIO_MIS_DIO4_SET: any = '1'

/**
Interrupt did not occur*/
export const GPIO_MIS_DIO4_CLR: any = '0'

/**
Masked interrupt flag for DIO3*/
export const GPIO_MIS_DIO3: any = '1'
export const GPIO_MIS_DIO3_M: any = '1'
export const GPIO_MIS_DIO3_S: any = '1'
/**
Interrupt occured*/
export const GPIO_MIS_DIO3_SET: any = '1'

/**
Interrupt did not occur*/
export const GPIO_MIS_DIO3_CLR: any = '0'

/**
Masked interrupt flag for DIO2*/
export const GPIO_MIS_DIO2: any = '1'
export const GPIO_MIS_DIO2_M: any = '1'
export const GPIO_MIS_DIO2_S: any = '1'
/**
Interrupt occured*/
export const GPIO_MIS_DIO2_SET: any = '1'

/**
Interrupt did not occur*/
export const GPIO_MIS_DIO2_CLR: any = '0'

/**
Masked interrupt flag for DIO1*/
export const GPIO_MIS_DIO1: any = '1'
export const GPIO_MIS_DIO1_M: any = '1'
export const GPIO_MIS_DIO1_S: any = '1'
/**
Interrupt occured*/
export const GPIO_MIS_DIO1_SET: any = '1'

/**
Interrupt did not occur*/
export const GPIO_MIS_DIO1_CLR: any = '0'

/**
Masked interrupt flag for DIO0*/
export const GPIO_MIS_DIO0: any = '1'
export const GPIO_MIS_DIO0_M: any = '1'
export const GPIO_MIS_DIO0_S: any = '1'
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
export const GPIO_ISET_RESERVED26_M: any = '6'
export const GPIO_ISET_RESERVED26_S: any = '6'
/**
Set DIO25 in RIS*/
export const GPIO_ISET_DIO25: any = '1'
export const GPIO_ISET_DIO25_M: any = '1'
export const GPIO_ISET_DIO25_S: any = '1'
/**
Set Interrupt*/
export const GPIO_ISET_DIO25_SET: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_ISET_DIO25_NOEFF: any = '0'

/**
Set DIO24 in RIS*/
export const GPIO_ISET_DIO24: any = '1'
export const GPIO_ISET_DIO24_M: any = '1'
export const GPIO_ISET_DIO24_S: any = '1'
/**
Set Interrupt*/
export const GPIO_ISET_DIO24_SET: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_ISET_DIO24_NOEFF: any = '0'

/**
Set DIO23 in RIS*/
export const GPIO_ISET_DIO23: any = '1'
export const GPIO_ISET_DIO23_M: any = '1'
export const GPIO_ISET_DIO23_S: any = '1'
/**
Set Interrupt*/
export const GPIO_ISET_DIO23_SET: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_ISET_DIO23_NOEFF: any = '0'

/**
Set DIO22 in RIS*/
export const GPIO_ISET_DIO22: any = '1'
export const GPIO_ISET_DIO22_M: any = '1'
export const GPIO_ISET_DIO22_S: any = '1'
/**
Set Interrupt*/
export const GPIO_ISET_DIO22_SET: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_ISET_DIO22_NOEFF: any = '0'

/**
Set DIO21 in RIS*/
export const GPIO_ISET_DIO21: any = '1'
export const GPIO_ISET_DIO21_M: any = '1'
export const GPIO_ISET_DIO21_S: any = '1'
/**
Set Interrupt*/
export const GPIO_ISET_DIO21_SET: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_ISET_DIO21_NOEFF: any = '0'

/**
Set DIO20 in RIS*/
export const GPIO_ISET_DIO20: any = '1'
export const GPIO_ISET_DIO20_M: any = '1'
export const GPIO_ISET_DIO20_S: any = '1'
/**
Set Interrupt*/
export const GPIO_ISET_DIO20_SET: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_ISET_DIO20_NOEFF: any = '0'

/**
Set DIO19 in RIS*/
export const GPIO_ISET_DIO19: any = '1'
export const GPIO_ISET_DIO19_M: any = '1'
export const GPIO_ISET_DIO19_S: any = '1'
/**
Set Interrupt*/
export const GPIO_ISET_DIO19_SET: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_ISET_DIO19_NOEFF: any = '0'

/**
Set DIO18 in RIS*/
export const GPIO_ISET_DIO18: any = '1'
export const GPIO_ISET_DIO18_M: any = '1'
export const GPIO_ISET_DIO18_S: any = '1'
/**
Set Interrupt*/
export const GPIO_ISET_DIO18_SET: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_ISET_DIO18_NOEFF: any = '0'

/**
Set DIO17 in RIS*/
export const GPIO_ISET_DIO17: any = '1'
export const GPIO_ISET_DIO17_M: any = '1'
export const GPIO_ISET_DIO17_S: any = '1'
/**
Set Interrupt*/
export const GPIO_ISET_DIO17_SET: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_ISET_DIO17_NOEFF: any = '0'

/**
Set DIO16 in RIS*/
export const GPIO_ISET_DIO16: any = '1'
export const GPIO_ISET_DIO16_M: any = '1'
export const GPIO_ISET_DIO16_S: any = '1'
/**
Set Interrupt*/
export const GPIO_ISET_DIO16_SET: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_ISET_DIO16_NOEFF: any = '0'

/**
Set DIO15 in RIS*/
export const GPIO_ISET_DIO15: any = '1'
export const GPIO_ISET_DIO15_M: any = '1'
export const GPIO_ISET_DIO15_S: any = '1'
/**
Set Interrupt*/
export const GPIO_ISET_DIO15_SET: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_ISET_DIO15_NOEFF: any = '0'

/**
Set DIO14 in RIS*/
export const GPIO_ISET_DIO14: any = '1'
export const GPIO_ISET_DIO14_M: any = '1'
export const GPIO_ISET_DIO14_S: any = '1'
/**
Set Interrupt*/
export const GPIO_ISET_DIO14_SET: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_ISET_DIO14_NOEFF: any = '0'

/**
Set DIO13 in RIS*/
export const GPIO_ISET_DIO13: any = '1'
export const GPIO_ISET_DIO13_M: any = '1'
export const GPIO_ISET_DIO13_S: any = '1'
/**
Set Interrupt*/
export const GPIO_ISET_DIO13_SET: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_ISET_DIO13_NOEFF: any = '0'

/**
Set DIO12 in RIS*/
export const GPIO_ISET_DIO12: any = '1'
export const GPIO_ISET_DIO12_M: any = '1'
export const GPIO_ISET_DIO12_S: any = '1'
/**
Set Interrupt*/
export const GPIO_ISET_DIO12_SET: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_ISET_DIO12_NOEFF: any = '0'

/**
Set DIO11 in RIS*/
export const GPIO_ISET_DIO11: any = '1'
export const GPIO_ISET_DIO11_M: any = '1'
export const GPIO_ISET_DIO11_S: any = '1'
/**
Set Interrupt*/
export const GPIO_ISET_DIO11_SET: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_ISET_DIO11_NOEFF: any = '0'

/**
Set DIO10 in RIS*/
export const GPIO_ISET_DIO10: any = '1'
export const GPIO_ISET_DIO10_M: any = '1'
export const GPIO_ISET_DIO10_S: any = '1'
/**
Set Interrupt*/
export const GPIO_ISET_DIO10_SET: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_ISET_DIO10_NOEFF: any = '0'

/**
Set DIO9 in RIS*/
export const GPIO_ISET_DIO9: any = '1'
export const GPIO_ISET_DIO9_M: any = '1'
export const GPIO_ISET_DIO9_S: any = '1'
/**
Set Interrupt*/
export const GPIO_ISET_DIO9_SET: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_ISET_DIO9_NOEFF: any = '0'

/**
Set DIO8 in RIS*/
export const GPIO_ISET_DIO8: any = '1'
export const GPIO_ISET_DIO8_M: any = '1'
export const GPIO_ISET_DIO8_S: any = '1'
/**
Set Interrupt*/
export const GPIO_ISET_DIO8_SET: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_ISET_DIO8_NOEFF: any = '0'

/**
Set DIO7 in RIS*/
export const GPIO_ISET_DIO7: any = '1'
export const GPIO_ISET_DIO7_M: any = '1'
export const GPIO_ISET_DIO7_S: any = '1'
/**
Set Interrupt*/
export const GPIO_ISET_DIO7_SET: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_ISET_DIO7_NOEFF: any = '0'

/**
Set DIO6 in RIS*/
export const GPIO_ISET_DIO6: any = '1'
export const GPIO_ISET_DIO6_M: any = '1'
export const GPIO_ISET_DIO6_S: any = '1'
/**
Set Interrupt*/
export const GPIO_ISET_DIO6_SET: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_ISET_DIO6_NOEFF: any = '0'

/**
Set DIO5 in RIS*/
export const GPIO_ISET_DIO5: any = '1'
export const GPIO_ISET_DIO5_M: any = '1'
export const GPIO_ISET_DIO5_S: any = '1'
/**
Set Interrupt*/
export const GPIO_ISET_DIO5_SET: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_ISET_DIO5_NOEFF: any = '0'

/**
Set DIO4 in RIS*/
export const GPIO_ISET_DIO4: any = '1'
export const GPIO_ISET_DIO4_M: any = '1'
export const GPIO_ISET_DIO4_S: any = '1'
/**
Set Interrupt*/
export const GPIO_ISET_DIO4_SET: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_ISET_DIO4_NOEFF: any = '0'

/**
Set DIO3 in RIS*/
export const GPIO_ISET_DIO3: any = '1'
export const GPIO_ISET_DIO3_M: any = '1'
export const GPIO_ISET_DIO3_S: any = '1'
/**
Set Interrupt*/
export const GPIO_ISET_DIO3_SET: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_ISET_DIO3_NOEFF: any = '0'

/**
Set DIO2 in RIS*/
export const GPIO_ISET_DIO2: any = '1'
export const GPIO_ISET_DIO2_M: any = '1'
export const GPIO_ISET_DIO2_S: any = '1'
/**
Set Interrupt*/
export const GPIO_ISET_DIO2_SET: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_ISET_DIO2_NOEFF: any = '0'

/**
Set DIO1 in RIS*/
export const GPIO_ISET_DIO1: any = '1'
export const GPIO_ISET_DIO1_M: any = '1'
export const GPIO_ISET_DIO1_S: any = '1'
/**
Set Interrupt*/
export const GPIO_ISET_DIO1_SET: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_ISET_DIO1_NOEFF: any = '0'

/**
Set DIO0 in RIS*/
export const GPIO_ISET_DIO0: any = '1'
export const GPIO_ISET_DIO0_M: any = '1'
export const GPIO_ISET_DIO0_S: any = '1'
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
export const GPIO_ICLR_RESERVED26_M: any = '6'
export const GPIO_ICLR_RESERVED26_S: any = '6'
/**
Clears DIO25 in RIS*/
export const GPIO_ICLR_DIO25: any = '1'
export const GPIO_ICLR_DIO25_M: any = '1'
export const GPIO_ICLR_DIO25_S: any = '1'
/**
Clear Interrupt*/
export const GPIO_ICLR_DIO25_CLR: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_ICLR_DIO25_NOEFF: any = '0'

/**
Clears DIO24 in RIS*/
export const GPIO_ICLR_DIO24: any = '1'
export const GPIO_ICLR_DIO24_M: any = '1'
export const GPIO_ICLR_DIO24_S: any = '1'
/**
Clear Interrupt*/
export const GPIO_ICLR_DIO24_CLR: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_ICLR_DIO24_NOEFF: any = '0'

/**
Clears DIO23 in RIS*/
export const GPIO_ICLR_DIO23: any = '1'
export const GPIO_ICLR_DIO23_M: any = '1'
export const GPIO_ICLR_DIO23_S: any = '1'
/**
Clear Interrupt*/
export const GPIO_ICLR_DIO23_CLR: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_ICLR_DIO23_NOEFF: any = '0'

/**
Clears DIO22 in RIS*/
export const GPIO_ICLR_DIO22: any = '1'
export const GPIO_ICLR_DIO22_M: any = '1'
export const GPIO_ICLR_DIO22_S: any = '1'
/**
Clear Interrupt*/
export const GPIO_ICLR_DIO22_CLR: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_ICLR_DIO22_NOEFF: any = '0'

/**
Clears DIO21 in RIS*/
export const GPIO_ICLR_DIO21: any = '1'
export const GPIO_ICLR_DIO21_M: any = '1'
export const GPIO_ICLR_DIO21_S: any = '1'
/**
Clear Interrupt*/
export const GPIO_ICLR_DIO21_CLR: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_ICLR_DIO21_NOEFF: any = '0'

/**
Clears DIO20 in RIS*/
export const GPIO_ICLR_DIO20: any = '1'
export const GPIO_ICLR_DIO20_M: any = '1'
export const GPIO_ICLR_DIO20_S: any = '1'
/**
Clear Interrupt*/
export const GPIO_ICLR_DIO20_CLR: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_ICLR_DIO20_NOEFF: any = '0'

/**
Clears DIO19 in RIS*/
export const GPIO_ICLR_DIO19: any = '1'
export const GPIO_ICLR_DIO19_M: any = '1'
export const GPIO_ICLR_DIO19_S: any = '1'
/**
Clear Interrupt*/
export const GPIO_ICLR_DIO19_CLR: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_ICLR_DIO19_NOEFF: any = '0'

/**
Clears DIO18 in RIS*/
export const GPIO_ICLR_DIO18: any = '1'
export const GPIO_ICLR_DIO18_M: any = '1'
export const GPIO_ICLR_DIO18_S: any = '1'
/**
Clear Interrupt*/
export const GPIO_ICLR_DIO18_CLR: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_ICLR_DIO18_NOEFF: any = '0'

/**
Clears DIO17 in RIS*/
export const GPIO_ICLR_DIO17: any = '1'
export const GPIO_ICLR_DIO17_M: any = '1'
export const GPIO_ICLR_DIO17_S: any = '1'
/**
Clear Interrupt*/
export const GPIO_ICLR_DIO17_CLR: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_ICLR_DIO17_NOEFF: any = '0'

/**
Clears DIO16 in RIS*/
export const GPIO_ICLR_DIO16: any = '1'
export const GPIO_ICLR_DIO16_M: any = '1'
export const GPIO_ICLR_DIO16_S: any = '1'
/**
Clear Interrupt*/
export const GPIO_ICLR_DIO16_CLR: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_ICLR_DIO16_NOEFF: any = '0'

/**
Clears DIO15 in RIS*/
export const GPIO_ICLR_DIO15: any = '1'
export const GPIO_ICLR_DIO15_M: any = '1'
export const GPIO_ICLR_DIO15_S: any = '1'
/**
Clear Interrupt*/
export const GPIO_ICLR_DIO15_CLR: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_ICLR_DIO15_NOEFF: any = '0'

/**
Clears DIO14 in RIS*/
export const GPIO_ICLR_DIO14: any = '1'
export const GPIO_ICLR_DIO14_M: any = '1'
export const GPIO_ICLR_DIO14_S: any = '1'
/**
Clear Interrupt*/
export const GPIO_ICLR_DIO14_CLR: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_ICLR_DIO14_NOEFF: any = '0'

/**
Clears DIO13 in RIS*/
export const GPIO_ICLR_DIO13: any = '1'
export const GPIO_ICLR_DIO13_M: any = '1'
export const GPIO_ICLR_DIO13_S: any = '1'
/**
Clear Interrupt*/
export const GPIO_ICLR_DIO13_CLR: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_ICLR_DIO13_NOEFF: any = '0'

/**
Clears DIO12 in RIS*/
export const GPIO_ICLR_DIO12: any = '1'
export const GPIO_ICLR_DIO12_M: any = '1'
export const GPIO_ICLR_DIO12_S: any = '1'
/**
Clear Interrupt*/
export const GPIO_ICLR_DIO12_CLR: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_ICLR_DIO12_NOEFF: any = '0'

/**
Clears DIO11 in RIS*/
export const GPIO_ICLR_DIO11: any = '1'
export const GPIO_ICLR_DIO11_M: any = '1'
export const GPIO_ICLR_DIO11_S: any = '1'
/**
Clear Interrupt*/
export const GPIO_ICLR_DIO11_CLR: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_ICLR_DIO11_NOEFF: any = '0'

/**
Clears DIO10 in RIS*/
export const GPIO_ICLR_DIO10: any = '1'
export const GPIO_ICLR_DIO10_M: any = '1'
export const GPIO_ICLR_DIO10_S: any = '1'
/**
Clear Interrupt*/
export const GPIO_ICLR_DIO10_CLR: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_ICLR_DIO10_NOEFF: any = '0'

/**
Clears DIO9 in RIS*/
export const GPIO_ICLR_DIO9: any = '1'
export const GPIO_ICLR_DIO9_M: any = '1'
export const GPIO_ICLR_DIO9_S: any = '1'
/**
Clear Interrupt*/
export const GPIO_ICLR_DIO9_CLR: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_ICLR_DIO9_NOEFF: any = '0'

/**
Clears DIO8 in RIS*/
export const GPIO_ICLR_DIO8: any = '1'
export const GPIO_ICLR_DIO8_M: any = '1'
export const GPIO_ICLR_DIO8_S: any = '1'
/**
Clear Interrupt*/
export const GPIO_ICLR_DIO8_CLR: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_ICLR_DIO8_NOEFF: any = '0'

/**
Clears DIO7 in RIS*/
export const GPIO_ICLR_DIO7: any = '1'
export const GPIO_ICLR_DIO7_M: any = '1'
export const GPIO_ICLR_DIO7_S: any = '1'
/**
Clear Interrupt*/
export const GPIO_ICLR_DIO7_CLR: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_ICLR_DIO7_NOEFF: any = '0'

/**
Clears DIO6 in RIS*/
export const GPIO_ICLR_DIO6: any = '1'
export const GPIO_ICLR_DIO6_M: any = '1'
export const GPIO_ICLR_DIO6_S: any = '1'
/**
Clear Interrupt*/
export const GPIO_ICLR_DIO6_CLR: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_ICLR_DIO6_NOEFF: any = '0'

/**
Clears DIO5 in RIS*/
export const GPIO_ICLR_DIO5: any = '1'
export const GPIO_ICLR_DIO5_M: any = '1'
export const GPIO_ICLR_DIO5_S: any = '1'
/**
Clear Interrupt*/
export const GPIO_ICLR_DIO5_CLR: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_ICLR_DIO5_NOEFF: any = '0'

/**
Clears DIO4 in RIS*/
export const GPIO_ICLR_DIO4: any = '1'
export const GPIO_ICLR_DIO4_M: any = '1'
export const GPIO_ICLR_DIO4_S: any = '1'
/**
Clear Interrupt*/
export const GPIO_ICLR_DIO4_CLR: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_ICLR_DIO4_NOEFF: any = '0'

/**
Clears DIO3 in RIS*/
export const GPIO_ICLR_DIO3: any = '1'
export const GPIO_ICLR_DIO3_M: any = '1'
export const GPIO_ICLR_DIO3_S: any = '1'
/**
Clear Interrupt*/
export const GPIO_ICLR_DIO3_CLR: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_ICLR_DIO3_NOEFF: any = '0'

/**
Clears DIO2 in RIS*/
export const GPIO_ICLR_DIO2: any = '1'
export const GPIO_ICLR_DIO2_M: any = '1'
export const GPIO_ICLR_DIO2_S: any = '1'
/**
Clear Interrupt*/
export const GPIO_ICLR_DIO2_CLR: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_ICLR_DIO2_NOEFF: any = '0'

/**
Clears DIO1 in RIS*/
export const GPIO_ICLR_DIO1: any = '1'
export const GPIO_ICLR_DIO1_M: any = '1'
export const GPIO_ICLR_DIO1_S: any = '1'
/**
Clear Interrupt*/
export const GPIO_ICLR_DIO1_CLR: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_ICLR_DIO1_NOEFF: any = '0'

/**
Clears DIO0 in RIS*/
export const GPIO_ICLR_DIO0: any = '1'
export const GPIO_ICLR_DIO0_M: any = '1'
export const GPIO_ICLR_DIO0_S: any = '1'
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
export const GPIO_IMSET_RESERVED26_M: any = '6'
export const GPIO_IMSET_RESERVED26_S: any = '6'
/**
Sets DIO25 in IMASK*/
export const GPIO_IMSET_DIO25: any = '1'
export const GPIO_IMSET_DIO25_M: any = '1'
export const GPIO_IMSET_DIO25_S: any = '1'
/**
Set interrupt mask*/
export const GPIO_IMSET_DIO25_SET: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_IMSET_DIO25_NOEFF: any = '0'

/**
Sets DIO24 in IMASK*/
export const GPIO_IMSET_DIO24: any = '1'
export const GPIO_IMSET_DIO24_M: any = '1'
export const GPIO_IMSET_DIO24_S: any = '1'
/**
Set interrupt mask*/
export const GPIO_IMSET_DIO24_SET: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_IMSET_DIO24_NOEFF: any = '0'

/**
Sets DIO23 in IMASK*/
export const GPIO_IMSET_DIO23: any = '1'
export const GPIO_IMSET_DIO23_M: any = '1'
export const GPIO_IMSET_DIO23_S: any = '1'
/**
Set interrupt mask*/
export const GPIO_IMSET_DIO23_SET: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_IMSET_DIO23_NOEFF: any = '0'

/**
Sets DIO22 in IMASK*/
export const GPIO_IMSET_DIO22: any = '1'
export const GPIO_IMSET_DIO22_M: any = '1'
export const GPIO_IMSET_DIO22_S: any = '1'
/**
Set interrupt mask*/
export const GPIO_IMSET_DIO22_SET: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_IMSET_DIO22_NOEFF: any = '0'

/**
Sets DIO21 in IMASK*/
export const GPIO_IMSET_DIO21: any = '1'
export const GPIO_IMSET_DIO21_M: any = '1'
export const GPIO_IMSET_DIO21_S: any = '1'
/**
Set interrupt mask*/
export const GPIO_IMSET_DIO21_SET: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_IMSET_DIO21_NOEFF: any = '0'

/**
Sets DIO20 in IMASK*/
export const GPIO_IMSET_DIO20: any = '1'
export const GPIO_IMSET_DIO20_M: any = '1'
export const GPIO_IMSET_DIO20_S: any = '1'
/**
Set interrupt mask*/
export const GPIO_IMSET_DIO20_SET: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_IMSET_DIO20_NOEFF: any = '0'

/**
Sets DIO19 in IMASK*/
export const GPIO_IMSET_DIO19: any = '1'
export const GPIO_IMSET_DIO19_M: any = '1'
export const GPIO_IMSET_DIO19_S: any = '1'
/**
Set interrupt mask*/
export const GPIO_IMSET_DIO19_SET: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_IMSET_DIO19_NOEFF: any = '0'

/**
Sets DIO18 in IMASK*/
export const GPIO_IMSET_DIO18: any = '1'
export const GPIO_IMSET_DIO18_M: any = '1'
export const GPIO_IMSET_DIO18_S: any = '1'
/**
Set interrupt mask*/
export const GPIO_IMSET_DIO18_SET: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_IMSET_DIO18_NOEFF: any = '0'

/**
Sets DIO17 in IMASK*/
export const GPIO_IMSET_DIO17: any = '1'
export const GPIO_IMSET_DIO17_M: any = '1'
export const GPIO_IMSET_DIO17_S: any = '1'
/**
Set interrupt mask*/
export const GPIO_IMSET_DIO17_SET: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_IMSET_DIO17_NOEFF: any = '0'

/**
Sets DIO16 in IMASK*/
export const GPIO_IMSET_DIO16: any = '1'
export const GPIO_IMSET_DIO16_M: any = '1'
export const GPIO_IMSET_DIO16_S: any = '1'
/**
Set interrupt mask*/
export const GPIO_IMSET_DIO16_SET: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_IMSET_DIO16_NOEFF: any = '0'

/**
Sets DIO15 in IMASK*/
export const GPIO_IMSET_DIO15: any = '1'
export const GPIO_IMSET_DIO15_M: any = '1'
export const GPIO_IMSET_DIO15_S: any = '1'
/**
Set interrupt mask*/
export const GPIO_IMSET_DIO15_SET: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_IMSET_DIO15_NOEFF: any = '0'

/**
Sets DIO14 in IMASK*/
export const GPIO_IMSET_DIO14: any = '1'
export const GPIO_IMSET_DIO14_M: any = '1'
export const GPIO_IMSET_DIO14_S: any = '1'
/**
Set interrupt mask*/
export const GPIO_IMSET_DIO14_SET: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_IMSET_DIO14_NOEFF: any = '0'

/**
Sets DIO13 in IMASK*/
export const GPIO_IMSET_DIO13: any = '1'
export const GPIO_IMSET_DIO13_M: any = '1'
export const GPIO_IMSET_DIO13_S: any = '1'
/**
Set interrupt mask*/
export const GPIO_IMSET_DIO13_SET: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_IMSET_DIO13_NOEFF: any = '0'

/**
Sets DIO12 in IMASK*/
export const GPIO_IMSET_DIO12: any = '1'
export const GPIO_IMSET_DIO12_M: any = '1'
export const GPIO_IMSET_DIO12_S: any = '1'
/**
Set interrupt mask*/
export const GPIO_IMSET_DIO12_SET: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_IMSET_DIO12_NOEFF: any = '0'

/**
Sets DIO11 in IMASK*/
export const GPIO_IMSET_DIO11: any = '1'
export const GPIO_IMSET_DIO11_M: any = '1'
export const GPIO_IMSET_DIO11_S: any = '1'
/**
Set interrupt mask*/
export const GPIO_IMSET_DIO11_SET: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_IMSET_DIO11_NOEFF: any = '0'

/**
Sets DIO10 in IMASK*/
export const GPIO_IMSET_DIO10: any = '1'
export const GPIO_IMSET_DIO10_M: any = '1'
export const GPIO_IMSET_DIO10_S: any = '1'
/**
Set interrupt mask*/
export const GPIO_IMSET_DIO10_SET: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_IMSET_DIO10_NOEFF: any = '0'

/**
Sets DIO9 in IMASK*/
export const GPIO_IMSET_DIO9: any = '1'
export const GPIO_IMSET_DIO9_M: any = '1'
export const GPIO_IMSET_DIO9_S: any = '1'
/**
Set interrupt mask*/
export const GPIO_IMSET_DIO9_SET: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_IMSET_DIO9_NOEFF: any = '0'

/**
Sets DIO8 in IMASK*/
export const GPIO_IMSET_DIO8: any = '1'
export const GPIO_IMSET_DIO8_M: any = '1'
export const GPIO_IMSET_DIO8_S: any = '1'
/**
Set interrupt mask*/
export const GPIO_IMSET_DIO8_SET: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_IMSET_DIO8_NOEFF: any = '0'

/**
Sets DIO7 in IMASK*/
export const GPIO_IMSET_DIO7: any = '1'
export const GPIO_IMSET_DIO7_M: any = '1'
export const GPIO_IMSET_DIO7_S: any = '1'
/**
Set interrupt mask*/
export const GPIO_IMSET_DIO7_SET: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_IMSET_DIO7_NOEFF: any = '0'

/**
Sets DIO6 in IMASK*/
export const GPIO_IMSET_DIO6: any = '1'
export const GPIO_IMSET_DIO6_M: any = '1'
export const GPIO_IMSET_DIO6_S: any = '1'
/**
Set interrupt mask*/
export const GPIO_IMSET_DIO6_SET: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_IMSET_DIO6_NOEFF: any = '0'

/**
Sets DIO5 in IMASK*/
export const GPIO_IMSET_DIO5: any = '1'
export const GPIO_IMSET_DIO5_M: any = '1'
export const GPIO_IMSET_DIO5_S: any = '1'
/**
Set interrupt mask*/
export const GPIO_IMSET_DIO5_SET: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_IMSET_DIO5_NOEFF: any = '0'

/**
Sets DIO4 in IMASK*/
export const GPIO_IMSET_DIO4: any = '1'
export const GPIO_IMSET_DIO4_M: any = '1'
export const GPIO_IMSET_DIO4_S: any = '1'
/**
Set interrupt mask*/
export const GPIO_IMSET_DIO4_SET: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_IMSET_DIO4_NOEFF: any = '0'

/**
Sets DIO3 in IMASK*/
export const GPIO_IMSET_DIO3: any = '1'
export const GPIO_IMSET_DIO3_M: any = '1'
export const GPIO_IMSET_DIO3_S: any = '1'
/**
Set interrupt mask*/
export const GPIO_IMSET_DIO3_SET: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_IMSET_DIO3_NOEFF: any = '0'

/**
Sets DIO2 in IMASK*/
export const GPIO_IMSET_DIO2: any = '1'
export const GPIO_IMSET_DIO2_M: any = '1'
export const GPIO_IMSET_DIO2_S: any = '1'
/**
Set interrupt mask*/
export const GPIO_IMSET_DIO2_SET: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_IMSET_DIO2_NOEFF: any = '0'

/**
Sets DIO1 in IMASK*/
export const GPIO_IMSET_DIO1: any = '1'
export const GPIO_IMSET_DIO1_M: any = '1'
export const GPIO_IMSET_DIO1_S: any = '1'
/**
Set interrupt mask*/
export const GPIO_IMSET_DIO1_SET: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_IMSET_DIO1_NOEFF: any = '0'

/**
Sets DIO0 in IMASK*/
export const GPIO_IMSET_DIO0: any = '1'
export const GPIO_IMSET_DIO0_M: any = '1'
export const GPIO_IMSET_DIO0_S: any = '1'
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
export const GPIO_IMCLR_RESERVED26_M: any = '6'
export const GPIO_IMCLR_RESERVED26_S: any = '6'
/**
Clears DIO25 in IMASK*/
export const GPIO_IMCLR_DIO25: any = '1'
export const GPIO_IMCLR_DIO25_M: any = '1'
export const GPIO_IMCLR_DIO25_S: any = '1'
/**
Clear interrupt mask*/
export const GPIO_IMCLR_DIO25_CLR: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_IMCLR_DIO25_NOEFF: any = '0'

/**
Clears DIO24 in IMASK*/
export const GPIO_IMCLR_DIO24: any = '1'
export const GPIO_IMCLR_DIO24_M: any = '1'
export const GPIO_IMCLR_DIO24_S: any = '1'
/**
Clear interrupt mask*/
export const GPIO_IMCLR_DIO24_CLR: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_IMCLR_DIO24_NOEFF: any = '0'

/**
Clears DIO23 in IMASK*/
export const GPIO_IMCLR_DIO23: any = '1'
export const GPIO_IMCLR_DIO23_M: any = '1'
export const GPIO_IMCLR_DIO23_S: any = '1'
/**
Clear interrupt mask*/
export const GPIO_IMCLR_DIO23_CLR: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_IMCLR_DIO23_NOEFF: any = '0'

/**
Clears DIO22 in IMASK*/
export const GPIO_IMCLR_DIO22: any = '1'
export const GPIO_IMCLR_DIO22_M: any = '1'
export const GPIO_IMCLR_DIO22_S: any = '1'
/**
Clear interrupt mask*/
export const GPIO_IMCLR_DIO22_CLR: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_IMCLR_DIO22_NOEFF: any = '0'

/**
Clears DIO21 in IMASK*/
export const GPIO_IMCLR_DIO21: any = '1'
export const GPIO_IMCLR_DIO21_M: any = '1'
export const GPIO_IMCLR_DIO21_S: any = '1'
/**
Clear interrupt mask*/
export const GPIO_IMCLR_DIO21_CLR: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_IMCLR_DIO21_NOEFF: any = '0'

/**
Clears DIO20 in IMASK*/
export const GPIO_IMCLR_DIO20: any = '1'
export const GPIO_IMCLR_DIO20_M: any = '1'
export const GPIO_IMCLR_DIO20_S: any = '1'
/**
Clear interrupt mask*/
export const GPIO_IMCLR_DIO20_CLR: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_IMCLR_DIO20_NOEFF: any = '0'

/**
Clears DIO19 in IMASK*/
export const GPIO_IMCLR_DIO19: any = '1'
export const GPIO_IMCLR_DIO19_M: any = '1'
export const GPIO_IMCLR_DIO19_S: any = '1'
/**
Clear interrupt mask*/
export const GPIO_IMCLR_DIO19_CLR: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_IMCLR_DIO19_NOEFF: any = '0'

/**
Clears DIO18 in IMASK*/
export const GPIO_IMCLR_DIO18: any = '1'
export const GPIO_IMCLR_DIO18_M: any = '1'
export const GPIO_IMCLR_DIO18_S: any = '1'
/**
Clear interrupt mask*/
export const GPIO_IMCLR_DIO18_CLR: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_IMCLR_DIO18_NOEFF: any = '0'

/**
Clears DIO17 in IMASK*/
export const GPIO_IMCLR_DIO17: any = '1'
export const GPIO_IMCLR_DIO17_M: any = '1'
export const GPIO_IMCLR_DIO17_S: any = '1'
/**
Clear interrupt mask*/
export const GPIO_IMCLR_DIO17_CLR: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_IMCLR_DIO17_NOEFF: any = '0'

/**
Clears DIO16 in IMASK*/
export const GPIO_IMCLR_DIO16: any = '1'
export const GPIO_IMCLR_DIO16_M: any = '1'
export const GPIO_IMCLR_DIO16_S: any = '1'
/**
Clear interrupt mask*/
export const GPIO_IMCLR_DIO16_CLR: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_IMCLR_DIO16_NOEFF: any = '0'

/**
Clears DIO15 in IMASK*/
export const GPIO_IMCLR_DIO15: any = '1'
export const GPIO_IMCLR_DIO15_M: any = '1'
export const GPIO_IMCLR_DIO15_S: any = '1'
/**
Clear interrupt mask*/
export const GPIO_IMCLR_DIO15_CLR: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_IMCLR_DIO15_NOEFF: any = '0'

/**
Clears DIO14 in IMASK*/
export const GPIO_IMCLR_DIO14: any = '1'
export const GPIO_IMCLR_DIO14_M: any = '1'
export const GPIO_IMCLR_DIO14_S: any = '1'
/**
Clear interrupt mask*/
export const GPIO_IMCLR_DIO14_CLR: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_IMCLR_DIO14_NOEFF: any = '0'

/**
Clears DIO13 in IMASK*/
export const GPIO_IMCLR_DIO13: any = '1'
export const GPIO_IMCLR_DIO13_M: any = '1'
export const GPIO_IMCLR_DIO13_S: any = '1'
/**
Clear interrupt mask*/
export const GPIO_IMCLR_DIO13_CLR: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_IMCLR_DIO13_NOEFF: any = '0'

/**
Clears DIO12 in IMASK*/
export const GPIO_IMCLR_DIO12: any = '1'
export const GPIO_IMCLR_DIO12_M: any = '1'
export const GPIO_IMCLR_DIO12_S: any = '1'
/**
Clear interrupt mask*/
export const GPIO_IMCLR_DIO12_CLR: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_IMCLR_DIO12_NOEFF: any = '0'

/**
Clears DIO11 in IMASK*/
export const GPIO_IMCLR_DIO11: any = '1'
export const GPIO_IMCLR_DIO11_M: any = '1'
export const GPIO_IMCLR_DIO11_S: any = '1'
/**
Clear interrupt mask*/
export const GPIO_IMCLR_DIO11_CLR: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_IMCLR_DIO11_NOEFF: any = '0'

/**
Clears DIO10 in IMASK*/
export const GPIO_IMCLR_DIO10: any = '1'
export const GPIO_IMCLR_DIO10_M: any = '1'
export const GPIO_IMCLR_DIO10_S: any = '1'
/**
Clear interrupt mask*/
export const GPIO_IMCLR_DIO10_CLR: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_IMCLR_DIO10_NOEFF: any = '0'

/**
Clears DIO9 in IMASK*/
export const GPIO_IMCLR_DIO9: any = '1'
export const GPIO_IMCLR_DIO9_M: any = '1'
export const GPIO_IMCLR_DIO9_S: any = '1'
/**
Clear interrupt mask*/
export const GPIO_IMCLR_DIO9_CLR: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_IMCLR_DIO9_NOEFF: any = '0'

/**
Clears DIO8 in IMASK*/
export const GPIO_IMCLR_DIO8: any = '1'
export const GPIO_IMCLR_DIO8_M: any = '1'
export const GPIO_IMCLR_DIO8_S: any = '1'
/**
Clear interrupt mask*/
export const GPIO_IMCLR_DIO8_CLR: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_IMCLR_DIO8_NOEFF: any = '0'

/**
Clears DIO7 in IMASK*/
export const GPIO_IMCLR_DIO7: any = '1'
export const GPIO_IMCLR_DIO7_M: any = '1'
export const GPIO_IMCLR_DIO7_S: any = '1'
/**
Clear interrupt mask*/
export const GPIO_IMCLR_DIO7_CLR: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_IMCLR_DIO7_NOEFF: any = '0'

/**
Clears DIO6 in IMASK*/
export const GPIO_IMCLR_DIO6: any = '1'
export const GPIO_IMCLR_DIO6_M: any = '1'
export const GPIO_IMCLR_DIO6_S: any = '1'
/**
Clear interrupt mask*/
export const GPIO_IMCLR_DIO6_CLR: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_IMCLR_DIO6_NOEFF: any = '0'

/**
Clears DIO5 in IMASK*/
export const GPIO_IMCLR_DIO5: any = '1'
export const GPIO_IMCLR_DIO5_M: any = '1'
export const GPIO_IMCLR_DIO5_S: any = '1'
/**
Clear interrupt mask*/
export const GPIO_IMCLR_DIO5_CLR: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_IMCLR_DIO5_NOEFF: any = '0'

/**
Clears DIO4 in IMASK*/
export const GPIO_IMCLR_DIO4: any = '1'
export const GPIO_IMCLR_DIO4_M: any = '1'
export const GPIO_IMCLR_DIO4_S: any = '1'
/**
Clear interrupt mask*/
export const GPIO_IMCLR_DIO4_CLR: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_IMCLR_DIO4_NOEFF: any = '0'

/**
Clears DIO3 in IMASK*/
export const GPIO_IMCLR_DIO3: any = '1'
export const GPIO_IMCLR_DIO3_M: any = '1'
export const GPIO_IMCLR_DIO3_S: any = '1'
/**
Clear interrupt mask*/
export const GPIO_IMCLR_DIO3_CLR: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_IMCLR_DIO3_NOEFF: any = '0'

/**
Clears DIO2 in IMASK*/
export const GPIO_IMCLR_DIO2: any = '1'
export const GPIO_IMCLR_DIO2_M: any = '1'
export const GPIO_IMCLR_DIO2_S: any = '1'
/**
Clear interrupt mask*/
export const GPIO_IMCLR_DIO2_CLR: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_IMCLR_DIO2_NOEFF: any = '0'

/**
Clears DIO1 in IMASK*/
export const GPIO_IMCLR_DIO1: any = '1'
export const GPIO_IMCLR_DIO1_M: any = '1'
export const GPIO_IMCLR_DIO1_S: any = '1'
/**
Clear interrupt mask*/
export const GPIO_IMCLR_DIO1_CLR: any = '1'

/**
Writing 0 has no effect*/
export const GPIO_IMCLR_DIO1_NOEFF: any = '0'

/**
Clears DIO0 in IMASK*/
export const GPIO_IMCLR_DIO0: any = '1'
export const GPIO_IMCLR_DIO0_M: any = '1'
export const GPIO_IMCLR_DIO0_S: any = '1'
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
export const GPIO_DOUT3_0_RESERVED25_M: any = '7'
export const GPIO_DOUT3_0_RESERVED25_S: any = '7'
/**
Data output for DIO3*/
export const GPIO_DOUT3_0_DIO3: any = '1'
export const GPIO_DOUT3_0_DIO3_M: any = '1'
export const GPIO_DOUT3_0_DIO3_S: any = '1'
/**
Output is set to 1*/
export const GPIO_DOUT3_0_DIO3_ONE: any = '1'

/**
Output is set to 0*/
export const GPIO_DOUT3_0_DIO3_ZERO: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_DOUT3_0_RESERVED17: any = '7'
export const GPIO_DOUT3_0_RESERVED17_M: any = '7'
export const GPIO_DOUT3_0_RESERVED17_S: any = '7'
/**
Data output for DIO2*/
export const GPIO_DOUT3_0_DIO2: any = '1'
export const GPIO_DOUT3_0_DIO2_M: any = '1'
export const GPIO_DOUT3_0_DIO2_S: any = '1'
/**
Output is set to 1*/
export const GPIO_DOUT3_0_DIO2_ONE: any = '1'

/**
Output is set to 0*/
export const GPIO_DOUT3_0_DIO2_ZERO: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_DOUT3_0_RESERVED9: any = '7'
export const GPIO_DOUT3_0_RESERVED9_M: any = '7'
export const GPIO_DOUT3_0_RESERVED9_S: any = '7'
/**
Data output for DIO1*/
export const GPIO_DOUT3_0_DIO1: any = '1'
export const GPIO_DOUT3_0_DIO1_M: any = '1'
export const GPIO_DOUT3_0_DIO1_S: any = '1'
/**
Output is set to 1*/
export const GPIO_DOUT3_0_DIO1_ONE: any = '1'

/**
Output is set to 0*/
export const GPIO_DOUT3_0_DIO1_ZERO: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_DOUT3_0_RESERVED1: any = '7'
export const GPIO_DOUT3_0_RESERVED1_M: any = '7'
export const GPIO_DOUT3_0_RESERVED1_S: any = '7'
/**
Data output for DIO0*/
export const GPIO_DOUT3_0_DIO0: any = '1'
export const GPIO_DOUT3_0_DIO0_M: any = '1'
export const GPIO_DOUT3_0_DIO0_S: any = '1'
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
export const GPIO_DOUT7_4_RESERVED25_M: any = '7'
export const GPIO_DOUT7_4_RESERVED25_S: any = '7'
/**
Data output for DIO7*/
export const GPIO_DOUT7_4_DIO7: any = '1'
export const GPIO_DOUT7_4_DIO7_M: any = '1'
export const GPIO_DOUT7_4_DIO7_S: any = '1'
/**
Output is set to 1*/
export const GPIO_DOUT7_4_DIO7_ONE: any = '1'

/**
Output is set to 0*/
export const GPIO_DOUT7_4_DIO7_ZERO: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_DOUT7_4_RESERVED17: any = '7'
export const GPIO_DOUT7_4_RESERVED17_M: any = '7'
export const GPIO_DOUT7_4_RESERVED17_S: any = '7'
/**
Data output for DIO6*/
export const GPIO_DOUT7_4_DIO6: any = '1'
export const GPIO_DOUT7_4_DIO6_M: any = '1'
export const GPIO_DOUT7_4_DIO6_S: any = '1'
/**
Output is set to 1*/
export const GPIO_DOUT7_4_DIO6_ONE: any = '1'

/**
Output is set to 0*/
export const GPIO_DOUT7_4_DIO6_ZERO: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_DOUT7_4_RESERVED9: any = '7'
export const GPIO_DOUT7_4_RESERVED9_M: any = '7'
export const GPIO_DOUT7_4_RESERVED9_S: any = '7'
/**
Data output for DIO5*/
export const GPIO_DOUT7_4_DIO5: any = '1'
export const GPIO_DOUT7_4_DIO5_M: any = '1'
export const GPIO_DOUT7_4_DIO5_S: any = '1'
/**
Output is set to 1*/
export const GPIO_DOUT7_4_DIO5_ONE: any = '1'

/**
Output is set to 0*/
export const GPIO_DOUT7_4_DIO5_ZERO: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_DOUT7_4_RESERVED1: any = '7'
export const GPIO_DOUT7_4_RESERVED1_M: any = '7'
export const GPIO_DOUT7_4_RESERVED1_S: any = '7'
/**
Data output for DIO4*/
export const GPIO_DOUT7_4_DIO4: any = '1'
export const GPIO_DOUT7_4_DIO4_M: any = '1'
export const GPIO_DOUT7_4_DIO4_S: any = '1'
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
export const GPIO_DOUT11_8_RESERVED25_M: any = '7'
export const GPIO_DOUT11_8_RESERVED25_S: any = '7'
/**
Data output for DIO11*/
export const GPIO_DOUT11_8_DIO11: any = '1'
export const GPIO_DOUT11_8_DIO11_M: any = '1'
export const GPIO_DOUT11_8_DIO11_S: any = '1'
/**
Output is set to 1*/
export const GPIO_DOUT11_8_DIO11_ONE: any = '1'

/**
Output is set to 0*/
export const GPIO_DOUT11_8_DIO11_ZERO: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_DOUT11_8_RESERVED17: any = '7'
export const GPIO_DOUT11_8_RESERVED17_M: any = '7'
export const GPIO_DOUT11_8_RESERVED17_S: any = '7'
/**
Data output for DIO10*/
export const GPIO_DOUT11_8_DIO10: any = '1'
export const GPIO_DOUT11_8_DIO10_M: any = '1'
export const GPIO_DOUT11_8_DIO10_S: any = '1'
/**
Output is set to 1*/
export const GPIO_DOUT11_8_DIO10_ONE: any = '1'

/**
Output is set to 0*/
export const GPIO_DOUT11_8_DIO10_ZERO: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_DOUT11_8_RESERVED9: any = '7'
export const GPIO_DOUT11_8_RESERVED9_M: any = '7'
export const GPIO_DOUT11_8_RESERVED9_S: any = '7'
/**
Data output for DIO9*/
export const GPIO_DOUT11_8_DIO9: any = '1'
export const GPIO_DOUT11_8_DIO9_M: any = '1'
export const GPIO_DOUT11_8_DIO9_S: any = '1'
/**
Output is set to 1*/
export const GPIO_DOUT11_8_DIO9_ONE: any = '1'

/**
Output is set to 0*/
export const GPIO_DOUT11_8_DIO9_ZERO: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_DOUT11_8_RESERVED1: any = '7'
export const GPIO_DOUT11_8_RESERVED1_M: any = '7'
export const GPIO_DOUT11_8_RESERVED1_S: any = '7'
/**
Data output for DIO8*/
export const GPIO_DOUT11_8_DIO8: any = '1'
export const GPIO_DOUT11_8_DIO8_M: any = '1'
export const GPIO_DOUT11_8_DIO8_S: any = '1'
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
export const GPIO_DOUT15_12_RESERVED25_M: any = '7'
export const GPIO_DOUT15_12_RESERVED25_S: any = '7'
/**
Data output for DIO15*/
export const GPIO_DOUT15_12_DIO15: any = '1'
export const GPIO_DOUT15_12_DIO15_M: any = '1'
export const GPIO_DOUT15_12_DIO15_S: any = '1'
/**
Output is set to 1*/
export const GPIO_DOUT15_12_DIO15_ONE: any = '1'

/**
Output is set to 0*/
export const GPIO_DOUT15_12_DIO15_ZERO: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_DOUT15_12_RESERVED17: any = '7'
export const GPIO_DOUT15_12_RESERVED17_M: any = '7'
export const GPIO_DOUT15_12_RESERVED17_S: any = '7'
/**
Data output for DIO14*/
export const GPIO_DOUT15_12_DIO14: any = '1'
export const GPIO_DOUT15_12_DIO14_M: any = '1'
export const GPIO_DOUT15_12_DIO14_S: any = '1'
/**
Output is set to 1*/
export const GPIO_DOUT15_12_DIO14_ONE: any = '1'

/**
Output is set to 0*/
export const GPIO_DOUT15_12_DIO14_ZERO: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_DOUT15_12_RESERVED9: any = '7'
export const GPIO_DOUT15_12_RESERVED9_M: any = '7'
export const GPIO_DOUT15_12_RESERVED9_S: any = '7'
/**
Data output for DIO13*/
export const GPIO_DOUT15_12_DIO13: any = '1'
export const GPIO_DOUT15_12_DIO13_M: any = '1'
export const GPIO_DOUT15_12_DIO13_S: any = '1'
/**
Output is set to 1*/
export const GPIO_DOUT15_12_DIO13_ONE: any = '1'

/**
Output is set to 0*/
export const GPIO_DOUT15_12_DIO13_ZERO: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_DOUT15_12_RESERVED1: any = '7'
export const GPIO_DOUT15_12_RESERVED1_M: any = '7'
export const GPIO_DOUT15_12_RESERVED1_S: any = '7'
/**
Data output for DIO12*/
export const GPIO_DOUT15_12_DIO12: any = '1'
export const GPIO_DOUT15_12_DIO12_M: any = '1'
export const GPIO_DOUT15_12_DIO12_S: any = '1'
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
export const GPIO_DOUT19_16_RESERVED25_M: any = '7'
export const GPIO_DOUT19_16_RESERVED25_S: any = '7'
/**
Data output for DIO19*/
export const GPIO_DOUT19_16_DIO19: any = '1'
export const GPIO_DOUT19_16_DIO19_M: any = '1'
export const GPIO_DOUT19_16_DIO19_S: any = '1'
/**
Output is set to 1*/
export const GPIO_DOUT19_16_DIO19_ONE: any = '1'

/**
Output is set to 0*/
export const GPIO_DOUT19_16_DIO19_ZERO: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_DOUT19_16_RESERVED17: any = '7'
export const GPIO_DOUT19_16_RESERVED17_M: any = '7'
export const GPIO_DOUT19_16_RESERVED17_S: any = '7'
/**
Data output for DIO18*/
export const GPIO_DOUT19_16_DIO18: any = '1'
export const GPIO_DOUT19_16_DIO18_M: any = '1'
export const GPIO_DOUT19_16_DIO18_S: any = '1'
/**
Output is set to 1*/
export const GPIO_DOUT19_16_DIO18_ONE: any = '1'

/**
Output is set to 0*/
export const GPIO_DOUT19_16_DIO18_ZERO: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_DOUT19_16_RESERVED9: any = '7'
export const GPIO_DOUT19_16_RESERVED9_M: any = '7'
export const GPIO_DOUT19_16_RESERVED9_S: any = '7'
/**
Data output for DIO17*/
export const GPIO_DOUT19_16_DIO17: any = '1'
export const GPIO_DOUT19_16_DIO17_M: any = '1'
export const GPIO_DOUT19_16_DIO17_S: any = '1'
/**
Output is set to 1*/
export const GPIO_DOUT19_16_DIO17_ONE: any = '1'

/**
Output is set to 0*/
export const GPIO_DOUT19_16_DIO17_ZERO: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_DOUT19_16_RESERVED1: any = '7'
export const GPIO_DOUT19_16_RESERVED1_M: any = '7'
export const GPIO_DOUT19_16_RESERVED1_S: any = '7'
/**
Data output for DIO16*/
export const GPIO_DOUT19_16_DIO16: any = '1'
export const GPIO_DOUT19_16_DIO16_M: any = '1'
export const GPIO_DOUT19_16_DIO16_S: any = '1'
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
export const GPIO_DOUT23_20_RESERVED25_M: any = '7'
export const GPIO_DOUT23_20_RESERVED25_S: any = '7'
/**
Data output for DIO23*/
export const GPIO_DOUT23_20_DIO23: any = '1'
export const GPIO_DOUT23_20_DIO23_M: any = '1'
export const GPIO_DOUT23_20_DIO23_S: any = '1'
/**
Output is set to 1*/
export const GPIO_DOUT23_20_DIO23_ONE: any = '1'

/**
Output is set to 0*/
export const GPIO_DOUT23_20_DIO23_ZERO: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_DOUT23_20_RESERVED17: any = '7'
export const GPIO_DOUT23_20_RESERVED17_M: any = '7'
export const GPIO_DOUT23_20_RESERVED17_S: any = '7'
/**
Data output for DIO22*/
export const GPIO_DOUT23_20_DIO22: any = '1'
export const GPIO_DOUT23_20_DIO22_M: any = '1'
export const GPIO_DOUT23_20_DIO22_S: any = '1'
/**
Output is set to 1*/
export const GPIO_DOUT23_20_DIO22_ONE: any = '1'

/**
Output is set to 0*/
export const GPIO_DOUT23_20_DIO22_ZERO: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_DOUT23_20_RESERVED9: any = '7'
export const GPIO_DOUT23_20_RESERVED9_M: any = '7'
export const GPIO_DOUT23_20_RESERVED9_S: any = '7'
/**
Data output for DIO21*/
export const GPIO_DOUT23_20_DIO21: any = '1'
export const GPIO_DOUT23_20_DIO21_M: any = '1'
export const GPIO_DOUT23_20_DIO21_S: any = '1'
/**
Output is set to 1*/
export const GPIO_DOUT23_20_DIO21_ONE: any = '1'

/**
Output is set to 0*/
export const GPIO_DOUT23_20_DIO21_ZERO: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_DOUT23_20_RESERVED1: any = '7'
export const GPIO_DOUT23_20_RESERVED1_M: any = '7'
export const GPIO_DOUT23_20_RESERVED1_S: any = '7'
/**
Data output for DIO20*/
export const GPIO_DOUT23_20_DIO20: any = '1'
export const GPIO_DOUT23_20_DIO20_M: any = '1'
export const GPIO_DOUT23_20_DIO20_S: any = '1'
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
export const GPIO_DOUT27_24_RESERVED9_M: any = '23'
export const GPIO_DOUT27_24_RESERVED9_S: any = '23'
/**
Data output for DIO25*/
export const GPIO_DOUT27_24_DIO25: any = '1'
export const GPIO_DOUT27_24_DIO25_M: any = '1'
export const GPIO_DOUT27_24_DIO25_S: any = '1'
/**
Output is set to 1*/
export const GPIO_DOUT27_24_DIO25_ONE: any = '1'

/**
Output is set to 0*/
export const GPIO_DOUT27_24_DIO25_ZERO: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_DOUT27_24_RESERVED1: any = '7'
export const GPIO_DOUT27_24_RESERVED1_M: any = '7'
export const GPIO_DOUT27_24_RESERVED1_S: any = '7'
/**
Data output for DIO24*/
export const GPIO_DOUT27_24_DIO24: any = '1'
export const GPIO_DOUT27_24_DIO24_M: any = '1'
export const GPIO_DOUT27_24_DIO24_S: any = '1'
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
export const GPIO_DOUT31_0_RESERVED26_M: any = '6'
export const GPIO_DOUT31_0_RESERVED26_S: any = '6'
/**
Data output for DIO25*/
export const GPIO_DOUT31_0_DIO25: any = '1'
export const GPIO_DOUT31_0_DIO25_M: any = '1'
export const GPIO_DOUT31_0_DIO25_S: any = '1'
/**
Output is set to 1*/
export const GPIO_DOUT31_0_DIO25_ONE: any = '1'

/**
Output is set to 0*/
export const GPIO_DOUT31_0_DIO25_ZERO: any = '0'

/**
Data output for DIO24*/
export const GPIO_DOUT31_0_DIO24: any = '1'
export const GPIO_DOUT31_0_DIO24_M: any = '1'
export const GPIO_DOUT31_0_DIO24_S: any = '1'
/**
Output is set to 1*/
export const GPIO_DOUT31_0_DIO24_ONE: any = '1'

/**
Output is set to 0*/
export const GPIO_DOUT31_0_DIO24_ZERO: any = '0'

/**
Data output for DIO23*/
export const GPIO_DOUT31_0_DIO23: any = '1'
export const GPIO_DOUT31_0_DIO23_M: any = '1'
export const GPIO_DOUT31_0_DIO23_S: any = '1'
/**
Output is set to 1*/
export const GPIO_DOUT31_0_DIO23_ONE: any = '1'

/**
Output is set to 0*/
export const GPIO_DOUT31_0_DIO23_ZERO: any = '0'

/**
Data output for DIO22*/
export const GPIO_DOUT31_0_DIO22: any = '1'
export const GPIO_DOUT31_0_DIO22_M: any = '1'
export const GPIO_DOUT31_0_DIO22_S: any = '1'
/**
Output is set to 1*/
export const GPIO_DOUT31_0_DIO22_ONE: any = '1'

/**
Output is set to 0*/
export const GPIO_DOUT31_0_DIO22_ZERO: any = '0'

/**
Data output for DIO21*/
export const GPIO_DOUT31_0_DIO21: any = '1'
export const GPIO_DOUT31_0_DIO21_M: any = '1'
export const GPIO_DOUT31_0_DIO21_S: any = '1'
/**
Output is set to 1*/
export const GPIO_DOUT31_0_DIO21_ONE: any = '1'

/**
Output is set to 0*/
export const GPIO_DOUT31_0_DIO21_ZERO: any = '0'

/**
Data output for DIO20*/
export const GPIO_DOUT31_0_DIO20: any = '1'
export const GPIO_DOUT31_0_DIO20_M: any = '1'
export const GPIO_DOUT31_0_DIO20_S: any = '1'
/**
Output is set to 1*/
export const GPIO_DOUT31_0_DIO20_ONE: any = '1'

/**
Output is set to 0*/
export const GPIO_DOUT31_0_DIO20_ZERO: any = '0'

/**
Data output for DIO19*/
export const GPIO_DOUT31_0_DIO19: any = '1'
export const GPIO_DOUT31_0_DIO19_M: any = '1'
export const GPIO_DOUT31_0_DIO19_S: any = '1'
/**
Output is set to 1*/
export const GPIO_DOUT31_0_DIO19_ONE: any = '1'

/**
Output is set to 0*/
export const GPIO_DOUT31_0_DIO19_ZERO: any = '0'

/**
Data output for DIO18*/
export const GPIO_DOUT31_0_DIO18: any = '1'
export const GPIO_DOUT31_0_DIO18_M: any = '1'
export const GPIO_DOUT31_0_DIO18_S: any = '1'
/**
Output is set to 1*/
export const GPIO_DOUT31_0_DIO18_ONE: any = '1'

/**
Output is set to 0*/
export const GPIO_DOUT31_0_DIO18_ZERO: any = '0'

/**
Data output for DIO17*/
export const GPIO_DOUT31_0_DIO17: any = '1'
export const GPIO_DOUT31_0_DIO17_M: any = '1'
export const GPIO_DOUT31_0_DIO17_S: any = '1'
/**
Output is set to 1*/
export const GPIO_DOUT31_0_DIO17_ONE: any = '1'

/**
Output is set to 0*/
export const GPIO_DOUT31_0_DIO17_ZERO: any = '0'

/**
Data output for DIO16*/
export const GPIO_DOUT31_0_DIO16: any = '1'
export const GPIO_DOUT31_0_DIO16_M: any = '1'
export const GPIO_DOUT31_0_DIO16_S: any = '1'
/**
Output is set to 1*/
export const GPIO_DOUT31_0_DIO16_ONE: any = '1'

/**
Output is set to 0*/
export const GPIO_DOUT31_0_DIO16_ZERO: any = '0'

/**
Data output for DIO15*/
export const GPIO_DOUT31_0_DIO15: any = '1'
export const GPIO_DOUT31_0_DIO15_M: any = '1'
export const GPIO_DOUT31_0_DIO15_S: any = '1'
/**
Output is set to 1*/
export const GPIO_DOUT31_0_DIO15_ONE: any = '1'

/**
Output is set to 0*/
export const GPIO_DOUT31_0_DIO15_ZERO: any = '0'

/**
Data output for DIO14*/
export const GPIO_DOUT31_0_DIO14: any = '1'
export const GPIO_DOUT31_0_DIO14_M: any = '1'
export const GPIO_DOUT31_0_DIO14_S: any = '1'
/**
Output is set to 1*/
export const GPIO_DOUT31_0_DIO14_ONE: any = '1'

/**
Output is set to 0*/
export const GPIO_DOUT31_0_DIO14_ZERO: any = '0'

/**
Data output for DIO13*/
export const GPIO_DOUT31_0_DIO13: any = '1'
export const GPIO_DOUT31_0_DIO13_M: any = '1'
export const GPIO_DOUT31_0_DIO13_S: any = '1'
/**
Output is set to 1*/
export const GPIO_DOUT31_0_DIO13_ONE: any = '1'

/**
Output is set to 0*/
export const GPIO_DOUT31_0_DIO13_ZERO: any = '0'

/**
Data output for DIO12*/
export const GPIO_DOUT31_0_DIO12: any = '1'
export const GPIO_DOUT31_0_DIO12_M: any = '1'
export const GPIO_DOUT31_0_DIO12_S: any = '1'
/**
Output is set to 1*/
export const GPIO_DOUT31_0_DIO12_ONE: any = '1'

/**
Output is set to 0*/
export const GPIO_DOUT31_0_DIO12_ZERO: any = '0'

/**
Data output for DIO11*/
export const GPIO_DOUT31_0_DIO11: any = '1'
export const GPIO_DOUT31_0_DIO11_M: any = '1'
export const GPIO_DOUT31_0_DIO11_S: any = '1'
/**
Output is set to 1*/
export const GPIO_DOUT31_0_DIO11_ONE: any = '1'

/**
Output is set to 0*/
export const GPIO_DOUT31_0_DIO11_ZERO: any = '0'

/**
Data output for DIO10*/
export const GPIO_DOUT31_0_DIO10: any = '1'
export const GPIO_DOUT31_0_DIO10_M: any = '1'
export const GPIO_DOUT31_0_DIO10_S: any = '1'
/**
Output is set to 1*/
export const GPIO_DOUT31_0_DIO10_ONE: any = '1'

/**
Output is set to 0*/
export const GPIO_DOUT31_0_DIO10_ZERO: any = '0'

/**
Data output for DIO9*/
export const GPIO_DOUT31_0_DIO9: any = '1'
export const GPIO_DOUT31_0_DIO9_M: any = '1'
export const GPIO_DOUT31_0_DIO9_S: any = '1'
/**
Output is set to 1*/
export const GPIO_DOUT31_0_DIO9_ONE: any = '1'

/**
Output is set to 0*/
export const GPIO_DOUT31_0_DIO9_ZERO: any = '0'

/**
Data output for DIO8*/
export const GPIO_DOUT31_0_DIO8: any = '1'
export const GPIO_DOUT31_0_DIO8_M: any = '1'
export const GPIO_DOUT31_0_DIO8_S: any = '1'
/**
Output is set to 1*/
export const GPIO_DOUT31_0_DIO8_ONE: any = '1'

/**
Output is set to 0*/
export const GPIO_DOUT31_0_DIO8_ZERO: any = '0'

/**
Data output for DIO7*/
export const GPIO_DOUT31_0_DIO7: any = '1'
export const GPIO_DOUT31_0_DIO7_M: any = '1'
export const GPIO_DOUT31_0_DIO7_S: any = '1'
/**
Output is set to 1*/
export const GPIO_DOUT31_0_DIO7_ONE: any = '1'

/**
Output is set to 0*/
export const GPIO_DOUT31_0_DIO7_ZERO: any = '0'

/**
Data output for DIO6*/
export const GPIO_DOUT31_0_DIO6: any = '1'
export const GPIO_DOUT31_0_DIO6_M: any = '1'
export const GPIO_DOUT31_0_DIO6_S: any = '1'
/**
Output is set to 1*/
export const GPIO_DOUT31_0_DIO6_ONE: any = '1'

/**
Output is set to 0*/
export const GPIO_DOUT31_0_DIO6_ZERO: any = '0'

/**
Data output for DIO5*/
export const GPIO_DOUT31_0_DIO5: any = '1'
export const GPIO_DOUT31_0_DIO5_M: any = '1'
export const GPIO_DOUT31_0_DIO5_S: any = '1'
/**
Output is set to 1*/
export const GPIO_DOUT31_0_DIO5_ONE: any = '1'

/**
Output is set to 0*/
export const GPIO_DOUT31_0_DIO5_ZERO: any = '0'

/**
Data output for DIO4*/
export const GPIO_DOUT31_0_DIO4: any = '1'
export const GPIO_DOUT31_0_DIO4_M: any = '1'
export const GPIO_DOUT31_0_DIO4_S: any = '1'
/**
Output is set to 1*/
export const GPIO_DOUT31_0_DIO4_ONE: any = '1'

/**
Output is set to 0*/
export const GPIO_DOUT31_0_DIO4_ZERO: any = '0'

/**
Data output for DIO3*/
export const GPIO_DOUT31_0_DIO3: any = '1'
export const GPIO_DOUT31_0_DIO3_M: any = '1'
export const GPIO_DOUT31_0_DIO3_S: any = '1'
/**
Output is set to 1*/
export const GPIO_DOUT31_0_DIO3_ONE: any = '1'

/**
Output is set to 0*/
export const GPIO_DOUT31_0_DIO3_ZERO: any = '0'

/**
Data output for DIO2*/
export const GPIO_DOUT31_0_DIO2: any = '1'
export const GPIO_DOUT31_0_DIO2_M: any = '1'
export const GPIO_DOUT31_0_DIO2_S: any = '1'
/**
Output is set to 1*/
export const GPIO_DOUT31_0_DIO2_ONE: any = '1'

/**
Output is set to 0*/
export const GPIO_DOUT31_0_DIO2_ZERO: any = '0'

/**
Data output for DIO1*/
export const GPIO_DOUT31_0_DIO1: any = '1'
export const GPIO_DOUT31_0_DIO1_M: any = '1'
export const GPIO_DOUT31_0_DIO1_S: any = '1'
/**
Output is set to 1*/
export const GPIO_DOUT31_0_DIO1_ONE: any = '1'

/**
Output is set to 0*/
export const GPIO_DOUT31_0_DIO1_ZERO: any = '0'

/**
Data output for DIO0*/
export const GPIO_DOUT31_0_DIO0: any = '1'
export const GPIO_DOUT31_0_DIO0_M: any = '1'
export const GPIO_DOUT31_0_DIO0_S: any = '1'
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
export const GPIO_DOUTSET31_0_RESERVED26_M: any = '6'
export const GPIO_DOUTSET31_0_RESERVED26_S: any = '6'
/**
Set bit DOUT31_0.DIO25*/
export const GPIO_DOUTSET31_0_DIO25: any = '1'
export const GPIO_DOUTSET31_0_DIO25_M: any = '1'
export const GPIO_DOUTSET31_0_DIO25_S: any = '1'
/**
Set*/
export const GPIO_DOUTSET31_0_DIO25_SET: any = '1'

/**
No effect*/
export const GPIO_DOUTSET31_0_DIO25_NOEFF: any = '0'

/**
Set bit DOUT31_0.DIO24*/
export const GPIO_DOUTSET31_0_DIO24: any = '1'
export const GPIO_DOUTSET31_0_DIO24_M: any = '1'
export const GPIO_DOUTSET31_0_DIO24_S: any = '1'
/**
Set*/
export const GPIO_DOUTSET31_0_DIO24_SET: any = '1'

/**
No effect*/
export const GPIO_DOUTSET31_0_DIO24_NOEFF: any = '0'

/**
Set bit DOUT31_0.DIO23*/
export const GPIO_DOUTSET31_0_DIO23: any = '1'
export const GPIO_DOUTSET31_0_DIO23_M: any = '1'
export const GPIO_DOUTSET31_0_DIO23_S: any = '1'
/**
Set*/
export const GPIO_DOUTSET31_0_DIO23_SET: any = '1'

/**
No effect*/
export const GPIO_DOUTSET31_0_DIO23_NOEFF: any = '0'

/**
Set bit DOUT31_0.DIO22*/
export const GPIO_DOUTSET31_0_DIO22: any = '1'
export const GPIO_DOUTSET31_0_DIO22_M: any = '1'
export const GPIO_DOUTSET31_0_DIO22_S: any = '1'
/**
Set*/
export const GPIO_DOUTSET31_0_DIO22_SET: any = '1'

/**
No effect*/
export const GPIO_DOUTSET31_0_DIO22_NOEFF: any = '0'

/**
Set bit DOUT31_0.DIO21*/
export const GPIO_DOUTSET31_0_DIO21: any = '1'
export const GPIO_DOUTSET31_0_DIO21_M: any = '1'
export const GPIO_DOUTSET31_0_DIO21_S: any = '1'
/**
Set*/
export const GPIO_DOUTSET31_0_DIO21_SET: any = '1'

/**
No effect*/
export const GPIO_DOUTSET31_0_DIO21_NOEFF: any = '0'

/**
Set bit DOUT31_0.DIO20*/
export const GPIO_DOUTSET31_0_DIO20: any = '1'
export const GPIO_DOUTSET31_0_DIO20_M: any = '1'
export const GPIO_DOUTSET31_0_DIO20_S: any = '1'
/**
Set*/
export const GPIO_DOUTSET31_0_DIO20_SET: any = '1'

/**
No effect*/
export const GPIO_DOUTSET31_0_DIO20_NOEFF: any = '0'

/**
Set bit DOUT31_0.DIO19*/
export const GPIO_DOUTSET31_0_DIO19: any = '1'
export const GPIO_DOUTSET31_0_DIO19_M: any = '1'
export const GPIO_DOUTSET31_0_DIO19_S: any = '1'
/**
Set*/
export const GPIO_DOUTSET31_0_DIO19_SET: any = '1'

/**
No effect*/
export const GPIO_DOUTSET31_0_DIO19_NOEFF: any = '0'

/**
Set bit DOUT31_0.DIO18*/
export const GPIO_DOUTSET31_0_DIO18: any = '1'
export const GPIO_DOUTSET31_0_DIO18_M: any = '1'
export const GPIO_DOUTSET31_0_DIO18_S: any = '1'
/**
Set*/
export const GPIO_DOUTSET31_0_DIO18_SET: any = '1'

/**
No effect*/
export const GPIO_DOUTSET31_0_DIO18_NOEFF: any = '0'

/**
Set bit DOUT31_0.DIO17*/
export const GPIO_DOUTSET31_0_DIO17: any = '1'
export const GPIO_DOUTSET31_0_DIO17_M: any = '1'
export const GPIO_DOUTSET31_0_DIO17_S: any = '1'
/**
Set*/
export const GPIO_DOUTSET31_0_DIO17_SET: any = '1'

/**
No effect*/
export const GPIO_DOUTSET31_0_DIO17_NOEFF: any = '0'

/**
Set bit DOUT31_0.DIO16*/
export const GPIO_DOUTSET31_0_DIO16: any = '1'
export const GPIO_DOUTSET31_0_DIO16_M: any = '1'
export const GPIO_DOUTSET31_0_DIO16_S: any = '1'
/**
Set*/
export const GPIO_DOUTSET31_0_DIO16_SET: any = '1'

/**
No effect*/
export const GPIO_DOUTSET31_0_DIO16_NOEFF: any = '0'

/**
Set bit DOUT31_0.DIO15*/
export const GPIO_DOUTSET31_0_DIO15: any = '1'
export const GPIO_DOUTSET31_0_DIO15_M: any = '1'
export const GPIO_DOUTSET31_0_DIO15_S: any = '1'
/**
Set*/
export const GPIO_DOUTSET31_0_DIO15_SET: any = '1'

/**
No effect*/
export const GPIO_DOUTSET31_0_DIO15_NOEFF: any = '0'

/**
Set bit DOUT31_0.DIO14*/
export const GPIO_DOUTSET31_0_DIO14: any = '1'
export const GPIO_DOUTSET31_0_DIO14_M: any = '1'
export const GPIO_DOUTSET31_0_DIO14_S: any = '1'
/**
Set*/
export const GPIO_DOUTSET31_0_DIO14_SET: any = '1'

/**
No effect*/
export const GPIO_DOUTSET31_0_DIO14_NOEFF: any = '0'

/**
Set bit DOUT31_0.DIO13 */
export const GPIO_DOUTSET31_0_DIO13: any = '1'
export const GPIO_DOUTSET31_0_DIO13_M: any = '1'
export const GPIO_DOUTSET31_0_DIO13_S: any = '1'
/**
Set*/
export const GPIO_DOUTSET31_0_DIO13_SET: any = '1'

/**
No effect*/
export const GPIO_DOUTSET31_0_DIO13_NOEFF: any = '0'

/**
Set bit DOUT31_0.DIO12*/
export const GPIO_DOUTSET31_0_DIO12: any = '1'
export const GPIO_DOUTSET31_0_DIO12_M: any = '1'
export const GPIO_DOUTSET31_0_DIO12_S: any = '1'
/**
Set*/
export const GPIO_DOUTSET31_0_DIO12_SET: any = '1'

/**
No effect*/
export const GPIO_DOUTSET31_0_DIO12_NOEFF: any = '0'

/**
Set bit DOUT31_0.DIO11*/
export const GPIO_DOUTSET31_0_DIO11: any = '1'
export const GPIO_DOUTSET31_0_DIO11_M: any = '1'
export const GPIO_DOUTSET31_0_DIO11_S: any = '1'
/**
Set*/
export const GPIO_DOUTSET31_0_DIO11_SET: any = '1'

/**
No effect*/
export const GPIO_DOUTSET31_0_DIO11_NOEFF: any = '0'

/**
Set bit DOUT31_0.DIO10*/
export const GPIO_DOUTSET31_0_DIO10: any = '1'
export const GPIO_DOUTSET31_0_DIO10_M: any = '1'
export const GPIO_DOUTSET31_0_DIO10_S: any = '1'
/**
Set*/
export const GPIO_DOUTSET31_0_DIO10_SET: any = '1'

/**
No effect*/
export const GPIO_DOUTSET31_0_DIO10_NOEFF: any = '0'

/**
Set bit DOUT31_0.DIO9*/
export const GPIO_DOUTSET31_0_DIO9: any = '1'
export const GPIO_DOUTSET31_0_DIO9_M: any = '1'
export const GPIO_DOUTSET31_0_DIO9_S: any = '1'
/**
Set*/
export const GPIO_DOUTSET31_0_DIO9_SET: any = '1'

/**
No effect*/
export const GPIO_DOUTSET31_0_DIO9_NOEFF: any = '0'

/**
Set bit DOUT31_0.DIO8*/
export const GPIO_DOUTSET31_0_DIO8: any = '1'
export const GPIO_DOUTSET31_0_DIO8_M: any = '1'
export const GPIO_DOUTSET31_0_DIO8_S: any = '1'
/**
Set*/
export const GPIO_DOUTSET31_0_DIO8_SET: any = '1'

/**
No effect*/
export const GPIO_DOUTSET31_0_DIO8_NOEFF: any = '0'

/**
Set bit DOUT31_0.DIO7*/
export const GPIO_DOUTSET31_0_DIO7: any = '1'
export const GPIO_DOUTSET31_0_DIO7_M: any = '1'
export const GPIO_DOUTSET31_0_DIO7_S: any = '1'
/**
Set*/
export const GPIO_DOUTSET31_0_DIO7_SET: any = '1'

/**
No effect*/
export const GPIO_DOUTSET31_0_DIO7_NOEFF: any = '0'

/**
Set bit DOUT31_0.DIO6*/
export const GPIO_DOUTSET31_0_DIO6: any = '1'
export const GPIO_DOUTSET31_0_DIO6_M: any = '1'
export const GPIO_DOUTSET31_0_DIO6_S: any = '1'
/**
Set*/
export const GPIO_DOUTSET31_0_DIO6_SET: any = '1'

/**
No effect*/
export const GPIO_DOUTSET31_0_DIO6_NOEFF: any = '0'

/**
Set bit DOUT31_0.DIO5*/
export const GPIO_DOUTSET31_0_DIO5: any = '1'
export const GPIO_DOUTSET31_0_DIO5_M: any = '1'
export const GPIO_DOUTSET31_0_DIO5_S: any = '1'
/**
Set*/
export const GPIO_DOUTSET31_0_DIO5_SET: any = '1'

/**
No effect*/
export const GPIO_DOUTSET31_0_DIO5_NOEFF: any = '0'

/**
Set bit DOUT31_0.DIO4*/
export const GPIO_DOUTSET31_0_DIO4: any = '1'
export const GPIO_DOUTSET31_0_DIO4_M: any = '1'
export const GPIO_DOUTSET31_0_DIO4_S: any = '1'
/**
Set*/
export const GPIO_DOUTSET31_0_DIO4_SET: any = '1'

/**
No effect*/
export const GPIO_DOUTSET31_0_DIO4_NOEFF: any = '0'

/**
Set bit DOUT31_0.DIO3*/
export const GPIO_DOUTSET31_0_DIO3: any = '1'
export const GPIO_DOUTSET31_0_DIO3_M: any = '1'
export const GPIO_DOUTSET31_0_DIO3_S: any = '1'
/**
Set*/
export const GPIO_DOUTSET31_0_DIO3_SET: any = '1'

/**
No effect*/
export const GPIO_DOUTSET31_0_DIO3_NOEFF: any = '0'

/**
Set bit DOUT31_0.DIO2*/
export const GPIO_DOUTSET31_0_DIO2: any = '1'
export const GPIO_DOUTSET31_0_DIO2_M: any = '1'
export const GPIO_DOUTSET31_0_DIO2_S: any = '1'
/**
Set*/
export const GPIO_DOUTSET31_0_DIO2_SET: any = '1'

/**
No effect*/
export const GPIO_DOUTSET31_0_DIO2_NOEFF: any = '0'

/**
Set bit DOUT31_0.DIO1 */
export const GPIO_DOUTSET31_0_DIO1: any = '1'
export const GPIO_DOUTSET31_0_DIO1_M: any = '1'
export const GPIO_DOUTSET31_0_DIO1_S: any = '1'
/**
Set*/
export const GPIO_DOUTSET31_0_DIO1_SET: any = '1'

/**
No effect*/
export const GPIO_DOUTSET31_0_DIO1_NOEFF: any = '0'

/**
Set bit DOUT31_0.DIO0 */
export const GPIO_DOUTSET31_0_DIO0: any = '1'
export const GPIO_DOUTSET31_0_DIO0_M: any = '1'
export const GPIO_DOUTSET31_0_DIO0_S: any = '1'
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
export const GPIO_DOUTCLR31_0_RESERVED26_M: any = '6'
export const GPIO_DOUTCLR31_0_RESERVED26_S: any = '6'
/**
Clear bit DOUT31_0.DIO25*/
export const GPIO_DOUTCLR31_0_DIO25: any = '1'
export const GPIO_DOUTCLR31_0_DIO25_M: any = '1'
export const GPIO_DOUTCLR31_0_DIO25_S: any = '1'
/**
Clear*/
export const GPIO_DOUTCLR31_0_DIO25_CLR: any = '1'

/**
No effect*/
export const GPIO_DOUTCLR31_0_DIO25_NOEFF: any = '0'

/**
Clear bit DOUT31_0.DIO24*/
export const GPIO_DOUTCLR31_0_DIO24: any = '1'
export const GPIO_DOUTCLR31_0_DIO24_M: any = '1'
export const GPIO_DOUTCLR31_0_DIO24_S: any = '1'
/**
Clear*/
export const GPIO_DOUTCLR31_0_DIO24_CLR: any = '1'

/**
No effect*/
export const GPIO_DOUTCLR31_0_DIO24_NOEFF: any = '0'

/**
Clear bit DOUT31_0.DIO23*/
export const GPIO_DOUTCLR31_0_DIO23: any = '1'
export const GPIO_DOUTCLR31_0_DIO23_M: any = '1'
export const GPIO_DOUTCLR31_0_DIO23_S: any = '1'
/**
Clear*/
export const GPIO_DOUTCLR31_0_DIO23_CLR: any = '1'

/**
No effect*/
export const GPIO_DOUTCLR31_0_DIO23_NOEFF: any = '0'

/**
Clear bit DOUT31_0.DIO22*/
export const GPIO_DOUTCLR31_0_DIO22: any = '1'
export const GPIO_DOUTCLR31_0_DIO22_M: any = '1'
export const GPIO_DOUTCLR31_0_DIO22_S: any = '1'
/**
Clear*/
export const GPIO_DOUTCLR31_0_DIO22_CLR: any = '1'

/**
No effect*/
export const GPIO_DOUTCLR31_0_DIO22_NOEFF: any = '0'

/**
Clear bit DOUT31_0.DIO21*/
export const GPIO_DOUTCLR31_0_DIO21: any = '1'
export const GPIO_DOUTCLR31_0_DIO21_M: any = '1'
export const GPIO_DOUTCLR31_0_DIO21_S: any = '1'
/**
Clear*/
export const GPIO_DOUTCLR31_0_DIO21_CLR: any = '1'

/**
No effect*/
export const GPIO_DOUTCLR31_0_DIO21_NOEFF: any = '0'

/**
Clear bit DOUT31_0.DIO20*/
export const GPIO_DOUTCLR31_0_DIO20: any = '1'
export const GPIO_DOUTCLR31_0_DIO20_M: any = '1'
export const GPIO_DOUTCLR31_0_DIO20_S: any = '1'
/**
Clear*/
export const GPIO_DOUTCLR31_0_DIO20_CLR: any = '1'

/**
No effect*/
export const GPIO_DOUTCLR31_0_DIO20_NOEFF: any = '0'

/**
Clear bit DOUT31_0.DIO19*/
export const GPIO_DOUTCLR31_0_DIO19: any = '1'
export const GPIO_DOUTCLR31_0_DIO19_M: any = '1'
export const GPIO_DOUTCLR31_0_DIO19_S: any = '1'
/**
Clear*/
export const GPIO_DOUTCLR31_0_DIO19_CLR: any = '1'

/**
No effect*/
export const GPIO_DOUTCLR31_0_DIO19_NOEFF: any = '0'

/**
Clear bit DOUT31_0.DIO18*/
export const GPIO_DOUTCLR31_0_DIO18: any = '1'
export const GPIO_DOUTCLR31_0_DIO18_M: any = '1'
export const GPIO_DOUTCLR31_0_DIO18_S: any = '1'
/**
Clear*/
export const GPIO_DOUTCLR31_0_DIO18_CLR: any = '1'

/**
No effect*/
export const GPIO_DOUTCLR31_0_DIO18_NOEFF: any = '0'

/**
Clear bit DOUT31_0.DIO17*/
export const GPIO_DOUTCLR31_0_DIO17: any = '1'
export const GPIO_DOUTCLR31_0_DIO17_M: any = '1'
export const GPIO_DOUTCLR31_0_DIO17_S: any = '1'
/**
Clear*/
export const GPIO_DOUTCLR31_0_DIO17_CLR: any = '1'

/**
No effect*/
export const GPIO_DOUTCLR31_0_DIO17_NOEFF: any = '0'

/**
Clear bit DOUT31_0.DIO16*/
export const GPIO_DOUTCLR31_0_DIO16: any = '1'
export const GPIO_DOUTCLR31_0_DIO16_M: any = '1'
export const GPIO_DOUTCLR31_0_DIO16_S: any = '1'
/**
Clear*/
export const GPIO_DOUTCLR31_0_DIO16_CLR: any = '1'

/**
No effect*/
export const GPIO_DOUTCLR31_0_DIO16_NOEFF: any = '0'

/**
Clear bit DOUT31_0.DIO15*/
export const GPIO_DOUTCLR31_0_DIO15: any = '1'
export const GPIO_DOUTCLR31_0_DIO15_M: any = '1'
export const GPIO_DOUTCLR31_0_DIO15_S: any = '1'
/**
Clear*/
export const GPIO_DOUTCLR31_0_DIO15_CLR: any = '1'

/**
No effect*/
export const GPIO_DOUTCLR31_0_DIO15_NOEFF: any = '0'

/**
Clear bit DOUT31_0.DIO14*/
export const GPIO_DOUTCLR31_0_DIO14: any = '1'
export const GPIO_DOUTCLR31_0_DIO14_M: any = '1'
export const GPIO_DOUTCLR31_0_DIO14_S: any = '1'
/**
Clear*/
export const GPIO_DOUTCLR31_0_DIO14_CLR: any = '1'

/**
No effect*/
export const GPIO_DOUTCLR31_0_DIO14_NOEFF: any = '0'

/**
Clear bit DOUT31_0.DIO13*/
export const GPIO_DOUTCLR31_0_DIO13: any = '1'
export const GPIO_DOUTCLR31_0_DIO13_M: any = '1'
export const GPIO_DOUTCLR31_0_DIO13_S: any = '1'
/**
Clear*/
export const GPIO_DOUTCLR31_0_DIO13_CLR: any = '1'

/**
No effect*/
export const GPIO_DOUTCLR31_0_DIO13_NOEFF: any = '0'

/**
Clear bit DOUT31_0.DIO12*/
export const GPIO_DOUTCLR31_0_DIO12: any = '1'
export const GPIO_DOUTCLR31_0_DIO12_M: any = '1'
export const GPIO_DOUTCLR31_0_DIO12_S: any = '1'
/**
Clear*/
export const GPIO_DOUTCLR31_0_DIO12_CLR: any = '1'

/**
No effect*/
export const GPIO_DOUTCLR31_0_DIO12_NOEFF: any = '0'

/**
Clear bit DOUT31_0.DIO11*/
export const GPIO_DOUTCLR31_0_DIO11: any = '1'
export const GPIO_DOUTCLR31_0_DIO11_M: any = '1'
export const GPIO_DOUTCLR31_0_DIO11_S: any = '1'
/**
Clear*/
export const GPIO_DOUTCLR31_0_DIO11_CLR: any = '1'

/**
No effect*/
export const GPIO_DOUTCLR31_0_DIO11_NOEFF: any = '0'

/**
Clear bit DOUT31_0.DIO10*/
export const GPIO_DOUTCLR31_0_DIO10: any = '1'
export const GPIO_DOUTCLR31_0_DIO10_M: any = '1'
export const GPIO_DOUTCLR31_0_DIO10_S: any = '1'
/**
Clear*/
export const GPIO_DOUTCLR31_0_DIO10_CLR: any = '1'

/**
No effect*/
export const GPIO_DOUTCLR31_0_DIO10_NOEFF: any = '0'

/**
Clear bit DOUT31_0.DIO9*/
export const GPIO_DOUTCLR31_0_DIO9: any = '1'
export const GPIO_DOUTCLR31_0_DIO9_M: any = '1'
export const GPIO_DOUTCLR31_0_DIO9_S: any = '1'
/**
Clear*/
export const GPIO_DOUTCLR31_0_DIO9_CLR: any = '1'

/**
No effect*/
export const GPIO_DOUTCLR31_0_DIO9_NOEFF: any = '0'

/**
Clear bit DOUT31_0.DIO8*/
export const GPIO_DOUTCLR31_0_DIO8: any = '1'
export const GPIO_DOUTCLR31_0_DIO8_M: any = '1'
export const GPIO_DOUTCLR31_0_DIO8_S: any = '1'
/**
Clear*/
export const GPIO_DOUTCLR31_0_DIO8_CLR: any = '1'

/**
No effect*/
export const GPIO_DOUTCLR31_0_DIO8_NOEFF: any = '0'

/**
Clear bit DOUT31_0.DIO7*/
export const GPIO_DOUTCLR31_0_DIO7: any = '1'
export const GPIO_DOUTCLR31_0_DIO7_M: any = '1'
export const GPIO_DOUTCLR31_0_DIO7_S: any = '1'
/**
Clear*/
export const GPIO_DOUTCLR31_0_DIO7_CLR: any = '1'

/**
No effect*/
export const GPIO_DOUTCLR31_0_DIO7_NOEFF: any = '0'

/**
Clear bit DOUT31_0.DIO6*/
export const GPIO_DOUTCLR31_0_DIO6: any = '1'
export const GPIO_DOUTCLR31_0_DIO6_M: any = '1'
export const GPIO_DOUTCLR31_0_DIO6_S: any = '1'
/**
Clear*/
export const GPIO_DOUTCLR31_0_DIO6_CLR: any = '1'

/**
No effect*/
export const GPIO_DOUTCLR31_0_DIO6_NOEFF: any = '0'

/**
Clear bit DOUT31_0.DIO5*/
export const GPIO_DOUTCLR31_0_DIO5: any = '1'
export const GPIO_DOUTCLR31_0_DIO5_M: any = '1'
export const GPIO_DOUTCLR31_0_DIO5_S: any = '1'
/**
Clear*/
export const GPIO_DOUTCLR31_0_DIO5_CLR: any = '1'

/**
No effect*/
export const GPIO_DOUTCLR31_0_DIO5_NOEFF: any = '0'

/**
Clear bit DOUT31_0.DIO4*/
export const GPIO_DOUTCLR31_0_DIO4: any = '1'
export const GPIO_DOUTCLR31_0_DIO4_M: any = '1'
export const GPIO_DOUTCLR31_0_DIO4_S: any = '1'
/**
Clear*/
export const GPIO_DOUTCLR31_0_DIO4_CLR: any = '1'

/**
No effect*/
export const GPIO_DOUTCLR31_0_DIO4_NOEFF: any = '0'

/**
Clear bit DOUT31_0.DIO3*/
export const GPIO_DOUTCLR31_0_DIO3: any = '1'
export const GPIO_DOUTCLR31_0_DIO3_M: any = '1'
export const GPIO_DOUTCLR31_0_DIO3_S: any = '1'
/**
Clear*/
export const GPIO_DOUTCLR31_0_DIO3_CLR: any = '1'

/**
No effect*/
export const GPIO_DOUTCLR31_0_DIO3_NOEFF: any = '0'

/**
Clear bit DOUT31_0.DIO2*/
export const GPIO_DOUTCLR31_0_DIO2: any = '1'
export const GPIO_DOUTCLR31_0_DIO2_M: any = '1'
export const GPIO_DOUTCLR31_0_DIO2_S: any = '1'
/**
Clear*/
export const GPIO_DOUTCLR31_0_DIO2_CLR: any = '1'

/**
No effect*/
export const GPIO_DOUTCLR31_0_DIO2_NOEFF: any = '0'

/**
Clear bit DOUT31_0.DIO1*/
export const GPIO_DOUTCLR31_0_DIO1: any = '1'
export const GPIO_DOUTCLR31_0_DIO1_M: any = '1'
export const GPIO_DOUTCLR31_0_DIO1_S: any = '1'
/**
Clear*/
export const GPIO_DOUTCLR31_0_DIO1_CLR: any = '1'

/**
No effect*/
export const GPIO_DOUTCLR31_0_DIO1_NOEFF: any = '0'

/**
Clear bit DOUT31_0.DIO0*/
export const GPIO_DOUTCLR31_0_DIO0: any = '1'
export const GPIO_DOUTCLR31_0_DIO0_M: any = '1'
export const GPIO_DOUTCLR31_0_DIO0_S: any = '1'
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
export const GPIO_DOUTTGL31_0_RESERVED26_M: any = '6'
export const GPIO_DOUTTGL31_0_RESERVED26_S: any = '6'
/**
Toggles bit DOUT31_0.DIO25*/
export const GPIO_DOUTTGL31_0_DIO25: any = '1'
export const GPIO_DOUTTGL31_0_DIO25_M: any = '1'
export const GPIO_DOUTTGL31_0_DIO25_S: any = '1'
/**
Toggle*/
export const GPIO_DOUTTGL31_0_DIO25_TOGGLE: any = '1'

/**
No effect*/
export const GPIO_DOUTTGL31_0_DIO25_NOEFF: any = '0'

/**
Toggles bit DOUT31_0.DIO24*/
export const GPIO_DOUTTGL31_0_DIO24: any = '1'
export const GPIO_DOUTTGL31_0_DIO24_M: any = '1'
export const GPIO_DOUTTGL31_0_DIO24_S: any = '1'
/**
Toggle*/
export const GPIO_DOUTTGL31_0_DIO24_TOGGLE: any = '1'

/**
No effect*/
export const GPIO_DOUTTGL31_0_DIO24_NOEFF: any = '0'

/**
Toggles bit DOUT31_0.DIO23*/
export const GPIO_DOUTTGL31_0_DIO23: any = '1'
export const GPIO_DOUTTGL31_0_DIO23_M: any = '1'
export const GPIO_DOUTTGL31_0_DIO23_S: any = '1'
/**
Toggle*/
export const GPIO_DOUTTGL31_0_DIO23_TOGGLE: any = '1'

/**
No effect*/
export const GPIO_DOUTTGL31_0_DIO23_NOEFF: any = '0'

/**
Toggles bit DOUT31_0.DIO22*/
export const GPIO_DOUTTGL31_0_DIO22: any = '1'
export const GPIO_DOUTTGL31_0_DIO22_M: any = '1'
export const GPIO_DOUTTGL31_0_DIO22_S: any = '1'
/**
Toggle*/
export const GPIO_DOUTTGL31_0_DIO22_TOGGLE: any = '1'

/**
No effect*/
export const GPIO_DOUTTGL31_0_DIO22_NOEFF: any = '0'

/**
Toggles bit DOUT31_0.DIO21*/
export const GPIO_DOUTTGL31_0_DIO21: any = '1'
export const GPIO_DOUTTGL31_0_DIO21_M: any = '1'
export const GPIO_DOUTTGL31_0_DIO21_S: any = '1'
/**
Toggle*/
export const GPIO_DOUTTGL31_0_DIO21_TOGGLE: any = '1'

/**
No effect*/
export const GPIO_DOUTTGL31_0_DIO21_NOEFF: any = '0'

/**
Toggles bit DOUT31_0.DIO20*/
export const GPIO_DOUTTGL31_0_DIO20: any = '1'
export const GPIO_DOUTTGL31_0_DIO20_M: any = '1'
export const GPIO_DOUTTGL31_0_DIO20_S: any = '1'
/**
Toggle*/
export const GPIO_DOUTTGL31_0_DIO20_TOGGLE: any = '1'

/**
No effect*/
export const GPIO_DOUTTGL31_0_DIO20_NOEFF: any = '0'

/**
Toggles bit DOUT31_0.DIO19*/
export const GPIO_DOUTTGL31_0_DIO19: any = '1'
export const GPIO_DOUTTGL31_0_DIO19_M: any = '1'
export const GPIO_DOUTTGL31_0_DIO19_S: any = '1'
/**
Toggle*/
export const GPIO_DOUTTGL31_0_DIO19_TOGGLE: any = '1'

/**
No effect*/
export const GPIO_DOUTTGL31_0_DIO19_NOEFF: any = '0'

/**
Toggles bit DOUT31_0.DIO18*/
export const GPIO_DOUTTGL31_0_DIO18: any = '1'
export const GPIO_DOUTTGL31_0_DIO18_M: any = '1'
export const GPIO_DOUTTGL31_0_DIO18_S: any = '1'
/**
Toggle*/
export const GPIO_DOUTTGL31_0_DIO18_TOGGLE: any = '1'

/**
No effect*/
export const GPIO_DOUTTGL31_0_DIO18_NOEFF: any = '0'

/**
Toggles bit DOUT31_0.DIO17*/
export const GPIO_DOUTTGL31_0_DIO17: any = '1'
export const GPIO_DOUTTGL31_0_DIO17_M: any = '1'
export const GPIO_DOUTTGL31_0_DIO17_S: any = '1'
/**
Toggle*/
export const GPIO_DOUTTGL31_0_DIO17_TOGGLE: any = '1'

/**
No effect*/
export const GPIO_DOUTTGL31_0_DIO17_NOEFF: any = '0'

/**
Toggles bit DOUT31_0.DIO16*/
export const GPIO_DOUTTGL31_0_DIO16: any = '1'
export const GPIO_DOUTTGL31_0_DIO16_M: any = '1'
export const GPIO_DOUTTGL31_0_DIO16_S: any = '1'
/**
Toggle*/
export const GPIO_DOUTTGL31_0_DIO16_TOGGLE: any = '1'

/**
No effect*/
export const GPIO_DOUTTGL31_0_DIO16_NOEFF: any = '0'

/**
Toggles bit DOUT31_0.DIO15*/
export const GPIO_DOUTTGL31_0_DIO15: any = '1'
export const GPIO_DOUTTGL31_0_DIO15_M: any = '1'
export const GPIO_DOUTTGL31_0_DIO15_S: any = '1'
/**
Toggle*/
export const GPIO_DOUTTGL31_0_DIO15_TOGGLE: any = '1'

/**
No effect*/
export const GPIO_DOUTTGL31_0_DIO15_NOEFF: any = '0'

/**
Toggles bit DOUT31_0.DIO14*/
export const GPIO_DOUTTGL31_0_DIO14: any = '1'
export const GPIO_DOUTTGL31_0_DIO14_M: any = '1'
export const GPIO_DOUTTGL31_0_DIO14_S: any = '1'
/**
Toggle*/
export const GPIO_DOUTTGL31_0_DIO14_TOGGLE: any = '1'

/**
No effect*/
export const GPIO_DOUTTGL31_0_DIO14_NOEFF: any = '0'

/**
Toggles bit DOUT31_0.DIO13*/
export const GPIO_DOUTTGL31_0_DIO13: any = '1'
export const GPIO_DOUTTGL31_0_DIO13_M: any = '1'
export const GPIO_DOUTTGL31_0_DIO13_S: any = '1'
/**
Toggle*/
export const GPIO_DOUTTGL31_0_DIO13_TOGGLE: any = '1'

/**
No effect*/
export const GPIO_DOUTTGL31_0_DIO13_NOEFF: any = '0'

/**
Toggles bit DOUT31_0.DIO12*/
export const GPIO_DOUTTGL31_0_DIO12: any = '1'
export const GPIO_DOUTTGL31_0_DIO12_M: any = '1'
export const GPIO_DOUTTGL31_0_DIO12_S: any = '1'
/**
Toggle*/
export const GPIO_DOUTTGL31_0_DIO12_TOGGLE: any = '1'

/**
No effect*/
export const GPIO_DOUTTGL31_0_DIO12_NOEFF: any = '0'

/**
Toggles bit DOUT31_0.DIO11*/
export const GPIO_DOUTTGL31_0_DIO11: any = '1'
export const GPIO_DOUTTGL31_0_DIO11_M: any = '1'
export const GPIO_DOUTTGL31_0_DIO11_S: any = '1'
/**
Toggle*/
export const GPIO_DOUTTGL31_0_DIO11_TOGGLE: any = '1'

/**
No effect*/
export const GPIO_DOUTTGL31_0_DIO11_NOEFF: any = '0'

/**
Toggles bit DOUT31_0.DIO10*/
export const GPIO_DOUTTGL31_0_DIO10: any = '1'
export const GPIO_DOUTTGL31_0_DIO10_M: any = '1'
export const GPIO_DOUTTGL31_0_DIO10_S: any = '1'
/**
Toggle*/
export const GPIO_DOUTTGL31_0_DIO10_TOGGLE: any = '1'

/**
No effect*/
export const GPIO_DOUTTGL31_0_DIO10_NOEFF: any = '0'

/**
Toggles bit DOUT31_0.DIO9*/
export const GPIO_DOUTTGL31_0_DIO9: any = '1'
export const GPIO_DOUTTGL31_0_DIO9_M: any = '1'
export const GPIO_DOUTTGL31_0_DIO9_S: any = '1'
/**
Toggle*/
export const GPIO_DOUTTGL31_0_DIO9_TOGGLE: any = '1'

/**
No effect*/
export const GPIO_DOUTTGL31_0_DIO9_NOEFF: any = '0'

/**
Toggles bit DOUT31_0.DIO8*/
export const GPIO_DOUTTGL31_0_DIO8: any = '1'
export const GPIO_DOUTTGL31_0_DIO8_M: any = '1'
export const GPIO_DOUTTGL31_0_DIO8_S: any = '1'
/**
Toggle*/
export const GPIO_DOUTTGL31_0_DIO8_TOGGLE: any = '1'

/**
No effect*/
export const GPIO_DOUTTGL31_0_DIO8_NOEFF: any = '0'

/**
Toggles bit DOUT31_0.DIO7*/
export const GPIO_DOUTTGL31_0_DIO7: any = '1'
export const GPIO_DOUTTGL31_0_DIO7_M: any = '1'
export const GPIO_DOUTTGL31_0_DIO7_S: any = '1'
/**
Toggle*/
export const GPIO_DOUTTGL31_0_DIO7_TOGGLE: any = '1'

/**
No effect*/
export const GPIO_DOUTTGL31_0_DIO7_NOEFF: any = '0'

/**
Toggles bit DOUT31_0.DIO6*/
export const GPIO_DOUTTGL31_0_DIO6: any = '1'
export const GPIO_DOUTTGL31_0_DIO6_M: any = '1'
export const GPIO_DOUTTGL31_0_DIO6_S: any = '1'
/**
Toggle*/
export const GPIO_DOUTTGL31_0_DIO6_TOGGLE: any = '1'

/**
No effect*/
export const GPIO_DOUTTGL31_0_DIO6_NOEFF: any = '0'

/**
Toggles bit DOUT31_0.DIO5*/
export const GPIO_DOUTTGL31_0_DIO5: any = '1'
export const GPIO_DOUTTGL31_0_DIO5_M: any = '1'
export const GPIO_DOUTTGL31_0_DIO5_S: any = '1'
/**
Toggle*/
export const GPIO_DOUTTGL31_0_DIO5_TOGGLE: any = '1'

/**
No effect*/
export const GPIO_DOUTTGL31_0_DIO5_NOEFF: any = '0'

/**
Toggles bit DOUT31_0.DIO4*/
export const GPIO_DOUTTGL31_0_DIO4: any = '1'
export const GPIO_DOUTTGL31_0_DIO4_M: any = '1'
export const GPIO_DOUTTGL31_0_DIO4_S: any = '1'
/**
Toggle*/
export const GPIO_DOUTTGL31_0_DIO4_TOGGLE: any = '1'

/**
No effect*/
export const GPIO_DOUTTGL31_0_DIO4_NOEFF: any = '0'

/**
Toggles bit DOUT31_0.DIO3*/
export const GPIO_DOUTTGL31_0_DIO3: any = '1'
export const GPIO_DOUTTGL31_0_DIO3_M: any = '1'
export const GPIO_DOUTTGL31_0_DIO3_S: any = '1'
/**
Toggle*/
export const GPIO_DOUTTGL31_0_DIO3_TOGGLE: any = '1'

/**
No effect*/
export const GPIO_DOUTTGL31_0_DIO3_NOEFF: any = '0'

/**
Toggles bit DOUT31_0.DIO2*/
export const GPIO_DOUTTGL31_0_DIO2: any = '1'
export const GPIO_DOUTTGL31_0_DIO2_M: any = '1'
export const GPIO_DOUTTGL31_0_DIO2_S: any = '1'
/**
Toggle*/
export const GPIO_DOUTTGL31_0_DIO2_TOGGLE: any = '1'

/**
No effect*/
export const GPIO_DOUTTGL31_0_DIO2_NOEFF: any = '0'

/**
Toggles bit DOUT31_0.DIO1*/
export const GPIO_DOUTTGL31_0_DIO1: any = '1'
export const GPIO_DOUTTGL31_0_DIO1_M: any = '1'
export const GPIO_DOUTTGL31_0_DIO1_S: any = '1'
/**
Toggle*/
export const GPIO_DOUTTGL31_0_DIO1_TOGGLE: any = '1'

/**
No effect*/
export const GPIO_DOUTTGL31_0_DIO1_NOEFF: any = '0'

/**
Toggles bit DOUT31_0.DIO0*/
export const GPIO_DOUTTGL31_0_DIO0: any = '1'
export const GPIO_DOUTTGL31_0_DIO0_M: any = '1'
export const GPIO_DOUTTGL31_0_DIO0_S: any = '1'
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
export const GPIO_DOUTTGL3_0_RESERVED25_M: any = '7'
export const GPIO_DOUTTGL3_0_RESERVED25_S: any = '7'
/**
Toggles bit DOUT31_0.DIO3*/
export const GPIO_DOUTTGL3_0_DIO3: any = '1'
export const GPIO_DOUTTGL3_0_DIO3_M: any = '1'
export const GPIO_DOUTTGL3_0_DIO3_S: any = '1'
/**
Toggle*/
export const GPIO_DOUTTGL3_0_DIO3_TOGGLE: any = '1'

/**
No effect*/
export const GPIO_DOUTTGL3_0_DIO3_NOEFF: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_DOUTTGL3_0_RESERVED17: any = '7'
export const GPIO_DOUTTGL3_0_RESERVED17_M: any = '7'
export const GPIO_DOUTTGL3_0_RESERVED17_S: any = '7'
/**
Toggles bit DOUT31_0.DIO2*/
export const GPIO_DOUTTGL3_0_DIO2: any = '1'
export const GPIO_DOUTTGL3_0_DIO2_M: any = '1'
export const GPIO_DOUTTGL3_0_DIO2_S: any = '1'
/**
Toggle*/
export const GPIO_DOUTTGL3_0_DIO2_TOGGLE: any = '1'

/**
No effect*/
export const GPIO_DOUTTGL3_0_DIO2_NOEFF: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_DOUTTGL3_0_RESERVED9: any = '7'
export const GPIO_DOUTTGL3_0_RESERVED9_M: any = '7'
export const GPIO_DOUTTGL3_0_RESERVED9_S: any = '7'
/**
Toggles bit DOUT31_0.DIO1*/
export const GPIO_DOUTTGL3_0_DIO1: any = '1'
export const GPIO_DOUTTGL3_0_DIO1_M: any = '1'
export const GPIO_DOUTTGL3_0_DIO1_S: any = '1'
/**
Toggle*/
export const GPIO_DOUTTGL3_0_DIO1_TOGGLE: any = '1'

/**
No effect*/
export const GPIO_DOUTTGL3_0_DIO1_NOEFF: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_DOUTTGL3_0_RESERVED1: any = '7'
export const GPIO_DOUTTGL3_0_RESERVED1_M: any = '7'
export const GPIO_DOUTTGL3_0_RESERVED1_S: any = '7'
/**
Toggles bit DOUT31_0.DIO0*/
export const GPIO_DOUTTGL3_0_DIO0: any = '1'
export const GPIO_DOUTTGL3_0_DIO0_M: any = '1'
export const GPIO_DOUTTGL3_0_DIO0_S: any = '1'
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
export const GPIO_DOUTTGL7_4_RESERVED25_M: any = '7'
export const GPIO_DOUTTGL7_4_RESERVED25_S: any = '7'
/**
Toggles bit DOUT31_0.DIO7*/
export const GPIO_DOUTTGL7_4_DIO7: any = '1'
export const GPIO_DOUTTGL7_4_DIO7_M: any = '1'
export const GPIO_DOUTTGL7_4_DIO7_S: any = '1'
/**
Toggle*/
export const GPIO_DOUTTGL7_4_DIO7_TOGGLE: any = '1'

/**
No effect*/
export const GPIO_DOUTTGL7_4_DIO7_NOEFF: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_DOUTTGL7_4_RESERVED17: any = '7'
export const GPIO_DOUTTGL7_4_RESERVED17_M: any = '7'
export const GPIO_DOUTTGL7_4_RESERVED17_S: any = '7'
/**
Toggles bit DOUT31_0.DIO6*/
export const GPIO_DOUTTGL7_4_DIO6: any = '1'
export const GPIO_DOUTTGL7_4_DIO6_M: any = '1'
export const GPIO_DOUTTGL7_4_DIO6_S: any = '1'
/**
Toggle*/
export const GPIO_DOUTTGL7_4_DIO6_TOGGLE: any = '1'

/**
No effect*/
export const GPIO_DOUTTGL7_4_DIO6_NOEFF: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_DOUTTGL7_4_RESERVED9: any = '7'
export const GPIO_DOUTTGL7_4_RESERVED9_M: any = '7'
export const GPIO_DOUTTGL7_4_RESERVED9_S: any = '7'
/**
Toggles bit DOUT31_0.DIO5*/
export const GPIO_DOUTTGL7_4_DIO5: any = '1'
export const GPIO_DOUTTGL7_4_DIO5_M: any = '1'
export const GPIO_DOUTTGL7_4_DIO5_S: any = '1'
/**
Toggle*/
export const GPIO_DOUTTGL7_4_DIO5_TOGGLE: any = '1'

/**
No effect*/
export const GPIO_DOUTTGL7_4_DIO5_NOEFF: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_DOUTTGL7_4_RESERVED1: any = '7'
export const GPIO_DOUTTGL7_4_RESERVED1_M: any = '7'
export const GPIO_DOUTTGL7_4_RESERVED1_S: any = '7'
/**
Toggles bit DOUT31_0.DIO4*/
export const GPIO_DOUTTGL7_4_DIO4: any = '1'
export const GPIO_DOUTTGL7_4_DIO4_M: any = '1'
export const GPIO_DOUTTGL7_4_DIO4_S: any = '1'
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
export const GPIO_DOUTTGL11_8_RESERVED25_M: any = '7'
export const GPIO_DOUTTGL11_8_RESERVED25_S: any = '7'
/**
Toggles bit DOUT31_0.DIO11*/
export const GPIO_DOUTTGL11_8_DIO11: any = '1'
export const GPIO_DOUTTGL11_8_DIO11_M: any = '1'
export const GPIO_DOUTTGL11_8_DIO11_S: any = '1'
/**
Toggle*/
export const GPIO_DOUTTGL11_8_DIO11_TOGGLE: any = '1'

/**
No effect*/
export const GPIO_DOUTTGL11_8_DIO11_NOEFF: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_DOUTTGL11_8_RESERVED17: any = '7'
export const GPIO_DOUTTGL11_8_RESERVED17_M: any = '7'
export const GPIO_DOUTTGL11_8_RESERVED17_S: any = '7'
/**
Toggles bit DOUT31_0.DIO10*/
export const GPIO_DOUTTGL11_8_DIO10: any = '1'
export const GPIO_DOUTTGL11_8_DIO10_M: any = '1'
export const GPIO_DOUTTGL11_8_DIO10_S: any = '1'
/**
Toggle*/
export const GPIO_DOUTTGL11_8_DIO10_TOGGLE: any = '1'

/**
No effect*/
export const GPIO_DOUTTGL11_8_DIO10_NOEFF: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_DOUTTGL11_8_RESERVED9: any = '7'
export const GPIO_DOUTTGL11_8_RESERVED9_M: any = '7'
export const GPIO_DOUTTGL11_8_RESERVED9_S: any = '7'
/**
Toggles bit DOUT31_0.DIO9*/
export const GPIO_DOUTTGL11_8_DIO9: any = '1'
export const GPIO_DOUTTGL11_8_DIO9_M: any = '1'
export const GPIO_DOUTTGL11_8_DIO9_S: any = '1'
/**
Toggle*/
export const GPIO_DOUTTGL11_8_DIO9_TOGGLE: any = '1'

/**
No effect*/
export const GPIO_DOUTTGL11_8_DIO9_NOEFF: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_DOUTTGL11_8_RESERVED1: any = '7'
export const GPIO_DOUTTGL11_8_RESERVED1_M: any = '7'
export const GPIO_DOUTTGL11_8_RESERVED1_S: any = '7'
/**
Toggles bit DOUT31_0.DIO8*/
export const GPIO_DOUTTGL11_8_DIO8: any = '1'
export const GPIO_DOUTTGL11_8_DIO8_M: any = '1'
export const GPIO_DOUTTGL11_8_DIO8_S: any = '1'
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
export const GPIO_DOUTTGL15_12_RESERVED25_M: any = '7'
export const GPIO_DOUTTGL15_12_RESERVED25_S: any = '7'
/**
Toggles bit DOUT31_0.DIO15*/
export const GPIO_DOUTTGL15_12_DIO15: any = '1'
export const GPIO_DOUTTGL15_12_DIO15_M: any = '1'
export const GPIO_DOUTTGL15_12_DIO15_S: any = '1'
/**
Toggle*/
export const GPIO_DOUTTGL15_12_DIO15_TOGGLE: any = '1'

/**
No effect*/
export const GPIO_DOUTTGL15_12_DIO15_NOEFF: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_DOUTTGL15_12_RESERVED17: any = '7'
export const GPIO_DOUTTGL15_12_RESERVED17_M: any = '7'
export const GPIO_DOUTTGL15_12_RESERVED17_S: any = '7'
/**
Toggles bit DOUT31_0.DIO14*/
export const GPIO_DOUTTGL15_12_DIO14: any = '1'
export const GPIO_DOUTTGL15_12_DIO14_M: any = '1'
export const GPIO_DOUTTGL15_12_DIO14_S: any = '1'
/**
Toggle*/
export const GPIO_DOUTTGL15_12_DIO14_TOGGLE: any = '1'

/**
No effect*/
export const GPIO_DOUTTGL15_12_DIO14_NOEFF: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_DOUTTGL15_12_RESERVED9: any = '7'
export const GPIO_DOUTTGL15_12_RESERVED9_M: any = '7'
export const GPIO_DOUTTGL15_12_RESERVED9_S: any = '7'
/**
Toggles bit DOUT31_0.DIO13*/
export const GPIO_DOUTTGL15_12_DIO13: any = '1'
export const GPIO_DOUTTGL15_12_DIO13_M: any = '1'
export const GPIO_DOUTTGL15_12_DIO13_S: any = '1'
/**
Toggle*/
export const GPIO_DOUTTGL15_12_DIO13_TOGGLE: any = '1'

/**
No effect*/
export const GPIO_DOUTTGL15_12_DIO13_NOEFF: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_DOUTTGL15_12_RESERVED1: any = '7'
export const GPIO_DOUTTGL15_12_RESERVED1_M: any = '7'
export const GPIO_DOUTTGL15_12_RESERVED1_S: any = '7'
/**
Toggles bit DOUT31_0.DIO12*/
export const GPIO_DOUTTGL15_12_DIO12: any = '1'
export const GPIO_DOUTTGL15_12_DIO12_M: any = '1'
export const GPIO_DOUTTGL15_12_DIO12_S: any = '1'
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
export const GPIO_DOUTTGL19_16_RESERVED25_M: any = '7'
export const GPIO_DOUTTGL19_16_RESERVED25_S: any = '7'
/**
Toggles bit DOUT31_0.DIO19*/
export const GPIO_DOUTTGL19_16_DIO19: any = '1'
export const GPIO_DOUTTGL19_16_DIO19_M: any = '1'
export const GPIO_DOUTTGL19_16_DIO19_S: any = '1'
/**
Toggle*/
export const GPIO_DOUTTGL19_16_DIO19_TOGGLE: any = '1'

/**
No effect*/
export const GPIO_DOUTTGL19_16_DIO19_NOEFF: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_DOUTTGL19_16_RESERVED17: any = '7'
export const GPIO_DOUTTGL19_16_RESERVED17_M: any = '7'
export const GPIO_DOUTTGL19_16_RESERVED17_S: any = '7'
/**
Toggles bit DOUT31_0.DIO18*/
export const GPIO_DOUTTGL19_16_DIO18: any = '1'
export const GPIO_DOUTTGL19_16_DIO18_M: any = '1'
export const GPIO_DOUTTGL19_16_DIO18_S: any = '1'
/**
Toggle*/
export const GPIO_DOUTTGL19_16_DIO18_TOGGLE: any = '1'

/**
No effect*/
export const GPIO_DOUTTGL19_16_DIO18_NOEFF: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_DOUTTGL19_16_RESERVED9: any = '7'
export const GPIO_DOUTTGL19_16_RESERVED9_M: any = '7'
export const GPIO_DOUTTGL19_16_RESERVED9_S: any = '7'
/**
Toggles bit DOUT31_0.DIO17*/
export const GPIO_DOUTTGL19_16_DIO17: any = '1'
export const GPIO_DOUTTGL19_16_DIO17_M: any = '1'
export const GPIO_DOUTTGL19_16_DIO17_S: any = '1'
/**
Toggle*/
export const GPIO_DOUTTGL19_16_DIO17_TOGGLE: any = '1'

/**
No effect*/
export const GPIO_DOUTTGL19_16_DIO17_NOEFF: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_DOUTTGL19_16_RESERVED1: any = '7'
export const GPIO_DOUTTGL19_16_RESERVED1_M: any = '7'
export const GPIO_DOUTTGL19_16_RESERVED1_S: any = '7'
/**
Toggles bit DOUT31_0.DIO16*/
export const GPIO_DOUTTGL19_16_DIO16: any = '1'
export const GPIO_DOUTTGL19_16_DIO16_M: any = '1'
export const GPIO_DOUTTGL19_16_DIO16_S: any = '1'
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
export const GPIO_DOUTTGL23_20_RESERVED25_M: any = '7'
export const GPIO_DOUTTGL23_20_RESERVED25_S: any = '7'
/**
Toggles bit DOUT31_0.DIO23*/
export const GPIO_DOUTTGL23_20_DIO23: any = '1'
export const GPIO_DOUTTGL23_20_DIO23_M: any = '1'
export const GPIO_DOUTTGL23_20_DIO23_S: any = '1'
/**
Toggle*/
export const GPIO_DOUTTGL23_20_DIO23_TOGGLE: any = '1'

/**
No effect*/
export const GPIO_DOUTTGL23_20_DIO23_NOEFF: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_DOUTTGL23_20_RESERVED17: any = '7'
export const GPIO_DOUTTGL23_20_RESERVED17_M: any = '7'
export const GPIO_DOUTTGL23_20_RESERVED17_S: any = '7'
/**
Toggles bit DOUT31_0.DIO22*/
export const GPIO_DOUTTGL23_20_DIO22: any = '1'
export const GPIO_DOUTTGL23_20_DIO22_M: any = '1'
export const GPIO_DOUTTGL23_20_DIO22_S: any = '1'
/**
Toggle*/
export const GPIO_DOUTTGL23_20_DIO22_TOGGLE: any = '1'

/**
No effect*/
export const GPIO_DOUTTGL23_20_DIO22_NOEFF: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_DOUTTGL23_20_RESERVED9: any = '7'
export const GPIO_DOUTTGL23_20_RESERVED9_M: any = '7'
export const GPIO_DOUTTGL23_20_RESERVED9_S: any = '7'
/**
Toggles bit DOUT31_0.DIO21*/
export const GPIO_DOUTTGL23_20_DIO21: any = '1'
export const GPIO_DOUTTGL23_20_DIO21_M: any = '1'
export const GPIO_DOUTTGL23_20_DIO21_S: any = '1'
/**
Toggle*/
export const GPIO_DOUTTGL23_20_DIO21_TOGGLE: any = '1'

/**
No effect*/
export const GPIO_DOUTTGL23_20_DIO21_NOEFF: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_DOUTTGL23_20_RESERVED1: any = '7'
export const GPIO_DOUTTGL23_20_RESERVED1_M: any = '7'
export const GPIO_DOUTTGL23_20_RESERVED1_S: any = '7'
/**
Toggles bit DOUT31_0.DIO20*/
export const GPIO_DOUTTGL23_20_DIO20: any = '1'
export const GPIO_DOUTTGL23_20_DIO20_M: any = '1'
export const GPIO_DOUTTGL23_20_DIO20_S: any = '1'
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
export const GPIO_DOUTTGL27_24_RESERVED9_M: any = '23'
export const GPIO_DOUTTGL27_24_RESERVED9_S: any = '23'
/**
Toggles bit DOUT31_0.DIO25*/
export const GPIO_DOUTTGL27_24_DIO25: any = '1'
export const GPIO_DOUTTGL27_24_DIO25_M: any = '1'
export const GPIO_DOUTTGL27_24_DIO25_S: any = '1'
/**
Toggle*/
export const GPIO_DOUTTGL27_24_DIO25_TOGGLE: any = '1'

/**
No effect*/
export const GPIO_DOUTTGL27_24_DIO25_NOEFF: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_DOUTTGL27_24_RESERVED1: any = '7'
export const GPIO_DOUTTGL27_24_RESERVED1_M: any = '7'
export const GPIO_DOUTTGL27_24_RESERVED1_S: any = '7'
/**
Toggles bit DOUT31_0.DIO24*/
export const GPIO_DOUTTGL27_24_DIO24: any = '1'
export const GPIO_DOUTTGL27_24_DIO24_M: any = '1'
export const GPIO_DOUTTGL27_24_DIO24_S: any = '1'
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
export const GPIO_DOE3_0_RESERVED25_M: any = '7'
export const GPIO_DOE3_0_RESERVED25_S: any = '7'
/**
Data output enable for DIO3*/
export const GPIO_DOE3_0_DIO3: any = '1'
export const GPIO_DOE3_0_DIO3_M: any = '1'
export const GPIO_DOE3_0_DIO3_S: any = '1'
/**
Output enabled*/
export const GPIO_DOE3_0_DIO3_EN: any = '1'

/**
Output disabled*/
export const GPIO_DOE3_0_DIO3_DIS: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_DOE3_0_RESERVED17: any = '7'
export const GPIO_DOE3_0_RESERVED17_M: any = '7'
export const GPIO_DOE3_0_RESERVED17_S: any = '7'
/**
Data output enable for DIO2*/
export const GPIO_DOE3_0_DIO2: any = '1'
export const GPIO_DOE3_0_DIO2_M: any = '1'
export const GPIO_DOE3_0_DIO2_S: any = '1'
/**
Output enabled*/
export const GPIO_DOE3_0_DIO2_EN: any = '1'

/**
Output disabled*/
export const GPIO_DOE3_0_DIO2_DIS: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_DOE3_0_RESERVED9: any = '7'
export const GPIO_DOE3_0_RESERVED9_M: any = '7'
export const GPIO_DOE3_0_RESERVED9_S: any = '7'
/**
Data output enable for DIO1*/
export const GPIO_DOE3_0_DIO1: any = '1'
export const GPIO_DOE3_0_DIO1_M: any = '1'
export const GPIO_DOE3_0_DIO1_S: any = '1'
/**
Output enabled*/
export const GPIO_DOE3_0_DIO1_EN: any = '1'

/**
Output disabled*/
export const GPIO_DOE3_0_DIO1_DIS: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_DOE3_0_RESERVED1: any = '7'
export const GPIO_DOE3_0_RESERVED1_M: any = '7'
export const GPIO_DOE3_0_RESERVED1_S: any = '7'
/**
Data output enable for DIO0*/
export const GPIO_DOE3_0_DIO0: any = '1'
export const GPIO_DOE3_0_DIO0_M: any = '1'
export const GPIO_DOE3_0_DIO0_S: any = '1'
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
export const GPIO_DOE7_4_RESERVED25_M: any = '7'
export const GPIO_DOE7_4_RESERVED25_S: any = '7'
/**
Data output enable for DIO7*/
export const GPIO_DOE7_4_DIO7: any = '1'
export const GPIO_DOE7_4_DIO7_M: any = '1'
export const GPIO_DOE7_4_DIO7_S: any = '1'
/**
Output enabled*/
export const GPIO_DOE7_4_DIO7_EN: any = '1'

/**
Output disabled*/
export const GPIO_DOE7_4_DIO7_DIS: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_DOE7_4_RESERVED17: any = '7'
export const GPIO_DOE7_4_RESERVED17_M: any = '7'
export const GPIO_DOE7_4_RESERVED17_S: any = '7'
/**
Data output enable for DIO6*/
export const GPIO_DOE7_4_DIO6: any = '1'
export const GPIO_DOE7_4_DIO6_M: any = '1'
export const GPIO_DOE7_4_DIO6_S: any = '1'
/**
Output enabled*/
export const GPIO_DOE7_4_DIO6_EN: any = '1'

/**
Output disabled*/
export const GPIO_DOE7_4_DIO6_DIS: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_DOE7_4_RESERVED9: any = '7'
export const GPIO_DOE7_4_RESERVED9_M: any = '7'
export const GPIO_DOE7_4_RESERVED9_S: any = '7'
/**
Data output enable for DIO5*/
export const GPIO_DOE7_4_DIO5: any = '1'
export const GPIO_DOE7_4_DIO5_M: any = '1'
export const GPIO_DOE7_4_DIO5_S: any = '1'
/**
Output enabled*/
export const GPIO_DOE7_4_DIO5_EN: any = '1'

/**
Output disabled*/
export const GPIO_DOE7_4_DIO5_DIS: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_DOE7_4_RESERVED1: any = '7'
export const GPIO_DOE7_4_RESERVED1_M: any = '7'
export const GPIO_DOE7_4_RESERVED1_S: any = '7'
/**
Data output enable for DIO4*/
export const GPIO_DOE7_4_DIO4: any = '1'
export const GPIO_DOE7_4_DIO4_M: any = '1'
export const GPIO_DOE7_4_DIO4_S: any = '1'
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
export const GPIO_DOE11_8_RESERVED25_M: any = '7'
export const GPIO_DOE11_8_RESERVED25_S: any = '7'
/**
Data output enable for DIO11*/
export const GPIO_DOE11_8_DIO11: any = '1'
export const GPIO_DOE11_8_DIO11_M: any = '1'
export const GPIO_DOE11_8_DIO11_S: any = '1'
/**
Output enabled*/
export const GPIO_DOE11_8_DIO11_EN: any = '1'

/**
Output disabled*/
export const GPIO_DOE11_8_DIO11_DIS: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_DOE11_8_RESERVED17: any = '7'
export const GPIO_DOE11_8_RESERVED17_M: any = '7'
export const GPIO_DOE11_8_RESERVED17_S: any = '7'
/**
Data output enable for DIO10*/
export const GPIO_DOE11_8_DIO10: any = '1'
export const GPIO_DOE11_8_DIO10_M: any = '1'
export const GPIO_DOE11_8_DIO10_S: any = '1'
/**
Output enabled*/
export const GPIO_DOE11_8_DIO10_EN: any = '1'

/**
Output disabled*/
export const GPIO_DOE11_8_DIO10_DIS: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_DOE11_8_RESERVED9: any = '7'
export const GPIO_DOE11_8_RESERVED9_M: any = '7'
export const GPIO_DOE11_8_RESERVED9_S: any = '7'
/**
Data output enable for DIO9*/
export const GPIO_DOE11_8_DIO9: any = '1'
export const GPIO_DOE11_8_DIO9_M: any = '1'
export const GPIO_DOE11_8_DIO9_S: any = '1'
/**
Output enabled*/
export const GPIO_DOE11_8_DIO9_EN: any = '1'

/**
Output disabled*/
export const GPIO_DOE11_8_DIO9_DIS: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_DOE11_8_RESERVED1: any = '7'
export const GPIO_DOE11_8_RESERVED1_M: any = '7'
export const GPIO_DOE11_8_RESERVED1_S: any = '7'
/**
Data output enable for DIO8*/
export const GPIO_DOE11_8_DIO8: any = '1'
export const GPIO_DOE11_8_DIO8_M: any = '1'
export const GPIO_DOE11_8_DIO8_S: any = '1'
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
export const GPIO_DOE15_12_RESERVED25_M: any = '7'
export const GPIO_DOE15_12_RESERVED25_S: any = '7'
/**
Data output enable for DIO15*/
export const GPIO_DOE15_12_DIO15: any = '1'
export const GPIO_DOE15_12_DIO15_M: any = '1'
export const GPIO_DOE15_12_DIO15_S: any = '1'
/**
Output enabled*/
export const GPIO_DOE15_12_DIO15_EN: any = '1'

/**
Output disabled*/
export const GPIO_DOE15_12_DIO15_DIS: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_DOE15_12_RESERVED17: any = '7'
export const GPIO_DOE15_12_RESERVED17_M: any = '7'
export const GPIO_DOE15_12_RESERVED17_S: any = '7'
/**
Data output enable for DIO14*/
export const GPIO_DOE15_12_DIO14: any = '1'
export const GPIO_DOE15_12_DIO14_M: any = '1'
export const GPIO_DOE15_12_DIO14_S: any = '1'
/**
Output enabled*/
export const GPIO_DOE15_12_DIO14_EN: any = '1'

/**
Output disabled*/
export const GPIO_DOE15_12_DIO14_DIS: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_DOE15_12_RESERVED9: any = '7'
export const GPIO_DOE15_12_RESERVED9_M: any = '7'
export const GPIO_DOE15_12_RESERVED9_S: any = '7'
/**
Data output enable for DIO13*/
export const GPIO_DOE15_12_DIO13: any = '1'
export const GPIO_DOE15_12_DIO13_M: any = '1'
export const GPIO_DOE15_12_DIO13_S: any = '1'
/**
Output enabled*/
export const GPIO_DOE15_12_DIO13_EN: any = '1'

/**
Output disabled*/
export const GPIO_DOE15_12_DIO13_DIS: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_DOE15_12_RESERVED1: any = '7'
export const GPIO_DOE15_12_RESERVED1_M: any = '7'
export const GPIO_DOE15_12_RESERVED1_S: any = '7'
/**
Data output enable for DIO12*/
export const GPIO_DOE15_12_DIO12: any = '1'
export const GPIO_DOE15_12_DIO12_M: any = '1'
export const GPIO_DOE15_12_DIO12_S: any = '1'
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
export const GPIO_DOE19_16_RESERVED25_M: any = '7'
export const GPIO_DOE19_16_RESERVED25_S: any = '7'
/**
Data output enable for DIO19*/
export const GPIO_DOE19_16_DIO19: any = '1'
export const GPIO_DOE19_16_DIO19_M: any = '1'
export const GPIO_DOE19_16_DIO19_S: any = '1'
/**
Output enabled*/
export const GPIO_DOE19_16_DIO19_EN: any = '1'

/**
Output disabled*/
export const GPIO_DOE19_16_DIO19_DIS: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_DOE19_16_RESERVED17: any = '7'
export const GPIO_DOE19_16_RESERVED17_M: any = '7'
export const GPIO_DOE19_16_RESERVED17_S: any = '7'
/**
Data output enable for DIO18*/
export const GPIO_DOE19_16_DIO18: any = '1'
export const GPIO_DOE19_16_DIO18_M: any = '1'
export const GPIO_DOE19_16_DIO18_S: any = '1'
/**
Output enabled*/
export const GPIO_DOE19_16_DIO18_EN: any = '1'

/**
Output disabled*/
export const GPIO_DOE19_16_DIO18_DIS: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_DOE19_16_RESERVED9: any = '7'
export const GPIO_DOE19_16_RESERVED9_M: any = '7'
export const GPIO_DOE19_16_RESERVED9_S: any = '7'
/**
Data output enable for DIO17*/
export const GPIO_DOE19_16_DIO17: any = '1'
export const GPIO_DOE19_16_DIO17_M: any = '1'
export const GPIO_DOE19_16_DIO17_S: any = '1'
/**
Output enabled*/
export const GPIO_DOE19_16_DIO17_EN: any = '1'

/**
Output disabled*/
export const GPIO_DOE19_16_DIO17_DIS: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_DOE19_16_RESERVED1: any = '7'
export const GPIO_DOE19_16_RESERVED1_M: any = '7'
export const GPIO_DOE19_16_RESERVED1_S: any = '7'
/**
Data output enable for DIO16*/
export const GPIO_DOE19_16_DIO16: any = '1'
export const GPIO_DOE19_16_DIO16_M: any = '1'
export const GPIO_DOE19_16_DIO16_S: any = '1'
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
export const GPIO_DOE23_20_RESERVED25_M: any = '7'
export const GPIO_DOE23_20_RESERVED25_S: any = '7'
/**
Data output enable for DIO23*/
export const GPIO_DOE23_20_DIO23: any = '1'
export const GPIO_DOE23_20_DIO23_M: any = '1'
export const GPIO_DOE23_20_DIO23_S: any = '1'
/**
Output enabled*/
export const GPIO_DOE23_20_DIO23_EN: any = '1'

/**
Output disabled*/
export const GPIO_DOE23_20_DIO23_DIS: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_DOE23_20_RESERVED17: any = '7'
export const GPIO_DOE23_20_RESERVED17_M: any = '7'
export const GPIO_DOE23_20_RESERVED17_S: any = '7'
/**
Data output enable for DIO22*/
export const GPIO_DOE23_20_DIO22: any = '1'
export const GPIO_DOE23_20_DIO22_M: any = '1'
export const GPIO_DOE23_20_DIO22_S: any = '1'
/**
Output enabled*/
export const GPIO_DOE23_20_DIO22_EN: any = '1'

/**
Output disabled*/
export const GPIO_DOE23_20_DIO22_DIS: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_DOE23_20_RESERVED9: any = '7'
export const GPIO_DOE23_20_RESERVED9_M: any = '7'
export const GPIO_DOE23_20_RESERVED9_S: any = '7'
/**
Data output enable for DIO21*/
export const GPIO_DOE23_20_DIO21: any = '1'
export const GPIO_DOE23_20_DIO21_M: any = '1'
export const GPIO_DOE23_20_DIO21_S: any = '1'
/**
Output enabled*/
export const GPIO_DOE23_20_DIO21_EN: any = '1'

/**
Output disabled*/
export const GPIO_DOE23_20_DIO21_DIS: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_DOE23_20_RESERVED1: any = '7'
export const GPIO_DOE23_20_RESERVED1_M: any = '7'
export const GPIO_DOE23_20_RESERVED1_S: any = '7'
/**
Data output enable for DIO20*/
export const GPIO_DOE23_20_DIO20: any = '1'
export const GPIO_DOE23_20_DIO20_M: any = '1'
export const GPIO_DOE23_20_DIO20_S: any = '1'
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
export const GPIO_DOE27_24_RESERVED9_M: any = '23'
export const GPIO_DOE27_24_RESERVED9_S: any = '23'
/**
Data output enable for DIO25*/
export const GPIO_DOE27_24_DIO25: any = '1'
export const GPIO_DOE27_24_DIO25_M: any = '1'
export const GPIO_DOE27_24_DIO25_S: any = '1'
/**
Output enabled*/
export const GPIO_DOE27_24_DIO25_EN: any = '1'

/**
Output disabled*/
export const GPIO_DOE27_24_DIO25_DIS: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_DOE27_24_RESERVED1: any = '7'
export const GPIO_DOE27_24_RESERVED1_M: any = '7'
export const GPIO_DOE27_24_RESERVED1_S: any = '7'
/**
Data output enable for DIO24*/
export const GPIO_DOE27_24_DIO24: any = '1'
export const GPIO_DOE27_24_DIO24_M: any = '1'
export const GPIO_DOE27_24_DIO24_S: any = '1'
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
export const GPIO_DOE31_0_RESERVED26_M: any = '6'
export const GPIO_DOE31_0_RESERVED26_S: any = '6'
/**
Data output enable for DIO25*/
export const GPIO_DOE31_0_DIO25: any = '1'
export const GPIO_DOE31_0_DIO25_M: any = '1'
export const GPIO_DOE31_0_DIO25_S: any = '1'
/**
Output enabled*/
export const GPIO_DOE31_0_DIO25_EN: any = '1'

/**
Output disabled*/
export const GPIO_DOE31_0_DIO25_DIS: any = '0'

/**
Data output enable for DIO24*/
export const GPIO_DOE31_0_DIO24: any = '1'
export const GPIO_DOE31_0_DIO24_M: any = '1'
export const GPIO_DOE31_0_DIO24_S: any = '1'
/**
Output enabled*/
export const GPIO_DOE31_0_DIO24_EN: any = '1'

/**
Output disabled*/
export const GPIO_DOE31_0_DIO24_DIS: any = '0'

/**
Data output enable for DIO23*/
export const GPIO_DOE31_0_DIO23: any = '1'
export const GPIO_DOE31_0_DIO23_M: any = '1'
export const GPIO_DOE31_0_DIO23_S: any = '1'
/**
Output enabled*/
export const GPIO_DOE31_0_DIO23_EN: any = '1'

/**
Output disabled*/
export const GPIO_DOE31_0_DIO23_DIS: any = '0'

/**
Data output enable for DIO22*/
export const GPIO_DOE31_0_DIO22: any = '1'
export const GPIO_DOE31_0_DIO22_M: any = '1'
export const GPIO_DOE31_0_DIO22_S: any = '1'
/**
Output enabled*/
export const GPIO_DOE31_0_DIO22_EN: any = '1'

/**
Output disabled*/
export const GPIO_DOE31_0_DIO22_DIS: any = '0'

/**
Data output enable for DIO21*/
export const GPIO_DOE31_0_DIO21: any = '1'
export const GPIO_DOE31_0_DIO21_M: any = '1'
export const GPIO_DOE31_0_DIO21_S: any = '1'
/**
Output enabled*/
export const GPIO_DOE31_0_DIO21_EN: any = '1'

/**
Output disabled*/
export const GPIO_DOE31_0_DIO21_DIS: any = '0'

/**
Data output enable for DIO20*/
export const GPIO_DOE31_0_DIO20: any = '1'
export const GPIO_DOE31_0_DIO20_M: any = '1'
export const GPIO_DOE31_0_DIO20_S: any = '1'
/**
Output enabled*/
export const GPIO_DOE31_0_DIO20_EN: any = '1'

/**
Output disabled*/
export const GPIO_DOE31_0_DIO20_DIS: any = '0'

/**
Data output enable for DIO19*/
export const GPIO_DOE31_0_DIO19: any = '1'
export const GPIO_DOE31_0_DIO19_M: any = '1'
export const GPIO_DOE31_0_DIO19_S: any = '1'
/**
Output enabled*/
export const GPIO_DOE31_0_DIO19_EN: any = '1'

/**
Output disabled*/
export const GPIO_DOE31_0_DIO19_DIS: any = '0'

/**
Data output enable for DIO18*/
export const GPIO_DOE31_0_DIO18: any = '1'
export const GPIO_DOE31_0_DIO18_M: any = '1'
export const GPIO_DOE31_0_DIO18_S: any = '1'
/**
Output enabled*/
export const GPIO_DOE31_0_DIO18_EN: any = '1'

/**
Output disabled*/
export const GPIO_DOE31_0_DIO18_DIS: any = '0'

/**
Data output enable for DIO17*/
export const GPIO_DOE31_0_DIO17: any = '1'
export const GPIO_DOE31_0_DIO17_M: any = '1'
export const GPIO_DOE31_0_DIO17_S: any = '1'
/**
Output enabled*/
export const GPIO_DOE31_0_DIO17_EN: any = '1'

/**
Output disabled*/
export const GPIO_DOE31_0_DIO17_DIS: any = '0'

/**
Data output enable for DIO16*/
export const GPIO_DOE31_0_DIO16: any = '1'
export const GPIO_DOE31_0_DIO16_M: any = '1'
export const GPIO_DOE31_0_DIO16_S: any = '1'
/**
Output enabled*/
export const GPIO_DOE31_0_DIO16_EN: any = '1'

/**
Output disabled*/
export const GPIO_DOE31_0_DIO16_DIS: any = '0'

/**
Data output enable for DIO15*/
export const GPIO_DOE31_0_DIO15: any = '1'
export const GPIO_DOE31_0_DIO15_M: any = '1'
export const GPIO_DOE31_0_DIO15_S: any = '1'
/**
Output enabled*/
export const GPIO_DOE31_0_DIO15_EN: any = '1'

/**
Output disabled*/
export const GPIO_DOE31_0_DIO15_DIS: any = '0'

/**
Data output enable for DIO14*/
export const GPIO_DOE31_0_DIO14: any = '1'
export const GPIO_DOE31_0_DIO14_M: any = '1'
export const GPIO_DOE31_0_DIO14_S: any = '1'
/**
Output enabled*/
export const GPIO_DOE31_0_DIO14_EN: any = '1'

/**
Output disabled*/
export const GPIO_DOE31_0_DIO14_DIS: any = '0'

/**
Data output enable for DIO13*/
export const GPIO_DOE31_0_DIO13: any = '1'
export const GPIO_DOE31_0_DIO13_M: any = '1'
export const GPIO_DOE31_0_DIO13_S: any = '1'
/**
Output enabled*/
export const GPIO_DOE31_0_DIO13_EN: any = '1'

/**
Output disabled*/
export const GPIO_DOE31_0_DIO13_DIS: any = '0'

/**
Data output enable for DIO12*/
export const GPIO_DOE31_0_DIO12: any = '1'
export const GPIO_DOE31_0_DIO12_M: any = '1'
export const GPIO_DOE31_0_DIO12_S: any = '1'
/**
Output enabled*/
export const GPIO_DOE31_0_DIO12_EN: any = '1'

/**
Output disabled*/
export const GPIO_DOE31_0_DIO12_DIS: any = '0'

/**
Data output enable for DIO11*/
export const GPIO_DOE31_0_DIO11: any = '1'
export const GPIO_DOE31_0_DIO11_M: any = '1'
export const GPIO_DOE31_0_DIO11_S: any = '1'
/**
Output enabled*/
export const GPIO_DOE31_0_DIO11_EN: any = '1'

/**
Output disabled*/
export const GPIO_DOE31_0_DIO11_DIS: any = '0'

/**
Data output enable for DIO10*/
export const GPIO_DOE31_0_DIO10: any = '1'
export const GPIO_DOE31_0_DIO10_M: any = '1'
export const GPIO_DOE31_0_DIO10_S: any = '1'
/**
Output enabled*/
export const GPIO_DOE31_0_DIO10_EN: any = '1'

/**
Output disabled*/
export const GPIO_DOE31_0_DIO10_DIS: any = '0'

/**
Data output enable for DIO9*/
export const GPIO_DOE31_0_DIO9: any = '1'
export const GPIO_DOE31_0_DIO9_M: any = '1'
export const GPIO_DOE31_0_DIO9_S: any = '1'
/**
Output enabled*/
export const GPIO_DOE31_0_DIO9_EN: any = '1'

/**
Output disabled*/
export const GPIO_DOE31_0_DIO9_DIS: any = '0'

/**
Data output enable for DIO8*/
export const GPIO_DOE31_0_DIO8: any = '1'
export const GPIO_DOE31_0_DIO8_M: any = '1'
export const GPIO_DOE31_0_DIO8_S: any = '1'
/**
Output enabled*/
export const GPIO_DOE31_0_DIO8_EN: any = '1'

/**
Output disabled*/
export const GPIO_DOE31_0_DIO8_DIS: any = '0'

/**
Data output enable for DIO7*/
export const GPIO_DOE31_0_DIO7: any = '1'
export const GPIO_DOE31_0_DIO7_M: any = '1'
export const GPIO_DOE31_0_DIO7_S: any = '1'
/**
Output enabled*/
export const GPIO_DOE31_0_DIO7_EN: any = '1'

/**
Output disabled*/
export const GPIO_DOE31_0_DIO7_DIS: any = '0'

/**
Data output enable for DIO6*/
export const GPIO_DOE31_0_DIO6: any = '1'
export const GPIO_DOE31_0_DIO6_M: any = '1'
export const GPIO_DOE31_0_DIO6_S: any = '1'
/**
Output enabled*/
export const GPIO_DOE31_0_DIO6_EN: any = '1'

/**
Output disabled*/
export const GPIO_DOE31_0_DIO6_DIS: any = '0'

/**
Data output enable for DIO5*/
export const GPIO_DOE31_0_DIO5: any = '1'
export const GPIO_DOE31_0_DIO5_M: any = '1'
export const GPIO_DOE31_0_DIO5_S: any = '1'
/**
Output enabled*/
export const GPIO_DOE31_0_DIO5_EN: any = '1'

/**
Output disabled*/
export const GPIO_DOE31_0_DIO5_DIS: any = '0'

/**
Data output enable for DIO4*/
export const GPIO_DOE31_0_DIO4: any = '1'
export const GPIO_DOE31_0_DIO4_M: any = '1'
export const GPIO_DOE31_0_DIO4_S: any = '1'
/**
Output enabled*/
export const GPIO_DOE31_0_DIO4_EN: any = '1'

/**
Output disabled*/
export const GPIO_DOE31_0_DIO4_DIS: any = '0'

/**
Data output enable for DIO3*/
export const GPIO_DOE31_0_DIO3: any = '1'
export const GPIO_DOE31_0_DIO3_M: any = '1'
export const GPIO_DOE31_0_DIO3_S: any = '1'
/**
Output enabled*/
export const GPIO_DOE31_0_DIO3_EN: any = '1'

/**
Output disabled*/
export const GPIO_DOE31_0_DIO3_DIS: any = '0'

/**
Data output enable for DIO2*/
export const GPIO_DOE31_0_DIO2: any = '1'
export const GPIO_DOE31_0_DIO2_M: any = '1'
export const GPIO_DOE31_0_DIO2_S: any = '1'
/**
Output enabled*/
export const GPIO_DOE31_0_DIO2_EN: any = '1'

/**
Output disabled*/
export const GPIO_DOE31_0_DIO2_DIS: any = '0'

/**
Data output enable for DIO1*/
export const GPIO_DOE31_0_DIO1: any = '1'
export const GPIO_DOE31_0_DIO1_M: any = '1'
export const GPIO_DOE31_0_DIO1_S: any = '1'
/**
Output enabled*/
export const GPIO_DOE31_0_DIO1_EN: any = '1'

/**
Output disabled*/
export const GPIO_DOE31_0_DIO1_DIS: any = '0'

/**
Data output enable for DIO0*/
export const GPIO_DOE31_0_DIO0: any = '1'
export const GPIO_DOE31_0_DIO0_M: any = '1'
export const GPIO_DOE31_0_DIO0_S: any = '1'
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
export const GPIO_DOESET31_0_RESERVED26_M: any = '6'
export const GPIO_DOESET31_0_RESERVED26_S: any = '6'
/**
Sets bit DOE31_0.DIO25*/
export const GPIO_DOESET31_0_DIO25: any = '1'
export const GPIO_DOESET31_0_DIO25_M: any = '1'
export const GPIO_DOESET31_0_DIO25_S: any = '1'
/**
Set*/
export const GPIO_DOESET31_0_DIO25_SET: any = '1'

/**
No effect*/
export const GPIO_DOESET31_0_DIO25_NOEFF: any = '0'

/**
Sets bit DOE31_0.DIO24*/
export const GPIO_DOESET31_0_DIO24: any = '1'
export const GPIO_DOESET31_0_DIO24_M: any = '1'
export const GPIO_DOESET31_0_DIO24_S: any = '1'
/**
Set*/
export const GPIO_DOESET31_0_DIO24_SET: any = '1'

/**
No effect*/
export const GPIO_DOESET31_0_DIO24_NOEFF: any = '0'

/**
Sets bit DOE31_0.DIO23*/
export const GPIO_DOESET31_0_DIO23: any = '1'
export const GPIO_DOESET31_0_DIO23_M: any = '1'
export const GPIO_DOESET31_0_DIO23_S: any = '1'
/**
Set*/
export const GPIO_DOESET31_0_DIO23_SET: any = '1'

/**
No effect*/
export const GPIO_DOESET31_0_DIO23_NOEFF: any = '0'

/**
Sets bit DOE31_0.DIO22*/
export const GPIO_DOESET31_0_DIO22: any = '1'
export const GPIO_DOESET31_0_DIO22_M: any = '1'
export const GPIO_DOESET31_0_DIO22_S: any = '1'
/**
Set*/
export const GPIO_DOESET31_0_DIO22_SET: any = '1'

/**
No effect*/
export const GPIO_DOESET31_0_DIO22_NOEFF: any = '0'

/**
Sets bit DOE31_0.DIO21 */
export const GPIO_DOESET31_0_DIO21: any = '1'
export const GPIO_DOESET31_0_DIO21_M: any = '1'
export const GPIO_DOESET31_0_DIO21_S: any = '1'
/**
Set*/
export const GPIO_DOESET31_0_DIO21_SET: any = '1'

/**
No effect*/
export const GPIO_DOESET31_0_DIO21_NOEFF: any = '0'

/**
Sets bit DOE31_0.DIO20 */
export const GPIO_DOESET31_0_DIO20: any = '1'
export const GPIO_DOESET31_0_DIO20_M: any = '1'
export const GPIO_DOESET31_0_DIO20_S: any = '1'
/**
Set*/
export const GPIO_DOESET31_0_DIO20_SET: any = '1'

/**
No effect*/
export const GPIO_DOESET31_0_DIO20_NOEFF: any = '0'

/**
Sets bit DOE31_0.DIO19 */
export const GPIO_DOESET31_0_DIO19: any = '1'
export const GPIO_DOESET31_0_DIO19_M: any = '1'
export const GPIO_DOESET31_0_DIO19_S: any = '1'
/**
Set*/
export const GPIO_DOESET31_0_DIO19_SET: any = '1'

/**
No effect*/
export const GPIO_DOESET31_0_DIO19_NOEFF: any = '0'

/**
Sets bit DOE31_0.DIO18 */
export const GPIO_DOESET31_0_DIO18: any = '1'
export const GPIO_DOESET31_0_DIO18_M: any = '1'
export const GPIO_DOESET31_0_DIO18_S: any = '1'
/**
Set*/
export const GPIO_DOESET31_0_DIO18_SET: any = '1'

/**
No effect*/
export const GPIO_DOESET31_0_DIO18_NOEFF: any = '0'

/**
Sets bit DOE31_0.DIO17 */
export const GPIO_DOESET31_0_DIO17: any = '1'
export const GPIO_DOESET31_0_DIO17_M: any = '1'
export const GPIO_DOESET31_0_DIO17_S: any = '1'
/**
Set*/
export const GPIO_DOESET31_0_DIO17_SET: any = '1'

/**
No effect*/
export const GPIO_DOESET31_0_DIO17_NOEFF: any = '0'

/**
Sets bit DOE31_0.DIO16 */
export const GPIO_DOESET31_0_DIO16: any = '1'
export const GPIO_DOESET31_0_DIO16_M: any = '1'
export const GPIO_DOESET31_0_DIO16_S: any = '1'
/**
Set*/
export const GPIO_DOESET31_0_DIO16_SET: any = '1'

/**
No effect*/
export const GPIO_DOESET31_0_DIO16_NOEFF: any = '0'

/**
Sets bit DOE31_0.DIO15 */
export const GPIO_DOESET31_0_DIO15: any = '1'
export const GPIO_DOESET31_0_DIO15_M: any = '1'
export const GPIO_DOESET31_0_DIO15_S: any = '1'
/**
Set*/
export const GPIO_DOESET31_0_DIO15_SET: any = '1'

/**
No effect*/
export const GPIO_DOESET31_0_DIO15_NOEFF: any = '0'

/**
Sets bit DOE31_0.DIO14 */
export const GPIO_DOESET31_0_DIO14: any = '1'
export const GPIO_DOESET31_0_DIO14_M: any = '1'
export const GPIO_DOESET31_0_DIO14_S: any = '1'
/**
Set*/
export const GPIO_DOESET31_0_DIO14_SET: any = '1'

/**
No effect*/
export const GPIO_DOESET31_0_DIO14_NOEFF: any = '0'

/**
Sets bit DOE31_0.DIO13 */
export const GPIO_DOESET31_0_DIO13: any = '1'
export const GPIO_DOESET31_0_DIO13_M: any = '1'
export const GPIO_DOESET31_0_DIO13_S: any = '1'
/**
Set*/
export const GPIO_DOESET31_0_DIO13_SET: any = '1'

/**
No effect*/
export const GPIO_DOESET31_0_DIO13_NOEFF: any = '0'

/**
Sets bit DOE31_0.DIO12 */
export const GPIO_DOESET31_0_DIO12: any = '1'
export const GPIO_DOESET31_0_DIO12_M: any = '1'
export const GPIO_DOESET31_0_DIO12_S: any = '1'
/**
Set*/
export const GPIO_DOESET31_0_DIO12_SET: any = '1'

/**
No effect*/
export const GPIO_DOESET31_0_DIO12_NOEFF: any = '0'

/**
Sets bit DOE31_0.DIO11 */
export const GPIO_DOESET31_0_DIO11: any = '1'
export const GPIO_DOESET31_0_DIO11_M: any = '1'
export const GPIO_DOESET31_0_DIO11_S: any = '1'
/**
Set*/
export const GPIO_DOESET31_0_DIO11_SET: any = '1'

/**
No effect*/
export const GPIO_DOESET31_0_DIO11_NOEFF: any = '0'

/**
Sets bit DOE31_0.DIO10 */
export const GPIO_DOESET31_0_DIO10: any = '1'
export const GPIO_DOESET31_0_DIO10_M: any = '1'
export const GPIO_DOESET31_0_DIO10_S: any = '1'
/**
Set*/
export const GPIO_DOESET31_0_DIO10_SET: any = '1'

/**
No effect*/
export const GPIO_DOESET31_0_DIO10_NOEFF: any = '0'

/**
Sets bit DOE31_0.DIO9 */
export const GPIO_DOESET31_0_DIO9: any = '1'
export const GPIO_DOESET31_0_DIO9_M: any = '1'
export const GPIO_DOESET31_0_DIO9_S: any = '1'
/**
Set*/
export const GPIO_DOESET31_0_DIO9_SET: any = '1'

/**
No effect*/
export const GPIO_DOESET31_0_DIO9_NOEFF: any = '0'

/**
Sets bit DOE31_0.DIO8*/
export const GPIO_DOESET31_0_DIO8: any = '1'
export const GPIO_DOESET31_0_DIO8_M: any = '1'
export const GPIO_DOESET31_0_DIO8_S: any = '1'
/**
Set*/
export const GPIO_DOESET31_0_DIO8_SET: any = '1'

/**
No effect*/
export const GPIO_DOESET31_0_DIO8_NOEFF: any = '0'

/**
Sets bit DOE31_0.DIO7 */
export const GPIO_DOESET31_0_DIO7: any = '1'
export const GPIO_DOESET31_0_DIO7_M: any = '1'
export const GPIO_DOESET31_0_DIO7_S: any = '1'
/**
Set*/
export const GPIO_DOESET31_0_DIO7_SET: any = '1'

/**
No effect*/
export const GPIO_DOESET31_0_DIO7_NOEFF: any = '0'

/**
Sets bit DOE31_0.DIO6 */
export const GPIO_DOESET31_0_DIO6: any = '1'
export const GPIO_DOESET31_0_DIO6_M: any = '1'
export const GPIO_DOESET31_0_DIO6_S: any = '1'
/**
Set*/
export const GPIO_DOESET31_0_DIO6_SET: any = '1'

/**
No effect*/
export const GPIO_DOESET31_0_DIO6_NOEFF: any = '0'

/**
Sets bit DOE31_0.DIO5 */
export const GPIO_DOESET31_0_DIO5: any = '1'
export const GPIO_DOESET31_0_DIO5_M: any = '1'
export const GPIO_DOESET31_0_DIO5_S: any = '1'
/**
Set*/
export const GPIO_DOESET31_0_DIO5_SET: any = '1'

/**
No effect*/
export const GPIO_DOESET31_0_DIO5_NOEFF: any = '0'

/**
Sets bit DOE31_0.DIO4 */
export const GPIO_DOESET31_0_DIO4: any = '1'
export const GPIO_DOESET31_0_DIO4_M: any = '1'
export const GPIO_DOESET31_0_DIO4_S: any = '1'
/**
Set*/
export const GPIO_DOESET31_0_DIO4_SET: any = '1'

/**
No effect*/
export const GPIO_DOESET31_0_DIO4_NOEFF: any = '0'

/**
Sets bit DOE31_0.DIO3 */
export const GPIO_DOESET31_0_DIO3: any = '1'
export const GPIO_DOESET31_0_DIO3_M: any = '1'
export const GPIO_DOESET31_0_DIO3_S: any = '1'
/**
Set*/
export const GPIO_DOESET31_0_DIO3_SET: any = '1'

/**
No effect*/
export const GPIO_DOESET31_0_DIO3_NOEFF: any = '0'

/**
Sets bit DOE31_0.DIO2 */
export const GPIO_DOESET31_0_DIO2: any = '1'
export const GPIO_DOESET31_0_DIO2_M: any = '1'
export const GPIO_DOESET31_0_DIO2_S: any = '1'
/**
Set*/
export const GPIO_DOESET31_0_DIO2_SET: any = '1'

/**
No effect*/
export const GPIO_DOESET31_0_DIO2_NOEFF: any = '0'

/**
Sets bit DOE31_0.DIO1 */
export const GPIO_DOESET31_0_DIO1: any = '1'
export const GPIO_DOESET31_0_DIO1_M: any = '1'
export const GPIO_DOESET31_0_DIO1_S: any = '1'
/**
Set*/
export const GPIO_DOESET31_0_DIO1_SET: any = '1'

/**
No effect*/
export const GPIO_DOESET31_0_DIO1_NOEFF: any = '0'

/**
Sets bit DOE31_0.DIO0 */
export const GPIO_DOESET31_0_DIO0: any = '1'
export const GPIO_DOESET31_0_DIO0_M: any = '1'
export const GPIO_DOESET31_0_DIO0_S: any = '1'
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
export const GPIO_DOECLR31_0_RESERVED26_M: any = '6'
export const GPIO_DOECLR31_0_RESERVED26_S: any = '6'
/**
Clears bit DOE31_0.DIO25*/
export const GPIO_DOECLR31_0_DIO25: any = '1'
export const GPIO_DOECLR31_0_DIO25_M: any = '1'
export const GPIO_DOECLR31_0_DIO25_S: any = '1'
/**
Clear*/
export const GPIO_DOECLR31_0_DIO25_CLR: any = '1'

/**
No effect*/
export const GPIO_DOECLR31_0_DIO25_NOEFF: any = '0'

/**
Clears bit DOE31_0.DIO24*/
export const GPIO_DOECLR31_0_DIO24: any = '1'
export const GPIO_DOECLR31_0_DIO24_M: any = '1'
export const GPIO_DOECLR31_0_DIO24_S: any = '1'
/**
Clear*/
export const GPIO_DOECLR31_0_DIO24_CLR: any = '1'

/**
No effect*/
export const GPIO_DOECLR31_0_DIO24_NOEFF: any = '0'

/**
Clears bit DOE31_0.DIO23*/
export const GPIO_DOECLR31_0_DIO23: any = '1'
export const GPIO_DOECLR31_0_DIO23_M: any = '1'
export const GPIO_DOECLR31_0_DIO23_S: any = '1'
/**
Clear*/
export const GPIO_DOECLR31_0_DIO23_CLR: any = '1'

/**
No effect*/
export const GPIO_DOECLR31_0_DIO23_NOEFF: any = '0'

/**
Clears bit DOE31_0.DIO22*/
export const GPIO_DOECLR31_0_DIO22: any = '1'
export const GPIO_DOECLR31_0_DIO22_M: any = '1'
export const GPIO_DOECLR31_0_DIO22_S: any = '1'
/**
Clear*/
export const GPIO_DOECLR31_0_DIO22_CLR: any = '1'

/**
No effect*/
export const GPIO_DOECLR31_0_DIO22_NOEFF: any = '0'

/**
Clears bit DOE31_0.DIO21*/
export const GPIO_DOECLR31_0_DIO21: any = '1'
export const GPIO_DOECLR31_0_DIO21_M: any = '1'
export const GPIO_DOECLR31_0_DIO21_S: any = '1'
/**
Clear*/
export const GPIO_DOECLR31_0_DIO21_CLR: any = '1'

/**
No effect*/
export const GPIO_DOECLR31_0_DIO21_NOEFF: any = '0'

/**
Clears bit DOE31_0.DIO20*/
export const GPIO_DOECLR31_0_DIO20: any = '1'
export const GPIO_DOECLR31_0_DIO20_M: any = '1'
export const GPIO_DOECLR31_0_DIO20_S: any = '1'
/**
Clear*/
export const GPIO_DOECLR31_0_DIO20_CLR: any = '1'

/**
No effect*/
export const GPIO_DOECLR31_0_DIO20_NOEFF: any = '0'

/**
Clears bit DOE31_0.DIO19*/
export const GPIO_DOECLR31_0_DIO19: any = '1'
export const GPIO_DOECLR31_0_DIO19_M: any = '1'
export const GPIO_DOECLR31_0_DIO19_S: any = '1'
/**
Clear*/
export const GPIO_DOECLR31_0_DIO19_CLR: any = '1'

/**
No effect*/
export const GPIO_DOECLR31_0_DIO19_NOEFF: any = '0'

/**
Clears bit DOE31_0.DIO18*/
export const GPIO_DOECLR31_0_DIO18: any = '1'
export const GPIO_DOECLR31_0_DIO18_M: any = '1'
export const GPIO_DOECLR31_0_DIO18_S: any = '1'
/**
Clear*/
export const GPIO_DOECLR31_0_DIO18_CLR: any = '1'

/**
No effect*/
export const GPIO_DOECLR31_0_DIO18_NOEFF: any = '0'

/**
Clears bit DOE31_0.DIO17*/
export const GPIO_DOECLR31_0_DIO17: any = '1'
export const GPIO_DOECLR31_0_DIO17_M: any = '1'
export const GPIO_DOECLR31_0_DIO17_S: any = '1'
/**
Clear*/
export const GPIO_DOECLR31_0_DIO17_CLR: any = '1'

/**
No effect*/
export const GPIO_DOECLR31_0_DIO17_NOEFF: any = '0'

/**
Clears bit DOE31_0.DIO16*/
export const GPIO_DOECLR31_0_DIO16: any = '1'
export const GPIO_DOECLR31_0_DIO16_M: any = '1'
export const GPIO_DOECLR31_0_DIO16_S: any = '1'
/**
Clear*/
export const GPIO_DOECLR31_0_DIO16_CLR: any = '1'

/**
No effect*/
export const GPIO_DOECLR31_0_DIO16_NOEFF: any = '0'

/**
Clears bit DOE31_0.DIO15*/
export const GPIO_DOECLR31_0_DIO15: any = '1'
export const GPIO_DOECLR31_0_DIO15_M: any = '1'
export const GPIO_DOECLR31_0_DIO15_S: any = '1'
/**
Clear*/
export const GPIO_DOECLR31_0_DIO15_CLR: any = '1'

/**
No effect*/
export const GPIO_DOECLR31_0_DIO15_NOEFF: any = '0'

/**
Clears bit DOE31_0.DIO14*/
export const GPIO_DOECLR31_0_DIO14: any = '1'
export const GPIO_DOECLR31_0_DIO14_M: any = '1'
export const GPIO_DOECLR31_0_DIO14_S: any = '1'
/**
Clear*/
export const GPIO_DOECLR31_0_DIO14_CLR: any = '1'

/**
No effect*/
export const GPIO_DOECLR31_0_DIO14_NOEFF: any = '0'

/**
Clears bit DOE31_0.DIO13*/
export const GPIO_DOECLR31_0_DIO13: any = '1'
export const GPIO_DOECLR31_0_DIO13_M: any = '1'
export const GPIO_DOECLR31_0_DIO13_S: any = '1'
/**
Clear*/
export const GPIO_DOECLR31_0_DIO13_CLR: any = '1'

/**
No effect*/
export const GPIO_DOECLR31_0_DIO13_NOEFF: any = '0'

/**
Clears bit DOE31_0.DIO12*/
export const GPIO_DOECLR31_0_DIO12: any = '1'
export const GPIO_DOECLR31_0_DIO12_M: any = '1'
export const GPIO_DOECLR31_0_DIO12_S: any = '1'
/**
Clear*/
export const GPIO_DOECLR31_0_DIO12_CLR: any = '1'

/**
No effect*/
export const GPIO_DOECLR31_0_DIO12_NOEFF: any = '0'

/**
Clears bit DOE31_0.DIO11*/
export const GPIO_DOECLR31_0_DIO11: any = '1'
export const GPIO_DOECLR31_0_DIO11_M: any = '1'
export const GPIO_DOECLR31_0_DIO11_S: any = '1'
/**
Clear*/
export const GPIO_DOECLR31_0_DIO11_CLR: any = '1'

/**
No effect*/
export const GPIO_DOECLR31_0_DIO11_NOEFF: any = '0'

/**
Clears bit DOE31_0.DIO10*/
export const GPIO_DOECLR31_0_DIO10: any = '1'
export const GPIO_DOECLR31_0_DIO10_M: any = '1'
export const GPIO_DOECLR31_0_DIO10_S: any = '1'
/**
Clear*/
export const GPIO_DOECLR31_0_DIO10_CLR: any = '1'

/**
No effect*/
export const GPIO_DOECLR31_0_DIO10_NOEFF: any = '0'

/**
Clears bit DOE31_0.DIO9*/
export const GPIO_DOECLR31_0_DIO9: any = '1'
export const GPIO_DOECLR31_0_DIO9_M: any = '1'
export const GPIO_DOECLR31_0_DIO9_S: any = '1'
/**
Clear*/
export const GPIO_DOECLR31_0_DIO9_CLR: any = '1'

/**
No effect*/
export const GPIO_DOECLR31_0_DIO9_NOEFF: any = '0'

/**
Clears bit DOE31_0.DIO8*/
export const GPIO_DOECLR31_0_DIO8: any = '1'
export const GPIO_DOECLR31_0_DIO8_M: any = '1'
export const GPIO_DOECLR31_0_DIO8_S: any = '1'
/**
Clear*/
export const GPIO_DOECLR31_0_DIO8_CLR: any = '1'

/**
No effect*/
export const GPIO_DOECLR31_0_DIO8_NOEFF: any = '0'

/**
Clears bit DOE31_0.DIO7*/
export const GPIO_DOECLR31_0_DIO7: any = '1'
export const GPIO_DOECLR31_0_DIO7_M: any = '1'
export const GPIO_DOECLR31_0_DIO7_S: any = '1'
/**
Clear*/
export const GPIO_DOECLR31_0_DIO7_CLR: any = '1'

/**
No effect*/
export const GPIO_DOECLR31_0_DIO7_NOEFF: any = '0'

/**
Clears bit DOE31_0.DIO6*/
export const GPIO_DOECLR31_0_DIO6: any = '1'
export const GPIO_DOECLR31_0_DIO6_M: any = '1'
export const GPIO_DOECLR31_0_DIO6_S: any = '1'
/**
Clear*/
export const GPIO_DOECLR31_0_DIO6_CLR: any = '1'

/**
No effect*/
export const GPIO_DOECLR31_0_DIO6_NOEFF: any = '0'

/**
Clears bit DOE31_0.DIO5*/
export const GPIO_DOECLR31_0_DIO5: any = '1'
export const GPIO_DOECLR31_0_DIO5_M: any = '1'
export const GPIO_DOECLR31_0_DIO5_S: any = '1'
/**
Clear*/
export const GPIO_DOECLR31_0_DIO5_CLR: any = '1'

/**
No effect*/
export const GPIO_DOECLR31_0_DIO5_NOEFF: any = '0'

/**
Clears bit DOE31_0.DIO4*/
export const GPIO_DOECLR31_0_DIO4: any = '1'
export const GPIO_DOECLR31_0_DIO4_M: any = '1'
export const GPIO_DOECLR31_0_DIO4_S: any = '1'
/**
Clear*/
export const GPIO_DOECLR31_0_DIO4_CLR: any = '1'

/**
No effect*/
export const GPIO_DOECLR31_0_DIO4_NOEFF: any = '0'

/**
Clears bit DOE31_0.DIO3*/
export const GPIO_DOECLR31_0_DIO3: any = '1'
export const GPIO_DOECLR31_0_DIO3_M: any = '1'
export const GPIO_DOECLR31_0_DIO3_S: any = '1'
/**
Clear*/
export const GPIO_DOECLR31_0_DIO3_CLR: any = '1'

/**
No effect*/
export const GPIO_DOECLR31_0_DIO3_NOEFF: any = '0'

/**
Clears bit DOE31_0.DIO2*/
export const GPIO_DOECLR31_0_DIO2: any = '1'
export const GPIO_DOECLR31_0_DIO2_M: any = '1'
export const GPIO_DOECLR31_0_DIO2_S: any = '1'
/**
Clear*/
export const GPIO_DOECLR31_0_DIO2_CLR: any = '1'

/**
No effect*/
export const GPIO_DOECLR31_0_DIO2_NOEFF: any = '0'

/**
Clears bit DOE31_0.DIO1*/
export const GPIO_DOECLR31_0_DIO1: any = '1'
export const GPIO_DOECLR31_0_DIO1_M: any = '1'
export const GPIO_DOECLR31_0_DIO1_S: any = '1'
/**
Clear*/
export const GPIO_DOECLR31_0_DIO1_CLR: any = '1'

/**
No effect*/
export const GPIO_DOECLR31_0_DIO1_NOEFF: any = '0'

/**
Clears bit DOE31_0.DIO0*/
export const GPIO_DOECLR31_0_DIO0: any = '1'
export const GPIO_DOECLR31_0_DIO0_M: any = '1'
export const GPIO_DOECLR31_0_DIO0_S: any = '1'
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
export const GPIO_DOETGL31_0_RESERVED26_M: any = '6'
export const GPIO_DOETGL31_0_RESERVED26_S: any = '6'
/**
Toggles bit DOE31_0.DIO25*/
export const GPIO_DOETGL31_0_DIO25: any = '1'
export const GPIO_DOETGL31_0_DIO25_M: any = '1'
export const GPIO_DOETGL31_0_DIO25_S: any = '1'
/**
Toggle*/
export const GPIO_DOETGL31_0_DIO25_TOGGLE: any = '1'

/**
No effect*/
export const GPIO_DOETGL31_0_DIO25_NOEFF: any = '0'

/**
Toggles bit DOE31_0.DIO24*/
export const GPIO_DOETGL31_0_DIO24: any = '1'
export const GPIO_DOETGL31_0_DIO24_M: any = '1'
export const GPIO_DOETGL31_0_DIO24_S: any = '1'
/**
Toggle*/
export const GPIO_DOETGL31_0_DIO24_TOGGLE: any = '1'

/**
No effect*/
export const GPIO_DOETGL31_0_DIO24_NOEFF: any = '0'

/**
Toggles bit DOE31_0.DIO23*/
export const GPIO_DOETGL31_0_DIO23: any = '1'
export const GPIO_DOETGL31_0_DIO23_M: any = '1'
export const GPIO_DOETGL31_0_DIO23_S: any = '1'
/**
Toggle*/
export const GPIO_DOETGL31_0_DIO23_TOGGLE: any = '1'

/**
No effect*/
export const GPIO_DOETGL31_0_DIO23_NOEFF: any = '0'

/**
Toggles bit DOE31_0.DIO22*/
export const GPIO_DOETGL31_0_DIO22: any = '1'
export const GPIO_DOETGL31_0_DIO22_M: any = '1'
export const GPIO_DOETGL31_0_DIO22_S: any = '1'
/**
Toggle*/
export const GPIO_DOETGL31_0_DIO22_TOGGLE: any = '1'

/**
No effect*/
export const GPIO_DOETGL31_0_DIO22_NOEFF: any = '0'

/**
Toggles bit DOE31_0.DIO21*/
export const GPIO_DOETGL31_0_DIO21: any = '1'
export const GPIO_DOETGL31_0_DIO21_M: any = '1'
export const GPIO_DOETGL31_0_DIO21_S: any = '1'
/**
Toggle*/
export const GPIO_DOETGL31_0_DIO21_TOGGLE: any = '1'

/**
No effect*/
export const GPIO_DOETGL31_0_DIO21_NOEFF: any = '0'

/**
Toggles bit DOE31_0.DIO20*/
export const GPIO_DOETGL31_0_DIO20: any = '1'
export const GPIO_DOETGL31_0_DIO20_M: any = '1'
export const GPIO_DOETGL31_0_DIO20_S: any = '1'
/**
Toggle*/
export const GPIO_DOETGL31_0_DIO20_TOGGLE: any = '1'

/**
No effect*/
export const GPIO_DOETGL31_0_DIO20_NOEFF: any = '0'

/**
Toggles bit DOE31_0.DIO19*/
export const GPIO_DOETGL31_0_DIO19: any = '1'
export const GPIO_DOETGL31_0_DIO19_M: any = '1'
export const GPIO_DOETGL31_0_DIO19_S: any = '1'
/**
Toggle*/
export const GPIO_DOETGL31_0_DIO19_TOGGLE: any = '1'

/**
No effect*/
export const GPIO_DOETGL31_0_DIO19_NOEFF: any = '0'

/**
Toggles bit DOE31_0.DIO18*/
export const GPIO_DOETGL31_0_DIO18: any = '1'
export const GPIO_DOETGL31_0_DIO18_M: any = '1'
export const GPIO_DOETGL31_0_DIO18_S: any = '1'
/**
Toggle*/
export const GPIO_DOETGL31_0_DIO18_TOGGLE: any = '1'

/**
No effect*/
export const GPIO_DOETGL31_0_DIO18_NOEFF: any = '0'

/**
Toggles bit DOE31_0.DIO17*/
export const GPIO_DOETGL31_0_DIO17: any = '1'
export const GPIO_DOETGL31_0_DIO17_M: any = '1'
export const GPIO_DOETGL31_0_DIO17_S: any = '1'
/**
Toggle*/
export const GPIO_DOETGL31_0_DIO17_TOGGLE: any = '1'

/**
No effect*/
export const GPIO_DOETGL31_0_DIO17_NOEFF: any = '0'

/**
Toggles bit DOE31_0.DIO16*/
export const GPIO_DOETGL31_0_DIO16: any = '1'
export const GPIO_DOETGL31_0_DIO16_M: any = '1'
export const GPIO_DOETGL31_0_DIO16_S: any = '1'
/**
Toggle*/
export const GPIO_DOETGL31_0_DIO16_TOGGLE: any = '1'

/**
No effect*/
export const GPIO_DOETGL31_0_DIO16_NOEFF: any = '0'

/**
Toggles bit DOE31_0.DIO15*/
export const GPIO_DOETGL31_0_DIO15: any = '1'
export const GPIO_DOETGL31_0_DIO15_M: any = '1'
export const GPIO_DOETGL31_0_DIO15_S: any = '1'
/**
Toggle*/
export const GPIO_DOETGL31_0_DIO15_TOGGLE: any = '1'

/**
No effect*/
export const GPIO_DOETGL31_0_DIO15_NOEFF: any = '0'

/**
Toggles bit DOE31_0.DIO14*/
export const GPIO_DOETGL31_0_DIO14: any = '1'
export const GPIO_DOETGL31_0_DIO14_M: any = '1'
export const GPIO_DOETGL31_0_DIO14_S: any = '1'
/**
Toggle*/
export const GPIO_DOETGL31_0_DIO14_TOGGLE: any = '1'

/**
No effect*/
export const GPIO_DOETGL31_0_DIO14_NOEFF: any = '0'

/**
Toggles bit DOE31_0.DIO13*/
export const GPIO_DOETGL31_0_DIO13: any = '1'
export const GPIO_DOETGL31_0_DIO13_M: any = '1'
export const GPIO_DOETGL31_0_DIO13_S: any = '1'
/**
Toggle*/
export const GPIO_DOETGL31_0_DIO13_TOGGLE: any = '1'

/**
No effect*/
export const GPIO_DOETGL31_0_DIO13_NOEFF: any = '0'

/**
Toggles bit DOE31_0.DIO12*/
export const GPIO_DOETGL31_0_DIO12: any = '1'
export const GPIO_DOETGL31_0_DIO12_M: any = '1'
export const GPIO_DOETGL31_0_DIO12_S: any = '1'
/**
Toggle*/
export const GPIO_DOETGL31_0_DIO12_TOGGLE: any = '1'

/**
No effect*/
export const GPIO_DOETGL31_0_DIO12_NOEFF: any = '0'

/**
Toggles bit DOE31_0.DIO11*/
export const GPIO_DOETGL31_0_DIO11: any = '1'
export const GPIO_DOETGL31_0_DIO11_M: any = '1'
export const GPIO_DOETGL31_0_DIO11_S: any = '1'
/**
Toggle*/
export const GPIO_DOETGL31_0_DIO11_TOGGLE: any = '1'

/**
No effect*/
export const GPIO_DOETGL31_0_DIO11_NOEFF: any = '0'

/**
Toggles bit DOE31_0.DIO10*/
export const GPIO_DOETGL31_0_DIO10: any = '1'
export const GPIO_DOETGL31_0_DIO10_M: any = '1'
export const GPIO_DOETGL31_0_DIO10_S: any = '1'
/**
Toggle*/
export const GPIO_DOETGL31_0_DIO10_TOGGLE: any = '1'

/**
No effect*/
export const GPIO_DOETGL31_0_DIO10_NOEFF: any = '0'

/**
Toggles bit DOE31_0.DIO9*/
export const GPIO_DOETGL31_0_DIO9: any = '1'
export const GPIO_DOETGL31_0_DIO9_M: any = '1'
export const GPIO_DOETGL31_0_DIO9_S: any = '1'
/**
Toggle*/
export const GPIO_DOETGL31_0_DIO9_TOGGLE: any = '1'

/**
No effect*/
export const GPIO_DOETGL31_0_DIO9_NOEFF: any = '0'

/**
Toggles bit DOE31_0.DIO8*/
export const GPIO_DOETGL31_0_DIO8: any = '1'
export const GPIO_DOETGL31_0_DIO8_M: any = '1'
export const GPIO_DOETGL31_0_DIO8_S: any = '1'
/**
Toggle*/
export const GPIO_DOETGL31_0_DIO8_TOGGLE: any = '1'

/**
No effect*/
export const GPIO_DOETGL31_0_DIO8_NOEFF: any = '0'

/**
Toggles bit DOE31_0.DIO7*/
export const GPIO_DOETGL31_0_DIO7: any = '1'
export const GPIO_DOETGL31_0_DIO7_M: any = '1'
export const GPIO_DOETGL31_0_DIO7_S: any = '1'
/**
Toggle*/
export const GPIO_DOETGL31_0_DIO7_TOGGLE: any = '1'

/**
No effect*/
export const GPIO_DOETGL31_0_DIO7_NOEFF: any = '0'

/**
Toggles bit DOE31_0.DIO6*/
export const GPIO_DOETGL31_0_DIO6: any = '1'
export const GPIO_DOETGL31_0_DIO6_M: any = '1'
export const GPIO_DOETGL31_0_DIO6_S: any = '1'
/**
Toggle*/
export const GPIO_DOETGL31_0_DIO6_TOGGLE: any = '1'

/**
No effect*/
export const GPIO_DOETGL31_0_DIO6_NOEFF: any = '0'

/**
Toggles bit DOE31_0.DIO5*/
export const GPIO_DOETGL31_0_DIO5: any = '1'
export const GPIO_DOETGL31_0_DIO5_M: any = '1'
export const GPIO_DOETGL31_0_DIO5_S: any = '1'
/**
Toggle*/
export const GPIO_DOETGL31_0_DIO5_TOGGLE: any = '1'

/**
No effect*/
export const GPIO_DOETGL31_0_DIO5_NOEFF: any = '0'

/**
Toggles bit DOE31_0.DIO4*/
export const GPIO_DOETGL31_0_DIO4: any = '1'
export const GPIO_DOETGL31_0_DIO4_M: any = '1'
export const GPIO_DOETGL31_0_DIO4_S: any = '1'
/**
Toggle*/
export const GPIO_DOETGL31_0_DIO4_TOGGLE: any = '1'

/**
No effect*/
export const GPIO_DOETGL31_0_DIO4_NOEFF: any = '0'

/**
Toggles bit DOE31_0.DIO3*/
export const GPIO_DOETGL31_0_DIO3: any = '1'
export const GPIO_DOETGL31_0_DIO3_M: any = '1'
export const GPIO_DOETGL31_0_DIO3_S: any = '1'
/**
Toggle*/
export const GPIO_DOETGL31_0_DIO3_TOGGLE: any = '1'

/**
No effect*/
export const GPIO_DOETGL31_0_DIO3_NOEFF: any = '0'

/**
Toggles bit DOE31_0.DIO2*/
export const GPIO_DOETGL31_0_DIO2: any = '1'
export const GPIO_DOETGL31_0_DIO2_M: any = '1'
export const GPIO_DOETGL31_0_DIO2_S: any = '1'
/**
Toggle*/
export const GPIO_DOETGL31_0_DIO2_TOGGLE: any = '1'

/**
No effect*/
export const GPIO_DOETGL31_0_DIO2_NOEFF: any = '0'

/**
Toggles bit DOE31_0.DIO1*/
export const GPIO_DOETGL31_0_DIO1: any = '1'
export const GPIO_DOETGL31_0_DIO1_M: any = '1'
export const GPIO_DOETGL31_0_DIO1_S: any = '1'
/**
Toggle*/
export const GPIO_DOETGL31_0_DIO1_TOGGLE: any = '1'

/**
No effect*/
export const GPIO_DOETGL31_0_DIO1_NOEFF: any = '0'

/**
Toggles bit DOE31_0.DIO0*/
export const GPIO_DOETGL31_0_DIO0: any = '1'
export const GPIO_DOETGL31_0_DIO0_M: any = '1'
export const GPIO_DOETGL31_0_DIO0_S: any = '1'
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
export const GPIO_DIN3_0_RESERVED25_M: any = '7'
export const GPIO_DIN3_0_RESERVED25_S: any = '7'
/**
Data input from DIO3*/
export const GPIO_DIN3_0_DIO3: any = '1'
export const GPIO_DIN3_0_DIO3_M: any = '1'
export const GPIO_DIN3_0_DIO3_S: any = '1'
/**
Input value is 1*/
export const GPIO_DIN3_0_DIO3_ONE: any = '1'

/**
Input value is 0*/
export const GPIO_DIN3_0_DIO3_ZERO: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_DIN3_0_RESERVED17: any = '7'
export const GPIO_DIN3_0_RESERVED17_M: any = '7'
export const GPIO_DIN3_0_RESERVED17_S: any = '7'
/**
Data input from DIO2*/
export const GPIO_DIN3_0_DIO2: any = '1'
export const GPIO_DIN3_0_DIO2_M: any = '1'
export const GPIO_DIN3_0_DIO2_S: any = '1'
/**
Input value is 1*/
export const GPIO_DIN3_0_DIO2_ONE: any = '1'

/**
Input value is 0*/
export const GPIO_DIN3_0_DIO2_ZERO: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_DIN3_0_RESERVED9: any = '7'
export const GPIO_DIN3_0_RESERVED9_M: any = '7'
export const GPIO_DIN3_0_RESERVED9_S: any = '7'
/**
Data input from DIO1*/
export const GPIO_DIN3_0_DIO1: any = '1'
export const GPIO_DIN3_0_DIO1_M: any = '1'
export const GPIO_DIN3_0_DIO1_S: any = '1'
/**
Input value is 1*/
export const GPIO_DIN3_0_DIO1_ONE: any = '1'

/**
Input value is 0*/
export const GPIO_DIN3_0_DIO1_ZERO: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_DIN3_0_RESERVED1: any = '7'
export const GPIO_DIN3_0_RESERVED1_M: any = '7'
export const GPIO_DIN3_0_RESERVED1_S: any = '7'
/**
Data input from DIO0*/
export const GPIO_DIN3_0_DIO0: any = '1'
export const GPIO_DIN3_0_DIO0_M: any = '1'
export const GPIO_DIN3_0_DIO0_S: any = '1'
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
export const GPIO_DIN7_4_RESERVED25_M: any = '7'
export const GPIO_DIN7_4_RESERVED25_S: any = '7'
/**
Data input from DIO7*/
export const GPIO_DIN7_4_DIO7: any = '1'
export const GPIO_DIN7_4_DIO7_M: any = '1'
export const GPIO_DIN7_4_DIO7_S: any = '1'
/**
Input value is 1*/
export const GPIO_DIN7_4_DIO7_ONE: any = '1'

/**
Input value is 0*/
export const GPIO_DIN7_4_DIO7_ZERO: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_DIN7_4_RESERVED17: any = '7'
export const GPIO_DIN7_4_RESERVED17_M: any = '7'
export const GPIO_DIN7_4_RESERVED17_S: any = '7'
/**
Data input from DIO6*/
export const GPIO_DIN7_4_DIO6: any = '1'
export const GPIO_DIN7_4_DIO6_M: any = '1'
export const GPIO_DIN7_4_DIO6_S: any = '1'
/**
Input value is 1*/
export const GPIO_DIN7_4_DIO6_ONE: any = '1'

/**
Input value is 0*/
export const GPIO_DIN7_4_DIO6_ZERO: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_DIN7_4_RESERVED9: any = '7'
export const GPIO_DIN7_4_RESERVED9_M: any = '7'
export const GPIO_DIN7_4_RESERVED9_S: any = '7'
/**
Data input from DIO5*/
export const GPIO_DIN7_4_DIO5: any = '1'
export const GPIO_DIN7_4_DIO5_M: any = '1'
export const GPIO_DIN7_4_DIO5_S: any = '1'
/**
Input value is 1*/
export const GPIO_DIN7_4_DIO5_ONE: any = '1'

/**
Input value is 0*/
export const GPIO_DIN7_4_DIO5_ZERO: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_DIN7_4_RESERVED1: any = '7'
export const GPIO_DIN7_4_RESERVED1_M: any = '7'
export const GPIO_DIN7_4_RESERVED1_S: any = '7'
/**
Data input from DIO4*/
export const GPIO_DIN7_4_DIO4: any = '1'
export const GPIO_DIN7_4_DIO4_M: any = '1'
export const GPIO_DIN7_4_DIO4_S: any = '1'
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
export const GPIO_DIN11_8_RESERVED25_M: any = '7'
export const GPIO_DIN11_8_RESERVED25_S: any = '7'
/**
Data input from DIO11*/
export const GPIO_DIN11_8_DIO11: any = '1'
export const GPIO_DIN11_8_DIO11_M: any = '1'
export const GPIO_DIN11_8_DIO11_S: any = '1'
/**
Input value is 1*/
export const GPIO_DIN11_8_DIO11_ONE: any = '1'

/**
Input value is 0*/
export const GPIO_DIN11_8_DIO11_ZERO: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_DIN11_8_RESERVED17: any = '7'
export const GPIO_DIN11_8_RESERVED17_M: any = '7'
export const GPIO_DIN11_8_RESERVED17_S: any = '7'
/**
Data input from DIO10*/
export const GPIO_DIN11_8_DIO10: any = '1'
export const GPIO_DIN11_8_DIO10_M: any = '1'
export const GPIO_DIN11_8_DIO10_S: any = '1'
/**
Input value is 1*/
export const GPIO_DIN11_8_DIO10_ONE: any = '1'

/**
Input value is 0*/
export const GPIO_DIN11_8_DIO10_ZERO: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_DIN11_8_RESERVED9: any = '7'
export const GPIO_DIN11_8_RESERVED9_M: any = '7'
export const GPIO_DIN11_8_RESERVED9_S: any = '7'
/**
Data input from DIO9*/
export const GPIO_DIN11_8_DIO9: any = '1'
export const GPIO_DIN11_8_DIO9_M: any = '1'
export const GPIO_DIN11_8_DIO9_S: any = '1'
/**
Input value is 1*/
export const GPIO_DIN11_8_DIO9_ONE: any = '1'

/**
Input value is 0*/
export const GPIO_DIN11_8_DIO9_ZERO: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_DIN11_8_RESERVED1: any = '7'
export const GPIO_DIN11_8_RESERVED1_M: any = '7'
export const GPIO_DIN11_8_RESERVED1_S: any = '7'
/**
Data input from DIO8*/
export const GPIO_DIN11_8_DIO8: any = '1'
export const GPIO_DIN11_8_DIO8_M: any = '1'
export const GPIO_DIN11_8_DIO8_S: any = '1'
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
export const GPIO_DIN15_12_RESERVED25_M: any = '7'
export const GPIO_DIN15_12_RESERVED25_S: any = '7'
/**
Data input from DIO15*/
export const GPIO_DIN15_12_DIO15: any = '1'
export const GPIO_DIN15_12_DIO15_M: any = '1'
export const GPIO_DIN15_12_DIO15_S: any = '1'
/**
Input value is 1*/
export const GPIO_DIN15_12_DIO15_ONE: any = '1'

/**
Input value is 0*/
export const GPIO_DIN15_12_DIO15_ZERO: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_DIN15_12_RESERVED17: any = '7'
export const GPIO_DIN15_12_RESERVED17_M: any = '7'
export const GPIO_DIN15_12_RESERVED17_S: any = '7'
/**
Data input from DIO14*/
export const GPIO_DIN15_12_DIO14: any = '1'
export const GPIO_DIN15_12_DIO14_M: any = '1'
export const GPIO_DIN15_12_DIO14_S: any = '1'
/**
Input value is 1*/
export const GPIO_DIN15_12_DIO14_ONE: any = '1'

/**
Input value is 0*/
export const GPIO_DIN15_12_DIO14_ZERO: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_DIN15_12_RESERVED9: any = '7'
export const GPIO_DIN15_12_RESERVED9_M: any = '7'
export const GPIO_DIN15_12_RESERVED9_S: any = '7'
/**
Data input from DIO13*/
export const GPIO_DIN15_12_DIO13: any = '1'
export const GPIO_DIN15_12_DIO13_M: any = '1'
export const GPIO_DIN15_12_DIO13_S: any = '1'
/**
Input value is 1*/
export const GPIO_DIN15_12_DIO13_ONE: any = '1'

/**
Input value is 0*/
export const GPIO_DIN15_12_DIO13_ZERO: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_DIN15_12_RESERVED1: any = '7'
export const GPIO_DIN15_12_RESERVED1_M: any = '7'
export const GPIO_DIN15_12_RESERVED1_S: any = '7'
/**
Data input from DIO12*/
export const GPIO_DIN15_12_DIO12: any = '1'
export const GPIO_DIN15_12_DIO12_M: any = '1'
export const GPIO_DIN15_12_DIO12_S: any = '1'
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
export const GPIO_DIN19_16_RESERVED25_M: any = '7'
export const GPIO_DIN19_16_RESERVED25_S: any = '7'
/**
Data input from DIO19*/
export const GPIO_DIN19_16_DIO19: any = '1'
export const GPIO_DIN19_16_DIO19_M: any = '1'
export const GPIO_DIN19_16_DIO19_S: any = '1'
/**
Input value is 1*/
export const GPIO_DIN19_16_DIO19_ONE: any = '1'

/**
Input value is 0*/
export const GPIO_DIN19_16_DIO19_ZERO: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_DIN19_16_RESERVED17: any = '7'
export const GPIO_DIN19_16_RESERVED17_M: any = '7'
export const GPIO_DIN19_16_RESERVED17_S: any = '7'
/**
Data input from DIO18*/
export const GPIO_DIN19_16_DIO18: any = '1'
export const GPIO_DIN19_16_DIO18_M: any = '1'
export const GPIO_DIN19_16_DIO18_S: any = '1'
/**
Input value is 1*/
export const GPIO_DIN19_16_DIO18_ONE: any = '1'

/**
Input value is 0*/
export const GPIO_DIN19_16_DIO18_ZERO: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_DIN19_16_RESERVED9: any = '7'
export const GPIO_DIN19_16_RESERVED9_M: any = '7'
export const GPIO_DIN19_16_RESERVED9_S: any = '7'
/**
Data input from DIO17*/
export const GPIO_DIN19_16_DIO17: any = '1'
export const GPIO_DIN19_16_DIO17_M: any = '1'
export const GPIO_DIN19_16_DIO17_S: any = '1'
/**
Input value is 1*/
export const GPIO_DIN19_16_DIO17_ONE: any = '1'

/**
Input value is 0*/
export const GPIO_DIN19_16_DIO17_ZERO: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_DIN19_16_RESERVED1: any = '7'
export const GPIO_DIN19_16_RESERVED1_M: any = '7'
export const GPIO_DIN19_16_RESERVED1_S: any = '7'
/**
Data input from DIO16*/
export const GPIO_DIN19_16_DIO16: any = '1'
export const GPIO_DIN19_16_DIO16_M: any = '1'
export const GPIO_DIN19_16_DIO16_S: any = '1'
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
export const GPIO_DIN23_20_RESERVED25_M: any = '7'
export const GPIO_DIN23_20_RESERVED25_S: any = '7'
/**
Data input from DIO23*/
export const GPIO_DIN23_20_DIO23: any = '1'
export const GPIO_DIN23_20_DIO23_M: any = '1'
export const GPIO_DIN23_20_DIO23_S: any = '1'
/**
Input value is 1*/
export const GPIO_DIN23_20_DIO23_ONE: any = '1'

/**
Input value is 0*/
export const GPIO_DIN23_20_DIO23_ZERO: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_DIN23_20_RESERVED17: any = '7'
export const GPIO_DIN23_20_RESERVED17_M: any = '7'
export const GPIO_DIN23_20_RESERVED17_S: any = '7'
/**
Data input from DIO22*/
export const GPIO_DIN23_20_DIO22: any = '1'
export const GPIO_DIN23_20_DIO22_M: any = '1'
export const GPIO_DIN23_20_DIO22_S: any = '1'
/**
Input value is 1*/
export const GPIO_DIN23_20_DIO22_ONE: any = '1'

/**
Input value is 0*/
export const GPIO_DIN23_20_DIO22_ZERO: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_DIN23_20_RESERVED9: any = '7'
export const GPIO_DIN23_20_RESERVED9_M: any = '7'
export const GPIO_DIN23_20_RESERVED9_S: any = '7'
/**
Data input from DIO21*/
export const GPIO_DIN23_20_DIO21: any = '1'
export const GPIO_DIN23_20_DIO21_M: any = '1'
export const GPIO_DIN23_20_DIO21_S: any = '1'
/**
Input value is 1*/
export const GPIO_DIN23_20_DIO21_ONE: any = '1'

/**
Input value is 0*/
export const GPIO_DIN23_20_DIO21_ZERO: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_DIN23_20_RESERVED1: any = '7'
export const GPIO_DIN23_20_RESERVED1_M: any = '7'
export const GPIO_DIN23_20_RESERVED1_S: any = '7'
/**
Data input from DIO20*/
export const GPIO_DIN23_20_DIO20: any = '1'
export const GPIO_DIN23_20_DIO20_M: any = '1'
export const GPIO_DIN23_20_DIO20_S: any = '1'
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
export const GPIO_DIN27_24_RESERVED9_M: any = '23'
export const GPIO_DIN27_24_RESERVED9_S: any = '23'
/**
Data input from DIO25*/
export const GPIO_DIN27_24_DIO25: any = '1'
export const GPIO_DIN27_24_DIO25_M: any = '1'
export const GPIO_DIN27_24_DIO25_S: any = '1'
/**
Input value is 1*/
export const GPIO_DIN27_24_DIO25_ONE: any = '1'

/**
Input value is 0*/
export const GPIO_DIN27_24_DIO25_ZERO: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_DIN27_24_RESERVED1: any = '7'
export const GPIO_DIN27_24_RESERVED1_M: any = '7'
export const GPIO_DIN27_24_RESERVED1_S: any = '7'
/**
Data input from DIO24*/
export const GPIO_DIN27_24_DIO24: any = '1'
export const GPIO_DIN27_24_DIO24_M: any = '1'
export const GPIO_DIN27_24_DIO24_S: any = '1'
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
export const GPIO_DIN31_0_RESERVED26_M: any = '6'
export const GPIO_DIN31_0_RESERVED26_S: any = '6'
/**
Data input from DIO25*/
export const GPIO_DIN31_0_DIO25: any = '1'
export const GPIO_DIN31_0_DIO25_M: any = '1'
export const GPIO_DIN31_0_DIO25_S: any = '1'
/**
Input value is 1*/
export const GPIO_DIN31_0_DIO25_ONE: any = '1'

/**
Input value is 0*/
export const GPIO_DIN31_0_DIO25_ZERO: any = '0'

/**
Data input from DIO24*/
export const GPIO_DIN31_0_DIO24: any = '1'
export const GPIO_DIN31_0_DIO24_M: any = '1'
export const GPIO_DIN31_0_DIO24_S: any = '1'
/**
Input value is 1*/
export const GPIO_DIN31_0_DIO24_ONE: any = '1'

/**
Input value is 0*/
export const GPIO_DIN31_0_DIO24_ZERO: any = '0'

/**
Data input from DIO23*/
export const GPIO_DIN31_0_DIO23: any = '1'
export const GPIO_DIN31_0_DIO23_M: any = '1'
export const GPIO_DIN31_0_DIO23_S: any = '1'
/**
Input value is 1*/
export const GPIO_DIN31_0_DIO23_ONE: any = '1'

/**
Input value is 0*/
export const GPIO_DIN31_0_DIO23_ZERO: any = '0'

/**
Data input from DIO22*/
export const GPIO_DIN31_0_DIO22: any = '1'
export const GPIO_DIN31_0_DIO22_M: any = '1'
export const GPIO_DIN31_0_DIO22_S: any = '1'
/**
Input value is 1*/
export const GPIO_DIN31_0_DIO22_ONE: any = '1'

/**
Input value is 0*/
export const GPIO_DIN31_0_DIO22_ZERO: any = '0'

/**
Data input from DIO21*/
export const GPIO_DIN31_0_DIO21: any = '1'
export const GPIO_DIN31_0_DIO21_M: any = '1'
export const GPIO_DIN31_0_DIO21_S: any = '1'
/**
Input value is 1*/
export const GPIO_DIN31_0_DIO21_ONE: any = '1'

/**
Input value is 0*/
export const GPIO_DIN31_0_DIO21_ZERO: any = '0'

/**
Data input from DIO20*/
export const GPIO_DIN31_0_DIO20: any = '1'
export const GPIO_DIN31_0_DIO20_M: any = '1'
export const GPIO_DIN31_0_DIO20_S: any = '1'
/**
Input value is 1*/
export const GPIO_DIN31_0_DIO20_ONE: any = '1'

/**
Input value is 0*/
export const GPIO_DIN31_0_DIO20_ZERO: any = '0'

/**
Data input from DIO19*/
export const GPIO_DIN31_0_DIO19: any = '1'
export const GPIO_DIN31_0_DIO19_M: any = '1'
export const GPIO_DIN31_0_DIO19_S: any = '1'
/**
Input value is 1*/
export const GPIO_DIN31_0_DIO19_ONE: any = '1'

/**
Input value is 0*/
export const GPIO_DIN31_0_DIO19_ZERO: any = '0'

/**
Data input from DIO18*/
export const GPIO_DIN31_0_DIO18: any = '1'
export const GPIO_DIN31_0_DIO18_M: any = '1'
export const GPIO_DIN31_0_DIO18_S: any = '1'
/**
Input value is 1*/
export const GPIO_DIN31_0_DIO18_ONE: any = '1'

/**
Input value is 0*/
export const GPIO_DIN31_0_DIO18_ZERO: any = '0'

/**
Data input from DIO17*/
export const GPIO_DIN31_0_DIO17: any = '1'
export const GPIO_DIN31_0_DIO17_M: any = '1'
export const GPIO_DIN31_0_DIO17_S: any = '1'
/**
Input value is 1*/
export const GPIO_DIN31_0_DIO17_ONE: any = '1'

/**
Input value is 0*/
export const GPIO_DIN31_0_DIO17_ZERO: any = '0'

/**
Data input from DIO16*/
export const GPIO_DIN31_0_DIO16: any = '1'
export const GPIO_DIN31_0_DIO16_M: any = '1'
export const GPIO_DIN31_0_DIO16_S: any = '1'
/**
Input value is 1*/
export const GPIO_DIN31_0_DIO16_ONE: any = '1'

/**
Input value is 0*/
export const GPIO_DIN31_0_DIO16_ZERO: any = '0'

/**
Data input from DIO15*/
export const GPIO_DIN31_0_DIO15: any = '1'
export const GPIO_DIN31_0_DIO15_M: any = '1'
export const GPIO_DIN31_0_DIO15_S: any = '1'
/**
Input value is 1*/
export const GPIO_DIN31_0_DIO15_ONE: any = '1'

/**
Input value is 0*/
export const GPIO_DIN31_0_DIO15_ZERO: any = '0'

/**
Data input from DIO14*/
export const GPIO_DIN31_0_DIO14: any = '1'
export const GPIO_DIN31_0_DIO14_M: any = '1'
export const GPIO_DIN31_0_DIO14_S: any = '1'
/**
Input value is 1*/
export const GPIO_DIN31_0_DIO14_ONE: any = '1'

/**
Input value is 0*/
export const GPIO_DIN31_0_DIO14_ZERO: any = '0'

/**
Data input from DIO13*/
export const GPIO_DIN31_0_DIO13: any = '1'
export const GPIO_DIN31_0_DIO13_M: any = '1'
export const GPIO_DIN31_0_DIO13_S: any = '1'
/**
Input value is 1*/
export const GPIO_DIN31_0_DIO13_ONE: any = '1'

/**
Input value is 0*/
export const GPIO_DIN31_0_DIO13_ZERO: any = '0'

/**
Data input from DIO12*/
export const GPIO_DIN31_0_DIO12: any = '1'
export const GPIO_DIN31_0_DIO12_M: any = '1'
export const GPIO_DIN31_0_DIO12_S: any = '1'
/**
Input value is 1*/
export const GPIO_DIN31_0_DIO12_ONE: any = '1'

/**
Input value is 0*/
export const GPIO_DIN31_0_DIO12_ZERO: any = '0'

/**
Data input from DIO11*/
export const GPIO_DIN31_0_DIO11: any = '1'
export const GPIO_DIN31_0_DIO11_M: any = '1'
export const GPIO_DIN31_0_DIO11_S: any = '1'
/**
Input value is 1*/
export const GPIO_DIN31_0_DIO11_ONE: any = '1'

/**
Input value is 0*/
export const GPIO_DIN31_0_DIO11_ZERO: any = '0'

/**
Data input from DIO10*/
export const GPIO_DIN31_0_DIO10: any = '1'
export const GPIO_DIN31_0_DIO10_M: any = '1'
export const GPIO_DIN31_0_DIO10_S: any = '1'
/**
Input value is 1*/
export const GPIO_DIN31_0_DIO10_ONE: any = '1'

/**
Input value is 0*/
export const GPIO_DIN31_0_DIO10_ZERO: any = '0'

/**
Data input from DIO9*/
export const GPIO_DIN31_0_DIO9: any = '1'
export const GPIO_DIN31_0_DIO9_M: any = '1'
export const GPIO_DIN31_0_DIO9_S: any = '1'
/**
Input value is 1*/
export const GPIO_DIN31_0_DIO9_ONE: any = '1'

/**
Input value is 0*/
export const GPIO_DIN31_0_DIO9_ZERO: any = '0'

/**
Data input from DIO8*/
export const GPIO_DIN31_0_DIO8: any = '1'
export const GPIO_DIN31_0_DIO8_M: any = '1'
export const GPIO_DIN31_0_DIO8_S: any = '1'
/**
Input value is 1*/
export const GPIO_DIN31_0_DIO8_ONE: any = '1'

/**
Input value is 0*/
export const GPIO_DIN31_0_DIO8_ZERO: any = '0'

/**
Data input from DIO7*/
export const GPIO_DIN31_0_DIO7: any = '1'
export const GPIO_DIN31_0_DIO7_M: any = '1'
export const GPIO_DIN31_0_DIO7_S: any = '1'
/**
Input value is 1*/
export const GPIO_DIN31_0_DIO7_ONE: any = '1'

/**
Input value is 0*/
export const GPIO_DIN31_0_DIO7_ZERO: any = '0'

/**
Data input from DIO6*/
export const GPIO_DIN31_0_DIO6: any = '1'
export const GPIO_DIN31_0_DIO6_M: any = '1'
export const GPIO_DIN31_0_DIO6_S: any = '1'
/**
Input value is 1*/
export const GPIO_DIN31_0_DIO6_ONE: any = '1'

/**
Input value is 0*/
export const GPIO_DIN31_0_DIO6_ZERO: any = '0'

/**
Data input from DIO5*/
export const GPIO_DIN31_0_DIO5: any = '1'
export const GPIO_DIN31_0_DIO5_M: any = '1'
export const GPIO_DIN31_0_DIO5_S: any = '1'
/**
Input value is 1*/
export const GPIO_DIN31_0_DIO5_ONE: any = '1'

/**
Input value is 0*/
export const GPIO_DIN31_0_DIO5_ZERO: any = '0'

/**
Data input from DIO4*/
export const GPIO_DIN31_0_DIO4: any = '1'
export const GPIO_DIN31_0_DIO4_M: any = '1'
export const GPIO_DIN31_0_DIO4_S: any = '1'
/**
Input value is 1*/
export const GPIO_DIN31_0_DIO4_ONE: any = '1'

/**
Input value is 0*/
export const GPIO_DIN31_0_DIO4_ZERO: any = '0'

/**
Data input from DIO3*/
export const GPIO_DIN31_0_DIO3: any = '1'
export const GPIO_DIN31_0_DIO3_M: any = '1'
export const GPIO_DIN31_0_DIO3_S: any = '1'
/**
Input value is 1*/
export const GPIO_DIN31_0_DIO3_ONE: any = '1'

/**
Input value is 0*/
export const GPIO_DIN31_0_DIO3_ZERO: any = '0'

/**
Data input from DIO2*/
export const GPIO_DIN31_0_DIO2: any = '1'
export const GPIO_DIN31_0_DIO2_M: any = '1'
export const GPIO_DIN31_0_DIO2_S: any = '1'
/**
Input value is 1*/
export const GPIO_DIN31_0_DIO2_ONE: any = '1'

/**
Input value is 0*/
export const GPIO_DIN31_0_DIO2_ZERO: any = '0'

/**
Data input from DIO1*/
export const GPIO_DIN31_0_DIO1: any = '1'
export const GPIO_DIN31_0_DIO1_M: any = '1'
export const GPIO_DIN31_0_DIO1_S: any = '1'
/**
Input value is 1*/
export const GPIO_DIN31_0_DIO1_ONE: any = '1'

/**
Input value is 0*/
export const GPIO_DIN31_0_DIO1_ZERO: any = '0'

/**
Data input from DIO0*/
export const GPIO_DIN31_0_DIO0: any = '1'
export const GPIO_DIN31_0_DIO0_M: any = '1'
export const GPIO_DIN31_0_DIO0_S: any = '1'
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
export const GPIO_EVTCFG_RESERVED9_M: any = '23'
export const GPIO_EVTCFG_RESERVED9_S: any = '23'
/**
Enables GPIO to publish edge qualified selected DIO event on SVT event fabric. 

Design note: The edge detector flop is cleared automatically for the selected DIO once the event is published.*/
export const GPIO_EVTCFG_EVTEN: any = '1'
export const GPIO_EVTCFG_EVTEN_M: any = '1'
export const GPIO_EVTCFG_EVTEN_S: any = '1'
/**
Enable*/
export const GPIO_EVTCFG_EVTEN_EN: any = '1'

/**
Disable*/
export const GPIO_EVTCFG_EVTEN_DIS: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const GPIO_EVTCFG_RESERVED6: any = '2'
export const GPIO_EVTCFG_RESERVED6_M: any = '2'
export const GPIO_EVTCFG_RESERVED6_S: any = '2'
/**
This is used to select DIO for event generation. For example, DIOSEL = 0x0 selects DIO0 and DIOSEL = 0x8 selects DIO8.*/
export const GPIO_EVTCFG_DIOSEL: any = '6'
export const GPIO_EVTCFG_DIOSEL_M: any = '6'
export const GPIO_EVTCFG_DIOSEL_S: any = '6'
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
export const IOC_DESC_MODID_M: any = '16'
export const IOC_DESC_MODID_S: any = '16'
/**
Standard IP MMR block offset. Standard IP MMRs are the set of from aggregated IRQ registers till DTB.


0: Standard IP MMRs do not exist

0x1-0xF: Standard IP MMRs begin at offset of (64*STDIPOFF from the base IP address)*/
export const IOC_DESC_STDIPOFF: any = '4'
export const IOC_DESC_STDIPOFF_M: any = '4'
export const IOC_DESC_STDIPOFF_S: any = '4'
/**
IP Instance ID number. If multiple instances of IP exist in the device, this field can identify the instance number (0-15).*/
export const IOC_DESC_INSTIDX: any = '4'
export const IOC_DESC_INSTIDX_M: any = '4'
export const IOC_DESC_INSTIDX_S: any = '4'
/**
Major revision of IP (0-15).*/
export const IOC_DESC_MAJREV: any = '4'
export const IOC_DESC_MAJREV_M: any = '4'
export const IOC_DESC_MAJREV_S: any = '4'
/**
Minor revision of IP (0-15).*/
export const IOC_DESC_MINREV: any = '4'
export const IOC_DESC_MINREV_M: any = '4'
export const IOC_DESC_MINREV_S: any = '4'

// -------- REGISTER DESCEX -------- //

/**
Extended Description Register. This register provides configuration details of the IP to software drivers and end users.*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_DESCEX_RESERVED16: any = '16'
export const IOC_DESCEX_RESERVED16_M: any = '16'
export const IOC_DESCEX_RESERVED16_S: any = '16'
/**
Number of DTB IOs supported. Total DTB IOs supported is NUMDTBIO value +1.*/
export const IOC_DESCEX_NUMDTBIO: any = '4'
export const IOC_DESCEX_NUMDTBIO_M: any = '4'
export const IOC_DESCEX_NUMDTBIO_S: any = '4'
/**
Highest possible value*/
export const IOC_DESCEX_NUMDTBIO_MAXIMUM: any = '15'

/**
Smallest value*/
export const IOC_DESCEX_NUMDTBIO_MINIMUM: any = '0'

/**
Number of high drive IOs supported. Total high drive IOs supported is NUMHDIO value +1.*/
export const IOC_DESCEX_NUMHDIO: any = '5'
export const IOC_DESCEX_NUMHDIO_M: any = '5'
export const IOC_DESCEX_NUMHDIO_S: any = '5'
/**
Highest possible value*/
export const IOC_DESCEX_NUMHDIO_MAXIMUM: any = '31'

/**
Smallest value*/
export const IOC_DESCEX_NUMHDIO_MINIMUM: any = '0'

/**
High drive IO supported by IOC.*/
export const IOC_DESCEX_HDIO: any = '1'
export const IOC_DESCEX_HDIO_M: any = '1'
export const IOC_DESCEX_HDIO_S: any = '1'
/**
HD IO supported by IOC*/
export const IOC_DESCEX_HDIO_PRESENT: any = '1'

/**
HD IO not supported by IOC*/
export const IOC_DESCEX_HDIO_ABSENT: any = '0'

/**
Number of DIOs supported. Total DIOs supported is NUMDIO value +1.*/
export const IOC_DESCEX_NUMDIO: any = '6'
export const IOC_DESCEX_NUMDIO_M: any = '6'
export const IOC_DESCEX_NUMDIO_S: any = '6'
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
export const IOC_IOC0_RESERVED31_M: any = '1'
export const IOC_IOC0_RESERVED31_S: any = '1'
/**
This field controls input hysteresis*/
export const IOC_IOC0_HYSTEN: any = '1'
export const IOC_IOC0_HYSTEN_M: any = '1'
export const IOC_IOC0_HYSTEN_S: any = '1'
/**
Input hysteresis enabled*/
export const IOC_IOC0_HYSTEN_EN: any = '1'

/**
Input hysteresis disabled*/
export const IOC_IOC0_HYSTEN_DIS: any = '0'

/**
This field controls the input capability of DIO*/
export const IOC_IOC0_INPEN: any = '1'
export const IOC_IOC0_INPEN_M: any = '1'
export const IOC_IOC0_INPEN_S: any = '1'
/**
Input enabled*/
export const IOC_IOC0_INPEN_EN: any = '1'

/**
Input disabled*/
export const IOC_IOC0_INPEN_DIS: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_IOC0_RESERVED27: any = '2'
export const IOC_IOC0_RESERVED27_M: any = '2'
export const IOC_IOC0_RESERVED27_S: any = '2'
/**
IO Mode. Setting this to value 0x6 or 0x7 will default to normal IO behavior.*/
export const IOC_IOC0_IOMODE: any = '3'
export const IOC_IOC0_IOMODE_M: any = '3'
export const IOC_IOC0_IOMODE_S: any = '3'
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
export const IOC_IOC0_RESERVED22_M: any = '2'
export const IOC_IOC0_RESERVED22_S: any = '2'
/**
Wakeup configuration from shutdown*/
export const IOC_IOC0_WUCFGSD: any = '2'
export const IOC_IOC0_WUCFGSD_M: any = '2'
export const IOC_IOC0_WUCFGSD_S: any = '2'
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
export const IOC_IOC0_RESERVED19_M: any = '1'
export const IOC_IOC0_RESERVED19_S: any = '1'
/**
Wakeup enable from standby*/
export const IOC_IOC0_WUENSB: any = '1'
export const IOC_IOC0_WUENSB_M: any = '1'
export const IOC_IOC0_WUENSB_S: any = '1'
/**
Wakeup enabled (effective only if EDGEDET is enabled)*/
export const IOC_IOC0_WUENSB_EN: any = '1'

/**
Wakeup disabled*/
export const IOC_IOC0_WUENSB_DIS: any = '0'

/**
Edge detect configuration*/
export const IOC_IOC0_EDGEDET: any = '2'
export const IOC_IOC0_EDGEDET_M: any = '2'
export const IOC_IOC0_EDGEDET_S: any = '2'
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
export const IOC_IOC0_RESERVED15_M: any = '1'
export const IOC_IOC0_RESERVED15_S: any = '1'
/**
Pull control. Setting this to value 0x3 disables pull.*/
export const IOC_IOC0_PULLCTL: any = '2'
export const IOC_IOC0_PULLCTL_M: any = '2'
export const IOC_IOC0_PULLCTL_S: any = '2'
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
export const IOC_IOC0_RESERVED3_M: any = '10'
export const IOC_IOC0_RESERVED3_S: any = '10'
/**
Selects usage of DIO0*/
export const IOC_IOC0_PORTCFG: any = '3'
export const IOC_IOC0_PORTCFG_M: any = '3'
export const IOC_IOC0_PORTCFG_S: any = '3'
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
export const IOC_IOC1_RESERVED31_M: any = '1'
export const IOC_IOC1_RESERVED31_S: any = '1'
/**
This field controls input hysteresis*/
export const IOC_IOC1_HYSTEN: any = '1'
export const IOC_IOC1_HYSTEN_M: any = '1'
export const IOC_IOC1_HYSTEN_S: any = '1'
/**
Input hysteresis enabled*/
export const IOC_IOC1_HYSTEN_EN: any = '1'

/**
Input hysteresis disabled*/
export const IOC_IOC1_HYSTEN_DIS: any = '0'

/**
This field controls the input capability of DIO*/
export const IOC_IOC1_INPEN: any = '1'
export const IOC_IOC1_INPEN_M: any = '1'
export const IOC_IOC1_INPEN_S: any = '1'
/**
Input enabled*/
export const IOC_IOC1_INPEN_EN: any = '1'

/**
Input disabled*/
export const IOC_IOC1_INPEN_DIS: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_IOC1_RESERVED27: any = '2'
export const IOC_IOC1_RESERVED27_M: any = '2'
export const IOC_IOC1_RESERVED27_S: any = '2'
/**
IO Mode. Setting this to value 0x6 or 0x7 will default to normal IO behavior.*/
export const IOC_IOC1_IOMODE: any = '3'
export const IOC_IOC1_IOMODE_M: any = '3'
export const IOC_IOC1_IOMODE_S: any = '3'
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
export const IOC_IOC1_RESERVED22_M: any = '2'
export const IOC_IOC1_RESERVED22_S: any = '2'
/**
Wakeup configuration from shutdown*/
export const IOC_IOC1_WUCFGSD: any = '2'
export const IOC_IOC1_WUCFGSD_M: any = '2'
export const IOC_IOC1_WUCFGSD_S: any = '2'
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
export const IOC_IOC1_RESERVED19_M: any = '1'
export const IOC_IOC1_RESERVED19_S: any = '1'
/**
Wakeup enable from standby*/
export const IOC_IOC1_WUENSB: any = '1'
export const IOC_IOC1_WUENSB_M: any = '1'
export const IOC_IOC1_WUENSB_S: any = '1'
/**
Wakeup enabled (effective only if EDGEDET is enabled)*/
export const IOC_IOC1_WUENSB_EN: any = '1'

/**
Wakeup disabled*/
export const IOC_IOC1_WUENSB_DIS: any = '0'

/**
Edge detect configuration*/
export const IOC_IOC1_EDGEDET: any = '2'
export const IOC_IOC1_EDGEDET_M: any = '2'
export const IOC_IOC1_EDGEDET_S: any = '2'
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
export const IOC_IOC1_RESERVED15_M: any = '1'
export const IOC_IOC1_RESERVED15_S: any = '1'
/**
Pull control. Setting this to value 0x3 disables pull.*/
export const IOC_IOC1_PULLCTL: any = '2'
export const IOC_IOC1_PULLCTL_M: any = '2'
export const IOC_IOC1_PULLCTL_S: any = '2'
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
export const IOC_IOC1_RESERVED3_M: any = '10'
export const IOC_IOC1_RESERVED3_S: any = '10'
/**
Selects usage of DIO1*/
export const IOC_IOC1_PORTCFG: any = '3'
export const IOC_IOC1_PORTCFG_M: any = '3'
export const IOC_IOC1_PORTCFG_S: any = '3'
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
export const IOC_IOC2_RESERVED31_M: any = '1'
export const IOC_IOC2_RESERVED31_S: any = '1'
/**
This field controls input hysteresis*/
export const IOC_IOC2_HYSTEN: any = '1'
export const IOC_IOC2_HYSTEN_M: any = '1'
export const IOC_IOC2_HYSTEN_S: any = '1'
/**
Input hysteresis enabled*/
export const IOC_IOC2_HYSTEN_EN: any = '1'

/**
Input hysteresis disabled*/
export const IOC_IOC2_HYSTEN_DIS: any = '0'

/**
This field controls the input capability of DIO*/
export const IOC_IOC2_INPEN: any = '1'
export const IOC_IOC2_INPEN_M: any = '1'
export const IOC_IOC2_INPEN_S: any = '1'
/**
Input enabled*/
export const IOC_IOC2_INPEN_EN: any = '1'

/**
Input disabled*/
export const IOC_IOC2_INPEN_DIS: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_IOC2_RESERVED27: any = '2'
export const IOC_IOC2_RESERVED27_M: any = '2'
export const IOC_IOC2_RESERVED27_S: any = '2'
/**
IO Mode. Setting this to value 0x6 or 0x7 will default to normal IO behavior.*/
export const IOC_IOC2_IOMODE: any = '3'
export const IOC_IOC2_IOMODE_M: any = '3'
export const IOC_IOC2_IOMODE_S: any = '3'
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
export const IOC_IOC2_RESERVED22_M: any = '2'
export const IOC_IOC2_RESERVED22_S: any = '2'
/**
Wakeup configuration from shutdown*/
export const IOC_IOC2_WUCFGSD: any = '2'
export const IOC_IOC2_WUCFGSD_M: any = '2'
export const IOC_IOC2_WUCFGSD_S: any = '2'
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
export const IOC_IOC2_RESERVED19_M: any = '1'
export const IOC_IOC2_RESERVED19_S: any = '1'
/**
Wakeup enable from standby*/
export const IOC_IOC2_WUENSB: any = '1'
export const IOC_IOC2_WUENSB_M: any = '1'
export const IOC_IOC2_WUENSB_S: any = '1'
/**
Wakeup enabled (effective only if EDGEDET is enabled)*/
export const IOC_IOC2_WUENSB_EN: any = '1'

/**
Wakeup disabled*/
export const IOC_IOC2_WUENSB_DIS: any = '0'

/**
Edge detect configuration*/
export const IOC_IOC2_EDGEDET: any = '2'
export const IOC_IOC2_EDGEDET_M: any = '2'
export const IOC_IOC2_EDGEDET_S: any = '2'
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
export const IOC_IOC2_RESERVED15_M: any = '1'
export const IOC_IOC2_RESERVED15_S: any = '1'
/**
Pull control. Setting this to value 0x3 disables pull.*/
export const IOC_IOC2_PULLCTL: any = '2'
export const IOC_IOC2_PULLCTL_M: any = '2'
export const IOC_IOC2_PULLCTL_S: any = '2'
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
export const IOC_IOC2_RESERVED3_M: any = '10'
export const IOC_IOC2_RESERVED3_S: any = '10'
/**
Selects usage of DIO2*/
export const IOC_IOC2_PORTCFG: any = '3'
export const IOC_IOC2_PORTCFG_M: any = '3'
export const IOC_IOC2_PORTCFG_S: any = '3'
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
export const IOC_IOC3_RESERVED31_M: any = '1'
export const IOC_IOC3_RESERVED31_S: any = '1'
/**
This field controls input hysteresis*/
export const IOC_IOC3_HYSTEN: any = '1'
export const IOC_IOC3_HYSTEN_M: any = '1'
export const IOC_IOC3_HYSTEN_S: any = '1'
/**
Input hysteresis enabled*/
export const IOC_IOC3_HYSTEN_EN: any = '1'

/**
Input hysteresis disabled*/
export const IOC_IOC3_HYSTEN_DIS: any = '0'

/**
This field controls the input capability of DIO*/
export const IOC_IOC3_INPEN: any = '1'
export const IOC_IOC3_INPEN_M: any = '1'
export const IOC_IOC3_INPEN_S: any = '1'
/**
Input enabled*/
export const IOC_IOC3_INPEN_EN: any = '1'

/**
Input disabled*/
export const IOC_IOC3_INPEN_DIS: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_IOC3_RESERVED27: any = '2'
export const IOC_IOC3_RESERVED27_M: any = '2'
export const IOC_IOC3_RESERVED27_S: any = '2'
/**
IO Mode. Setting this to value 0x6 or 0x7 will default to normal IO behavior.*/
export const IOC_IOC3_IOMODE: any = '3'
export const IOC_IOC3_IOMODE_M: any = '3'
export const IOC_IOC3_IOMODE_S: any = '3'
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
export const IOC_IOC3_RESERVED22_M: any = '2'
export const IOC_IOC3_RESERVED22_S: any = '2'
/**
Wakeup configuration from shutdown*/
export const IOC_IOC3_WUCFGSD: any = '2'
export const IOC_IOC3_WUCFGSD_M: any = '2'
export const IOC_IOC3_WUCFGSD_S: any = '2'
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
export const IOC_IOC3_RESERVED19_M: any = '1'
export const IOC_IOC3_RESERVED19_S: any = '1'
/**
Wakeup enable from standby*/
export const IOC_IOC3_WUENSB: any = '1'
export const IOC_IOC3_WUENSB_M: any = '1'
export const IOC_IOC3_WUENSB_S: any = '1'
/**
Wakeup enabled (effective only if EDGEDET is enabled)*/
export const IOC_IOC3_WUENSB_EN: any = '1'

/**
Wakeup disabled*/
export const IOC_IOC3_WUENSB_DIS: any = '0'

/**
Edge detect configuration*/
export const IOC_IOC3_EDGEDET: any = '2'
export const IOC_IOC3_EDGEDET_M: any = '2'
export const IOC_IOC3_EDGEDET_S: any = '2'
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
export const IOC_IOC3_RESERVED15_M: any = '1'
export const IOC_IOC3_RESERVED15_S: any = '1'
/**
Pull control. Setting this to value 0x3 disables pull.*/
export const IOC_IOC3_PULLCTL: any = '2'
export const IOC_IOC3_PULLCTL_M: any = '2'
export const IOC_IOC3_PULLCTL_S: any = '2'
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
export const IOC_IOC3_RESERVED3_M: any = '10'
export const IOC_IOC3_RESERVED3_S: any = '10'
/**
Selects usage of DIO3*/
export const IOC_IOC3_PORTCFG: any = '3'
export const IOC_IOC3_PORTCFG_M: any = '3'
export const IOC_IOC3_PORTCFG_S: any = '3'
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
export const IOC_IOC4_RESERVED31_M: any = '1'
export const IOC_IOC4_RESERVED31_S: any = '1'
/**
This field controls input hysteresis*/
export const IOC_IOC4_HYSTEN: any = '1'
export const IOC_IOC4_HYSTEN_M: any = '1'
export const IOC_IOC4_HYSTEN_S: any = '1'
/**
Input hysteresis enabled*/
export const IOC_IOC4_HYSTEN_EN: any = '1'

/**
Input hysteresis disabled*/
export const IOC_IOC4_HYSTEN_DIS: any = '0'

/**
This field controls the input capability of DIO*/
export const IOC_IOC4_INPEN: any = '1'
export const IOC_IOC4_INPEN_M: any = '1'
export const IOC_IOC4_INPEN_S: any = '1'
/**
Input enabled*/
export const IOC_IOC4_INPEN_EN: any = '1'

/**
Input disabled*/
export const IOC_IOC4_INPEN_DIS: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_IOC4_RESERVED27: any = '2'
export const IOC_IOC4_RESERVED27_M: any = '2'
export const IOC_IOC4_RESERVED27_S: any = '2'
/**
IO Mode. Setting this to value 0x6 or 0x7 will default to normal IO behavior.*/
export const IOC_IOC4_IOMODE: any = '3'
export const IOC_IOC4_IOMODE_M: any = '3'
export const IOC_IOC4_IOMODE_S: any = '3'
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
export const IOC_IOC4_RESERVED22_M: any = '2'
export const IOC_IOC4_RESERVED22_S: any = '2'
/**
Wakeup configuration from shutdown*/
export const IOC_IOC4_WUCFGSD: any = '2'
export const IOC_IOC4_WUCFGSD_M: any = '2'
export const IOC_IOC4_WUCFGSD_S: any = '2'
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
export const IOC_IOC4_RESERVED19_M: any = '1'
export const IOC_IOC4_RESERVED19_S: any = '1'
/**
Wakeup enable from standby*/
export const IOC_IOC4_WUENSB: any = '1'
export const IOC_IOC4_WUENSB_M: any = '1'
export const IOC_IOC4_WUENSB_S: any = '1'
/**
Wakeup enabled (effective only if EDGEDET is enabled)*/
export const IOC_IOC4_WUENSB_EN: any = '1'

/**
Wakeup disabled*/
export const IOC_IOC4_WUENSB_DIS: any = '0'

/**
Edge detect configuration*/
export const IOC_IOC4_EDGEDET: any = '2'
export const IOC_IOC4_EDGEDET_M: any = '2'
export const IOC_IOC4_EDGEDET_S: any = '2'
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
export const IOC_IOC4_RESERVED15_M: any = '1'
export const IOC_IOC4_RESERVED15_S: any = '1'
/**
Pull control. Setting this to value 0x3 disables pull.*/
export const IOC_IOC4_PULLCTL: any = '2'
export const IOC_IOC4_PULLCTL_M: any = '2'
export const IOC_IOC4_PULLCTL_S: any = '2'
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
export const IOC_IOC4_RESERVED3_M: any = '10'
export const IOC_IOC4_RESERVED3_S: any = '10'
/**
Selects usage of DIO4*/
export const IOC_IOC4_PORTCFG: any = '3'
export const IOC_IOC4_PORTCFG_M: any = '3'
export const IOC_IOC4_PORTCFG_S: any = '3'
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
export const IOC_IOC5_RESERVED31_M: any = '1'
export const IOC_IOC5_RESERVED31_S: any = '1'
/**
This field controls input hysteresis*/
export const IOC_IOC5_HYSTEN: any = '1'
export const IOC_IOC5_HYSTEN_M: any = '1'
export const IOC_IOC5_HYSTEN_S: any = '1'
/**
Input hysteresis enabled*/
export const IOC_IOC5_HYSTEN_EN: any = '1'

/**
Input hysteresis disabled*/
export const IOC_IOC5_HYSTEN_DIS: any = '0'

/**
This field controls the input capability of DIO*/
export const IOC_IOC5_INPEN: any = '1'
export const IOC_IOC5_INPEN_M: any = '1'
export const IOC_IOC5_INPEN_S: any = '1'
/**
Input enabled*/
export const IOC_IOC5_INPEN_EN: any = '1'

/**
Input disabled*/
export const IOC_IOC5_INPEN_DIS: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_IOC5_RESERVED27: any = '2'
export const IOC_IOC5_RESERVED27_M: any = '2'
export const IOC_IOC5_RESERVED27_S: any = '2'
/**
IO Mode. Setting this to value 0x6 or 0x7 will default to normal IO behavior.*/
export const IOC_IOC5_IOMODE: any = '3'
export const IOC_IOC5_IOMODE_M: any = '3'
export const IOC_IOC5_IOMODE_S: any = '3'
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
export const IOC_IOC5_RESERVED22_M: any = '2'
export const IOC_IOC5_RESERVED22_S: any = '2'
/**
Wakeup configuration from shutdown*/
export const IOC_IOC5_WUCFGSD: any = '2'
export const IOC_IOC5_WUCFGSD_M: any = '2'
export const IOC_IOC5_WUCFGSD_S: any = '2'
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
export const IOC_IOC5_RESERVED19_M: any = '1'
export const IOC_IOC5_RESERVED19_S: any = '1'
/**
Wakeup enable from standby*/
export const IOC_IOC5_WUENSB: any = '1'
export const IOC_IOC5_WUENSB_M: any = '1'
export const IOC_IOC5_WUENSB_S: any = '1'
/**
Wakeup enabled (effective only if EDGEDET is enabled)*/
export const IOC_IOC5_WUENSB_EN: any = '1'

/**
Wakeup disabled*/
export const IOC_IOC5_WUENSB_DIS: any = '0'

/**
Edge detect configuration*/
export const IOC_IOC5_EDGEDET: any = '2'
export const IOC_IOC5_EDGEDET_M: any = '2'
export const IOC_IOC5_EDGEDET_S: any = '2'
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
export const IOC_IOC5_RESERVED15_M: any = '1'
export const IOC_IOC5_RESERVED15_S: any = '1'
/**
Pull control. Setting this to value 0x3 disables pull.*/
export const IOC_IOC5_PULLCTL: any = '2'
export const IOC_IOC5_PULLCTL_M: any = '2'
export const IOC_IOC5_PULLCTL_S: any = '2'
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
export const IOC_IOC5_RESERVED3_M: any = '10'
export const IOC_IOC5_RESERVED3_S: any = '10'
/**
Selects usage of DIO5*/
export const IOC_IOC5_PORTCFG: any = '3'
export const IOC_IOC5_PORTCFG_M: any = '3'
export const IOC_IOC5_PORTCFG_S: any = '3'
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
export const IOC_IOC6_RESERVED31_M: any = '1'
export const IOC_IOC6_RESERVED31_S: any = '1'
/**
This field controls input hysteresis*/
export const IOC_IOC6_HYSTEN: any = '1'
export const IOC_IOC6_HYSTEN_M: any = '1'
export const IOC_IOC6_HYSTEN_S: any = '1'
/**
Input hysteresis enabled*/
export const IOC_IOC6_HYSTEN_EN: any = '1'

/**
Input hysteresis disabled*/
export const IOC_IOC6_HYSTEN_DIS: any = '0'

/**
This field controls the input capability of DIO*/
export const IOC_IOC6_INPEN: any = '1'
export const IOC_IOC6_INPEN_M: any = '1'
export const IOC_IOC6_INPEN_S: any = '1'
/**
Input enabled*/
export const IOC_IOC6_INPEN_EN: any = '1'

/**
Input disabled*/
export const IOC_IOC6_INPEN_DIS: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_IOC6_RESERVED27: any = '2'
export const IOC_IOC6_RESERVED27_M: any = '2'
export const IOC_IOC6_RESERVED27_S: any = '2'
/**
IO Mode. Setting this to value 0x6 or 0x7 will default to normal IO behavior.*/
export const IOC_IOC6_IOMODE: any = '3'
export const IOC_IOC6_IOMODE_M: any = '3'
export const IOC_IOC6_IOMODE_S: any = '3'
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
export const IOC_IOC6_RESERVED22_M: any = '2'
export const IOC_IOC6_RESERVED22_S: any = '2'
/**
Wakeup configuration from shutdown*/
export const IOC_IOC6_WUCFGSD: any = '2'
export const IOC_IOC6_WUCFGSD_M: any = '2'
export const IOC_IOC6_WUCFGSD_S: any = '2'
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
export const IOC_IOC6_RESERVED19_M: any = '1'
export const IOC_IOC6_RESERVED19_S: any = '1'
/**
Wakeup enable from standby*/
export const IOC_IOC6_WUENSB: any = '1'
export const IOC_IOC6_WUENSB_M: any = '1'
export const IOC_IOC6_WUENSB_S: any = '1'
/**
Wakeup enabled (effective only if EDGEDET is enabled)*/
export const IOC_IOC6_WUENSB_EN: any = '1'

/**
Wakeup disabled*/
export const IOC_IOC6_WUENSB_DIS: any = '0'

/**
Edge detect configuration*/
export const IOC_IOC6_EDGEDET: any = '2'
export const IOC_IOC6_EDGEDET_M: any = '2'
export const IOC_IOC6_EDGEDET_S: any = '2'
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
export const IOC_IOC6_RESERVED15_M: any = '1'
export const IOC_IOC6_RESERVED15_S: any = '1'
/**
Pull control. Setting this to value 0x3 disables pull.*/
export const IOC_IOC6_PULLCTL: any = '2'
export const IOC_IOC6_PULLCTL_M: any = '2'
export const IOC_IOC6_PULLCTL_S: any = '2'
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
export const IOC_IOC6_RESERVED3_M: any = '10'
export const IOC_IOC6_RESERVED3_S: any = '10'
/**
Selects usage of DIO6*/
export const IOC_IOC6_PORTCFG: any = '3'
export const IOC_IOC6_PORTCFG_M: any = '3'
export const IOC_IOC6_PORTCFG_S: any = '3'
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
export const IOC_IOC7_RESERVED31_M: any = '1'
export const IOC_IOC7_RESERVED31_S: any = '1'
/**
This field controls input hysteresis*/
export const IOC_IOC7_HYSTEN: any = '1'
export const IOC_IOC7_HYSTEN_M: any = '1'
export const IOC_IOC7_HYSTEN_S: any = '1'
/**
Input hysteresis enabled*/
export const IOC_IOC7_HYSTEN_EN: any = '1'

/**
Input hysteresis disabled*/
export const IOC_IOC7_HYSTEN_DIS: any = '0'

/**
This field controls the input capability of DIO*/
export const IOC_IOC7_INPEN: any = '1'
export const IOC_IOC7_INPEN_M: any = '1'
export const IOC_IOC7_INPEN_S: any = '1'
/**
Input enabled*/
export const IOC_IOC7_INPEN_EN: any = '1'

/**
Input disabled*/
export const IOC_IOC7_INPEN_DIS: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_IOC7_RESERVED27: any = '2'
export const IOC_IOC7_RESERVED27_M: any = '2'
export const IOC_IOC7_RESERVED27_S: any = '2'
/**
IO Mode. Setting this to value 0x6 or 0x7 will default to normal IO behavior.*/
export const IOC_IOC7_IOMODE: any = '3'
export const IOC_IOC7_IOMODE_M: any = '3'
export const IOC_IOC7_IOMODE_S: any = '3'
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
export const IOC_IOC7_RESERVED22_M: any = '2'
export const IOC_IOC7_RESERVED22_S: any = '2'
/**
Wakeup configuration from shutdown*/
export const IOC_IOC7_WUCFGSD: any = '2'
export const IOC_IOC7_WUCFGSD_M: any = '2'
export const IOC_IOC7_WUCFGSD_S: any = '2'
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
export const IOC_IOC7_RESERVED19_M: any = '1'
export const IOC_IOC7_RESERVED19_S: any = '1'
/**
Wakeup enable from standby*/
export const IOC_IOC7_WUENSB: any = '1'
export const IOC_IOC7_WUENSB_M: any = '1'
export const IOC_IOC7_WUENSB_S: any = '1'
/**
Wakeup enabled (effective only if EDGEDET is enabled)*/
export const IOC_IOC7_WUENSB_EN: any = '1'

/**
Wakeup disabled*/
export const IOC_IOC7_WUENSB_DIS: any = '0'

/**
Edge detect configuration*/
export const IOC_IOC7_EDGEDET: any = '2'
export const IOC_IOC7_EDGEDET_M: any = '2'
export const IOC_IOC7_EDGEDET_S: any = '2'
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
export const IOC_IOC7_RESERVED15_M: any = '1'
export const IOC_IOC7_RESERVED15_S: any = '1'
/**
Pull control. Setting this to value 0x3 disables pull.*/
export const IOC_IOC7_PULLCTL: any = '2'
export const IOC_IOC7_PULLCTL_M: any = '2'
export const IOC_IOC7_PULLCTL_S: any = '2'
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
export const IOC_IOC7_RESERVED3_M: any = '10'
export const IOC_IOC7_RESERVED3_S: any = '10'
/**
Selects usage of DIO7*/
export const IOC_IOC7_PORTCFG: any = '3'
export const IOC_IOC7_PORTCFG_M: any = '3'
export const IOC_IOC7_PORTCFG_S: any = '3'
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
export const IOC_IOC8_RESERVED31_M: any = '1'
export const IOC_IOC8_RESERVED31_S: any = '1'
/**
This field controls input hysteresis*/
export const IOC_IOC8_HYSTEN: any = '1'
export const IOC_IOC8_HYSTEN_M: any = '1'
export const IOC_IOC8_HYSTEN_S: any = '1'
/**
Input hysteresis enabled*/
export const IOC_IOC8_HYSTEN_EN: any = '1'

/**
Input hysteresis disabled*/
export const IOC_IOC8_HYSTEN_DIS: any = '0'

/**
This field controls the input capability of DIO*/
export const IOC_IOC8_INPEN: any = '1'
export const IOC_IOC8_INPEN_M: any = '1'
export const IOC_IOC8_INPEN_S: any = '1'
/**
Input enabled*/
export const IOC_IOC8_INPEN_EN: any = '1'

/**
Input disabled*/
export const IOC_IOC8_INPEN_DIS: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_IOC8_RESERVED27: any = '2'
export const IOC_IOC8_RESERVED27_M: any = '2'
export const IOC_IOC8_RESERVED27_S: any = '2'
/**
IO Mode. Setting this to value 0x6 or 0x7 will default to normal IO behavior.*/
export const IOC_IOC8_IOMODE: any = '3'
export const IOC_IOC8_IOMODE_M: any = '3'
export const IOC_IOC8_IOMODE_S: any = '3'
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
export const IOC_IOC8_RESERVED22_M: any = '2'
export const IOC_IOC8_RESERVED22_S: any = '2'
/**
Wakeup configuration from shutdown*/
export const IOC_IOC8_WUCFGSD: any = '2'
export const IOC_IOC8_WUCFGSD_M: any = '2'
export const IOC_IOC8_WUCFGSD_S: any = '2'
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
export const IOC_IOC8_RESERVED19_M: any = '1'
export const IOC_IOC8_RESERVED19_S: any = '1'
/**
Wakeup enable from standby*/
export const IOC_IOC8_WUENSB: any = '1'
export const IOC_IOC8_WUENSB_M: any = '1'
export const IOC_IOC8_WUENSB_S: any = '1'
/**
Wakeup enabled (effective only if EDGEDET is enabled)*/
export const IOC_IOC8_WUENSB_EN: any = '1'

/**
Wakeup disabled*/
export const IOC_IOC8_WUENSB_DIS: any = '0'

/**
Edge detect configuration*/
export const IOC_IOC8_EDGEDET: any = '2'
export const IOC_IOC8_EDGEDET_M: any = '2'
export const IOC_IOC8_EDGEDET_S: any = '2'
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
export const IOC_IOC8_RESERVED15_M: any = '1'
export const IOC_IOC8_RESERVED15_S: any = '1'
/**
Pull control. Setting this to value 0x3 disables pull.*/
export const IOC_IOC8_PULLCTL: any = '2'
export const IOC_IOC8_PULLCTL_M: any = '2'
export const IOC_IOC8_PULLCTL_S: any = '2'
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
export const IOC_IOC8_RESERVED3_M: any = '10'
export const IOC_IOC8_RESERVED3_S: any = '10'
/**
Selects usage of DIO8*/
export const IOC_IOC8_PORTCFG: any = '3'
export const IOC_IOC8_PORTCFG_M: any = '3'
export const IOC_IOC8_PORTCFG_S: any = '3'
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
export const IOC_IOC9_RESERVED31_M: any = '1'
export const IOC_IOC9_RESERVED31_S: any = '1'
/**
This field controls input hysteresis*/
export const IOC_IOC9_HYSTEN: any = '1'
export const IOC_IOC9_HYSTEN_M: any = '1'
export const IOC_IOC9_HYSTEN_S: any = '1'
/**
Input hysteresis enabled*/
export const IOC_IOC9_HYSTEN_EN: any = '1'

/**
Input hysteresis disabled*/
export const IOC_IOC9_HYSTEN_DIS: any = '0'

/**
This field controls the input capability of DIO*/
export const IOC_IOC9_INPEN: any = '1'
export const IOC_IOC9_INPEN_M: any = '1'
export const IOC_IOC9_INPEN_S: any = '1'
/**
Input enabled*/
export const IOC_IOC9_INPEN_EN: any = '1'

/**
Input disabled*/
export const IOC_IOC9_INPEN_DIS: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_IOC9_RESERVED27: any = '2'
export const IOC_IOC9_RESERVED27_M: any = '2'
export const IOC_IOC9_RESERVED27_S: any = '2'
/**
IO Mode. Setting this to value 0x6 or 0x7 will default to normal IO behavior.*/
export const IOC_IOC9_IOMODE: any = '3'
export const IOC_IOC9_IOMODE_M: any = '3'
export const IOC_IOC9_IOMODE_S: any = '3'
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
export const IOC_IOC9_RESERVED22_M: any = '2'
export const IOC_IOC9_RESERVED22_S: any = '2'
/**
Wakeup configuration from shutdown*/
export const IOC_IOC9_WUCFGSD: any = '2'
export const IOC_IOC9_WUCFGSD_M: any = '2'
export const IOC_IOC9_WUCFGSD_S: any = '2'
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
export const IOC_IOC9_RESERVED19_M: any = '1'
export const IOC_IOC9_RESERVED19_S: any = '1'
/**
Wakeup enable from standby*/
export const IOC_IOC9_WUENSB: any = '1'
export const IOC_IOC9_WUENSB_M: any = '1'
export const IOC_IOC9_WUENSB_S: any = '1'
/**
Wakeup enabled (effective only if EDGEDET is enabled)*/
export const IOC_IOC9_WUENSB_EN: any = '1'

/**
Wakeup disabled*/
export const IOC_IOC9_WUENSB_DIS: any = '0'

/**
Edge detect configuration*/
export const IOC_IOC9_EDGEDET: any = '2'
export const IOC_IOC9_EDGEDET_M: any = '2'
export const IOC_IOC9_EDGEDET_S: any = '2'
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
export const IOC_IOC9_RESERVED15_M: any = '1'
export const IOC_IOC9_RESERVED15_S: any = '1'
/**
Pull control. Setting this to value 0x3 disables pull.*/
export const IOC_IOC9_PULLCTL: any = '2'
export const IOC_IOC9_PULLCTL_M: any = '2'
export const IOC_IOC9_PULLCTL_S: any = '2'
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
export const IOC_IOC9_RESERVED3_M: any = '10'
export const IOC_IOC9_RESERVED3_S: any = '10'
/**
Selects usage of DIO9*/
export const IOC_IOC9_PORTCFG: any = '3'
export const IOC_IOC9_PORTCFG_M: any = '3'
export const IOC_IOC9_PORTCFG_S: any = '3'
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
export const IOC_IOC10_RESERVED31_M: any = '1'
export const IOC_IOC10_RESERVED31_S: any = '1'
/**
This field controls input hysteresis*/
export const IOC_IOC10_HYSTEN: any = '1'
export const IOC_IOC10_HYSTEN_M: any = '1'
export const IOC_IOC10_HYSTEN_S: any = '1'
/**
Input hysteresis enabled*/
export const IOC_IOC10_HYSTEN_EN: any = '1'

/**
Input hysteresis disabled*/
export const IOC_IOC10_HYSTEN_DIS: any = '0'

/**
This field controls the input capability of DIO*/
export const IOC_IOC10_INPEN: any = '1'
export const IOC_IOC10_INPEN_M: any = '1'
export const IOC_IOC10_INPEN_S: any = '1'
/**
Input enabled*/
export const IOC_IOC10_INPEN_EN: any = '1'

/**
Input disabled*/
export const IOC_IOC10_INPEN_DIS: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_IOC10_RESERVED27: any = '2'
export const IOC_IOC10_RESERVED27_M: any = '2'
export const IOC_IOC10_RESERVED27_S: any = '2'
/**
IO Mode. Setting this to value 0x6 or 0x7 will default to normal IO behavior.*/
export const IOC_IOC10_IOMODE: any = '3'
export const IOC_IOC10_IOMODE_M: any = '3'
export const IOC_IOC10_IOMODE_S: any = '3'
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
export const IOC_IOC10_RESERVED22_M: any = '2'
export const IOC_IOC10_RESERVED22_S: any = '2'
/**
Wakeup configuration from shutdown*/
export const IOC_IOC10_WUCFGSD: any = '2'
export const IOC_IOC10_WUCFGSD_M: any = '2'
export const IOC_IOC10_WUCFGSD_S: any = '2'
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
export const IOC_IOC10_RESERVED19_M: any = '1'
export const IOC_IOC10_RESERVED19_S: any = '1'
/**
Wakeup enable from standby*/
export const IOC_IOC10_WUENSB: any = '1'
export const IOC_IOC10_WUENSB_M: any = '1'
export const IOC_IOC10_WUENSB_S: any = '1'
/**
Wakeup enabled (effective only if EDGEDET is enabled)*/
export const IOC_IOC10_WUENSB_EN: any = '1'

/**
Wakeup disabled*/
export const IOC_IOC10_WUENSB_DIS: any = '0'

/**
Edge detect configuration*/
export const IOC_IOC10_EDGEDET: any = '2'
export const IOC_IOC10_EDGEDET_M: any = '2'
export const IOC_IOC10_EDGEDET_S: any = '2'
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
export const IOC_IOC10_RESERVED15_M: any = '1'
export const IOC_IOC10_RESERVED15_S: any = '1'
/**
Pull control. Setting this to value 0x3 disables pull.*/
export const IOC_IOC10_PULLCTL: any = '2'
export const IOC_IOC10_PULLCTL_M: any = '2'
export const IOC_IOC10_PULLCTL_S: any = '2'
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
export const IOC_IOC10_RESERVED3_M: any = '10'
export const IOC_IOC10_RESERVED3_S: any = '10'
/**
Selects usage of DIO10*/
export const IOC_IOC10_PORTCFG: any = '3'
export const IOC_IOC10_PORTCFG_M: any = '3'
export const IOC_IOC10_PORTCFG_S: any = '3'
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
export const IOC_IOC11_RESERVED31_M: any = '1'
export const IOC_IOC11_RESERVED31_S: any = '1'
/**
This field controls input hysteresis*/
export const IOC_IOC11_HYSTEN: any = '1'
export const IOC_IOC11_HYSTEN_M: any = '1'
export const IOC_IOC11_HYSTEN_S: any = '1'
/**
Input hysteresis enabled*/
export const IOC_IOC11_HYSTEN_EN: any = '1'

/**
Input hysteresis disabled*/
export const IOC_IOC11_HYSTEN_DIS: any = '0'

/**
This field controls the input capability of DIO*/
export const IOC_IOC11_INPEN: any = '1'
export const IOC_IOC11_INPEN_M: any = '1'
export const IOC_IOC11_INPEN_S: any = '1'
/**
Input enabled*/
export const IOC_IOC11_INPEN_EN: any = '1'

/**
Input disabled*/
export const IOC_IOC11_INPEN_DIS: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_IOC11_RESERVED27: any = '2'
export const IOC_IOC11_RESERVED27_M: any = '2'
export const IOC_IOC11_RESERVED27_S: any = '2'
/**
IO Mode. Setting this to value 0x6 or 0x7 will default to normal IO behavior.*/
export const IOC_IOC11_IOMODE: any = '3'
export const IOC_IOC11_IOMODE_M: any = '3'
export const IOC_IOC11_IOMODE_S: any = '3'
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
export const IOC_IOC11_RESERVED22_M: any = '2'
export const IOC_IOC11_RESERVED22_S: any = '2'
/**
Wakeup configuration from shutdown*/
export const IOC_IOC11_WUCFGSD: any = '2'
export const IOC_IOC11_WUCFGSD_M: any = '2'
export const IOC_IOC11_WUCFGSD_S: any = '2'
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
export const IOC_IOC11_RESERVED19_M: any = '1'
export const IOC_IOC11_RESERVED19_S: any = '1'
/**
Wakeup enable from standby*/
export const IOC_IOC11_WUENSB: any = '1'
export const IOC_IOC11_WUENSB_M: any = '1'
export const IOC_IOC11_WUENSB_S: any = '1'
/**
Wakeup enabled (effective only if EDGEDET is enabled)*/
export const IOC_IOC11_WUENSB_EN: any = '1'

/**
Wakeup disabled*/
export const IOC_IOC11_WUENSB_DIS: any = '0'

/**
Edge detect configuration*/
export const IOC_IOC11_EDGEDET: any = '2'
export const IOC_IOC11_EDGEDET_M: any = '2'
export const IOC_IOC11_EDGEDET_S: any = '2'
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
export const IOC_IOC11_RESERVED15_M: any = '1'
export const IOC_IOC11_RESERVED15_S: any = '1'
/**
Pull control. Setting this to value 0x3 disables pull.*/
export const IOC_IOC11_PULLCTL: any = '2'
export const IOC_IOC11_PULLCTL_M: any = '2'
export const IOC_IOC11_PULLCTL_S: any = '2'
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
export const IOC_IOC11_RESERVED3_M: any = '10'
export const IOC_IOC11_RESERVED3_S: any = '10'
/**
Selects usage of DIO11*/
export const IOC_IOC11_PORTCFG: any = '3'
export const IOC_IOC11_PORTCFG_M: any = '3'
export const IOC_IOC11_PORTCFG_S: any = '3'
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
export const IOC_IOC12_RESERVED31_M: any = '1'
export const IOC_IOC12_RESERVED31_S: any = '1'
/**
This field controls input hysteresis*/
export const IOC_IOC12_HYSTEN: any = '1'
export const IOC_IOC12_HYSTEN_M: any = '1'
export const IOC_IOC12_HYSTEN_S: any = '1'
/**
Input hysteresis enabled*/
export const IOC_IOC12_HYSTEN_EN: any = '1'

/**
Input hysteresis disabled*/
export const IOC_IOC12_HYSTEN_DIS: any = '0'

/**
This field controls the input capability of DIO*/
export const IOC_IOC12_INPEN: any = '1'
export const IOC_IOC12_INPEN_M: any = '1'
export const IOC_IOC12_INPEN_S: any = '1'
/**
Input enabled*/
export const IOC_IOC12_INPEN_EN: any = '1'

/**
Input disabled*/
export const IOC_IOC12_INPEN_DIS: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_IOC12_RESERVED27: any = '2'
export const IOC_IOC12_RESERVED27_M: any = '2'
export const IOC_IOC12_RESERVED27_S: any = '2'
/**
IO Mode. Setting this to value 0x6 or 0x7 will default to normal IO behavior.*/
export const IOC_IOC12_IOMODE: any = '3'
export const IOC_IOC12_IOMODE_M: any = '3'
export const IOC_IOC12_IOMODE_S: any = '3'
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
export const IOC_IOC12_RESERVED22_M: any = '2'
export const IOC_IOC12_RESERVED22_S: any = '2'
/**
Wakeup configuration from shutdown*/
export const IOC_IOC12_WUCFGSD: any = '2'
export const IOC_IOC12_WUCFGSD_M: any = '2'
export const IOC_IOC12_WUCFGSD_S: any = '2'
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
export const IOC_IOC12_RESERVED19_M: any = '1'
export const IOC_IOC12_RESERVED19_S: any = '1'
/**
Wakeup enable from standby*/
export const IOC_IOC12_WUENSB: any = '1'
export const IOC_IOC12_WUENSB_M: any = '1'
export const IOC_IOC12_WUENSB_S: any = '1'
/**
Wakeup enabled (effective only if EDGEDET is enabled)*/
export const IOC_IOC12_WUENSB_EN: any = '1'

/**
Wakeup disabled*/
export const IOC_IOC12_WUENSB_DIS: any = '0'

/**
Edge detect configuration*/
export const IOC_IOC12_EDGEDET: any = '2'
export const IOC_IOC12_EDGEDET_M: any = '2'
export const IOC_IOC12_EDGEDET_S: any = '2'
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
export const IOC_IOC12_RESERVED15_M: any = '1'
export const IOC_IOC12_RESERVED15_S: any = '1'
/**
Pull control. Setting this to value 0x3 disables pull.*/
export const IOC_IOC12_PULLCTL: any = '2'
export const IOC_IOC12_PULLCTL_M: any = '2'
export const IOC_IOC12_PULLCTL_S: any = '2'
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
export const IOC_IOC12_SLEWRED_M: any = '1'
export const IOC_IOC12_SLEWRED_S: any = '1'
/**
Reduced slew rate*/
export const IOC_IOC12_SLEWRED_REDUCED: any = '1'

/**
Normal slew rate*/
export const IOC_IOC12_SLEWRED_NORMAL: any = '0'

/**
Output current configuration. Writing value 0x3 defaults to 2mA current setting.*/
export const IOC_IOC12_IOCURR: any = '2'
export const IOC_IOC12_IOCURR_M: any = '2'
export const IOC_IOC12_IOCURR_S: any = '2'
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
export const IOC_IOC12_IOSTR_M: any = '2'
export const IOC_IOC12_IOSTR_S: any = '2'
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
export const IOC_IOC12_RESERVED3_M: any = '5'
export const IOC_IOC12_RESERVED3_S: any = '5'
/**
Selects usage of DIO12*/
export const IOC_IOC12_PORTCFG: any = '3'
export const IOC_IOC12_PORTCFG_M: any = '3'
export const IOC_IOC12_PORTCFG_S: any = '3'
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
export const IOC_IOC13_RESERVED31_M: any = '1'
export const IOC_IOC13_RESERVED31_S: any = '1'
/**
This field controls input hysteresis*/
export const IOC_IOC13_HYSTEN: any = '1'
export const IOC_IOC13_HYSTEN_M: any = '1'
export const IOC_IOC13_HYSTEN_S: any = '1'
/**
Input hysteresis enabled*/
export const IOC_IOC13_HYSTEN_EN: any = '1'

/**
Input hysteresis disabled*/
export const IOC_IOC13_HYSTEN_DIS: any = '0'

/**
This field controls the input capability of DIO*/
export const IOC_IOC13_INPEN: any = '1'
export const IOC_IOC13_INPEN_M: any = '1'
export const IOC_IOC13_INPEN_S: any = '1'
/**
Input enabled*/
export const IOC_IOC13_INPEN_EN: any = '1'

/**
Input disabled*/
export const IOC_IOC13_INPEN_DIS: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_IOC13_RESERVED27: any = '2'
export const IOC_IOC13_RESERVED27_M: any = '2'
export const IOC_IOC13_RESERVED27_S: any = '2'
/**
IO Mode. Setting this to value 0x6 or 0x7 will default to normal IO behavior.*/
export const IOC_IOC13_IOMODE: any = '3'
export const IOC_IOC13_IOMODE_M: any = '3'
export const IOC_IOC13_IOMODE_S: any = '3'
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
export const IOC_IOC13_RESERVED22_M: any = '2'
export const IOC_IOC13_RESERVED22_S: any = '2'
/**
Wakeup configuration from shutdown*/
export const IOC_IOC13_WUCFGSD: any = '2'
export const IOC_IOC13_WUCFGSD_M: any = '2'
export const IOC_IOC13_WUCFGSD_S: any = '2'
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
export const IOC_IOC13_RESERVED19_M: any = '1'
export const IOC_IOC13_RESERVED19_S: any = '1'
/**
Wakeup enable from standby*/
export const IOC_IOC13_WUENSB: any = '1'
export const IOC_IOC13_WUENSB_M: any = '1'
export const IOC_IOC13_WUENSB_S: any = '1'
/**
Wakeup enabled (effective only if EDGEDET is enabled)*/
export const IOC_IOC13_WUENSB_EN: any = '1'

/**
Wakeup disabled*/
export const IOC_IOC13_WUENSB_DIS: any = '0'

/**
Edge detect configuration*/
export const IOC_IOC13_EDGEDET: any = '2'
export const IOC_IOC13_EDGEDET_M: any = '2'
export const IOC_IOC13_EDGEDET_S: any = '2'
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
export const IOC_IOC13_RESERVED15_M: any = '1'
export const IOC_IOC13_RESERVED15_S: any = '1'
/**
Pull control. Setting this to value 0x3 disables pull.*/
export const IOC_IOC13_PULLCTL: any = '2'
export const IOC_IOC13_PULLCTL_M: any = '2'
export const IOC_IOC13_PULLCTL_S: any = '2'
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
export const IOC_IOC13_RESERVED3_M: any = '10'
export const IOC_IOC13_RESERVED3_S: any = '10'
/**
Selects usage of DIO13*/
export const IOC_IOC13_PORTCFG: any = '3'
export const IOC_IOC13_PORTCFG_M: any = '3'
export const IOC_IOC13_PORTCFG_S: any = '3'
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
export const IOC_IOC14_RESERVED31_M: any = '1'
export const IOC_IOC14_RESERVED31_S: any = '1'
/**
This field controls input hysteresis*/
export const IOC_IOC14_HYSTEN: any = '1'
export const IOC_IOC14_HYSTEN_M: any = '1'
export const IOC_IOC14_HYSTEN_S: any = '1'
/**
Input hysteresis enabled*/
export const IOC_IOC14_HYSTEN_EN: any = '1'

/**
Input hysteresis disabled*/
export const IOC_IOC14_HYSTEN_DIS: any = '0'

/**
This field controls the input capability of DIO*/
export const IOC_IOC14_INPEN: any = '1'
export const IOC_IOC14_INPEN_M: any = '1'
export const IOC_IOC14_INPEN_S: any = '1'
/**
Input enabled*/
export const IOC_IOC14_INPEN_EN: any = '1'

/**
Input disabled*/
export const IOC_IOC14_INPEN_DIS: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_IOC14_RESERVED27: any = '2'
export const IOC_IOC14_RESERVED27_M: any = '2'
export const IOC_IOC14_RESERVED27_S: any = '2'
/**
IO Mode. Setting this to value 0x6 or 0x7 will default to normal IO behavior.*/
export const IOC_IOC14_IOMODE: any = '3'
export const IOC_IOC14_IOMODE_M: any = '3'
export const IOC_IOC14_IOMODE_S: any = '3'
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
export const IOC_IOC14_RESERVED22_M: any = '2'
export const IOC_IOC14_RESERVED22_S: any = '2'
/**
Wakeup configuration from shutdown*/
export const IOC_IOC14_WUCFGSD: any = '2'
export const IOC_IOC14_WUCFGSD_M: any = '2'
export const IOC_IOC14_WUCFGSD_S: any = '2'
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
export const IOC_IOC14_RESERVED19_M: any = '1'
export const IOC_IOC14_RESERVED19_S: any = '1'
/**
Wakeup enable from standby*/
export const IOC_IOC14_WUENSB: any = '1'
export const IOC_IOC14_WUENSB_M: any = '1'
export const IOC_IOC14_WUENSB_S: any = '1'
/**
Wakeup enabled (effective only if EDGEDET is enabled)*/
export const IOC_IOC14_WUENSB_EN: any = '1'

/**
Wakeup disabled*/
export const IOC_IOC14_WUENSB_DIS: any = '0'

/**
Edge detect configuration*/
export const IOC_IOC14_EDGEDET: any = '2'
export const IOC_IOC14_EDGEDET_M: any = '2'
export const IOC_IOC14_EDGEDET_S: any = '2'
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
export const IOC_IOC14_RESERVED15_M: any = '1'
export const IOC_IOC14_RESERVED15_S: any = '1'
/**
Pull control. Setting this to value 0x3 disables pull.*/
export const IOC_IOC14_PULLCTL: any = '2'
export const IOC_IOC14_PULLCTL_M: any = '2'
export const IOC_IOC14_PULLCTL_S: any = '2'
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
export const IOC_IOC14_RESERVED3_M: any = '10'
export const IOC_IOC14_RESERVED3_S: any = '10'
/**
Selects usage of DIO14*/
export const IOC_IOC14_PORTCFG: any = '3'
export const IOC_IOC14_PORTCFG_M: any = '3'
export const IOC_IOC14_PORTCFG_S: any = '3'
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
export const IOC_IOC15_RESERVED31_M: any = '1'
export const IOC_IOC15_RESERVED31_S: any = '1'
/**
This field controls input hysteresis*/
export const IOC_IOC15_HYSTEN: any = '1'
export const IOC_IOC15_HYSTEN_M: any = '1'
export const IOC_IOC15_HYSTEN_S: any = '1'
/**
Input hysteresis enabled*/
export const IOC_IOC15_HYSTEN_EN: any = '1'

/**
Input hysteresis disabled*/
export const IOC_IOC15_HYSTEN_DIS: any = '0'

/**
This field controls the input capability of DIO*/
export const IOC_IOC15_INPEN: any = '1'
export const IOC_IOC15_INPEN_M: any = '1'
export const IOC_IOC15_INPEN_S: any = '1'
/**
Input enabled*/
export const IOC_IOC15_INPEN_EN: any = '1'

/**
Input disabled*/
export const IOC_IOC15_INPEN_DIS: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_IOC15_RESERVED27: any = '2'
export const IOC_IOC15_RESERVED27_M: any = '2'
export const IOC_IOC15_RESERVED27_S: any = '2'
/**
IO Mode. Setting this to value 0x6 or 0x7 will default to normal IO behavior.*/
export const IOC_IOC15_IOMODE: any = '3'
export const IOC_IOC15_IOMODE_M: any = '3'
export const IOC_IOC15_IOMODE_S: any = '3'
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
export const IOC_IOC15_RESERVED22_M: any = '2'
export const IOC_IOC15_RESERVED22_S: any = '2'
/**
Wakeup configuration from shutdown*/
export const IOC_IOC15_WUCFGSD: any = '2'
export const IOC_IOC15_WUCFGSD_M: any = '2'
export const IOC_IOC15_WUCFGSD_S: any = '2'
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
export const IOC_IOC15_RESERVED19_M: any = '1'
export const IOC_IOC15_RESERVED19_S: any = '1'
/**
Wakeup enable from standby*/
export const IOC_IOC15_WUENSB: any = '1'
export const IOC_IOC15_WUENSB_M: any = '1'
export const IOC_IOC15_WUENSB_S: any = '1'
/**
Wakeup enabled (effective only if EDGEDET is enabled)*/
export const IOC_IOC15_WUENSB_EN: any = '1'

/**
Wakeup disabled*/
export const IOC_IOC15_WUENSB_DIS: any = '0'

/**
Edge detect configuration*/
export const IOC_IOC15_EDGEDET: any = '2'
export const IOC_IOC15_EDGEDET_M: any = '2'
export const IOC_IOC15_EDGEDET_S: any = '2'
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
export const IOC_IOC15_RESERVED15_M: any = '1'
export const IOC_IOC15_RESERVED15_S: any = '1'
/**
Pull control. Setting this to value 0x3 disables pull.*/
export const IOC_IOC15_PULLCTL: any = '2'
export const IOC_IOC15_PULLCTL_M: any = '2'
export const IOC_IOC15_PULLCTL_S: any = '2'
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
export const IOC_IOC15_RESERVED3_M: any = '10'
export const IOC_IOC15_RESERVED3_S: any = '10'
/**
Selects usage of DIO15*/
export const IOC_IOC15_PORTCFG: any = '3'
export const IOC_IOC15_PORTCFG_M: any = '3'
export const IOC_IOC15_PORTCFG_S: any = '3'
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
export const IOC_IOC16_RESERVED31_M: any = '1'
export const IOC_IOC16_RESERVED31_S: any = '1'
/**
This field controls input hysteresis*/
export const IOC_IOC16_HYSTEN: any = '1'
export const IOC_IOC16_HYSTEN_M: any = '1'
export const IOC_IOC16_HYSTEN_S: any = '1'
/**
Input hysteresis enabled*/
export const IOC_IOC16_HYSTEN_EN: any = '1'

/**
Input hysteresis disabled*/
export const IOC_IOC16_HYSTEN_DIS: any = '0'

/**
This field controls the input capability of DIO*/
export const IOC_IOC16_INPEN: any = '1'
export const IOC_IOC16_INPEN_M: any = '1'
export const IOC_IOC16_INPEN_S: any = '1'
/**
Input enabled*/
export const IOC_IOC16_INPEN_EN: any = '1'

/**
Input disabled*/
export const IOC_IOC16_INPEN_DIS: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_IOC16_RESERVED27: any = '2'
export const IOC_IOC16_RESERVED27_M: any = '2'
export const IOC_IOC16_RESERVED27_S: any = '2'
/**
IO Mode. Setting this to value 0x6 or 0x7 will default to normal IO behavior.*/
export const IOC_IOC16_IOMODE: any = '3'
export const IOC_IOC16_IOMODE_M: any = '3'
export const IOC_IOC16_IOMODE_S: any = '3'
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
export const IOC_IOC16_RESERVED22_M: any = '2'
export const IOC_IOC16_RESERVED22_S: any = '2'
/**
Wakeup configuration from shutdown*/
export const IOC_IOC16_WUCFGSD: any = '2'
export const IOC_IOC16_WUCFGSD_M: any = '2'
export const IOC_IOC16_WUCFGSD_S: any = '2'
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
export const IOC_IOC16_RESERVED19_M: any = '1'
export const IOC_IOC16_RESERVED19_S: any = '1'
/**
Wakeup enable from standby*/
export const IOC_IOC16_WUENSB: any = '1'
export const IOC_IOC16_WUENSB_M: any = '1'
export const IOC_IOC16_WUENSB_S: any = '1'
/**
Wakeup enabled (effective only if EDGEDET is enabled)*/
export const IOC_IOC16_WUENSB_EN: any = '1'

/**
Wakeup disabled*/
export const IOC_IOC16_WUENSB_DIS: any = '0'

/**
Edge detect configuration*/
export const IOC_IOC16_EDGEDET: any = '2'
export const IOC_IOC16_EDGEDET_M: any = '2'
export const IOC_IOC16_EDGEDET_S: any = '2'
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
export const IOC_IOC16_RESERVED15_M: any = '1'
export const IOC_IOC16_RESERVED15_S: any = '1'
/**
Pull control. Setting this to value 0x3 disables pull.*/
export const IOC_IOC16_PULLCTL: any = '2'
export const IOC_IOC16_PULLCTL_M: any = '2'
export const IOC_IOC16_PULLCTL_S: any = '2'
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
export const IOC_IOC16_SLEWRED_M: any = '1'
export const IOC_IOC16_SLEWRED_S: any = '1'
/**
Reduced slew rate*/
export const IOC_IOC16_SLEWRED_REDUCED: any = '1'

/**
Normal slew rate*/
export const IOC_IOC16_SLEWRED_NORMAL: any = '0'

/**
Output current configuration. Writing value 0x3 defaults to 2mA current setting.*/
export const IOC_IOC16_IOCURR: any = '2'
export const IOC_IOC16_IOCURR_M: any = '2'
export const IOC_IOC16_IOCURR_S: any = '2'
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
export const IOC_IOC16_IOSTR_M: any = '2'
export const IOC_IOC16_IOSTR_S: any = '2'
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
export const IOC_IOC16_RESERVED3_M: any = '5'
export const IOC_IOC16_RESERVED3_S: any = '5'
/**
Selects usage of DIO16*/
export const IOC_IOC16_PORTCFG: any = '3'
export const IOC_IOC16_PORTCFG_M: any = '3'
export const IOC_IOC16_PORTCFG_S: any = '3'
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
export const IOC_IOC17_RESERVED31_M: any = '1'
export const IOC_IOC17_RESERVED31_S: any = '1'
/**
This field controls input hysteresis*/
export const IOC_IOC17_HYSTEN: any = '1'
export const IOC_IOC17_HYSTEN_M: any = '1'
export const IOC_IOC17_HYSTEN_S: any = '1'
/**
Input hysteresis enabled*/
export const IOC_IOC17_HYSTEN_EN: any = '1'

/**
Input hysteresis disabled*/
export const IOC_IOC17_HYSTEN_DIS: any = '0'

/**
This field controls the input capability of DIO*/
export const IOC_IOC17_INPEN: any = '1'
export const IOC_IOC17_INPEN_M: any = '1'
export const IOC_IOC17_INPEN_S: any = '1'
/**
Input enabled*/
export const IOC_IOC17_INPEN_EN: any = '1'

/**
Input disabled*/
export const IOC_IOC17_INPEN_DIS: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_IOC17_RESERVED27: any = '2'
export const IOC_IOC17_RESERVED27_M: any = '2'
export const IOC_IOC17_RESERVED27_S: any = '2'
/**
IO Mode. Setting this to value 0x6 or 0x7 will default to normal IO behavior.*/
export const IOC_IOC17_IOMODE: any = '3'
export const IOC_IOC17_IOMODE_M: any = '3'
export const IOC_IOC17_IOMODE_S: any = '3'
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
export const IOC_IOC17_RESERVED22_M: any = '2'
export const IOC_IOC17_RESERVED22_S: any = '2'
/**
Wakeup configuration from shutdown*/
export const IOC_IOC17_WUCFGSD: any = '2'
export const IOC_IOC17_WUCFGSD_M: any = '2'
export const IOC_IOC17_WUCFGSD_S: any = '2'
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
export const IOC_IOC17_RESERVED19_M: any = '1'
export const IOC_IOC17_RESERVED19_S: any = '1'
/**
Wakeup enable from standby*/
export const IOC_IOC17_WUENSB: any = '1'
export const IOC_IOC17_WUENSB_M: any = '1'
export const IOC_IOC17_WUENSB_S: any = '1'
/**
Wakeup enabled (effective only if EDGEDET is enabled)*/
export const IOC_IOC17_WUENSB_EN: any = '1'

/**
Wakeup disabled*/
export const IOC_IOC17_WUENSB_DIS: any = '0'

/**
Edge detect configuration*/
export const IOC_IOC17_EDGEDET: any = '2'
export const IOC_IOC17_EDGEDET_M: any = '2'
export const IOC_IOC17_EDGEDET_S: any = '2'
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
export const IOC_IOC17_RESERVED15_M: any = '1'
export const IOC_IOC17_RESERVED15_S: any = '1'
/**
Pull control. Setting this to value 0x3 disables pull.*/
export const IOC_IOC17_PULLCTL: any = '2'
export const IOC_IOC17_PULLCTL_M: any = '2'
export const IOC_IOC17_PULLCTL_S: any = '2'
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
export const IOC_IOC17_SLEWRED_M: any = '1'
export const IOC_IOC17_SLEWRED_S: any = '1'
/**
Reduced slew rate*/
export const IOC_IOC17_SLEWRED_REDUCED: any = '1'

/**
Normal slew rate*/
export const IOC_IOC17_SLEWRED_NORMAL: any = '0'

/**
Output current configuration. Writing value 0x3 defaults to 2mA current setting.*/
export const IOC_IOC17_IOCURR: any = '2'
export const IOC_IOC17_IOCURR_M: any = '2'
export const IOC_IOC17_IOCURR_S: any = '2'
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
export const IOC_IOC17_IOSTR_M: any = '2'
export const IOC_IOC17_IOSTR_S: any = '2'
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
export const IOC_IOC17_RESERVED3_M: any = '5'
export const IOC_IOC17_RESERVED3_S: any = '5'
/**
Selects usage of DIO17*/
export const IOC_IOC17_PORTCFG: any = '3'
export const IOC_IOC17_PORTCFG_M: any = '3'
export const IOC_IOC17_PORTCFG_S: any = '3'
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
export const IOC_IOC18_RESERVED31_M: any = '1'
export const IOC_IOC18_RESERVED31_S: any = '1'
/**
This field controls input hysteresis*/
export const IOC_IOC18_HYSTEN: any = '1'
export const IOC_IOC18_HYSTEN_M: any = '1'
export const IOC_IOC18_HYSTEN_S: any = '1'
/**
Input hysteresis enabled*/
export const IOC_IOC18_HYSTEN_EN: any = '1'

/**
Input hysteresis disabled*/
export const IOC_IOC18_HYSTEN_DIS: any = '0'

/**
This field controls the input capability of DIO*/
export const IOC_IOC18_INPEN: any = '1'
export const IOC_IOC18_INPEN_M: any = '1'
export const IOC_IOC18_INPEN_S: any = '1'
/**
Input enabled*/
export const IOC_IOC18_INPEN_EN: any = '1'

/**
Input disabled*/
export const IOC_IOC18_INPEN_DIS: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_IOC18_RESERVED27: any = '2'
export const IOC_IOC18_RESERVED27_M: any = '2'
export const IOC_IOC18_RESERVED27_S: any = '2'
/**
IO Mode. Setting this to value 0x6 or 0x7 will default to normal IO behavior.*/
export const IOC_IOC18_IOMODE: any = '3'
export const IOC_IOC18_IOMODE_M: any = '3'
export const IOC_IOC18_IOMODE_S: any = '3'
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
export const IOC_IOC18_RESERVED22_M: any = '2'
export const IOC_IOC18_RESERVED22_S: any = '2'
/**
Wakeup configuration from shutdown*/
export const IOC_IOC18_WUCFGSD: any = '2'
export const IOC_IOC18_WUCFGSD_M: any = '2'
export const IOC_IOC18_WUCFGSD_S: any = '2'
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
export const IOC_IOC18_RESERVED19_M: any = '1'
export const IOC_IOC18_RESERVED19_S: any = '1'
/**
Wakeup enable from standby*/
export const IOC_IOC18_WUENSB: any = '1'
export const IOC_IOC18_WUENSB_M: any = '1'
export const IOC_IOC18_WUENSB_S: any = '1'
/**
Wakeup enabled (effective only if EDGEDET is enabled)*/
export const IOC_IOC18_WUENSB_EN: any = '1'

/**
Wakeup disabled*/
export const IOC_IOC18_WUENSB_DIS: any = '0'

/**
Edge detect configuration*/
export const IOC_IOC18_EDGEDET: any = '2'
export const IOC_IOC18_EDGEDET_M: any = '2'
export const IOC_IOC18_EDGEDET_S: any = '2'
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
export const IOC_IOC18_RESERVED15_M: any = '1'
export const IOC_IOC18_RESERVED15_S: any = '1'
/**
Pull control. Setting this to value 0x3 disables pull.*/
export const IOC_IOC18_PULLCTL: any = '2'
export const IOC_IOC18_PULLCTL_M: any = '2'
export const IOC_IOC18_PULLCTL_S: any = '2'
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
export const IOC_IOC18_SLEWRED_M: any = '1'
export const IOC_IOC18_SLEWRED_S: any = '1'
/**
Reduced slew rate*/
export const IOC_IOC18_SLEWRED_REDUCED: any = '1'

/**
Normal slew rate*/
export const IOC_IOC18_SLEWRED_NORMAL: any = '0'

/**
Output current configuration. Writing value 0x3 defaults to 2mA current setting.*/
export const IOC_IOC18_IOCURR: any = '2'
export const IOC_IOC18_IOCURR_M: any = '2'
export const IOC_IOC18_IOCURR_S: any = '2'
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
export const IOC_IOC18_IOSTR_M: any = '2'
export const IOC_IOC18_IOSTR_S: any = '2'
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
export const IOC_IOC18_RESERVED3_M: any = '5'
export const IOC_IOC18_RESERVED3_S: any = '5'
/**
Selects usage of DIO18*/
export const IOC_IOC18_PORTCFG: any = '3'
export const IOC_IOC18_PORTCFG_M: any = '3'
export const IOC_IOC18_PORTCFG_S: any = '3'
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
export const IOC_IOC19_RESERVED31_M: any = '1'
export const IOC_IOC19_RESERVED31_S: any = '1'
/**
This field controls input hysteresis*/
export const IOC_IOC19_HYSTEN: any = '1'
export const IOC_IOC19_HYSTEN_M: any = '1'
export const IOC_IOC19_HYSTEN_S: any = '1'
/**
Input hysteresis enabled*/
export const IOC_IOC19_HYSTEN_EN: any = '1'

/**
Input hysteresis disabled*/
export const IOC_IOC19_HYSTEN_DIS: any = '0'

/**
This field controls the input capability of DIO*/
export const IOC_IOC19_INPEN: any = '1'
export const IOC_IOC19_INPEN_M: any = '1'
export const IOC_IOC19_INPEN_S: any = '1'
/**
Input enabled*/
export const IOC_IOC19_INPEN_EN: any = '1'

/**
Input disabled*/
export const IOC_IOC19_INPEN_DIS: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_IOC19_RESERVED27: any = '2'
export const IOC_IOC19_RESERVED27_M: any = '2'
export const IOC_IOC19_RESERVED27_S: any = '2'
/**
IO Mode. Setting this to value 0x6 or 0x7 will default to normal IO behavior.*/
export const IOC_IOC19_IOMODE: any = '3'
export const IOC_IOC19_IOMODE_M: any = '3'
export const IOC_IOC19_IOMODE_S: any = '3'
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
export const IOC_IOC19_RESERVED22_M: any = '2'
export const IOC_IOC19_RESERVED22_S: any = '2'
/**
Wakeup configuration from shutdown*/
export const IOC_IOC19_WUCFGSD: any = '2'
export const IOC_IOC19_WUCFGSD_M: any = '2'
export const IOC_IOC19_WUCFGSD_S: any = '2'
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
export const IOC_IOC19_RESERVED19_M: any = '1'
export const IOC_IOC19_RESERVED19_S: any = '1'
/**
Wakeup enable from standby*/
export const IOC_IOC19_WUENSB: any = '1'
export const IOC_IOC19_WUENSB_M: any = '1'
export const IOC_IOC19_WUENSB_S: any = '1'
/**
Wakeup enabled (effective only if EDGEDET is enabled)*/
export const IOC_IOC19_WUENSB_EN: any = '1'

/**
Wakeup disabled*/
export const IOC_IOC19_WUENSB_DIS: any = '0'

/**
Edge detect configuration*/
export const IOC_IOC19_EDGEDET: any = '2'
export const IOC_IOC19_EDGEDET_M: any = '2'
export const IOC_IOC19_EDGEDET_S: any = '2'
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
export const IOC_IOC19_RESERVED15_M: any = '1'
export const IOC_IOC19_RESERVED15_S: any = '1'
/**
Pull control. Setting this to value 0x3 disables pull.*/
export const IOC_IOC19_PULLCTL: any = '2'
export const IOC_IOC19_PULLCTL_M: any = '2'
export const IOC_IOC19_PULLCTL_S: any = '2'
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
export const IOC_IOC19_SLEWRED_M: any = '1'
export const IOC_IOC19_SLEWRED_S: any = '1'
/**
Reduced slew rate*/
export const IOC_IOC19_SLEWRED_REDUCED: any = '1'

/**
Normal slew rate*/
export const IOC_IOC19_SLEWRED_NORMAL: any = '0'

/**
Output current configuration. Writing value 0x3 defaults to 2mA current setting.*/
export const IOC_IOC19_IOCURR: any = '2'
export const IOC_IOC19_IOCURR_M: any = '2'
export const IOC_IOC19_IOCURR_S: any = '2'
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
export const IOC_IOC19_IOSTR_M: any = '2'
export const IOC_IOC19_IOSTR_S: any = '2'
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
export const IOC_IOC19_RESERVED3_M: any = '5'
export const IOC_IOC19_RESERVED3_S: any = '5'
/**
Selects usage of DIO19*/
export const IOC_IOC19_PORTCFG: any = '3'
export const IOC_IOC19_PORTCFG_M: any = '3'
export const IOC_IOC19_PORTCFG_S: any = '3'
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
export const IOC_IOC20_RESERVED31_M: any = '1'
export const IOC_IOC20_RESERVED31_S: any = '1'
/**
This field controls input hysteresis*/
export const IOC_IOC20_HYSTEN: any = '1'
export const IOC_IOC20_HYSTEN_M: any = '1'
export const IOC_IOC20_HYSTEN_S: any = '1'
/**
Input hysteresis enabled*/
export const IOC_IOC20_HYSTEN_EN: any = '1'

/**
Input hysteresis disabled*/
export const IOC_IOC20_HYSTEN_DIS: any = '0'

/**
This field controls the input capability of DIO*/
export const IOC_IOC20_INPEN: any = '1'
export const IOC_IOC20_INPEN_M: any = '1'
export const IOC_IOC20_INPEN_S: any = '1'
/**
Input enabled*/
export const IOC_IOC20_INPEN_EN: any = '1'

/**
Input disabled*/
export const IOC_IOC20_INPEN_DIS: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_IOC20_RESERVED27: any = '2'
export const IOC_IOC20_RESERVED27_M: any = '2'
export const IOC_IOC20_RESERVED27_S: any = '2'
/**
IO Mode. Setting this to value 0x6 or 0x7 will default to normal IO behavior.*/
export const IOC_IOC20_IOMODE: any = '3'
export const IOC_IOC20_IOMODE_M: any = '3'
export const IOC_IOC20_IOMODE_S: any = '3'
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
export const IOC_IOC20_RESERVED22_M: any = '2'
export const IOC_IOC20_RESERVED22_S: any = '2'
/**
Wakeup configuration from shutdown*/
export const IOC_IOC20_WUCFGSD: any = '2'
export const IOC_IOC20_WUCFGSD_M: any = '2'
export const IOC_IOC20_WUCFGSD_S: any = '2'
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
export const IOC_IOC20_RESERVED19_M: any = '1'
export const IOC_IOC20_RESERVED19_S: any = '1'
/**
Wakeup enable from standby*/
export const IOC_IOC20_WUENSB: any = '1'
export const IOC_IOC20_WUENSB_M: any = '1'
export const IOC_IOC20_WUENSB_S: any = '1'
/**
Wakeup enabled (effective only if EDGEDET is enabled)*/
export const IOC_IOC20_WUENSB_EN: any = '1'

/**
Wakeup disabled*/
export const IOC_IOC20_WUENSB_DIS: any = '0'

/**
Edge detect configuration*/
export const IOC_IOC20_EDGEDET: any = '2'
export const IOC_IOC20_EDGEDET_M: any = '2'
export const IOC_IOC20_EDGEDET_S: any = '2'
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
export const IOC_IOC20_RESERVED15_M: any = '1'
export const IOC_IOC20_RESERVED15_S: any = '1'
/**
Pull control. Setting this to value 0x3 disables pull.*/
export const IOC_IOC20_PULLCTL: any = '2'
export const IOC_IOC20_PULLCTL_M: any = '2'
export const IOC_IOC20_PULLCTL_S: any = '2'
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
export const IOC_IOC20_RESERVED3_M: any = '10'
export const IOC_IOC20_RESERVED3_S: any = '10'
/**
Selects usage of DIO20*/
export const IOC_IOC20_PORTCFG: any = '3'
export const IOC_IOC20_PORTCFG_M: any = '3'
export const IOC_IOC20_PORTCFG_S: any = '3'
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
export const IOC_IOC21_RESERVED31_M: any = '1'
export const IOC_IOC21_RESERVED31_S: any = '1'
/**
This field controls input hysteresis*/
export const IOC_IOC21_HYSTEN: any = '1'
export const IOC_IOC21_HYSTEN_M: any = '1'
export const IOC_IOC21_HYSTEN_S: any = '1'
/**
Input hysteresis enabled*/
export const IOC_IOC21_HYSTEN_EN: any = '1'

/**
Input hysteresis disabled*/
export const IOC_IOC21_HYSTEN_DIS: any = '0'

/**
This field controls the input capability of DIO*/
export const IOC_IOC21_INPEN: any = '1'
export const IOC_IOC21_INPEN_M: any = '1'
export const IOC_IOC21_INPEN_S: any = '1'
/**
Input enabled*/
export const IOC_IOC21_INPEN_EN: any = '1'

/**
Input disabled*/
export const IOC_IOC21_INPEN_DIS: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_IOC21_RESERVED27: any = '2'
export const IOC_IOC21_RESERVED27_M: any = '2'
export const IOC_IOC21_RESERVED27_S: any = '2'
/**
IO Mode. Setting this to value 0x6 or 0x7 will default to normal IO behavior.*/
export const IOC_IOC21_IOMODE: any = '3'
export const IOC_IOC21_IOMODE_M: any = '3'
export const IOC_IOC21_IOMODE_S: any = '3'
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
export const IOC_IOC21_RESERVED22_M: any = '2'
export const IOC_IOC21_RESERVED22_S: any = '2'
/**
Wakeup configuration from shutdown*/
export const IOC_IOC21_WUCFGSD: any = '2'
export const IOC_IOC21_WUCFGSD_M: any = '2'
export const IOC_IOC21_WUCFGSD_S: any = '2'
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
export const IOC_IOC21_RESERVED19_M: any = '1'
export const IOC_IOC21_RESERVED19_S: any = '1'
/**
Wakeup enable from standby*/
export const IOC_IOC21_WUENSB: any = '1'
export const IOC_IOC21_WUENSB_M: any = '1'
export const IOC_IOC21_WUENSB_S: any = '1'
/**
Wakeup enabled (effective only if EDGEDET is enabled)*/
export const IOC_IOC21_WUENSB_EN: any = '1'

/**
Wakeup disabled*/
export const IOC_IOC21_WUENSB_DIS: any = '0'

/**
Edge detect configuration*/
export const IOC_IOC21_EDGEDET: any = '2'
export const IOC_IOC21_EDGEDET_M: any = '2'
export const IOC_IOC21_EDGEDET_S: any = '2'
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
export const IOC_IOC21_RESERVED15_M: any = '1'
export const IOC_IOC21_RESERVED15_S: any = '1'
/**
Pull control. Setting this to value 0x3 disables pull.*/
export const IOC_IOC21_PULLCTL: any = '2'
export const IOC_IOC21_PULLCTL_M: any = '2'
export const IOC_IOC21_PULLCTL_S: any = '2'
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
export const IOC_IOC21_RESERVED3_M: any = '10'
export const IOC_IOC21_RESERVED3_S: any = '10'
/**
Selects usage of DIO21*/
export const IOC_IOC21_PORTCFG: any = '3'
export const IOC_IOC21_PORTCFG_M: any = '3'
export const IOC_IOC21_PORTCFG_S: any = '3'
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
export const IOC_IOC22_RESERVED31_M: any = '1'
export const IOC_IOC22_RESERVED31_S: any = '1'
/**
This field controls input hysteresis*/
export const IOC_IOC22_HYSTEN: any = '1'
export const IOC_IOC22_HYSTEN_M: any = '1'
export const IOC_IOC22_HYSTEN_S: any = '1'
/**
Input hysteresis enabled*/
export const IOC_IOC22_HYSTEN_EN: any = '1'

/**
Input hysteresis disabled*/
export const IOC_IOC22_HYSTEN_DIS: any = '0'

/**
This field controls the input capability of DIO*/
export const IOC_IOC22_INPEN: any = '1'
export const IOC_IOC22_INPEN_M: any = '1'
export const IOC_IOC22_INPEN_S: any = '1'
/**
Input enabled*/
export const IOC_IOC22_INPEN_EN: any = '1'

/**
Input disabled*/
export const IOC_IOC22_INPEN_DIS: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_IOC22_RESERVED27: any = '2'
export const IOC_IOC22_RESERVED27_M: any = '2'
export const IOC_IOC22_RESERVED27_S: any = '2'
/**
IO Mode. Setting this to value 0x6 or 0x7 will default to normal IO behavior.*/
export const IOC_IOC22_IOMODE: any = '3'
export const IOC_IOC22_IOMODE_M: any = '3'
export const IOC_IOC22_IOMODE_S: any = '3'
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
export const IOC_IOC22_RESERVED22_M: any = '2'
export const IOC_IOC22_RESERVED22_S: any = '2'
/**
Wakeup configuration from shutdown*/
export const IOC_IOC22_WUCFGSD: any = '2'
export const IOC_IOC22_WUCFGSD_M: any = '2'
export const IOC_IOC22_WUCFGSD_S: any = '2'
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
export const IOC_IOC22_RESERVED19_M: any = '1'
export const IOC_IOC22_RESERVED19_S: any = '1'
/**
Wakeup enable from standby*/
export const IOC_IOC22_WUENSB: any = '1'
export const IOC_IOC22_WUENSB_M: any = '1'
export const IOC_IOC22_WUENSB_S: any = '1'
/**
Wakeup enabled (effective only if EDGEDET is enabled)*/
export const IOC_IOC22_WUENSB_EN: any = '1'

/**
Wakeup disabled*/
export const IOC_IOC22_WUENSB_DIS: any = '0'

/**
Edge detect configuration*/
export const IOC_IOC22_EDGEDET: any = '2'
export const IOC_IOC22_EDGEDET_M: any = '2'
export const IOC_IOC22_EDGEDET_S: any = '2'
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
export const IOC_IOC22_RESERVED15_M: any = '1'
export const IOC_IOC22_RESERVED15_S: any = '1'
/**
Pull control. Setting this to value 0x3 disables pull.*/
export const IOC_IOC22_PULLCTL: any = '2'
export const IOC_IOC22_PULLCTL_M: any = '2'
export const IOC_IOC22_PULLCTL_S: any = '2'
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
export const IOC_IOC22_RESERVED3_M: any = '10'
export const IOC_IOC22_RESERVED3_S: any = '10'
/**
Selects usage of DIO22*/
export const IOC_IOC22_PORTCFG: any = '3'
export const IOC_IOC22_PORTCFG_M: any = '3'
export const IOC_IOC22_PORTCFG_S: any = '3'
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
export const IOC_IOC23_RESERVED31_M: any = '1'
export const IOC_IOC23_RESERVED31_S: any = '1'
/**
This field controls input hysteresis*/
export const IOC_IOC23_HYSTEN: any = '1'
export const IOC_IOC23_HYSTEN_M: any = '1'
export const IOC_IOC23_HYSTEN_S: any = '1'
/**
Input hysteresis enabled*/
export const IOC_IOC23_HYSTEN_EN: any = '1'

/**
Input hysteresis disabled*/
export const IOC_IOC23_HYSTEN_DIS: any = '0'

/**
This field controls the input capability of DIO*/
export const IOC_IOC23_INPEN: any = '1'
export const IOC_IOC23_INPEN_M: any = '1'
export const IOC_IOC23_INPEN_S: any = '1'
/**
Input enabled*/
export const IOC_IOC23_INPEN_EN: any = '1'

/**
Input disabled*/
export const IOC_IOC23_INPEN_DIS: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_IOC23_RESERVED27: any = '2'
export const IOC_IOC23_RESERVED27_M: any = '2'
export const IOC_IOC23_RESERVED27_S: any = '2'
/**
IO Mode. Setting this to value 0x6 or 0x7 will default to normal IO behavior.*/
export const IOC_IOC23_IOMODE: any = '3'
export const IOC_IOC23_IOMODE_M: any = '3'
export const IOC_IOC23_IOMODE_S: any = '3'
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
export const IOC_IOC23_RESERVED22_M: any = '2'
export const IOC_IOC23_RESERVED22_S: any = '2'
/**
Wakeup configuration from shutdown*/
export const IOC_IOC23_WUCFGSD: any = '2'
export const IOC_IOC23_WUCFGSD_M: any = '2'
export const IOC_IOC23_WUCFGSD_S: any = '2'
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
export const IOC_IOC23_RESERVED19_M: any = '1'
export const IOC_IOC23_RESERVED19_S: any = '1'
/**
Wakeup enable from standby*/
export const IOC_IOC23_WUENSB: any = '1'
export const IOC_IOC23_WUENSB_M: any = '1'
export const IOC_IOC23_WUENSB_S: any = '1'
/**
Wakeup enabled (effective only if EDGEDET is enabled)*/
export const IOC_IOC23_WUENSB_EN: any = '1'

/**
Wakeup disabled*/
export const IOC_IOC23_WUENSB_DIS: any = '0'

/**
Edge detect configuration*/
export const IOC_IOC23_EDGEDET: any = '2'
export const IOC_IOC23_EDGEDET_M: any = '2'
export const IOC_IOC23_EDGEDET_S: any = '2'
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
export const IOC_IOC23_RESERVED15_M: any = '1'
export const IOC_IOC23_RESERVED15_S: any = '1'
/**
Pull control. Setting this to value 0x3 disables pull.*/
export const IOC_IOC23_PULLCTL: any = '2'
export const IOC_IOC23_PULLCTL_M: any = '2'
export const IOC_IOC23_PULLCTL_S: any = '2'
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
export const IOC_IOC23_RESERVED3_M: any = '10'
export const IOC_IOC23_RESERVED3_S: any = '10'
/**
Selects usage of DIO23*/
export const IOC_IOC23_PORTCFG: any = '3'
export const IOC_IOC23_PORTCFG_M: any = '3'
export const IOC_IOC23_PORTCFG_S: any = '3'
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
export const IOC_IOC24_RESERVED31_M: any = '1'
export const IOC_IOC24_RESERVED31_S: any = '1'
/**
This field controls input hysteresis*/
export const IOC_IOC24_HYSTEN: any = '1'
export const IOC_IOC24_HYSTEN_M: any = '1'
export const IOC_IOC24_HYSTEN_S: any = '1'
/**
Input hysteresis enabled*/
export const IOC_IOC24_HYSTEN_EN: any = '1'

/**
Input hysteresis disabled*/
export const IOC_IOC24_HYSTEN_DIS: any = '0'

/**
This field controls the input capability of DIO*/
export const IOC_IOC24_INPEN: any = '1'
export const IOC_IOC24_INPEN_M: any = '1'
export const IOC_IOC24_INPEN_S: any = '1'
/**
Input enabled*/
export const IOC_IOC24_INPEN_EN: any = '1'

/**
Input disabled*/
export const IOC_IOC24_INPEN_DIS: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_IOC24_RESERVED27: any = '2'
export const IOC_IOC24_RESERVED27_M: any = '2'
export const IOC_IOC24_RESERVED27_S: any = '2'
/**
IO Mode. Setting this to value 0x6 or 0x7 will default to normal IO behavior.*/
export const IOC_IOC24_IOMODE: any = '3'
export const IOC_IOC24_IOMODE_M: any = '3'
export const IOC_IOC24_IOMODE_S: any = '3'
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
export const IOC_IOC24_RESERVED22_M: any = '2'
export const IOC_IOC24_RESERVED22_S: any = '2'
/**
Wakeup configuration from shutdown*/
export const IOC_IOC24_WUCFGSD: any = '2'
export const IOC_IOC24_WUCFGSD_M: any = '2'
export const IOC_IOC24_WUCFGSD_S: any = '2'
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
export const IOC_IOC24_RESERVED19_M: any = '1'
export const IOC_IOC24_RESERVED19_S: any = '1'
/**
Wakeup enable from standby*/
export const IOC_IOC24_WUENSB: any = '1'
export const IOC_IOC24_WUENSB_M: any = '1'
export const IOC_IOC24_WUENSB_S: any = '1'
/**
Wakeup enabled (effective only if EDGEDET is enabled)*/
export const IOC_IOC24_WUENSB_EN: any = '1'

/**
Wakeup disabled*/
export const IOC_IOC24_WUENSB_DIS: any = '0'

/**
Edge detect configuration*/
export const IOC_IOC24_EDGEDET: any = '2'
export const IOC_IOC24_EDGEDET_M: any = '2'
export const IOC_IOC24_EDGEDET_S: any = '2'
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
export const IOC_IOC24_RESERVED15_M: any = '1'
export const IOC_IOC24_RESERVED15_S: any = '1'
/**
Pull control. Setting this to value 0x3 disables pull.*/
export const IOC_IOC24_PULLCTL: any = '2'
export const IOC_IOC24_PULLCTL_M: any = '2'
export const IOC_IOC24_PULLCTL_S: any = '2'
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
export const IOC_IOC24_SLEWRED_M: any = '1'
export const IOC_IOC24_SLEWRED_S: any = '1'
/**
Reduced slew rate*/
export const IOC_IOC24_SLEWRED_REDUCED: any = '1'

/**
Normal slew rate*/
export const IOC_IOC24_SLEWRED_NORMAL: any = '0'

/**
Output current configuration. Writing value 0x3 defaults to 2mA current setting.*/
export const IOC_IOC24_IOCURR: any = '2'
export const IOC_IOC24_IOCURR_M: any = '2'
export const IOC_IOC24_IOCURR_S: any = '2'
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
export const IOC_IOC24_IOSTR_M: any = '2'
export const IOC_IOC24_IOSTR_S: any = '2'
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
export const IOC_IOC24_RESERVED3_M: any = '5'
export const IOC_IOC24_RESERVED3_S: any = '5'
/**
Selects usage of DIO24*/
export const IOC_IOC24_PORTCFG: any = '3'
export const IOC_IOC24_PORTCFG_M: any = '3'
export const IOC_IOC24_PORTCFG_S: any = '3'
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
export const IOC_IOC25_RESERVED31_M: any = '1'
export const IOC_IOC25_RESERVED31_S: any = '1'
/**
This field controls input hysteresis*/
export const IOC_IOC25_HYSTEN: any = '1'
export const IOC_IOC25_HYSTEN_M: any = '1'
export const IOC_IOC25_HYSTEN_S: any = '1'
/**
Input hysteresis enabled*/
export const IOC_IOC25_HYSTEN_EN: any = '1'

/**
Input hysteresis disabled*/
export const IOC_IOC25_HYSTEN_DIS: any = '0'

/**
This field controls the input capability of DIO*/
export const IOC_IOC25_INPEN: any = '1'
export const IOC_IOC25_INPEN_M: any = '1'
export const IOC_IOC25_INPEN_S: any = '1'
/**
Input enabled*/
export const IOC_IOC25_INPEN_EN: any = '1'

/**
Input disabled*/
export const IOC_IOC25_INPEN_DIS: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_IOC25_RESERVED27: any = '2'
export const IOC_IOC25_RESERVED27_M: any = '2'
export const IOC_IOC25_RESERVED27_S: any = '2'
/**
IO Mode. Setting this to value 0x6 or 0x7 will default to normal IO behavior.*/
export const IOC_IOC25_IOMODE: any = '3'
export const IOC_IOC25_IOMODE_M: any = '3'
export const IOC_IOC25_IOMODE_S: any = '3'
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
export const IOC_IOC25_RESERVED22_M: any = '2'
export const IOC_IOC25_RESERVED22_S: any = '2'
/**
Wakeup configuration from shutdown*/
export const IOC_IOC25_WUCFGSD: any = '2'
export const IOC_IOC25_WUCFGSD_M: any = '2'
export const IOC_IOC25_WUCFGSD_S: any = '2'
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
export const IOC_IOC25_RESERVED19_M: any = '1'
export const IOC_IOC25_RESERVED19_S: any = '1'
/**
Wakeup enable from standby*/
export const IOC_IOC25_WUENSB: any = '1'
export const IOC_IOC25_WUENSB_M: any = '1'
export const IOC_IOC25_WUENSB_S: any = '1'
/**
Wakeup enabled (effective only if EDGEDET is enabled)*/
export const IOC_IOC25_WUENSB_EN: any = '1'

/**
Wakeup disabled*/
export const IOC_IOC25_WUENSB_DIS: any = '0'

/**
Edge detect configuration*/
export const IOC_IOC25_EDGEDET: any = '2'
export const IOC_IOC25_EDGEDET_M: any = '2'
export const IOC_IOC25_EDGEDET_S: any = '2'
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
export const IOC_IOC25_RESERVED15_M: any = '1'
export const IOC_IOC25_RESERVED15_S: any = '1'
/**
Pull control. Setting this to value 0x3 disables pull.*/
export const IOC_IOC25_PULLCTL: any = '2'
export const IOC_IOC25_PULLCTL_M: any = '2'
export const IOC_IOC25_PULLCTL_S: any = '2'
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
export const IOC_IOC25_RESERVED3_M: any = '10'
export const IOC_IOC25_RESERVED3_S: any = '10'
/**
Selects usage of DIO25*/
export const IOC_IOC25_PORTCFG: any = '3'
export const IOC_IOC25_PORTCFG_M: any = '3'
export const IOC_IOC25_PORTCFG_S: any = '3'
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
export const IOC_DTBCFG_RESERVED24_M: any = '8'
export const IOC_DTBCFG_RESERVED24_S: any = '8'
/**
This bit is used to divide DTB[0] output by 8.*/
export const IOC_DTBCFG_DTB0DIV: any = '1'
export const IOC_DTBCFG_DTB0DIV_M: any = '1'
export const IOC_DTBCFG_DTB0DIV_S: any = '1'
/**
Divide DTB[0] output by 8*/
export const IOC_DTBCFG_DTB0DIV_EN: any = '1'

/**
No divide*/
export const IOC_DTBCFG_DTB0DIV_DIS: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_DTBCFG_RESERVED19: any = '4'
export const IOC_DTBCFG_RESERVED19_M: any = '4'
export const IOC_DTBCFG_RESERVED19_S: any = '4'
/**
Selects which 3 DTB lines out of total 16 are routed to DTB pins 15 to 13.*/
export const IOC_DTBCFG_PADSEL: any = '3'
export const IOC_DTBCFG_PADSEL_M: any = '3'
export const IOC_DTBCFG_PADSEL_S: any = '3'
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
export const IOC_DTBCFG_RESERVED13_M: any = '3'
export const IOC_DTBCFG_RESERVED13_S: any = '3'
/**
ULL DTB Mux selection*/
export const IOC_DTBCFG_ULLSEL: any = '5'
export const IOC_DTBCFG_ULLSEL_M: any = '5'
export const IOC_DTBCFG_ULLSEL_S: any = '5'
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_DTBCFG_RESERVED5: any = '3'
export const IOC_DTBCFG_RESERVED5_M: any = '3'
export const IOC_DTBCFG_RESERVED5_S: any = '3'
/**
SVT DTB Mux selection*/
export const IOC_DTBCFG_SVTSEL: any = '5'
export const IOC_DTBCFG_SVTSEL_M: any = '5'
export const IOC_DTBCFG_SVTSEL_S: any = '5'

// -------- REGISTER DTBOE -------- //

/**
DTB output enable*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_DTBOE_RESERVED16: any = '16'
export const IOC_DTBOE_RESERVED16_M: any = '16'
export const IOC_DTBOE_RESERVED16_S: any = '16'
/**
Enables DTB output 15*/
export const IOC_DTBOE_EN15: any = '1'
export const IOC_DTBOE_EN15_M: any = '1'
export const IOC_DTBOE_EN15_S: any = '1'
/**
DTB output enabled*/
export const IOC_DTBOE_EN15_EN: any = '1'

/**
DTB output disabled*/
export const IOC_DTBOE_EN15_DIS: any = '0'

/**
Enables DTB output 14*/
export const IOC_DTBOE_EN14: any = '1'
export const IOC_DTBOE_EN14_M: any = '1'
export const IOC_DTBOE_EN14_S: any = '1'
/**
DTB output enabled*/
export const IOC_DTBOE_EN14_EN: any = '1'

/**
DTB output disabled*/
export const IOC_DTBOE_EN14_DIS: any = '0'

/**
Enables DTB output 13*/
export const IOC_DTBOE_EN13: any = '1'
export const IOC_DTBOE_EN13_M: any = '1'
export const IOC_DTBOE_EN13_S: any = '1'
/**
DTB output enabled*/
export const IOC_DTBOE_EN13_EN: any = '1'

/**
DTB output disabled*/
export const IOC_DTBOE_EN13_DIS: any = '0'

/**
Enables DTB output 12*/
export const IOC_DTBOE_EN12: any = '1'
export const IOC_DTBOE_EN12_M: any = '1'
export const IOC_DTBOE_EN12_S: any = '1'
/**
DTB output enabled*/
export const IOC_DTBOE_EN12_EN: any = '1'

/**
DTB output disabled*/
export const IOC_DTBOE_EN12_DIS: any = '0'

/**
Enables DTB output 11*/
export const IOC_DTBOE_EN11: any = '1'
export const IOC_DTBOE_EN11_M: any = '1'
export const IOC_DTBOE_EN11_S: any = '1'
/**
DTB output enabled*/
export const IOC_DTBOE_EN11_EN: any = '1'

/**
DTB output disabled*/
export const IOC_DTBOE_EN11_DIS: any = '0'

/**
Enables DTB output 10*/
export const IOC_DTBOE_EN10: any = '1'
export const IOC_DTBOE_EN10_M: any = '1'
export const IOC_DTBOE_EN10_S: any = '1'
/**
DTB output enabled*/
export const IOC_DTBOE_EN10_EN: any = '1'

/**
DTB output disabled*/
export const IOC_DTBOE_EN10_DIS: any = '0'

/**
Enables DTB output 9*/
export const IOC_DTBOE_EN9: any = '1'
export const IOC_DTBOE_EN9_M: any = '1'
export const IOC_DTBOE_EN9_S: any = '1'
/**
DTB output enabled*/
export const IOC_DTBOE_EN9_EN: any = '1'

/**
DTB output disabled*/
export const IOC_DTBOE_EN9_DIS: any = '0'

/**
Enables DTB output 8*/
export const IOC_DTBOE_EN8: any = '1'
export const IOC_DTBOE_EN8_M: any = '1'
export const IOC_DTBOE_EN8_S: any = '1'
/**
DTB output enabled*/
export const IOC_DTBOE_EN8_EN: any = '1'

/**
DTB output disabled*/
export const IOC_DTBOE_EN8_DIS: any = '0'

/**
Enables DTB output 7*/
export const IOC_DTBOE_EN7: any = '1'
export const IOC_DTBOE_EN7_M: any = '1'
export const IOC_DTBOE_EN7_S: any = '1'
/**
DTB output enabled*/
export const IOC_DTBOE_EN7_EN: any = '1'

/**
DTB output disabled*/
export const IOC_DTBOE_EN7_DIS: any = '0'

/**
Enables DTB output 6*/
export const IOC_DTBOE_EN6: any = '1'
export const IOC_DTBOE_EN6_M: any = '1'
export const IOC_DTBOE_EN6_S: any = '1'
/**
DTB output enabled*/
export const IOC_DTBOE_EN6_EN: any = '1'

/**
DTB output disabled*/
export const IOC_DTBOE_EN6_DIS: any = '0'

/**
Enables DTB output 5*/
export const IOC_DTBOE_EN5: any = '1'
export const IOC_DTBOE_EN5_M: any = '1'
export const IOC_DTBOE_EN5_S: any = '1'
/**
DTB output enabled*/
export const IOC_DTBOE_EN5_EN: any = '1'

/**
DTB output disabled*/
export const IOC_DTBOE_EN5_DIS: any = '0'

/**
Enables DTB output 4*/
export const IOC_DTBOE_EN4: any = '1'
export const IOC_DTBOE_EN4_M: any = '1'
export const IOC_DTBOE_EN4_S: any = '1'
/**
DTB output enabled*/
export const IOC_DTBOE_EN4_EN: any = '1'

/**
DTB output disabled*/
export const IOC_DTBOE_EN4_DIS: any = '0'

/**
Enables DTB output 3*/
export const IOC_DTBOE_EN3: any = '1'
export const IOC_DTBOE_EN3_M: any = '1'
export const IOC_DTBOE_EN3_S: any = '1'
/**
DTB output enabled*/
export const IOC_DTBOE_EN3_EN: any = '1'

/**
DTB output disabled*/
export const IOC_DTBOE_EN3_DIS: any = '0'

/**
Enables DTB output 2*/
export const IOC_DTBOE_EN2: any = '1'
export const IOC_DTBOE_EN2_M: any = '1'
export const IOC_DTBOE_EN2_S: any = '1'
/**
DTB output enabled*/
export const IOC_DTBOE_EN2_EN: any = '1'

/**
DTB output disabled*/
export const IOC_DTBOE_EN2_DIS: any = '0'

/**
Enables DTB output 1*/
export const IOC_DTBOE_EN1: any = '1'
export const IOC_DTBOE_EN1_M: any = '1'
export const IOC_DTBOE_EN1_S: any = '1'
/**
DTB output enabled*/
export const IOC_DTBOE_EN1_EN: any = '1'

/**
DTB output disabled*/
export const IOC_DTBOE_EN1_DIS: any = '0'

/**
Enables DTB output 0*/
export const IOC_DTBOE_EN0: any = '1'
export const IOC_DTBOE_EN0_M: any = '1'
export const IOC_DTBOE_EN0_S: any = '1'
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
export const IOC_EVTCFG_RESERVED9_M: any = '23'
export const IOC_EVTCFG_RESERVED9_S: any = '23'
/**
Event flag. It is set when edge is detected on selected DIO.

Note: The edge detector flop is cleared for the selected DIO when EVTIFG is cleared by software.*/
export const IOC_EVTCFG_EVTIFG: any = '1'
export const IOC_EVTCFG_EVTIFG_M: any = '1'
export const IOC_EVTCFG_EVTIFG_S: any = '1'
/**
Set ULL event*/
export const IOC_EVTCFG_EVTIFG_SET: any = '1'

/**
Clear ULL event*/
export const IOC_EVTCFG_EVTIFG_CLR: any = '0'

/**
Enables IOC to publish event on AON event fabric when EVTIFG is set. */
export const IOC_EVTCFG_EVTEN: any = '1'
export const IOC_EVTCFG_EVTEN_M: any = '1'
export const IOC_EVTCFG_EVTEN_S: any = '1'
/**
Enable*/
export const IOC_EVTCFG_EVTEN_EN: any = '1'

/**
Disable*/
export const IOC_EVTCFG_EVTEN_DIS: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_EVTCFG_RESERVED6: any = '1'
export const IOC_EVTCFG_RESERVED6_M: any = '1'
export const IOC_EVTCFG_RESERVED6_S: any = '1'
/**
This is used to select DIO for event generation. For example, DIOSEL = 0x0 selects DIO0 and DIOSEL = 0x8 selects DIO8.*/
export const IOC_EVTCFG_DIOSEL: any = '6'
export const IOC_EVTCFG_DIOSEL_M: any = '6'
export const IOC_EVTCFG_DIOSEL_S: any = '6'

// -------- REGISTER TEST -------- //

/**
Test register.*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const IOC_TEST_RESERVED1: any = '31'
export const IOC_TEST_RESERVED1_M: any = '31'
export const IOC_TEST_RESERVED1_S: any = '31'
/**
This is used to drive SWDIO (Serial Wire DIO) output data and output enable from debug sub-system onto DIO12 (Test Data Output) pad.*/
export const IOC_TEST_SEL: any = '1'
export const IOC_TEST_SEL_M: any = '1'
export const IOC_TEST_SEL_S: any = '1'
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
export const IOC_DTBSTAT_RESERVED16_M: any = '16'
export const IOC_DTBSTAT_RESERVED16_S: any = '16'
/**
This bit field captures the final 16-bit value of DTB signals provided from IOC to device pins.*/
export const IOC_DTBSTAT_VAL: any = '16'
export const IOC_DTBSTAT_VAL_M: any = '16'
export const IOC_DTBSTAT_VAL_S: any = '16'

// -------- MODULE LGPT -------- //

export interface LGPT_t {
    DESC: em.$Reg
    DESCEX: em.$Reg
    STARTCFG: em.$Reg
    CTL: em.$Reg
    OUTCTL: em.$Reg
    CNTR: em.$Reg
    PRECFG: em.$Reg
    PREEVENT: em.$Reg
    CHFILT: em.$Reg
    QDECSTAT: em.$Reg
    IRGEN: em.$Reg
    DMA: em.$Reg
    DMARW: em.$Reg
    ADCTRG: em.$Reg
    IOCTL: em.$Reg
    IMASK: em.$Reg
    RIS: em.$Reg
    MIS: em.$Reg
    ISET: em.$Reg
    ICLR: em.$Reg
    IMSET: em.$Reg
    IMCLR: em.$Reg
    EMU: em.$Reg
    C0CFG: em.$Reg
    C1CFG: em.$Reg
    C2CFG: em.$Reg
    PTGT: em.$Reg
    PC0CC: em.$Reg
    PC1CC: em.$Reg
    PC2CC: em.$Reg
    TGT: em.$Reg
    C0CC: em.$Reg
    C1CC: em.$Reg
    C2CC: em.$Reg
    PTGTNC: em.$Reg
    PC0CCNC: em.$Reg
    PC1CCNC: em.$Reg
    PC2CCNC: em.$Reg
    TGTNC: em.$Reg
    C0CCNC: em.$Reg
    C1CCNC: em.$Reg
    C2CCNC: em.$Reg
}

// -------- REGISTER DESC -------- //

/**
Description Register.


This register provides IP module ID, revision information, instance index and standard MMR registers offset.*/
/**
Module identifier used to uniquely identify this IP.

*/
export const LGPT_DESC_MODID: any = '16'
export const LGPT_DESC_MODID_M: any = '16'
export const LGPT_DESC_MODID_S: any = '16'
/**
Standard IP MMR block offset. Standard IP MMRs are the set of from aggregated IRQ registers till DTB.


0: Standard IP MMRs do not exist

0x1-0xF: Standard IP MMRs begin at offset of (64*STDIPOFF from the base IP address)*/
export const LGPT_DESC_STDIPOFF: any = '4'
export const LGPT_DESC_STDIPOFF_M: any = '4'
export const LGPT_DESC_STDIPOFF_S: any = '4'
/**
IP Instance ID number. If multiple instances of IP exist in the device, this field can identify the instance number.*/
export const LGPT_DESC_INSTIDX: any = '4'
export const LGPT_DESC_INSTIDX_M: any = '4'
export const LGPT_DESC_INSTIDX_S: any = '4'
/**
Major revision of IP.*/
export const LGPT_DESC_MAJREV: any = '4'
export const LGPT_DESC_MAJREV_M: any = '4'
export const LGPT_DESC_MAJREV_S: any = '4'
/**
Minor revision of IP.*/
export const LGPT_DESC_MINREV: any = '4'
export const LGPT_DESC_MINREV_M: any = '4'
export const LGPT_DESC_MINREV_S: any = '4'

// -------- REGISTER DESCEX -------- //

/**
Description Extended


This register describes the parameters of the LGPT.*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const LGPT_DESCEX_RESERVED20: any = '12'
export const LGPT_DESCEX_RESERVED20_M: any = '12'
export const LGPT_DESCEX_RESERVED20_S: any = '12'
/**
Has IR logic.*/
export const LGPT_DESCEX_HIR: any = '1'
export const LGPT_DESCEX_HIR_M: any = '1'
export const LGPT_DESCEX_HIR_S: any = '1'
/**
Has Dead-Band, Fault, and Park logic.*/
export const LGPT_DESCEX_HDBF: any = '1'
export const LGPT_DESCEX_HDBF_M: any = '1'
export const LGPT_DESCEX_HDBF_S: any = '1'
/**
Prescale width. The prescaler can maximum be configured to 2^PREW-1.*/
export const LGPT_DESCEX_PREW: any = '4'
export const LGPT_DESCEX_PREW_M: any = '4'
export const LGPT_DESCEX_PREW_S: any = '4'
/**
Has Quadrature Decoder.*/
export const LGPT_DESCEX_HQDEC: any = '1'
export const LGPT_DESCEX_HQDEC_M: any = '1'
export const LGPT_DESCEX_HQDEC_S: any = '1'
/**
Has channel input filter.*/
export const LGPT_DESCEX_HCIF: any = '1'
export const LGPT_DESCEX_HCIF_M: any = '1'
export const LGPT_DESCEX_HCIF_S: any = '1'
/**
Channel input filter size. The prevailing state filter can maximum be configured to 2^CIFS-1.*/
export const LGPT_DESCEX_CIFS: any = '4'
export const LGPT_DESCEX_CIFS_M: any = '4'
export const LGPT_DESCEX_CIFS_S: any = '4'
/**
Has uDMA output and logic.*/
export const LGPT_DESCEX_HDMA: any = '1'
export const LGPT_DESCEX_HDMA_M: any = '1'
export const LGPT_DESCEX_HDMA_S: any = '1'
/**
Has interrupt output and logic.*/
export const LGPT_DESCEX_HINT: any = '1'
export const LGPT_DESCEX_HINT_M: any = '1'
export const LGPT_DESCEX_HINT_S: any = '1'
/**
Counter bit-width.

The maximum counter value is equal to 2^CNTRW-1.
*/
export const LGPT_DESCEX_CNTRW: any = '2'
export const LGPT_DESCEX_CNTRW_M: any = '2'
export const LGPT_DESCEX_CNTRW_S: any = '2'
/**
RESERVED*/
export const LGPT_DESCEX_CNTRW_RESERVED: any = '3'

/**
32-bit counter.*/
export const LGPT_DESCEX_CNTRW_CNTR32: any = '2'

/**
24-bit counter.*/
export const LGPT_DESCEX_CNTRW_CNTR24: any = '1'

/**
16-bit counter.*/
export const LGPT_DESCEX_CNTRW_CNTR16: any = '0'

/**
Number of channels.*/
export const LGPT_DESCEX_NCH: any = '4'
export const LGPT_DESCEX_NCH_M: any = '4'
export const LGPT_DESCEX_NCH_S: any = '4'

// -------- REGISTER STARTCFG -------- //

/**
Start Configuration


This register is only for when CTL.MODE is configured to one of the SYNC modes.
This register defines when this LGPT starts.*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const LGPT_STARTCFG_RESERVED2: any = '30'
export const LGPT_STARTCFG_RESERVED2_M: any = '30'
export const LGPT_STARTCFG_RESERVED2_S: any = '30'
/**
LGPT start

*/
export const LGPT_STARTCFG_LGPT0: any = '2'
export const LGPT_STARTCFG_LGPT0_M: any = '2'
export const LGPT_STARTCFG_LGPT0_S: any = '2'
/**
LGPT starts when synchronized event input is high. Configured here EVTSVT.LGPTSYNCSEL.*/
export const LGPT_STARTCFG_LGPT0_EV_SYNC: any = '0'


// -------- REGISTER CTL -------- //

/**
Timer Control*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const LGPT_CTL_RESERVED11: any = '21'
export const LGPT_CTL_RESERVED11_M: any = '21'
export const LGPT_CTL_RESERVED11_S: any = '21'
/**
Channel 2 reset.*/
export const LGPT_CTL_C2RST: any = '1'
export const LGPT_CTL_C2RST_M: any = '1'
export const LGPT_CTL_C2RST_S: any = '1'
/**
Reset C2CC, PC2CC, and C2CFG.*/
export const LGPT_CTL_C2RST_RST: any = '1'

/**
No effect.*/
export const LGPT_CTL_C2RST_NOEFF: any = '0'

/**
Channel 1 reset.*/
export const LGPT_CTL_C1RST: any = '1'
export const LGPT_CTL_C1RST_M: any = '1'
export const LGPT_CTL_C1RST_S: any = '1'
/**
Reset C1CC, PC1CC, and C1CFG.*/
export const LGPT_CTL_C1RST_RST: any = '1'

/**
No effect.*/
export const LGPT_CTL_C1RST_NOEFF: any = '0'

/**
Channel 0 reset.*/
export const LGPT_CTL_C0RST: any = '1'
export const LGPT_CTL_C0RST_M: any = '1'
export const LGPT_CTL_C0RST_S: any = '1'
/**
Reset C0CC, PC0CC, and C0CFG.*/
export const LGPT_CTL_C0RST_RST: any = '1'

/**
No effect.*/
export const LGPT_CTL_C0RST_NOEFF: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const LGPT_CTL_RESERVED6: any = '2'
export const LGPT_CTL_RESERVED6_M: any = '2'
export const LGPT_CTL_RESERVED6_S: any = '2'
/**
Interrupt Phase.

This bit field controls when the RIS.TGT and RIS.ZERO interrupts are set.*/
export const LGPT_CTL_INTP: any = '1'
export const LGPT_CTL_INTP_M: any = '1'
export const LGPT_CTL_INTP_S: any = '1'
/**
RIS.TGT and RIS.ZERO are set one timer clock cycle after CNTR = TARGET/ZERO.*/
export const LGPT_CTL_INTP_LATE: any = '1'

/**
RIS.TGT and RIS.ZERO are set one system clock cycle after CNTR = TARGET/ZERO.*/
export const LGPT_CTL_INTP_EARLY: any = '0'

/**
Compare direction.


This bit field controls the direction the counter must have in order to set the [RIS.CnCC] channel interrupts. This bitfield is only relevant if [CnCFG.CCACT] is configured to a compare action. */
export const LGPT_CTL_CMPDIR: any = '2'
export const LGPT_CTL_CMPDIR_M: any = '2'
export const LGPT_CTL_CMPDIR_S: any = '2'
/**
RESERVED*/
export const LGPT_CTL_CMPDIR_RESERVED: any = '3'

/**
Compare RIS fields are only set on down count.*/
export const LGPT_CTL_CMPDIR_DOWN: any = '2'

/**
Compare RIS fields are only set on up count.*/
export const LGPT_CTL_CMPDIR_UP: any = '1'

/**
Compare RIS fields are set on up count and down count.*/
export const LGPT_CTL_CMPDIR_BOTH: any = '0'

/**
Timer mode control


The CNTR restarts from 0 when MODE is written to UP_ONCE, UP_PER, UPDWN_PER, QDEC, SYNC_UP_ONCE, SYNC_UP_PER or SYNC_UPDWN_PER.

When writing MODE all internally queued updates to the channels and TGT is cleared.

When configuring the timer, MODE should be the last thing to configure. If changing timer configuration after MODE has been set is necessary, instructions, if any, given in the configuration registers should be followed. See for example C0CFG.
*/
export const LGPT_CTL_MODE: any = '3'
export const LGPT_CTL_MODE_M: any = '3'
export const LGPT_CTL_MODE_S: any = '3'
/**
Start counting up and down periodically synchronous to another LGPT,  selected within STARTCFG. The timer is started by setting CTL.MODE = UPDWN_PER automatically. 

It then operates as a normal timer in CTL.MODE = UPDWN_PER, counting from 0 to target value and back to 0, repeatedly.

Period =  (target value * 2) * timer clock period*/
export const LGPT_CTL_MODE_SYNC_UPDWN_PER: any = '7'

/**
Start counting up periodically synchronous to another LGPT,  selected within STARTCFG. The timer is started by setting CTL.MODE = UP_PER automatically. 

It then operates as a normal timer in CTL.MODE = UP_PER, incrementing from 0 to target value, repeatedly.

Period =  (target value * 2) * timer clock period
*/
export const LGPT_CTL_MODE_SYNC_UP_PER: any = '6'

/**
Start counting up once synchronous to another LGPT, selected within STARTCFG. The timer is started by setting CTL.MODE = UP_ONCE automatically. 

It then functions as a normal timer in CTL.MODE = UP_ONCE, incrementing from 0 to target value,  then stops and sets MODE to DIS.
*/
export const LGPT_CTL_MODE_SYNC_UP_ONCE: any = '5'

/**
The timer functions as a quadrature decoder. IOC input 0, IOC input 1 and IOC input 2 are used respectivly as PHA, PHB and IDX inputs. IDX can be turned off by setting C2CFG.EDGE = NONE.

The timer clock frequency sets the sample rate of the QDEC logic. This frequency can be configured in PRECFG.*/
export const LGPT_CTL_MODE_QDEC: any = '4'

/**
Count up and down periodically. The timer counts from 0 to target value and back to 0, repeatedly.


Period =  (target value * 2) * timer clock period*/
export const LGPT_CTL_MODE_UPDWN_PER: any = '3'

/**
Count up periodically. The timer increments from 0 to target value, repeatedly.


Period = (target value + 1) * timer clock period*/
export const LGPT_CTL_MODE_UP_PER: any = '2'

/**
Count up once. The timer increments from 0 to target value,  then stops and sets MODE to DIS.*/
export const LGPT_CTL_MODE_UP_ONCE: any = '1'

/**
Disable timer. Updates to counter, channels, and events stop.*/
export const LGPT_CTL_MODE_DIS: any = '0'


// -------- REGISTER OUTCTL -------- //

/**
Output Control


Set and clear individual outputs manually. Manual update of an output takes priority over automatic channel updates to the same output. It is not possible to set and clear an output at the same time, such requests will be neglected.

An output can be automatically cleared, set, toggled, or pulsed by each channel, listed in decreasing order of priority. The action with highest priority happens when multiple channels want to update an output at the same time.

All outputs are connected to the event fabric and the IO controller. The outputs going to the IO controller have an aditional complementary output, this output is the inverted IO output. Both the IO and the IO complementary outputs are passed through an IO Controller, see IOCTL.
*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const LGPT_OUTCTL_RESERVED6: any = '26'
export const LGPT_OUTCTL_RESERVED6_M: any = '26'
export const LGPT_OUTCTL_RESERVED6_S: any = '26'
/**
Set output 2.


Write 1 to set output 2.*/
export const LGPT_OUTCTL_SETOUT2: any = '1'
export const LGPT_OUTCTL_SETOUT2_M: any = '1'
export const LGPT_OUTCTL_SETOUT2_S: any = '1'
/**
Clear output 2.


Write 1 to clear output 2.*/
export const LGPT_OUTCTL_CLROUT2: any = '1'
export const LGPT_OUTCTL_CLROUT2_M: any = '1'
export const LGPT_OUTCTL_CLROUT2_S: any = '1'
/**
Set output 1.


Write 1 to set output 1.*/
export const LGPT_OUTCTL_SETOUT1: any = '1'
export const LGPT_OUTCTL_SETOUT1_M: any = '1'
export const LGPT_OUTCTL_SETOUT1_S: any = '1'
/**
Clear output 1.


Write 1 to clear output 1.*/
export const LGPT_OUTCTL_CLROUT1: any = '1'
export const LGPT_OUTCTL_CLROUT1_M: any = '1'
export const LGPT_OUTCTL_CLROUT1_S: any = '1'
/**
Set output 0.


Write 1 to set output 0.*/
export const LGPT_OUTCTL_SETOUT0: any = '1'
export const LGPT_OUTCTL_SETOUT0_M: any = '1'
export const LGPT_OUTCTL_SETOUT0_S: any = '1'
/**
Clear output 0.


Write 1 to clear output 0.*/
export const LGPT_OUTCTL_CLROUT0: any = '1'
export const LGPT_OUTCTL_CLROUT0_M: any = '1'
export const LGPT_OUTCTL_CLROUT0_S: any = '1'

// -------- REGISTER CNTR -------- //

/**
Counter

The counter of this timer. After CTL.MODE is set the counter updates at the rate specified in PRECFG.*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const LGPT_CNTR_RESERVED16: any = '16'
export const LGPT_CNTR_RESERVED16_M: any = '16'
export const LGPT_CNTR_RESERVED16_S: any = '16'
/**
Current counter value.

If CTL.MODE = QDEC this can be used to set the initial counter value during QDEC.  Writing to CNTR in other modes than QDEC is possible, but may result in unpredictable behavior.*/
export const LGPT_CNTR_VAL: any = '16'
export const LGPT_CNTR_VAL_M: any = '16'
export const LGPT_CNTR_VAL_S: any = '16'

// -------- REGISTER PRECFG -------- //

/**
Clock Prescaler Configuration


This register is used to set the timer clock period. The prescaler is a counter which counts down from the value TICKDIV. When the prescaler counter reaches zero, CNTR is updated. The field TICKDIV effectively divides the prescaler tick source. The timer clock frequency can be calculated as TICKSRC/(TICKDIV+1).*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const LGPT_PRECFG_RESERVED16: any = '16'
export const LGPT_PRECFG_RESERVED16_M: any = '16'
export const LGPT_PRECFG_RESERVED16_S: any = '16'
/**
Tick division.


TICKDIV determines the timer clock frequency for the counter, and timer output updates. The timer clock frequency is the clock selected by TICKSRC divided by (TICKDIV + 1). This inverse is the timer clock period.

0x00: Divide by 1.
0x01: Divide by 2.
... 
0xFF: Divide by 256.*/
export const LGPT_PRECFG_TICKDIV: any = '8'
export const LGPT_PRECFG_TICKDIV_M: any = '8'
export const LGPT_PRECFG_TICKDIV_S: any = '8'
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const LGPT_PRECFG_RESERVED2: any = '6'
export const LGPT_PRECFG_RESERVED2_M: any = '6'
export const LGPT_PRECFG_RESERVED2_S: any = '6'
/**
Prescaler tick source.


TICKSRC determines the source which decrements the prescaler.*/
export const LGPT_PRECFG_TICKSRC: any = '2'
export const LGPT_PRECFG_TICKSRC_M: any = '2'
export const LGPT_PRECFG_TICKSRC_S: any = '2'
/**
Prescaler is updated at both edges of TICKEN.*/
export const LGPT_PRECFG_TICKSRC_BOTH_TICK: any = '3'

/**
Prescaler is updated at the falling edge of TICKEN.*/
export const LGPT_PRECFG_TICKSRC_FALL_TICK: any = '2'

/**
Prescaler is updated at the rising edge of TICKEN.*/
export const LGPT_PRECFG_TICKSRC_RISE_TICK: any = '1'

/**
Prescaler is updated at the system clock.*/
export const LGPT_PRECFG_TICKSRC_CLK: any = '0'


// -------- REGISTER PREEVENT -------- //

/**
Prescaler Event


This register is used to output a logic high signal before the zero crossing of the prescaler counter. The output is routed to the IOC.*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const LGPT_PREEVENT_RESERVED8: any = '24'
export const LGPT_PREEVENT_RESERVED8_M: any = '24'
export const LGPT_PREEVENT_RESERVED8_S: any = '24'
/**
Sets the HIGH time of the prescaler event output. 


Event goes high when the prescaler counter equals VAL. Event goes low when prescaler counter is 0.

Note:
- Can be used to precharge or turn an external component on for a short time before sampling, like in QDEC.
- If there is a requirement to create such events that have very short periods compared to timer clock period, use two timers. One timer acts as prescaler and event generator for another timer.*/
export const LGPT_PREEVENT_VAL: any = '8'
export const LGPT_PREEVENT_VAL_M: any = '8'
export const LGPT_PREEVENT_VAL_S: any = '8'

// -------- REGISTER CHFILT -------- //

/**
Channel Input Filter


This register is used to configure the filter on the channel inputs. The configuration is for all inputs.
The filter is enabled when a channel is in capture mode.

The input to the filter is passed to the edge detection logic if LOAD + 1 consecutive input samples are equal. The filter functions as a down counter, counting down every input sample.
If two consecutive samples are unequal, the filter counter restarts from LOAD.
If the filter counter reaches zero, the input signal is valid and passed to the edge detection logic.

The channel filter should only be configured while the CTL.MODE = DIS. Configuring the filter while the timer is running can result in unexpected behavior.*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const LGPT_CHFILT_RESERVED16: any = '16'
export const LGPT_CHFILT_RESERVED16_M: any = '16'
export const LGPT_CHFILT_RESERVED16_S: any = '16'
/**
The input of the channel filter is passed to the edge detection logic after LOAD + 1 consecutive equal samples.*/
export const LGPT_CHFILT_LOAD: any = '8'
export const LGPT_CHFILT_LOAD_M: any = '8'
export const LGPT_CHFILT_LOAD_S: any = '8'
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const LGPT_CHFILT_RESERVED2: any = '6'
export const LGPT_CHFILT_RESERVED2_M: any = '6'
export const LGPT_CHFILT_RESERVED2_S: any = '6'
/**
Channel filter mode*/
export const LGPT_CHFILT_MODE: any = '2'
export const LGPT_CHFILT_MODE_M: any = '2'
export const LGPT_CHFILT_MODE_S: any = '2'
/**
Filter is clocked by timer clock.*/
export const LGPT_CHFILT_MODE_TIMERCLK: any = '3'

/**
Filter is clocked by PRECFG.TICKSRC.*/
export const LGPT_CHFILT_MODE_TICKSRC: any = '2'

/**
Filter is clocked by system clock.*/
export const LGPT_CHFILT_MODE_CLK: any = '1'

/**
Filter is bypassed. No Filter is used.*/
export const LGPT_CHFILT_MODE_BYPASS: any = '0'


// -------- REGISTER QDECSTAT -------- //

/**
Quadrature Decoder Status


This register can be used during QDEC mode to check the status of the quadrature decoder.*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const LGPT_QDECSTAT_RESERVED2: any = '30'
export const LGPT_QDECSTAT_RESERVED2_M: any = '30'
export const LGPT_QDECSTAT_RESERVED2_S: any = '30'
/**
Double transition*/
export const LGPT_QDECSTAT_DBLTRANS: any = '1'
export const LGPT_QDECSTAT_DBLTRANS_M: any = '1'
export const LGPT_QDECSTAT_DBLTRANS_S: any = '1'
/**
Double transition on phase inputs.*/
export const LGPT_QDECSTAT_DBLTRANS_DBL: any = '1'

/**
Single or no transition on phase inputs.*/
export const LGPT_QDECSTAT_DBLTRANS_NONE: any = '0'

/**
Direction of count during QDEC mode.*/
export const LGPT_QDECSTAT_QDIR: any = '1'
export const LGPT_QDECSTAT_QDIR_M: any = '1'
export const LGPT_QDECSTAT_QDIR_S: any = '1'
/**
Down (PHB leads PHA)*/
export const LGPT_QDECSTAT_QDIR_DOWN: any = '1'

/**
Up (PHA leads PHB)*/
export const LGPT_QDECSTAT_QDIR_UP: any = '0'


// -------- REGISTER IRGEN -------- //

/**
IR Generation


Use this register to generate IR codes. When CTL = 1, an AND gate is enabled between IO output 0 in LGPT0 and IC output 0 in LGPT1. The output of the gate overrides IO output 0 in LGPT0. See OUTCTL for explanation of outputs. 

To generate IR codes let LGPT0 generate the carrier wave on output 0. Set this output as tick input of LGPT1, with PRECFG.TICKSRC = FALL_TICK. 
Generate wanted IR codes by adjusting LGPT1 PTGT and PC0CC. */
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const LGPT_IRGEN_RESERVED1: any = '31'
export const LGPT_IRGEN_RESERVED1_M: any = '31'
export const LGPT_IRGEN_RESERVED1_S: any = '31'
/**
Control

*/
export const LGPT_IRGEN_CTL: any = '1'
export const LGPT_IRGEN_CTL_M: any = '1'
export const LGPT_IRGEN_CTL_S: any = '1'
/**
Enable.*/
export const LGPT_IRGEN_CTL_EN: any = '1'

/**
Disable.*/
export const LGPT_IRGEN_CTL_DIS: any = '0'


// -------- REGISTER DMA -------- //

/**
Direct Memory Accsess


This register is used to enable DMA requests from the timer and set the register addresses which the DMA will access (read/write).
Choose DMA request source by setting the REQ field. The setting of the corresponding interrupt in the RIS registers also sets the DMA request. 
Upon a DMA request defined by REQ an internal address pointer is set to RWADDR*4. Every access to DMARW will increment the internal pointer by 4 such that the next DMA access will be to the next register.
The internal pointer will stop after RWCNTR increments. Further access will be ignored.*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const LGPT_DMA_RESERVED20: any = '12'
export const LGPT_DMA_RESERVED20_M: any = '12'
export const LGPT_DMA_RESERVED20_S: any = '12'
/**
The read/write counter. RWCNTR+1 is the number of times the DMA can access (read/write) the DMARW register. For each DMA access to DMARW an internal counter is incremented, writing to the next address field. RWADDR + 4*RWCNTR is the final register address which can be accessed by the DMA.*/
export const LGPT_DMA_RWCNTR: any = '4'
export const LGPT_DMA_RWCNTR_M: any = '4'
export const LGPT_DMA_RWCNTR_S: any = '4'
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const LGPT_DMA_RESERVED15: any = '1'
export const LGPT_DMA_RESERVED15_M: any = '1'
export const LGPT_DMA_RESERVED15_S: any = '1'
/**
The base address which the DMA access when reading/writing DMARW.  The base address is set by taking the 9 LSB of the physical address and divide by 4.

For example, if you wanted the RWADDR to point to the PTGT register you should set RWADDR = 0x0FC/4.*/
export const LGPT_DMA_RWADDR: any = '7'
export const LGPT_DMA_RWADDR_M: any = '7'
export const LGPT_DMA_RWADDR_S: any = '7'
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const LGPT_DMA_RESERVED4: any = '4'
export const LGPT_DMA_RESERVED4_M: any = '4'
export const LGPT_DMA_RESERVED4_S: any = '4'
/**
*/
export const LGPT_DMA_REQ: any = '4'
export const LGPT_DMA_REQ_M: any = '4'
export const LGPT_DMA_REQ_S: any = '4'
/**
Setting of RIS.C11CC generates a DMA request.*/
export const LGPT_DMA_REQ_C11CC: any = '15'

/**
Setting of RIS.C10CC generates a DMA request.*/
export const LGPT_DMA_REQ_C10CC: any = '14'

/**
Setting of RIS.C9CC generates a DMA request.*/
export const LGPT_DMA_REQ_C9CC: any = '13'

/**
Setting of RIS.C8CC generates a DMA request.*/
export const LGPT_DMA_REQ_C8CC: any = '12'

/**
Setting of RIS.C7CC generates a DMA request.*/
export const LGPT_DMA_REQ_C7CC: any = '11'

/**
Setting of RIS.C6CC generates a DMA request.*/
export const LGPT_DMA_REQ_C6CC: any = '10'

/**
Setting of RIS.C5CC generates a DMA request.*/
export const LGPT_DMA_REQ_C5CC: any = '9'

/**
Setting of RIS.C4CC generates a DMA request.*/
export const LGPT_DMA_REQ_C4CC: any = '8'

/**
Setting of RIS.C3CC generates a DMA request.*/
export const LGPT_DMA_REQ_C3CC: any = '7'

/**
Setting of RIS.C2CC generates a DMA request.*/
export const LGPT_DMA_REQ_C2CC: any = '6'

/**
Setting of RIS.C1CC generates a DMA request.*/
export const LGPT_DMA_REQ_C1CC: any = '5'

/**
Setting of RIS.C0CC generates a DMA request.*/
export const LGPT_DMA_REQ_C0CC: any = '4'

/**
Setting of RIS.FAULT generates a DMA request.*/
export const LGPT_DMA_REQ_FAULT: any = '3'

/**
Setting of RIS.ZERO generates a DMA request.*/
export const LGPT_DMA_REQ_ZERO: any = '2'

/**
Setting of RIS.TGT generates a DMA request.

*/
export const LGPT_DMA_REQ_TGT: any = '1'

/**
Disabled*/
export const LGPT_DMA_REQ_DIS: any = '0'


// -------- REGISTER DMARW -------- //

/**
Direct Memory Access


This register is used by the DMA to access (read/write) register inside this LGPT module.
Each access to this register will increment the internal DMA address counter. See DMA for description.*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const LGPT_DMARW_RESERVED16: any = '16'
export const LGPT_DMARW_RESERVED16_M: any = '16'
export const LGPT_DMARW_RESERVED16_S: any = '16'
/**
DMA read write value.


The value that is read/written from/to the registers.*/
export const LGPT_DMARW_VAL: any = '16'
export const LGPT_DMARW_VAL_M: any = '16'
export const LGPT_DMARW_VAL_S: any = '16'

// -------- REGISTER ADCTRG -------- //

/**
ADC Trigger


This register is used to enable ADC trigger from the timer. 
Choose ADC trigger source by setting the SRC field. The setting of the corresponding interrupt in the RIS registers also sets the ADC trigger. */
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const LGPT_ADCTRG_RESERVED4: any = '28'
export const LGPT_ADCTRG_RESERVED4_M: any = '28'
export const LGPT_ADCTRG_RESERVED4_S: any = '28'
/**
*/
export const LGPT_ADCTRG_SRC: any = '4'
export const LGPT_ADCTRG_SRC_M: any = '4'
export const LGPT_ADCTRG_SRC_S: any = '4'
/**
Setting of RIS.C11CC generates an ADC trigger.*/
export const LGPT_ADCTRG_SRC_C11CC: any = '15'

/**
Setting of RIS.C10CC generates an ADC trigger.*/
export const LGPT_ADCTRG_SRC_C10CC: any = '14'

/**
Setting of RIS.C9CC generates an ADC trigger.*/
export const LGPT_ADCTRG_SRC_C9CC: any = '13'

/**
Setting of RIS.C8CC generates an ADC trigger.*/
export const LGPT_ADCTRG_SRC_C8CC: any = '12'

/**
Setting of RIS.C7CC generates an ADC trigger.*/
export const LGPT_ADCTRG_SRC_C7CC: any = '11'

/**
Setting of RIS.C6CC generates an ADC trigger.*/
export const LGPT_ADCTRG_SRC_C6CC: any = '10'

/**
Setting of RIS.C5CC generates an ADC trigger.*/
export const LGPT_ADCTRG_SRC_C5CC: any = '9'

/**
Setting of RIS.C4CC generates an ADC trigger.*/
export const LGPT_ADCTRG_SRC_C4CC: any = '8'

/**
Setting of RIS.C3CC generates an ADC trigger.*/
export const LGPT_ADCTRG_SRC_C3CC: any = '7'

/**
Setting of RIS.C2CC generates an ADC trigger.*/
export const LGPT_ADCTRG_SRC_C2CC: any = '6'

/**
Setting of RIS.C1CC generates an ADC trigger.*/
export const LGPT_ADCTRG_SRC_C1CC: any = '5'

/**
Setting of RIS.C0CC generates an ADC trigger.*/
export const LGPT_ADCTRG_SRC_C0CC: any = '4'

/**
Setting of RIS.FAULT generates an ADC trigger.*/
export const LGPT_ADCTRG_SRC_FAULT: any = '3'

/**
Setting of RIS.ZERO generates an ADC trigger.*/
export const LGPT_ADCTRG_SRC_ZERO: any = '2'

/**
Setting of RIS.TGT generates an ADC trigger.

*/
export const LGPT_ADCTRG_SRC_TGT: any = '1'

/**
Disabled*/
export const LGPT_ADCTRG_SRC_DIS: any = '0'


// -------- REGISTER IOCTL -------- //

/**
IO Controller


This register overrides the IO outputs.*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const LGPT_IOCTL_RESERVED12: any = '20'
export const LGPT_IOCTL_RESERVED12_M: any = '20'
export const LGPT_IOCTL_RESERVED12_S: any = '20'
/**
IO complementary output 2 control


This bit field controls IO complementary output 2. */
export const LGPT_IOCTL_COUT2: any = '2'
export const LGPT_IOCTL_COUT2_M: any = '2'
export const LGPT_IOCTL_COUT2_S: any = '2'
/**
Inverted value. The IO complementary output is inverted.*/
export const LGPT_IOCTL_COUT2_INV: any = '3'

/**
Driven high. The IO complementary output is driven high.*/
export const LGPT_IOCTL_COUT2_HIGH: any = '2'

/**
Driven low. The IO complementary output is driven low.*/
export const LGPT_IOCTL_COUT2_LOW: any = '1'

/**
Normal output. The IO complementary output is not changed.*/
export const LGPT_IOCTL_COUT2_NRM: any = '0'

/**
IO output 2 control


This bit field controls IO output 2. */
export const LGPT_IOCTL_OUT2: any = '2'
export const LGPT_IOCTL_OUT2_M: any = '2'
export const LGPT_IOCTL_OUT2_S: any = '2'
/**
Inverted value. The IO output is inverted.*/
export const LGPT_IOCTL_OUT2_INV: any = '3'

/**
Driven high. The IO output is driven high.*/
export const LGPT_IOCTL_OUT2_HIGH: any = '2'

/**
Driven low. The IO output is driven low.*/
export const LGPT_IOCTL_OUT2_LOW: any = '1'

/**
Normal output. The IO output is not changed.*/
export const LGPT_IOCTL_OUT2_NRM: any = '0'

/**
IO complementary output 1 control


This bit field controls IO complementary output 1. */
export const LGPT_IOCTL_COUT1: any = '2'
export const LGPT_IOCTL_COUT1_M: any = '2'
export const LGPT_IOCTL_COUT1_S: any = '2'
/**
Inverted value. The IO complementary output is inverted.*/
export const LGPT_IOCTL_COUT1_INV: any = '3'

/**
Driven high. The IO complementary output is driven high.*/
export const LGPT_IOCTL_COUT1_HIGH: any = '2'

/**
Driven low. The IO complementary output is driven low.*/
export const LGPT_IOCTL_COUT1_LOW: any = '1'

/**
Normal output. The IO complementary output is not changed.*/
export const LGPT_IOCTL_COUT1_NRM: any = '0'

/**
IO output 1 control


This bit field controls IO output 1. */
export const LGPT_IOCTL_OUT1: any = '2'
export const LGPT_IOCTL_OUT1_M: any = '2'
export const LGPT_IOCTL_OUT1_S: any = '2'
/**
Inverted value. The IO output is inverted.*/
export const LGPT_IOCTL_OUT1_INV: any = '3'

/**
Driven high. The IO output is driven high.*/
export const LGPT_IOCTL_OUT1_HIGH: any = '2'

/**
Driven low. The IO output is driven low.*/
export const LGPT_IOCTL_OUT1_LOW: any = '1'

/**
Normal output. The IO output is not changed.*/
export const LGPT_IOCTL_OUT1_NRM: any = '0'

/**
IO complementary output 0 control


This bit field controls IO complementary output 0. */
export const LGPT_IOCTL_COUT0: any = '2'
export const LGPT_IOCTL_COUT0_M: any = '2'
export const LGPT_IOCTL_COUT0_S: any = '2'
/**
Inverted value. The IO complementary output is inverted.*/
export const LGPT_IOCTL_COUT0_INV: any = '3'

/**
Driven high. The IO complementary output is driven high.*/
export const LGPT_IOCTL_COUT0_HIGH: any = '2'

/**
Driven low. The IO complementary output is driven low.*/
export const LGPT_IOCTL_COUT0_LOW: any = '1'

/**
Normal output. The IO complementary output is not changed.*/
export const LGPT_IOCTL_COUT0_NRM: any = '0'

/**
IO output 0 control


This bit field controls IO output 0. */
export const LGPT_IOCTL_OUT0: any = '2'
export const LGPT_IOCTL_OUT0_M: any = '2'
export const LGPT_IOCTL_OUT0_S: any = '2'
/**
Inverted value. The IO output is inverted.*/
export const LGPT_IOCTL_OUT0_INV: any = '3'

/**
Driven high. The IO output is driven high.*/
export const LGPT_IOCTL_OUT0_HIGH: any = '2'

/**
Driven low. The IO output is driven low.*/
export const LGPT_IOCTL_OUT0_LOW: any = '1'

/**
Normal output. The IO output is not changed.*/
export const LGPT_IOCTL_OUT0_NRM: any = '0'


// -------- REGISTER IMASK -------- //

/**
Interrupt mask. 


This register selects interrupt sources which are allowed to pass from RIS to MIS when the corresponding bit-fields are set to 1.*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const LGPT_IMASK_RESERVED11: any = '21'
export const LGPT_IMASK_RESERVED11_M: any = '21'
export const LGPT_IMASK_RESERVED11_S: any = '21'
/**
Enable RIS.C2CC interrupt.*/
export const LGPT_IMASK_C2CC: any = '1'
export const LGPT_IMASK_C2CC_M: any = '1'
export const LGPT_IMASK_C2CC_S: any = '1'
/**
Enable*/
export const LGPT_IMASK_C2CC_EN: any = '1'

/**
Disable*/
export const LGPT_IMASK_C2CC_DIS: any = '0'

/**
Enable RIS.C1CC interrupt.*/
export const LGPT_IMASK_C1CC: any = '1'
export const LGPT_IMASK_C1CC_M: any = '1'
export const LGPT_IMASK_C1CC_S: any = '1'
/**
Enable*/
export const LGPT_IMASK_C1CC_EN: any = '1'

/**
Disable*/
export const LGPT_IMASK_C1CC_DIS: any = '0'

/**
Enable RIS.C0CC interrupt.*/
export const LGPT_IMASK_C0CC: any = '1'
export const LGPT_IMASK_C0CC_M: any = '1'
export const LGPT_IMASK_C0CC_S: any = '1'
/**
Enable*/
export const LGPT_IMASK_C0CC_EN: any = '1'

/**
Disable*/
export const LGPT_IMASK_C0CC_DIS: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const LGPT_IMASK_RESERVED7: any = '1'
export const LGPT_IMASK_RESERVED7_M: any = '1'
export const LGPT_IMASK_RESERVED7_S: any = '1'
/**
Enable RIS.FAULT interrupt.*/
export const LGPT_IMASK_FAULT: any = '1'
export const LGPT_IMASK_FAULT_M: any = '1'
export const LGPT_IMASK_FAULT_S: any = '1'
/**
Enable*/
export const LGPT_IMASK_FAULT_EN: any = '1'

/**
Disable*/
export const LGPT_IMASK_FAULT_DIS: any = '0'

/**
Enable RIS.IDX interrupt.*/
export const LGPT_IMASK_IDX: any = '1'
export const LGPT_IMASK_IDX_M: any = '1'
export const LGPT_IMASK_IDX_S: any = '1'
/**
Enable*/
export const LGPT_IMASK_IDX_EN: any = '1'

/**
Disable*/
export const LGPT_IMASK_IDX_DIS: any = '0'

/**
Enable RIS.DIRCHNG interrupt.*/
export const LGPT_IMASK_DIRCHNG: any = '1'
export const LGPT_IMASK_DIRCHNG_M: any = '1'
export const LGPT_IMASK_DIRCHNG_S: any = '1'
/**
Enable*/
export const LGPT_IMASK_DIRCHNG_EN: any = '1'

/**
Disable*/
export const LGPT_IMASK_DIRCHNG_DIS: any = '0'

/**
Enable RIS.CNTRCHNG interrupt.*/
export const LGPT_IMASK_CNTRCHNG: any = '1'
export const LGPT_IMASK_CNTRCHNG_M: any = '1'
export const LGPT_IMASK_CNTRCHNG_S: any = '1'
/**
Enable*/
export const LGPT_IMASK_CNTRCHNG_EN: any = '1'

/**
Disable*/
export const LGPT_IMASK_CNTRCHNG_DIS: any = '0'

/**
Enable RIS.DBLTRANS interrupt.*/
export const LGPT_IMASK_DBLTRANS: any = '1'
export const LGPT_IMASK_DBLTRANS_M: any = '1'
export const LGPT_IMASK_DBLTRANS_S: any = '1'
/**
Enable*/
export const LGPT_IMASK_DBLTRANS_EN: any = '1'

/**
Disable*/
export const LGPT_IMASK_DBLTRANS_DIS: any = '0'

/**
Enable RIS.ZERO interrupt.*/
export const LGPT_IMASK_ZERO: any = '1'
export const LGPT_IMASK_ZERO_M: any = '1'
export const LGPT_IMASK_ZERO_S: any = '1'
/**
Enable*/
export const LGPT_IMASK_ZERO_EN: any = '1'

/**
Disable*/
export const LGPT_IMASK_ZERO_DIS: any = '0'

/**
Enable RIS.TGT interrupt.*/
export const LGPT_IMASK_TGT: any = '1'
export const LGPT_IMASK_TGT_M: any = '1'
export const LGPT_IMASK_TGT_S: any = '1'
/**
Enable*/
export const LGPT_IMASK_TGT_EN: any = '1'

/**
Disable*/
export const LGPT_IMASK_TGT_DIS: any = '0'


// -------- REGISTER RIS -------- //

/**
Raw interrupt status. 


This register reflects the state of all pending interrupts, regardless of masking. This register allows the user to implement a poll scheme. A flag set in this register can be cleared by writing 1 to the corresponding ICLR register bit.*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const LGPT_RIS_RESERVED11: any = '21'
export const LGPT_RIS_RESERVED11_M: any = '21'
export const LGPT_RIS_RESERVED11_S: any = '21'
/**
Status of the C2CC interrupt. The interrupt is set when C2CC has capture or compare event. */
export const LGPT_RIS_C2CC: any = '1'
export const LGPT_RIS_C2CC_M: any = '1'
export const LGPT_RIS_C2CC_S: any = '1'
/**
Set*/
export const LGPT_RIS_C2CC_SET: any = '1'

/**
Cleared*/
export const LGPT_RIS_C2CC_CLR: any = '0'

/**
Status of the C1CC interrupt. The interrupt is set when C1CC has capture or compare event. */
export const LGPT_RIS_C1CC: any = '1'
export const LGPT_RIS_C1CC_M: any = '1'
export const LGPT_RIS_C1CC_S: any = '1'
/**
Set*/
export const LGPT_RIS_C1CC_SET: any = '1'

/**
Cleared*/
export const LGPT_RIS_C1CC_CLR: any = '0'

/**
Status of the C0CC interrupt. The interrupt is set when C0CC has capture or compare event. */
export const LGPT_RIS_C0CC: any = '1'
export const LGPT_RIS_C0CC_M: any = '1'
export const LGPT_RIS_C0CC_S: any = '1'
/**
Set*/
export const LGPT_RIS_C0CC_SET: any = '1'

/**
Cleared*/
export const LGPT_RIS_C0CC_CLR: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const LGPT_RIS_RESERVED7: any = '1'
export const LGPT_RIS_RESERVED7_M: any = '1'
export const LGPT_RIS_RESERVED7_S: any = '1'
/**
Status of the FAULT interrupt. The interrupt is set immediately on active fault input.*/
export const LGPT_RIS_FAULT: any = '1'
export const LGPT_RIS_FAULT_M: any = '1'
export const LGPT_RIS_FAULT_S: any = '1'
/**
Set*/
export const LGPT_RIS_FAULT_SET: any = '1'

/**
Cleared*/
export const LGPT_RIS_FAULT_CLR: any = '0'

/**
Status of the IDX interrupt. The interrupt is set when IDX is active. */
export const LGPT_RIS_IDX: any = '1'
export const LGPT_RIS_IDX_M: any = '1'
export const LGPT_RIS_IDX_S: any = '1'
/**
Set*/
export const LGPT_RIS_IDX_SET: any = '1'

/**
Cleared*/
export const LGPT_RIS_IDX_CLR: any = '0'

/**
Status of the DIRCHNG interrupt. The interrupt is set when the direction of the counter changes. */
export const LGPT_RIS_DIRCHNG: any = '1'
export const LGPT_RIS_DIRCHNG_M: any = '1'
export const LGPT_RIS_DIRCHNG_S: any = '1'
/**
Set*/
export const LGPT_RIS_DIRCHNG_SET: any = '1'

/**
Cleared*/
export const LGPT_RIS_DIRCHNG_CLR: any = '0'

/**
Status of the CNTRCHNG interrupt. The interrupt is set when the counter increments or decrements.*/
export const LGPT_RIS_CNTRCHNG: any = '1'
export const LGPT_RIS_CNTRCHNG_M: any = '1'
export const LGPT_RIS_CNTRCHNG_S: any = '1'
/**
Set*/
export const LGPT_RIS_CNTRCHNG_SET: any = '1'

/**
Cleared*/
export const LGPT_RIS_CNTRCHNG_CLR: any = '0'

/**
Status of the DBLTRANS interrupt. The interrupt is set when a double transition has happened during QDEC mode.*/
export const LGPT_RIS_DBLTRANS: any = '1'
export const LGPT_RIS_DBLTRANS_M: any = '1'
export const LGPT_RIS_DBLTRANS_S: any = '1'
/**
Set*/
export const LGPT_RIS_DBLTRANS_SET: any = '1'

/**
Cleared*/
export const LGPT_RIS_DBLTRANS_CLR: any = '0'

/**
Status of the ZERO interrupt. The interrupt is set when CNTR = 0. */
export const LGPT_RIS_ZERO: any = '1'
export const LGPT_RIS_ZERO_M: any = '1'
export const LGPT_RIS_ZERO_S: any = '1'
/**
Set*/
export const LGPT_RIS_ZERO_SET: any = '1'

/**
Cleared*/
export const LGPT_RIS_ZERO_CLR: any = '0'

/**
Status of the TGT interrupt. The interrupt is set when CNTR = TGT. */
export const LGPT_RIS_TGT: any = '1'
export const LGPT_RIS_TGT_M: any = '1'
export const LGPT_RIS_TGT_S: any = '1'
/**
Set*/
export const LGPT_RIS_TGT_SET: any = '1'

/**
Cleared*/
export const LGPT_RIS_TGT_CLR: any = '0'


// -------- REGISTER MIS -------- //

/**
Masked interrupt status. 


This register is simply a bitwise AND of the contents of IMASK and RIS.*] registers. A flag set in this register can be cleared by writing 1 to the corresponding ICLR register bit.*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const LGPT_MIS_RESERVED11: any = '21'
export const LGPT_MIS_RESERVED11_M: any = '21'
export const LGPT_MIS_RESERVED11_S: any = '21'
/**
Masked status of the RIS.C2CC interrupt. */
export const LGPT_MIS_C2CC: any = '1'
export const LGPT_MIS_C2CC_M: any = '1'
export const LGPT_MIS_C2CC_S: any = '1'
/**
Set*/
export const LGPT_MIS_C2CC_SET: any = '1'

/**
Cleared*/
export const LGPT_MIS_C2CC_CLR: any = '0'

/**
Masked status of the RIS.C1CC interrupt.*/
export const LGPT_MIS_C1CC: any = '1'
export const LGPT_MIS_C1CC_M: any = '1'
export const LGPT_MIS_C1CC_S: any = '1'
/**
Set*/
export const LGPT_MIS_C1CC_SET: any = '1'

/**
Cleared*/
export const LGPT_MIS_C1CC_CLR: any = '0'

/**
Masked status of the RIS.C0CC interrupt.*/
export const LGPT_MIS_C0CC: any = '1'
export const LGPT_MIS_C0CC_M: any = '1'
export const LGPT_MIS_C0CC_S: any = '1'
/**
Set*/
export const LGPT_MIS_C0CC_SET: any = '1'

/**
Cleared*/
export const LGPT_MIS_C0CC_CLR: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const LGPT_MIS_RESERVED7: any = '1'
export const LGPT_MIS_RESERVED7_M: any = '1'
export const LGPT_MIS_RESERVED7_S: any = '1'
/**
Masked status of the RIS.FAULT interrupt.*/
export const LGPT_MIS_FAULT: any = '1'
export const LGPT_MIS_FAULT_M: any = '1'
export const LGPT_MIS_FAULT_S: any = '1'
/**
Set*/
export const LGPT_MIS_FAULT_SET: any = '1'

/**
Cleared*/
export const LGPT_MIS_FAULT_CLR: any = '0'

/**
Masked status of the RIS.IDX interrupt.*/
export const LGPT_MIS_IDX: any = '1'
export const LGPT_MIS_IDX_M: any = '1'
export const LGPT_MIS_IDX_S: any = '1'
/**
Set*/
export const LGPT_MIS_IDX_SET: any = '1'

/**
Cleared*/
export const LGPT_MIS_IDX_CLR: any = '0'

/**
Masked status of the RIS.DIRCHNG interrupt.*/
export const LGPT_MIS_DIRCHNG: any = '1'
export const LGPT_MIS_DIRCHNG_M: any = '1'
export const LGPT_MIS_DIRCHNG_S: any = '1'
/**
Set*/
export const LGPT_MIS_DIRCHNG_SET: any = '1'

/**
Cleared*/
export const LGPT_MIS_DIRCHNG_CLR: any = '0'

/**
Masked status of the RIS.CNTRCHNG interrupt.*/
export const LGPT_MIS_CNTRCHNG: any = '1'
export const LGPT_MIS_CNTRCHNG_M: any = '1'
export const LGPT_MIS_CNTRCHNG_S: any = '1'
/**
Set*/
export const LGPT_MIS_CNTRCHNG_SET: any = '1'

/**
Cleared*/
export const LGPT_MIS_CNTRCHNG_CLR: any = '0'

/**
Masked status of the RIS.DBLTRANS interrupt.*/
export const LGPT_MIS_DBLTRANS: any = '1'
export const LGPT_MIS_DBLTRANS_M: any = '1'
export const LGPT_MIS_DBLTRANS_S: any = '1'
/**
Set*/
export const LGPT_MIS_DBLTRANS_SET: any = '1'

/**
Cleared*/
export const LGPT_MIS_DBLTRANS_CLR: any = '0'

/**
Masked status of the RIS.ZERO interrupt.*/
export const LGPT_MIS_ZERO: any = '1'
export const LGPT_MIS_ZERO_M: any = '1'
export const LGPT_MIS_ZERO_S: any = '1'
/**
Set*/
export const LGPT_MIS_ZERO_SET: any = '1'

/**
Cleared*/
export const LGPT_MIS_ZERO_CLR: any = '0'

/**
Masked status of the RIS.TGT interrupt.*/
export const LGPT_MIS_TGT: any = '1'
export const LGPT_MIS_TGT_M: any = '1'
export const LGPT_MIS_TGT_S: any = '1'
/**
Set*/
export const LGPT_MIS_TGT_SET: any = '1'

/**
Cleared*/
export const LGPT_MIS_TGT_CLR: any = '0'


// -------- REGISTER ISET -------- //

/**
Interrupt set register. 


This register can used by software for diagnostics and safety checking purposes. Writing a 1 to a bit in this register will set the event and the corresponding RIS bit also gets set. If the corresponding IMASK bit is set, then the corresponding MIS register bit also gets set.*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const LGPT_ISET_RESERVED11: any = '21'
export const LGPT_ISET_RESERVED11_M: any = '21'
export const LGPT_ISET_RESERVED11_S: any = '21'
/**
Set the RIS.C2CC interrupt. */
export const LGPT_ISET_C2CC: any = '1'
export const LGPT_ISET_C2CC_M: any = '1'
export const LGPT_ISET_C2CC_S: any = '1'
/**
Set*/
export const LGPT_ISET_C2CC_SET: any = '1'

/**
No effect*/
export const LGPT_ISET_C2CC_NO_EFFECT: any = '0'

/**
Set the RIS.C1CC interrupt.*/
export const LGPT_ISET_C1CC: any = '1'
export const LGPT_ISET_C1CC_M: any = '1'
export const LGPT_ISET_C1CC_S: any = '1'
/**
Set*/
export const LGPT_ISET_C1CC_SET: any = '1'

/**
No effect*/
export const LGPT_ISET_C1CC_NO_EFFECT: any = '0'

/**
Set the RIS.C0CC interrupt.*/
export const LGPT_ISET_C0CC: any = '1'
export const LGPT_ISET_C0CC_M: any = '1'
export const LGPT_ISET_C0CC_S: any = '1'
/**
Set*/
export const LGPT_ISET_C0CC_SET: any = '1'

/**
No effect*/
export const LGPT_ISET_C0CC_NO_EFFECT: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const LGPT_ISET_RESERVED7: any = '1'
export const LGPT_ISET_RESERVED7_M: any = '1'
export const LGPT_ISET_RESERVED7_S: any = '1'
/**
Set the RIS.FAULT interrupt.*/
export const LGPT_ISET_FAULT: any = '1'
export const LGPT_ISET_FAULT_M: any = '1'
export const LGPT_ISET_FAULT_S: any = '1'
/**
Set*/
export const LGPT_ISET_FAULT_SET: any = '1'

/**
No effect*/
export const LGPT_ISET_FAULT_NO_EFFECT: any = '0'

/**
Set the RIS.IDX interrupt.*/
export const LGPT_ISET_IDX: any = '1'
export const LGPT_ISET_IDX_M: any = '1'
export const LGPT_ISET_IDX_S: any = '1'
/**
Set*/
export const LGPT_ISET_IDX_SET: any = '1'

/**
No effect*/
export const LGPT_ISET_IDX_NO_EFFECT: any = '0'

/**
Set the RIS.DIRCHNG interrupt.*/
export const LGPT_ISET_DIRCHNG: any = '1'
export const LGPT_ISET_DIRCHNG_M: any = '1'
export const LGPT_ISET_DIRCHNG_S: any = '1'
/**
Set*/
export const LGPT_ISET_DIRCHNG_SET: any = '1'

/**
No effect*/
export const LGPT_ISET_DIRCHNG_NO_EFFECT: any = '0'

/**
Set the RIS.CNTRCHNG interrupt.*/
export const LGPT_ISET_CNTRCHNG: any = '1'
export const LGPT_ISET_CNTRCHNG_M: any = '1'
export const LGPT_ISET_CNTRCHNG_S: any = '1'
/**
Set*/
export const LGPT_ISET_CNTRCHNG_SET: any = '1'

/**
No effect*/
export const LGPT_ISET_CNTRCHNG_NO_EFFECT: any = '0'

/**
Set the RIS.DBLTRANS interrupt.*/
export const LGPT_ISET_DBLTRANS: any = '1'
export const LGPT_ISET_DBLTRANS_M: any = '1'
export const LGPT_ISET_DBLTRANS_S: any = '1'
/**
Set*/
export const LGPT_ISET_DBLTRANS_SET: any = '1'

/**
No effect*/
export const LGPT_ISET_DBLTRANS_NO_EFFECT: any = '0'

/**
Set the RIS.ZERO interrupt.*/
export const LGPT_ISET_ZERO: any = '1'
export const LGPT_ISET_ZERO_M: any = '1'
export const LGPT_ISET_ZERO_S: any = '1'
/**
Set*/
export const LGPT_ISET_ZERO_SET: any = '1'

/**
No effect*/
export const LGPT_ISET_ZERO_NO_EFFECT: any = '0'

/**
Set the RIS.TGT interrupt.*/
export const LGPT_ISET_TGT: any = '1'
export const LGPT_ISET_TGT_M: any = '1'
export const LGPT_ISET_TGT_S: any = '1'
/**
Set*/
export const LGPT_ISET_TGT_SET: any = '1'

/**
No effect*/
export const LGPT_ISET_TGT_NO_EFFECT: any = '0'


// -------- REGISTER ICLR -------- //

/**
Interrupt clear register. 


This register allows software to clear interrupts. Writing a 1 to a bit in this register will clear the event and the corresponding RIS bit also gets cleared. If the corresponding IMASK bit is set, then the corresponding MIS register bit also gets cleared.*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const LGPT_ICLR_RESERVED11: any = '21'
export const LGPT_ICLR_RESERVED11_M: any = '21'
export const LGPT_ICLR_RESERVED11_S: any = '21'
/**
Clear the RIS.C2CC interrupt. */
export const LGPT_ICLR_C2CC: any = '1'
export const LGPT_ICLR_C2CC_M: any = '1'
export const LGPT_ICLR_C2CC_S: any = '1'
/**
Clear*/
export const LGPT_ICLR_C2CC_CLR: any = '1'

/**
No effect*/
export const LGPT_ICLR_C2CC_NO_EFFECT: any = '0'

/**
Clear the RIS.C1CC interrupt.*/
export const LGPT_ICLR_C1CC: any = '1'
export const LGPT_ICLR_C1CC_M: any = '1'
export const LGPT_ICLR_C1CC_S: any = '1'
/**
Clear*/
export const LGPT_ICLR_C1CC_CLR: any = '1'

/**
No effect*/
export const LGPT_ICLR_C1CC_NO_EFFECT: any = '0'

/**
Clear the RIS.C0CC interrupt.*/
export const LGPT_ICLR_C0CC: any = '1'
export const LGPT_ICLR_C0CC_M: any = '1'
export const LGPT_ICLR_C0CC_S: any = '1'
/**
Clear*/
export const LGPT_ICLR_C0CC_CLR: any = '1'

/**
No effect*/
export const LGPT_ICLR_C0CC_NO_EFFECT: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const LGPT_ICLR_RESERVED7: any = '1'
export const LGPT_ICLR_RESERVED7_M: any = '1'
export const LGPT_ICLR_RESERVED7_S: any = '1'
/**
Clear the RIS.FAULT interrupt.*/
export const LGPT_ICLR_FAULT: any = '1'
export const LGPT_ICLR_FAULT_M: any = '1'
export const LGPT_ICLR_FAULT_S: any = '1'
/**
Clear*/
export const LGPT_ICLR_FAULT_CLR: any = '1'

/**
No effect*/
export const LGPT_ICLR_FAULT_NO_EFFECT: any = '0'

/**
Clear the RIS.IDX interrupt.*/
export const LGPT_ICLR_IDX: any = '1'
export const LGPT_ICLR_IDX_M: any = '1'
export const LGPT_ICLR_IDX_S: any = '1'
/**
Clear*/
export const LGPT_ICLR_IDX_CLR: any = '1'

/**
No effect*/
export const LGPT_ICLR_IDX_NO_EFFECT: any = '0'

/**
Clear the RIS.DIRCHNG interrupt.*/
export const LGPT_ICLR_DIRCHNG: any = '1'
export const LGPT_ICLR_DIRCHNG_M: any = '1'
export const LGPT_ICLR_DIRCHNG_S: any = '1'
/**
Clear*/
export const LGPT_ICLR_DIRCHNG_CLR: any = '1'

/**
No effect*/
export const LGPT_ICLR_DIRCHNG_NO_EFFECT: any = '0'

/**
Clear the RIS.CNTRCHNG interrupt.*/
export const LGPT_ICLR_CNTRCHNG: any = '1'
export const LGPT_ICLR_CNTRCHNG_M: any = '1'
export const LGPT_ICLR_CNTRCHNG_S: any = '1'
/**
Clear*/
export const LGPT_ICLR_CNTRCHNG_CLR: any = '1'

/**
No effect*/
export const LGPT_ICLR_CNTRCHNG_NO_EFFECT: any = '0'

/**
Clear the RIS.DBLTRANS interrupt.*/
export const LGPT_ICLR_DBLTRANS: any = '1'
export const LGPT_ICLR_DBLTRANS_M: any = '1'
export const LGPT_ICLR_DBLTRANS_S: any = '1'
/**
Clear*/
export const LGPT_ICLR_DBLTRANS_CLR: any = '1'

/**
No effect*/
export const LGPT_ICLR_DBLTRANS_NO_EFFECT: any = '0'

/**
Clear the RIS.ZERO interrupt.*/
export const LGPT_ICLR_ZERO: any = '1'
export const LGPT_ICLR_ZERO_M: any = '1'
export const LGPT_ICLR_ZERO_S: any = '1'
/**
Clear*/
export const LGPT_ICLR_ZERO_CLR: any = '1'

/**
No effect*/
export const LGPT_ICLR_ZERO_NO_EFFECT: any = '0'

/**
Clear the RIS.TGT interrupt.*/
export const LGPT_ICLR_TGT: any = '1'
export const LGPT_ICLR_TGT_M: any = '1'
export const LGPT_ICLR_TGT_S: any = '1'
/**
Clear*/
export const LGPT_ICLR_TGT_CLR: any = '1'

/**
No effect*/
export const LGPT_ICLR_TGT_NO_EFFECT: any = '0'


// -------- REGISTER IMSET -------- //

/**
Interrupt mask set register. 


Writing a 1 to a bit in this register will set the corresponding IMASK bit.*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const LGPT_IMSET_RESERVED11: any = '21'
export const LGPT_IMSET_RESERVED11_M: any = '21'
export const LGPT_IMSET_RESERVED11_S: any = '21'
/**
Set the MIS.C2CC mask. */
export const LGPT_IMSET_C2CC: any = '1'
export const LGPT_IMSET_C2CC_M: any = '1'
export const LGPT_IMSET_C2CC_S: any = '1'
/**
Set*/
export const LGPT_IMSET_C2CC_SET: any = '1'

/**
No effect*/
export const LGPT_IMSET_C2CC_NO_EFFECT: any = '0'

/**
Set the MIS.C1CC mask.*/
export const LGPT_IMSET_C1CC: any = '1'
export const LGPT_IMSET_C1CC_M: any = '1'
export const LGPT_IMSET_C1CC_S: any = '1'
/**
Set*/
export const LGPT_IMSET_C1CC_SET: any = '1'

/**
No effect*/
export const LGPT_IMSET_C1CC_NO_EFFECT: any = '0'

/**
Set the MIS.C0CC mask.*/
export const LGPT_IMSET_C0CC: any = '1'
export const LGPT_IMSET_C0CC_M: any = '1'
export const LGPT_IMSET_C0CC_S: any = '1'
/**
Set*/
export const LGPT_IMSET_C0CC_SET: any = '1'

/**
No effect*/
export const LGPT_IMSET_C0CC_NO_EFFECT: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const LGPT_IMSET_RESERVED7: any = '1'
export const LGPT_IMSET_RESERVED7_M: any = '1'
export const LGPT_IMSET_RESERVED7_S: any = '1'
/**
Set the MIS.FAULT mask.*/
export const LGPT_IMSET_FAULT: any = '1'
export const LGPT_IMSET_FAULT_M: any = '1'
export const LGPT_IMSET_FAULT_S: any = '1'
/**
Set*/
export const LGPT_IMSET_FAULT_SET: any = '1'

/**
No effect*/
export const LGPT_IMSET_FAULT_NO_EFFECT: any = '0'

/**
Set the MIS.IDX mask.*/
export const LGPT_IMSET_IDX: any = '1'
export const LGPT_IMSET_IDX_M: any = '1'
export const LGPT_IMSET_IDX_S: any = '1'
/**
Set*/
export const LGPT_IMSET_IDX_SET: any = '1'

/**
No effect*/
export const LGPT_IMSET_IDX_NO_EFFECT: any = '0'

/**
Set the MIS.DIRCHNG mask.*/
export const LGPT_IMSET_DIRCHNG: any = '1'
export const LGPT_IMSET_DIRCHNG_M: any = '1'
export const LGPT_IMSET_DIRCHNG_S: any = '1'
/**
Set*/
export const LGPT_IMSET_DIRCHNG_SET: any = '1'

/**
No effect*/
export const LGPT_IMSET_DIRCHNG_NO_EFFECT: any = '0'

/**
Set the MIS.CNTRCHNG mask.*/
export const LGPT_IMSET_CNTRCHNG: any = '1'
export const LGPT_IMSET_CNTRCHNG_M: any = '1'
export const LGPT_IMSET_CNTRCHNG_S: any = '1'
/**
Set*/
export const LGPT_IMSET_CNTRCHNG_SET: any = '1'

/**
No effect*/
export const LGPT_IMSET_CNTRCHNG_NO_EFFECT: any = '0'

/**
Set the MIS.DBLTRANS mask.*/
export const LGPT_IMSET_DBLTRANS: any = '1'
export const LGPT_IMSET_DBLTRANS_M: any = '1'
export const LGPT_IMSET_DBLTRANS_S: any = '1'
/**
Set*/
export const LGPT_IMSET_DBLTRANS_SET: any = '1'

/**
No effect*/
export const LGPT_IMSET_DBLTRANS_NO_EFFECT: any = '0'

/**
Set the MIS.ZERO mask.*/
export const LGPT_IMSET_ZERO: any = '1'
export const LGPT_IMSET_ZERO_M: any = '1'
export const LGPT_IMSET_ZERO_S: any = '1'
/**
Set*/
export const LGPT_IMSET_ZERO_SET: any = '1'

/**
No effect*/
export const LGPT_IMSET_ZERO_NO_EFFECT: any = '0'

/**
Set the MIS.TGT mask.*/
export const LGPT_IMSET_TGT: any = '1'
export const LGPT_IMSET_TGT_M: any = '1'
export const LGPT_IMSET_TGT_S: any = '1'
/**
Set*/
export const LGPT_IMSET_TGT_SET: any = '1'

/**
No effect*/
export const LGPT_IMSET_TGT_NO_EFFECT: any = '0'


// -------- REGISTER IMCLR -------- //

/**
Interrupt mask clear register. 


Writing a 1 to a bit in this register will clear the corresponding IMASK bit.*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const LGPT_IMCLR_RESERVED11: any = '21'
export const LGPT_IMCLR_RESERVED11_M: any = '21'
export const LGPT_IMCLR_RESERVED11_S: any = '21'
/**
Clear the MIS.C2CC mask. */
export const LGPT_IMCLR_C2CC: any = '1'
export const LGPT_IMCLR_C2CC_M: any = '1'
export const LGPT_IMCLR_C2CC_S: any = '1'
/**
Clear*/
export const LGPT_IMCLR_C2CC_CLR: any = '1'

/**
No effect*/
export const LGPT_IMCLR_C2CC_NO_EFFECT: any = '0'

/**
Clear the MIS.C1CC mask.*/
export const LGPT_IMCLR_C1CC: any = '1'
export const LGPT_IMCLR_C1CC_M: any = '1'
export const LGPT_IMCLR_C1CC_S: any = '1'
/**
Clear*/
export const LGPT_IMCLR_C1CC_CLR: any = '1'

/**
No effect*/
export const LGPT_IMCLR_C1CC_NO_EFFECT: any = '0'

/**
Clear the MIS.C0CC mask.*/
export const LGPT_IMCLR_C0CC: any = '1'
export const LGPT_IMCLR_C0CC_M: any = '1'
export const LGPT_IMCLR_C0CC_S: any = '1'
/**
Clear*/
export const LGPT_IMCLR_C0CC_CLR: any = '1'

/**
No effect*/
export const LGPT_IMCLR_C0CC_NO_EFFECT: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const LGPT_IMCLR_RESERVED7: any = '1'
export const LGPT_IMCLR_RESERVED7_M: any = '1'
export const LGPT_IMCLR_RESERVED7_S: any = '1'
/**
Clear the MIS.FAULT mask.*/
export const LGPT_IMCLR_FAULT: any = '1'
export const LGPT_IMCLR_FAULT_M: any = '1'
export const LGPT_IMCLR_FAULT_S: any = '1'
/**
Clear*/
export const LGPT_IMCLR_FAULT_CLR: any = '1'

/**
No effect*/
export const LGPT_IMCLR_FAULT_NO_EFFECT: any = '0'

/**
Clear the MIS.IDX mask.*/
export const LGPT_IMCLR_IDX: any = '1'
export const LGPT_IMCLR_IDX_M: any = '1'
export const LGPT_IMCLR_IDX_S: any = '1'
/**
Clear*/
export const LGPT_IMCLR_IDX_CLR: any = '1'

/**
No effect*/
export const LGPT_IMCLR_IDX_NO_EFFECT: any = '0'

/**
Clear the MIS.DIRCHNG mask.*/
export const LGPT_IMCLR_DIRCHNG: any = '1'
export const LGPT_IMCLR_DIRCHNG_M: any = '1'
export const LGPT_IMCLR_DIRCHNG_S: any = '1'
/**
Clear*/
export const LGPT_IMCLR_DIRCHNG_CLR: any = '1'

/**
No effect*/
export const LGPT_IMCLR_DIRCHNG_NO_EFFECT: any = '0'

/**
Clear the MIS.CNTRCHNG mask.*/
export const LGPT_IMCLR_CNTRCHNG: any = '1'
export const LGPT_IMCLR_CNTRCHNG_M: any = '1'
export const LGPT_IMCLR_CNTRCHNG_S: any = '1'
/**
Clear*/
export const LGPT_IMCLR_CNTRCHNG_CLR: any = '1'

/**
No effect*/
export const LGPT_IMCLR_CNTRCHNG_NO_EFFECT: any = '0'

/**
Clear the MIS.DBLTRANS mask.*/
export const LGPT_IMCLR_DBLTRANS: any = '1'
export const LGPT_IMCLR_DBLTRANS_M: any = '1'
export const LGPT_IMCLR_DBLTRANS_S: any = '1'
/**
Clear*/
export const LGPT_IMCLR_DBLTRANS_CLR: any = '1'

/**
No effect*/
export const LGPT_IMCLR_DBLTRANS_NO_EFFECT: any = '0'

/**
Clear the MIS.ZERO mask.*/
export const LGPT_IMCLR_ZERO: any = '1'
export const LGPT_IMCLR_ZERO_M: any = '1'
export const LGPT_IMCLR_ZERO_S: any = '1'
/**
Clear*/
export const LGPT_IMCLR_ZERO_CLR: any = '1'

/**
No effect*/
export const LGPT_IMCLR_ZERO_NO_EFFECT: any = '0'

/**
Clear the MIS.TGT mask.*/
export const LGPT_IMCLR_TGT: any = '1'
export const LGPT_IMCLR_TGT_M: any = '1'
export const LGPT_IMCLR_TGT_S: any = '1'
/**
Clear*/
export const LGPT_IMCLR_TGT_CLR: any = '1'

/**
No effect*/
export const LGPT_IMCLR_TGT_NO_EFFECT: any = '0'


// -------- REGISTER EMU -------- //

/**
Debug control


This register can be used to freeze the timer when CPU halts when HALT is set to 1. When HALT is set to 0, or when the CPU releases debug halt, the filters and edge detection logic is flushed and the timer starts. For setting a predefined output value during a CPU debug halt, PARK, if the timer has this register, should be configured additionally. If this timer does not have the PARK register a predefined output value during CPU halt is not possible.*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const LGPT_EMU_RESERVED2: any = '30'
export const LGPT_EMU_RESERVED2_M: any = '30'
export const LGPT_EMU_RESERVED2_S: any = '30'
/**
Halt control.


Configure when the counter shall stop upon CPU halt. This bitfield only applies if HALT = 1.*/
export const LGPT_EMU_CTL: any = '1'
export const LGPT_EMU_CTL_M: any = '1'
export const LGPT_EMU_CTL_S: any = '1'
/**
Zero condition. The counter stops when CNTR = 0.*/
export const LGPT_EMU_CTL_ZERCOND: any = '1'

/**
Immediate reaction. The counter stops immediately on debug halt.*/
export const LGPT_EMU_CTL_IMMEDIATE: any = '0'

/**
Halt LGPT when CPU is halted in debug.*/
export const LGPT_EMU_HALT: any = '1'
export const LGPT_EMU_HALT_M: any = '1'
export const LGPT_EMU_HALT_S: any = '1'
/**
Enable.*/
export const LGPT_EMU_HALT_EN: any = '1'

/**
Disable.*/
export const LGPT_EMU_HALT_DIS: any = '0'


// -------- REGISTER C0CFG -------- //

/**
Channel 0 Configuration


This register configures channel function and enables outputs.

Each channel has an edge-detection circuit. The the edge-detection circuit is: 
 - enabled while CCACT selects a capture function and CTL.MODE is different from DIS.
 - flushed while CCACT selects a capture function and CTL.MODE is changed from DIS to another mode.

The flush action uses two system clock periods. It prevents capture events caused by expired signal values stored in the edge-detection circuit.

The channel input signal enters the edge-detection circuit. False capture events can occur when:
- the edge-detection circuit contains expired signal samples and the circuit is enabled without flush as described above.
- the CCACT field is reconfigured while CTL.MODE is different from DIS.

Primary use scenario is to select CCACT before starting the timer. Follow these steps to configure CCACT to a capture action while CTL.MODE is different from DIS:
- Set EDGE to NONE.
- Configure CCACT.
- Wait for three system clock periods before setting EDGE different from NONE.
These steps prevent capture events caused by expired signal values in edge-detection circuit.*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const LGPT_C0CFG_RESERVED11: any = '21'
export const LGPT_C0CFG_RESERVED11_M: any = '21'
export const LGPT_C0CFG_RESERVED11_S: any = '21'
/**
Output 2 enable.


When 0 $lt; CCACT $lt; 8, OUT2 becomes zero after a capture or compare event.*/
export const LGPT_C0CFG_OUT2: any = '1'
export const LGPT_C0CFG_OUT2_M: any = '1'
export const LGPT_C0CFG_OUT2_S: any = '1'
/**
Channel 0 controls output 2.*/
export const LGPT_C0CFG_OUT2_EN: any = '1'

/**
Channel 0 does not control output 2.*/
export const LGPT_C0CFG_OUT2_DIS: any = '0'

/**
Output 1 enable.


When 0 $lt; CCACT $lt; 8, OUT1 becomes zero after a capture or compare event.*/
export const LGPT_C0CFG_OUT1: any = '1'
export const LGPT_C0CFG_OUT1_M: any = '1'
export const LGPT_C0CFG_OUT1_S: any = '1'
/**
Channel 0 controls output 1.*/
export const LGPT_C0CFG_OUT1_EN: any = '1'

/**
Channel 0 does not control output 1.*/
export const LGPT_C0CFG_OUT1_DIS: any = '0'

/**
Output 0 enable.


When 0 $lt; CCACT $lt; 8, OUT0 becomes zero after a capture or compare event.*/
export const LGPT_C0CFG_OUT0: any = '1'
export const LGPT_C0CFG_OUT0_M: any = '1'
export const LGPT_C0CFG_OUT0_S: any = '1'
/**
Channel 0 controls output 0.*/
export const LGPT_C0CFG_OUT0_EN: any = '1'

/**
Channel 0 does not control output 0.*/
export const LGPT_C0CFG_OUT0_DIS: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const LGPT_C0CFG_RESERVED7: any = '1'
export const LGPT_C0CFG_RESERVED7_M: any = '1'
export const LGPT_C0CFG_RESERVED7_S: any = '1'
/**
Select channel input.*/
export const LGPT_C0CFG_INPUT: any = '1'
export const LGPT_C0CFG_INPUT_M: any = '1'
export const LGPT_C0CFG_INPUT_S: any = '1'
/**
IO controller*/
export const LGPT_C0CFG_INPUT_IO: any = '1'

/**
Event fabric*/
export const LGPT_C0CFG_INPUT_EV: any = '0'

/**
Determines the edge that triggers the channel input event. This happens post filter.*/
export const LGPT_C0CFG_EDGE: any = '2'
export const LGPT_C0CFG_EDGE_M: any = '2'
export const LGPT_C0CFG_EDGE_S: any = '2'
/**
Input event is triggered at both edges.*/
export const LGPT_C0CFG_EDGE_BOTH: any = '3'

/**
Input event is triggered at falling edge.*/
export const LGPT_C0CFG_EDGE_FALL: any = '2'

/**
Input event is triggered at rising edge.*/
export const LGPT_C0CFG_EDGE_RISE: any = '1'

/**
Input is turned off.*/
export const LGPT_C0CFG_EDGE_NONE: any = '0'

/**
Capture-Compare action.


Capture-Compare action defines 15 different channel functions that utilize capture, compare, and zero events. In every compare event the timer looks at the current value of CNTR. The corresponding output event will be set 1 timer period after CNTR = C0CC. */
export const LGPT_C0CFG_CCACT: any = '4'
export const LGPT_C0CFG_CCACT_M: any = '4'
export const LGPT_C0CFG_CCACT_S: any = '4'
/**
Pulse on compare repeatedly. 


Channel function sequence: 
- Pulse enabled outputs when C0CC.VAL = CNTR.VAL.

 The output is high for two timer clock periods.*/
export const LGPT_C0CFG_CCACT_PULSE_ON_CMP: any = '15'

/**
Toggle on compare repeatedly.


Channel function sequence: 
- Toggle enabled outputs  when C0CC.VAL = CNTR.VAL.*/
export const LGPT_C0CFG_CCACT_TGL_ON_CMP: any = '14'

/**
Set on compare repeatedly.


Channel function sequence: 
- Set enabled outputs  when C0CC.VAL = CNTR.VAL.*/
export const LGPT_C0CFG_CCACT_SET_ON_CMP: any = '13'

/**
Clear on compare repeatedly.


Channel function sequence: 
- Clear enabled outputs  when C0CC.VAL = CNTR.VAL.*/
export const LGPT_C0CFG_CCACT_CLR_ON_CMP: any = '12'

/**
Set on zero, toggle on compare repeatedly.


Channel function sequence: 
- Set enabled outputs when CNTR.VAL = 0.
- Toggle enabled outputs when C0CC.VAL = CNTR.VAL.

Set CTL.MODE to UP_PER for edge-aligned PWM generation. Duty cycle is given by: 

When C0CC.VAL $lt;= TGT.VAL: 
   Duty cycle = C0CC.VAL / ( TGT.VAL + 1 ).

When C0CC.VAL $gt; TGT.VAL: 
   Duty cycle = 1.

Enabled outputs are cleared when C0CC.VAL = 0 and CNTR.VAL = 0.*/
export const LGPT_C0CFG_CCACT_SET_ON_0_TGL_ON_CMP: any = '11'

/**
Clear on zero, toggle on compare repeatedly.

 
Channel function sequence: 
- Clear enabled outputs when CNTR.VAL = 0.
- Toggle enabled outputs when C0CC.VAL = CNTR.VAL.

Set CTL.MODE to UPDWN_PER for center-aligned PWM generation. Duty cycle is given by: 

When C0CC.VAL $lt;= TGT.VAL: 
   Duty cycle = 1 - ( C0CC.VAL / TGT.VAL ).

When C0CC.VAL $gt; TGT.VAL: 
   Duty cycle = 0.

Enabled outputs are set when C0CC.VAL = 0 and CNTR.VAL = 0.*/
export const LGPT_C0CFG_CCACT_CLR_ON_0_TGL_ON_CMP: any = '10'

/**
Set on capture repeatedly.


Channel function sequence: 
- Set enabled outputs on capture event and copy CNTR.VAL to C0CC.VAL.

*/
export const LGPT_C0CFG_CCACT_SET_ON_CAPT: any = '9'

/**
Period and pulse width measurement.


Continuously capture period and pulse width of the signal selected by INPUT relative to the signal edge given by EDGE. 

Set enabled outputs and RIS.C0CC when C0CC.VAL contains signal period and PC0CC.VAL contains signal pulse width.

Notes: 
- Make sure to configure INPUT and CCACT when CTL.MODE equals DIS, then set CTL.MODE to UP_ONCE or UP_PER. 
- The counter restarts in the selected timer mode when C0CC.VAL contains the signal period.
- If more than one channel uses this function, the channels will perform this function one at a time. The channel with lowest number has priority and performs the function first. Next measurement starts when current measurement completes successfully or times out. A timeout occurs when counter equals target. 
- To observe a timeout event the RIS.TGT interrupt can be used, or another channel can be configured to SET_ON_CMP with compare value equal TGT.

Signal property requirements:
- Signal Period $gt;= 2 * ( 1 + PRECFG.TICKDIV ) * timer clock period.
- Signal Period $lt;= MAX(CNTR) * (1 + PRECFG.TICKDIV ) * timer clock period.
- Signal low and high phase $gt;= (1 + PRECFG.TICKDIV ) * timer clock period. */
export const LGPT_C0CFG_CCACT_PER_PULSE_WIDTH_MEAS: any = '8'

/**
Pulse on compare, and then disable channel.


Channel function sequence: 
- Pulse enabled outputs when C0CC.VAL = CNTR.VAL.
- Disable channel.

 The output is high for two timer clock periods.*/
export const LGPT_C0CFG_CCACT_PULSE_ON_CMP_DIS: any = '7'

/**
Toggle on compare, and then disable channel.


Channel function sequence: 
- Toggle enabled outputs when C0CC.VAL = CNTR.VAL.
- Disable channel.*/
export const LGPT_C0CFG_CCACT_TGL_ON_CMP_DIS: any = '6'

/**
Set on compare, and then disable channel.


Channel function sequence: 
- Set enabled outputs when C0CC.VAL = CNTR.VAL.
- Disable channel.*/
export const LGPT_C0CFG_CCACT_SET_ON_CMP_DIS: any = '5'

/**
Clear on compare, and then disable channel.


Channel function sequence: 
- Clear enabled outputs when C0CC.VAL = CNTR.VAL.
- Disable channel.*/
export const LGPT_C0CFG_CCACT_CLR_ON_CMP_DIS: any = '4'

/**
Set on zero, toggle on compare, and then disable channel.


Channel function sequence: 
- Set enabled outputs when CNTR.VAL = 0.
- Toggle enabled outputs when C0CC.VAL = CNTR.VAL.
- Disable channel.

Enabled outputs are cleared when C0CC.VAL = 0 and CNTR.VAL = 0.*/
export const LGPT_C0CFG_CCACT_SET_ON_0_TGL_ON_CMP_DIS: any = '3'

/**
Clear on zero, toggle on compare, and then disable channel.


Channel function sequence: 
- Clear enabled outputs when CNTR.VAL = 0.
- Toggle enabled outputs when C0CC.VAL = CNTR.VAL.
- Disable channel.

Enabled outputs are set when C0CC.VAL = 0 and CNTR.VAL = 0.*/
export const LGPT_C0CFG_CCACT_CLR_ON_0_TGL_ON_CMP_DIS: any = '2'

/**
Set on capture, and then disable channel.


Channel function sequence: 
- Set enabled outputs on capture event and copy CNTR.VAL to C0CC.VAL.
- Disable channel. 

Primary use scenario is to select this function before starting the timer.
Follow these steps to select this function while CTL.MODE is different from DIS:  
 - Set CCACT to SET_ON_CAPT with no output enable.
 - Configure INPUT (optional).
 - Wait for three timer clock periods as defined in PRECFG before setting CCACT to SET_ON_CAPT_DIS. Output enable is optional.

These steps prevent capture events caused by expired signal values in edge-detection circuit.*/
export const LGPT_C0CFG_CCACT_SET_ON_CAPT_DIS: any = '1'

/**
Disable channel.*/
export const LGPT_C0CFG_CCACT_DIS: any = '0'


// -------- REGISTER C1CFG -------- //

/**
Channel 1 Configuration


This register configures channel function and enables outputs.

Each channel has an edge-detection circuit. The the edge-detection circuit is: 
 - enabled while CCACT selects a capture function and CTL.MODE is different from DIS.
 - flushed while CCACT selects a capture function and CTL.MODE is changed from DIS to another mode.

The flush action uses two system clock periods. It prevents capture events caused by expired signal values stored in the edge-detection circuit.

The channel input signal enters the edge-detection circuit. False capture events can occur when:
- the edge-detection circuit contains expired signal samples and the circuit is enabled without flush as described above.
- the CCACT field is reconfigured while CTL.MODE is different from DIS.

Primary use scenario is to select CCACT before starting the timer. Follow these steps to configure CCACT to a capture action while CTL.MODE is different from DIS:
- Set EDGE to NONE.
- Configure CCACT.
- Wait for three system clock periods before setting EDGE different from NONE.
These steps prevent capture events caused by expired signal values in edge-detection circuit.*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const LGPT_C1CFG_RESERVED11: any = '21'
export const LGPT_C1CFG_RESERVED11_M: any = '21'
export const LGPT_C1CFG_RESERVED11_S: any = '21'
/**
Output 2 enable.


When 0 $lt; CCACT $lt; 8, OUT2 becomes zero after a capture or compare event.*/
export const LGPT_C1CFG_OUT2: any = '1'
export const LGPT_C1CFG_OUT2_M: any = '1'
export const LGPT_C1CFG_OUT2_S: any = '1'
/**
Channel 1 controls output 2.*/
export const LGPT_C1CFG_OUT2_EN: any = '1'

/**
Channel 1 does not control output 2.*/
export const LGPT_C1CFG_OUT2_DIS: any = '0'

/**
Output 1 enable.


When 0 $lt; CCACT $lt; 8, OUT1 becomes zero after a capture or compare event.*/
export const LGPT_C1CFG_OUT1: any = '1'
export const LGPT_C1CFG_OUT1_M: any = '1'
export const LGPT_C1CFG_OUT1_S: any = '1'
/**
Channel 1 controls output 1.*/
export const LGPT_C1CFG_OUT1_EN: any = '1'

/**
Channel 1 does not control output 1.*/
export const LGPT_C1CFG_OUT1_DIS: any = '0'

/**
Output 0 enable.

When 0 $lt; CCACT $lt; 8, OUT0 becomes zero after a capture or compare event.
*/
export const LGPT_C1CFG_OUT0: any = '1'
export const LGPT_C1CFG_OUT0_M: any = '1'
export const LGPT_C1CFG_OUT0_S: any = '1'
/**
Channel 1 controls output 0.*/
export const LGPT_C1CFG_OUT0_EN: any = '1'

/**
Channel 1 does not control output 0.*/
export const LGPT_C1CFG_OUT0_DIS: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const LGPT_C1CFG_RESERVED7: any = '1'
export const LGPT_C1CFG_RESERVED7_M: any = '1'
export const LGPT_C1CFG_RESERVED7_S: any = '1'
/**
Select channel input.*/
export const LGPT_C1CFG_INPUT: any = '1'
export const LGPT_C1CFG_INPUT_M: any = '1'
export const LGPT_C1CFG_INPUT_S: any = '1'
/**
IO controller*/
export const LGPT_C1CFG_INPUT_IO: any = '1'

/**
Event fabric*/
export const LGPT_C1CFG_INPUT_EV: any = '0'

/**
Determines the edge that triggers the channel input event. This happens post filter.*/
export const LGPT_C1CFG_EDGE: any = '2'
export const LGPT_C1CFG_EDGE_M: any = '2'
export const LGPT_C1CFG_EDGE_S: any = '2'
/**
Input event is triggered at both edges.*/
export const LGPT_C1CFG_EDGE_BOTH: any = '3'

/**
Input event is triggered at falling edge.*/
export const LGPT_C1CFG_EDGE_FALL: any = '2'

/**
Input event is triggered at rising edge.*/
export const LGPT_C1CFG_EDGE_RISE: any = '1'

/**
Input is turned off.*/
export const LGPT_C1CFG_EDGE_NONE: any = '0'

/**
Capture-Compare action.


Capture-Compare action defines 15 different channel functions that utilize capture, compare, and zero events. In every compare event the timer looks at the current value of CNTR. The corresponding output event will be set 1 timer period after CNTR = C1CC. */
export const LGPT_C1CFG_CCACT: any = '4'
export const LGPT_C1CFG_CCACT_M: any = '4'
export const LGPT_C1CFG_CCACT_S: any = '4'
/**
Pulse on compare repeatedly. 


Channel function sequence: 
- Pulse enabled outputs when C1CC.VAL = CNTR.VAL.

 The output is high for two timer clock periods.*/
export const LGPT_C1CFG_CCACT_PULSE_ON_CMP: any = '15'

/**
Toggle on compare repeatedly.


Channel function sequence: 
- Toggle enabled outputs  when C1CC.VAL = CNTR.VAL.*/
export const LGPT_C1CFG_CCACT_TGL_ON_CMP: any = '14'

/**
Set on compare repeatedly.


Channel function sequence: 
- Set enabled outputs  when C1CC.VAL = CNTR.VAL.*/
export const LGPT_C1CFG_CCACT_SET_ON_CMP: any = '13'

/**
Clear on compare repeatedly.


Channel function sequence: 
- Clear enabled outputs  when C1CC.VAL = CNTR.VAL.*/
export const LGPT_C1CFG_CCACT_CLR_ON_CMP: any = '12'

/**
Set on zero, toggle on compare repeatedly.


Channel function sequence: 
- Set enabled outputs when CNTR.VAL = 0.
- Toggle enabled outputs when C1CC.VAL = CNTR.VAL.

Set CTL.MODE to UP_PER for edge-aligned PWM generation. Duty cycle is given by: 

When C1CC.VAL $lt;= TGT.VAL: 
   Duty cycle = C1CC.VAL / ( TGT.VAL + 1 ).

When C1CC.VAL $gt; TGT.VAL: 
   Duty cycle = 1.

Enabled outputs are cleared when C1CC.VAL = 0 and CNTR.VAL = 0.*/
export const LGPT_C1CFG_CCACT_SET_ON_0_TGL_ON_CMP: any = '11'

/**
Clear on zero, toggle on compare repeatedly.

 
Channel function sequence: 
- Clear enabled outputs when CNTR.VAL = 0.
- Toggle enabled outputs when C1CC.VAL = CNTR.VAL.

Set CTL.MODE to UPDWN_PER for center-aligned PWM generation. Duty cycle is given by: 

When C1CC.VAL $lt;= TGT.VAL: 
   Duty cycle = 1 - ( C1CC.VAL / TGT.VAL ).

When C1CC.VAL $gt; TGT.VAL: 
   Duty cycle = 0.

Enabled outputs are set when C1CC.VAL = 0 and CNTR.VAL = 0.*/
export const LGPT_C1CFG_CCACT_CLR_ON_0_TGL_ON_CMP: any = '10'

/**
Set on capture repeatedly.


Channel function sequence: 
- Set enabled outputs on capture event and copy CNTR.VAL to C1CC.VAL.

*/
export const LGPT_C1CFG_CCACT_SET_ON_CAPT: any = '9'

/**
Period and pulse width measurement.


Continuously capture period and pulse width of the signal selected by INPUT relative to the signal edge given by EDGE. 

Set enabled outputs and RIS.C1CC when C1CC.VAL contains signal period and PC1CC.VAL contains signal pulse width. 

Notes: 
- Make sure to configure INPUT and CCACT when CTL.MODE equals DIS, then set CTL.MODE to UP_ONCE or UP_PER. 
- The counter restarts in the selected timer mode when C1CC.VAL contains the signal period.
- If more than one channel uses this function, the channels will perform this function one at a time. The channel with lowest number has priority and performs the function first. Next measurement starts when current measurement completes successfully or times out. A timeout occurs when counter equals target. 
- To observe a timeout event the RIS.TGT interrupt can be used, or another channel can be configured to SET_ON_CMP with compare value equal TGT.

Signal property requirements:
- Signal Period $gt;= 2 * ( 1 + PRECFG.TICKDIV ) * timer clock period.
- Signal Period $lt;= MAX(CNTR) * (1 + PRECFG.TICKDIV ) * timer clock period.
- Signal low and high phase $gt;= (1 + PRECFG.TICKDIV ) * timer clock period.*/
export const LGPT_C1CFG_CCACT_PER_PULSE_WIDTH_MEAS: any = '8'

/**
Pulse on compare, and then disable channel.


Channel function sequence: 
- Pulse enabled outputs when C1CC.VAL = CNTR.VAL.
- Disable channel.

 The output is high for two timer clock periods.*/
export const LGPT_C1CFG_CCACT_PULSE_ON_CMP_DIS: any = '7'

/**
Toggle on compare, and then disable channel.


Channel function sequence: 
- Toggle enabled outputs when C1CC.VAL = CNTR.VAL.
- Disable channel.*/
export const LGPT_C1CFG_CCACT_TGL_ON_CMP_DIS: any = '6'

/**
Set on compare, and then disable channel.


Channel function sequence: 
- Set enabled outputs when C1CC.VAL = CNTR.VAL.
- Disable channel.*/
export const LGPT_C1CFG_CCACT_SET_ON_CMP_DIS: any = '5'

/**
Clear on compare, and then disable channel.


Channel function sequence: 
- Clear enabled outputs when C1CC.VAL = CNTR.VAL.
- Disable channel.*/
export const LGPT_C1CFG_CCACT_CLR_ON_CMP_DIS: any = '4'

/**
Set on zero, toggle on compare, and then disable channel.


Channel function sequence: 
- Set enabled outputs when CNTR.VAL = 0.
- Toggle enabled outputs when C1CC.VAL = CNTR.VAL.
- Disable channel.

Enabled outputs are cleared when C1CC.VAL = 0 and CNTR.VAL = 0.*/
export const LGPT_C1CFG_CCACT_SET_ON_0_TGL_ON_CMP_DIS: any = '3'

/**
Clear on zero, toggle on compare, and then disable channel.


Channel function sequence: 
- Clear enabled outputs when CNTR.VAL = 0.
- Toggle enabled outputs when C1CC.VAL = CNTR.VAL.
- Disable channel.

Enabled outputs are set when C1CC.VAL = 0 and CNTR.VAL = 0.*/
export const LGPT_C1CFG_CCACT_CLR_ON_0_TGL_ON_CMP_DIS: any = '2'

/**
Set on capture, and then disable channel.


Channel function sequence: 
- Set enabled outputs on capture event and copy CNTR.VAL to C1CC.VAL.
- Disable channel. 

Primary use scenario is to select this function before starting the timer.
Follow these steps to select this function while CTL.MODE is different from DIS:  
 - Set CCACT to SET_ON_CAPT with no output enable.
 - Configure INPUT (optional).
 - Wait for three timer clock periods as defined in PRECFG before setting CCACT to SET_ON_CAPT_DIS. Output enable is optional.

These steps prevent capture events caused by expired signal values in edge-detection circuit.*/
export const LGPT_C1CFG_CCACT_SET_ON_CAPT_DIS: any = '1'

/**
Disable channel.*/
export const LGPT_C1CFG_CCACT_DIS: any = '0'


// -------- REGISTER C2CFG -------- //

/**
Channel 2 Configuration


This register configures channel function and enables outputs.

Each channel has an edge-detection circuit. The the edge-detection circuit is: 
 - enabled while CCACT selects a capture function and CTL.MODE is different from DIS.
 - flushed while CCACT selects a capture function and CTL.MODE is changed from DIS to another mode.

The flush action uses two system clock periods. It prevents capture events caused by expired signal values stored in the edge-detection circuit.

The channel input signal enters the edge-detection circuit. False capture events can occur when:
- the edge-detection circuit contains expired signal samples and the circuit is enabled without flush as described above.
- the CCACT field is reconfigured while CTL.MODE is different from DIS.

Primary use scenario is to select CCACT before starting the timer. Follow these steps to configure CCACT to a capture action while CTL.MODE is different from DIS:
- Set EDGE to NONE.
- Configure CCACT.
- Wait for three system clock periods before setting EDGE different from NONE.
These steps prevent capture events caused by expired signal values in edge-detection circuit.*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const LGPT_C2CFG_RESERVED11: any = '21'
export const LGPT_C2CFG_RESERVED11_M: any = '21'
export const LGPT_C2CFG_RESERVED11_S: any = '21'
/**
Output 2 enable.


When 0 $lt; CCACT $lt; 8, OUT2 becomes zero after a capture or compare event.*/
export const LGPT_C2CFG_OUT2: any = '1'
export const LGPT_C2CFG_OUT2_M: any = '1'
export const LGPT_C2CFG_OUT2_S: any = '1'
/**
Channel 2 controls output 2.*/
export const LGPT_C2CFG_OUT2_EN: any = '1'

/**
Channel 2 does not control output 2.*/
export const LGPT_C2CFG_OUT2_DIS: any = '0'

/**
Output 1 enable.


When 0 $lt; CCACT $lt; 8, OUT1 becomes zero after a capture or compare event.*/
export const LGPT_C2CFG_OUT1: any = '1'
export const LGPT_C2CFG_OUT1_M: any = '1'
export const LGPT_C2CFG_OUT1_S: any = '1'
/**
Channel 2 controls output 1.*/
export const LGPT_C2CFG_OUT1_EN: any = '1'

/**
Channel 2 does not control output 1.*/
export const LGPT_C2CFG_OUT1_DIS: any = '0'

/**
Output 0 enable.


When 0 $lt; CCACT $lt; 8, OUT0 becomes zero after a capture or compare event.*/
export const LGPT_C2CFG_OUT0: any = '1'
export const LGPT_C2CFG_OUT0_M: any = '1'
export const LGPT_C2CFG_OUT0_S: any = '1'
/**
Channel 2 controls output 0.*/
export const LGPT_C2CFG_OUT0_EN: any = '1'

/**
Channel 2 does not control output 0.*/
export const LGPT_C2CFG_OUT0_DIS: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const LGPT_C2CFG_RESERVED7: any = '1'
export const LGPT_C2CFG_RESERVED7_M: any = '1'
export const LGPT_C2CFG_RESERVED7_S: any = '1'
/**
Select channel input.*/
export const LGPT_C2CFG_INPUT: any = '1'
export const LGPT_C2CFG_INPUT_M: any = '1'
export const LGPT_C2CFG_INPUT_S: any = '1'
/**
IO controller*/
export const LGPT_C2CFG_INPUT_IO: any = '1'

/**
Event fabric*/
export const LGPT_C2CFG_INPUT_EV: any = '0'

/**
Determines the edge that triggers the channel input event. This happens post filter.*/
export const LGPT_C2CFG_EDGE: any = '2'
export const LGPT_C2CFG_EDGE_M: any = '2'
export const LGPT_C2CFG_EDGE_S: any = '2'
/**
Input event is triggered at both edges.*/
export const LGPT_C2CFG_EDGE_BOTH: any = '3'

/**
Input event is triggered at falling edge.*/
export const LGPT_C2CFG_EDGE_FALL: any = '2'

/**
Input event is triggered at rising edge.*/
export const LGPT_C2CFG_EDGE_RISE: any = '1'

/**
Input is turned off.*/
export const LGPT_C2CFG_EDGE_NONE: any = '0'

/**
Capture-Compare action.


Capture-Compare action defines 15 different channel functions that utilize capture, compare, and zero events. In every compare event the timer looks at the current value of CNTR. The corresponding output event will be set 1 timer period after CNTR = C2CC. */
export const LGPT_C2CFG_CCACT: any = '4'
export const LGPT_C2CFG_CCACT_M: any = '4'
export const LGPT_C2CFG_CCACT_S: any = '4'
/**
Pulse on compare repeatedly. 


Channel function sequence: 
- Pulse enabled outputs when C2CC.VAL = CNTR.VAL.

 The output is high for two timer clock periods.*/
export const LGPT_C2CFG_CCACT_PULSE_ON_CMP: any = '15'

/**
Toggle on compare repeatedly.


Channel function sequence: 
- Toggle enabled outputs  when C2CC.VAL = CNTR.VAL.*/
export const LGPT_C2CFG_CCACT_TGL_ON_CMP: any = '14'

/**
Set on compare repeatedly.


Channel function sequence: 
- Set enabled outputs  when C2CC.VAL = CNTR.VAL.*/
export const LGPT_C2CFG_CCACT_SET_ON_CMP: any = '13'

/**
Clear on compare repeatedly.


Channel function sequence: 
- Clear enabled outputs  when C2CC.VAL = CNTR.VAL.*/
export const LGPT_C2CFG_CCACT_CLR_ON_CMP: any = '12'

/**
Set on zero, toggle on compare repeatedly.


Channel function sequence: 
- Set enabled outputs when CNTR.VAL = 0.
- Toggle enabled outputs when C2CC.VAL = CNTR.VAL.

Set CTL.MODE to UP_PER for edge-aligned PWM generation. Duty cycle is given by: 

When C2CC.VAL $lt;= TGT.VAL: 
   Duty cycle = C2CC.VAL / ( TGT.VAL + 1 ).

When C2CC.VAL $gt; TGT.VAL: 
   Duty cycle = 1.

Enabled outputs are cleared when C2CC.VAL = 0 and CNTR.VAL = 0.*/
export const LGPT_C2CFG_CCACT_SET_ON_0_TGL_ON_CMP: any = '11'

/**
Clear on zero, toggle on compare repeatedly.

 
Channel function sequence: 
- Clear enabled outputs when CNTR.VAL = 0.
- Toggle enabled outputs when C2CC.VAL = CNTR.VAL.

Set CTL.MODE to UPDWN_PER for center-aligned PWM generation. Duty cycle is given by: 

When C2CC.VAL $lt;= TGT.VAL: 
   Duty cycle = 1 - ( C2CC.VAL / TGT.VAL ).

When C2CC.VAL $gt; TGT.VAL: 
   Duty cycle = 0.

Enabled outputs are set when C2CC.VAL = 0 and CNTR.VAL = 0.*/
export const LGPT_C2CFG_CCACT_CLR_ON_0_TGL_ON_CMP: any = '10'

/**
Set on capture repeatedly.


Channel function sequence: 
- Set enabled outputs on capture event and copy CNTR.VAL to C2CC.VAL.

*/
export const LGPT_C2CFG_CCACT_SET_ON_CAPT: any = '9'

/**
Period and pulse width measurement.


Continuously capture period and pulse width of the signal selected by INPUT relative to the signal edge given by EDGE. 

Set enabled outputs and RIS.C2CC when C2CC.VAL contains signal period and PC2CC.VAL contains signal pulse width. 

Notes: 
- Make sure to configure INPUT and CCACT when CTL.MODE equals DIS, then set CTL.MODE to UP_ONCE or UP_PER. 
- The counter restarts in the selected timer mode when C2CC.VAL contains the signal period.
- If more than one channel uses this function, the channels will perform this function one at a time. The channel with lowest number has priority and performs the function first. Next measurement starts when current measurement completes successfully or times out. A timeout occurs when counter equals target. 
- To observe a timeout event the RIS.TGT interrupt can be used, or another channel can be configured to SET_ON_CMP with compare value equal TGT.

Signal property requirements:
- Signal Period $gt;= 2 * ( 1 + PRECFG.TICKDIV ) * timer clock period.
- Signal Period $lt;= MAX(CNTR) * (1 + PRECFG.TICKDIV ) * timer clock period.
- Signal low and high phase $gt;= (1 + PRECFG.TICKDIV ) * timer clock period. */
export const LGPT_C2CFG_CCACT_PER_PULSE_WIDTH_MEAS: any = '8'

/**
Pulse on compare, and then disable channel.


Channel function sequence: 
- Pulse enabled outputs when C2CC.VAL = CNTR.VAL.
- Disable channel.

 The output is high for two timer clock periods.*/
export const LGPT_C2CFG_CCACT_PULSE_ON_CMP_DIS: any = '7'

/**
Toggle on compare, and then disable channel.


Channel function sequence: 
- Toggle enabled outputs when C2CC.VAL = CNTR.VAL.
- Disable channel.*/
export const LGPT_C2CFG_CCACT_TGL_ON_CMP_DIS: any = '6'

/**
Set on compare, and then disable channel.


Channel function sequence: 
- Set enabled outputs when C2CC.VAL = CNTR.VAL.
- Disable channel.*/
export const LGPT_C2CFG_CCACT_SET_ON_CMP_DIS: any = '5'

/**
Clear on compare, and then disable channel.


Channel function sequence: 
- Clear enabled outputs when C2CC.VAL = CNTR.VAL.
- Disable channel.*/
export const LGPT_C2CFG_CCACT_CLR_ON_CMP_DIS: any = '4'

/**
Set on zero, toggle on compare, and then disable channel.


Channel function sequence: 
- Set enabled outputs when CNTR.VAL = 0.
- Toggle enabled outputs when C2CC.VAL = CNTR.VAL.
- Disable channel.

Enabled outputs are cleared when C2CC.VAL = 0 and CNTR.VAL = 0.*/
export const LGPT_C2CFG_CCACT_SET_ON_0_TGL_ON_CMP_DIS: any = '3'

/**
Clear on zero, toggle on compare, and then disable channel.


Channel function sequence: 
- Clear enabled outputs when CNTR.VAL = 0.
- Toggle enabled outputs when C2CC.VAL = CNTR.VAL.
- Disable channel.

Enabled outputs are set when C2CC.VAL = 0 and CNTR.VAL = 0.*/
export const LGPT_C2CFG_CCACT_CLR_ON_0_TGL_ON_CMP_DIS: any = '2'

/**
Set on capture, and then disable channel.


Channel function sequence: 
- Set enabled outputs on capture event and copy CNTR.VAL to C2CC.VAL.
- Disable channel. 

Primary use scenario is to select this function before starting the timer.
Follow these steps to select this function while CTL.MODE is different from DIS:  
 - Set CCACT to SET_ON_CAPT with no output enable.
 - Configure INPUT (optional).
 - Wait for three timer clock periods as defined in PRECFG before setting CCACT to SET_ON_CAPT_DIS. Output enable is optional.

These steps prevent capture events caused by expired signal values in edge-detection circuit.*/
export const LGPT_C2CFG_CCACT_SET_ON_CAPT_DIS: any = '1'

/**
Disable channel.*/
export const LGPT_C2CFG_CCACT_DIS: any = '0'


// -------- REGISTER PTGT -------- //

/**
Pipeline Target

A read or write to this register will clear the RIS.ZERO and RIS.TGT interrupt.


If CTL.MODE != QDEC.
Target value for next counter period.
The timer will copy PTGT.VAL to TGT.VAL on the upcoming CNTR zero crossing only if PTGT.VAL has been written. The copy does not happen when restarting the timer.
This is useful to avoid period jitter in PWM applications with time-varying period, sometimes referenced as phase corrected PWM.

If CTL.MODE = QDEC
The CNTR value is updated with VALUE on IDX if the counter is counting down. If the counter is counting up, CNTR is loaded with zero on IDX.
In this mode the VALUE is not loaded into TGT on zero crossing.*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const LGPT_PTGT_RESERVED16: any = '16'
export const LGPT_PTGT_RESERVED16_M: any = '16'
export const LGPT_PTGT_RESERVED16_S: any = '16'
/**
The pipleline target value.*/
export const LGPT_PTGT_VAL: any = '16'
export const LGPT_PTGT_VAL_M: any = '16'
export const LGPT_PTGT_VAL_S: any = '16'

// -------- REGISTER PC0CC -------- //

/**
Pipeline Channel 0 Capture Compare */
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const LGPT_PC0CC_RESERVED16: any = '16'
export const LGPT_PC0CC_RESERVED16_M: any = '16'
export const LGPT_PC0CC_RESERVED16_S: any = '16'
/**
Pipeline Capture Compare value.


User defined pipeline compare value or channel-updated capture value.

A read or write to this register will clear the RIS.C0CC interrupt.

Compare mode: 
An update of VAL will be transferred to C0CC.VAL when the next CNTR.VAL is zero and CTL.MODE is different from DIS. This is useful for PWM generation and prevents jitter on the edges of the generated signal.

Capture mode: 
When C0CFG.CCACT equals PER_PULSE_WIDTH_MEAS then VAL contains the width of the low or high phase of the selected signal. This is specified by C0CFG.EDGE.*/
export const LGPT_PC0CC_VAL: any = '16'
export const LGPT_PC0CC_VAL_M: any = '16'
export const LGPT_PC0CC_VAL_S: any = '16'

// -------- REGISTER PC1CC -------- //

/**
Pipeline Channel 1 Capture Compare */
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const LGPT_PC1CC_RESERVED16: any = '16'
export const LGPT_PC1CC_RESERVED16_M: any = '16'
export const LGPT_PC1CC_RESERVED16_S: any = '16'
/**
Pipeline Capture Compare value.


User defined pipeline compare value or channel-updated capture value.

A read or write to this register will clear the RIS.C1CC interrupt.

Compare mode: 
An update of VAL will be transferred to C1CC.VAL when the next CNTR.VAL is zero and CTL.MODE is different from DIS. This is useful for PWM generation and prevents jitter on the edges of the generated signal.

Capture mode: 
When C1CFG.CCACT equals PER_PULSE_WIDTH_MEAS then VAL contains the width of the low or high phase of the selected signal. This is specified by C1CFG.EDGE.*/
export const LGPT_PC1CC_VAL: any = '16'
export const LGPT_PC1CC_VAL_M: any = '16'
export const LGPT_PC1CC_VAL_S: any = '16'

// -------- REGISTER PC2CC -------- //

/**
Pipeline Channel 2 Capture Compare */
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const LGPT_PC2CC_RESERVED16: any = '16'
export const LGPT_PC2CC_RESERVED16_M: any = '16'
export const LGPT_PC2CC_RESERVED16_S: any = '16'
/**
Pipeline Capture Compare value.


User defined pipeline compare value or channel-updated capture value.

A read or write to this register will clear the RIS.C2CC interrupt.

Compare mode: 
An update of VAL will be transferred to C2CC.VAL when the next CNTR.VAL is zero and CTL.MODE is different from DIS. This is useful for PWM generation and prevents jitter on the edges of the generated signal.

Capture mode: 
When C2CFG.CCACT equals PER_PULSE_WIDTH_MEAS then VAL contains the width of the low or high phase of the selected signal. This is specified by C2CFG.EDGE.*/
export const LGPT_PC2CC_VAL: any = '16'
export const LGPT_PC2CC_VAL_M: any = '16'
export const LGPT_PC2CC_VAL_S: any = '16'

// -------- REGISTER TGT -------- //

/**
Target


User defined counter target. 
A read or write to this register will clear the RIS.ZERO and RIS.TGT interrupt.*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const LGPT_TGT_RESERVED16: any = '16'
export const LGPT_TGT_RESERVED16_M: any = '16'
export const LGPT_TGT_RESERVED16_S: any = '16'
/**
User defined counter target value.*/
export const LGPT_TGT_VAL: any = '16'
export const LGPT_TGT_VAL_M: any = '16'
export const LGPT_TGT_VAL_S: any = '16'

// -------- REGISTER C0CC -------- //

/**
Channel 0 Capture Compare*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const LGPT_C0CC_RESERVED16: any = '16'
export const LGPT_C0CC_RESERVED16_M: any = '16'
export const LGPT_C0CC_RESERVED16_S: any = '16'
/**
Capture Compare value.


User defined compare value or channel-updated capture value.

A read or write to this register will clear the RIS.C0CC interrupt.

Compare mode: 
VAL is compared against CNTR.VAL and an event is generated as specified by C0CFG.CCACT when these are equal. 

Capture mode: 
The current counter value is stored in VAL when a capture event occurs. C0CFG.CCACT determines if VAL is a signal period or a regular capture value.*/
export const LGPT_C0CC_VAL: any = '16'
export const LGPT_C0CC_VAL_M: any = '16'
export const LGPT_C0CC_VAL_S: any = '16'

// -------- REGISTER C1CC -------- //

/**
Channel 1 Capture Compare*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const LGPT_C1CC_RESERVED16: any = '16'
export const LGPT_C1CC_RESERVED16_M: any = '16'
export const LGPT_C1CC_RESERVED16_S: any = '16'
/**
Capture Compare value.


User defined compare value or channel-updated capture value.

A read or write to this register will clear the RIS.C1CC interrupt.

Compare mode: 
VAL is compared against CNTR.VAL and an event is generated as specified by C1CFG.CCACT when these are equal. 

Capture mode: 
The current counter value is stored in VAL when a capture event occurs. C1CFG.CCACT determines if VAL is a signal period or a regular capture value.*/
export const LGPT_C1CC_VAL: any = '16'
export const LGPT_C1CC_VAL_M: any = '16'
export const LGPT_C1CC_VAL_S: any = '16'

// -------- REGISTER C2CC -------- //

/**
Channel 2 Capture Compare*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const LGPT_C2CC_RESERVED16: any = '16'
export const LGPT_C2CC_RESERVED16_M: any = '16'
export const LGPT_C2CC_RESERVED16_S: any = '16'
/**
Capture Compare value.


User defined compare value or channel-updated capture value.

A read or write to this register will clear the RIS.C2CC interrupt.

Compare mode: 
VAL is compared against CNTR.VAL and an event is generated as specified by C2CFG.CCACT when these are equal. 

Capture mode: 
The current counter value is stored in VAL when a capture event occurs. C2CFG.CCACT determines if VAL is a signal period or a regular capture value.*/
export const LGPT_C2CC_VAL: any = '16'
export const LGPT_C2CC_VAL_M: any = '16'
export const LGPT_C2CC_VAL_S: any = '16'

// -------- REGISTER PTGTNC -------- //

/**
Pipeline Target No Clear


Use this register to read or write to PTGT without clearing the RIS.ZERO and RIS.TGT interrupt.*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const LGPT_PTGTNC_RESERVED16: any = '16'
export const LGPT_PTGTNC_RESERVED16_M: any = '16'
export const LGPT_PTGTNC_RESERVED16_S: any = '16'
/**
A read or write to this register will not clear the RIS.TGT interrupt.


If CTL.MODE != QDEC.
Target value for next counter period.
The timer copies VAL to TGT.VAL when CNTR.VAL becomes 0. The copy does not happen when restarting the timer.
This is useful to avoid period jitter in PWM applications with time-varying period, sometimes referenced as phase corrected PWM.

If CTL.MODE = QDEC.
The CNTR.VAL is updated with VAL on IDX. VAL is not loaded into TGT.VAL when CNTR.VAL becomes 0. */
export const LGPT_PTGTNC_VAL: any = '16'
export const LGPT_PTGTNC_VAL_M: any = '16'
export const LGPT_PTGTNC_VAL_S: any = '16'

// -------- REGISTER PC0CCNC -------- //

/**
Pipeline Channel 0 Capture Compare No Clear*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const LGPT_PC0CCNC_RESERVED16: any = '16'
export const LGPT_PC0CCNC_RESERVED16_M: any = '16'
export const LGPT_PC0CCNC_RESERVED16_S: any = '16'
/**
Pipeline Capture Compare value.


User defined pipeline compare value or channel-updated capture value.

A read or write to this register will not clear the RIS.C0CC interrupt.

Compare mode: 
An update of VAL will be transferred to C0CC.VAL when the next CNTR.VAL is zero and CTL.MODE is different from DIS. This is useful for PWM generation and prevents jitter on the edges of the generated signal.

Capture mode: 
When C0CFG.CCACT equals PER_PULSE_WIDTH_MEAS then VAL contains the width of the low or high phase of the selected signal. This is specified by C0CFG.EDGE.*/
export const LGPT_PC0CCNC_VAL: any = '16'
export const LGPT_PC0CCNC_VAL_M: any = '16'
export const LGPT_PC0CCNC_VAL_S: any = '16'

// -------- REGISTER PC1CCNC -------- //

/**
Pipeline Channel 1 Capture Compare No Clear*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const LGPT_PC1CCNC_RESERVED16: any = '16'
export const LGPT_PC1CCNC_RESERVED16_M: any = '16'
export const LGPT_PC1CCNC_RESERVED16_S: any = '16'
/**
Pipeline Capture Compare value.


User defined pipeline compare value or channel-updated capture value.

A read or write to this register will not clear the RIS.C1CC interrupt.

Compare mode: 
An update of VAL will be transferred to C1CC.VAL when the next CNTR.VAL is zero and CTL.MODE is different from DIS. This is useful for PWM generation and prevents jitter on the edges of the generated signal.

Capture mode: 
When C1CFG.CCACT equals PER_PULSE_WIDTH_MEAS then VAL contains the width of the low or high phase of the selected signal. This is specified by C1CFG.EDGE.*/
export const LGPT_PC1CCNC_VAL: any = '16'
export const LGPT_PC1CCNC_VAL_M: any = '16'
export const LGPT_PC1CCNC_VAL_S: any = '16'

// -------- REGISTER PC2CCNC -------- //

/**
Pipeline Channel 2 Capture Compare No Clear*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const LGPT_PC2CCNC_RESERVED16: any = '16'
export const LGPT_PC2CCNC_RESERVED16_M: any = '16'
export const LGPT_PC2CCNC_RESERVED16_S: any = '16'
/**
Pipeline Capture Compare value.


User defined pipeline compare value or channel-updated capture value.

A read or write to this register will not clear the RIS.C2CC interrupt.

Compare mode: 
An update of VAL will be transferred to C2CC.VAL when the next CNTR.VAL is zero and CTL.MODE is different from DIS. This is useful for PWM generation and prevents jitter on the edges of the generated signal.

Capture mode: 
When C2CFG.CCACT equals PER_PULSE_WIDTH_MEAS then VAL contains the width of the low or high phase of the selected signal. This is specified by C2CFG.EDGE.*/
export const LGPT_PC2CCNC_VAL: any = '16'
export const LGPT_PC2CCNC_VAL_M: any = '16'
export const LGPT_PC2CCNC_VAL_S: any = '16'

// -------- REGISTER TGTNC -------- //

/**
Target No Clear


Use this register to read or write to TGT without clearing the RIS.ZERO and RIS.TGT interrupt.*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const LGPT_TGTNC_RESERVED16: any = '16'
export const LGPT_TGTNC_RESERVED16_M: any = '16'
export const LGPT_TGTNC_RESERVED16_S: any = '16'
/**
User defined counter target value.*/
export const LGPT_TGTNC_VAL: any = '16'
export const LGPT_TGTNC_VAL_M: any = '16'
export const LGPT_TGTNC_VAL_S: any = '16'

// -------- REGISTER C0CCNC -------- //

/**
Channel 0 Capture Compare No Clear*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const LGPT_C0CCNC_RESERVED16: any = '16'
export const LGPT_C0CCNC_RESERVED16_M: any = '16'
export const LGPT_C0CCNC_RESERVED16_S: any = '16'
/**
Capture Compare value.


User defined compare value or channel-updated capture value.

A read or write to this register will not clear the RIS.C0CC interrupt.

Compare mode: 
VAL is compared against CNTR.VAL and an event is generated as specified by C0CFG.CCACT when these are equal. 

Capture mode: 
The current counter value is stored in VAL when a capture event occurs. C0CFG.CCACT determines if VAL is a signal period or a regular capture value.*/
export const LGPT_C0CCNC_VAL: any = '16'
export const LGPT_C0CCNC_VAL_M: any = '16'
export const LGPT_C0CCNC_VAL_S: any = '16'

// -------- REGISTER C1CCNC -------- //

/**
Channel 1 Capture Compare No Clear*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const LGPT_C1CCNC_RESERVED16: any = '16'
export const LGPT_C1CCNC_RESERVED16_M: any = '16'
export const LGPT_C1CCNC_RESERVED16_S: any = '16'
/**
Capture Compare value.


User defined compare value or channel-updated capture value.

A read or write to this register will not clear the RIS.C1CC interrupt.

Compare mode: 
VAL is compared against CNTR.VAL and an event is generated as specified by C1CFG.CCACT when these are equal. 

Capture mode: 
The current counter value is stored in VAL when a capture event occurs. C1CFG.CCACT determines if VAL is a signal period or a regular capture value.*/
export const LGPT_C1CCNC_VAL: any = '16'
export const LGPT_C1CCNC_VAL_M: any = '16'
export const LGPT_C1CCNC_VAL_S: any = '16'

// -------- REGISTER C2CCNC -------- //

/**
Channel 2 Capture Compare No Clear*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const LGPT_C2CCNC_RESERVED16: any = '16'
export const LGPT_C2CCNC_RESERVED16_M: any = '16'
export const LGPT_C2CCNC_RESERVED16_S: any = '16'
/**
Capture Compare value.


User defined compare value or channel-updated capture value.

A read or write to this register will not clear the RIS.C2CC interrupt.

Compare mode: 
VAL is compared against CNTR.VAL and an event is generated as specified by C2CFG.CCACT when these are equal. 

Capture mode: 
The current counter value is stored in VAL when a capture event occurs. C2CFG.CCACT determines if VAL is a signal period or a regular capture value.*/
export const LGPT_C2CCNC_VAL: any = '16'
export const LGPT_C2CCNC_VAL_M: any = '16'
export const LGPT_C2CCNC_VAL_S: any = '16'

// -------- MODULE LGPT3 -------- //

export interface LGPT3_t {
    DESC: em.$Reg
    DESCEX: em.$Reg
    STARTCFG: em.$Reg
    CTL: em.$Reg
    OUTCTL: em.$Reg
    CNTR: em.$Reg
    PRECFG: em.$Reg
    PREEVENT: em.$Reg
    CHFILT: em.$Reg
    DMA: em.$Reg
    DMARW: em.$Reg
    ADCTRG: em.$Reg
    IOCTL: em.$Reg
    IMASK: em.$Reg
    RIS: em.$Reg
    MIS: em.$Reg
    ISET: em.$Reg
    ICLR: em.$Reg
    IMSET: em.$Reg
    IMCLR: em.$Reg
    EMU: em.$Reg
    C0CFG: em.$Reg
    C1CFG: em.$Reg
    C2CFG: em.$Reg
    PTGT: em.$Reg
    PC0CC: em.$Reg
    PC1CC: em.$Reg
    PC2CC: em.$Reg
    TGT: em.$Reg
    C0CC: em.$Reg
    C1CC: em.$Reg
    C2CC: em.$Reg
    PTGTNC: em.$Reg
    PC0CCNC: em.$Reg
    PC1CCNC: em.$Reg
    PC2CCNC: em.$Reg
    TGTNC: em.$Reg
    C0CCNC: em.$Reg
    C1CCNC: em.$Reg
    C2CCNC: em.$Reg
}

// -------- REGISTER DESC -------- //

/**
Description Register.


This register provides IP module ID, revision information, instance index and standard MMR registers offset.*/
/**
Module identifier used to uniquely identify this IP.

*/
export const LGPT3_DESC_MODID: any = '16'
export const LGPT3_DESC_MODID_M: any = '16'
export const LGPT3_DESC_MODID_S: any = '16'
/**
Standard IP MMR block offset. Standard IP MMRs are the set of from aggregated IRQ registers till DTB.


0: Standard IP MMRs do not exist

0x1-0xF: Standard IP MMRs begin at offset of (64*STDIPOFF from the base IP address)*/
export const LGPT3_DESC_STDIPOFF: any = '4'
export const LGPT3_DESC_STDIPOFF_M: any = '4'
export const LGPT3_DESC_STDIPOFF_S: any = '4'
/**
IP Instance ID number. If multiple instances of IP exist in the device, this field can identify the instance number.*/
export const LGPT3_DESC_INSTIDX: any = '4'
export const LGPT3_DESC_INSTIDX_M: any = '4'
export const LGPT3_DESC_INSTIDX_S: any = '4'
/**
Major revision of IP.*/
export const LGPT3_DESC_MAJREV: any = '4'
export const LGPT3_DESC_MAJREV_M: any = '4'
export const LGPT3_DESC_MAJREV_S: any = '4'
/**
Minor revision of IP.*/
export const LGPT3_DESC_MINREV: any = '4'
export const LGPT3_DESC_MINREV_M: any = '4'
export const LGPT3_DESC_MINREV_S: any = '4'

// -------- REGISTER DESCEX -------- //

/**
Description Extended


This register describes the parameters of the LGPT.*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const LGPT3_DESCEX_RESERVED20: any = '12'
export const LGPT3_DESCEX_RESERVED20_M: any = '12'
export const LGPT3_DESCEX_RESERVED20_S: any = '12'
/**
Has IR logic.*/
export const LGPT3_DESCEX_HIR: any = '1'
export const LGPT3_DESCEX_HIR_M: any = '1'
export const LGPT3_DESCEX_HIR_S: any = '1'
/**
Has Dead-Band, Fault, and Park logic.*/
export const LGPT3_DESCEX_HDBF: any = '1'
export const LGPT3_DESCEX_HDBF_M: any = '1'
export const LGPT3_DESCEX_HDBF_S: any = '1'
/**
Prescale width. The prescaler can maximum be configured to 2^PREW-1.*/
export const LGPT3_DESCEX_PREW: any = '4'
export const LGPT3_DESCEX_PREW_M: any = '4'
export const LGPT3_DESCEX_PREW_S: any = '4'
/**
Has Quadrature Decoder.*/
export const LGPT3_DESCEX_HQDEC: any = '1'
export const LGPT3_DESCEX_HQDEC_M: any = '1'
export const LGPT3_DESCEX_HQDEC_S: any = '1'
/**
Has channel input filter.*/
export const LGPT3_DESCEX_HCIF: any = '1'
export const LGPT3_DESCEX_HCIF_M: any = '1'
export const LGPT3_DESCEX_HCIF_S: any = '1'
/**
Channel input filter size. The prevailing state filter can maximum be configured to 2^CIFS-1.*/
export const LGPT3_DESCEX_CIFS: any = '4'
export const LGPT3_DESCEX_CIFS_M: any = '4'
export const LGPT3_DESCEX_CIFS_S: any = '4'
/**
Has uDMA output and logic.*/
export const LGPT3_DESCEX_HDMA: any = '1'
export const LGPT3_DESCEX_HDMA_M: any = '1'
export const LGPT3_DESCEX_HDMA_S: any = '1'
/**
Has interrupt output and logic.*/
export const LGPT3_DESCEX_HINT: any = '1'
export const LGPT3_DESCEX_HINT_M: any = '1'
export const LGPT3_DESCEX_HINT_S: any = '1'
/**
Counter bit-width.

The maximum counter value is equal to 2^CNTRW-1.
*/
export const LGPT3_DESCEX_CNTRW: any = '2'
export const LGPT3_DESCEX_CNTRW_M: any = '2'
export const LGPT3_DESCEX_CNTRW_S: any = '2'
/**
RESERVED*/
export const LGPT3_DESCEX_CNTRW_RESERVED: any = '3'

/**
32-bit counter.*/
export const LGPT3_DESCEX_CNTRW_CNTR32: any = '2'

/**
24-bit counter.*/
export const LGPT3_DESCEX_CNTRW_CNTR24: any = '1'

/**
16-bit counter.*/
export const LGPT3_DESCEX_CNTRW_CNTR16: any = '0'

/**
Number of channels.*/
export const LGPT3_DESCEX_NCH: any = '4'
export const LGPT3_DESCEX_NCH_M: any = '4'
export const LGPT3_DESCEX_NCH_S: any = '4'

// -------- REGISTER STARTCFG -------- //

/**
Start Configuration


This register is only for when CTL.MODE is configured to one of the SYNC modes.
This register defines when this LGPT starts.*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const LGPT3_STARTCFG_RESERVED2: any = '30'
export const LGPT3_STARTCFG_RESERVED2_M: any = '30'
export const LGPT3_STARTCFG_RESERVED2_S: any = '30'
/**
LGPT start

*/
export const LGPT3_STARTCFG_LGPT0: any = '2'
export const LGPT3_STARTCFG_LGPT0_M: any = '2'
export const LGPT3_STARTCFG_LGPT0_S: any = '2'
/**
LGPT starts when synchronized event input is high. Configured here EVTSVT.LGPTSYNCSEL.*/
export const LGPT3_STARTCFG_LGPT0_EV_SYNC: any = '0'


// -------- REGISTER CTL -------- //

/**
Timer Control*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const LGPT3_CTL_RESERVED11: any = '21'
export const LGPT3_CTL_RESERVED11_M: any = '21'
export const LGPT3_CTL_RESERVED11_S: any = '21'
/**
Channel 2 reset.*/
export const LGPT3_CTL_C2RST: any = '1'
export const LGPT3_CTL_C2RST_M: any = '1'
export const LGPT3_CTL_C2RST_S: any = '1'
/**
Reset C2CC, PC2CC, and C2CFG.*/
export const LGPT3_CTL_C2RST_RST: any = '1'

/**
No effect.*/
export const LGPT3_CTL_C2RST_NOEFF: any = '0'

/**
Channel 1 reset.*/
export const LGPT3_CTL_C1RST: any = '1'
export const LGPT3_CTL_C1RST_M: any = '1'
export const LGPT3_CTL_C1RST_S: any = '1'
/**
Reset C1CC, PC1CC, and C1CFG.*/
export const LGPT3_CTL_C1RST_RST: any = '1'

/**
No effect.*/
export const LGPT3_CTL_C1RST_NOEFF: any = '0'

/**
Channel 0 reset.*/
export const LGPT3_CTL_C0RST: any = '1'
export const LGPT3_CTL_C0RST_M: any = '1'
export const LGPT3_CTL_C0RST_S: any = '1'
/**
Reset C0CC, PC0CC, and C0CFG.*/
export const LGPT3_CTL_C0RST_RST: any = '1'

/**
No effect.*/
export const LGPT3_CTL_C0RST_NOEFF: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const LGPT3_CTL_RESERVED6: any = '2'
export const LGPT3_CTL_RESERVED6_M: any = '2'
export const LGPT3_CTL_RESERVED6_S: any = '2'
/**
Interrupt Phase.

This bit field controls when the RIS.TGT and RIS.ZERO interrupts are set.*/
export const LGPT3_CTL_INTP: any = '1'
export const LGPT3_CTL_INTP_M: any = '1'
export const LGPT3_CTL_INTP_S: any = '1'
/**
RIS.TGT and RIS.ZERO are set one timer clock cycle after CNTR = TARGET/ZERO.*/
export const LGPT3_CTL_INTP_LATE: any = '1'

/**
RIS.TGT and RIS.ZERO are set one system clock cycle after CNTR = TARGET/ZERO.*/
export const LGPT3_CTL_INTP_EARLY: any = '0'

/**
Compare direction.


This bit field controls the direction the counter must have in order to set the [RIS.CnCC] channel interrupts. This bitfield is only relevant if [CnCFG.CCACT] is configured to a compare action. */
export const LGPT3_CTL_CMPDIR: any = '2'
export const LGPT3_CTL_CMPDIR_M: any = '2'
export const LGPT3_CTL_CMPDIR_S: any = '2'
/**
RESERVED*/
export const LGPT3_CTL_CMPDIR_RESERVED: any = '3'

/**
Compare RIS fields are only set on down count.*/
export const LGPT3_CTL_CMPDIR_DOWN: any = '2'

/**
Compare RIS fields are only set on up count.*/
export const LGPT3_CTL_CMPDIR_UP: any = '1'

/**
Compare RIS fields are set on up count and down count.*/
export const LGPT3_CTL_CMPDIR_BOTH: any = '0'

/**
Timer mode control


The CNTR restarts from 0 when MODE is written to UP_ONCE, UP_PER, UPDWN_PER, QDEC, SYNC_UP_ONCE, SYNC_UP_PER or SYNC_UPDWN_PER.

When writing MODE all internally queued updates to the channels and TGT is cleared.

When configuring the timer, MODE should be the last thing to configure. If changing timer configuration after MODE has been set is necessary, instructions, if any, given in the configuration registers should be followed. See for example C0CFG.
*/
export const LGPT3_CTL_MODE: any = '3'
export const LGPT3_CTL_MODE_M: any = '3'
export const LGPT3_CTL_MODE_S: any = '3'
/**
Start counting up and down periodically synchronous to another LGPT,  selected within STARTCFG. The timer is started by setting CTL.MODE = UPDWN_PER automatically. 

It then operates as a normal timer in CTL.MODE = UPDWN_PER, counting from 0 to target value and back to 0, repeatedly.

Period =  (target value * 2) * timer clock period*/
export const LGPT3_CTL_MODE_SYNC_UPDWN_PER: any = '7'

/**
Start counting up periodically synchronous to another LGPT,  selected within STARTCFG. The timer is started by setting CTL.MODE = UP_PER automatically. 

It then operates as a normal timer in CTL.MODE = UP_PER, incrementing from 0 to target value, repeatedly.

Period =  (target value * 2) * timer clock period
*/
export const LGPT3_CTL_MODE_SYNC_UP_PER: any = '6'

/**
Start counting up once synchronous to another LGPT, selected within STARTCFG. The timer is started by setting CTL.MODE = UP_ONCE automatically. 

It then functions as a normal timer in CTL.MODE = UP_ONCE, incrementing from 0 to target value,  then stops and sets MODE to DIS.
*/
export const LGPT3_CTL_MODE_SYNC_UP_ONCE: any = '5'

/**
The timer functions as a quadrature decoder. IOC input 0, IOC input 1 and IOC input 2 are used respectivly as PHA, PHB and IDX inputs. IDX can be turned off by setting C2CFG.EDGE = NONE.

The timer clock frequency sets the sample rate of the QDEC logic. This frequency can be configured in PRECFG.*/
export const LGPT3_CTL_MODE_QDEC: any = '4'

/**
Count up and down periodically. The timer counts from 0 to target value and back to 0, repeatedly.


Period =  (target value * 2) * timer clock period*/
export const LGPT3_CTL_MODE_UPDWN_PER: any = '3'

/**
Count up periodically. The timer increments from 0 to target value, repeatedly.


Period = (target value + 1) * timer clock period*/
export const LGPT3_CTL_MODE_UP_PER: any = '2'

/**
Count up once. The timer increments from 0 to target value,  then stops and sets MODE to DIS.*/
export const LGPT3_CTL_MODE_UP_ONCE: any = '1'

/**
Disable timer. Updates to counter, channels, and events stop.*/
export const LGPT3_CTL_MODE_DIS: any = '0'


// -------- REGISTER OUTCTL -------- //

/**
Output Control


Set and clear individual outputs manually. Manual update of an output takes priority over automatic channel updates to the same output. It is not possible to set and clear an output at the same time, such requests will be neglected.

An output can be automatically cleared, set, toggled, or pulsed by each channel, listed in decreasing order of priority. The action with highest priority happens when multiple channels want to update an output at the same time.

All outputs are connected to the event fabric and the IO controller. The outputs going to the IO controller have an aditional complementary output, this output is the inverted IO output. Both the IO and the IO complementary outputs are passed through an IO Controller, see IOCTL.
*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const LGPT3_OUTCTL_RESERVED6: any = '26'
export const LGPT3_OUTCTL_RESERVED6_M: any = '26'
export const LGPT3_OUTCTL_RESERVED6_S: any = '26'
/**
Set output 2.


Write 1 to set output 2.*/
export const LGPT3_OUTCTL_SETOUT2: any = '1'
export const LGPT3_OUTCTL_SETOUT2_M: any = '1'
export const LGPT3_OUTCTL_SETOUT2_S: any = '1'
/**
Clear output 2.


Write 1 to clear output 2.*/
export const LGPT3_OUTCTL_CLROUT2: any = '1'
export const LGPT3_OUTCTL_CLROUT2_M: any = '1'
export const LGPT3_OUTCTL_CLROUT2_S: any = '1'
/**
Set output 1.


Write 1 to set output 1.*/
export const LGPT3_OUTCTL_SETOUT1: any = '1'
export const LGPT3_OUTCTL_SETOUT1_M: any = '1'
export const LGPT3_OUTCTL_SETOUT1_S: any = '1'
/**
Clear output 1.


Write 1 to clear output 1.*/
export const LGPT3_OUTCTL_CLROUT1: any = '1'
export const LGPT3_OUTCTL_CLROUT1_M: any = '1'
export const LGPT3_OUTCTL_CLROUT1_S: any = '1'
/**
Set output 0.


Write 1 to set output 0.*/
export const LGPT3_OUTCTL_SETOUT0: any = '1'
export const LGPT3_OUTCTL_SETOUT0_M: any = '1'
export const LGPT3_OUTCTL_SETOUT0_S: any = '1'
/**
Clear output 0.


Write 1 to clear output 0.*/
export const LGPT3_OUTCTL_CLROUT0: any = '1'
export const LGPT3_OUTCTL_CLROUT0_M: any = '1'
export const LGPT3_OUTCTL_CLROUT0_S: any = '1'

// -------- REGISTER CNTR -------- //

/**
Counter

The counter of this timer. After CTL.MODE is set the counter updates at the rate specified in PRECFG.*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const LGPT3_CNTR_RESERVED24: any = '8'
export const LGPT3_CNTR_RESERVED24_M: any = '8'
export const LGPT3_CNTR_RESERVED24_S: any = '8'
/**
Current counter value.

If CTL.MODE = QDEC this can be used to set the initial counter value during QDEC.  Writing to CNTR in other modes than QDEC is possible, but may result in unpredictable behavior.*/
export const LGPT3_CNTR_VAL: any = '24'
export const LGPT3_CNTR_VAL_M: any = '24'
export const LGPT3_CNTR_VAL_S: any = '24'

// -------- REGISTER PRECFG -------- //

/**
Clock Prescaler Configuration


This register is used to set the timer clock period. The prescaler is a counter which counts down from the value TICKDIV. When the prescaler counter reaches zero, CNTR is updated. The field TICKDIV effectively divides the prescaler tick source. The timer clock frequency can be calculated as TICKSRC/(TICKDIV+1).*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const LGPT3_PRECFG_RESERVED16: any = '16'
export const LGPT3_PRECFG_RESERVED16_M: any = '16'
export const LGPT3_PRECFG_RESERVED16_S: any = '16'
/**
Tick division.


TICKDIV determines the timer clock frequency for the counter, and timer output updates. The timer clock frequency is the clock selected by TICKSRC divided by (TICKDIV + 1). This inverse is the timer clock period.

0x00: Divide by 1.
0x01: Divide by 2.
... 
0xFF: Divide by 256.*/
export const LGPT3_PRECFG_TICKDIV: any = '8'
export const LGPT3_PRECFG_TICKDIV_M: any = '8'
export const LGPT3_PRECFG_TICKDIV_S: any = '8'
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const LGPT3_PRECFG_RESERVED2: any = '6'
export const LGPT3_PRECFG_RESERVED2_M: any = '6'
export const LGPT3_PRECFG_RESERVED2_S: any = '6'
/**
Prescaler tick source.


TICKSRC determines the source which decrements the prescaler.*/
export const LGPT3_PRECFG_TICKSRC: any = '2'
export const LGPT3_PRECFG_TICKSRC_M: any = '2'
export const LGPT3_PRECFG_TICKSRC_S: any = '2'
/**
Prescaler is updated at both edges of TICKEN.*/
export const LGPT3_PRECFG_TICKSRC_BOTH_TICK: any = '3'

/**
Prescaler is updated at the falling edge of TICKEN.*/
export const LGPT3_PRECFG_TICKSRC_FALL_TICK: any = '2'

/**
Prescaler is updated at the rising edge of TICKEN.*/
export const LGPT3_PRECFG_TICKSRC_RISE_TICK: any = '1'

/**
Prescaler is updated at the system clock.*/
export const LGPT3_PRECFG_TICKSRC_CLK: any = '0'


// -------- REGISTER PREEVENT -------- //

/**
Prescaler Event


This register is used to output a logic high signal before the zero crossing of the prescaler counter. The output is routed to the IOC.*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const LGPT3_PREEVENT_RESERVED8: any = '24'
export const LGPT3_PREEVENT_RESERVED8_M: any = '24'
export const LGPT3_PREEVENT_RESERVED8_S: any = '24'
/**
Sets the HIGH time of the prescaler event output. 


Event goes high when the prescaler counter equals VAL. Event goes low when prescaler counter is 0.

Note:
- Can be used to precharge or turn an external component on for a short time before sampling, like in QDEC.
- If there is a requirement to create such events that have very short periods compared to timer clock period, use two timers. One timer acts as prescaler and event generator for another timer.*/
export const LGPT3_PREEVENT_VAL: any = '8'
export const LGPT3_PREEVENT_VAL_M: any = '8'
export const LGPT3_PREEVENT_VAL_S: any = '8'

// -------- REGISTER CHFILT -------- //

/**
Channel Input Filter


This register is used to configure the filter on the channel inputs. The configuration is for all inputs.
The filter is enabled when a channel is in capture mode.

The input to the filter is passed to the edge detection logic if LOAD + 1 consecutive input samples are equal. The filter functions as a down counter, counting down every input sample.
If two consecutive samples are unequal, the filter counter restarts from LOAD.
If the filter counter reaches zero, the input signal is valid and passed to the edge detection logic.

The channel filter should only be configured while the CTL.MODE = DIS. Configuring the filter while the timer is running can result in unexpected behavior.*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const LGPT3_CHFILT_RESERVED16: any = '16'
export const LGPT3_CHFILT_RESERVED16_M: any = '16'
export const LGPT3_CHFILT_RESERVED16_S: any = '16'
/**
The input of the channel filter is passed to the edge detection logic after LOAD + 1 consecutive equal samples.*/
export const LGPT3_CHFILT_LOAD: any = '8'
export const LGPT3_CHFILT_LOAD_M: any = '8'
export const LGPT3_CHFILT_LOAD_S: any = '8'
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const LGPT3_CHFILT_RESERVED2: any = '6'
export const LGPT3_CHFILT_RESERVED2_M: any = '6'
export const LGPT3_CHFILT_RESERVED2_S: any = '6'
/**
Channel filter mode*/
export const LGPT3_CHFILT_MODE: any = '2'
export const LGPT3_CHFILT_MODE_M: any = '2'
export const LGPT3_CHFILT_MODE_S: any = '2'
/**
Filter is clocked by timer clock.*/
export const LGPT3_CHFILT_MODE_TIMERCLK: any = '3'

/**
Filter is clocked by PRECFG.TICKSRC.*/
export const LGPT3_CHFILT_MODE_TICKSRC: any = '2'

/**
Filter is clocked by system clock.*/
export const LGPT3_CHFILT_MODE_CLK: any = '1'

/**
Filter is bypassed. No Filter is used.*/
export const LGPT3_CHFILT_MODE_BYPASS: any = '0'


// -------- REGISTER DMA -------- //

/**
Direct Memory Accsess


This register is used to enable DMA requests from the timer and set the register addresses which the DMA will access (read/write).
Choose DMA request source by setting the REQ field. The setting of the corresponding interrupt in the RIS registers also sets the DMA request. 
Upon a DMA request defined by REQ an internal address pointer is set to RWADDR*4. Every access to DMARW will increment the internal pointer by 4 such that the next DMA access will be to the next register.
The internal pointer will stop after RWCNTR increments. Further access will be ignored.*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const LGPT3_DMA_RESERVED20: any = '12'
export const LGPT3_DMA_RESERVED20_M: any = '12'
export const LGPT3_DMA_RESERVED20_S: any = '12'
/**
The read/write counter. RWCNTR+1 is the number of times the DMA can access (read/write) the DMARW register. For each DMA access to DMARW an internal counter is incremented, writing to the next address field. RWADDR + 4*RWCNTR is the final register address which can be accessed by the DMA.*/
export const LGPT3_DMA_RWCNTR: any = '4'
export const LGPT3_DMA_RWCNTR_M: any = '4'
export const LGPT3_DMA_RWCNTR_S: any = '4'
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const LGPT3_DMA_RESERVED15: any = '1'
export const LGPT3_DMA_RESERVED15_M: any = '1'
export const LGPT3_DMA_RESERVED15_S: any = '1'
/**
The base address which the DMA access when reading/writing DMARW.  The base address is set by taking the 9 LSB of the physical address and divide by 4.

For example, if you wanted the RWADDR to point to the PTGT register you should set RWADDR = 0x0FC/4.*/
export const LGPT3_DMA_RWADDR: any = '7'
export const LGPT3_DMA_RWADDR_M: any = '7'
export const LGPT3_DMA_RWADDR_S: any = '7'
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const LGPT3_DMA_RESERVED4: any = '4'
export const LGPT3_DMA_RESERVED4_M: any = '4'
export const LGPT3_DMA_RESERVED4_S: any = '4'
/**
*/
export const LGPT3_DMA_REQ: any = '4'
export const LGPT3_DMA_REQ_M: any = '4'
export const LGPT3_DMA_REQ_S: any = '4'
/**
Setting of RIS.C11CC generates a DMA request.*/
export const LGPT3_DMA_REQ_C11CC: any = '15'

/**
Setting of RIS.C10CC generates a DMA request.*/
export const LGPT3_DMA_REQ_C10CC: any = '14'

/**
Setting of RIS.C9CC generates a DMA request.*/
export const LGPT3_DMA_REQ_C9CC: any = '13'

/**
Setting of RIS.C8CC generates a DMA request.*/
export const LGPT3_DMA_REQ_C8CC: any = '12'

/**
Setting of RIS.C7CC generates a DMA request.*/
export const LGPT3_DMA_REQ_C7CC: any = '11'

/**
Setting of RIS.C6CC generates a DMA request.*/
export const LGPT3_DMA_REQ_C6CC: any = '10'

/**
Setting of RIS.C5CC generates a DMA request.*/
export const LGPT3_DMA_REQ_C5CC: any = '9'

/**
Setting of RIS.C4CC generates a DMA request.*/
export const LGPT3_DMA_REQ_C4CC: any = '8'

/**
Setting of RIS.C3CC generates a DMA request.*/
export const LGPT3_DMA_REQ_C3CC: any = '7'

/**
Setting of RIS.C2CC generates a DMA request.*/
export const LGPT3_DMA_REQ_C2CC: any = '6'

/**
Setting of RIS.C1CC generates a DMA request.*/
export const LGPT3_DMA_REQ_C1CC: any = '5'

/**
Setting of RIS.C0CC generates a DMA request.*/
export const LGPT3_DMA_REQ_C0CC: any = '4'

/**
Setting of RIS.FAULT generates a DMA request.*/
export const LGPT3_DMA_REQ_FAULT: any = '3'

/**
Setting of RIS.ZERO generates a DMA request.*/
export const LGPT3_DMA_REQ_ZERO: any = '2'

/**
Setting of RIS.TGT generates a DMA request.

*/
export const LGPT3_DMA_REQ_TGT: any = '1'

/**
Disabled*/
export const LGPT3_DMA_REQ_DIS: any = '0'


// -------- REGISTER DMARW -------- //

/**
Direct Memory Access


This register is used by the DMA to access (read/write) register inside this LGPT module.
Each access to this register will increment the internal DMA address counter. See DMA for description.*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const LGPT3_DMARW_RESERVED24: any = '8'
export const LGPT3_DMARW_RESERVED24_M: any = '8'
export const LGPT3_DMARW_RESERVED24_S: any = '8'
/**
DMA read write value.


The value that is read/written from/to the registers.*/
export const LGPT3_DMARW_VAL: any = '24'
export const LGPT3_DMARW_VAL_M: any = '24'
export const LGPT3_DMARW_VAL_S: any = '24'

// -------- REGISTER ADCTRG -------- //

/**
ADC Trigger


This register is used to enable ADC trigger from the timer. 
Choose ADC trigger source by setting the SRC field. The setting of the corresponding interrupt in the RIS registers also sets the ADC trigger. */
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const LGPT3_ADCTRG_RESERVED4: any = '28'
export const LGPT3_ADCTRG_RESERVED4_M: any = '28'
export const LGPT3_ADCTRG_RESERVED4_S: any = '28'
/**
*/
export const LGPT3_ADCTRG_SRC: any = '4'
export const LGPT3_ADCTRG_SRC_M: any = '4'
export const LGPT3_ADCTRG_SRC_S: any = '4'
/**
Setting of RIS.C11CC generates an ADC trigger.*/
export const LGPT3_ADCTRG_SRC_C11CC: any = '15'

/**
Setting of RIS.C10CC generates an ADC trigger.*/
export const LGPT3_ADCTRG_SRC_C10CC: any = '14'

/**
Setting of RIS.C9CC generates an ADC trigger.*/
export const LGPT3_ADCTRG_SRC_C9CC: any = '13'

/**
Setting of RIS.C8CC generates an ADC trigger.*/
export const LGPT3_ADCTRG_SRC_C8CC: any = '12'

/**
Setting of RIS.C7CC generates an ADC trigger.*/
export const LGPT3_ADCTRG_SRC_C7CC: any = '11'

/**
Setting of RIS.C6CC generates an ADC trigger.*/
export const LGPT3_ADCTRG_SRC_C6CC: any = '10'

/**
Setting of RIS.C5CC generates an ADC trigger.*/
export const LGPT3_ADCTRG_SRC_C5CC: any = '9'

/**
Setting of RIS.C4CC generates an ADC trigger.*/
export const LGPT3_ADCTRG_SRC_C4CC: any = '8'

/**
Setting of RIS.C3CC generates an ADC trigger.*/
export const LGPT3_ADCTRG_SRC_C3CC: any = '7'

/**
Setting of RIS.C2CC generates an ADC trigger.*/
export const LGPT3_ADCTRG_SRC_C2CC: any = '6'

/**
Setting of RIS.C1CC generates an ADC trigger.*/
export const LGPT3_ADCTRG_SRC_C1CC: any = '5'

/**
Setting of RIS.C0CC generates an ADC trigger.*/
export const LGPT3_ADCTRG_SRC_C0CC: any = '4'

/**
Setting of RIS.FAULT generates an ADC trigger.*/
export const LGPT3_ADCTRG_SRC_FAULT: any = '3'

/**
Setting of RIS.ZERO generates an ADC trigger.*/
export const LGPT3_ADCTRG_SRC_ZERO: any = '2'

/**
Setting of RIS.TGT generates an ADC trigger.

*/
export const LGPT3_ADCTRG_SRC_TGT: any = '1'

/**
Disabled*/
export const LGPT3_ADCTRG_SRC_DIS: any = '0'


// -------- REGISTER IOCTL -------- //

/**
IO Controller


This register overrides the IO outputs.*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const LGPT3_IOCTL_RESERVED12: any = '20'
export const LGPT3_IOCTL_RESERVED12_M: any = '20'
export const LGPT3_IOCTL_RESERVED12_S: any = '20'
/**
IO complementary output 2 control


This bit field controls IO complementary output 2. */
export const LGPT3_IOCTL_COUT2: any = '2'
export const LGPT3_IOCTL_COUT2_M: any = '2'
export const LGPT3_IOCTL_COUT2_S: any = '2'
/**
Inverted value. The IO complementary output is inverted.*/
export const LGPT3_IOCTL_COUT2_INV: any = '3'

/**
Driven high. The IO complementary output is driven high.*/
export const LGPT3_IOCTL_COUT2_HIGH: any = '2'

/**
Driven low. The IO complementary output is driven low.*/
export const LGPT3_IOCTL_COUT2_LOW: any = '1'

/**
Normal output. The IO complementary output is not changed.*/
export const LGPT3_IOCTL_COUT2_NRM: any = '0'

/**
IO output 2 control


This bit field controls IO output 2. */
export const LGPT3_IOCTL_OUT2: any = '2'
export const LGPT3_IOCTL_OUT2_M: any = '2'
export const LGPT3_IOCTL_OUT2_S: any = '2'
/**
Inverted value. The IO output is inverted.*/
export const LGPT3_IOCTL_OUT2_INV: any = '3'

/**
Driven high. The IO output is driven high.*/
export const LGPT3_IOCTL_OUT2_HIGH: any = '2'

/**
Driven low. The IO output is driven low.*/
export const LGPT3_IOCTL_OUT2_LOW: any = '1'

/**
Normal output. The IO output is not changed.*/
export const LGPT3_IOCTL_OUT2_NRM: any = '0'

/**
IO complementary output 1 control


This bit field controls IO complementary output 1. */
export const LGPT3_IOCTL_COUT1: any = '2'
export const LGPT3_IOCTL_COUT1_M: any = '2'
export const LGPT3_IOCTL_COUT1_S: any = '2'
/**
Inverted value. The IO complementary output is inverted.*/
export const LGPT3_IOCTL_COUT1_INV: any = '3'

/**
Driven high. The IO complementary output is driven high.*/
export const LGPT3_IOCTL_COUT1_HIGH: any = '2'

/**
Driven low. The IO complementary output is driven low.*/
export const LGPT3_IOCTL_COUT1_LOW: any = '1'

/**
Normal output. The IO complementary output is not changed.*/
export const LGPT3_IOCTL_COUT1_NRM: any = '0'

/**
IO output 1 control


This bit field controls IO output 1. */
export const LGPT3_IOCTL_OUT1: any = '2'
export const LGPT3_IOCTL_OUT1_M: any = '2'
export const LGPT3_IOCTL_OUT1_S: any = '2'
/**
Inverted value. The IO output is inverted.*/
export const LGPT3_IOCTL_OUT1_INV: any = '3'

/**
Driven high. The IO output is driven high.*/
export const LGPT3_IOCTL_OUT1_HIGH: any = '2'

/**
Driven low. The IO output is driven low.*/
export const LGPT3_IOCTL_OUT1_LOW: any = '1'

/**
Normal output. The IO output is not changed.*/
export const LGPT3_IOCTL_OUT1_NRM: any = '0'

/**
IO complementary output 0 control


This bit field controls IO complementary output 0. */
export const LGPT3_IOCTL_COUT0: any = '2'
export const LGPT3_IOCTL_COUT0_M: any = '2'
export const LGPT3_IOCTL_COUT0_S: any = '2'
/**
Inverted value. The IO complementary output is inverted.*/
export const LGPT3_IOCTL_COUT0_INV: any = '3'

/**
Driven high. The IO complementary output is driven high.*/
export const LGPT3_IOCTL_COUT0_HIGH: any = '2'

/**
Driven low. The IO complementary output is driven low.*/
export const LGPT3_IOCTL_COUT0_LOW: any = '1'

/**
Normal output. The IO complementary output is not changed.*/
export const LGPT3_IOCTL_COUT0_NRM: any = '0'

/**
IO output 0 control


This bit field controls IO output 0. */
export const LGPT3_IOCTL_OUT0: any = '2'
export const LGPT3_IOCTL_OUT0_M: any = '2'
export const LGPT3_IOCTL_OUT0_S: any = '2'
/**
Inverted value. The IO output is inverted.*/
export const LGPT3_IOCTL_OUT0_INV: any = '3'

/**
Driven high. The IO output is driven high.*/
export const LGPT3_IOCTL_OUT0_HIGH: any = '2'

/**
Driven low. The IO output is driven low.*/
export const LGPT3_IOCTL_OUT0_LOW: any = '1'

/**
Normal output. The IO output is not changed.*/
export const LGPT3_IOCTL_OUT0_NRM: any = '0'


// -------- REGISTER IMASK -------- //

/**
Interrupt mask. 


This register selects interrupt sources which are allowed to pass from RIS to MIS when the corresponding bit-fields are set to 1.*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const LGPT3_IMASK_RESERVED11: any = '21'
export const LGPT3_IMASK_RESERVED11_M: any = '21'
export const LGPT3_IMASK_RESERVED11_S: any = '21'
/**
Enable RIS.C2CC interrupt.*/
export const LGPT3_IMASK_C2CC: any = '1'
export const LGPT3_IMASK_C2CC_M: any = '1'
export const LGPT3_IMASK_C2CC_S: any = '1'
/**
Enable*/
export const LGPT3_IMASK_C2CC_EN: any = '1'

/**
Disable*/
export const LGPT3_IMASK_C2CC_DIS: any = '0'

/**
Enable RIS.C1CC interrupt.*/
export const LGPT3_IMASK_C1CC: any = '1'
export const LGPT3_IMASK_C1CC_M: any = '1'
export const LGPT3_IMASK_C1CC_S: any = '1'
/**
Enable*/
export const LGPT3_IMASK_C1CC_EN: any = '1'

/**
Disable*/
export const LGPT3_IMASK_C1CC_DIS: any = '0'

/**
Enable RIS.C0CC interrupt.*/
export const LGPT3_IMASK_C0CC: any = '1'
export const LGPT3_IMASK_C0CC_M: any = '1'
export const LGPT3_IMASK_C0CC_S: any = '1'
/**
Enable*/
export const LGPT3_IMASK_C0CC_EN: any = '1'

/**
Disable*/
export const LGPT3_IMASK_C0CC_DIS: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const LGPT3_IMASK_RESERVED7: any = '1'
export const LGPT3_IMASK_RESERVED7_M: any = '1'
export const LGPT3_IMASK_RESERVED7_S: any = '1'
/**
Enable RIS.FAULT interrupt.*/
export const LGPT3_IMASK_FAULT: any = '1'
export const LGPT3_IMASK_FAULT_M: any = '1'
export const LGPT3_IMASK_FAULT_S: any = '1'
/**
Enable*/
export const LGPT3_IMASK_FAULT_EN: any = '1'

/**
Disable*/
export const LGPT3_IMASK_FAULT_DIS: any = '0'

/**
Enable RIS.IDX interrupt.*/
export const LGPT3_IMASK_IDX: any = '1'
export const LGPT3_IMASK_IDX_M: any = '1'
export const LGPT3_IMASK_IDX_S: any = '1'
/**
Enable*/
export const LGPT3_IMASK_IDX_EN: any = '1'

/**
Disable*/
export const LGPT3_IMASK_IDX_DIS: any = '0'

/**
Enable RIS.DIRCHNG interrupt.*/
export const LGPT3_IMASK_DIRCHNG: any = '1'
export const LGPT3_IMASK_DIRCHNG_M: any = '1'
export const LGPT3_IMASK_DIRCHNG_S: any = '1'
/**
Enable*/
export const LGPT3_IMASK_DIRCHNG_EN: any = '1'

/**
Disable*/
export const LGPT3_IMASK_DIRCHNG_DIS: any = '0'

/**
Enable RIS.CNTRCHNG interrupt.*/
export const LGPT3_IMASK_CNTRCHNG: any = '1'
export const LGPT3_IMASK_CNTRCHNG_M: any = '1'
export const LGPT3_IMASK_CNTRCHNG_S: any = '1'
/**
Enable*/
export const LGPT3_IMASK_CNTRCHNG_EN: any = '1'

/**
Disable*/
export const LGPT3_IMASK_CNTRCHNG_DIS: any = '0'

/**
Enable RIS.DBLTRANS interrupt.*/
export const LGPT3_IMASK_DBLTRANS: any = '1'
export const LGPT3_IMASK_DBLTRANS_M: any = '1'
export const LGPT3_IMASK_DBLTRANS_S: any = '1'
/**
Enable*/
export const LGPT3_IMASK_DBLTRANS_EN: any = '1'

/**
Disable*/
export const LGPT3_IMASK_DBLTRANS_DIS: any = '0'

/**
Enable RIS.ZERO interrupt.*/
export const LGPT3_IMASK_ZERO: any = '1'
export const LGPT3_IMASK_ZERO_M: any = '1'
export const LGPT3_IMASK_ZERO_S: any = '1'
/**
Enable*/
export const LGPT3_IMASK_ZERO_EN: any = '1'

/**
Disable*/
export const LGPT3_IMASK_ZERO_DIS: any = '0'

/**
Enable RIS.TGT interrupt.*/
export const LGPT3_IMASK_TGT: any = '1'
export const LGPT3_IMASK_TGT_M: any = '1'
export const LGPT3_IMASK_TGT_S: any = '1'
/**
Enable*/
export const LGPT3_IMASK_TGT_EN: any = '1'

/**
Disable*/
export const LGPT3_IMASK_TGT_DIS: any = '0'


// -------- REGISTER RIS -------- //

/**
Raw interrupt status. 


This register reflects the state of all pending interrupts, regardless of masking. This register allows the user to implement a poll scheme. A flag set in this register can be cleared by writing 1 to the corresponding ICLR register bit.*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const LGPT3_RIS_RESERVED11: any = '21'
export const LGPT3_RIS_RESERVED11_M: any = '21'
export const LGPT3_RIS_RESERVED11_S: any = '21'
/**
Status of the C2CC interrupt. The interrupt is set when C2CC has capture or compare event. */
export const LGPT3_RIS_C2CC: any = '1'
export const LGPT3_RIS_C2CC_M: any = '1'
export const LGPT3_RIS_C2CC_S: any = '1'
/**
Set*/
export const LGPT3_RIS_C2CC_SET: any = '1'

/**
Cleared*/
export const LGPT3_RIS_C2CC_CLR: any = '0'

/**
Status of the C1CC interrupt. The interrupt is set when C1CC has capture or compare event. */
export const LGPT3_RIS_C1CC: any = '1'
export const LGPT3_RIS_C1CC_M: any = '1'
export const LGPT3_RIS_C1CC_S: any = '1'
/**
Set*/
export const LGPT3_RIS_C1CC_SET: any = '1'

/**
Cleared*/
export const LGPT3_RIS_C1CC_CLR: any = '0'

/**
Status of the C0CC interrupt. The interrupt is set when C0CC has capture or compare event. */
export const LGPT3_RIS_C0CC: any = '1'
export const LGPT3_RIS_C0CC_M: any = '1'
export const LGPT3_RIS_C0CC_S: any = '1'
/**
Set*/
export const LGPT3_RIS_C0CC_SET: any = '1'

/**
Cleared*/
export const LGPT3_RIS_C0CC_CLR: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const LGPT3_RIS_RESERVED7: any = '1'
export const LGPT3_RIS_RESERVED7_M: any = '1'
export const LGPT3_RIS_RESERVED7_S: any = '1'
/**
Status of the FAULT interrupt. The interrupt is set immediately on active fault input.*/
export const LGPT3_RIS_FAULT: any = '1'
export const LGPT3_RIS_FAULT_M: any = '1'
export const LGPT3_RIS_FAULT_S: any = '1'
/**
Set*/
export const LGPT3_RIS_FAULT_SET: any = '1'

/**
Cleared*/
export const LGPT3_RIS_FAULT_CLR: any = '0'

/**
Status of the IDX interrupt. The interrupt is set when IDX is active. */
export const LGPT3_RIS_IDX: any = '1'
export const LGPT3_RIS_IDX_M: any = '1'
export const LGPT3_RIS_IDX_S: any = '1'
/**
Set*/
export const LGPT3_RIS_IDX_SET: any = '1'

/**
Cleared*/
export const LGPT3_RIS_IDX_CLR: any = '0'

/**
Status of the DIRCHNG interrupt. The interrupt is set when the direction of the counter changes. */
export const LGPT3_RIS_DIRCHNG: any = '1'
export const LGPT3_RIS_DIRCHNG_M: any = '1'
export const LGPT3_RIS_DIRCHNG_S: any = '1'
/**
Set*/
export const LGPT3_RIS_DIRCHNG_SET: any = '1'

/**
Cleared*/
export const LGPT3_RIS_DIRCHNG_CLR: any = '0'

/**
Status of the CNTRCHNG interrupt. The interrupt is set when the counter increments or decrements.*/
export const LGPT3_RIS_CNTRCHNG: any = '1'
export const LGPT3_RIS_CNTRCHNG_M: any = '1'
export const LGPT3_RIS_CNTRCHNG_S: any = '1'
/**
Set*/
export const LGPT3_RIS_CNTRCHNG_SET: any = '1'

/**
Cleared*/
export const LGPT3_RIS_CNTRCHNG_CLR: any = '0'

/**
Status of the DBLTRANS interrupt. The interrupt is set when a double transition has happened during QDEC mode.*/
export const LGPT3_RIS_DBLTRANS: any = '1'
export const LGPT3_RIS_DBLTRANS_M: any = '1'
export const LGPT3_RIS_DBLTRANS_S: any = '1'
/**
Set*/
export const LGPT3_RIS_DBLTRANS_SET: any = '1'

/**
Cleared*/
export const LGPT3_RIS_DBLTRANS_CLR: any = '0'

/**
Status of the ZERO interrupt. The interrupt is set when CNTR = 0. */
export const LGPT3_RIS_ZERO: any = '1'
export const LGPT3_RIS_ZERO_M: any = '1'
export const LGPT3_RIS_ZERO_S: any = '1'
/**
Set*/
export const LGPT3_RIS_ZERO_SET: any = '1'

/**
Cleared*/
export const LGPT3_RIS_ZERO_CLR: any = '0'

/**
Status of the TGT interrupt. The interrupt is set when CNTR = TGT. */
export const LGPT3_RIS_TGT: any = '1'
export const LGPT3_RIS_TGT_M: any = '1'
export const LGPT3_RIS_TGT_S: any = '1'
/**
Set*/
export const LGPT3_RIS_TGT_SET: any = '1'

/**
Cleared*/
export const LGPT3_RIS_TGT_CLR: any = '0'


// -------- REGISTER MIS -------- //

/**
Masked interrupt status. 


This register is simply a bitwise AND of the contents of IMASK and RIS.*] registers. A flag set in this register can be cleared by writing 1 to the corresponding ICLR register bit.*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const LGPT3_MIS_RESERVED11: any = '21'
export const LGPT3_MIS_RESERVED11_M: any = '21'
export const LGPT3_MIS_RESERVED11_S: any = '21'
/**
Masked status of the RIS.C2CC interrupt. */
export const LGPT3_MIS_C2CC: any = '1'
export const LGPT3_MIS_C2CC_M: any = '1'
export const LGPT3_MIS_C2CC_S: any = '1'
/**
Set*/
export const LGPT3_MIS_C2CC_SET: any = '1'

/**
Cleared*/
export const LGPT3_MIS_C2CC_CLR: any = '0'

/**
Masked status of the RIS.C1CC interrupt.*/
export const LGPT3_MIS_C1CC: any = '1'
export const LGPT3_MIS_C1CC_M: any = '1'
export const LGPT3_MIS_C1CC_S: any = '1'
/**
Set*/
export const LGPT3_MIS_C1CC_SET: any = '1'

/**
Cleared*/
export const LGPT3_MIS_C1CC_CLR: any = '0'

/**
Masked status of the RIS.C0CC interrupt.*/
export const LGPT3_MIS_C0CC: any = '1'
export const LGPT3_MIS_C0CC_M: any = '1'
export const LGPT3_MIS_C0CC_S: any = '1'
/**
Set*/
export const LGPT3_MIS_C0CC_SET: any = '1'

/**
Cleared*/
export const LGPT3_MIS_C0CC_CLR: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const LGPT3_MIS_RESERVED7: any = '1'
export const LGPT3_MIS_RESERVED7_M: any = '1'
export const LGPT3_MIS_RESERVED7_S: any = '1'
/**
Masked status of the RIS.FAULT interrupt.*/
export const LGPT3_MIS_FAULT: any = '1'
export const LGPT3_MIS_FAULT_M: any = '1'
export const LGPT3_MIS_FAULT_S: any = '1'
/**
Set*/
export const LGPT3_MIS_FAULT_SET: any = '1'

/**
Cleared*/
export const LGPT3_MIS_FAULT_CLR: any = '0'

/**
Masked status of the RIS.IDX interrupt.*/
export const LGPT3_MIS_IDX: any = '1'
export const LGPT3_MIS_IDX_M: any = '1'
export const LGPT3_MIS_IDX_S: any = '1'
/**
Set*/
export const LGPT3_MIS_IDX_SET: any = '1'

/**
Cleared*/
export const LGPT3_MIS_IDX_CLR: any = '0'

/**
Masked status of the RIS.DIRCHNG interrupt.*/
export const LGPT3_MIS_DIRCHNG: any = '1'
export const LGPT3_MIS_DIRCHNG_M: any = '1'
export const LGPT3_MIS_DIRCHNG_S: any = '1'
/**
Set*/
export const LGPT3_MIS_DIRCHNG_SET: any = '1'

/**
Cleared*/
export const LGPT3_MIS_DIRCHNG_CLR: any = '0'

/**
Masked status of the RIS.CNTRCHNG interrupt.*/
export const LGPT3_MIS_CNTRCHNG: any = '1'
export const LGPT3_MIS_CNTRCHNG_M: any = '1'
export const LGPT3_MIS_CNTRCHNG_S: any = '1'
/**
Set*/
export const LGPT3_MIS_CNTRCHNG_SET: any = '1'

/**
Cleared*/
export const LGPT3_MIS_CNTRCHNG_CLR: any = '0'

/**
Masked status of the RIS.DBLTRANS interrupt.*/
export const LGPT3_MIS_DBLTRANS: any = '1'
export const LGPT3_MIS_DBLTRANS_M: any = '1'
export const LGPT3_MIS_DBLTRANS_S: any = '1'
/**
Set*/
export const LGPT3_MIS_DBLTRANS_SET: any = '1'

/**
Cleared*/
export const LGPT3_MIS_DBLTRANS_CLR: any = '0'

/**
Masked status of the RIS.ZERO interrupt.*/
export const LGPT3_MIS_ZERO: any = '1'
export const LGPT3_MIS_ZERO_M: any = '1'
export const LGPT3_MIS_ZERO_S: any = '1'
/**
Set*/
export const LGPT3_MIS_ZERO_SET: any = '1'

/**
Cleared*/
export const LGPT3_MIS_ZERO_CLR: any = '0'

/**
Masked status of the RIS.TGT interrupt.*/
export const LGPT3_MIS_TGT: any = '1'
export const LGPT3_MIS_TGT_M: any = '1'
export const LGPT3_MIS_TGT_S: any = '1'
/**
Set*/
export const LGPT3_MIS_TGT_SET: any = '1'

/**
Cleared*/
export const LGPT3_MIS_TGT_CLR: any = '0'


// -------- REGISTER ISET -------- //

/**
Interrupt set register. 


This register can used by software for diagnostics and safety checking purposes. Writing a 1 to a bit in this register will set the event and the corresponding RIS bit also gets set. If the corresponding IMASK bit is set, then the corresponding MIS register bit also gets set.*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const LGPT3_ISET_RESERVED11: any = '21'
export const LGPT3_ISET_RESERVED11_M: any = '21'
export const LGPT3_ISET_RESERVED11_S: any = '21'
/**
Set the RIS.C2CC interrupt. */
export const LGPT3_ISET_C2CC: any = '1'
export const LGPT3_ISET_C2CC_M: any = '1'
export const LGPT3_ISET_C2CC_S: any = '1'
/**
Set*/
export const LGPT3_ISET_C2CC_SET: any = '1'

/**
No effect*/
export const LGPT3_ISET_C2CC_NO_EFFECT: any = '0'

/**
Set the RIS.C1CC interrupt.*/
export const LGPT3_ISET_C1CC: any = '1'
export const LGPT3_ISET_C1CC_M: any = '1'
export const LGPT3_ISET_C1CC_S: any = '1'
/**
Set*/
export const LGPT3_ISET_C1CC_SET: any = '1'

/**
No effect*/
export const LGPT3_ISET_C1CC_NO_EFFECT: any = '0'

/**
Set the RIS.C0CC interrupt.*/
export const LGPT3_ISET_C0CC: any = '1'
export const LGPT3_ISET_C0CC_M: any = '1'
export const LGPT3_ISET_C0CC_S: any = '1'
/**
Set*/
export const LGPT3_ISET_C0CC_SET: any = '1'

/**
No effect*/
export const LGPT3_ISET_C0CC_NO_EFFECT: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const LGPT3_ISET_RESERVED7: any = '1'
export const LGPT3_ISET_RESERVED7_M: any = '1'
export const LGPT3_ISET_RESERVED7_S: any = '1'
/**
Set the RIS.FAULT interrupt.*/
export const LGPT3_ISET_FAULT: any = '1'
export const LGPT3_ISET_FAULT_M: any = '1'
export const LGPT3_ISET_FAULT_S: any = '1'
/**
Set*/
export const LGPT3_ISET_FAULT_SET: any = '1'

/**
No effect*/
export const LGPT3_ISET_FAULT_NO_EFFECT: any = '0'

/**
Set the RIS.IDX interrupt.*/
export const LGPT3_ISET_IDX: any = '1'
export const LGPT3_ISET_IDX_M: any = '1'
export const LGPT3_ISET_IDX_S: any = '1'
/**
Set*/
export const LGPT3_ISET_IDX_SET: any = '1'

/**
No effect*/
export const LGPT3_ISET_IDX_NO_EFFECT: any = '0'

/**
Set the RIS.DIRCHNG interrupt.*/
export const LGPT3_ISET_DIRCHNG: any = '1'
export const LGPT3_ISET_DIRCHNG_M: any = '1'
export const LGPT3_ISET_DIRCHNG_S: any = '1'
/**
Set*/
export const LGPT3_ISET_DIRCHNG_SET: any = '1'

/**
No effect*/
export const LGPT3_ISET_DIRCHNG_NO_EFFECT: any = '0'

/**
Set the RIS.CNTRCHNG interrupt.*/
export const LGPT3_ISET_CNTRCHNG: any = '1'
export const LGPT3_ISET_CNTRCHNG_M: any = '1'
export const LGPT3_ISET_CNTRCHNG_S: any = '1'
/**
Set*/
export const LGPT3_ISET_CNTRCHNG_SET: any = '1'

/**
No effect*/
export const LGPT3_ISET_CNTRCHNG_NO_EFFECT: any = '0'

/**
Set the RIS.DBLTRANS interrupt.*/
export const LGPT3_ISET_DBLTRANS: any = '1'
export const LGPT3_ISET_DBLTRANS_M: any = '1'
export const LGPT3_ISET_DBLTRANS_S: any = '1'
/**
Set*/
export const LGPT3_ISET_DBLTRANS_SET: any = '1'

/**
No effect*/
export const LGPT3_ISET_DBLTRANS_NO_EFFECT: any = '0'

/**
Set the RIS.ZERO interrupt.*/
export const LGPT3_ISET_ZERO: any = '1'
export const LGPT3_ISET_ZERO_M: any = '1'
export const LGPT3_ISET_ZERO_S: any = '1'
/**
Set*/
export const LGPT3_ISET_ZERO_SET: any = '1'

/**
No effect*/
export const LGPT3_ISET_ZERO_NO_EFFECT: any = '0'

/**
Set the RIS.TGT interrupt.*/
export const LGPT3_ISET_TGT: any = '1'
export const LGPT3_ISET_TGT_M: any = '1'
export const LGPT3_ISET_TGT_S: any = '1'
/**
Set*/
export const LGPT3_ISET_TGT_SET: any = '1'

/**
No effect*/
export const LGPT3_ISET_TGT_NO_EFFECT: any = '0'


// -------- REGISTER ICLR -------- //

/**
Interrupt clear register. 


This register allows software to clear interrupts. Writing a 1 to a bit in this register will clear the event and the corresponding RIS bit also gets cleared. If the corresponding IMASK bit is set, then the corresponding MIS register bit also gets cleared.*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const LGPT3_ICLR_RESERVED11: any = '21'
export const LGPT3_ICLR_RESERVED11_M: any = '21'
export const LGPT3_ICLR_RESERVED11_S: any = '21'
/**
Clear the RIS.C2CC interrupt. */
export const LGPT3_ICLR_C2CC: any = '1'
export const LGPT3_ICLR_C2CC_M: any = '1'
export const LGPT3_ICLR_C2CC_S: any = '1'
/**
Clear*/
export const LGPT3_ICLR_C2CC_CLR: any = '1'

/**
No effect*/
export const LGPT3_ICLR_C2CC_NO_EFFECT: any = '0'

/**
Clear the RIS.C1CC interrupt.*/
export const LGPT3_ICLR_C1CC: any = '1'
export const LGPT3_ICLR_C1CC_M: any = '1'
export const LGPT3_ICLR_C1CC_S: any = '1'
/**
Clear*/
export const LGPT3_ICLR_C1CC_CLR: any = '1'

/**
No effect*/
export const LGPT3_ICLR_C1CC_NO_EFFECT: any = '0'

/**
Clear the RIS.C0CC interrupt.*/
export const LGPT3_ICLR_C0CC: any = '1'
export const LGPT3_ICLR_C0CC_M: any = '1'
export const LGPT3_ICLR_C0CC_S: any = '1'
/**
Clear*/
export const LGPT3_ICLR_C0CC_CLR: any = '1'

/**
No effect*/
export const LGPT3_ICLR_C0CC_NO_EFFECT: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const LGPT3_ICLR_RESERVED7: any = '1'
export const LGPT3_ICLR_RESERVED7_M: any = '1'
export const LGPT3_ICLR_RESERVED7_S: any = '1'
/**
Clear the RIS.FAULT interrupt.*/
export const LGPT3_ICLR_FAULT: any = '1'
export const LGPT3_ICLR_FAULT_M: any = '1'
export const LGPT3_ICLR_FAULT_S: any = '1'
/**
Clear*/
export const LGPT3_ICLR_FAULT_CLR: any = '1'

/**
No effect*/
export const LGPT3_ICLR_FAULT_NO_EFFECT: any = '0'

/**
Clear the RIS.IDX interrupt.*/
export const LGPT3_ICLR_IDX: any = '1'
export const LGPT3_ICLR_IDX_M: any = '1'
export const LGPT3_ICLR_IDX_S: any = '1'
/**
Clear*/
export const LGPT3_ICLR_IDX_CLR: any = '1'

/**
No effect*/
export const LGPT3_ICLR_IDX_NO_EFFECT: any = '0'

/**
Clear the RIS.DIRCHNG interrupt.*/
export const LGPT3_ICLR_DIRCHNG: any = '1'
export const LGPT3_ICLR_DIRCHNG_M: any = '1'
export const LGPT3_ICLR_DIRCHNG_S: any = '1'
/**
Clear*/
export const LGPT3_ICLR_DIRCHNG_CLR: any = '1'

/**
No effect*/
export const LGPT3_ICLR_DIRCHNG_NO_EFFECT: any = '0'

/**
Clear the RIS.CNTRCHNG interrupt.*/
export const LGPT3_ICLR_CNTRCHNG: any = '1'
export const LGPT3_ICLR_CNTRCHNG_M: any = '1'
export const LGPT3_ICLR_CNTRCHNG_S: any = '1'
/**
Clear*/
export const LGPT3_ICLR_CNTRCHNG_CLR: any = '1'

/**
No effect*/
export const LGPT3_ICLR_CNTRCHNG_NO_EFFECT: any = '0'

/**
Clear the RIS.DBLTRANS interrupt.*/
export const LGPT3_ICLR_DBLTRANS: any = '1'
export const LGPT3_ICLR_DBLTRANS_M: any = '1'
export const LGPT3_ICLR_DBLTRANS_S: any = '1'
/**
Clear*/
export const LGPT3_ICLR_DBLTRANS_CLR: any = '1'

/**
No effect*/
export const LGPT3_ICLR_DBLTRANS_NO_EFFECT: any = '0'

/**
Clear the RIS.ZERO interrupt.*/
export const LGPT3_ICLR_ZERO: any = '1'
export const LGPT3_ICLR_ZERO_M: any = '1'
export const LGPT3_ICLR_ZERO_S: any = '1'
/**
Clear*/
export const LGPT3_ICLR_ZERO_CLR: any = '1'

/**
No effect*/
export const LGPT3_ICLR_ZERO_NO_EFFECT: any = '0'

/**
Clear the RIS.TGT interrupt.*/
export const LGPT3_ICLR_TGT: any = '1'
export const LGPT3_ICLR_TGT_M: any = '1'
export const LGPT3_ICLR_TGT_S: any = '1'
/**
Clear*/
export const LGPT3_ICLR_TGT_CLR: any = '1'

/**
No effect*/
export const LGPT3_ICLR_TGT_NO_EFFECT: any = '0'


// -------- REGISTER IMSET -------- //

/**
Interrupt mask set register. 


Writing a 1 to a bit in this register will set the corresponding IMASK bit.*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const LGPT3_IMSET_RESERVED11: any = '21'
export const LGPT3_IMSET_RESERVED11_M: any = '21'
export const LGPT3_IMSET_RESERVED11_S: any = '21'
/**
Set the MIS.C2CC mask. */
export const LGPT3_IMSET_C2CC: any = '1'
export const LGPT3_IMSET_C2CC_M: any = '1'
export const LGPT3_IMSET_C2CC_S: any = '1'
/**
Set*/
export const LGPT3_IMSET_C2CC_SET: any = '1'

/**
No effect*/
export const LGPT3_IMSET_C2CC_NO_EFFECT: any = '0'

/**
Set the MIS.C1CC mask.*/
export const LGPT3_IMSET_C1CC: any = '1'
export const LGPT3_IMSET_C1CC_M: any = '1'
export const LGPT3_IMSET_C1CC_S: any = '1'
/**
Set*/
export const LGPT3_IMSET_C1CC_SET: any = '1'

/**
No effect*/
export const LGPT3_IMSET_C1CC_NO_EFFECT: any = '0'

/**
Set the MIS.C0CC mask.*/
export const LGPT3_IMSET_C0CC: any = '1'
export const LGPT3_IMSET_C0CC_M: any = '1'
export const LGPT3_IMSET_C0CC_S: any = '1'
/**
Set*/
export const LGPT3_IMSET_C0CC_SET: any = '1'

/**
No effect*/
export const LGPT3_IMSET_C0CC_NO_EFFECT: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const LGPT3_IMSET_RESERVED7: any = '1'
export const LGPT3_IMSET_RESERVED7_M: any = '1'
export const LGPT3_IMSET_RESERVED7_S: any = '1'
/**
Set the MIS.FAULT mask.*/
export const LGPT3_IMSET_FAULT: any = '1'
export const LGPT3_IMSET_FAULT_M: any = '1'
export const LGPT3_IMSET_FAULT_S: any = '1'
/**
Set*/
export const LGPT3_IMSET_FAULT_SET: any = '1'

/**
No effect*/
export const LGPT3_IMSET_FAULT_NO_EFFECT: any = '0'

/**
Set the MIS.IDX mask.*/
export const LGPT3_IMSET_IDX: any = '1'
export const LGPT3_IMSET_IDX_M: any = '1'
export const LGPT3_IMSET_IDX_S: any = '1'
/**
Set*/
export const LGPT3_IMSET_IDX_SET: any = '1'

/**
No effect*/
export const LGPT3_IMSET_IDX_NO_EFFECT: any = '0'

/**
Set the MIS.DIRCHNG mask.*/
export const LGPT3_IMSET_DIRCHNG: any = '1'
export const LGPT3_IMSET_DIRCHNG_M: any = '1'
export const LGPT3_IMSET_DIRCHNG_S: any = '1'
/**
Set*/
export const LGPT3_IMSET_DIRCHNG_SET: any = '1'

/**
No effect*/
export const LGPT3_IMSET_DIRCHNG_NO_EFFECT: any = '0'

/**
Set the MIS.CNTRCHNG mask.*/
export const LGPT3_IMSET_CNTRCHNG: any = '1'
export const LGPT3_IMSET_CNTRCHNG_M: any = '1'
export const LGPT3_IMSET_CNTRCHNG_S: any = '1'
/**
Set*/
export const LGPT3_IMSET_CNTRCHNG_SET: any = '1'

/**
No effect*/
export const LGPT3_IMSET_CNTRCHNG_NO_EFFECT: any = '0'

/**
Set the MIS.DBLTRANS mask.*/
export const LGPT3_IMSET_DBLTRANS: any = '1'
export const LGPT3_IMSET_DBLTRANS_M: any = '1'
export const LGPT3_IMSET_DBLTRANS_S: any = '1'
/**
Set*/
export const LGPT3_IMSET_DBLTRANS_SET: any = '1'

/**
No effect*/
export const LGPT3_IMSET_DBLTRANS_NO_EFFECT: any = '0'

/**
Set the MIS.ZERO mask.*/
export const LGPT3_IMSET_ZERO: any = '1'
export const LGPT3_IMSET_ZERO_M: any = '1'
export const LGPT3_IMSET_ZERO_S: any = '1'
/**
Set*/
export const LGPT3_IMSET_ZERO_SET: any = '1'

/**
No effect*/
export const LGPT3_IMSET_ZERO_NO_EFFECT: any = '0'

/**
Set the MIS.TGT mask.*/
export const LGPT3_IMSET_TGT: any = '1'
export const LGPT3_IMSET_TGT_M: any = '1'
export const LGPT3_IMSET_TGT_S: any = '1'
/**
Set*/
export const LGPT3_IMSET_TGT_SET: any = '1'

/**
No effect*/
export const LGPT3_IMSET_TGT_NO_EFFECT: any = '0'


// -------- REGISTER IMCLR -------- //

/**
Interrupt mask clear register. 


Writing a 1 to a bit in this register will clear the corresponding IMASK bit.*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const LGPT3_IMCLR_RESERVED11: any = '21'
export const LGPT3_IMCLR_RESERVED11_M: any = '21'
export const LGPT3_IMCLR_RESERVED11_S: any = '21'
/**
Clear the MIS.C2CC mask. */
export const LGPT3_IMCLR_C2CC: any = '1'
export const LGPT3_IMCLR_C2CC_M: any = '1'
export const LGPT3_IMCLR_C2CC_S: any = '1'
/**
Clear*/
export const LGPT3_IMCLR_C2CC_CLR: any = '1'

/**
No effect*/
export const LGPT3_IMCLR_C2CC_NO_EFFECT: any = '0'

/**
Clear the MIS.C1CC mask.*/
export const LGPT3_IMCLR_C1CC: any = '1'
export const LGPT3_IMCLR_C1CC_M: any = '1'
export const LGPT3_IMCLR_C1CC_S: any = '1'
/**
Clear*/
export const LGPT3_IMCLR_C1CC_CLR: any = '1'

/**
No effect*/
export const LGPT3_IMCLR_C1CC_NO_EFFECT: any = '0'

/**
Clear the MIS.C0CC mask.*/
export const LGPT3_IMCLR_C0CC: any = '1'
export const LGPT3_IMCLR_C0CC_M: any = '1'
export const LGPT3_IMCLR_C0CC_S: any = '1'
/**
Clear*/
export const LGPT3_IMCLR_C0CC_CLR: any = '1'

/**
No effect*/
export const LGPT3_IMCLR_C0CC_NO_EFFECT: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const LGPT3_IMCLR_RESERVED7: any = '1'
export const LGPT3_IMCLR_RESERVED7_M: any = '1'
export const LGPT3_IMCLR_RESERVED7_S: any = '1'
/**
Clear the MIS.FAULT mask.*/
export const LGPT3_IMCLR_FAULT: any = '1'
export const LGPT3_IMCLR_FAULT_M: any = '1'
export const LGPT3_IMCLR_FAULT_S: any = '1'
/**
Clear*/
export const LGPT3_IMCLR_FAULT_CLR: any = '1'

/**
No effect*/
export const LGPT3_IMCLR_FAULT_NO_EFFECT: any = '0'

/**
Clear the MIS.IDX mask.*/
export const LGPT3_IMCLR_IDX: any = '1'
export const LGPT3_IMCLR_IDX_M: any = '1'
export const LGPT3_IMCLR_IDX_S: any = '1'
/**
Clear*/
export const LGPT3_IMCLR_IDX_CLR: any = '1'

/**
No effect*/
export const LGPT3_IMCLR_IDX_NO_EFFECT: any = '0'

/**
Clear the MIS.DIRCHNG mask.*/
export const LGPT3_IMCLR_DIRCHNG: any = '1'
export const LGPT3_IMCLR_DIRCHNG_M: any = '1'
export const LGPT3_IMCLR_DIRCHNG_S: any = '1'
/**
Clear*/
export const LGPT3_IMCLR_DIRCHNG_CLR: any = '1'

/**
No effect*/
export const LGPT3_IMCLR_DIRCHNG_NO_EFFECT: any = '0'

/**
Clear the MIS.CNTRCHNG mask.*/
export const LGPT3_IMCLR_CNTRCHNG: any = '1'
export const LGPT3_IMCLR_CNTRCHNG_M: any = '1'
export const LGPT3_IMCLR_CNTRCHNG_S: any = '1'
/**
Clear*/
export const LGPT3_IMCLR_CNTRCHNG_CLR: any = '1'

/**
No effect*/
export const LGPT3_IMCLR_CNTRCHNG_NO_EFFECT: any = '0'

/**
Clear the MIS.DBLTRANS mask.*/
export const LGPT3_IMCLR_DBLTRANS: any = '1'
export const LGPT3_IMCLR_DBLTRANS_M: any = '1'
export const LGPT3_IMCLR_DBLTRANS_S: any = '1'
/**
Clear*/
export const LGPT3_IMCLR_DBLTRANS_CLR: any = '1'

/**
No effect*/
export const LGPT3_IMCLR_DBLTRANS_NO_EFFECT: any = '0'

/**
Clear the MIS.ZERO mask.*/
export const LGPT3_IMCLR_ZERO: any = '1'
export const LGPT3_IMCLR_ZERO_M: any = '1'
export const LGPT3_IMCLR_ZERO_S: any = '1'
/**
Clear*/
export const LGPT3_IMCLR_ZERO_CLR: any = '1'

/**
No effect*/
export const LGPT3_IMCLR_ZERO_NO_EFFECT: any = '0'

/**
Clear the MIS.TGT mask.*/
export const LGPT3_IMCLR_TGT: any = '1'
export const LGPT3_IMCLR_TGT_M: any = '1'
export const LGPT3_IMCLR_TGT_S: any = '1'
/**
Clear*/
export const LGPT3_IMCLR_TGT_CLR: any = '1'

/**
No effect*/
export const LGPT3_IMCLR_TGT_NO_EFFECT: any = '0'


// -------- REGISTER EMU -------- //

/**
Debug control


This register can be used to freeze the timer when CPU halts when HALT is set to 1. When HALT is set to 0, or when the CPU releases debug halt, the filters and edge detection logic is flushed and the timer starts. For setting a predefined output value during a CPU debug halt, PARK, if the timer has this register, should be configured additionally. If this timer does not have the PARK register a predefined output value during CPU halt is not possible.*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const LGPT3_EMU_RESERVED2: any = '30'
export const LGPT3_EMU_RESERVED2_M: any = '30'
export const LGPT3_EMU_RESERVED2_S: any = '30'
/**
Halt control.


Configure when the counter shall stop upon CPU halt. This bitfield only applies if HALT = 1.*/
export const LGPT3_EMU_CTL: any = '1'
export const LGPT3_EMU_CTL_M: any = '1'
export const LGPT3_EMU_CTL_S: any = '1'
/**
Zero condition. The counter stops when CNTR = 0.*/
export const LGPT3_EMU_CTL_ZERCOND: any = '1'

/**
Immediate reaction. The counter stops immediately on debug halt.*/
export const LGPT3_EMU_CTL_IMMEDIATE: any = '0'

/**
Halt LGPT when CPU is halted in debug.*/
export const LGPT3_EMU_HALT: any = '1'
export const LGPT3_EMU_HALT_M: any = '1'
export const LGPT3_EMU_HALT_S: any = '1'
/**
Enable.*/
export const LGPT3_EMU_HALT_EN: any = '1'

/**
Disable.*/
export const LGPT3_EMU_HALT_DIS: any = '0'


// -------- REGISTER C0CFG -------- //

/**
Channel 0 Configuration


This register configures channel function and enables outputs.

Each channel has an edge-detection circuit. The the edge-detection circuit is: 
 - enabled while CCACT selects a capture function and CTL.MODE is different from DIS.
 - flushed while CCACT selects a capture function and CTL.MODE is changed from DIS to another mode.

The flush action uses two system clock periods. It prevents capture events caused by expired signal values stored in the edge-detection circuit.

The channel input signal enters the edge-detection circuit. False capture events can occur when:
- the edge-detection circuit contains expired signal samples and the circuit is enabled without flush as described above.
- the CCACT field is reconfigured while CTL.MODE is different from DIS.

Primary use scenario is to select CCACT before starting the timer. Follow these steps to configure CCACT to a capture action while CTL.MODE is different from DIS:
- Set EDGE to NONE.
- Configure CCACT.
- Wait for three system clock periods before setting EDGE different from NONE.
These steps prevent capture events caused by expired signal values in edge-detection circuit.*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const LGPT3_C0CFG_RESERVED11: any = '21'
export const LGPT3_C0CFG_RESERVED11_M: any = '21'
export const LGPT3_C0CFG_RESERVED11_S: any = '21'
/**
Output 2 enable.


When 0 $lt; CCACT $lt; 8, OUT2 becomes zero after a capture or compare event.*/
export const LGPT3_C0CFG_OUT2: any = '1'
export const LGPT3_C0CFG_OUT2_M: any = '1'
export const LGPT3_C0CFG_OUT2_S: any = '1'
/**
Channel 0 controls output 2.*/
export const LGPT3_C0CFG_OUT2_EN: any = '1'

/**
Channel 0 does not control output 2.*/
export const LGPT3_C0CFG_OUT2_DIS: any = '0'

/**
Output 1 enable.


When 0 $lt; CCACT $lt; 8, OUT1 becomes zero after a capture or compare event.*/
export const LGPT3_C0CFG_OUT1: any = '1'
export const LGPT3_C0CFG_OUT1_M: any = '1'
export const LGPT3_C0CFG_OUT1_S: any = '1'
/**
Channel 0 controls output 1.*/
export const LGPT3_C0CFG_OUT1_EN: any = '1'

/**
Channel 0 does not control output 1.*/
export const LGPT3_C0CFG_OUT1_DIS: any = '0'

/**
Output 0 enable.


When 0 $lt; CCACT $lt; 8, OUT0 becomes zero after a capture or compare event.*/
export const LGPT3_C0CFG_OUT0: any = '1'
export const LGPT3_C0CFG_OUT0_M: any = '1'
export const LGPT3_C0CFG_OUT0_S: any = '1'
/**
Channel 0 controls output 0.*/
export const LGPT3_C0CFG_OUT0_EN: any = '1'

/**
Channel 0 does not control output 0.*/
export const LGPT3_C0CFG_OUT0_DIS: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const LGPT3_C0CFG_RESERVED7: any = '1'
export const LGPT3_C0CFG_RESERVED7_M: any = '1'
export const LGPT3_C0CFG_RESERVED7_S: any = '1'
/**
Select channel input.*/
export const LGPT3_C0CFG_INPUT: any = '1'
export const LGPT3_C0CFG_INPUT_M: any = '1'
export const LGPT3_C0CFG_INPUT_S: any = '1'
/**
IO controller*/
export const LGPT3_C0CFG_INPUT_IO: any = '1'

/**
Event fabric*/
export const LGPT3_C0CFG_INPUT_EV: any = '0'

/**
Determines the edge that triggers the channel input event. This happens post filter.*/
export const LGPT3_C0CFG_EDGE: any = '2'
export const LGPT3_C0CFG_EDGE_M: any = '2'
export const LGPT3_C0CFG_EDGE_S: any = '2'
/**
Input event is triggered at both edges.*/
export const LGPT3_C0CFG_EDGE_BOTH: any = '3'

/**
Input event is triggered at falling edge.*/
export const LGPT3_C0CFG_EDGE_FALL: any = '2'

/**
Input event is triggered at rising edge.*/
export const LGPT3_C0CFG_EDGE_RISE: any = '1'

/**
Input is turned off.*/
export const LGPT3_C0CFG_EDGE_NONE: any = '0'

/**
Capture-Compare action.


Capture-Compare action defines 15 different channel functions that utilize capture, compare, and zero events. In every compare event the timer looks at the current value of CNTR. The corresponding output event will be set 1 timer period after CNTR = C0CC. */
export const LGPT3_C0CFG_CCACT: any = '4'
export const LGPT3_C0CFG_CCACT_M: any = '4'
export const LGPT3_C0CFG_CCACT_S: any = '4'
/**
Pulse on compare repeatedly. 


Channel function sequence: 
- Pulse enabled outputs when C0CC.VAL = CNTR.VAL.

 The output is high for two timer clock periods.*/
export const LGPT3_C0CFG_CCACT_PULSE_ON_CMP: any = '15'

/**
Toggle on compare repeatedly.


Channel function sequence: 
- Toggle enabled outputs  when C0CC.VAL = CNTR.VAL.*/
export const LGPT3_C0CFG_CCACT_TGL_ON_CMP: any = '14'

/**
Set on compare repeatedly.


Channel function sequence: 
- Set enabled outputs  when C0CC.VAL = CNTR.VAL.*/
export const LGPT3_C0CFG_CCACT_SET_ON_CMP: any = '13'

/**
Clear on compare repeatedly.


Channel function sequence: 
- Clear enabled outputs  when C0CC.VAL = CNTR.VAL.*/
export const LGPT3_C0CFG_CCACT_CLR_ON_CMP: any = '12'

/**
Set on zero, toggle on compare repeatedly.


Channel function sequence: 
- Set enabled outputs when CNTR.VAL = 0.
- Toggle enabled outputs when C0CC.VAL = CNTR.VAL.

Set CTL.MODE to UP_PER for edge-aligned PWM generation. Duty cycle is given by: 

When C0CC.VAL $lt;= TGT.VAL: 
   Duty cycle = C0CC.VAL / ( TGT.VAL + 1 ).

When C0CC.VAL $gt; TGT.VAL: 
   Duty cycle = 1.

Enabled outputs are cleared when C0CC.VAL = 0 and CNTR.VAL = 0.*/
export const LGPT3_C0CFG_CCACT_SET_ON_0_TGL_ON_CMP: any = '11'

/**
Clear on zero, toggle on compare repeatedly.

 
Channel function sequence: 
- Clear enabled outputs when CNTR.VAL = 0.
- Toggle enabled outputs when C0CC.VAL = CNTR.VAL.

Set CTL.MODE to UPDWN_PER for center-aligned PWM generation. Duty cycle is given by: 

When C0CC.VAL $lt;= TGT.VAL: 
   Duty cycle = 1 - ( C0CC.VAL / TGT.VAL ).

When C0CC.VAL $gt; TGT.VAL: 
   Duty cycle = 0.

Enabled outputs are set when C0CC.VAL = 0 and CNTR.VAL = 0.*/
export const LGPT3_C0CFG_CCACT_CLR_ON_0_TGL_ON_CMP: any = '10'

/**
Set on capture repeatedly.


Channel function sequence: 
- Set enabled outputs on capture event and copy CNTR.VAL to C0CC.VAL.

*/
export const LGPT3_C0CFG_CCACT_SET_ON_CAPT: any = '9'

/**
Period and pulse width measurement.


Continuously capture period and pulse width of the signal selected by INPUT relative to the signal edge given by EDGE. 

Set enabled outputs and RIS.C0CC when C0CC.VAL contains signal period and PC0CC.VAL contains signal pulse width.

Notes: 
- Make sure to configure INPUT and CCACT when CTL.MODE equals DIS, then set CTL.MODE to UP_ONCE or UP_PER. 
- The counter restarts in the selected timer mode when C0CC.VAL contains the signal period.
- If more than one channel uses this function, the channels will perform this function one at a time. The channel with lowest number has priority and performs the function first. Next measurement starts when current measurement completes successfully or times out. A timeout occurs when counter equals target. 
- To observe a timeout event the RIS.TGT interrupt can be used, or another channel can be configured to SET_ON_CMP with compare value equal TGT.

Signal property requirements:
- Signal Period $gt;= 2 * ( 1 + PRECFG.TICKDIV ) * timer clock period.
- Signal Period $lt;= MAX(CNTR) * (1 + PRECFG.TICKDIV ) * timer clock period.
- Signal low and high phase $gt;= (1 + PRECFG.TICKDIV ) * timer clock period. */
export const LGPT3_C0CFG_CCACT_PER_PULSE_WIDTH_MEAS: any = '8'

/**
Pulse on compare, and then disable channel.


Channel function sequence: 
- Pulse enabled outputs when C0CC.VAL = CNTR.VAL.
- Disable channel.

 The output is high for two timer clock periods.*/
export const LGPT3_C0CFG_CCACT_PULSE_ON_CMP_DIS: any = '7'

/**
Toggle on compare, and then disable channel.


Channel function sequence: 
- Toggle enabled outputs when C0CC.VAL = CNTR.VAL.
- Disable channel.*/
export const LGPT3_C0CFG_CCACT_TGL_ON_CMP_DIS: any = '6'

/**
Set on compare, and then disable channel.


Channel function sequence: 
- Set enabled outputs when C0CC.VAL = CNTR.VAL.
- Disable channel.*/
export const LGPT3_C0CFG_CCACT_SET_ON_CMP_DIS: any = '5'

/**
Clear on compare, and then disable channel.


Channel function sequence: 
- Clear enabled outputs when C0CC.VAL = CNTR.VAL.
- Disable channel.*/
export const LGPT3_C0CFG_CCACT_CLR_ON_CMP_DIS: any = '4'

/**
Set on zero, toggle on compare, and then disable channel.


Channel function sequence: 
- Set enabled outputs when CNTR.VAL = 0.
- Toggle enabled outputs when C0CC.VAL = CNTR.VAL.
- Disable channel.

Enabled outputs are cleared when C0CC.VAL = 0 and CNTR.VAL = 0.*/
export const LGPT3_C0CFG_CCACT_SET_ON_0_TGL_ON_CMP_DIS: any = '3'

/**
Clear on zero, toggle on compare, and then disable channel.


Channel function sequence: 
- Clear enabled outputs when CNTR.VAL = 0.
- Toggle enabled outputs when C0CC.VAL = CNTR.VAL.
- Disable channel.

Enabled outputs are set when C0CC.VAL = 0 and CNTR.VAL = 0.*/
export const LGPT3_C0CFG_CCACT_CLR_ON_0_TGL_ON_CMP_DIS: any = '2'

/**
Set on capture, and then disable channel.


Channel function sequence: 
- Set enabled outputs on capture event and copy CNTR.VAL to C0CC.VAL.
- Disable channel. 

Primary use scenario is to select this function before starting the timer.
Follow these steps to select this function while CTL.MODE is different from DIS:  
 - Set CCACT to SET_ON_CAPT with no output enable.
 - Configure INPUT (optional).
 - Wait for three timer clock periods as defined in PRECFG before setting CCACT to SET_ON_CAPT_DIS. Output enable is optional.

These steps prevent capture events caused by expired signal values in edge-detection circuit.*/
export const LGPT3_C0CFG_CCACT_SET_ON_CAPT_DIS: any = '1'

/**
Disable channel.*/
export const LGPT3_C0CFG_CCACT_DIS: any = '0'


// -------- REGISTER C1CFG -------- //

/**
Channel 1 Configuration


This register configures channel function and enables outputs.

Each channel has an edge-detection circuit. The the edge-detection circuit is: 
 - enabled while CCACT selects a capture function and CTL.MODE is different from DIS.
 - flushed while CCACT selects a capture function and CTL.MODE is changed from DIS to another mode.

The flush action uses two system clock periods. It prevents capture events caused by expired signal values stored in the edge-detection circuit.

The channel input signal enters the edge-detection circuit. False capture events can occur when:
- the edge-detection circuit contains expired signal samples and the circuit is enabled without flush as described above.
- the CCACT field is reconfigured while CTL.MODE is different from DIS.

Primary use scenario is to select CCACT before starting the timer. Follow these steps to configure CCACT to a capture action while CTL.MODE is different from DIS:
- Set EDGE to NONE.
- Configure CCACT.
- Wait for three system clock periods before setting EDGE different from NONE.
These steps prevent capture events caused by expired signal values in edge-detection circuit.*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const LGPT3_C1CFG_RESERVED11: any = '21'
export const LGPT3_C1CFG_RESERVED11_M: any = '21'
export const LGPT3_C1CFG_RESERVED11_S: any = '21'
/**
Output 2 enable.


When 0 $lt; CCACT $lt; 8, OUT2 becomes zero after a capture or compare event.*/
export const LGPT3_C1CFG_OUT2: any = '1'
export const LGPT3_C1CFG_OUT2_M: any = '1'
export const LGPT3_C1CFG_OUT2_S: any = '1'
/**
Channel 1 controls output 2.*/
export const LGPT3_C1CFG_OUT2_EN: any = '1'

/**
Channel 1 does not control output 2.*/
export const LGPT3_C1CFG_OUT2_DIS: any = '0'

/**
Output 1 enable.


When 0 $lt; CCACT $lt; 8, OUT1 becomes zero after a capture or compare event.*/
export const LGPT3_C1CFG_OUT1: any = '1'
export const LGPT3_C1CFG_OUT1_M: any = '1'
export const LGPT3_C1CFG_OUT1_S: any = '1'
/**
Channel 1 controls output 1.*/
export const LGPT3_C1CFG_OUT1_EN: any = '1'

/**
Channel 1 does not control output 1.*/
export const LGPT3_C1CFG_OUT1_DIS: any = '0'

/**
Output 0 enable.

When 0 $lt; CCACT $lt; 8, OUT0 becomes zero after a capture or compare event.
*/
export const LGPT3_C1CFG_OUT0: any = '1'
export const LGPT3_C1CFG_OUT0_M: any = '1'
export const LGPT3_C1CFG_OUT0_S: any = '1'
/**
Channel 1 controls output 0.*/
export const LGPT3_C1CFG_OUT0_EN: any = '1'

/**
Channel 1 does not control output 0.*/
export const LGPT3_C1CFG_OUT0_DIS: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const LGPT3_C1CFG_RESERVED7: any = '1'
export const LGPT3_C1CFG_RESERVED7_M: any = '1'
export const LGPT3_C1CFG_RESERVED7_S: any = '1'
/**
Select channel input.*/
export const LGPT3_C1CFG_INPUT: any = '1'
export const LGPT3_C1CFG_INPUT_M: any = '1'
export const LGPT3_C1CFG_INPUT_S: any = '1'
/**
IO controller*/
export const LGPT3_C1CFG_INPUT_IO: any = '1'

/**
Event fabric*/
export const LGPT3_C1CFG_INPUT_EV: any = '0'

/**
Determines the edge that triggers the channel input event. This happens post filter.*/
export const LGPT3_C1CFG_EDGE: any = '2'
export const LGPT3_C1CFG_EDGE_M: any = '2'
export const LGPT3_C1CFG_EDGE_S: any = '2'
/**
Input event is triggered at both edges.*/
export const LGPT3_C1CFG_EDGE_BOTH: any = '3'

/**
Input event is triggered at falling edge.*/
export const LGPT3_C1CFG_EDGE_FALL: any = '2'

/**
Input event is triggered at rising edge.*/
export const LGPT3_C1CFG_EDGE_RISE: any = '1'

/**
Input is turned off.*/
export const LGPT3_C1CFG_EDGE_NONE: any = '0'

/**
Capture-Compare action.


Capture-Compare action defines 15 different channel functions that utilize capture, compare, and zero events. In every compare event the timer looks at the current value of CNTR. The corresponding output event will be set 1 timer period after CNTR = C1CC. */
export const LGPT3_C1CFG_CCACT: any = '4'
export const LGPT3_C1CFG_CCACT_M: any = '4'
export const LGPT3_C1CFG_CCACT_S: any = '4'
/**
Pulse on compare repeatedly. 


Channel function sequence: 
- Pulse enabled outputs when C1CC.VAL = CNTR.VAL.

 The output is high for two timer clock periods.*/
export const LGPT3_C1CFG_CCACT_PULSE_ON_CMP: any = '15'

/**
Toggle on compare repeatedly.


Channel function sequence: 
- Toggle enabled outputs  when C1CC.VAL = CNTR.VAL.*/
export const LGPT3_C1CFG_CCACT_TGL_ON_CMP: any = '14'

/**
Set on compare repeatedly.


Channel function sequence: 
- Set enabled outputs  when C1CC.VAL = CNTR.VAL.*/
export const LGPT3_C1CFG_CCACT_SET_ON_CMP: any = '13'

/**
Clear on compare repeatedly.


Channel function sequence: 
- Clear enabled outputs  when C1CC.VAL = CNTR.VAL.*/
export const LGPT3_C1CFG_CCACT_CLR_ON_CMP: any = '12'

/**
Set on zero, toggle on compare repeatedly.


Channel function sequence: 
- Set enabled outputs when CNTR.VAL = 0.
- Toggle enabled outputs when C1CC.VAL = CNTR.VAL.

Set CTL.MODE to UP_PER for edge-aligned PWM generation. Duty cycle is given by: 

When C1CC.VAL $lt;= TGT.VAL: 
   Duty cycle = C1CC.VAL / ( TGT.VAL + 1 ).

When C1CC.VAL $gt; TGT.VAL: 
   Duty cycle = 1.

Enabled outputs are cleared when C1CC.VAL = 0 and CNTR.VAL = 0.*/
export const LGPT3_C1CFG_CCACT_SET_ON_0_TGL_ON_CMP: any = '11'

/**
Clear on zero, toggle on compare repeatedly.

 
Channel function sequence: 
- Clear enabled outputs when CNTR.VAL = 0.
- Toggle enabled outputs when C1CC.VAL = CNTR.VAL.

Set CTL.MODE to UPDWN_PER for center-aligned PWM generation. Duty cycle is given by: 

When C1CC.VAL $lt;= TGT.VAL: 
   Duty cycle = 1 - ( C1CC.VAL / TGT.VAL ).

When C1CC.VAL $gt; TGT.VAL: 
   Duty cycle = 0.

Enabled outputs are set when C1CC.VAL = 0 and CNTR.VAL = 0.*/
export const LGPT3_C1CFG_CCACT_CLR_ON_0_TGL_ON_CMP: any = '10'

/**
Set on capture repeatedly.


Channel function sequence: 
- Set enabled outputs on capture event and copy CNTR.VAL to C1CC.VAL.

*/
export const LGPT3_C1CFG_CCACT_SET_ON_CAPT: any = '9'

/**
Period and pulse width measurement.


Continuously capture period and pulse width of the signal selected by INPUT relative to the signal edge given by EDGE. 

Set enabled outputs and RIS.C1CC when C1CC.VAL contains signal period and PC1CC.VAL contains signal pulse width. 

Notes: 
- Make sure to configure INPUT and CCACT when CTL.MODE equals DIS, then set CTL.MODE to UP_ONCE or UP_PER. 
- The counter restarts in the selected timer mode when C1CC.VAL contains the signal period.
- If more than one channel uses this function, the channels will perform this function one at a time. The channel with lowest number has priority and performs the function first. Next measurement starts when current measurement completes successfully or times out. A timeout occurs when counter equals target. 
- To observe a timeout event the RIS.TGT interrupt can be used, or another channel can be configured to SET_ON_CMP with compare value equal TGT.

Signal property requirements:
- Signal Period $gt;= 2 * ( 1 + PRECFG.TICKDIV ) * timer clock period.
- Signal Period $lt;= MAX(CNTR) * (1 + PRECFG.TICKDIV ) * timer clock period.
- Signal low and high phase $gt;= (1 + PRECFG.TICKDIV ) * timer clock period.*/
export const LGPT3_C1CFG_CCACT_PER_PULSE_WIDTH_MEAS: any = '8'

/**
Pulse on compare, and then disable channel.


Channel function sequence: 
- Pulse enabled outputs when C1CC.VAL = CNTR.VAL.
- Disable channel.

 The output is high for two timer clock periods.*/
export const LGPT3_C1CFG_CCACT_PULSE_ON_CMP_DIS: any = '7'

/**
Toggle on compare, and then disable channel.


Channel function sequence: 
- Toggle enabled outputs when C1CC.VAL = CNTR.VAL.
- Disable channel.*/
export const LGPT3_C1CFG_CCACT_TGL_ON_CMP_DIS: any = '6'

/**
Set on compare, and then disable channel.


Channel function sequence: 
- Set enabled outputs when C1CC.VAL = CNTR.VAL.
- Disable channel.*/
export const LGPT3_C1CFG_CCACT_SET_ON_CMP_DIS: any = '5'

/**
Clear on compare, and then disable channel.


Channel function sequence: 
- Clear enabled outputs when C1CC.VAL = CNTR.VAL.
- Disable channel.*/
export const LGPT3_C1CFG_CCACT_CLR_ON_CMP_DIS: any = '4'

/**
Set on zero, toggle on compare, and then disable channel.


Channel function sequence: 
- Set enabled outputs when CNTR.VAL = 0.
- Toggle enabled outputs when C1CC.VAL = CNTR.VAL.
- Disable channel.

Enabled outputs are cleared when C1CC.VAL = 0 and CNTR.VAL = 0.*/
export const LGPT3_C1CFG_CCACT_SET_ON_0_TGL_ON_CMP_DIS: any = '3'

/**
Clear on zero, toggle on compare, and then disable channel.


Channel function sequence: 
- Clear enabled outputs when CNTR.VAL = 0.
- Toggle enabled outputs when C1CC.VAL = CNTR.VAL.
- Disable channel.

Enabled outputs are set when C1CC.VAL = 0 and CNTR.VAL = 0.*/
export const LGPT3_C1CFG_CCACT_CLR_ON_0_TGL_ON_CMP_DIS: any = '2'

/**
Set on capture, and then disable channel.


Channel function sequence: 
- Set enabled outputs on capture event and copy CNTR.VAL to C1CC.VAL.
- Disable channel. 

Primary use scenario is to select this function before starting the timer.
Follow these steps to select this function while CTL.MODE is different from DIS:  
 - Set CCACT to SET_ON_CAPT with no output enable.
 - Configure INPUT (optional).
 - Wait for three timer clock periods as defined in PRECFG before setting CCACT to SET_ON_CAPT_DIS. Output enable is optional.

These steps prevent capture events caused by expired signal values in edge-detection circuit.*/
export const LGPT3_C1CFG_CCACT_SET_ON_CAPT_DIS: any = '1'

/**
Disable channel.*/
export const LGPT3_C1CFG_CCACT_DIS: any = '0'


// -------- REGISTER C2CFG -------- //

/**
Channel 2 Configuration


This register configures channel function and enables outputs.

Each channel has an edge-detection circuit. The the edge-detection circuit is: 
 - enabled while CCACT selects a capture function and CTL.MODE is different from DIS.
 - flushed while CCACT selects a capture function and CTL.MODE is changed from DIS to another mode.

The flush action uses two system clock periods. It prevents capture events caused by expired signal values stored in the edge-detection circuit.

The channel input signal enters the edge-detection circuit. False capture events can occur when:
- the edge-detection circuit contains expired signal samples and the circuit is enabled without flush as described above.
- the CCACT field is reconfigured while CTL.MODE is different from DIS.

Primary use scenario is to select CCACT before starting the timer. Follow these steps to configure CCACT to a capture action while CTL.MODE is different from DIS:
- Set EDGE to NONE.
- Configure CCACT.
- Wait for three system clock periods before setting EDGE different from NONE.
These steps prevent capture events caused by expired signal values in edge-detection circuit.*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const LGPT3_C2CFG_RESERVED11: any = '21'
export const LGPT3_C2CFG_RESERVED11_M: any = '21'
export const LGPT3_C2CFG_RESERVED11_S: any = '21'
/**
Output 2 enable.


When 0 $lt; CCACT $lt; 8, OUT2 becomes zero after a capture or compare event.*/
export const LGPT3_C2CFG_OUT2: any = '1'
export const LGPT3_C2CFG_OUT2_M: any = '1'
export const LGPT3_C2CFG_OUT2_S: any = '1'
/**
Channel 2 controls output 2.*/
export const LGPT3_C2CFG_OUT2_EN: any = '1'

/**
Channel 2 does not control output 2.*/
export const LGPT3_C2CFG_OUT2_DIS: any = '0'

/**
Output 1 enable.


When 0 $lt; CCACT $lt; 8, OUT1 becomes zero after a capture or compare event.*/
export const LGPT3_C2CFG_OUT1: any = '1'
export const LGPT3_C2CFG_OUT1_M: any = '1'
export const LGPT3_C2CFG_OUT1_S: any = '1'
/**
Channel 2 controls output 1.*/
export const LGPT3_C2CFG_OUT1_EN: any = '1'

/**
Channel 2 does not control output 1.*/
export const LGPT3_C2CFG_OUT1_DIS: any = '0'

/**
Output 0 enable.


When 0 $lt; CCACT $lt; 8, OUT0 becomes zero after a capture or compare event.*/
export const LGPT3_C2CFG_OUT0: any = '1'
export const LGPT3_C2CFG_OUT0_M: any = '1'
export const LGPT3_C2CFG_OUT0_S: any = '1'
/**
Channel 2 controls output 0.*/
export const LGPT3_C2CFG_OUT0_EN: any = '1'

/**
Channel 2 does not control output 0.*/
export const LGPT3_C2CFG_OUT0_DIS: any = '0'

/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const LGPT3_C2CFG_RESERVED7: any = '1'
export const LGPT3_C2CFG_RESERVED7_M: any = '1'
export const LGPT3_C2CFG_RESERVED7_S: any = '1'
/**
Select channel input.*/
export const LGPT3_C2CFG_INPUT: any = '1'
export const LGPT3_C2CFG_INPUT_M: any = '1'
export const LGPT3_C2CFG_INPUT_S: any = '1'
/**
IO controller*/
export const LGPT3_C2CFG_INPUT_IO: any = '1'

/**
Event fabric*/
export const LGPT3_C2CFG_INPUT_EV: any = '0'

/**
Determines the edge that triggers the channel input event. This happens post filter.*/
export const LGPT3_C2CFG_EDGE: any = '2'
export const LGPT3_C2CFG_EDGE_M: any = '2'
export const LGPT3_C2CFG_EDGE_S: any = '2'
/**
Input event is triggered at both edges.*/
export const LGPT3_C2CFG_EDGE_BOTH: any = '3'

/**
Input event is triggered at falling edge.*/
export const LGPT3_C2CFG_EDGE_FALL: any = '2'

/**
Input event is triggered at rising edge.*/
export const LGPT3_C2CFG_EDGE_RISE: any = '1'

/**
Input is turned off.*/
export const LGPT3_C2CFG_EDGE_NONE: any = '0'

/**
Capture-Compare action.


Capture-Compare action defines 15 different channel functions that utilize capture, compare, and zero events. In every compare event the timer looks at the current value of CNTR. The corresponding output event will be set 1 timer period after CNTR = C2CC. */
export const LGPT3_C2CFG_CCACT: any = '4'
export const LGPT3_C2CFG_CCACT_M: any = '4'
export const LGPT3_C2CFG_CCACT_S: any = '4'
/**
Pulse on compare repeatedly. 


Channel function sequence: 
- Pulse enabled outputs when C2CC.VAL = CNTR.VAL.

 The output is high for two timer clock periods.*/
export const LGPT3_C2CFG_CCACT_PULSE_ON_CMP: any = '15'

/**
Toggle on compare repeatedly.


Channel function sequence: 
- Toggle enabled outputs  when C2CC.VAL = CNTR.VAL.*/
export const LGPT3_C2CFG_CCACT_TGL_ON_CMP: any = '14'

/**
Set on compare repeatedly.


Channel function sequence: 
- Set enabled outputs  when C2CC.VAL = CNTR.VAL.*/
export const LGPT3_C2CFG_CCACT_SET_ON_CMP: any = '13'

/**
Clear on compare repeatedly.


Channel function sequence: 
- Clear enabled outputs  when C2CC.VAL = CNTR.VAL.*/
export const LGPT3_C2CFG_CCACT_CLR_ON_CMP: any = '12'

/**
Set on zero, toggle on compare repeatedly.


Channel function sequence: 
- Set enabled outputs when CNTR.VAL = 0.
- Toggle enabled outputs when C2CC.VAL = CNTR.VAL.

Set CTL.MODE to UP_PER for edge-aligned PWM generation. Duty cycle is given by: 

When C2CC.VAL $lt;= TGT.VAL: 
   Duty cycle = C2CC.VAL / ( TGT.VAL + 1 ).

When C2CC.VAL $gt; TGT.VAL: 
   Duty cycle = 1.

Enabled outputs are cleared when C2CC.VAL = 0 and CNTR.VAL = 0.*/
export const LGPT3_C2CFG_CCACT_SET_ON_0_TGL_ON_CMP: any = '11'

/**
Clear on zero, toggle on compare repeatedly.

 
Channel function sequence: 
- Clear enabled outputs when CNTR.VAL = 0.
- Toggle enabled outputs when C2CC.VAL = CNTR.VAL.

Set CTL.MODE to UPDWN_PER for center-aligned PWM generation. Duty cycle is given by: 

When C2CC.VAL $lt;= TGT.VAL: 
   Duty cycle = 1 - ( C2CC.VAL / TGT.VAL ).

When C2CC.VAL $gt; TGT.VAL: 
   Duty cycle = 0.

Enabled outputs are set when C2CC.VAL = 0 and CNTR.VAL = 0.*/
export const LGPT3_C2CFG_CCACT_CLR_ON_0_TGL_ON_CMP: any = '10'

/**
Set on capture repeatedly.


Channel function sequence: 
- Set enabled outputs on capture event and copy CNTR.VAL to C2CC.VAL.

*/
export const LGPT3_C2CFG_CCACT_SET_ON_CAPT: any = '9'

/**
Period and pulse width measurement.


Continuously capture period and pulse width of the signal selected by INPUT relative to the signal edge given by EDGE. 

Set enabled outputs and RIS.C2CC when C2CC.VAL contains signal period and PC2CC.VAL contains signal pulse width. 

Notes: 
- Make sure to configure INPUT and CCACT when CTL.MODE equals DIS, then set CTL.MODE to UP_ONCE or UP_PER. 
- The counter restarts in the selected timer mode when C2CC.VAL contains the signal period.
- If more than one channel uses this function, the channels will perform this function one at a time. The channel with lowest number has priority and performs the function first. Next measurement starts when current measurement completes successfully or times out. A timeout occurs when counter equals target. 
- To observe a timeout event the RIS.TGT interrupt can be used, or another channel can be configured to SET_ON_CMP with compare value equal TGT.

Signal property requirements:
- Signal Period $gt;= 2 * ( 1 + PRECFG.TICKDIV ) * timer clock period.
- Signal Period $lt;= MAX(CNTR) * (1 + PRECFG.TICKDIV ) * timer clock period.
- Signal low and high phase $gt;= (1 + PRECFG.TICKDIV ) * timer clock period. */
export const LGPT3_C2CFG_CCACT_PER_PULSE_WIDTH_MEAS: any = '8'

/**
Pulse on compare, and then disable channel.


Channel function sequence: 
- Pulse enabled outputs when C2CC.VAL = CNTR.VAL.
- Disable channel.

 The output is high for two timer clock periods.*/
export const LGPT3_C2CFG_CCACT_PULSE_ON_CMP_DIS: any = '7'

/**
Toggle on compare, and then disable channel.


Channel function sequence: 
- Toggle enabled outputs when C2CC.VAL = CNTR.VAL.
- Disable channel.*/
export const LGPT3_C2CFG_CCACT_TGL_ON_CMP_DIS: any = '6'

/**
Set on compare, and then disable channel.


Channel function sequence: 
- Set enabled outputs when C2CC.VAL = CNTR.VAL.
- Disable channel.*/
export const LGPT3_C2CFG_CCACT_SET_ON_CMP_DIS: any = '5'

/**
Clear on compare, and then disable channel.


Channel function sequence: 
- Clear enabled outputs when C2CC.VAL = CNTR.VAL.
- Disable channel.*/
export const LGPT3_C2CFG_CCACT_CLR_ON_CMP_DIS: any = '4'

/**
Set on zero, toggle on compare, and then disable channel.


Channel function sequence: 
- Set enabled outputs when CNTR.VAL = 0.
- Toggle enabled outputs when C2CC.VAL = CNTR.VAL.
- Disable channel.

Enabled outputs are cleared when C2CC.VAL = 0 and CNTR.VAL = 0.*/
export const LGPT3_C2CFG_CCACT_SET_ON_0_TGL_ON_CMP_DIS: any = '3'

/**
Clear on zero, toggle on compare, and then disable channel.


Channel function sequence: 
- Clear enabled outputs when CNTR.VAL = 0.
- Toggle enabled outputs when C2CC.VAL = CNTR.VAL.
- Disable channel.

Enabled outputs are set when C2CC.VAL = 0 and CNTR.VAL = 0.*/
export const LGPT3_C2CFG_CCACT_CLR_ON_0_TGL_ON_CMP_DIS: any = '2'

/**
Set on capture, and then disable channel.


Channel function sequence: 
- Set enabled outputs on capture event and copy CNTR.VAL to C2CC.VAL.
- Disable channel. 

Primary use scenario is to select this function before starting the timer.
Follow these steps to select this function while CTL.MODE is different from DIS:  
 - Set CCACT to SET_ON_CAPT with no output enable.
 - Configure INPUT (optional).
 - Wait for three timer clock periods as defined in PRECFG before setting CCACT to SET_ON_CAPT_DIS. Output enable is optional.

These steps prevent capture events caused by expired signal values in edge-detection circuit.*/
export const LGPT3_C2CFG_CCACT_SET_ON_CAPT_DIS: any = '1'

/**
Disable channel.*/
export const LGPT3_C2CFG_CCACT_DIS: any = '0'


// -------- REGISTER PTGT -------- //

/**
Pipeline Target

A read or write to this register will clear the RIS.ZERO and RIS.TGT interrupt.


If CTL.MODE != QDEC.
Target value for next counter period.
The timer will copy PTGT.VAL to TGT.VAL on the upcoming CNTR zero crossing only if PTGT.VAL has been written. The copy does not happen when restarting the timer.
This is useful to avoid period jitter in PWM applications with time-varying period, sometimes referenced as phase corrected PWM.

If CTL.MODE = QDEC
The CNTR value is updated with VALUE on IDX if the counter is counting down. If the counter is counting up, CNTR is loaded with zero on IDX.
In this mode the VALUE is not loaded into TGT on zero crossing.*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const LGPT3_PTGT_RESERVED24: any = '8'
export const LGPT3_PTGT_RESERVED24_M: any = '8'
export const LGPT3_PTGT_RESERVED24_S: any = '8'
/**
The pipleline target value.*/
export const LGPT3_PTGT_VAL: any = '24'
export const LGPT3_PTGT_VAL_M: any = '24'
export const LGPT3_PTGT_VAL_S: any = '24'

// -------- REGISTER PC0CC -------- //

/**
Pipeline Channel 0 Capture Compare */
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const LGPT3_PC0CC_RESERVED24: any = '8'
export const LGPT3_PC0CC_RESERVED24_M: any = '8'
export const LGPT3_PC0CC_RESERVED24_S: any = '8'
/**
Pipeline Capture Compare value.


User defined pipeline compare value or channel-updated capture value.

A read or write to this register will clear the RIS.C0CC interrupt.

Compare mode: 
An update of VAL will be transferred to C0CC.VAL when the next CNTR.VAL is zero and CTL.MODE is different from DIS. This is useful for PWM generation and prevents jitter on the edges of the generated signal.

Capture mode: 
When C0CFG.CCACT equals PER_PULSE_WIDTH_MEAS then VAL contains the width of the low or high phase of the selected signal. This is specified by C0CFG.EDGE.*/
export const LGPT3_PC0CC_VAL: any = '24'
export const LGPT3_PC0CC_VAL_M: any = '24'
export const LGPT3_PC0CC_VAL_S: any = '24'

// -------- REGISTER PC1CC -------- //

/**
Pipeline Channel 1 Capture Compare */
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const LGPT3_PC1CC_RESERVED24: any = '8'
export const LGPT3_PC1CC_RESERVED24_M: any = '8'
export const LGPT3_PC1CC_RESERVED24_S: any = '8'
/**
Pipeline Capture Compare value.


User defined pipeline compare value or channel-updated capture value.

A read or write to this register will clear the RIS.C1CC interrupt.

Compare mode: 
An update of VAL will be transferred to C1CC.VAL when the next CNTR.VAL is zero and CTL.MODE is different from DIS. This is useful for PWM generation and prevents jitter on the edges of the generated signal.

Capture mode: 
When C1CFG.CCACT equals PER_PULSE_WIDTH_MEAS then VAL contains the width of the low or high phase of the selected signal. This is specified by C1CFG.EDGE.*/
export const LGPT3_PC1CC_VAL: any = '24'
export const LGPT3_PC1CC_VAL_M: any = '24'
export const LGPT3_PC1CC_VAL_S: any = '24'

// -------- REGISTER PC2CC -------- //

/**
Pipeline Channel 2 Capture Compare */
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const LGPT3_PC2CC_RESERVED24: any = '8'
export const LGPT3_PC2CC_RESERVED24_M: any = '8'
export const LGPT3_PC2CC_RESERVED24_S: any = '8'
/**
Pipeline Capture Compare value.


User defined pipeline compare value or channel-updated capture value.

A read or write to this register will clear the RIS.C2CC interrupt.

Compare mode: 
An update of VAL will be transferred to C2CC.VAL when the next CNTR.VAL is zero and CTL.MODE is different from DIS. This is useful for PWM generation and prevents jitter on the edges of the generated signal.

Capture mode: 
When C2CFG.CCACT equals PER_PULSE_WIDTH_MEAS then VAL contains the width of the low or high phase of the selected signal. This is specified by C2CFG.EDGE.*/
export const LGPT3_PC2CC_VAL: any = '24'
export const LGPT3_PC2CC_VAL_M: any = '24'
export const LGPT3_PC2CC_VAL_S: any = '24'

// -------- REGISTER TGT -------- //

/**
Target


User defined counter target. 
A read or write to this register will clear the RIS.ZERO and RIS.TGT interrupt.*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const LGPT3_TGT_RESERVED24: any = '8'
export const LGPT3_TGT_RESERVED24_M: any = '8'
export const LGPT3_TGT_RESERVED24_S: any = '8'
/**
User defined counter target value.*/
export const LGPT3_TGT_VAL: any = '24'
export const LGPT3_TGT_VAL_M: any = '24'
export const LGPT3_TGT_VAL_S: any = '24'

// -------- REGISTER C0CC -------- //

/**
Channel 0 Capture Compare*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const LGPT3_C0CC_RESERVED24: any = '8'
export const LGPT3_C0CC_RESERVED24_M: any = '8'
export const LGPT3_C0CC_RESERVED24_S: any = '8'
/**
Capture Compare value.


User defined compare value or channel-updated capture value.

A read or write to this register will clear the RIS.C0CC interrupt.

Compare mode: 
VAL is compared against CNTR.VAL and an event is generated as specified by C0CFG.CCACT when these are equal. 

Capture mode: 
The current counter value is stored in VAL when a capture event occurs. C0CFG.CCACT determines if VAL is a signal period or a regular capture value.*/
export const LGPT3_C0CC_VAL: any = '24'
export const LGPT3_C0CC_VAL_M: any = '24'
export const LGPT3_C0CC_VAL_S: any = '24'

// -------- REGISTER C1CC -------- //

/**
Channel 1 Capture Compare*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const LGPT3_C1CC_RESERVED24: any = '8'
export const LGPT3_C1CC_RESERVED24_M: any = '8'
export const LGPT3_C1CC_RESERVED24_S: any = '8'
/**
Capture Compare value.


User defined compare value or channel-updated capture value.

A read or write to this register will clear the RIS.C1CC interrupt.

Compare mode: 
VAL is compared against CNTR.VAL and an event is generated as specified by C1CFG.CCACT when these are equal. 

Capture mode: 
The current counter value is stored in VAL when a capture event occurs. C1CFG.CCACT determines if VAL is a signal period or a regular capture value.*/
export const LGPT3_C1CC_VAL: any = '24'
export const LGPT3_C1CC_VAL_M: any = '24'
export const LGPT3_C1CC_VAL_S: any = '24'

// -------- REGISTER C2CC -------- //

/**
Channel 2 Capture Compare*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const LGPT3_C2CC_RESERVED24: any = '8'
export const LGPT3_C2CC_RESERVED24_M: any = '8'
export const LGPT3_C2CC_RESERVED24_S: any = '8'
/**
Capture Compare value.


User defined compare value or channel-updated capture value.

A read or write to this register will clear the RIS.C2CC interrupt.

Compare mode: 
VAL is compared against CNTR.VAL and an event is generated as specified by C2CFG.CCACT when these are equal. 

Capture mode: 
The current counter value is stored in VAL when a capture event occurs. C2CFG.CCACT determines if VAL is a signal period or a regular capture value.*/
export const LGPT3_C2CC_VAL: any = '24'
export const LGPT3_C2CC_VAL_M: any = '24'
export const LGPT3_C2CC_VAL_S: any = '24'

// -------- REGISTER PTGTNC -------- //

/**
Pipeline Target No Clear


Use this register to read or write to PTGT without clearing the RIS.ZERO and RIS.TGT interrupt.*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const LGPT3_PTGTNC_RESERVED24: any = '8'
export const LGPT3_PTGTNC_RESERVED24_M: any = '8'
export const LGPT3_PTGTNC_RESERVED24_S: any = '8'
/**
A read or write to this register will not clear the RIS.TGT interrupt.


If CTL.MODE != QDEC.
Target value for next counter period.
The timer copies VAL to TGT.VAL when CNTR.VAL becomes 0. The copy does not happen when restarting the timer.
This is useful to avoid period jitter in PWM applications with time-varying period, sometimes referenced as phase corrected PWM.

If CTL.MODE = QDEC.
The CNTR.VAL is updated with VAL on IDX. VAL is not loaded into TGT.VAL when CNTR.VAL becomes 0. */
export const LGPT3_PTGTNC_VAL: any = '24'
export const LGPT3_PTGTNC_VAL_M: any = '24'
export const LGPT3_PTGTNC_VAL_S: any = '24'

// -------- REGISTER PC0CCNC -------- //

/**
Pipeline Channel 0 Capture Compare No Clear*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const LGPT3_PC0CCNC_RESERVED24: any = '8'
export const LGPT3_PC0CCNC_RESERVED24_M: any = '8'
export const LGPT3_PC0CCNC_RESERVED24_S: any = '8'
/**
Pipeline Capture Compare value.


User defined pipeline compare value or channel-updated capture value.

A read or write to this register will not clear the RIS.C0CC interrupt.

Compare mode: 
An update of VAL will be transferred to C0CC.VAL when the next CNTR.VAL is zero and CTL.MODE is different from DIS. This is useful for PWM generation and prevents jitter on the edges of the generated signal.

Capture mode: 
When C0CFG.CCACT equals PER_PULSE_WIDTH_MEAS then VAL contains the width of the low or high phase of the selected signal. This is specified by C0CFG.EDGE.*/
export const LGPT3_PC0CCNC_VAL: any = '24'
export const LGPT3_PC0CCNC_VAL_M: any = '24'
export const LGPT3_PC0CCNC_VAL_S: any = '24'

// -------- REGISTER PC1CCNC -------- //

/**
Pipeline Channel 1 Capture Compare No Clear*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const LGPT3_PC1CCNC_RESERVED24: any = '8'
export const LGPT3_PC1CCNC_RESERVED24_M: any = '8'
export const LGPT3_PC1CCNC_RESERVED24_S: any = '8'
/**
Pipeline Capture Compare value.


User defined pipeline compare value or channel-updated capture value.

A read or write to this register will not clear the RIS.C1CC interrupt.

Compare mode: 
An update of VAL will be transferred to C1CC.VAL when the next CNTR.VAL is zero and CTL.MODE is different from DIS. This is useful for PWM generation and prevents jitter on the edges of the generated signal.

Capture mode: 
When C1CFG.CCACT equals PER_PULSE_WIDTH_MEAS then VAL contains the width of the low or high phase of the selected signal. This is specified by C1CFG.EDGE.*/
export const LGPT3_PC1CCNC_VAL: any = '24'
export const LGPT3_PC1CCNC_VAL_M: any = '24'
export const LGPT3_PC1CCNC_VAL_S: any = '24'

// -------- REGISTER PC2CCNC -------- //

/**
Pipeline Channel 2 Capture Compare No Clear*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const LGPT3_PC2CCNC_RESERVED24: any = '8'
export const LGPT3_PC2CCNC_RESERVED24_M: any = '8'
export const LGPT3_PC2CCNC_RESERVED24_S: any = '8'
/**
Pipeline Capture Compare value.


User defined pipeline compare value or channel-updated capture value.

A read or write to this register will not clear the RIS.C2CC interrupt.

Compare mode: 
An update of VAL will be transferred to C2CC.VAL when the next CNTR.VAL is zero and CTL.MODE is different from DIS. This is useful for PWM generation and prevents jitter on the edges of the generated signal.

Capture mode: 
When C2CFG.CCACT equals PER_PULSE_WIDTH_MEAS then VAL contains the width of the low or high phase of the selected signal. This is specified by C2CFG.EDGE.*/
export const LGPT3_PC2CCNC_VAL: any = '24'
export const LGPT3_PC2CCNC_VAL_M: any = '24'
export const LGPT3_PC2CCNC_VAL_S: any = '24'

// -------- REGISTER TGTNC -------- //

/**
Target No Clear


Use this register to read or write to TGT without clearing the RIS.ZERO and RIS.TGT interrupt.*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const LGPT3_TGTNC_RESERVED24: any = '8'
export const LGPT3_TGTNC_RESERVED24_M: any = '8'
export const LGPT3_TGTNC_RESERVED24_S: any = '8'
/**
User defined counter target value.*/
export const LGPT3_TGTNC_VAL: any = '24'
export const LGPT3_TGTNC_VAL_M: any = '24'
export const LGPT3_TGTNC_VAL_S: any = '24'

// -------- REGISTER C0CCNC -------- //

/**
Channel 0 Capture Compare No Clear*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const LGPT3_C0CCNC_RESERVED24: any = '8'
export const LGPT3_C0CCNC_RESERVED24_M: any = '8'
export const LGPT3_C0CCNC_RESERVED24_S: any = '8'
/**
Capture Compare value.


User defined compare value or channel-updated capture value.

A read or write to this register will not clear the RIS.C0CC interrupt.

Compare mode: 
VAL is compared against CNTR.VAL and an event is generated as specified by C0CFG.CCACT when these are equal. 

Capture mode: 
The current counter value is stored in VAL when a capture event occurs. C0CFG.CCACT determines if VAL is a signal period or a regular capture value.*/
export const LGPT3_C0CCNC_VAL: any = '24'
export const LGPT3_C0CCNC_VAL_M: any = '24'
export const LGPT3_C0CCNC_VAL_S: any = '24'

// -------- REGISTER C1CCNC -------- //

/**
Channel 1 Capture Compare No Clear*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const LGPT3_C1CCNC_RESERVED24: any = '8'
export const LGPT3_C1CCNC_RESERVED24_M: any = '8'
export const LGPT3_C1CCNC_RESERVED24_S: any = '8'
/**
Capture Compare value.


User defined compare value or channel-updated capture value.

A read or write to this register will not clear the RIS.C1CC interrupt.

Compare mode: 
VAL is compared against CNTR.VAL and an event is generated as specified by C1CFG.CCACT when these are equal. 

Capture mode: 
The current counter value is stored in VAL when a capture event occurs. C1CFG.CCACT determines if VAL is a signal period or a regular capture value.*/
export const LGPT3_C1CCNC_VAL: any = '24'
export const LGPT3_C1CCNC_VAL_M: any = '24'
export const LGPT3_C1CCNC_VAL_S: any = '24'

// -------- REGISTER C2CCNC -------- //

/**
Channel 2 Capture Compare No Clear*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const LGPT3_C2CCNC_RESERVED24: any = '8'
export const LGPT3_C2CCNC_RESERVED24_M: any = '8'
export const LGPT3_C2CCNC_RESERVED24_S: any = '8'
/**
Capture Compare value.


User defined compare value or channel-updated capture value.

A read or write to this register will not clear the RIS.C2CC interrupt.

Compare mode: 
VAL is compared against CNTR.VAL and an event is generated as specified by C2CFG.CCACT when these are equal. 

Capture mode: 
The current counter value is stored in VAL when a capture event occurs. C2CFG.CCACT determines if VAL is a signal period or a regular capture value.*/
export const LGPT3_C2CCNC_VAL: any = '24'
export const LGPT3_C2CCNC_VAL_M: any = '24'
export const LGPT3_C2CCNC_VAL_S: any = '24'

// -------- MODULE RTC -------- //

export interface RTC_t {
    DESC: em.$Reg
    CTL: em.$Reg
    ARMSET: em.$Reg
    ARMCLR: em.$Reg
    TIME8U: em.$Reg
    TIME524M: em.$Reg
    CH0CC8U: em.$Reg
    CH1CC8U: em.$Reg
    CH1CFG: em.$Reg
    IMASK: em.$Reg
    RIS: em.$Reg
    MIS: em.$Reg
    ISET: em.$Reg
    ICLR: em.$Reg
    IMSET: em.$Reg
    IMCLR: em.$Reg
    EMU: em.$Reg
}

// -------- REGISTER DESC -------- //

/**
Description Register. This register provides IP module ID, revision information, instance index and standard MMR registers offset.*/
/**
Module identifier used to uniquely identify this IP.*/
export const RTC_DESC_MODID: any = '16'
export const RTC_DESC_MODID_M: any = '16'
export const RTC_DESC_MODID_S: any = '16'
/**
Standard IP MMR block offset. Standard IP MMRs are the set of from aggregated IRQ registers till DTB.


0: Standard IP MMRs do not exist

0x1-0xF: Standard IP MMRs begin at offset of (64*STDIPOFF from the base IP address)*/
export const RTC_DESC_STDIPOFF: any = '4'
export const RTC_DESC_STDIPOFF_M: any = '4'
export const RTC_DESC_STDIPOFF_S: any = '4'
/**
IP Instance ID number. If multiple instances of IP exist in the device, this field can identify the instance number (0-15).*/
export const RTC_DESC_INSTIDX: any = '4'
export const RTC_DESC_INSTIDX_M: any = '4'
export const RTC_DESC_INSTIDX_S: any = '4'
/**
Major revision of IP (0-15).*/
export const RTC_DESC_MAJREV: any = '4'
export const RTC_DESC_MAJREV_M: any = '4'
export const RTC_DESC_MAJREV_S: any = '4'
/**
Minor revision of IP (0-15).*/
export const RTC_DESC_MINREV: any = '4'
export const RTC_DESC_MINREV_M: any = '4'
export const RTC_DESC_MINREV_S: any = '4'

// -------- REGISTER CTL -------- //

/**
RTC Control register. This register controls resetting the of RTC counter*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const RTC_CTL_RESERVED1: any = '31'
export const RTC_CTL_RESERVED1_M: any = '31'
export const RTC_CTL_RESERVED1_S: any = '31'
/**
RTC counter reset. Writing 1 to this bit will reset the RTC counter, and cause it to resume counting from 0x0*/
export const RTC_CTL_RST: any = '1'
export const RTC_CTL_RST_M: any = '1'
export const RTC_CTL_RST_S: any = '1'
/**
Reset the timer.*/
export const RTC_CTL_RST_CLR: any = '1'

/**
No effect*/
export const RTC_CTL_RST_NOEFF: any = '0'


// -------- REGISTER ARMSET -------- //

/**
RTC channel mode set register. Read to each bit field of this register provides the current channel mode.	

- Read of 1'b0 indicates the channel is unarmed.
- Read of 1'b1 indicates the channel is either in capture or compare mode.

A write to each bitfield of this register the following effect:
- Write of 1'b0 has no effect on channel mode.
- Write of 1'b1 has no effect on the compare channel. While write of 1'b1 for capture channel will arm it in capture mode if it is disabled.*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const RTC_ARMSET_RESERVED2: any = '30'
export const RTC_ARMSET_RESERVED2_M: any = '30'
export const RTC_ARMSET_RESERVED2_S: any = '30'
/**
Arming Channel 1 for capture operation.*/
export const RTC_ARMSET_CH1: any = '1'
export const RTC_ARMSET_CH1_M: any = '1'
export const RTC_ARMSET_CH1_S: any = '1'
/**
Enable the Channel 1 for capture operation*/
export const RTC_ARMSET_CH1_SET: any = '1'

/**
No effect on the channel*/
export const RTC_ARMSET_CH1_NOEFF: any = '0'

/**
No effect on arming the channel. Read will give the status of the Channel 0.*/
export const RTC_ARMSET_CH0: any = '1'
export const RTC_ARMSET_CH0_M: any = '1'
export const RTC_ARMSET_CH0_S: any = '1'
/**
No effect on the compare channel*/
export const RTC_ARMSET_CH0_SET: any = '1'

/**
No effect on the channel*/
export const RTC_ARMSET_CH0_NOEFF: any = '0'


// -------- REGISTER ARMCLR -------- //

/**
RTC channel mode clear register. Read to each bit field of this register provides the current channel mode.	

- Read of 1'b0 indicates the channel is unarmed.
- Read of 1'b1 indicates the channel is either in capture or compare mode.

A write to each bitfield of this register the following effect:
- Write of 1'b0 has no effect on channel mode.
- Write of 1'b1 for capture/compare channel will disarm it without triggering event unless a compare/capture event happens in the same cycle.

*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const RTC_ARMCLR_RESERVED2: any = '30'
export const RTC_ARMCLR_RESERVED2_M: any = '30'
export const RTC_ARMCLR_RESERVED2_S: any = '30'
/**
Disarming Channel 1*/
export const RTC_ARMCLR_CH1: any = '1'
export const RTC_ARMCLR_CH1_M: any = '1'
export const RTC_ARMCLR_CH1_S: any = '1'
/**
Set channel in UNARMED state without triggering event unless a capture event happens in the same cycle*/
export const RTC_ARMCLR_CH1_CLR: any = '1'

/**
No effect on the channel*/
export const RTC_ARMCLR_CH1_NOEFF: any = '0'

/**
Disarming Channel 0*/
export const RTC_ARMCLR_CH0: any = '1'
export const RTC_ARMCLR_CH0_M: any = '1'
export const RTC_ARMCLR_CH0_S: any = '1'
/**
Set channel in UNARMED state without triggering event unless a compare event happens in the same cycle*/
export const RTC_ARMCLR_CH0_CLR: any = '1'

/**
No effect on the channel*/
export const RTC_ARMCLR_CH0_NOEFF: any = '0'


// -------- REGISTER TIME8U -------- //

/**
RTC Time value register. 32-bit unsigned integer representing [34:3] time slice of the real time clock counter. The counter runs on LFCLK. This field has a resolution of 8us, and range of about 9.5 hours.*/
/**
Unsigned integer representing [34:3]slice of real time counter.

*/
export const RTC_TIME8U_VAL: any = '32'
export const RTC_TIME8U_VAL_M: any = '32'
export const RTC_TIME8U_VAL_S: any = '32'

// -------- REGISTER TIME524M -------- //

/**
RTC time value register. 32-bit unsigned integer representing [50:19] time slice of the real time clock counter. This field has a resolution of about 0.5s and a range of about 71.4 years.*/
/**
Unsigned integer representing. [50:19]slice of real time counter.*/
export const RTC_TIME524M_VAL: any = '32'
export const RTC_TIME524M_VAL_M: any = '32'
export const RTC_TIME524M_VAL_S: any = '32'

// -------- REGISTER CH0CC8U -------- //

/**
Channel 0 compare value. A write to this register automatically enables the channel to trigger an event when RTC timer reaches the programmed value or if the programmed value is 1 sec in the past.*/
/**
RTC Channel 0 compare value. This value is compared against TIME8U.VAL. A Channel 0 event is generated when TIME8U.VAL value reaches or exceeds this compare value.*/
export const RTC_CH0CC8U_VAL: any = '32'
export const RTC_CH0CC8U_VAL_M: any = '32'
export const RTC_CH0CC8U_VAL_S: any = '32'

// -------- REGISTER CH1CC8U -------- //

/**
Channel 1 capture value. This register captures the RTC time slice [34:3] on each selected edge of the capture event when the ARMSET.CH1 = 1.*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const RTC_CH1CC8U_RESERVED21: any = '11'
export const RTC_CH1CC8U_RESERVED21_M: any = '11'
export const RTC_CH1CC8U_RESERVED21_S: any = '11'
/**
TIME8U.VAL captured value at the last selected edge of capture event.*/
export const RTC_CH1CC8U_VAL: any = '21'
export const RTC_CH1CC8U_VAL_M: any = '21'
export const RTC_CH1CC8U_VAL_S: any = '21'

// -------- REGISTER CH1CFG -------- //

/**
Channel 1 configuration register. This register can be used to select the capture edge for generating the capture event.*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const RTC_CH1CFG_RESERVED1: any = '31'
export const RTC_CH1CFG_RESERVED1_M: any = '31'
export const RTC_CH1CFG_RESERVED1_S: any = '31'
/**
Edge detect configuration for capture source*/
export const RTC_CH1CFG_EDGE: any = '1'
export const RTC_CH1CFG_EDGE_M: any = '1'
export const RTC_CH1CFG_EDGE_S: any = '1'
/**
Falling Edge.*/
export const RTC_CH1CFG_EDGE_FALL: any = '1'

/**
Rising Edge.*/
export const RTC_CH1CFG_EDGE_RISE: any = '0'


// -------- REGISTER IMASK -------- //

/**
Interrupt Mask. If a bit is set, then corresponding interrupt is un-masked. Un-masking the interrupt causes the raw interrupt to be visible in IIDX, as well as MIS.*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const RTC_IMASK_RESERVED2: any = '30'
export const RTC_IMASK_RESERVED2_M: any = '30'
export const RTC_IMASK_RESERVED2_S: any = '30'
/**
Channel 1 Event Interrupt Mask.*/
export const RTC_IMASK_EV1: any = '1'
export const RTC_IMASK_EV1_M: any = '1'
export const RTC_IMASK_EV1_S: any = '1'
/**
Enable Interrrupt Mask*/
export const RTC_IMASK_EV1_EN: any = '1'

/**
Clear Interrupt Mask*/
export const RTC_IMASK_EV1_DIS: any = '0'

/**
Channel 0 Event Interrupt Mask.*/
export const RTC_IMASK_EV0: any = '1'
export const RTC_IMASK_EV0_M: any = '1'
export const RTC_IMASK_EV0_S: any = '1'
/**
Enable Interrrupt Mask*/
export const RTC_IMASK_EV0_EN: any = '1'

/**
Disable Interrupt Mask*/
export const RTC_IMASK_EV0_DIS: any = '0'


// -------- REGISTER RIS -------- //

/**
Interrupt mask. This register selects interrupt sources which are allowed to pass from RIS to MIS when the corresponding bit-fields are set to 1.*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const RTC_RIS_RESERVED2: any = '30'
export const RTC_RIS_RESERVED2_M: any = '30'
export const RTC_RIS_RESERVED2_S: any = '30'
/**
Raw interrupt status for Channel 1 event.

This bit is set to 1 when a capture event is received on Channel 1. 
This bit will be cleared when the bit in ICLR.EV1 is set to 1 or when the captured time value is read from the CH1CC8U register.*/
export const RTC_RIS_EV1: any = '1'
export const RTC_RIS_EV1_M: any = '1'
export const RTC_RIS_EV1_S: any = '1'
/**
Interrupt occured*/
export const RTC_RIS_EV1_SET: any = '1'

/**
Interrupt did not occur*/
export const RTC_RIS_EV1_CLR: any = '0'

/**
Raw interrupt status for Channel 0 event.

This bit is set to 1 when a compare event occurs on Channel 0. 
This bit will be cleared. When the corresponding bit in ICLR.EV0 is set to 1. Or when a new compare value is written in CH0CC8U register*/
export const RTC_RIS_EV0: any = '1'
export const RTC_RIS_EV0_M: any = '1'
export const RTC_RIS_EV0_S: any = '1'
/**
Interrupt occured*/
export const RTC_RIS_EV0_SET: any = '1'

/**
Interrupt did not occur*/
export const RTC_RIS_EV0_CLR: any = '0'


// -------- REGISTER MIS -------- //

/**
Masked interrupt status. This register is simply a bitwise AND of the contents of IMASK and RIS.*] registers. A flag set in this register can be cleared by writing 1 to the corresponding ICLR register bit.*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const RTC_MIS_RESERVED2: any = '30'
export const RTC_MIS_RESERVED2_M: any = '30'
export const RTC_MIS_RESERVED2_S: any = '30'
/**
Masked interrupt status for channel 1 event.*/
export const RTC_MIS_EV1: any = '1'
export const RTC_MIS_EV1_M: any = '1'
export const RTC_MIS_EV1_S: any = '1'
/**
Interrupt occured*/
export const RTC_MIS_EV1_SET: any = '1'

/**
Interrupt did not occur*/
export const RTC_MIS_EV1_CLR: any = '0'

/**
Masked interrupt status for channel 0 event.*/
export const RTC_MIS_EV0: any = '1'
export const RTC_MIS_EV0_M: any = '1'
export const RTC_MIS_EV0_S: any = '1'
/**
Interrupt occured*/
export const RTC_MIS_EV0_SET: any = '1'

/**
Interrupt did not occur*/
export const RTC_MIS_EV0_CLR: any = '0'


// -------- REGISTER ISET -------- //

/**
Interrupt set register. This register can used by software for diagnostics and safety checking purposes. Writing a 1 to a bit in this register will set the event and the corresponding RIS bit also gets set. If the corresponding IMASK bit is set, then the corresponding MIS register bit also gets set.*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const RTC_ISET_RESERVED2: any = '30'
export const RTC_ISET_RESERVED2_M: any = '30'
export const RTC_ISET_RESERVED2_S: any = '30'
/**
Set Channel 1 event Interrupt.*/
export const RTC_ISET_EV1: any = '1'
export const RTC_ISET_EV1_M: any = '1'
export const RTC_ISET_EV1_S: any = '1'
/**
Set interrupt*/
export const RTC_ISET_EV1_SET: any = '1'

/**
Writing 0 has no effect*/
export const RTC_ISET_EV1_NO_EFFECT: any = '0'

/**
Set Channel 0 event Interrupt.*/
export const RTC_ISET_EV0: any = '1'
export const RTC_ISET_EV0_M: any = '1'
export const RTC_ISET_EV0_S: any = '1'
/**
Set interrupt*/
export const RTC_ISET_EV0_SET: any = '1'

/**
Writing 0 has no effect*/
export const RTC_ISET_EV0_NO_EFFECT: any = '0'


// -------- REGISTER ICLR -------- //

/**
	Interrupt clear register. This register allows software to clear interrupts. Writing a 1 to a bit in this register will clear the event and the corresponding RIS bit also gets cleared. If the corresponding IMASK bit is set, then the corresponding MIS register bit also gets cleared.*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const RTC_ICLR_RESERVED2: any = '30'
export const RTC_ICLR_RESERVED2_M: any = '30'
export const RTC_ICLR_RESERVED2_S: any = '30'
/**
Clears channel 1 event interrupt.*/
export const RTC_ICLR_EV1: any = '1'
export const RTC_ICLR_EV1_M: any = '1'
export const RTC_ICLR_EV1_S: any = '1'
/**
Clear Interrupt*/
export const RTC_ICLR_EV1_CLR: any = '1'

/**
Writing 0 has no effect*/
export const RTC_ICLR_EV1_NO_EFF: any = '0'

/**
Clears channel 0 event interrupt.*/
export const RTC_ICLR_EV0: any = '1'
export const RTC_ICLR_EV0_M: any = '1'
export const RTC_ICLR_EV0_S: any = '1'
/**
Clear Interrupt.*/
export const RTC_ICLR_EV0_CLR: any = '1'

/**
Writing 0 has no effect*/
export const RTC_ICLR_EV0_NO_EFF: any = '0'


// -------- REGISTER IMSET -------- //

/**
Interrupt mask set register. Writing a 1 to a bit in this register will set the corresponding IMASK bit.*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const RTC_IMSET_RESERVED2: any = '30'
export const RTC_IMSET_RESERVED2_M: any = '30'
export const RTC_IMSET_RESERVED2_S: any = '30'
/**
Set channel 1 event interrupt mask.*/
export const RTC_IMSET_EV1: any = '1'
export const RTC_IMSET_EV1_M: any = '1'
export const RTC_IMSET_EV1_S: any = '1'
/**
Set interrupt mask*/
export const RTC_IMSET_EV1_SET: any = '1'

/**
Writing 0 has no effect*/
export const RTC_IMSET_EV1_NO_EFF: any = '0'

/**
Set channel 0 event interrupt mask.*/
export const RTC_IMSET_EV0: any = '1'
export const RTC_IMSET_EV0_M: any = '1'
export const RTC_IMSET_EV0_S: any = '1'
/**
Set interrupt mask*/
export const RTC_IMSET_EV0_SET: any = '1'

/**
Writing 0 has no effect*/
export const RTC_IMSET_EV0_NO_EFF: any = '0'


// -------- REGISTER IMCLR -------- //

/**
Interrupt mask clear register. Writing a 1 to a bit in this register will clear the corresponding IMASK bit.*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const RTC_IMCLR_RESERVED2: any = '30'
export const RTC_IMCLR_RESERVED2_M: any = '30'
export const RTC_IMCLR_RESERVED2_S: any = '30'
/**
Clears Channel 1 event interrupt mask.*/
export const RTC_IMCLR_EV1: any = '1'
export const RTC_IMCLR_EV1_M: any = '1'
export const RTC_IMCLR_EV1_S: any = '1'
/**
Clear Interrupt Mask*/
export const RTC_IMCLR_EV1_CLR: any = '1'

/**
Writing 0 has no effect*/
export const RTC_IMCLR_EV1_NO_EFF: any = '0'

/**
Clears Channel 0 event interrupt mask.*/
export const RTC_IMCLR_EV0: any = '1'
export const RTC_IMCLR_EV0_M: any = '1'
export const RTC_IMCLR_EV0_S: any = '1'
/**
Clear Interrupt Mask*/
export const RTC_IMCLR_EV0_CLR: any = '1'

/**
Writing 0 has no effect*/
export const RTC_IMCLR_EV0_NO_EFF: any = '0'


// -------- REGISTER EMU -------- //

/**
Emulation control register. This register controls the behavior of the IP related to core halted input.*/
/**
Software should not rely on the value of a reserved. Writing any other value than the reset value may result in undefined behavior.*/
export const RTC_EMU_RESERVED1: any = '31'
export const RTC_EMU_RESERVED1_M: any = '31'
export const RTC_EMU_RESERVED1_S: any = '31'
/**
Halt control.*/
export const RTC_EMU_HALT: any = '1'
export const RTC_EMU_HALT_M: any = '1'
export const RTC_EMU_HALT_S: any = '1'
/**
Freeze option. The IP freezes functionality when the core halted input is asserted, and resumes when it is deasserted. The freeze can either be immediate or after the IP has reached a boundary from where it can resume without corruption.*/
export const RTC_EMU_HALT_STOP: any = '1'

/**
Free run option. The IP ignores the state of the core halted input.*/
export const RTC_EMU_HALT_RUN: any = '0'


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
export const UART_DR_RESERVED12_M: any = '20'
export const UART_DR_RESERVED12_S: any = '20'
/**
UART Overrun Error:

This bit is set to 1 if data is received and the receive FIFO is already full. The FIFO contents remain valid because no more data is written when the FIFO is full, only the contents of the shift register are overwritten.
This is cleared to 0 once there is an empty space in the FIFO and a new character can be written to it.*/
export const UART_DR_OE: any = '1'
export const UART_DR_OE_M: any = '1'
export const UART_DR_OE_S: any = '1'
/**
UART Break Error:

This bit is set to 1 if a break condition was detected, indicating that the received data input (UARTRXD input pin) was held LOW for longer than a full-word transmission time (defined as start, data, parity and stop bits).
In FIFO mode, this error is associated with the character at the top of the FIFO (i.e., the oldest received data character since last read). When a break occurs, a 0 character is loaded into the FIFO. The next character is enabled after the receive data input (UARTRXD input pin) goes to a 1 (marking state), and the next valid start bit is received.*/
export const UART_DR_BE: any = '1'
export const UART_DR_BE_M: any = '1'
export const UART_DR_BE_S: any = '1'
/**
UART Parity Error:

When set to 1, it indicates that the parity of the received data character does not match the parity that the LCRH.EPS and LCRH.SPS select.
In FIFO mode, this error is associated with the character at the top of the FIFO (i.e., the oldest received data character since last read).*/
export const UART_DR_PE: any = '1'
export const UART_DR_PE_M: any = '1'
export const UART_DR_PE_S: any = '1'
/**
UART Framing Error:

When set to 1, it indicates that the received character did not have a valid stop bit (a valid stop bit is 1).
In FIFO mode, this error is associated with the character at the top of the FIFO (i.e., the oldest received data character since last read).*/
export const UART_DR_FE: any = '1'
export const UART_DR_FE_M: any = '1'
export const UART_DR_FE_S: any = '1'
/**
Data transmitted or received:

On writes, the transmit data character is pushed into the FIFO.
On reads, the oldest received data character since the last read is returned.*/
export const UART_DR_DATA: any = '8'
export const UART_DR_DATA_M: any = '8'
export const UART_DR_DATA_S: any = '8'

// -------- REGISTER RSR_ECR -------- //

/**
Status

This register is mapped to the same address as ECR register.  Reads from this address are associated with RSR_ECR register and return the receive status. Writes to this address are associated with ECR register and clear the receive status flags (framing, parity, break, and overrun errors).
If the status is read from this register, then the status information for break, framing and parity corresponds to the data character read from the Data Register DR, prior to reading the RSR_ECR. The status information for overrun is set immediately when an overrun condition occurs.*/
/**
	Reads to this field return zero, writes to this field are ignored.*/
export const UART_RSR_ECR_RESERVED4: any = '28'
export const UART_RSR_ECR_RESERVED4_M: any = '28'
export const UART_RSR_ECR_RESERVED4_S: any = '28'
/**
UART Overrun Error:

This bit is set to 1 if data is received and the receive FIFO is already full. The FIFO contents remain valid because no more data is written when the FIFO is full, only the contents of the shift register are overwritten.
This is cleared to 0 once there is an empty space in the FIFO and a new character can be written to it.*/
export const UART_RSR_ECR_OE: any = '1'
export const UART_RSR_ECR_OE_M: any = '1'
export const UART_RSR_ECR_OE_S: any = '1'
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
export const UART_RSR_ECR_BE_M: any = '1'
export const UART_RSR_ECR_BE_S: any = '1'
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
export const UART_RSR_ECR_PE_M: any = '1'
export const UART_RSR_ECR_PE_S: any = '1'
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
export const UART_RSR_ECR_FE_M: any = '1'
export const UART_RSR_ECR_FE_S: any = '1'
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
export const UART_RESERVED0_RESERVED_M: any = '32'
export const UART_RESERVED0_RESERVED_S: any = '32'

// -------- REGISTER FR -------- //

/**
Flag

Reads from this register return the UART flags.*/
/**
	Reads to this field return zero, writes to this field are ignored.*/
export const UART_FR_RESERVED8: any = '24'
export const UART_FR_RESERVED8_M: any = '24'
export const UART_FR_RESERVED8_S: any = '24'
/**
UART Transmit FIFO Empty:

The meaning of this bit depends on the state of LCRH.FEN .
  - If the FIFO is disabled, this bit is set when the transmit holding register is empty.
  - If the FIFO is enabled, this bit is set when the transmit FIFO is empty.
This bit does not indicate if there is data in the transmit shift register.*/
export const UART_FR_TXFE: any = '1'
export const UART_FR_TXFE_M: any = '1'
export const UART_FR_TXFE_S: any = '1'
/**
UART Receive FIFO Full: 

The meaning of this bit depends on the state of LCRH.FEN.
  - If the FIFO is disabled, this bit is set when the receive holding register is full.
  - If the FIFO is enabled, this bit is set when the receive FIFO is full.*/
export const UART_FR_RXFF: any = '1'
export const UART_FR_RXFF_M: any = '1'
export const UART_FR_RXFF_S: any = '1'
/**
UART Transmit FIFO Full:

Transmit FIFO full. The meaning of this bit depends on the state of LCRH.FEN.
  - If the FIFO is disabled, this bit is set when the transmit holding register is full.
  - If the FIFO is enabled, this bit is set when the transmit FIFO is full.*/
export const UART_FR_TXFF: any = '1'
export const UART_FR_TXFF_M: any = '1'
export const UART_FR_TXFF_S: any = '1'
/**
UART Receive FIFO Empty:

Receive FIFO empty. The meaning of this bit depends on the state of LCRH.FEN.
  - If the FIFO is disabled, this bit is set when the receive holding register is empty.
  - If the FIFO is enabled, this bit is set when the receive FIFO is empty.*/
export const UART_FR_RXFE: any = '1'
export const UART_FR_RXFE_M: any = '1'
export const UART_FR_RXFE_S: any = '1'
/**
UART Busy: 

If this bit is set to 1, the UART is busy transmitting data. This bit remains set until the complete byte, including all the stop bits, has been sent from the shift register.
This bit is set as soon as the transmit FIFO becomes non-empty, regardless of whether the UART is enabled or not.*/
export const UART_FR_BUSY: any = '1'
export const UART_FR_BUSY_M: any = '1'
export const UART_FR_BUSY_S: any = '1'
/**
Reserved*/
export const UART_FR_RESERVED0: any = '2'
export const UART_FR_RESERVED0_M: any = '2'
export const UART_FR_RESERVED0_S: any = '2'
/**
Clear To Send: 

This bit is the complement of the active-low UART CTS input pin.
That is, the bit is 1 when CTS input pin is LOW.*/
export const UART_FR_CTS: any = '1'
export const UART_FR_CTS_M: any = '1'
export const UART_FR_CTS_S: any = '1'

// -------- REGISTER RESERVED2 -------- //

/**
UART Reserved Area*/
/**
	Reads to this field return zero, writes to this field are ignored.*/
export const UART_RESERVED2_RESERVED: any = '32'
export const UART_RESERVED2_RESERVED_M: any = '32'
export const UART_RESERVED2_RESERVED_S: any = '32'

// -------- REGISTER UARTILPR -------- //

/**
IrDA Low-Power Counter Register.


This is an 8-bit register that stores the low-power counter divisor value used to generate the IrLPBaud16 signal by dividing down of UARTCLK.*/
/**
	Reads to this field return zero, writes to this field are ignored.*/
export const UART_UARTILPR_RESERVED8: any = '24'
export const UART_UARTILPR_RESERVED8_M: any = '24'
export const UART_UARTILPR_RESERVED8_S: any = '24'
/**
8 bit low-power divisor value. In low-power IrDA mode the UART rejects random noise on the received serial data

input by ignoring SIRIN pulses that are less than 3 periods of IrLPBaud16.*/
export const UART_UARTILPR_ILPDVSR: any = '8'
export const UART_UARTILPR_ILPDVSR_M: any = '8'
export const UART_UARTILPR_ILPDVSR_S: any = '8'

// -------- REGISTER IBRD -------- //

/**
Integer Baud-Rate Divisor

If this register is modified while trasmission or reception is on-going, the baudrate will not be updated until transmission or reception of the current character is complete.*/
/**
	Reads to this field return zero, writes to this field are ignored.*/
export const UART_IBRD_RESERVED16: any = '16'
export const UART_IBRD_RESERVED16_M: any = '16'
export const UART_IBRD_RESERVED16_S: any = '16'
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
export const UART_IBRD_DIVINT_M: any = '16'
export const UART_IBRD_DIVINT_S: any = '16'

// -------- REGISTER FBRD -------- //

/**
Fractional Baud-Rate Divisor

If this register is modified while trasmission or reception is on-going, the baudrate will not be updated until transmission or reception of the current character is complete.*/
/**
	Reads to this field return zero, writes to this field are ignored.*/
export const UART_FBRD_RESERVED6: any = '26'
export const UART_FBRD_RESERVED6_M: any = '26'
export const UART_FBRD_RESERVED6_S: any = '26'
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
export const UART_FBRD_DIVFRAC_M: any = '6'
export const UART_FBRD_DIVFRAC_S: any = '6'

// -------- REGISTER LCRH -------- //

/**
Line Control*/
/**
	Reads to this field return zero, writes to this field are ignored.*/
export const UART_LCRH_RESERVED8: any = '24'
export const UART_LCRH_RESERVED8_M: any = '24'
export const UART_LCRH_RESERVED8_S: any = '24'
/**
UART Stick Parity Select:


0: Stick parity is disabled
1: The parity bit is transmitted and checked as invert of EPS field (i.e. the parity bit is transmitted and checked as 1 when EPS = 0).

This bit has no effect when PEN disables parity checking and generation.*/
export const UART_LCRH_SPS: any = '1'
export const UART_LCRH_SPS_M: any = '1'
export const UART_LCRH_SPS_S: any = '1'
/**
UART Word Length:

These bits indicate the number of data bits transmitted or received in a frame.*/
export const UART_LCRH_WLEN: any = '2'
export const UART_LCRH_WLEN_M: any = '2'
export const UART_LCRH_WLEN_S: any = '2'
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
export const UART_LCRH_FEN_M: any = '1'
export const UART_LCRH_FEN_S: any = '1'
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
export const UART_LCRH_STP2_M: any = '1'
export const UART_LCRH_STP2_S: any = '1'
/**
UART Even Parity Select*/
export const UART_LCRH_EPS: any = '1'
export const UART_LCRH_EPS_M: any = '1'
export const UART_LCRH_EPS_S: any = '1'
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
export const UART_LCRH_PEN_M: any = '1'
export const UART_LCRH_PEN_S: any = '1'
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
export const UART_LCRH_BRK_M: any = '1'
export const UART_LCRH_BRK_S: any = '1'

// -------- REGISTER CTL -------- //

/**
Control*/
/**
	Reads to this field return zero, writes to this field are ignored.*/
export const UART_CTL_RESERVED16: any = '16'
export const UART_CTL_RESERVED16_M: any = '16'
export const UART_CTL_RESERVED16_S: any = '16'
/**
CTS hardware flow control enable*/
export const UART_CTL_CTSEN: any = '1'
export const UART_CTL_CTSEN_M: any = '1'
export const UART_CTL_CTSEN_S: any = '1'
/**
CTS hardware flow control enabled*/
export const UART_CTL_CTSEN_EN: any = '1'

/**
CTS hardware flow control disabled*/
export const UART_CTL_CTSEN_DIS: any = '0'

/**
RTS hardware flow control enable*/
export const UART_CTL_RTSEN: any = '1'
export const UART_CTL_RTSEN_M: any = '1'
export const UART_CTL_RTSEN_S: any = '1'
/**
RTS hardware flow control enabled*/
export const UART_CTL_RTSEN_EN: any = '1'

/**
RTS hardware flow control disabled*/
export const UART_CTL_RTSEN_DIS: any = '0'

/**
	Reads to this field return zero, writes to this field are ignored.*/
export const UART_CTL_RESERVED12: any = '2'
export const UART_CTL_RESERVED12_M: any = '2'
export const UART_CTL_RESERVED12_S: any = '2'
/**
Request to Send

This bit is the complement of the active-low UART RTS output. That is, when the bit is programmed to a 1 then RTS output on the pins is LOW.*/
export const UART_CTL_RTS: any = '1'
export const UART_CTL_RTS_M: any = '1'
export const UART_CTL_RTS_S: any = '1'
/**
	Reads to this field return zero, writes to this field are ignored.*/
export const UART_CTL_RESERVED10: any = '1'
export const UART_CTL_RESERVED10_M: any = '1'
export const UART_CTL_RESERVED10_S: any = '1'
/**
UART Receive Enable

If the UART is disabled in the middle of reception, it completes the current character before stopping.*/
export const UART_CTL_RXE: any = '1'
export const UART_CTL_RXE_M: any = '1'
export const UART_CTL_RXE_S: any = '1'
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
export const UART_CTL_TXE_M: any = '1'
export const UART_CTL_TXE_S: any = '1'
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
export const UART_CTL_LBE_M: any = '1'
export const UART_CTL_LBE_S: any = '1'
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
export const UART_CTL_FCEN_M: any = '1'
export const UART_CTL_FCEN_S: any = '1'
/**
UART FIFO Concatenation  enabled*/
export const UART_CTL_FCEN_EN: any = '1'

/**
UART FIFO Concatenation  disabled*/
export const UART_CTL_FCEN_DIS: any = '0'

/**
	Reads to this field return zero, writes to this field are ignored.*/
export const UART_CTL_RESERVED1: any = '3'
export const UART_CTL_RESERVED1_M: any = '3'
export const UART_CTL_RESERVED1_S: any = '3'
/**
SIR low power IrDA mode

This bit selects the IrDA encoding mode*/
export const UART_CTL_SIRLP: any = '1'
export const UART_CTL_SIRLP_M: any = '1'
export const UART_CTL_SIRLP_S: any = '1'
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
export const UART_CTL_SIREN_M: any = '1'
export const UART_CTL_SIREN_S: any = '1'
/**
IrDA SIR ENDEC is enabled. Data is transmitted and received via nSIROUT and SIRIN.*/
export const UART_CTL_SIREN_EN: any = '1'

/**
IrDA SIR ENDEC is disabled*/
export const UART_CTL_SIREN_DIS: any = '0'

/**
UART Enable*/
export const UART_CTL_UARTEN: any = '1'
export const UART_CTL_UARTEN_M: any = '1'
export const UART_CTL_UARTEN_S: any = '1'
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
export const UART_IFLS_RESERVED6_M: any = '26'
export const UART_IFLS_RESERVED6_S: any = '26'
/**
Receive interrupt FIFO level select:

This field sets the trigger points for the receive interrupt. Values 0b101-0b111 are reserved.*/
export const UART_IFLS_RXSEL: any = '3'
export const UART_IFLS_RXSEL_M: any = '3'
export const UART_IFLS_RXSEL_S: any = '3'
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
export const UART_IFLS_TXSEL_M: any = '3'
export const UART_IFLS_TXSEL_S: any = '3'
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
export const UART_IMSC_RESERVED14_M: any = '18'
export const UART_IMSC_RESERVED14_S: any = '18'
/**
RX DMA done interrupt mask. A read returns the current mask for UART's RXDMADONE interrupt. On a write of 1, the mask of the RXDMADONE interrupt is set which means the interrupt state will be reflected in MIS.RXDMADONE. A write of 0 clears the mask which means MIS.RXDMADONE will not reflect the interrupt.*/
export const UART_IMSC_RXDMADONE: any = '1'
export const UART_IMSC_RXDMADONE_M: any = '1'
export const UART_IMSC_RXDMADONE_S: any = '1'
/**
TX DMA done interrupt mask. A read returns the current mask for UART's TXDMADONE interrupt. On a write of 1, the mask of the TXDMADONE interrupt is set which means the interrupt state will be reflected in MIS.TXDMADONE. A write of 0 clears the mask which means MIS.TXDMADONE will not reflect the interrupt.*/
export const UART_IMSC_TXDMADONE: any = '1'
export const UART_IMSC_TXDMADONE_M: any = '1'
export const UART_IMSC_TXDMADONE_S: any = '1'
/**
End of Transmission interrupt mask. A read returns the current mask for UART's EoT interrupt. On a write of 1, the mask of the EoT interrupt is set which means the interrupt state will be reflected in MIS.EOT. A write of 0 clears the mask which means MIS.EOT will not reflect the interrupt.*/
export const UART_IMSC_EOT: any = '1'
export const UART_IMSC_EOT_M: any = '1'
export const UART_IMSC_EOT_S: any = '1'
/**
Overrun error interrupt mask. A read returns the current mask for UART's overrun error interrupt. On a write of 1, the mask of the overrun error interrupt is set which means the interrupt state will be reflected in MIS.OE. A write of 0 clears the mask which means MIS.OE will not reflect the interrupt. */
export const UART_IMSC_OE: any = '1'
export const UART_IMSC_OE_M: any = '1'
export const UART_IMSC_OE_S: any = '1'
/**
Break error interrupt mask. A read returns the current mask for UART's break error interrupt. On a write of 1, the mask of the overrun error interrupt is set which means the interrupt state will be reflected in MIS.BE. A write of 0 clears the mask which means MIS.BE will not reflect the interrupt. */
export const UART_IMSC_BE: any = '1'
export const UART_IMSC_BE_M: any = '1'
export const UART_IMSC_BE_S: any = '1'
/**
Parity error interrupt mask. A read returns the current mask for UART's parity error interrupt. On a write of 1, the mask of the overrun error interrupt is set which means the interrupt state will be reflected in MIS.PE. A write of 0 clears the mask which means MIS.PE will not reflect the interrupt. */
export const UART_IMSC_PE: any = '1'
export const UART_IMSC_PE_M: any = '1'
export const UART_IMSC_PE_S: any = '1'
/**
Framing error interrupt mask. A read returns the current mask for UART's framing error interrupt. On a write of 1, the mask of the overrun error interrupt is set which means the interrupt state will be reflected in MIS.FE. A write of 0 clears the mask which means MIS.FE will not reflect the interrupt. */
export const UART_IMSC_FE: any = '1'
export const UART_IMSC_FE_M: any = '1'
export const UART_IMSC_FE_S: any = '1'
/**
Receive timeout interrupt mask. A read returns the current mask for UART's receive timeout interrupt. On a write of 1, the mask of the overrun error interrupt is set which means the interrupt state will be reflected in MIS.RT. A write of 0 clears the mask which means this bitfield will not reflect the interrupt. 

The raw interrupt for receive timeout RIS.RT cannot be set unless the mask is set (RT = 1). This is because the mask acts as an enable for power saving. That is, the same status can be read from MIS.RT and RIS.RT.*/
export const UART_IMSC_RT: any = '1'
export const UART_IMSC_RT_M: any = '1'
export const UART_IMSC_RT_S: any = '1'
/**
Transmit interrupt mask. A read returns the current mask for UART's transmit interrupt. On a write of 1, the mask of the overrun error interrupt is set which means the interrupt state will be reflected in MIS.TX. A write of 0 clears the mask which means MIS.TX will not reflect the interrupt. */
export const UART_IMSC_TX: any = '1'
export const UART_IMSC_TX_M: any = '1'
export const UART_IMSC_TX_S: any = '1'
/**
Receive interrupt mask. A read returns the current mask for UART's receive interrupt. On a write of 1, the mask of the overrun error interrupt is set which means the interrupt state will be reflected in MIS.RX. A write of 0 clears the mask which means MIS.RX will not reflect the interrupt. */
export const UART_IMSC_RX: any = '1'
export const UART_IMSC_RX_M: any = '1'
export const UART_IMSC_RX_S: any = '1'
/**
	Reads to this field return zero, writes to this field are ignored.*/
export const UART_IMSC_RESERVED2: any = '2'
export const UART_IMSC_RESERVED2_M: any = '2'
export const UART_IMSC_RESERVED2_S: any = '2'
/**
Clear to Send (CTS) modem interrupt mask. A read returns the current mask for UART's clear to send interrupt. On a write of 1, the mask of the overrun error interrupt is set which means the interrupt state will be reflected in MIS.CTSM. A write of 0 clears the mask which means MIS.CTSM will not reflect the interrupt. */
export const UART_IMSC_CTSM: any = '1'
export const UART_IMSC_CTSM_M: any = '1'
export const UART_IMSC_CTSM_S: any = '1'
/**
	Reads to this field return zero, writes to this field are ignored.*/
export const UART_IMSC_RESERVED0: any = '1'
export const UART_IMSC_RESERVED0_M: any = '1'
export const UART_IMSC_RESERVED0_S: any = '1'

// -------- REGISTER RIS -------- //

/**
Raw Interrupt Status*/
/**
	Reads to this field return zero, writes to this field are ignored.*/
export const UART_RIS_RESERVED14: any = '18'
export const UART_RIS_RESERVED14_M: any = '18'
export const UART_RIS_RESERVED14_S: any = '18'
/**
RX DMA done interrupt status:

This field returns the raw interrupt state of UART's RX DMA done interrupt. RX DMA done flag is set when you recieve RX DMA done status from dma module.*/
export const UART_RIS_RXDMADONE: any = '1'
export const UART_RIS_RXDMADONE_M: any = '1'
export const UART_RIS_RXDMADONE_S: any = '1'
/**
TX DMA done interrupt status:

This field returns the raw interrupt state of UART's TX DMA done interrupt. TX DMA done flag is set when you recieve TX DMA done status from dma module.*/
export const UART_RIS_TXDMADONE: any = '1'
export const UART_RIS_TXDMADONE_M: any = '1'
export const UART_RIS_TXDMADONE_S: any = '1'
/**
End of Transmission interrupt status:

This field returns the raw interrupt state of UART's end of transmission interrupt. End of transmission flag is set when all the Transmit data in the FIFO and on the TX Line is tranmitted.*/
export const UART_RIS_EOT: any = '1'
export const UART_RIS_EOT_M: any = '1'
export const UART_RIS_EOT_S: any = '1'
/**
Overrun error interrupt status: 

This field returns the raw interrupt state of UART's overrun error interrupt. Overrun error occurs if data is received and the receive FIFO is full.*/
export const UART_RIS_OE: any = '1'
export const UART_RIS_OE_M: any = '1'
export const UART_RIS_OE_S: any = '1'
/**
Break error interrupt status:

This field returns the raw interrupt state of UART's break error interrupt. Break error is set when a break condition is detected, indicating that the received data input (UARTRXD input pin) was held LOW for longer than a full-word transmission time (defined as start, data, parity and stop bits).*/
export const UART_RIS_BE: any = '1'
export const UART_RIS_BE_M: any = '1'
export const UART_RIS_BE_S: any = '1'
/**
Parity error interrupt status:

This field returns the raw interrupt state of UART's parity error interrupt. Parity error is set if the parity of the received data character does not match the parity that the LCRH.EPS and LCRH.SPS select.*/
export const UART_RIS_PE: any = '1'
export const UART_RIS_PE_M: any = '1'
export const UART_RIS_PE_S: any = '1'
/**
Framing error interrupt status:

This field returns the raw interrupt state of UART's framing error interrupt. Framing error is set if the received character does not have a valid stop bit (a valid stop bit is 1).*/
export const UART_RIS_FE: any = '1'
export const UART_RIS_FE_M: any = '1'
export const UART_RIS_FE_S: any = '1'
/**
Receive timeout interrupt status:

This field returns the raw interrupt state of UART's receive timeout interrupt. The receive timeout interrupt is asserted when the receive FIFO is not empty, and no more data is received during a 32-bit period. The receive timeout interrupt is cleared either when the FIFO becomes empty through reading all the data, or when a 1 is written to ICR.RT.
The raw interrupt for receive timeout cannot be set unless the mask is set (IMSC.RT = 1). This is because the mask acts as an enable for power saving. That is, the same status can be read from MIS.RT and RT.*/
export const UART_RIS_RT: any = '1'
export const UART_RIS_RT_M: any = '1'
export const UART_RIS_RT_S: any = '1'
/**
Transmit interrupt status: 

This field returns the raw interrupt state of UART's transmit interrupt.
When FIFOs are enabled (LCRH.FEN = 1), the transmit interrupt is asserted if the number of bytes in transmit FIFO is equal to or lower than the programmed trigger level (IFLS.TXSEL). The transmit interrupt is cleared by writing data to the transmit FIFO until it becomes greater than the trigger level, or by clearing the interrupt through ICR.TX.
When FIFOs are disabled (LCRH.FEN = 0), that is they have a depth of one location, the transmit interrupt is asserted if there is no data present in the transmitters single location. It is cleared by performing a single write to the transmit FIFO, or by clearing the interrupt through ICR.TX.*/
export const UART_RIS_TX: any = '1'
export const UART_RIS_TX_M: any = '1'
export const UART_RIS_TX_S: any = '1'
/**
Receive interrupt status:

This field returns the raw interrupt state of UART's receive interrupt. 
When FIFOs are enabled (LCRH.FEN = 1), the receive interrupt is asserted if the receive FIFO reaches the programmed trigger
level (IFLS.RXSEL). The receive interrupt is cleared by reading data from the receive FIFO until it becomes less than the trigger level, or by clearing the interrupt through ICR.RX.
When FIFOs are disabled (LCRH.FEN = 0), that is they have a depth of one location, the receive interrupt is asserted if data is received
thereby filling the location. The receive interrupt is cleared by performing a single read of the receive FIFO, or by clearing the interrupt through ICR.RX.*/
export const UART_RIS_RX: any = '1'
export const UART_RIS_RX_M: any = '1'
export const UART_RIS_RX_S: any = '1'
/**
	Reads to this field return zero, writes to this field are ignored.*/
export const UART_RIS_RESERVED2: any = '2'
export const UART_RIS_RESERVED2_M: any = '2'
export const UART_RIS_RESERVED2_S: any = '2'
/**
Clear to Send (CTS) modem interrupt status: 

This field returns the raw interrupt state of UART's clear to send interrupt.*/
export const UART_RIS_CTSM: any = '1'
export const UART_RIS_CTSM_M: any = '1'
export const UART_RIS_CTSM_S: any = '1'
/**
	Reads to this field return zero, writes to this field are ignored.*/
export const UART_RIS_RESERVED0: any = '1'
export const UART_RIS_RESERVED0_M: any = '1'
export const UART_RIS_RESERVED0_S: any = '1'

// -------- REGISTER MIS -------- //

/**
Masked Interrupt Status*/
/**
	Reads to this field return zero, writes to this field are ignored. Read as zero, do not modify*/
export const UART_MIS_RESERVED14: any = '18'
export const UART_MIS_RESERVED14_M: any = '18'
export const UART_MIS_RESERVED14_S: any = '18'
/**
RX DMA done interrupt status:

This field returns the masked interrupt state of the RX DMA done interrupt which is the bitiwse AND product of raw interrupt state RIS.RXDMADONE and the mask setting IMSC.RXDMADONE.*/
export const UART_MIS_RXDMADONE: any = '1'
export const UART_MIS_RXDMADONE_M: any = '1'
export const UART_MIS_RXDMADONE_S: any = '1'
/**
TX DMA done interrupt status:

This field returns the masked interrupt state of the TX DMA done interrupt which is the bitwise AND product of raw interrupt state RIS.TXDMADONE and the mask setting IMSC.TXDMADONE.*/
export const UART_MIS_TXDMADONE: any = '1'
export const UART_MIS_TXDMADONE_M: any = '1'
export const UART_MIS_TXDMADONE_S: any = '1'
/**
End of Transmission interrupt status:

This field returns the masked interrupt state of the End of transmission interrupt which is the bitwise AND product of raw interrupt state RIS.EOT and the mask setting IMSC.EOT.*/
export const UART_MIS_EOT: any = '1'
export const UART_MIS_EOT_M: any = '1'
export const UART_MIS_EOT_S: any = '1'
/**
Overrun error masked interrupt status: 

This field returns the masked interrupt state of the overrun interrupt which is the bitwise AND product of raw interrupt state RIS.OE and the mask setting IMSC.OE.*/
export const UART_MIS_OE: any = '1'
export const UART_MIS_OE_M: any = '1'
export const UART_MIS_OE_S: any = '1'
/**
Break error masked interrupt status: 

This field returns the masked interrupt state of the break error interrupt which is the bitiwse AND product of raw interrupt state RIS.BE and the mask setting IMSC.BE.*/
export const UART_MIS_BE: any = '1'
export const UART_MIS_BE_M: any = '1'
export const UART_MIS_BE_S: any = '1'
/**
Parity error masked interrupt status:

This field returns the masked interrupt state of the parity error interrupt which is the bitiwise AND product of raw interrupt state RIS.PE and the mask setting IMSC.PE.*/
export const UART_MIS_PE: any = '1'
export const UART_MIS_PE_M: any = '1'
export const UART_MIS_PE_S: any = '1'
/**
Framing error masked interrupt status: Returns the masked interrupt state of the framing error interrupt which is the bitiwse AND product of raw interrupt state RIS.FE and the mask setting IMSC.FE.*/
export const UART_MIS_FE: any = '1'
export const UART_MIS_FE_M: any = '1'
export const UART_MIS_FE_S: any = '1'
/**
Receive timeout masked interrupt status: 

Returns the masked interrupt state of the receive timeout interrupt.
The raw interrupt for receive timeout cannot be set unless the mask is set (IMSC.RT = 1). This is because the mask acts as an enable for power saving. That is, the same status can be read from MIS.RT and RIS.RT.*/
export const UART_MIS_RT: any = '1'
export const UART_MIS_RT_M: any = '1'
export const UART_MIS_RT_S: any = '1'
/**
Transmit masked interrupt status: 

This field returns the masked interrupt state of the transmit interrupt  which is the bitiwse AND product of raw interrupt state RIS.TX and the mask setting IMSC.TX.*/
export const UART_MIS_TX: any = '1'
export const UART_MIS_TX_M: any = '1'
export const UART_MIS_TX_S: any = '1'
/**
Receive masked interrupt status:

This field returns the masked interrupt state of the receive interrupt  which is the bitwise AND product of raw interrupt state RIS.RX and the mask setting IMSC.RX.*/
export const UART_MIS_RX: any = '1'
export const UART_MIS_RX_M: any = '1'
export const UART_MIS_RX_S: any = '1'
/**
	Reads to this field return zero, writes to this field are ignored.*/
export const UART_MIS_RESERVED2: any = '2'
export const UART_MIS_RESERVED2_M: any = '2'
export const UART_MIS_RESERVED2_S: any = '2'
/**
Clear to Send (CTS) modem masked interrupt status:

This field returns the masked interrupt state of the clear to send interrupt which is the bitwise AND product of raw interrupt state RIS.CTS and the mask setting IMSC.CTS.*/
export const UART_MIS_CTSM: any = '1'
export const UART_MIS_CTSM_M: any = '1'
export const UART_MIS_CTSM_S: any = '1'
/**
	Reads to this field return zero, writes to this field are ignored. Write 0.*/
export const UART_MIS_RESERVED0: any = '1'
export const UART_MIS_RESERVED0_M: any = '1'
export const UART_MIS_RESERVED0_S: any = '1'

// -------- REGISTER ICR -------- //

/**
Interrupt Clear

On a write of 1, the corresponding interrupt is cleared. A write of 0 has no effect.*/
/**
	Reads to this field return zero, writes to this field are ignored. Read as zero, do not modify*/
export const UART_ICR_RESERVED16: any = '18'
export const UART_ICR_RESERVED16_M: any = '18'
export const UART_ICR_RESERVED16_S: any = '18'
/**
RX DMA Done interrupt clear:

Writing 1 to this field clears the RX DMA done interrupt (RIS.RXDMADONE). Writing 0 has no effect.*/
export const UART_ICR_RXDMADONE: any = '1'
export const UART_ICR_RXDMADONE_M: any = '1'
export const UART_ICR_RXDMADONE_S: any = '1'
/**
TX DMA Done interrupt clear:

Writing 1 to this field clears the TX DMA done interrupt (RIS.TXDMADONE). Writing 0 has no effect.*/
export const UART_ICR_TXDMADONE: any = '1'
export const UART_ICR_TXDMADONE_M: any = '1'
export const UART_ICR_TXDMADONE_S: any = '1'
/**
End of Transmission interrupt clear:

Writing 1 to this field clears the End of Transmission interrupt (RIS.EOT). Writing 0 has no effect.*/
export const UART_ICR_EOT: any = '1'
export const UART_ICR_EOT_M: any = '1'
export const UART_ICR_EOT_S: any = '1'
/**
Overrun error interrupt clear:

Writing 1 to this field clears the overrun error interrupt (RIS.OE). Writing 0 has no effect.*/
export const UART_ICR_OE: any = '1'
export const UART_ICR_OE_M: any = '1'
export const UART_ICR_OE_S: any = '1'
/**
Break error interrupt clear:

Writing 1 to this field clears the break error interrupt (RIS.BE). Writing 0 has no effect.*/
export const UART_ICR_BE: any = '1'
export const UART_ICR_BE_M: any = '1'
export const UART_ICR_BE_S: any = '1'
/**
Parity error interrupt clear:

Writing 1 to this field clears the parity error interrupt (RIS.PE). Writing 0 has no effect.*/
export const UART_ICR_PE: any = '1'
export const UART_ICR_PE_M: any = '1'
export const UART_ICR_PE_S: any = '1'
/**
Framing error interrupt clear:

Writing 1 to this field clears the framing error interrupt (RIS.FE). Writing 0 has no effect.*/
export const UART_ICR_FE: any = '1'
export const UART_ICR_FE_M: any = '1'
export const UART_ICR_FE_S: any = '1'
/**
Receive timeout interrupt clear:

Writing 1 to this field clears the receive timeout interrupt (RIS.RT). Writing 0 has no effect.*/
export const UART_ICR_RT: any = '1'
export const UART_ICR_RT_M: any = '1'
export const UART_ICR_RT_S: any = '1'
/**
Transmit interrupt clear:

Writing 1 to this field clears the transmit interrupt (RIS.TX). Writing 0 has no effect.*/
export const UART_ICR_TX: any = '1'
export const UART_ICR_TX_M: any = '1'
export const UART_ICR_TX_S: any = '1'
/**
Receive interrupt clear:

Writing 1 to this field clears the receive interrupt (RIS.RX). Writing 0 has no effect.*/
export const UART_ICR_RX: any = '1'
export const UART_ICR_RX_M: any = '1'
export const UART_ICR_RX_S: any = '1'
/**
	Reads to this field return zero, writes to this field are ignored. Write 0*/
export const UART_ICR_RESERVED2: any = '2'
export const UART_ICR_RESERVED2_M: any = '2'
export const UART_ICR_RESERVED2_S: any = '2'
/**
Clear to Send (CTS) modem interrupt clear:

Writing 1 to this field clears the clear to send interrupt (RIS.CTS). Writing 0 has no effect.*/
export const UART_ICR_CTSM: any = '1'
export const UART_ICR_CTSM_M: any = '1'
export const UART_ICR_CTSM_S: any = '1'
/**
	Reads to this field return zero, writes to this field are ignored. Write 0.*/
export const UART_ICR_RESERVED0: any = '1'
export const UART_ICR_RESERVED0_M: any = '1'
export const UART_ICR_RESERVED0_S: any = '1'

// -------- REGISTER DMACTL -------- //

/**
DMA Control*/
/**
	Reads to this field return zero, writes to this field are ignored. Read as zero, do not modify.*/
export const UART_DMACTL_RESERVED3: any = '29'
export const UART_DMACTL_RESERVED3_M: any = '29'
export const UART_DMACTL_RESERVED3_S: any = '29'
/**
DMA on error. If this bit is set to 1, the DMA receive request outputs (for  single and burst requests) are disabled when the UART error interrupt is asserted (more specifically if any of the error interrupts RIS.PERIS, RIS.BERIS, RIS.FERIS or RIS.OERIS are asserted).*/
export const UART_DMACTL_DMAONERR: any = '1'
export const UART_DMACTL_DMAONERR_M: any = '1'
export const UART_DMACTL_DMAONERR_S: any = '1'
/**
Transmit DMA enable. If this bit is set to 1, DMA for the transmit FIFO is enabled.*/
export const UART_DMACTL_TXDMAE: any = '1'
export const UART_DMACTL_TXDMAE_M: any = '1'
export const UART_DMACTL_TXDMAE_S: any = '1'
/**
Receive DMA enable. If this bit is set to 1, DMA for the receive FIFO is enabled.*/
export const UART_DMACTL_RXDMAE: any = '1'
export const UART_DMACTL_RXDMAE_M: any = '1'
export const UART_DMACTL_RXDMAE_S: any = '1'

// -------- REGISTER RESERVED1 -------- //

/**
UART Reserved Area*/
/**
	Reads to this field return zero, writes to this field are ignored. Read as zero, do not modify.*/
export const UART_RESERVED1_RESERVED: any = '32'
export const UART_RESERVED1_RESERVED_M: any = '32'
export const UART_RESERVED1_RESERVED_S: any = '32'

// -------- REGISTER RESERVED3 -------- //

/**
UART Reserved Area*/
/**
	Reads to this field return zero, writes to this field are ignored. */
export const UART_RESERVED3_RESERVED: any = '32'
export const UART_RESERVED3_RESERVED_M: any = '32'
export const UART_RESERVED3_RESERVED_S: any = '32'

// -------- REGISTER RESERVED4 -------- //

/**
UART Reserved Area For Future ID Expansion*/
/**
	Reads to this field return zero, writes to this field are ignored. */
export const UART_RESERVED4_RESERVED: any = '32'
export const UART_RESERVED4_RESERVED_M: any = '32'
export const UART_RESERVED4_RESERVED_S: any = '32'

// -------- INSTANCES -------- //

export const CKMD = { } as CKMD_t
export const RTC = { } as RTC_t
export const IOC = { } as IOC_t
export const CLKCTL = { } as CLKCTL_t
export const GPIO = { } as GPIO_t
export const EVTSVT = { } as EVTSVT_t
export const UART0 = { } as UART_t
export const LGPT3 = { } as LGPT3_t

