import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedInUserId: string = null;
  constructor() {

   }
   
   isLoggedIn() {
    this.loggedInUserId = localStorage.getItem('loggedInUserId');
    console.log('id',this.loggedInUserId);
    if (this.loggedInUserId) {
      return true;
    }
    return false;
   }
}
