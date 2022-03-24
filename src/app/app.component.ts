import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { userInfo } from 'os';
import { AuthService } from './Services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private auth:AuthService, private route:Router){
    this.auth.user$.subscribe(user=>{
      if(user){
        let returnUrl = localStorage.getItem('returnUrl');
        route.navigateByUrl(returnUrl || '/');
      }
    })
  }
}
