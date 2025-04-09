#include <stdint.h>

struct LRF_Trim0 {
    uint16_t pa0;
    uint16_t atstRefH;
};

struct LRF_Trim1 {
    uint16_t lna;
    uint16_t ifampRfLdo;
    struct {    // length: 2B
        uint16_t zero0          : 8;
        uint16_t voutTrim       : 7;
        uint16_t zero1          : 1;
    } divLdo;
    struct {    // length: 2B
        uint16_t zero0          : 8;
        uint16_t voutTrim       : 7;
        uint16_t zero1          : 1;
    } tdcLdo;
};

struct LRF_Trim2 {
    uint16_t dcoLdo0;
    uint16_t ifadcAldo;
    uint16_t ifadcDldo;
    struct {    // length: 2B
        uint16_t zero0          : 3;
        uint16_t tailresTrim    : 4;
        uint16_t zero1          : 9;
    } dco;
};

struct LRF_Trim_Variant {
    uint16_t ifadcQuant;
    uint16_t ifadc0;
    uint16_t ifadc1;
    uint16_t ifadclf;
};

struct LRF_Trim_tempLdoRtrim {
    uint16_t rtrimMinOffset : 2;
    uint16_t rtrimMaxOffset : 2;
    uint16_t divLdoMinOffset: 2;
    uint16_t divLdoMaxOffset: 2;
    uint16_t tdcLdoMinOffset: 2;
    uint16_t tdcLdoMaxOffset: 2;
    uint16_t tThrl          : 2;
    uint16_t tThrh          : 2;
};

struct  LRF_Trim_tempRssiAgc {
    int32_t rssiTcomp      : 4;
    int32_t magnTcomp      : 4;
    int32_t magnOffset     : 4;
    int32_t rfu            : 4;
    int32_t agcThrTcomp    : 4;
    int32_t agcThrOffset   : 4;
    int32_t lowGainOffset  : 4;
    int32_t highGainOffset : 4;
};

struct LRF_Trim3 {
    struct {    // length: 4B
        LRF_Trim_tempLdoRtrim tempLdoRtrim;
        uint8_t hfxtPdError;
        uint8_t res;
    } lrfdrfeExtTrim1;                  /* Revision >= 4 only */
    // Trim values for synth divider 0
    LRF_Trim_tempRssiAgc lrfdrfeExtTrim0;
};

struct LRF_Trim4 {
    int8_t   rssiOffset;
    uint8_t  trimCompleteN;
    uint16_t demIQMC0;
    uint16_t res1;
    uint8_t  ifamprfldo[2];
};

struct LRF_TrimDef {
    uint8_t             revision;           /* Revision of appTrims */
    uint8_t             nToolsClientOffset;
    uint8_t             reserved[2];
    LRF_Trim0           trim0;
    LRF_Trim1           trim1;
    LRF_Trim2           trim2;
    LRF_Trim_Variant    trimVariant[2];
    LRF_Trim3           trim3;
    LRF_Trim4           trim4;
};

const auto TRIMS = (LRF_TrimDef *volatile)0x4E000330;
