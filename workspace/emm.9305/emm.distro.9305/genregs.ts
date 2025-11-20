import * as Fs from 'fs'

import em from '../../em.core/em.lang/emscript'

const TYPE_SET = new Set<string>([
    'GPIO',
    'UART',
])

let meta = em.$outfile('REGS.em.ts')

let src_lines = new Array<string>()
let cur_idx = 0

function genConsts() {
    while (true) {
        const ln = nextLine()
        if (ln === null) break
        if (ln.startsWith('/')) break
        const segs = ln.split(/\s+/)
        if (segs.length < 3) continue
        if (segs[1].indexOf('(') != -1) continue
        meta.print("export const %1: any = '%2'\n", segs[1], segs[2])
    }
}

function nextLine(): string | null {
    return cur_idx == src_lines.length ? null : src_lines[cur_idx++]
}

function scanConsts(): boolean {
    while (true) {
        const ln = nextLine()
        if (ln === null) break
        if (ln.startsWith('//') && ln.endsWith('.r32')) return true
    }
    return false
}

function scanFields(): Array<string> {
    let res = new Array<string>
    while (true) {
        const ln = nextLine()
        if (!ln) break
        if (ln.startsWith('}')) break
        const pre = ln.slice(0, ln.indexOf(';')).trimStart()
        let segs = pre.split(/\s+/)
        res.push(segs[2])
    }
    return res
}

function scanStruct(): boolean {
    while (true) {
        const ln = nextLine()
        if (ln === null) return false
        if (ln != 'typedef struct') continue
        const ln2 = nextLine()
        return (ln2 == '{')
    }
}

// -------- main -------- //

meta.addText(`import em from '@$$emscript'\n`)
meta.addText(`export const $U = em.$declare('COMPOSITE')\n`)
meta.addText(`
export function em$generate() {
    let out = $outfile('emm.distro.9305/REGS.hpp')
    out.addFile('../emm.9305/emm.distro.9305/REGS.hpp.txt')
    out.close()
}
`)

for (const itype of TYPE_SET) {
    src_lines = Fs.readFileSync(`inc/t9305_${itype.toLowerCase()}.h`, 'utf-8').split('\n')
    cur_idx = 0
    if (!scanStruct()) break
    meta.genTitle(`${itype} TYPE`)
    meta.print('export interface %1_t {\n%+', itype)
    for (const fld of scanFields()) {
        meta.print('%t%1: $Reg\n', fld)
    }
    meta.print('%-}\n')
    cur_idx = 0
    meta.genTitle(`${itype} CONSTANTS`)
    while (scanConsts()) {
        genConsts()
    }
}
meta.genTitle('INSTANCES')
for (const itype of TYPE_SET) {
    meta.print('export const %1 = {} as %1_t\n', itype)
}
meta.close()