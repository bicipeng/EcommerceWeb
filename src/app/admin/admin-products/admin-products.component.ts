import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable,Subscription } from 'rxjs';
import { ProductService } from 'src/app/Services/product.service';
import { map } from 'rxjs/operators';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Product } from 'src/app/Models/Product';



@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit,OnDestroy {
  products$:Observable<any>;
  products!: any;
  filteredProducts:any=[];
  subscription:Subscription;
  
  
  constructor(private productService:ProductService) {  

     
      this.products$=  this.productService.getAll().snapshotChanges().pipe(map(pt=>{
    
        // in order to get the key of each product needs to uses the snapshotchanges. 
        return pt.map(
          ele=>({key:ele.payload.key,...ele.payload.val() as {}})
        )
       
      }))
      this.subscription = this.products$.subscribe(prts=> this.products= prts)
      this.filteredProducts = this.products$.subscribe(prts =>this.filteredProducts = prts)
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
  }
  filter(query:string){
   
    this.products$ =(query)? this.products$.pipe(
      map(items => 
       items.filter((item:any) => item.title.toLowerCase().indexOf(query) > -1)) ) : ( this.products$ = this.products);
  }

 

}
