import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';
import { Category } from 'src/app/Models/Category';
import { CategoriesService } from 'src/app/Services/categories.service';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  categories$: Observable<any>;
  constructor(public categoryService:CategoriesService,private productService:ProductService) { 
  this.categories$ = categoryService.getCategories();
    
  }
   
  ngOnInit(): void {

  }

  // getCateTest(){
  // this.db.list('/categories')
  // .valueChanges().subscribe(p=>console.log("here",p))   
  // }

  save(product:any){
    this.productService.create(product);

  }

}
