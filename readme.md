# e-commerce-search-info

[![npm version](https://badge.fury.io/js/e-commerce-search-info.svg)](https://badge.fury.io/js/e-commerce-search-info)

## Description

"I want to find a product easily; that's how I do it."

## Installation

```bash
npm install e-commerce-search-info
```

or using Yarn:

```bash
yarn add e-commerce-search-info
```

### Usage with t2-browser-worker

```ts
import { BrowserWorker } from "t2-browser-worker"
import { ECommerce, Platforms } from "e-commerce-search-info"
import cookies from "../mock/shopee.vn_06-02-2025.json"

const worker = new BrowserWorker()
const shopee = new ECommerce().build(Platforms.Shopee)

worker.runTask(
    async (page: any) => {
        const result = await shopee.search(page, "giá đỡ laptop")
        console.log(result.data.length)
        console.log(result.data)
    },
    {
        cookies: cookies as any,
        headless: false,
    }
)
```

### ECommerceInfo Table

|     | Key            | Name         | Language | Locale | Logo                                                                                                                                      | Domain          |
| --- | -------------- | ------------ | -------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| ✅  | `Shopee`       | shopee       | vi       | vi_VN  | <img src="https://raw.githubusercontent.com/2noScript/e-commerce-search-info/main/assets/icon/shopee.ico" width="32" height="32" />       | shopee.vn       |
| ✅  | `Lazada`       | lazada       | vi       | vi_VN  | <img src="https://raw.githubusercontent.com/2noScript/e-commerce-search-info/main/assets/icon/lazada.ico" width="32" height="32" />       | lazada.vn       |
| ✅  | `Tiki`         | tiki         | vi       | vi_VN  | <img src="https://raw.githubusercontent.com/2noScript/e-commerce-search-info/main/assets/icon/tiki.ico" width="32" height="32" />         | tiki.vn         |
| ✅  | `Sendo`        | sendo        | vi       | vi_VN  | <img src="https://raw.githubusercontent.com/2noScript/e-commerce-search-info/main/assets/icon/sendo.ico" width="32" height="32" />        | sendo.vn        |
|     | `Fptshop`      | fptshop      | vi       | vi_VN  | <img src="https://raw.githubusercontent.com/2noScript/e-commerce-search-info/main/assets/icon/fptshop.ico" width="32" height="32" />      | fptshop.com.vn  |
|     | `Viettelstore` | viettelstore | vi       | vi_VN  | <img src="https://raw.githubusercontent.com/2noScript/e-commerce-search-info/main/assets/icon/viettelstore.ico" width="32" height="32" /> | viettelstore.vn |
|     | `Tokopedia`    | tokopedia    | en       | id_ID  | <img src="https://raw.githubusercontent.com/2noScript/e-commerce-search-info/main/assets/icon/tokopedia.ico" width="32" height="32" />    | tokopedia.com   |
|     | `Bukalapak`    | bukalapak    | en       | id_ID  | <img src="https://raw.githubusercontent.com/2noScript/e-commerce-search-info/main/assets/icon/bukalapak.ico" width="32" height="32" />    | bukalapak.com   |
|     | `Coupang`      | coupang      | ko       | ko_KR  | <img src="https://raw.githubusercontent.com/2noScript/e-commerce-search-info/main/assets/icon/coupang.ico" width="32" height="32" />      | coupang.com     |
|     | `Gmarket`      | gmarket      | ko       | ko_KR  | <img src="https://raw.githubusercontent.com/2noScript/e-commerce-search-info/main/assets/icon/gmarket.ico" width="32" height="32" />      | gmarket.co.kr   |

