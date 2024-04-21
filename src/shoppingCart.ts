import { CartItem } from "./cartItem";
import { Order } from "./order";
import { Product } from "./product";

export class ShoppingCart { 
    private items: CartItem[] = []; 
    
    constructor() {} 
    
    public addItem(product: Product): void { 
        const newItem = new CartItem(product); 
        this.items.push(newItem); 
    } 
    
    public createOrder(): Order {
        return new Order(this.items);
    }

    public calculateTotal(): number {
        const order = this.createOrder();
        return order.calculateTotal();
      }
}