import { BrowserWorker, Page } from "t2-browser-worker"
import { ECommerce, Platforms } from "../src"

const worker = new BrowserWorker()
const lazada = new ECommerce().build(Platforms.Lazada)

worker.runTask(
    async (page: Page) => {
        const result = await lazada.search(page, "giá đỡ laptop")
        console.log(result.data.length)
        console.log(result.data)
    },
    {
        headless: false,
    }
)
