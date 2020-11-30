import { EspMeterComponent } from './../esp-meter/esp-meter.component';
import { EditUserComponent } from './pages/edit-user/edit-user.component';
import { UserDetailsComponent } from './pages/user-details/user-details.component';
import { AddUserComponent } from './pages/add-user/add-user.component';
import { UserListComponent } from './pages/user-list/user-list.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AmmeterComponent } from '../ammeter/ammeter.component';
import { VoltmeterComponent } from '../voltmeter/voltmeter.component';


const routes: Routes = [
  // {
      
      {
        path: 'userlist',
        component: UserListComponent
      },
      {
        path: 'user/:id',
        children: [
          {
            path: '',
            component: UserDetailsComponent,
            children: [
              {
                path: '',
                component: EspMeterComponent
              },
              {
                path: 'Ammeter',
                component: AmmeterComponent,
              },
              {
                path: 'Voltmeter',
                component: VoltmeterComponent,
              },
              {
                path: 'Espmeter',
                component: EspMeterComponent,
              },
            ]
          },
          {
            path: 'edit-user',
            component: EditUserComponent
          }
        ]
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