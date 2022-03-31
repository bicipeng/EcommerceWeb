import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { create } from 'domain';
import { take } from 'rxjs';
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
 
    getCart(cartId:string){
     return this.db.object("/shopping-carts" + cartId);
   }
   getItem(cartId:string,productId:string){
     return this.db.object('/shopping-carts/' + cartId + '/items/' + productId);
   }
 async  getOrCreateCartId(){
     let cartId = localStorage.getItem('cartId');
     if(cartId)  return cartId;

     let result = await this.create();
     localStorage.setItem('cartId', result.key!);
      return result.key;
     
   }

   async addToCart(product: Product) {
    const cartId = await this.getOrCreateCartId();
    const item$ = this.getItem(cartId!,product.key);

    console.log("here is product key", product.key)
    item$.valueChanges()
    .pipe(take(1))
    .subscribe((item:any) => {
    
       item ? item$.update({quantity: item['quantity'] + 1}) :  item$.set({ product, quantity: 1 });

    });
  }
}
