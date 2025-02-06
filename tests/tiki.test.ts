import { BrowserWorker } from "browser-worker";

import {ECommerce, Platforms} from "../src"



const worker = new BrowserWorker();
const tiki=new ECommerce().build(Platforms.Tiki)

worker.runTask(async (page:any)=>{
  const result=  await tiki.search(page,"giá đỡ laptop")
  console.log(result)
})