import { Router, ActivatedRoute } from '@angular/router';
import { AdminService } from './../../services/admin.service';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { UtilityService } from 'src/app/shared/services/utility.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  selectedUser: any;
  identifier: any;

  constructor(private adminService: AdminService, private router: Router, private activatedRoute: ActivatedRoute, private location: Location, private utilityService: UtilityService) { }

  ngOnInit(): void {
    this.selectedUser = JSON.parse(localStorage.getItem('selectedUser'));
  }

  routeTabs(device){
    this.utilityService.selectedIdentifier.next(device.identifier);
    this.identifier = device.type;
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
  // routeTabs(device){
  //   this.router.navigate([device], {
  //     relativeTo: this.activatedRoute
  //   })
  // }
}