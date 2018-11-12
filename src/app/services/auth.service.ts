import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedInUserId: string = null;
  constructor() {

   }
   
   isLoggedIn() {
     console.log('is logged in called')
    this.loggedInUserId = localStorage.getItem('loggedInUserId');
    console.log('id',this.loggedInUserId);
    if (this.loggedInUserId) {
      return true;
    }
    return false;
   }
}
