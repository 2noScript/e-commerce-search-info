import { BrowserWorker, Page } from "t2-browser-worker"
import { ECommerce, Platforms } from "../src"

const worker = new BrowserWorker()
const sendo = new ECommerce().build(Platforms.Sendo)

worker.runTask(
    async (page: Page) => {
        const result = await sendo.search(page, "giá đỡ laptop")
        console.log(result.data.length)
        console.log(result.data)
    },
    {
        headless: false,
    }
)
