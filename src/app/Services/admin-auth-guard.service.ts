import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from './auth.service';
import { map,switchMap } from 'rxjs/operators';
import { UserService } from './user.service';
import {of,Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuardService implements CanActivate{

  constructor(private auth:AuthService,private userService:UserService) { }

  canActivate():Observable<boolean>{
    //this user is what you log in with 
      // const user = this.auth.user$.pipe(
      // map(user => {
      //   if(user)
      //   return  this.userService.get(user.uid)
      //   return;
      // }
      // ));
      // const isAdmin = user.pipe(map(appUser =>appUser.isAdmin
      //   ))
      // return true;
      return this.auth.user$
      .pipe(switchMap(
        (user) => 
         this.userService.get(user!.uid).valueChanges()  
  
        ))
      .pipe(map(appUser => appUser!.isAdmin));
     }
  }



