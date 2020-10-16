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
    this.selectedUser$.next(user);
  }
}
