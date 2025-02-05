import { Page } from "playwright";
import { BaseECom } from "../models/base";
import { IResponseListProduct, IProductInfo } from "../models/types";
import { starFormat} from "../utils";

export default class Shopee extends BaseECom {
  protected async sendKeyword(page: Page, key: string): Promise<void> {
    page.on("response", async (response) => {
      if (
        response.url().includes("https://shopee.vn/api/v4/search/search_items")
      ) {
        try {
          if (
            response.headers()["content-type"]?.includes("application/json")
          ) {
            const json = await response.json();
            console.log("JSON Response:", json.items.length);
            this.store["products"] = json.items;
          }
        } catch (error) {
          console.error("Error parsing response:", error);
        }
      }
    });
    await page.goto(this.baseUrl, { waitUntil: "networkidle" });
    await page.reload({ waitUntil: "networkidle" });
    await page.click(".shopee-searchbar-input__input");
    await page.keyboard.type(key, { delay: 100 });
    await page.keyboard.press("Enter");
  }

  protected async crawler(page: Page): Promise<IResponseListProduct> {
    const data: IProductInfo[] = [];

    await this.useScroll(page);
    await page.waitForLoadState("networkidle");
    await this.useSleep(2)

    for (const prod of this.store?.products ?? []) {
      const title = prod.item_basic.name;
      const price = prod.item_basic.price;
      const originPrice=prod.item_basic.price_before_discount
      const discount=prod.item_basic.raw_discount
      const unit=prod.item_basic.currency
      const star= starFormat(prod.item_basic.item_rating.rating_star??0) 
      const imageUrlThumbnail=`https://down-vn.img.susercontent.com/file/${prod.item_basic.image}`
      const location=prod.item_basic.shop_location
      const like=prod.item_basic.liked_count

      data.push({
        title,
        price,
        originPrice,
        discount,
        unit,
        star,
        imageUrlThumbnail,
        location,
        like
      })
    }
    
    return {
      data,
      status: "SUCCESS",
    };
  }
}
