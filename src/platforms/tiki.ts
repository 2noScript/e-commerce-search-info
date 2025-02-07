import { Page } from "playwright";
import { BaseECom } from "../models/base";
import { IProductInfo, IResponseListProduct } from "../models/types";

export default class Tiki extends BaseECom {
  protected async sendKeyword(page: Page, key: string): Promise<void> {
    const context = page.context();
    await context.grantPermissions([]);

    page.on("response", async (response) => {
      if (response.url().includes(`${this.baseUrl}/api/v2/products`)) {
        try {
          const url = response.url();
          if (
            url.startsWith(`${this.baseUrl}/api/v2/products`) &&
            url.includes("include=advertisement") &&
            url.includes("aggregations=") &&
            url.includes("trackity_id")
          ) {
            if (
              response.headers()["content-type"]?.includes("application/json")
            ) {
              const json = await response.json();
              this.store["products"] = [
                ...this.store["products"],
                ...json.data,
              ];
              this.store["prodNew"]=true
              console.log(this.store["products"].length);
            }
          }
        } catch (error) {
          console.error("Error parsing response:", error);
        }
      }
    });
    await page.goto(`${this.baseUrl}/search?q=${key}`);
    await this.useScroll(page);
    await this.useCheck()



  }
  protected async crawler(): Promise<IResponseListProduct> {
    const data: IProductInfo[] = [];
    return {
      data,
      status: "SUCCESS",
    };
  }
}
