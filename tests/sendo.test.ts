import { BrowserWorker } from "browser-worker";
import {ECommerce, Platforms} from "../src"

const worker = new BrowserWorker();
const sendo=new ECommerce().build(Platforms.Sendo)

worker.runTask(async (page:any)=>{
  const result=  await sendo.search(page,"giá đỡ laptop")
  console.log(result.data.length)
  console.log(result.data)
},{
    headless:false
})