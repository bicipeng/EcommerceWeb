import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { OrderService } from '../Services/order.service';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {

  constructor(private orderServicd :OrderService) { }
orders:any
;  ngOnInit(): void {
  }
  getAllOrders(){
    this.orderServicd.getAllOrders().subscribe(x=>this.orders=x)

}
}