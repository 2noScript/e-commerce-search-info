import { Page } from "playwright";
import { BaseECom } from "../models/base";
import { IResponseListProduct, IProductInfo } from "../models/types";
import { starFormat} from "../utils";
import {DELAY_TYPE_KEY} from "../constants"
import slugify from "slugify"
import getSlug from "speakingurl";

export default class Shopee extends BaseECom {

  private slugStr(text:string){
    return text
    .trim()
    .replace(/\s+/g, "-") 
    .replace(/[^\w\u00C0-\u1EF9-]+/g, ""); 
  }
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
            this.store["products"] = json.items;
          }
        } catch (error) {
          console.error("Error parsing response:", error);
        }
      }
    });
    await page.goto(this.baseUrl, { waitUntil: "networkidle" });
    await this.useSleep(2)
    await page.reload({ waitUntil: "networkidle" });
    await page.click(".shopee-searchbar-input__input");
    await page.keyboard.type(key, { delay: DELAY_TYPE_KEY });
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
      const detailUrl=`${this.baseUrl}/${this.slugStr(title)}-i.${prod.item_basic.shopid}.${prod.item_basic.itemid}`

      data.push({
        title,
        price,
        originPrice,
        discount,
        unit,
        star,
        imageUrlThumbnail,
        location,
        like,
        detailUrl
      })
    }
    
    return {
      data,
      status: "SUCCESS",
    };
  }
}
