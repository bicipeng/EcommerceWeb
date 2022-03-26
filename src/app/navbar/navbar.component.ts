import { Component, OnInit } from '@angular/core';
import { User } from '../Models/User';
import { AuthService } from '../Services/auth.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  appUser?:User;
  constructor(private auth: AuthService ) { 
    auth.appUser$.subscribe(user=>this.appUser = user!);
   }

  ngOnInit(): void {
  }
  logout(){
    this.auth.logOut();
  
    
  }

}
