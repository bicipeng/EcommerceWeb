import { ShoppingCartItem } from "./shopping-cart-item";

export class ShoppingCart{
//before edit
    // constructor(public  items: ShoppingCartItem[]){
        
    // }
    constructor(public  items: {[productId:string]:ShoppingCartItem}){
        
    }
    get productIds(){
      
    return  Object.keys(this.items)
    }
    get totalItemCount(){
        let count = 0;
        for(let productId in this.items)
            count += this.items[productId].quantity;
            return count;
          
    }
}