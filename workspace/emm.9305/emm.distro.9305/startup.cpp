#include <stdbool.h>
#include <stdint.h>

extern uint32_t __bss_addr__;
extern uint32_t __bss_size__;
extern uint32_t __code_addr__;
extern uint32_t __code_load__;
extern uint32_t __code_size__;
extern uint32_t __data_addr__;
extern uint32_t __data_load__;
extern uint32_t __data_size__;
extern uint32_t __global_pointer__;
extern uint32_t __stack_top__;

extern "C" int main();

extern "C" __attribute__ ((section(".entry"), noreturn)) void em__start() {
    asm ("mov_s	%sp,__stack_top__");
    uint32_t *src;
    uint32_t *dst;
    uint32_t sz;
    sz = (uint32_t)&__bss_size__;
    dst = &__bss_addr__;
    while (sz--) {
        *dst++ = 0;
    }
    sz = (uint32_t)&__data_size__;
    src = &__data_load__;
    dst = &__data_addr__;
    while (sz--) {
        *dst++ = *src++;
    }
#if __EM_BOOT_FLASH__ == 1
    sz = (uint32_t)&__code_size__;
    src = &__code_load__;
    dst = &__code_addr__;
    while (sz--) {
        *dst++ = *src++;
    }
    *em::$reg32((uint32_t)&SYS->RegMemCfg) |= MEM_DRAM6_IN_ICCM_MASK;
    *em::$reg32((uint32_t)&PML->RegPmlCtrl) = REG_PML_CTRL_RESET_VALUE;
    _sr(1, IC_CTRL);
#endif
    main();
    __builtin_unreachable();    
}

// extern "C" __attribute__ ((section(".entry"))) void* memcpy(void* dst, const void* src, size_t n) {
//     unsigned char* d = (unsigned char*)dst;
//     const unsigned char* s = (unsigned char*)src;
//     while (n--) {
//         *d++ = *s++;
//     }
//     return dst;
// }

// extern "C"  __attribute__ ((section(".entry"))) void* memset(void *s, int c, size_t n) {
extern "C"  void* memset(void *s, int c, size_t n) {
    unsigned char *ptr = (unsigned char *)s;
    unsigned char value = (unsigned char)c;
    for (size_t i = 0; i < n; i++) {
        ptr[i] = value;
    }
    return s;
}
