import { BrowserWorker } from "browser-worker";
import {ECommerce, Platforms} from "../src"

const worker = new BrowserWorker();
const lazada=new ECommerce().build(Platforms.Lazada)

worker.runTask(async (page:any)=>{
  const result=  await lazada.search(page,"giá đỡ laptop")
  console.log(result.data.length)
  console.log(result.data)
},{
    headless:false
})