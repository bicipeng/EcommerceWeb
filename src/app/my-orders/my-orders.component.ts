import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable,map } from 'rxjs';
import { OrderService } from '../Services/order.service';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {
orders:any;
myOrders$!:Observable<any>;
  constructor(private orderServicd :OrderService) { }

;  ngOnInit(): void {
    this.orderServicd.getAllOrders().valueChanges().subscribe(x=>{
  
      this.orders=x})
      ​​  this.myOrders$=  this.orderServicd.getAllOrders().snapshotChanges().pipe(map(cate=>{
  
        // in order to get the key of each product needs to uses the snapshotchanges.
        return cate.map(
          ele=>({key:ele.payload.key,...ele.payload.val() as {}})
        )
      
      }))
     
  }
  getAllOrders(){
  
//console.log(this.orders)
for(let el of this.orders){
console.log(el)
}
}
}