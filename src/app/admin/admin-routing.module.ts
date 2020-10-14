import { AddUserComponent } from './pages/add-user/add-user.component';
import { UserListComponent } from './pages/user-list/user-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  // {
      
      {
        path: 'userlist',
        component: UserListComponent
      },
      {
        path: 'user/:id',
        component: UserListComponent
      },
      {
        path: 'add-user',
        component: AddUserComponent
      },
      {
        path: '',
        redirectTo: 'userlist',
        pathMatch: 'full'
      }
    // ]
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
