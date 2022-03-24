import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private AuthService: AuthService) { }

  ngOnInit(): void {
  }


  login(){

  this.AuthService.logIn();
  
  }
/*

import {AngularFireAuth} from '@angular/fire/auth';
import {auth} from 'firebase/app'; // Wrong 
import {auth} from 'firebase'; // Good
...
constructor(private afAuth: AngularFireAuth )
...
const provider = new auth.GoogleAuthProvider();
const credential = await this.afAuth.signInWithPopup(provider);



*/
}
