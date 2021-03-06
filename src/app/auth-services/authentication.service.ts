import { Users } from './../shared/config/users';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
 
@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;
  userList: any;
  
  constructor(public users: Users) {
    this.userList = users.userList;
    // this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUserSubject = new BehaviorSubject<any>(localStorage.getItem('currentUser'));
    this.currentUser = this.currentUserSubject.asObservable();
  }
  
  public get currentUserValue(): any {
    return this.currentUserSubject.value;
  }
 
  login(username: string, password: string) {
    let user = this.userList.find(user => {
      if(user.username === username && user.password === password) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
        return true;
      }
    });
    console.log(user,"User");
    return of(user);
    // return this.http.post<any>(`auth/login`, { username, password })
    //   .pipe(map(user => {
    //     if (user && user.token) {
    //     // store user details in local storage to keep user logged in
    //       localStorage.setItem('currentUser', JSON.stringify(user.result));
    //       this.currentUserSubject.next(user);
    //   }
    //   return user;
    //   })
    // );
  }
    logout() {
      // remove user data from local storage for log out
      localStorage.removeItem('currentUser');
      localStorage.removeItem('selectedUser');
      this.currentUserSubject.next(null);
    }
  }