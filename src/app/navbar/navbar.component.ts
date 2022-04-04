import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable,map } from 'rxjs';
import { ShoppingCart } from '../Models/Shopping-Cart';
import { User } from '../Models/User';
import { AuthService } from '../Services/auth.service';
import { ShoppingCartService } from '../Services/shopping-cart.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  appUser?:User;
  shoppingCartItemCount?:number;
  cart$!: Observable<ShoppingCart>;
  cartId:any;
  constructor(private auth: AuthService,
    private db :AngularFireDatabase,
    private shoppingCartService:ShoppingCartService ) { 
      this.cartId = this.shoppingCartService.getOrCreateCartId();

   }

  async ngOnInit(){
    this.auth.appUser$.subscribe(user=>this.appUser = user!);
    //  let cart$ = (await this.shoppingCartService.getCart()).valueChanges();
    //  cart$.subscribe(
    //    (cart:any)=>{
    //      this.shoppingCartItemCount = 0;
    //     for(let productId in cart.items){
    //       this.shoppingCartItemCount += cart.items[productId].quantity;
    //     }
    //    }
    //  )
    this.cart$ = await this.shoppingCartService.getCart();
  }
  logout(){
    this.auth.logOut();
  
    
  }
  // checkItems(){
   
  //  }

}
