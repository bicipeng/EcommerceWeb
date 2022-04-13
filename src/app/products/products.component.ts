import { Component, OnDestroy, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Category } from '../Models/Category';
import { Product } from '../Models/Product';
import { ShoppingCart } from '../Models/Shopping-Cart';
import { ProductService } from '../Services/product.service';
import { ShoppingCartService } from '../Services/shopping-cart.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{

products: Product[]=[];
filterProducts: Product[]=[];
category?:string;
shoppingCart$!:Observable<ShoppingCart>;



  constructor(
    private route:ActivatedRoute,
    private productService:ProductService, 
    private shoppingCartService: ShoppingCartService,
    private db:AngularFireDatabase
   ) {

    
   }

  async ngOnInit() {
    
 
    this.shoppingCart$ = await this.shoppingCartService.getCart()

    this.populateProducts();

    
  }
 private applyFilter(){
  this.filterProducts = (this.category) ?
  this.products?.filter(p=>p.category.toLowerCase() === this.category)
  : this.products

}
private populateProducts(){
  
  this.productService.getAll().snapshotChanges().pipe(switchMap(eles=>{  
    eles.forEach(ele => {
      const val: any = ele.payload.val();
      this.products.push({
        key: <string>ele.payload.key, 
        title: <string>val.title,
        price: <string>val.price, 
        category: <string>val.category,
        imgUrl: <string>val.imgUrl
      });
    });

    return this.route.queryParamMap;
  }
  )
  ). subscribe(params=>{
  
      this.category=params.get('category') as string;
      this.applyFilter()

    });
}

 

}
