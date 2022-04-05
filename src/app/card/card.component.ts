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
 
  // products:Product[]=[];
  constructor(private shoppingCardService:ShoppingCartService) {
  // this.products$?.subscribe(ele=> this.products = ele)
   }

   addToCart(){
    this.shoppingCardService.addToCart(this.product);
   }

  //  removeFromCart(){
  //    this.shoppingCardService.removeFromCart(this.product);
  //  }

  //  getQuantity(){

  //   if(!this.shoppingCart) return 0;
  //   let item= this.shoppingCart.items[this.product.key];
  //   return item ? item.quantity : 0;

  //  }
}
