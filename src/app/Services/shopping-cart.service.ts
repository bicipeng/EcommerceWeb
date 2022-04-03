import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { create } from 'domain';
import { defaultIfEmpty, map, take } from 'rxjs';
import { Product } from '../Models/Product';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor(private db:AngularFireDatabase) {

   }
   create(){
     
    return this.db.list("/shopping-carts").push({
       dateCreated: new Date().getTime()
     })
   }
 
    async getCart(){
      let cartId = await this.getOrCreateCartId()
     return this.db.object("/shopping-carts/" + cartId);
   }
   getItem(cartId:string,productId:string){
     return this.db.object('/shopping-carts/' + cartId + '/items/' + productId);
   }
 async  getOrCreateCartId():Promise<string>{
     let cartId = localStorage.getItem('cartId');
     if(cartId)  return cartId;

     let result = await this.create();
     localStorage.setItem('cartId', result.key!);
      return result.key!;
     
   }

    addToCart(product: Product) {

    this.updateItenmQuntity(product,1);
  }

  //remove from cart based on ProductId
  removeFromCart(product:Product){
this.updateItenmQuntity(product,-1);
  }
  private async updateItenmQuntity(product:Product, change:number){
    const cartId = await this.getOrCreateCartId();
    const item$ = this.getItem(cartId!,product.key);
    item$.valueChanges()
    .pipe(take(1))
    .subscribe((item:any) => {
    
       item ? item$.update({quantity: item['quantity'] + change}) :  item$.set({ product, quantity: 1 });

    });
  }
}
