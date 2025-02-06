import { Page } from "playwright";
import { BaseECom } from "../models/base";
import { IProductInfo, IResponseListProduct } from "../models/types";
import { DELAY_TYPE_KEY } from "../constants";

export default class Tiki extends BaseECom {
  protected async sendKeyword(page: Page, key: string): Promise<void> {
    const context = page.context();
    await context.grantPermissions([]);

    page.on("response", async (response) => {
      if (response.url().includes("https://tiki.vn/api/v2/products")) {
        try {
          const url = response.url();
          if (
            url.startsWith("https://tiki.vn/api/v2/products") &&
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
              console.log(this.store["products"].length);
            }
          }
        } catch (error) {
          console.error("Error parsing response:", error);
        }
      }
    });
    await page.goto(this.baseUrl, { waitUntil: "domcontentloaded" });
    await this.useSleep(2);
    await page.mouse.click(0, 0);

    await page.click('input[data-view-id="main_search_form_input"]');
    await page.keyboard.type(key, { delay: DELAY_TYPE_KEY });
    await page.keyboard.press("Enter");
  }
  protected async crawler(page: Page): Promise<IResponseListProduct> {
    await this.useScroll(page);
    await page.waitForLoadState("networkidle");
    const data: IProductInfo[] = [];
    return {
      data,
      status: "SUCCESS",
    };
  }
}
