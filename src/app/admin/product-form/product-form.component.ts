import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable ,Subscription} from 'rxjs';
import { Category } from 'src/app/Models/Category';
import { CategoriesService } from 'src/app/Services/categories.service';
import { ProductService } from 'src/app/Services/product.service';
import { map, take } from 'rxjs/operators';
import { Product } from 'src/app/Models/Product';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
categories$: Observable<any>;
product:any= {}; 
  id:string;
  categories:[]=[];
  // subscription:Subscription;
  

  constructor(
    private categoryService:CategoriesService,
    private productService:ProductService,
    private router:Router,
    private route:ActivatedRoute
    ) { 
      this.categories$ = this.categoryService.getCategories().valueChanges();
  this.id = this.route.snapshot.paramMap.get('id')!;
  if(this.id){
//     categoryService.getCategories().snapshotChanges().pipe(map(pt=>{ 
//       // in order to get the key of each product needs to uses the snapshotchanges.
//       return pt.map(
//         ele=>({key:ele.payload.key,...ele.payload.val() as {}})
//       )
    
//     }
//  ))
 
 this.productService.getOne(this.id).pipe(take(1)).pipe(map((pt:any)=>
   // in order to get the key of each product needs to uses the snapshotchanges.
       
            ({key:pt.payload.key,...pt.payload.val() as {}})
        
     )).subscribe(pt=>this.product=pt)
  }

    
  }
   
  ngOnInit(): void {

  }


  save(product:any){
    console.log("if productiD IS NEW", this.id ==="new")
    if(this.id !=="new") this.productService.upDate(this.id,product);
    else this.productService.create(product);
    console.log("onSave",this.product)
    console.log("Form submitted!");

    this.router.navigate(['/admin/products']);

  }

  delete(){
    if(!confirm("Are you sure you want to delete the current product ?")) return;
    
    this.productService.deleteProduct(this.id);
    this.router.navigate(['/admin/products']);
  }
  checkId(){
    console.log("if productiD IS NEW", this.id ==="new")
  }

}
