import { CartItem } from "./cartItem";

export class Order {
    //private items: CartItem[] = [];
    constructor(private items: CartItem[]) {}
  
    calculateTotal(): number {
      let total = 0;
      for (const item of this.items) {
        total += item.product.price;
      }
      return total;
    }
  }