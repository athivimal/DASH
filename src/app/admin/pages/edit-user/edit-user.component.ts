import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  selectedUser: any;
  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.selectedUser = JSON.parse(localStorage.getItem('selectedUser'));
  }

  editUser(user) {
    this.router.navigate(['../'], {
      relativeTo: this.activatedRoute
    })
  }

}
