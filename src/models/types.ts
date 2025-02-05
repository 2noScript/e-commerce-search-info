type TYPE_LANGUAGE = "en" | "vi";
type TYPE_lOCALE = "en_EN" | "vi_VN";
type Status = "SUCCESS" | "ERROR" | "WITHOUT";
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
  title: string;
  price:number,
  originPrice?:number
  unit:Unit,
  star?:number,
  discount?:number,
  imageUrlThumbnail:string,
  imagePathThumbnail?:string,
  detailUrl:string,
  location?:string
  favourite?:boolean,
  like?:number,
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
