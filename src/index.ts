import * as PlatformECommerce from "./platforms";

import { Platforms } from "./models/types";
import { ECommerceInfo } from "./constants";

class ECommerce {
  private store: Record<Platforms, any>;
  constructor() {
    this.store = {
      [Platforms.Shopee]: PlatformECommerce.Shopee,
      [Platforms.Lazada]: PlatformECommerce.Lazada,
      [Platforms.Tiki]: PlatformECommerce.Tiki,
      [Platforms.Sendo]: PlatformECommerce.Sendo,
      [Platforms.Fptshop]: PlatformECommerce.Fptshop,
      [Platforms.Viettelstore]: PlatformECommerce.Viettelstore,
      [Platforms.Tokopedia]: PlatformECommerce.Tokopedia,
      [Platforms.Coupang]: PlatformECommerce.Coupang,
      [Platforms.Bukalapak]: PlatformECommerce.Bukalapak,
      [Platforms.Gmarket]: PlatformECommerce.Gmarket,
    };
  }
  build(platform: Platforms) {
    return new this.store[platform](ECommerceInfo[platform].domain);
  }
}

export { ECommerce, Platforms };
