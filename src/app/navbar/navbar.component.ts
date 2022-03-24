import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from "firebase/compat/app";
import { AuthService } from '../Services/auth.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public AuthService: AuthService ) {  }

  ngOnInit(): void {
  }
  logout(){
    this.AuthService.logOut();
  
    
  }

}
