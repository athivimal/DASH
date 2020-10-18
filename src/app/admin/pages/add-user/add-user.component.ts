import { AdminService } from './../../services/admin.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  registerForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  user: any;
  model = {user: {}};
  deviceList = ['Ammeter', 'Voltmeter', 'esp meter']
  constructor(private formBuilder: FormBuilder, private router: Router, private activatedRoute: ActivatedRoute, private adminService: AdminService) { }
   
  ngOnInit() {
  }

  registerUser(user) {
    this.router.navigate(['../'], {
      relativeTo: this.activatedRoute
    })
  }
   
  // for accessing to form fields
  
    // this.authenticationService.login(this.fval.username.value, this.fval.password.value)
    // .subscribe(
    //   data => {
    //   // this.router.navigate(['../']);
    //   console.log(data,"Login?")
    // },
    // error => {
    // // this.toastr.error(error.error.message, 'Error');
    //   this.loading = false;
    // });
}
