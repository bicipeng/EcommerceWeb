import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Order } from '../Models/Order';
import { ShoppingCart } from '../Models/Shopping-Cart';
import { OrderService } from '../Services/order.service';
import { ShoppingCartService } from '../Services/shopping-cart.service';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {
  shoppingCart$!:Observable<ShoppingCart>;
 shoppingCartArr:any;
 products:any[]=[];

 
  constructor(private shoppingCartService:ShoppingCartService, 
    private router:Router,
    private orderService:OrderService) {

     }

  async ngOnInit() {
  //  this.shoppingCart$ = await this.shoppingCartService.getCart();
    (await this.shoppingCartService.getCart()).subscribe(x =>this.shoppingCartArr=x)

    
  }

  onSubmit(formInput:any){
    console.log(this.shoppingCartArr)
    this.shoppingCartService.clearCart();
    console.log("formInput",formInput)

  this.shoppingCartArr.items.forEach((ele:any)=>{

      this.products.push({
        product:{
          title:ele.title,
          quantity:ele.quantity,
          totalPrice:ele.totalPrice
          
        }
        
      })
   
  })
 
  let order = {
    user:{
      firstName:formInput.firstName,
      lastName:formInput.lastName,
      address: formInput.address
    },
    products:this.products,
    total:this.shoppingCartArr.totalPrice,
    date: new Date().getDate()
  }
  this.orderService.createOder(order);
    this.router.navigateByUrl("/order-success")
  }

}
