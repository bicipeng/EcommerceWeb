import { Injectable } from '@angular/core';
import firebase from "firebase/compat/app";
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
user$:Observable<firebase.User| null>;
  constructor(public afAuth: AngularFireAuth, private route:ActivatedRoute) {
    this.user$ = afAuth.authState;
   }

  logIn(){
    //store the returning url to reroute before we leave the page to google auth 
    let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl',returnUrl);
    //service cannot be unit testing 
    const provider = new firebase.auth.GoogleAuthProvider();
   return this.afAuth.signInWithRedirect(provider);

  }
  //log out 
  logOut(){
  
    return this.afAuth.signOut();
  }
}
