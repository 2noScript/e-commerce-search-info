import { ISourceInfo, Platforms } from "../models/types";

export const ECommerceInfo: Record<Platforms, ISourceInfo> = {
  [Platforms.Shopee]: {
    key: Platforms.Shopee,
    name: "shopee",
    language: ["vi"],
    locale: "vi_VN",
    icon: "https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/icon_favicon_1_96.wI1aMs.png",
    logo: "https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/icon_favicon_1_96.wI1aMs.png",
    domain: "shopee.vn",
  },
  [Platforms.Lazada]: {
    key: Platforms.Lazada,
    name: "lazada",
    language: ["vi"],
    locale: "vi_VN",
    icon: "",
    logo: "",
    domain: "lazada.vn",
  },
  [Platforms.Tiki]: {
    key: Platforms.Tiki,
    name: "tiki",
    language: ["vi"],
    locale: "vi_VN",
    icon: "",
    logo: "",
    domain: "tiki.vn",
  },
  [Platforms.Sendo]: {
    key: Platforms.Sendo,
    name: "sendo",
    language: ["vi"],
    locale: "vi_VN",
    icon: "",
    logo: "",
    domain: "sendo.vn",
  },
  [Platforms.Fptshop]: {
    key: Platforms.Fptshop,
    name: "fptshop",
    language: ["vi"],
    locale: "vi_VN",
    icon: "",
    logo: "",
    domain: "fptshop.com.vn",
  },
  [Platforms.Viettelstore]: {
    key: Platforms.Viettelstore,
    name: "viettelstore",
    language: ["vi"],
    locale: "vi_VN",
    icon: "",
    logo: "",
    domain: "viettelstore.vn",
  },
};

export const DELAY_TYPE_KEY=100