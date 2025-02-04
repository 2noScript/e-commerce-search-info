



export abstract class BaseECom {
  protected baseUrl: string;
  protected LIMIT_ITEMS: number = 30;

  constructor(domain: string) {
    this.baseUrl = `https://${domain}`;
  }

  abstract search(key: string): Promise<void>;
}
