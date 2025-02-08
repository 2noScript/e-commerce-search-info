type TYPE_LANGUAGE = "en" | "vi" | "ko" | "zh";
type TYPE_LOCALE = "en_EN" | "vi_VN" | "id_ID" | "ko_KR" | "zh_CN";
type Status = "SUCCESS" | "ERROR" | "WITHOUT";
type Unit = "VND" | "RP" | "KRW" | "CNY";

export enum Platforms {
  Lazada = "lazada",
  Fptshop = "fptshop",
  Sendo = "sendo",
  Shopee = "shopee",
  Tiki = "tiki",
  Viettelstore = "viettelstore",
  Tokopedia = "tokopedia",
  Bukalapak = "bukalapak",
  Coupang = "coupang",
  Gmarket = "gmarket.co",
}

export interface IResponseListProduct {
  data: IProductInfo[];
  status: Status;
}

export interface IProductInfo {
  brand?: string;
  title: string;
  price: number;
  originPrice?: number;
  unit: Unit;
  star?: number;
  discount?: number;
  sold?: number;
  imageUrlThumbnail: string;
  imagePathThumbnail?: string;
  detailUrl: string;
  location?: string;
  favourite?: boolean;
  like?: number;
  review?: number;
  description?: string;
}

export interface ISourceInfo {
  key: Platforms;
  name: string;
  logo: string;
  icon: string;
  language: TYPE_LANGUAGE[];
  locale: TYPE_LOCALE;
  domain: string;
}
