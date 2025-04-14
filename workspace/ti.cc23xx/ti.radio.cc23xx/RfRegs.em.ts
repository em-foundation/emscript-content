import em from '@$$emscript'
export const $U = em.$declare('MODULE')

import * as RadioConfig from '@ti.radio.cc23xx/RadioConfig.em'

class Desc extends $struct {
    off: u16
    cnt: u8
    inc: u8
}

const desc_tab = $table<Desc>('ro')
const val_tab = $table<u16>('ro')

import * as Fs from 'fs'

export namespace em$meta {

    export function em$construct() {
        const phy_name = RadioConfig.Phy[RadioConfig.phy.$$].toLowerCase()
        if (phy_name == 'none') return
        const regs = Fs.readFileSync(`ti.cc23xx/ti.radio.cc23xx/regs_${phy_name}.txt`, 'utf-8')
        let pre_flag = true
        for (const ln of regs.split('\n')) {
            if (pre_flag) {
                if (ln.startsWith('// ----')) {
                    pre_flag = false
                }
                continue
            }
            if (!ln.startsWith('//')) break
            const col = ln.split(/\s+/)
            const addr = parseHex(col[1])
            const hwmod = col[2]
            const bits = col[4].slice(1, -1)
            const val = col[6] == '-' ? 0 : parseHex(col[6])
            Encoder.add(addr, hwmod, bits, val)
        }
        Encoder.finalize()
    }

    /*
    
        const Encoder = struct {
            var cur_desc: Desc = undefined;
            var cur_hwmod: []const u8 = "";
            var cur_addr: u16 = 0;
            var cur_val: u16 = 0;
            var cur_serial: u16 = 0;
            var prev_addr: u16 = 0;
            pub fn addM(addr: u16, hwmod: []const u8, bits: []const u8, val: u16) void {
                if (!em.std.mem.eql(u8, cur_hwmod, hwmod)) {
                    if (cur_hwmod.len != 0) {
                        flush();
                        desc_tab.addM(cur_desc);
                    }
                    cur_hwmod = hwmod;
                    cur_desc.off = addr;
                    cur_desc.cnt = 0;
                    cur_desc.inc = if (em.std.mem.endsWith(u8, hwmod, "_RAM")) 1 else 2;
                    cur_addr = addr;
                    prev_addr = addr;
                }
                if (cur_addr != addr) {
                    if (cur_addr != 0) flush();
                    prev_addr = cur_addr;
                    cur_addr = addr;
                }
                const idx = em.std.mem.indexOf(u8, bits, ":");
                const hi_bit = em.as(u4, if (idx == null) parseDec(bits) else parseDec(bits[0..idx.?]));
                const lo_bit = em.as(u4, if (idx == null) hi_bit else parseDec(bits[idx.? + 1 ..]));
                cur_val |= (val << lo_bit);
            }
            pub fn finalize() void {
                flush();
                desc_tab.addM(cur_desc);
            }
    
            fn flush() void {
                const diff = (cur_addr - prev_addr) >> em.as(u4, cur_desc.inc);
                if (diff > 1) {
                    for (1..diff) |_| {
                        cur_serial += 1;
                        val_tab.addM(0);
                        cur_desc.cnt += 1;
                    }
                }
                //em.print("[{d}] @{X:0>4} = {X:0>4} ({d})", .{ cur_serial, cur_addr, cur_val, diff });
                cur_serial += 1;
                val_tab.addM(cur_val);
                cur_val = 0;
                cur_desc.cnt += 1;
            }
        };
    
    
    */

    const Encoder = new class {
        private cur_desc: Desc = Desc.$make()
        private cur_hwmod: string = ''
        private cur_addr: u16 = 0
        private cur_val: u16 = 0
        private cur_serial: u16 = 0
        private prev_addr: u16 = 0
        add(addr: u16, hwmod: string, bits: string, val: u16) {
            if (this.cur_hwmod != hwmod) {
                if (this.cur_hwmod.length != 0) {
                    this.finalize()
                    this.cur_desc = Desc.$make()
                }
                this.cur_hwmod = hwmod
                this.cur_desc.off = addr
                this.cur_desc.cnt = 0
                this.cur_desc.inc = hwmod.endsWith('_RAM') ? 2 : 4
                this.cur_addr = this.prev_addr = addr
            }
            if (this.cur_addr != addr) {
                if (this.cur_addr != 0) this.flush()
                this.prev_addr = this.cur_addr
                this.cur_addr = addr
            }
            const bit_fld = bits.split(':')
            const hi_bit = parseDec(bit_fld[0])
            const lo_bit = bit_fld.length > 1 ? parseDec(bit_fld[1]) : hi_bit
            this.cur_val |= val << lo_bit
        }
        finalize() {
            this.flush()
            desc_tab.$add(this.cur_desc)
        }
        private flush() {
            const diff = (this.cur_addr - this.prev_addr) >> (this.cur_desc.inc / 2)
            if (diff > 1) {
                for (const _ of $range(diff, 1)) {
                    this.cur_serial += 1
                    val_tab.$add(0)
                    this.cur_desc.cnt += 1
                }
            }
            this.cur_serial += 1
            val_tab.$add(this.cur_val)
            this.cur_val = 0
            this.cur_desc.cnt += 1
        }
    }

    function parseDec(s: string): number {
        return Number.parseInt(s, 10)
    }

    function parseHex(s: string): number {
        return Number.parseInt(s, 16)
    }
}

//>> ---- em$targ ---- <<//

const LRF_BASE_ADDR = <u32>0x4008_0000
const PBE_RAM_BASE_ADDR = <u32>0x4009_0000

export function setup() {
    let src = val_tab.$ptr()
    for (const desc of desc_tab) {
        const base = (desc.inc == 1) ? PBE_RAM_BASE_ADDR : LRF_BASE_ADDR
        let dst = base + desc.off
        for (const _ of $range(desc.cnt)) {
            em.$reg16[dst] = src.$$
            src.$inc()
            dst += desc.inc
        }
    }

}