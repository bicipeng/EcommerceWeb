import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { retry } from 'rxjs-compat/operator/retry';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private db: AngularFireDatabase) { }
  createOder(order:any){
    return this.db.list('/orders').push(order);

  }
  getAllOrders(){
    return this.db.list('/orders').valueChanges();
  }
}
