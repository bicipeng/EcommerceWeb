import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ShoppingCart } from '../Models/Shopping-Cart';
import { ShoppingCartService } from '../Services/shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  cart$!: Observable<ShoppingCart>;

  constructor(private ShoppingCartService: ShoppingCartService, private router:Router) { }

  async ngOnInit(){
   this.cart$ = await this.ShoppingCartService.getCart();
  }
clearCart(){
  this.ShoppingCartService.clearCart();
}

checkOut(){
this.router.navigateByUrl("/check-out");
}
}
