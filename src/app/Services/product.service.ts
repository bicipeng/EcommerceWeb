import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { Product } from '../Models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private db: AngularFireDatabase) { }

  create(product:any){
  return  this.db.list('/products').push(product);
  }

  getAll():AngularFireList<Product>{
    return this.db.list('/products');
  }
  //get product by id from firebase
  getOne(productId:string){
    return this.db.object('/products/' + productId).valueChanges();
  }
  upDate(productId:string,product:any){
    return this.db.object("/products/"+productId).update(product);

  }
  deleteProduct(productId:string){
    return this.db.object("/products/" + productId).remove();
  }
}
