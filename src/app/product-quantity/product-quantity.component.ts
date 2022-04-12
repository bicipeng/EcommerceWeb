import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../Models/Product';
import { ShoppingCartService } from '../Services/shopping-cart.service';

@Component({
  selector: 'app-product-quantity',
  templateUrl: './product-quantity.component.html',
  styleUrls: ['./product-quantity.component.css']
})
export class ProductQuantityComponent implements OnInit {
 
  @Input() product!:Product;
  @Input() shoppingCart:any;
  constructor(private shoppingCardService:ShoppingCartService) { }

  ngOnInit(): void {
  }
  addToCart(){
    this.shoppingCardService.addToCart(this.product);
   }

      removeFromCart(){
     this.shoppingCardService.removeFromCart(this.product);
   }


}
