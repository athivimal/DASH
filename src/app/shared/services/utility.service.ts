import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {
  selectedIdentifier = new BehaviorSubject(null);
  constructor() { }
}
