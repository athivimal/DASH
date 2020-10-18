import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {
  @Input() user = null;
  @Input() page = '';
  @Output() register:any = new EventEmitter();
  registerForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  model = {user: {}};
  deviceList = ['Ammeter', 'Voltmeter', 'esp meter']
  constructor(private formBuilder: FormBuilder) { }
   
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      contact: ['', [Validators.required, Validators.pattern(new RegExp('[0-9]{10}')), Validators.minLength(10), Validators.maxLength(10)]],
      email: ['', [Validators.required,Validators.email]],
      password: ['', Validators.required],
      device: ['', Validators.required],
      input: ['', Validators.required]
    });
      if(this.user) {
        this.model.user = this.user;
        this.registerForm.setValue({
          username: this.user.username,
          contact: this.user.contact,
          email: this.user.email,
          password: this.user.password,
          device: this.user.device,
          input: this.user.input
        })
      }
  }
   
  // for accessing to form fields
  get fval() { return this.registerForm.controls; }
   
  onFormSubmit() {
    this.model.user['username'] = this.registerForm.value.username;
    this.model.user['contact'] = this.registerForm.value.contact;
    this.model.user['email'] = this.registerForm.value.email;
    this.model.user['password'] = this.registerForm.value.password;
    this.model.user['device'] = this.registerForm.value.device;
    this.model.user['input'] = this.registerForm.value.input;
    this.submitted = true;
    if (this.registerForm.invalid) {
      console.log("invalid", this.registerForm.controls)
      return;
    }
    this.register.emit(this.model.user);

    // this.router.navigate(['../userlist'],{
    //   relativeTo: this.activatedRoute
    // });
   
    this.loading = true;
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
}
