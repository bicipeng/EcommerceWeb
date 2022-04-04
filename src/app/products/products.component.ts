import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Category } from '../Models/Category';
import { Product } from '../Models/Product';
import { ProductService } from '../Services/product.service';
import { ShoppingCartService } from '../Services/shopping-cart.service';
import { ShoppingCartComponent } from '../shopping-cart/shopping-cart.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnDestroy {

products: Product[]=[];
filterProducts: Product[]=[];
category?:string;
shoppingCart:any;
subscription! : Subscription


  constructor(
    route:ActivatedRoute,
    productService:ProductService, 
    private shoppingCartService: ShoppingCartService
   ) {

    // productService.getAll().valueChanges().subscribe(eles =>{
    //   this.products = eles;
    //   route.queryParamMap.subscribe(params=>{
    
    //     this.category=params.get('category') as string;
    //     this.filterProducts = (this.category) ? (this.products?.filter(p=>p.category.toLowerCase()=== this.category)): this.products
  
    //   });

    /*
       this.categories$ = categoryService.getCategories().snapshotChanges().pipe(map(pt=>{  
      // in order to get the key of each product needs to uses the snapshotchanges. 
      return pt.map(
        ele=>({key:ele.payload.key,...ele.payload.val() as {}})
      )
     
    }))
     */
    
    productService.getAll().snapshotChanges().pipe(switchMap(eles=>{
  
      
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

      return route.queryParamMap;
    }
    )
    ). subscribe(params=>{
    
        this.category=params.get('category') as string;
        this.filterProducts = (this.category) ?
         this.products?.filter(p=>p.category.toLowerCase()=== this.category)
         : this.products
  
      });



    
   }

  async ngOnInit() {
     (await this.shoppingCartService.getCart())
     .subscribe((sc:any)=>this.shoppingCart=sc);
    
  }

  ngOnDestroy(): void {
      this.subscription!.unsubscribe();
  }

}
