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
 shoppingCartArr:any;
 products:any[]=[];

 userId!:string;
cartSubscription!:Subscription;
userSubscription !: Subscription;

 
  constructor(
    private authService: AuthService,
    private shoppingCartService:ShoppingCartService, 
    private router:Router,
    private orderService:OrderService) {

     }

  async ngOnInit() {
  //  this.shoppingCart$ = await this.shoppingCartService.getCart();
   this.cartSubscription = (await this.shoppingCartService.getCart()).subscribe(cart =>this.shoppingCartArr=cart)
this.userSubscription = this.authService.user$.subscribe(user=>this.userId = user!.uid);
    
  }
  ngOnDestroy(): void {
      // this.subscription.unsubscribe();
      if(this.userSubscription)
      this.userSubscription.unsubscribe();

      if(this.cartSubscription)
      this.cartSubscription.unsubscribe();
      }
  async onSubmit(formInput:any){
  let shipping = {
         firstName:formInput.firstName,
    lastName:formInput.lastName,
 
  }

    let order = new Order(this.userId, shipping, this.shoppingCartArr)




    // console.log(this.shoppingCartArr)
     this.shoppingCartService.clearCart();



 
  // let order = {
  // //   user:{
  // //     firstName:formInput.firstName,
  // //     lastName:formInput.lastName,
  // //  address:formInput.address,
  // //   },
  //   userId:this.userId,
  //   products:this.products,
  //   datePlaced: new Date().getTime()
  // }
 let result = await this.orderService.placeOder(order);
    // this.router.navigateByUrl("/order-success")
    this.router.navigate(['/order-success', result.key])
  }

}
