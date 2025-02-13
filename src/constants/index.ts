import { ISourceInfo, Platforms } from "../models/types"


const ASSETS_ICON = "https://raw.githubusercontent.com/2noScript/e-commerce-search-info/main/assets/icon/";

export const ECommerceInfo: Record<Platforms, ISourceInfo> = {
    [Platforms.Shopee]: {
        key: Platforms.Shopee,
        name: "shopee",
        language: ["vi"],
        locale: "vi_VN",
        icon: `${ASSETS_ICON}shopee.ico`,
        logo: `${ASSETS_ICON}shopee.ico`,
        domain: "shopee.vn",
    },
    [Platforms.Lazada]: {
        key: Platforms.Lazada,
        name: "lazada",
        language: ["vi"],
        locale: "vi_VN",
        icon: `${ASSETS_ICON}lazada.ico`,
        logo: `${ASSETS_ICON}lazada.ico`,
        domain: "lazada.vn",
    },
    [Platforms.Tiki]: {
        key: Platforms.Tiki,
        name: "tiki",
        language: ["vi"],
        locale: "vi_VN",
        icon: `${ASSETS_ICON}tiki.ico`,
        logo: `${ASSETS_ICON}tiki.ico`,
        domain: "tiki.vn",
    },
    [Platforms.Sendo]: {
        key: Platforms.Sendo,
        name: "sendo",
        language: ["vi"],
        locale: "vi_VN",
        icon: `${ASSETS_ICON}sendo.ico`,
        logo: `${ASSETS_ICON}sendo.ico`,
        domain: "sendo.vn",
    },
    [Platforms.Fptshop]: {
        key: Platforms.Fptshop,
        name: "fptshop",
        language: ["vi"],
        locale: "vi_VN",
        icon: `${ASSETS_ICON}fptshop.ico`,
        logo: `${ASSETS_ICON}fptshop.ico`,
        domain: "fptshop.com.vn",
    },
    [Platforms.Viettelstore]: {
        key: Platforms.Viettelstore,
        name: "viettelstore",
        language: ["vi"],
        locale: "vi_VN",
        icon: `${ASSETS_ICON}viettelstore.ico`,
        logo: `${ASSETS_ICON}viettelstore.ico`,
        domain: "viettelstore.vn",
    },
    [Platforms.Tokopedia]: {
        key: Platforms.Tokopedia,
        name: "tokopedia",
        language: ["en"],
        locale: "id_ID",
        icon: `${ASSETS_ICON}tokopedia.ico`,
        logo: `${ASSETS_ICON}tokopedia.ico`,
        domain: "tokopedia.com",
    },
    [Platforms.Bukalapak]: {
        key: Platforms.Bukalapak,
        name: "bukalapak",
        language: ["en"],
        locale: "id_ID",
        icon: `${ASSETS_ICON}bukalapak.ico`,
        logo: `${ASSETS_ICON}bukalapak.ico`,
        domain: "bukalapak.com",
    },
    [Platforms.Coupang]: {
        key: Platforms.Coupang,
        name: "coupang",
        language: ["ko"],
        locale: "ko_KR",
        icon: `${ASSETS_ICON}coupang.ico`,
        logo: `${ASSETS_ICON}coupang.ico`,
        domain: "coupang.com",
    },
    [Platforms.Gmarket]: {
        key: Platforms.Gmarket,
        name: "gmarket",
        language: ["ko"],
        locale: "ko_KR",
        icon: `${ASSETS_ICON}gmarket.ico`,
        logo: `${ASSETS_ICON}gmarket.ico`,
        domain: "gmarket.co.kr",
    },
};


export const DELAY_TYPE_KEY = 100
