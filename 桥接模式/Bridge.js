"use strict";
class OfflineSale {
    sale(product) {
        console.log(`${product} is sold offline`);
    }
}
class TaoBaoSale {
    sale(product) {
        console.log(`${product} is sold in tao bao`);
    }
}
class Product {
    constructor(saleModel) {
        this.saleModel = saleModel;
    }
}
class HandPancake extends Product {
    constructor(saleModel) {
        super(saleModel);
    }
    make(name) {
        this.saleModel.sale(name);
    }
}
class ShandongPancake extends Product {
    constructor(saleModel) {
        super(saleModel);
    }
    make(name) {
        this.saleModel.sale(name);
    }
}
const ss1 = new OfflineSale();
const p1 = new HandPancake(ss1);
p1.make('手抓饼');
