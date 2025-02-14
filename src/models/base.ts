import { Page} from "t2-browser-worker"
import { IResponseListProduct } from "../models/types"

export abstract class BaseECom {
    protected baseUrl: string
    protected LIMIT_ITEMS: number = 30
    protected store: Record<string, any> = {
        products: [],
        prodNew: false,
        limit:this.LIMIT_ITEMS
    }

    constructor(domain: string) {
        this.baseUrl = `https://${domain}`
    }

    protected useSleep(s: number) {
        return new Promise(resolve => setTimeout(resolve, s * 1000))
    }

    protected async useScroll(page: Page, limit?: number) {
        let previousHeight = await page.evaluate(
            () => document.body.scrollHeight
        )
        let curCount = 0
        while (true) {
            await page.mouse.wheel(0, 1000)
            await page.waitForTimeout(400)
            let newHeight = await page.evaluate(
                () => document.body.scrollHeight
            )
            if (newHeight === previousHeight) break
            if (limit && curCount === limit) break
            previousHeight = newHeight
            curCount++
        }
    }

    protected async useCheck() {
        while (!this.store.prodNew) {
            await this.useSleep(2)
        }
    }


    protected async pageResApi(page: Page, url: string) {
        const response = await page.context().request.fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        return response.json(); 
    }

    protected abstract sendKeyword(page: Page, key: string): Promise<void>
    protected abstract crawler(): Promise<IResponseListProduct>

    async search(page: Page, key: string,limit?:number): Promise<IResponseListProduct> {
        this.store.products = []
        this.store.prodNew = false
        this.store.limit=limit??this.LIMIT_ITEMS

        await this.sendKeyword(page, key)
        const result = await this.crawler()
        return result
    }
}
