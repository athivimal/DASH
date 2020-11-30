import { Router, ActivatedRoute } from '@angular/router';
import { AdminService } from './../../services/admin.service';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  selectedUser: any;
  constructor(private adminService: AdminService, private router: Router, private activatedRoute: ActivatedRoute, private location: Location) { }

  ngOnInit(): void {
    this.selectedUser = JSON.parse(localStorage.getItem('selectedUser'));
  }

  deleteUser() {
    this.navigateToUserList();
  }

  back() {
    this.navigateToUserList();
  }

  navigateToUserList() {
    this.router.navigate(['../../../userlist'],{
      relativeTo: this.activatedRoute
    });
  }
  routeTabs(device){
    this.router.navigate([device], {
      relativeTo: this.activatedRoute
    })
  }
}