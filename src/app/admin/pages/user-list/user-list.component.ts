import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  userData: any;
  constructor(private router: Router, private activatedRoute: ActivatedRoute) { 
    this.userData = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit(): void {
  }

  addUser() {
    this.router.navigate(['../add-user'], {
      relativeTo: this.activatedRoute
    })
  }

}
