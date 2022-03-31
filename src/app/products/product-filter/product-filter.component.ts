import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/Models/Product';
import { CategoriesService } from 'src/app/Services/categories.service';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})
export class ProductFilterComponent implements OnInit {
 
  @Input() category?:string;
  categories$ ?: Observable<any>;
  



  constructor( categoryService:CategoriesService) {  
    this.categories$ = categoryService.getCategories().snapshotChanges().pipe(map(pt=>{  
      // in order to get the key of each product needs to uses the snapshotchanges. 
      return pt.map(
        ele=>({key:ele.payload.key,...ele.payload.val() as {}})
      )
     
    }))
   }

  ngOnInit(): void {
  }

}
