import { Injectable } from '@angular/core';
import { AngularFireDatabase,AngularFireObject} from '@angular/fire/compat/database';
import firebase from "firebase/compat/app";
import { User } from '../Models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private db:AngularFireDatabase) { }

  save(user:firebase.User){
   
    this.db.object('/users/' + user.uid).update({
      name:user.displayName,
      email:user.email
    })
  }

  //get user obj based on uid from firebase
  get(uid:string):AngularFireObject<User>{
console.log("in user.service get user")
    return this.db.object('/users/' + uid);
  }
}
