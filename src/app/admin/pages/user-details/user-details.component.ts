import { Router, ActivatedRoute } from '@angular/router';
import { AdminService } from './../../services/admin.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  selectedUser: any;
  constructor(private adminService: AdminService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.selectedUser = JSON.parse(localStorage.getItem('selectedUser'));
  }

  deleteUser() {
    this.router.navigate(['../../userlist'],{
      relativeTo: this.activatedRoute
    })
  }
}
