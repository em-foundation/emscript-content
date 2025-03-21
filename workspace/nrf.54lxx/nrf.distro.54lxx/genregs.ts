import * as Path from 'path'
import * as Fs from 'fs'
import * as Xml2Js from 'xml2js'

import em from '../../em.core/em.lang/emscript'

let meta = em.$outfile('REGS.em.ts')

function genPeri(peri: any, periCls: string) {
    console.log(peri)
    meta.genTitle(`PERIPHERAL ${periCls}`)
    meta.print('export interface %1_t {\n%+', periCls)
    const regArr = peri.registers[0].register as Array<any>
    if (regArr === undefined) return
    for (const reg of regArr) {
        const regName = reg.name[0] as string
        meta.print('%t%1: em.$Reg\n', regName)
    }
    meta.print('%-}\n')
    for (const reg of regArr) {
        const regName = reg.name[0] as string
        meta.genTitle(`REGISTER ${regName}`)
        meta.addText('/**\n')
        const desc = reg.description[0] as string
        meta.addText(desc.replace('\n', '\n\n'))
        meta.addText('*/\n')
        if (reg.fields == undefined) continue
        const fldArr = reg.fields[0].field as Array<any>
        for (const fld of fldArr) {
            const fldName = fld.name[0] as string
            meta.addText('/**\n')
            const desc = fld.description[0] as string
            meta.addText(desc.replace('\n', '\n\n'))
            meta.addText('*/\n')
            const fldLab = `${periCls}_${regName}_${fldName}`
            meta.print("export const F_%1: any = '%2'\n", fldLab, fld.bitWidth)
            meta.print(
                "export const F_%1_POS: any = '%2'\n",
                fldLab,
                fld.bitWidth
            )
            if (fld.enumeratedValues == undefined) continue
            const valArr = fld.enumeratedValues[0].enumeratedValue as Array<any>
            for (const val of valArr) {
                const valName = (val.name[0] as string).toUpperCase()
                // meta.addText("/**\n")
                // const desc = val.description[0] as string
                // meta.addText(desc.replace("\n", "\n\n"))
                // meta.addText("*/\n")
                const valLab = `${periCls}_${regName}_${fldName}_${valName}`
                meta.print("export const S_%1: any = '%2'\n", valLab, val.value)
                meta.print("export const V_%1: any = '%2'\n", valLab, val.value)
            }
        }
    }
}

function readXmlFile(xfile: string): any {
    let xml
    Xml2Js.parseString(Fs.readFileSync(xfile).toString(), (err, res) => {
        xml = res
    })
    return xml
}

// ---- main ---- //

meta.addText(`import em from '@$$emscript'\n`)
meta.addText(`export const $U = em.$declare('COMPOSITE')\n`)
meta.addText(`
export function em$generate() {
    let out = $outfile('nrf.distro.54lxx/REGS.hpp')
    out.addFile('../nrf.54lxx/nrf.distro.54lxx/REGS.hpp.txt')
    out.close()
}
`)

const PERI_CLS_MAP = new Map<string, string>([
    // ['GLOBAL_P2_NS', 'GLOBAL_P2_NS'],
])

let doneSet = new Set<string>()

const dev = readXmlFile('./nrf54l05_application.svd').device
const periArr = dev.peripherals[0].peripheral as Array<any>
for (const peri of periArr) {
    const periName = peri.name[0] as string
    if (!PERI_CLS_MAP.has(periName)) continue
    const periCls = periName.match(/([A-Z]+)/)![1]
    // const fn = `./inc/${periCls.toLowerCase()}_regs.h`
    // if (!Fs.existsSync(fn)) continue
    if (doneSet.has(periCls)) continue
    doneSet.add(periCls)
    genPeri(peri, periCls)
}

const CLS_IDX_SET = new Set<string>()

meta.genTitle('INSTANCES')
for (const [peri, cls] of PERI_CLS_MAP) {
    meta.print('export const %1 = {} as %2_t\n', peri, cls)
}
for (const cls of CLS_IDX_SET) {
    meta.print('export const %1 = [] as %1_t[]\n', cls)
}
meta.close()
