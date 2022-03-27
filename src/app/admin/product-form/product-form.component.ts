import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';
import { Category } from 'src/app/Models/Category';
import { CategoriesService } from 'src/app/Services/categories.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  //categories: Observable<any>;
  constructor(public categoryService:CategoriesService,private db:AngularFireDatabase) { 
  
    
  }
   
  ngOnInit(): void {
    // this.categoryService.getCategories().subscribe((cates)=>{
    //   cates.forEach((cate)=>{
    //     this.categories= cate;
    //     console.log(this.categories)
    //   })
    // })
  }

  getCate(){
  this.db.list<Category>('/categories')
  .valueChanges().subscribe(p=>console.log("here",p))
         
        
  }

}
