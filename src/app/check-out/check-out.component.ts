import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Order } from '../Models/Order';
import { ShoppingCart } from '../Models/Shopping-Cart';
import { AuthService } from '../Services/auth.service';
import { OrderService } from '../Services/order.service';
import { ShoppingCartService } from '../Services/shopping-cart.service';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit, OnDestroy {
  shoppingCart$!:Observable<ShoppingCart>;
 shoppingCart:any;
 products:any[]=[];

 userId!:string;
cartSubscription!:Subscription;
subscription !: Subscription;

 
  constructor(
    private shoppingCartService:ShoppingCartService, 
  ) {

     }

  async ngOnInit() {
    
   this.subscription = (await this.shoppingCartService.getCart()).subscribe(cart =>this.shoppingCart=cart)

    
  }
  ngOnDestroy(): void {
    if(this.subscription)
    this.subscription.unsubscribe();
  

 
   }



}
