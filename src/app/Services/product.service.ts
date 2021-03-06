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

  getAll(){
    return this.db.list<Product>('/products');
  }
  //get product by id from firebase
  getOne(productId:string){
    return this.db.object<Product>('/products/' + productId).snapshotChanges();
    
  }

  upDate(productId:string,product:any){
    return this.db.object("/products/"+productId).update(product);

  }
  deleteProduct(productId:string){
    return this.db.object("/products/" + productId).remove();
  }
}
