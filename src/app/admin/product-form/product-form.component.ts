import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Category } from 'src/app/Models/Category';
import { CategoriesService } from 'src/app/Services/categories.service';
import { ProductService } from 'src/app/Services/product.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  categories$: Observable<any>;
  product:any;
  constructor(
    private categoryService:CategoriesService,
    private productService:ProductService,
    private router:Router,
    private route:ActivatedRoute
    ) { 

  this.categories$ = this.categoryService.getCategories();
  let id = this.route.snapshot.paramMap.get('id');
  if(id){
    this.productService.getOne(id).pipe(take(1)).subscribe(p=>this.product=p);
  }
    
  }
   
  ngOnInit(): void {

  }

  // getCateTest(){
  // this.db.list('/categories')
  // .valueChanges().subscribe(p=>console.log("here",p))   
  // }

  save(product:any){
    this.productService.create(product);
    console.log("Form submitted!");
    this.router.navigate(['/admin/products']);

  }



}
