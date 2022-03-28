import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductService } from 'src/app/Services/product.service';
import { map } from 'rxjs/operators';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { elementAt } from 'rxjs-compat/operator/elementAt';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {
  products$:Observable<any>;
  products :any;
  
  
  constructor(private productService:ProductService,
    private db:AngularFireDatabase) {  
  //  this.products$ =  this.productService.getAll();
  //  console.log(this.products$)
  //  this.product = this.products$.pipe(map(changes => {
  //    return changes.map((ele: { payload: { key: any; val: () => any; }; })=>({key:ele.payload.key,...ele.payload.val()}))
  //  }))
      
      this.products$=  this.productService.getAll().snapshotChanges().pipe(map(pt=>{
        console.log(pt)
        // this.products=pt;
        return pt.map(
          ele=>({key:ele.payload.key,...ele.payload.val() as {}})
        )
      }))

      //this.products$=  this.productService.getAll();
  }

  ngOnInit(): void {
  }

}
