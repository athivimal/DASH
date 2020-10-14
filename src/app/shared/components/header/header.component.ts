import { Router } from '@angular/router';
import { AuthenticationService } from './../../../auth-services/authentication.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  headerData: any;
  menuToggle: any;
  activeLink = '';
  isLogoutEnable = false;
  activeUser: any;

  constructor(private authService: AuthenticationService, private router: Router) {}

  ngOnInit(): void {
    this.activeUser = JSON.parse(localStorage.getItem('currentUser'));
    if (!this.activeUser) {
      this.loginCheck();
    }
  }

  loginCheck() {
    this.authService.currentUser.subscribe(data => {
      this.activeUser = data;
    })
  }

  menuDisplay() {
    this.menuToggle = true;
  }

  closeMenu() {
    this.menuToggle = false;
  }

  // routeToPage(navigation) {
  //   this.activeLink = navigation.link;
  //   this.router.navigate([navigation.link], {
  //     relativeTo: this.activatedRoute
  //   });
  //   this.menuToggle = false;
  // }

  logout() {
    this.loginCheck();
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}
