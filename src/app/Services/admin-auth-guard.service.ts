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
       //admin user exits, so use the ! to by pass the Object is possibly null error 
       return this.auth.appUser$
      .pipe(map(appUser => appUser!.isAdmin));
     }
  }



