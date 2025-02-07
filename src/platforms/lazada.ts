import { Page } from "playwright";
import { BaseECom } from "../models/base";
import { IProductInfo, IResponseListProduct } from "../models/types";
import { starFormat } from "../utils";
export default class Lazada extends BaseECom {
  private extractSoldCount(soldText: string) {
    const match = soldText.match(/([\d.]+)([KMB]?)/i);
    if (!match) return 0;
    let number = parseFloat(match[1]);
    const unit = match[2]?.toUpperCase();

    if (unit === "K") number *= 1000;
    else if (unit === "M") number *= 1_000_000;
    else if (unit === "B") number *= 1_000_000_000;

    return Math.round(number);
  }
  protected async sendKeyword(page: Page, key: string): Promise<void> {
    page.on("response", async (response) => {
      if (response.url().includes(`catalog/?ajax=true&isFirstRequest=true`)) {
        console.log("Response Status:", response.status());
        try {
          if (
            response.headers()["content-type"]?.includes("application/json")
          ) {
            const json = await response.json();
            this.store["products"] = [
              ...this.store["products"],
              ...json.mods.listItems,
            ];
            this.store["prodNew"] = true;
          }
        } catch (error) {
          console.error("Error parsing response:", error);
        }
      }
    });
    await page.goto(`${this.baseUrl}/catalog/?q=${key}`);
    await this.useScroll(page);
    await page.waitForLoadState("networkidle");
  }
  protected async crawler(): Promise<IResponseListProduct> {
    const data: IProductInfo[] = [];
    console.log(this.store.products.length);
    for (const prod of this.store["products"]) {
      const brand = prod.brandName;
      const title = prod.name;
      const price = Number(prod.price);
      const originPrice = Number(prod.originalPrice);
      const discount = Math.round(((originPrice - price) / originPrice) * 100);
      const unit = "VND";
      const star = starFormat(Number(prod.ratingScore));
      const sold =this.extractSoldCount(prod?.itemSoldCntShow??"")
      const imageUrlThumbnail=prod.image
      const location=prod.location
      const detailUrl=`https:${prod.itemUrl}`
      
      data.push({
        brand,
        title,
        price,
        originPrice,
        discount,
        unit,
        star,
        sold,
        imageUrlThumbnail,
        location,
        detailUrl
      })
    }
    return {
      data,
      status: "SUCCESS",
    };
  }
}
