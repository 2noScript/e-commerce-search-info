import { BrowserWorker, Page } from "t2-browser-worker"
import { ECommerce, Platforms } from "../src"

const worker = new BrowserWorker()
const shopee = new ECommerce().build(Platforms.Shopee)



worker.runTask(
    async (page: Page) => {
        const result = await shopee.search(page, "giá đỡ laptop")
        console.log(result.data.length)
        console.log(result.data)
        // await page.waitForTimeout(90000)
    },
    {
        headless: false
    }
)
