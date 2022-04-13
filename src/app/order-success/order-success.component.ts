import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from '../Services/order.service';

@Component({
  selector: 'app-order-success',
  templateUrl: './order-success.component.html',
  styleUrls: ['./order-success.component.css']
})
export class OrderSuccessComponent implements OnInit {
orderId!:string;
id:string;
  constructor(private orderService:OrderService,
    private route:ActivatedRoute, ) { 
    this.id = this.route.snapshot.paramMap.get('id')!;
    this.orderService.getOneOrder(this.id).subscribe((order:any)=>{
      this.orderId = order.orderId;
    })
  }

  ngOnInit(): void {
  }

}
