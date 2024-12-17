import * as Path from 'path'
import * as Fs from 'fs'
import * as Xml2Js from 'xml2js'

import em from '@$$em-script'

let instArr: Array<any>

function genModule(xfile: string, out: em.OutFile): void {
    const modName = Path.basename(xfile, '.xml')
    // let out = new em.OutFile(`./regs/${modName}.ts`)
    out.genTitle(`MODULE ${modName}`)
    const mod = readXmlFile(xfile).module
    const regArr = mod.register as Array<any>
    out.print("export interface %1_t {\n%+", modName)
    regArr.forEach(r => {
        const reg = r.$
        out.print("%t%1: typeof %1\n", reg.id)
    })
    out.print("%-}\n")
    regArr.forEach(r => {
        const reg = r.$
        out.genTitle(`REGISTER ${reg.id}`)
        out.addText("/**\n")
        const desc = reg.description as string
        out.addText(desc.replace("\n", "\n\n"))
        out.addText("*/\n")
        out.print("const %1 = new class {\n%+", reg.id)
        out.print("%t$$: any\n")
        const fldArr = r.bitfield as Array<any>
        fldArr.forEach(f => {
            const fld = f.$
            out.print("%t/**\n")
            const desc = fld.description as string
            out.addText(desc.replace("\n", "\n\n"))
            out.print("%t*/\n")
            out.print("%t%1: any\n", fld.id)
        })
        out.print("%-}\n\n")
        fldArr.forEach(f => {
            const fld = f.$
            out.addText("/**\n")
            const desc = fld.description as string
            out.addText(desc.replace("\n", "\n\n"))
            out.addText("*/\n")
            const fldLab = `${modName}_${reg.id}_${fld.id}`
            out.print("export const %1: any = '%2'\n\n", fldLab, fld.width)
            const enmArr = f.bitenum as Array<any>
            if (enmArr === undefined) return
            enmArr.forEach(e => {
                const enm = e.$
                out.addText("/**\n")
                const desc = enm.description as string
                out.addText(desc.replace("\n", "\n\n"))
                out.addText("*/\n")
                out.print("export const %1_%2: any = '%3'\n\n", fldLab, enm.id, enm.value)
            })
        })
    })
}

function readXmlFile(xfile: string): any {
    let xml
    Xml2Js.parseString(Fs.readFileSync(xfile).toString(), (err, res) => { xml = res })
    return xml
}

let out = new em.OutFile('REGS.em.ts')
out.addText(`import em from '@$$em-script'\n`)
out.addText(`export const em$_U = em.declare('COMPOSITE')\n`)
Fs.readdirSync('./xml').forEach(f => genModule(`./xml/${f}`, out))
out.genTitle("INSTANCES")
const dev = readXmlFile('./device.xml').device
instArr = dev.router[0].subpath[0].cpu[0].instance as Array<any>
    instArr.forEach(m => {
        const instId = m.$.id as string
        const instType = Path.basename(m.$.xml as string, '.xml')
        if (Fs.existsSync(`./xml/${instType}.xml`)) {
            out.print("export const %1 = { } as %2_t\n", instId, instType)
        }
    })
    out.addText("\n")
out.close()
