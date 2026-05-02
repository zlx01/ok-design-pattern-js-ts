interface SaleModel {
  sale(product: string): void;
}

class OfflineSale implements SaleModel {
  sale(product: string): void {
    console.log(`${product} is sold offline`);
  }
}

class TaoBaoSale implements SaleModel {
  sale(product: string): void {
    console.log(`${product} is sold in tao bao`);
  }
}

abstract class Product {
  protected saleModel: SaleModel;
  constructor(saleModel: SaleModel) {
    this.saleModel = saleModel;
  }
  public abstract make(name: string): void;
}

class HandPancake extends Product {
  constructor(saleModel: SaleModel) {
    super(saleModel);
  }

  public make(name: string): void {
    this.saleModel.sale(name);
  }
}

class ShandongPancake extends Product {
  constructor(saleModel: SaleModel) {
    super(saleModel);
  }

  public make(name: string): void {
    this.saleModel.sale(name);
  }
}

const ss1: SaleModel = new OfflineSale();
const p1: Product = new HandPancake(ss1);
p1.make('手抓饼');