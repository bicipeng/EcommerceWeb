import { Component, OnInit } from '@angular/core';
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

  constructor(private ShoppingCartService: ShoppingCartService) { }

  async ngOnInit(){
   this.cart$ = await this.ShoppingCartService.getCart();
  }

}
