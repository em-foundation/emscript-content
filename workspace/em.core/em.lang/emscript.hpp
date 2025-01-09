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

    template <typename T> struct frame_t {
        static frame_t<T> create(T arr[], u16 dim, i16 beg, u16 len) {
            auto idx = (u16)((beg < 0) ? dim + beg : beg);
            len = (len == 0) ? dim - idx : len;
            return frame_t(&arr[idx], len);
        }
        T* $start;
        u16 $len;
        constexpr frame_t(T* start, u16 len) : $start (start), $len (len) {}
        T &operator[](u16 index) { return *($start + index); }
        const T &operator[](u16 index) const { return *($start + index); }
        frame_t<T> $frame(i16 beg, u16 len = 0) { return create($start, $len, beg, len); }
        struct Iterator {
            T*current;
            constexpr Iterator(T* ptr) : current(ptr) {}
            T operator*() const { return (T)(*current); }
            Iterator &operator++() { ++current; return *this; }
            bool operator!=(const Iterator &other) const { return current != other.current; }
        };
        constexpr Iterator begin() { return Iterator($start); }
        constexpr Iterator end() { return Iterator($start + $len); }

    };

    template <typename T> struct param {
        T $$;
        constexpr param(T v) : $$(v) {}
    };

    template <typename T> struct ptr_t {
        T* p_;
        constexpr ptr_t(T* v) : p_ (v) {}
        T& operator*() const { return *p_; }
        u32 $cur() const { return (u32)(p_); }
        void $dec() { p_ -= 1; }
        void $inc() { p_ += 1; }
    };

    template <typename T, u16 N> struct table_ro {
        T $$[N];
        static constexpr u16 $len = N;
        inline const T &operator[](u16 index) const { return $$[index]; }
    };

    template <typename T, u16 N> struct table_rw {
        T $$[N];
        static constexpr u16 $len = N;
        inline T &operator[](u16 index) { return $$[index]; }
        inline const T &operator[](u16 index) const { return $$[index]; }
    };

    struct text_t {
        const char *str;
        em::u16 $len;
        constexpr text_t(const char *s, em::u16 l) : str(s), $len(l) {}
        const em::u8 operator[](em::u16 index) const { return str[index]; }
        struct Iterator {
            const char *current;
            constexpr Iterator(const char *ptr) : current(ptr) {}
            em::u8 operator*() const { return static_cast<em::u8>(*current); }
            Iterator &operator++() { ++current; return *this; }
            bool operator!=(const Iterator &other) const { return current != other.current; }
        };
        constexpr Iterator begin() const { return Iterator(str); }
        constexpr Iterator end() const { return Iterator(str + $len); }
    };
    text_t text(const char *str, u16 len) { return text_t(str, len); }

    template <typename T> using volatile_t = volatile T;

    static inline volatile u32 *$reg32(u32 addr) {
        return (volatile u32 *)addr;
    }

    static inline void fail() { em__fail(); }
    static inline void halt() { em__halt(); }
}; // namespace em

#endif // emscript__M
