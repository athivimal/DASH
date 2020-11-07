import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { AdminRoutingModule } from './admin-routing.module';
import { UserListComponent } from './pages/user-list/user-list.component';
import { UserDetailsComponent } from './pages/user-details/user-details.component';
import { AddUserComponent } from './pages/add-user/add-user.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { EditUserComponent } from './pages/edit-user/edit-user.component';
@NgModule({
  declarations: [UserListComponent, UserDetailsComponent, AddUserComponent, RegisterFormComponent, EditUserComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    MatTableModule
  ]
})
export class AdminModule { }
