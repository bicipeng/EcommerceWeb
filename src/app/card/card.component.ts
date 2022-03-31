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
 
  // products:Product[]=[];
  constructor(private shoppingCardService:ShoppingCartService) {
  // this.products$?.subscribe(ele=> this.products = ele)
   }

   addToCart(product:Product){
    this.shoppingCardService.addToCart(product);
   }


}
