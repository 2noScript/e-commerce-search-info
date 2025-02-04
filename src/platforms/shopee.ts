import { Page } from "playwright";
import { BaseECom } from "../models/base";
import { IResponseListProduct } from "../models/types";

export default class Shopee extends BaseECom {
  protected async sendKeyword(page: Page, key: string): Promise<void> {
    await page.goto(this.baseUrl,{waitUntil:"networkidle"});
    
    await page.reload({ waitUntil: 'load' }); 
  
    await page.click(".shopee-searchbar-input__input");
    await page.keyboard.type(key, { delay: 100 });
    await page.keyboard.press('Enter');

    await this.useSleep(60);
  }
  protected async crawler(page: Page): Promise<IResponseListProduct> {
    throw new Error("Method not implemented.");
  }
}
