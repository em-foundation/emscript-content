import em from '@$$emscript'
export const em$_U = $declare('MODULE')

import * as Crc from '@em.bench.coremark/Crc.em'
import * as Utils from '@em.bench.coremark/Utils.em'

export const memsize = $param<u16>(666)

export class Data extends $struct {
    val: i16
    idx: i16
}

class Elem extends $struct {
    next: ref_t<Elem>
    data: ref_t<Data>
}

type Comparator = (a: ref_t<Data>, b: ref_t<Data>) => i32

let DataFac = $factory(Data.$make())
let ElemFac = $factory(Elem.$make())

const maxElems = $param<u16>(0)

let curHead_c = $param<ref_t<Elem>>()
var curHead: ref_t<Elem>

export namespace em$meta {

    export function em$construct() {
        let itemSize = 16 + $sizeof<Data>()
        maxElems.$$ = Math.round(memsize.$$ / itemSize) - 3
        curHead = ElemFac.$create()
        curHead.$$.data = DataFac.$create()
        let p = curHead
        for (let i = 0; i < maxElems.$$ - 1; i++) {
            let q = p.$$.next = ElemFac.$create()
            q.$$.data = DataFac.$create()
            p = q
        }
        p.$$.data = DataFac.$create()
        p.$$.next = ElemFac.$null()
        // console.dir(DataFac, { depth: null })
        curHead_c.$$ = curHead
    }

}

function find(list: ref_t<Elem>, data: ref_t<Data>): ref_t<Elem> {
    let elem = list
    if (data.$$.idx >= 0) {
        while (elem && elem.$$.data.$$.idx != data.$$.idx) {
            elem = elem.$$.next
        }
    }
    else {
        while (elem && <i16>(<u16>elem.$$.data.$$.val & 0xff) != data.$$.val) {
            elem = elem.$$.next
        }
    }
    return elem
}

function idxCompare(a: ref_t<Data>, b: ref_t<Data>): i32 {
    a.$$.val = <i16>((<u16>a.$$.val & 0xff00) | (0x00ff & <u16>(a.$$.val >> 8)))
    b.$$.val = <i16>((<u16>b.$$.val & 0xff00) | (0x00ff & <u16>(b.$$.val >> 8)))
    return a.$$.idx - b.$$.idx
}

export function kind(): Utils.Kind {
    return Utils.Kind.LIST
}

function pr(list: ref_t<Elem>, name: text_t) {
    let sz = 0
    printf`%s\n[`(name)
    for (let e = list; e != null; e = e.$$.next) {
        let pre = (sz++ % 8) == 0 ? t$`\n    ` : t$``
        printf`%s(%04x,%04x)`(pre, e.$$.data.$$.idx, <u16>e.$$.data.$$.val)
    }
    printf`\n], size = %d\n`(sz)
}

export function print() {
    pr(curHead, t$`current`)
}

function remove(item: ref_t<Elem>): ref_t<Elem> {
    let ret = item.$$.next
    let tmp = item.$$.data
    item.$$.data = ret.$$.data
    ret.$$.data = tmp
    item.$$.next = item.$$.next.$$.next
    ret.$$.next = ElemFac.$null()
    return ret
}

function reverse(list: ref_t<Elem>): ref_t<Elem> {
    let next = ElemFac.$null()
    while (list) {
        let tmp = list.$$.next
        list.$$.next = next
        next = list
        list = tmp
    }
    return next
}


export function run(arg: i16): Utils.sum_t {
    let list = curHead
    let finderIdx = <i16>arg
    let findCnt = Utils.getSeed(3)
    let found = <u16>0
    let missed = <u16>0
    let retval = <Crc.sum_t>0
    let data = Data.$make()
    data.idx = finderIdx
    for (let i = 0; i < findCnt; i++) {
        data.val = <i16>(i & 0xff)
        let elem = find(list, $ref(data))
        list = reverse(list)
        if (!elem) {
            missed += 1
            retval += <u16>(list.$$.next.$$.data.$$.val >> 8) & 0x1
        }
        else {
            found += 1
            if (<u16>elem.$$.data.$$.val & 0x1) {
                retval += (<u16>(elem.$$.data.$$.val >> 9)) & 0x1
            }
            if (elem.$$.next) {
                let tmp = elem.$$.next
                elem.$$.next = tmp.$$.next
                tmp.$$.next = list.$$.next
                list.$$.next = tmp
            }
        }
        if (data.idx >= 0) data.idx += 1
    }
    retval += found * 4 - missed
    if (finderIdx > 0) list = sort(list, valCompare)
    let remover = remove(list.$$.next)
    let finder = find(list, $ref(data))
    if (!finder) finder = list.$$.next
    while (finder) {
        retval = Crc.add16(list.$$.data.$$.val, retval)
        finder = finder.$$.next
    }
    unremove(remover, list.$$.next)
    list = sort(list, idxCompare)
    for (let e = list.$$.next; e; e = e.$$.next) {
        retval = Crc.add16(list.$$.data.$$.val, retval)
    }
    return retval
}

export function setup() {
    curHead = curHead_c.$$
    let seed = Utils.getSeed(1)
    let ki = 1
    let kd = maxElems.$$ - 3
    let e = curHead
    e.$$.data.$$.idx = 0
    e.$$.data.$$.val = 0x8080
    for (e = e.$$.next; e.$$.next != null; e = e.$$.next) {
        let pat = <u16>(seed ^ kd) & 0xf
        let dat = (pat << 3) | (kd & 0x7)
        e.$$.data.$$.val = <i16>((dat << 8) | dat)
        kd -= 1
        if (ki < (maxElems.$$ / 5)) {
            e.$$.data.$$.idx = ki++
        }
        else {
            pat = <u16>(seed ^ ki++)
            e.$$.data.$$.idx = <i16>(0x3fff & (((ki & 0x7) << 8) | pat))
        }
    }
    e.$$.data.$$.idx = 0x7fff
    e.$$.data.$$.val = 0xffff
    curHead = sort(curHead, idxCompare)
}

function sort(list: ref_t<Elem>, cmp: Comparator): ref_t<Elem> {
    let insize = <i32>1
    let q: ref_t<Elem>
    let e: ref_t<Elem>
    for (; ;) {
        let p = list
        let tail = list = ElemFac.$null()
        let nmerges = <i32>0  // count number of merges we do in this pass
        while (p) {
            nmerges++  // there exists a merge to be done
            // step `insize` places along from p
            q = p
            let psize = 0
            for (let i = 0; i < insize; i++) {
                psize++
                q = q.$$.next
                if (!q) break
            }
            // if q hasn't fallen off end, we have two lists to merge
            let qsize = insize
            // now we have two lists; merge them
            while (psize > 0 || (qsize > 0 && q)) {
                // decide whether next element of merge comes from p or q
                if (psize == 0) {
                    // p is empty; e must come from q
                    e = q
                    q = q.$$.next
                    qsize--
                }
                else if (qsize == 0 || !q) {
                    // q is empty; e must come from p.
                    e = p
                    p = p.$$.next
                    psize--
                }
                else if (cmp(p.$$.data, q.$$.data) <= 0) {
                    // First element of p is lower (or same); e must come from p.
                    e = p
                    p = p.$$.next
                    psize--
                }
                else {
                    // First element of q is lower; e must come from q.
                    e = q
                    q = q.$$.next
                    qsize--
                }
                // add the next element to the merged list
                if (tail) {
                    tail.$$.next = e
                }
                else {
                    list = e
                }
                tail = e
            }
            // now p has stepped `insize` places along, and q has too
            p = q
        }
        tail.$$.next = ElemFac.$null()
        // If we have done only one merge, we're finished
        if (nmerges <= 1) break  // allow for nmerges==0, the empty list case
        // Otherwise repeat, merging lists twice the size
        insize *= 2
    }
    return list
}

function unremove(removed: ref_t<Elem>, modified: ref_t<Elem>) {
    let tmp = removed.$$.data
    removed.$$.data = modified.$$.data
    modified.$$.data = tmp
    removed.$$.next = modified.$$.next
    modified.$$.next = removed
}

// ---- ValComparator ----

import * as Bench0 from '@em.bench.coremark/StateBench.em'
import * as Bench1 from '@em.bench.coremark/MatrixBench.em'

function valCalc(pval: ref_t<i16>): i16 {
    let val = <u16>pval.$$
    let optype = <u8>(val >> 7) & 1
    if (optype) return <i16>(val & 0x007f)
    let flag = val & 0x7
    let vtype = (val >> 3) & 0xf
    vtype |= vtype << 4
    var ret: u16
    switch (flag) {
        case 0:
            ret = Bench0.run(<i16>vtype)
            Utils.bindCrc(Bench0.kind(), ret)
            break
        case 1:
            ret = Bench1.run(<i16>vtype)
            Utils.bindCrc(Bench1.kind(), ret)
            break
        default:
            ret = val
            break
    }
    let newcrc = Crc.add16(<i16>ret, Utils.getCrc(Utils.Kind.FINAL))
    Utils.setCrc(Utils.Kind.FINAL, Crc.add16(<i16>ret, Utils.getCrc(Utils.Kind.FINAL)))
    ret &= 0x007f
    pval.$$ = <i16>((val & 0xff00) | 0x0080 | ret)   // cache the result
    return <i16>ret
}

function valCompare(a: ref_t<Data>, b: ref_t<Data>): i32 {
    let val1 = valCalc($ref(a.$$.val))
    let val2 = valCalc($ref(b.$$.val))
    return val1 - val2
}


/*

package em.coremark

from em.lang import Math

import BenchAlgI
import Crc
import Utils

# patterned after core_list_join.c

module ListBench: BenchAlgI

    type Data: struct
        val: int16
        idx: int16
    end

    type Comparator: function(a: Data&, b: Data&): int32

    config idxCompare: Comparator
    config valCompare: Comparator

private:

    type Elem: struct
        next: Elem&
        data: Data&
    end

    function find(list: Elem&, data: Data&): Elem&
    function pr(list: Elem&, name: string)
    function remove(item: Elem&): Elem&
    function reverse(list: Elem&): Elem&
    function sort(list: Elem&, cmp: Comparator): Elem&
    function unremove(removed: Elem&, modified: Elem&)

    config maxElems: uint16

    var curHead: Elem&

end

def em$construct()
    auto itemSize = 16 + sizeof<Data>
    maxElems = Math.round(memSize / itemSize) - 3
    curHead = new<Elem>
    curHead.data = new<Data>
    auto p = curHead
    for auto i = 0; i < maxElems - 1; i++
        auto q = p.next = new<Elem>
        q.data = new<Data>
        p = q
    end
    p.data = new<Data>
    p.next = null
end

def dump()
    for auto e = curHead; e; e = e.next
        %%[a+]
        %%[>e.data.idx]
        %%[>e.data.val]
        %%[a-]
    end
end

def find(list, data)
    auto elem = list
    if data.idx >= 0
        while elem && elem.data.idx != data.idx
            elem = elem.next
        end
    else
        while elem && <int16>(<uint16>elem.data.val & 0xff) != data.val
            elem = elem.next
        end
    end
    return elem
end

def kind()
    return Utils.Kind.LIST
end

def pr(list, name)
    auto sz = 0
    printf "%s\n[", name
    for auto e = list; e; e = e.next
        auto pre = (sz++ % 8) == 0 ? "\n    " : ""
        printf "%s(%04x,%04x)", <iarg_t>pre, e.data.idx, e.data.val
    end
    printf "\n], size = %d\n", sz
end

def print()
    pr(curHead, "current")
end

def remove(item)
    auto ret = item.next
    auto tmp = item.data
    item.data = ret.data
    ret.data = tmp
    item.next = item.next.next
    ret.next = null
    return ret
end
    
def reverse(list)
    auto next = <Elem&>null
    while list
        auto tmp = list.next
        list.next = next
        next = list
        list = tmp
    end
    return next
end
    
 def run(arg)
    auto list = curHead
    auto finderIdx = <int16>arg
    auto findCnt = Utils.getSeed(3)
    auto found = <uint16>0
    auto missed = <uint16>0
    auto retval = <Crc.sum_t>0
    var data: Data
    data.idx = finderIdx
    for auto i = 0; i < findCnt; i++
        data.val = <int16>(i & 0xff)
        auto elem = find(list, data)
        list = reverse(list)
        if elem == null
            missed += 1
            retval += <uint16>(list.next.data.val >> 8) & 0x1
        else
            found += 1
            if <uint16>elem.data.val & 0x1
                retval += (<uint16>(elem.data.val >> 9)) & 0x1
            end
            if elem.next != null
                auto tmp = elem.next
                elem.next = tmp.next
                tmp.next = list.next
                list.next = tmp
            end
        end
        data.idx += 1 if data.idx >= 0
    end
    retval += found * 4 - missed
    list = sort(list, valCompare) if finderIdx > 0
    auto remover = remove(list.next)
    auto finder = find(list, &data)
    finder = list.next if !finder
    while finder
        retval = Crc.add16(list.data.val, retval)
        finder = finder.next
    end
    unremove(remover, list.next)
    list = sort(list, idxCompare)
    for auto e = list.next; e; e = e.next
        retval = Crc.add16(list.data.val, retval)
    end
    return retval
end

def setup()
    auto seed = Utils.getSeed(1)
    auto ki = 1
    auto kd = maxElems - 3
    auto e = curHead
    e.data.idx = 0
    e.data.val = 0x8080
    for e = e.next; e.next; e = e.next
        auto pat = <uint16>(seed ^ kd) & 0xf
        auto dat = (pat << 3) | (kd & 0x7)
        e.data.val = <int16>((dat << 8) | dat)
        kd -= 1
        if ki < (maxElems / 5)
            e.data.idx = ki++
        else
            pat = <uint16>(seed ^ ki++)
            e.data.idx = <int16>(0x3fff & (((ki & 0x7) << 8) | pat))
        end
    end
    e.data.idx = 0x7fff
    e.data.val = 0xffff
    %%[c+]
    %%[c]
    curHead = sort(curHead, idxCompare)
    %%[c-]
end

def sort(list, cmp)
    auto insize = <int32>1
    var q: Elem&
    var e: Elem&
    for ;;
        auto p = list
        auto tail = list = null
        auto nmerges = <int32>0  # count number of merges we do in this pass
        while p
            nmerges++  # there exists a merge to be done
            # step `insize' places along from p
            q = p
            auto psize = 0
            for auto i = 0; i < insize; i++
                psize++
                q = q.next
                break if !q
            end
            # if q hasn't fallen off end, we have two lists to merge
            auto qsize = insize
            # now we have two lists; merge them
            while psize > 0 || (qsize > 0 && q)
                # decide whether next element of merge comes from p or q
                if psize == 0
                    # p is empty; e must come from q
                    e = q
                    q = q.next
                    qsize--
                elif qsize == 0 || !q
                    # q is empty; e must come from p.
                    e = p
                    p = p.next
                    psize--
                elif cmp(p.data, q.data) <= 0
                    # First element of p is lower (or same); e must come from p.
                    e = p
                    p = p.next
                    psize--
                else
                    # First element of q is lower; e must come from q.
                    e = q
                    q = q.next
                    qsize--
                end
                # add the next element to the merged list
                if tail
                    tail.next = e
                else
                    list = e
                end
                tail = e
            end
            # now p has stepped `insize' places along, and q has too
            p = q
        end
        tail.next = null
        # If we have done only one merge, we're finished
        break if nmerges <= 1  # allow for nmerges==0, the empty list case
        # Otherwise repeat, merging lists twice the size
        insize *= 2
    end
    return list
end

def unremove(removed, modified)
    auto tmp = removed.data
    removed.data = modified.data
    modified.data = tmp
    removed.next = modified.next
    modified.next = removed
end

*/
