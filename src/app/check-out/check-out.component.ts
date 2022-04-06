import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ShoppingCart } from '../Models/Shopping-Cart';
import { ShoppingCartService } from '../Services/shopping-cart.service';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {
  shoppingCart$!:Observable<ShoppingCart>;
  constructor(private shoppingCartService:ShoppingCartService, 
    private router:Router) { }

  async ngOnInit() {
    this.shoppingCart$ = await this.shoppingCartService.getCart()
  }

  onSubmit(){
    this.shoppingCartService.clearCart();

    this.router.navigateByUrl("/order-success")
  }

}
