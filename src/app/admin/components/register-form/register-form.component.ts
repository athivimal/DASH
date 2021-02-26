import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
  FormArray
} from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
// import { AdminService } from '../../services/admin.service';

@Component({
  selector: "app-register-form",
  templateUrl: "./register-form.component.html",
  styleUrls: ["./register-form.component.scss"]
})
export class RegisterFormComponent implements OnInit {
  @Input() user = null;
  @Input() page = "";
  @Output() register: any = new EventEmitter();
  registerForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  model = { user: {} };
  deviceList = ["Ammeter", "Voltmeter", "esp meter"];

  defaultCharts = [
    { value: "Animated gauge", checked: false },
    { value: "Pictorial chart", checked: false },
    { value: "Micro Charts", checked: false },
    { value: "Gantt Charts", checked: false },
    { value: "Step Line Chart", checked: false }
  ];
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    console.log(this.user, "usssusususu");
    this.registerForm = this.formBuilder.group({
      username: ["", [Validators.required]],
      name: ["", [Validators.required]],
      contact: [
        "",
        [
          Validators.required,
          Validators.pattern(new RegExp("[0-9]{10}")),
          Validators.minLength(10),
          Validators.maxLength(10)
        ]
      ],
      email: ["", [Validators.required, Validators.email]],
      password: ["", Validators.required],
      device: ["", Validators.required],
      charts: this.formBuilder.array(
        [],
        [Validators.required, Validators.maxLength(3)]
      ),
      input: ["", Validators.required]
    });

    if (this.user) {
      this.model.user = this.user;
      const data = {
        username: this.user.username,
        name: this.user.name,
        contact: this.user.contact,
        email: this.user.email,
        password: this.user.password,
        device: this.user.device,
        charts: [],
        input: this.user.input
      };
      this.registerForm.patchValue(data);
      const registerFormChart: FormArray = <FormArray>(
        this.registerForm.get("charts")
      );
      this.user.chart.forEach(chart => {
        registerFormChart.push(new FormControl(chart));
        this.defaultCharts.forEach((obj, index) => {
          if (obj.value === chart) {
            obj.checked = true;
          }
        });
      });
    }
  }

  // for accessing to form fields
  get fval() {
    return this.registerForm.controls;
  }
  onCheckboxChange(e) {
    const charts: FormArray = <FormArray>this.registerForm.get("charts");
    if (e.target.checked) {
      charts.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      charts.controls.forEach(item => {
        if (item.value == e.target.value) {
          charts.removeAt(i);
          return;
        }
        i++;
      });
    }
  }
  onFormSubmit() {
    this.model.user["username"] = this.registerForm.value.username;
    this.model.user["contact"] = this.registerForm.value.contact;
    this.model.user["email"] = this.registerForm.value.email;
    this.model.user["password"] = this.registerForm.value.password;
    this.model.user["device"] = this.registerForm.value.device;
    this.model.user["input"] = this.registerForm.value.input;
    this.submitted = true;
    if (this.registerForm.invalid) {
      console.log("invalid", this.registerForm.controls);
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
