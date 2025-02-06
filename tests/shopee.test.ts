import { BrowserWorker } from "browser-worker";

import {ECommerce, Platforms} from "../src"

const worker = new BrowserWorker();
const shopee=new ECommerce().build(Platforms.Shopee)

worker.runTask(async (page:any)=>{
  const result=  await shopee.search(page,"bút chì")
  console.log(result.data.length)
})