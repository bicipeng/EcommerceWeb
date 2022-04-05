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
clearCart(){
  this.ShoppingCartService.clearCart();
}
// createCart(){
//   this.ShoppingCartService.create()
// }
// addToCart(){
//   this.ShoppingCartService.addToCart({price:"2",title:"mango",imgUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Hapus_Mango.jpg/220px-Hapus_Mango.jpg", category:"Fruit",key:"-MzC1kxTQQBwyXex1FqI" })
// }

}
