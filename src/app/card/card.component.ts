import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../Models/Product';
import { ShoppingCart } from '../Models/Shopping-Cart';
import { ShoppingCartService } from '../Services/shopping-cart.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
 
  // @Input('p') p!:Product;
  @Input() showAction:boolean=true;
  @Input() product!:Product;
  @Input() shoppingCart!:ShoppingCart;
 

  constructor(private shoppingCardService:ShoppingCartService) {
 
   }

   addToCart(){
    this.shoppingCardService.addToCart(this.product);
   }


}
