import { BrowserWorker } from "browser-worker";
import {ECommerce, Platforms} from "../src"
import cookies from "../mock/shopee.vn_06-02-2025.json"

const worker = new BrowserWorker();
const shopee=new ECommerce().build(Platforms.Shopee)

worker.runTask(async (page:any)=>{
  const result=  await shopee.search(page,"giá đỡ laptop")
  console.log(result.data.length)
  console.log(result.data)
},{
  cookies: cookies as any,
  headless:false
})