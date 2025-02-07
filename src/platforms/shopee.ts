import { Page } from "playwright";
import { BaseECom } from "../models/base";
import { IResponseListProduct, IProductInfo } from "../models/types";
import { starFormat } from "../utils";

export default class Shopee extends BaseECom {
  private slugStr(text: string) {
    return text
      .trim()
      .replace(/\s+/g, "-")
      .replace(/[^\w\u00C0-\u1EF9-]+/g, "");
  }

  protected async retry(retryFunc: () => Promise<void>) {
    let retryCount = 1;
    while (true) {
      if (retryCount > 2 || this.store["products"]?.length>0) return;
      retryCount++
      await retryFunc();
    }
  }

  protected async sendKeyword(page: Page, key: string): Promise<void> {
    page.on("response", async (response) => {
      if (
        response.url().includes(`${this.baseUrl}/api/v4/search/search_items`)
      ) {
        console.log("Response Status:", response.status());
        try {
          if (
            response.headers()["content-type"]?.includes("application/json")
          ) {
            const json = await response.json();
            this.store["products"] = json.items;
            if (response.status() == 200) this.store["prodNew"] = true;
          }
        } catch (error) {
          console.error("Error parsing response:", error);
        }
      }
    });
    await page.goto(`${this.baseUrl}/search?keyword=${key}`);
    await page.waitForLoadState("networkidle");
    await this.useCheck();
    await this.retry(async () => {
      await page.goto(`${this.baseUrl}/search?keyword=${key}`);
    });
  }

  protected async crawler(): Promise<IResponseListProduct> {

    const data: IProductInfo[] = []
    for (const prod of this.store.products ) {
      
      const brand=prod.item_basic.brand
      const title = prod.item_basic.name;
      const price = prod.item_basic.price;
      const originPrice = prod.item_basic.price_before_discount;
      const discount = prod.item_basic.raw_discount;
      const unit = prod.item_basic.currency;
      const star = starFormat(prod.item_basic.item_rating.rating_star ?? 0);
      const sold=prod.item_basic.historical_sold
      const imageUrlThumbnail = `https://down-vn.img.susercontent.com/file/${prod.item_basic.image}`;
      const location = prod.item_basic.shop_location;
      const like = prod.item_basic.liked_count;
      const detailUrl = `${this.baseUrl}/${this.slugStr(title)}-i.${
        prod.item_basic.shopid
      }.${prod.item_basic.itemid}`;

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
        like,
        detailUrl,
      });
    }

    return {
      data,
      status: "SUCCESS",
    };
  }
}
