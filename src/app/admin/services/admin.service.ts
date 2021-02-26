import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  selectedUser$: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  selectedUser = this.selectedUser$.asObservable();
  constructor() { }

  setSelectedUser(user) {
    localStorage.setItem('selectedUser',JSON.stringify(user));
    this.selectedUser$.next(user);
  }
}
