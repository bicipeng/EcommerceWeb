import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
//import { AngularFireModule } from '@angular/fire';
// import {AngularFireDatabaseModule} from 'angularfire2/database'
// import {AngularFireAuthModule} from 'angularfire2/auth';
// import { AngularFirestoreModule } from '@angular/fire/firestore';
// import { AngularFireStorageModule } from '@angular/fire/storage';
// import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { environment } from 'src/environments/environment';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ProductsComponent } from './products/products.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { LoginComponent } from './login/login.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { AuthService } from './Services/auth.service';
import { AuthGuardService } from './Services/auth-guard.service';
import { UserService } from './Services/user.service';
import { AdminAuthGuardService } from './Services/admin-auth-guard.service';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import { CategoriesService } from './Services/categories.service';
import { ProductService } from './Services/product.service';
import { CardComponent } from './card/card.component';
import { ProductFilterComponent } from './products/product-filter/product-filter.component';
import { ProductQuantityComponent } from './product-quantity/product-quantity.component';
import { OrderService } from './Services/order.service';

//import { ProductComponent } from './Services/product/product.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CheckOutComponent,
    ShoppingCartComponent,
    ProductsComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    LoginComponent,
    ProductFormComponent,
    CardComponent,
    ProductFilterComponent,
    ProductQuantityComponent,
   
 
 
    
  ],
  imports: [
  
    RouterModule.forRoot([
      {path:'', component:ProductsComponent}, 
      {path:'login', component:LoginComponent},
      {path:'products', component:ProductsComponent},
      {path:'shopping-cart', component:ShoppingCartComponent},
      {path:'check-out', component:CheckOutComponent, canActivate:[AuthGuardService]},
      {path:"my/orders", component:MyOrdersComponent, canActivate:[AuthGuardService]},
      {path:'order-success/:id', component:OrderSuccessComponent,canActivate:[AuthGuardService]},
      {path:'admin/products', component:AdminProductsComponent, canActivate:[AuthGuardService,AdminAuthGuardService]},
      {path:'admin/products/:id', component:ProductFormComponent, canActivate:[AuthGuardService,AdminAuthGuardService]},
      {path:'admin/products/new', component:ProductFormComponent, canActivate:[AuthGuardService,AdminAuthGuardService]},
      {path:'admin/orders', component:AdminOrdersComponent,canActivate:[AuthGuardService,AdminAuthGuardService]}

    ]),
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,

    provideFirebaseApp(() => initializeApp(environment.firebase)),
    AngularFireAuthModule,
    AngularFireModule ,
    AngularFireStorageModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule

  ],
  providers: [
    { provide: FIREBASE_OPTIONS, useValue: environment.firebase },
    AuthService,
    AuthGuardService,
    UserService,
    CategoriesService,
    ProductService,
    OrderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
