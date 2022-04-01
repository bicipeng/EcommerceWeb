import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../Models/Product';
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
  @Input() shoppingCart:any;
 
  // products:Product[]=[];
  constructor(private shoppingCardService:ShoppingCartService) {
  // this.products$?.subscribe(ele=> this.products = ele)
   }

   addToCart(product:Product){
    this.shoppingCardService.addToCart(product);
   }

   getQuantity(){

    if(!this.shoppingCart) return 0;
    let item= this.shoppingCart.items[this.product.key];
    return item ? item.quantity : 0;

   }
}
