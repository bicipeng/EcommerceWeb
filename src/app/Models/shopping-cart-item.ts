import { Product } from "./Product";

export class ShoppingCartItem{
 key!:string;
 title!:string;
 imgUrl!: string;
 price!:string;
 quantity!:number;
 category!:string;
 //init could be an obj that looks a shopping cart obj 
 
     constructor(init?: Partial<ShoppingCartItem> ){
         //target is this, the shoppingCartItem
         Object.assign(this,init);
     }

    get totalPrice(){
        return Number(this.price)  * this.quantity;
    }
}