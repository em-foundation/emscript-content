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

    using bool_t = bool;

    template <typename T> struct param {
        T $$;
        constexpr param(T v) : $$(v) {}
    };

    template <typename T, u16 N> class table {
      private:
        T $$[N];
      public:
        static constexpr u16 $len = N;
        constexpr Buffer_t() = default;
        T &operator[](u16 index) { return $$[index]; }
        const T &operator[](u16 index) const { return $$[index]; }
    };

    struct Text_t {
        const char *$$;
        u16 $len;
        constexpr Text_t(const char *s, u16 l) : $$(s), $len(l) {}
        constexpr const char &operator[](u16 idx) const { return $$[idx]; }
    };

    Text_t text_t(const char *str, u16 len) { return Text_t(str, len); }

    template <typename T> using volatile_t = volatile T;

    static inline volatile u32 *$reg32(u32 addr) {
        return (volatile u32 *)addr;
    }

    static inline void fail() { em__fail(); }
    static inline void halt() { em__halt(); }
}; // namespace em

#endif // emscript__M
