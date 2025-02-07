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
              this.store["prodNew"] = true;
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
    await this.useCheck();
  }
  protected async crawler(): Promise<IResponseListProduct> {
    const data: IProductInfo[] = [];

    for (const prod of this.store.products) {
      const brand = prod.brand_name;
      const title = prod.name;
      const price = prod.price;
      const originPrice = prod.original_price;
      const discount = prod.discount_rate;
      const unit = "VND";
      const star = prod.rating_average;
      const imageUrlThumbnail = prod.thumbnail_url;
      const sold = prod?.quantity_sold?.value;
      const location = prod.origin;
      const detailUrl = `${this.baseUrl}/${prod.url_path}`;

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
        detailUrl,
      });
    }

    return {
      data,
      status: "SUCCESS",
    };
  }
}
