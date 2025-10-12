import '@$$emscript'
export const $U = $declare('MODULE')

export namespace em$meta { }

//>> ---- em$targ ---- <<//

export function em$run() {
    const PORT = 0
    const PIN = 4
    const MODE = 4
    e$`CMU->CLKEN0_SET = CMU_CLKEN0_HFRCO0`
    e$`CMU->CLKEN0_SET = CMU_CLKEN0_GPIO`
    e$`GPIO->P[PORT].MODEL = MODE << (PIN * 4)`
    e$`GPIO->P_SET[PORT].DOUT = 1 << PIN`
}