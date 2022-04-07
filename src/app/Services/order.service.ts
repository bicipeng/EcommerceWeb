import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { retry } from 'rxjs-compat/operator/retry';
import { ShoppingCartService } from './shopping-cart.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private db: AngularFireDatabase,
    private shoppingCartService:ShoppingCartService) { }
  async placeOder(order:any){
    let result = await this.db.list('/orders').push(order);
    this.shoppingCartService.clearCart();
    return result;

  }
  getAllOrders(){
    return this.db.list('/orders').valueChanges();
  }
}
