import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from '../Services/order.service';
import { map, take } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {
id!:string;
orderProducts:any;
cartTotal=0;
  constructor(
    private route:ActivatedRoute, 
    private orderService:OrderService
  ) { 
    this.id = this.route.snapshot.paramMap.get('id')!;

this.orderService.getOneOrder(this.id).subscribe((order:any)=>{
this.orderProducts = order;
if(order.items)
order.items.map((item:any)=>{
  this.cartTotal += item.totalPrice;
})

})



}

  ngOnInit(): void {
    // console.log("hello.orderproducts", this.orderProducts)
   //  if(this.orderProducts.items){
   //   this.orderProducts.items(
   //     (item:any)=>{
   //    this.cartTotal+= item.totalPrice
 
   //   })
   //  }
   }
 


  
   }


// getOrder(){
// //   console.log("getOrder here")
// // this.orderService.getOneOrder(this.id).subscribe()

//   }
  


  

