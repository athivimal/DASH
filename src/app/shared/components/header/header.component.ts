import { AuthenticationService } from './../../../auth-services/authentication.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HeaderList } from './../../config/header-list';
import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
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

  constructor(public headerContents: HeaderList, private router: Router, private activatedRoute: ActivatedRoute, private location: Location, private authService: AuthenticationService) { 
    this.headerData = headerContents.contents;
  }

  ngOnInit(): void {
    console.log(this.location.path(),"path")
    if (this.location.path()) {
      this.activeLink = this.location.path();
    }
    else {
      this.activeLink = '/home';
    }
    this.loginCheck();
  }

  loginCheck() {
    this.authService.currentUser.subscribe(data => {
      if (data) {
        this.isLogoutEnable = true;
      }
      else {
        this.isLogoutEnable = false;
      }
    })
  }

  menuDisplay() {
    this.menuToggle = true;
  }

  closeMenu() {
    this.menuToggle = false;
  }

  routeToPage(navigation) {
    this.activeLink = navigation.link;
    this.router.navigate([navigation.link], {
      relativeTo: this.activatedRoute
    });
    this.menuToggle = false;
  }

  logout() {
    this.authService.logout();
  }

}
