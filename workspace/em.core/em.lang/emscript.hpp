#ifndef emscript__M
#define emscript__M

#include <stdint.h>

static void em__fail();
static void em__halt();

namespace em {

    using i8 = int8_t;
    using i16 = int16_t;
    using i32 = int32_t;

    using u8 = uint8_t;
    using u16 = uint16_t;
    using u32 = uint32_t;

    template <typename T>
    struct param {
        T $$;
        constexpr param(T v) : $$(v) {}
    };

    template <typename T>
    using volatile_t = volatile T;

    static inline volatile u32* $reg32(u32 addr) { return (volatile u32*)addr; }

    static inline void fail() { em__fail(); }
    static inline void halt() { em__halt(); }
};

#endif // emscript__M
