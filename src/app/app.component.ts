import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { of } from 'rxjs';

import {switchMap, map } from 'rxjs/operators';
import { AuthService } from './Services/auth.service';
import { UserService } from './Services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private auth:AuthService, private route:Router, private userService:UserService){
    this.auth.user$.subscribe(user=>{
      if(user){
        this.userService.save(user);
        let returnUrl = localStorage.getItem('returnUrl');
        route.navigateByUrl(returnUrl || '/');
      }
    })
  }



}
