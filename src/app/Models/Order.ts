import { Time } from "@angular/common";
import { Product } from "./Product";

export interface Order{
key:string,
user:{
    firstName:string,
    lastName:string,
    address:string,
    city:string
},
product:Product[],
orderDate:Time


}