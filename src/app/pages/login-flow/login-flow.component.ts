import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login-flow',
  templateUrl: './login-flow.component.html',
  styleUrls: ['./login-flow.component.scss']
})
export class LoginFlowComponent implements OnInit {

  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
   
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    // private authenticationService : AuthenticationService
  ) { }
   
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }
   
  // for accessing to form fields
  get fval() { return this.loginForm.controls; }
   
  onFormSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      console.log("invalid")
      return;
    }
   
    this.loading = true;
    // this.authenticationService.login(this.fval.email.value, this.fval.password.value)
    // .subscribe(
    //   data => {
    //   this.router.navigate(['../']);
    // },
    // error => {
    // // this.toastr.error(error.error.message, 'Error');
    //   this.loading = false;
    // });
  }

}
