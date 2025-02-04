import { Page } from "playwright";
import { IResponseListProduct } from "../models/types";

export abstract class BaseECom {
  protected baseUrl: string;
  protected LIMIT_ITEMS: number = 30;

  constructor(domain: string) {
    this.baseUrl = `https://${domain}`;
  }

  protected useSleep(s: number) {
    return new Promise((resolve) => setTimeout(resolve, s * 1000));
  }
  
  protected abstract  sendKeyword(page: Page, key: string): Promise<void>;
  protected abstract crawler(page: Page): Promise<IResponseListProduct>;

  async search(page: Page, key: string): Promise<IResponseListProduct> {
    await this.sendKeyword(page, key);
    const result = await this.crawler(page);
    return result;
  }
}
