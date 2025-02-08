# e-commerce-search-info

[![npm version](https://badge.fury.io/js/e-commerce-search-info.svg)](https://badge.fury.io/js/e-commerce-search-info)

## Description

## Installation

```bash
npm install e-commerce-search-info
```

or using Yarn:

```bash
yarn add e-commerce-search-info
```

### Usage with browser-worker

```ts
import { BrowserWorker } from "browser-worker"
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

|     | Key            | Name         | Language | Locale | Logo                                                                                                                               | Domain          |
| --- | -------------- | ------------ | -------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| ✅  | `Shopee`       | shopee       | vi       | vi_VN  | <img src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/icon_favicon_1_96.wI1aMs.png" width="24" height="24" /> | shopee.vn       |
| ✅  | `Lazada`       | lazada       | vi       | vi_VN  | <img src="https://lzd-img-global.slatic.net/g/tps/tfs/TB1e_.JhHY1gK0jSZTEXXXDQVXa-64-64.png" width="24" height="24" />             | lazada.vn       |
| ✅  | `Tiki`         | tiki         | vi       | vi_VN  | <img src="https://salt.tikicdn.com/ts/upload/29/ca/02/e39713d1b90405fd0d39b8fac676bb0d.png" width="24" height="24" />              | tiki.vn         |
| ✅  | `Sendo`        | sendo        | vi       | vi_VN  | <img src="https://media3.scdn.vn/img4/2020/12_17/ESU8qhSA4W2ha9ONanHH.png" width="24" height="24" />                               | sendo.vn        |
|     | `Fptshop`      | fptshop      | vi       | vi_VN  | <img src="https://fptshop.com.vn/favicon.ico" width="24" height="24" />                                                            | fptshop.com.vn  |
|     | `Viettelstore` | viettelstore | vi       | vi_VN  | <img src="https://viettelstore.vn/favicon.ico" width="24" height="24" />                                                           | viettelstore.vn |
|     | `Tokopedia`    | tokopedia    | en       | id_ID  | <img src="https://images.tokopedia.net/assets-tokopedia-lite/prod/icon144.png" width="24" height="24" />                           | tokopedia.com   |
|     | `Bukalapak`    | bukalapak    | en       | id_ID  | <img src="https://assets.bukalapak.com/sigil/bukalapak-logo-icon.svg" width="24" height="24" />                                    | bukalapak.com   |
|     | `Coupang`      | coupang      | ko       | ko_KR  | <img src="https://image9.coupangcdn.com/image/coupang/favicon/v2/favicon.ico" width="24" height="24" />                            | coupang.com     |
|     | `Gmarket`      | gmarket      | ko       | ko_KR  | <img src="https://image.gmarket.co.kr/favicon/gmarket.ico" width="24" height="24" />                                               | gmarket.co.kr   |
