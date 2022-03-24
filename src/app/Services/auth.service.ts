import { Injectable } from '@angular/core';
import firebase from "firebase/compat/app";
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
user$:Observable<firebase.User| null>;
  constructor(public afAuth: AngularFireAuth) {
    this.user$ = afAuth.authState;
   }

  logIn(){
    //service cannot be unit testing 
    const provider = new firebase.auth.GoogleAuthProvider();
   return this.afAuth.signInWithRedirect(provider);
  }
  //log out 
  logOut(){
  
    return this.afAuth.signOut();
  }
}
