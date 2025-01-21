import em from '@$$emscript'
export const em$_U = em.$declare('MODULE')

import * as em$_R from '@ti.distro.cc23xx/REGS.em'
import * as IntrVec from '@em.arch.arm/IntrVec.em'
import * as OneShotI from '@em.hal/OneShotI.em'

export namespace em$meta {
    export function em$construct() {
        IntrVec.em$meta.useIntr('LGPT3_COMB')
    }
}

export function disable() {
    em$_R.LGPT3.ICLR.$$ = em$_R.LGPT_ICLR_TGT
}

export function enable(msecs: u32, handler: OneShotI.Handler, arg: arg_t) {
    ustart(msecs * 1000, handler, arg)
}

export function uenable(usecs: u32, handler: OneShotI.Handler, arg: arg_t) {
    ustart(usecs, handler, arg)
}

function ustart(usecs: u32, handler: OneShotI.Handler, arg: arg_t) {
    em$_R.CLKCTL.CLKENSET0.$$ = em$_R.CLKCTL_CLKCFG0_LGPT3
    em$_R.LGPT3.IMSET.$$ = em$_R.LGPT_IMSET_TGT
    em$_R.LGPT3.PRECFG.$$ = 48 << em$_R.LGPT_PRECFG_TICKDIV_S
    em$_R.LGPT3.TGT.$$ = usecs
    em$_R.LGPT3.CTL.$$ = em$_R.LGPT_CTL_MODE_UP_ONCE | em$_R.LGPT_CTL_C0RST_RST
}


/*
package ti.mcu.cc23xx

import InterruptT { name: "LGPT3_COMB" } as Intr

import BusyWait
import Idle
import Mcu

from em.hal import OneShotMilliI

module OneShotGpt3: OneShotMilliI

private:

    var curArg: ptr_t
    var curFxn: Handler

    function isr: Intr.Handler

end

def em$construct()
    Intr.setHandlerH(isr)
end

def disable()
    curFxn = null
    Idle.setWaitOnly(false)
    Intr.disable()
    ^^HWREG(LGPT3_BASE + LGPT_O_ICLR) = LGPT_ICLR_TGT^^
end

def enable(msecs, handler, arg)
    curFxn = handler
    curArg = arg
    Idle.setWaitOnly(true)
    Intr.enable()
    ^^HWREG(CLKCTL_BASE + CLKCTL_O_CLKENSET0)^^ = ^CLKCTL_CLKENSET0_LGPT3
    ^^HWREG(LGPT3_BASE + LGPT_O_IMSET) = LGPT_IMSET_TGT^^
    ^^HWREG(LGPT3_BASE + LGPT_O_TGT)^^ = msecs * (Mcu.mclkFrequency / 1000)
    ^^HWREG(LGPT3_BASE + LGPT_O_CTL) = LGPT_CTL_MODE_UP_ONCE | LGPT_CTL_C0RST^^
end

def isr()
    auto fxn = curFxn
    disable()
    fxn(curArg) if fxn
end

*/
