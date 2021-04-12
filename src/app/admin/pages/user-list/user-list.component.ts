import { AdminService } from './../../services/admin.service';
import { Users } from 'src/app/shared/config/users';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  userData: any;
  displayedColumns = ['name', 'device', 'input'];
  dataSource: any;
  start: number = 0;
  limit: number = 15;
  end: number = this.limit + this.start;
  selectedRowIndex: number = null;
  route: any;
  returnUrl: any;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private users: Users, private adminService: AdminService) { 
    this.userData = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit(): void {
    this.adminService.setSelectedUser(null);
    this.dataSource = this.users.userList;
    this.dataSource = this.getTableData(this.start, this.end);
    this.returnUrl = '/';
    this.updateIndex();
  }
  
  back(){
    this.router.navigate([this.returnUrl], {
      relativeTo: this.activatedRoute
    })
  }

  addUser() {
    this.router.navigate(['../add-user'], {
      relativeTo: this.activatedRoute
    })
  }

  onTableScroll(e) {
    const tableViewHeight = e.target.offsetHeight // viewport
    const tableScrollHeight = e.target.scrollHeight // length of all table
    const scrollLocation = e.target.scrollTop; // how far user scrolled
    // If the user has scrolled within 200px of the bottom, add more data
    const buffer = 200;
    const limit = tableScrollHeight - tableViewHeight - buffer;    
    if (scrollLocation > limit) {
      let data = this.getTableData(this.start, this.end);;
      this.dataSource = this.dataSource.concat(data);
      this.updateIndex();
    }
  }

  getTableData(start, end) {
    return this.users.userList.filter((value, index) => index >= start && index < end)
  }

  updateIndex() {
    this.start = this.end;
    this.end = this.limit + this.start;
  }

  selectedRow(row) {
    this.adminService.setSelectedUser(row);
    this.router.navigate(['../user', row.id], {
      relativeTo: this.activatedRoute
    })
    console.log('selectedRow', row)
  }
}