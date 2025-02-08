import { Page } from "playwright"
import { BaseECom } from "../models/base"
import { IProductInfo, IResponseListProduct } from "../models/types"

export default class Sendo extends BaseECom {
    protected async sendKeyword(page: Page, key: string): Promise<void> {
        page.on("response", async response => {
            if (
                response
                    .url()
                    .includes("https://searchlist-api.sendo.vn/web/products")
            ) {
                console.log("Response Status:", response.status())
                try {
                    if (
                        response
                            .headers()
                            ["content-type"]?.includes("application/json")
                    ) {
                        const json = await response.json()
                        this.store["products"] = json.data
                        if (response.status() == 200)
                            this.store["prodNew"] = true
                    }
                } catch (error) {
                    console.error("Error parsing response:", error)
                }
            }
        })
        await page.goto(`${this.baseUrl}/tim-kiem?q=${key}`)
        await this.useScroll(page)
        await page.waitForLoadState("networkidle")
    }
    protected async crawler(): Promise<IResponseListProduct> {
        const data: IProductInfo[] = []

        for (const prod of this.store["products"]) {
            const title = prod.name
            const price = prod.sale_price_min
            const originPrice = prod.default_price_min
            const discount = prod.sale_percent
            const unit = "VND"
            const star = prod?.rated?.star
            const sold = prod.sold
            const imageUrlThumbnail = prod.image
            const location = prod.shop.ware_house_region_name
            const detailUrl = `${this.baseUrl}/${prod.category_path}`

            data.push({
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
            })
        }
        return {
            data,
            status: "SUCCESS",
        }
    }
}
