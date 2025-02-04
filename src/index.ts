import * as PlatformECommerce from "./platforms";

import { Platforms } from "./models/types";
import { PlatformsInfo } from "./constants";

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
    };
  }
  build(platform: Platforms) {
    return new this.store[platform](PlatformsInfo[platform].domain);
  }
}

export { ECommerce, Platforms };
