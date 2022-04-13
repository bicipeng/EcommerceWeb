import { Time } from "@angular/common";
import { Product } from "./Product";
import { ShoppingCart } from "./Shopping-Cart";

export class Order{

datePlaced:any;
items!: any[];
    constructor(public userId:string, public orderId:string,public shipping:any, shoppingCart:ShoppingCart){
        this.datePlaced = new Date().getTime() 

       this.items = shoppingCart.items.map((ele:any)=>{

            return {
              product:{
                title:ele.title,
                imgUrl:ele.imgUrl,
                price:ele.price
              },
              quantity:ele.quantity,
              totalPrice:ele.totalPrice,
            }
         
        })
    }




}