type TYPE_LANGUAGE = "en" | "vi";
type TYPE_lOCALE = "en_EN" | "vi_VN";
type Status = "SUCCESS" | "ERROR" | "WITCH_OUT";
type Unit="VND"

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
  price:number,
  discountPrice?:number
  originPrice?:number
  unit:Unit,
  star?:number,
  discount?:number,
  imageUrlThumbnail:string,
  imagePathThumbnail?:string,
  location?:string
  favourite?:boolean,
  description?:string
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
