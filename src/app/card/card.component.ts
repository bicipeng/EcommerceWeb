import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../Models/Product';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
 
  @Input('p') p!:Product;
  @Input() showActions!:boolean;
  @Input() product!:Product;
  // products:Product[]=[];
  constructor() {
  // this.products$?.subscribe(ele=> this.products = ele)
   }



}
