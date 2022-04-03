import { Component, OnInit } from '@angular/core';
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
  constructor(private auth: AuthService,
    private shoppingCartService:ShoppingCartService ) { 


   }

  async ngOnInit(){
    this.auth.appUser$.subscribe(user=>this.appUser = user!);
     let cart$ = (await this.shoppingCartService.getCart()).valueChanges();
     cart$.subscribe(
       (cart:any)=>{
         this.shoppingCartItemCount = 0;
        for(let productId in cart.items){
          this.shoppingCartItemCount += cart.items[productId].quantity;
        }
       }
     )
  }
  logout(){
    this.auth.logOut();
  
    
  }
  checkItems(){
    console.log("how many items in shopping cart",this.shoppingCartItemCount)
  }

}
