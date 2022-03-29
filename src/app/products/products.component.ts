import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Category } from '../Models/Category';
import { Product } from '../Models/Product';
import { ProductService } from '../Services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

products?: Product[]=[];
filterProducts?: Product[]=[];
category?:string;


  constructor(
    route:ActivatedRoute,
    productService:ProductService, 
   ) {

    // productService.getAll().valueChanges().subscribe(eles =>{
    //   this.products = eles;
    //   route.queryParamMap.subscribe(params=>{
    
    //     this.category=params.get('category') as string;
    //     this.filterProducts = (this.category) ? (this.products?.filter(p=>p.category.toLowerCase()=== this.category)): this.products
  
    //   });

    // } );
    productService.getAll().valueChanges().pipe(switchMap(eles=>{
      this.products = eles;
      return route.queryParamMap;
    })). subscribe(params=>{
    
        this.category=params.get('category') as string;
        this.filterProducts = (this.category) ? (this.products?.filter(p=>p.category.toLowerCase()=== this.category)): this.products
  
      });



    
   }

  ngOnInit(): void {
    
  }
  

}
