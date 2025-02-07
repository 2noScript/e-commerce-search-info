import { Page } from "playwright";
import { BaseECom } from "../models/base";
import { IResponseListProduct } from "../models/types";



export default class Fptshop extends BaseECom{
    
    protected sendKeyword(page: Page, key: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
    protected crawler(): Promise<IResponseListProduct> {
        throw new Error("Method not implemented.");
    }
    
}