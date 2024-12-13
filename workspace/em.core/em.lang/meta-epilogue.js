exports.$$exec = function() {
    let $$uarrBot = Array.from($$units.values());
    let $$uarrTop = Array.from($$units.values()).reverse();
    $$uarrBot.forEach(u => { if ('em$initM' in u) u.em$initM(); })
    $$uarrTop.forEach(u => { if ('em$configureM' in u) u.em$configureM(); })
    // $$uarrTop.forEach(u => console.log(u.em$_U))
    // for (;;) {
    //     let k = 0;
    //     for (let u of $$uarr) {
    //         if ('$$used' in u) continue;
    //         if (u.em$used) {
    //             if ('em$uses__' in u) u.em$uses__();
    //             u.$$used = true;
    //             k++;
    //         }
    //     }
    //     if (k == 0) break;
    // }
    $$uarrTop.forEach(u => { if (u.em$_U && u.em$_U['_used'] && 'em$constructM' in u) u.em$constructM(); })
}
