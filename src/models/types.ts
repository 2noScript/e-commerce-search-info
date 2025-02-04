type TYPE_LANGUAGE = "en" | "vi";
type TYPE_lOCALE = "en_EN" | "vi_VN";
type Status = "SUCCESS" | "ERROR" | "WITCH_OUT";

export enum Platforms {
  Lazada = "lazada",
  Fptshop = "fptshop",
  Sendo = "sendo",
  Shopee = "shopee",
  Tiki = "tiki",
  Viettelstore = "viettelstore",
}

export interface IResponseListProduct {
  data: IProductInfo[];
  status: Status;
}

export interface IProductInfo {
  name: string;
}

export interface ISourceInfo {
  key: Platforms;
  name: string;
  logo: string;
  icon: string;
  language: TYPE_LANGUAGE[];
  locale: TYPE_lOCALE;
  domain: string;
}
