import { VoltmeterComponent } from './../voltmeter/voltmeter.component';
import { AmmeterComponent } from './../ammeter/ammeter.component';
import { UserDevicesComponent } from './user-devices/user-devices.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginFlowComponent } from './login-flow/login-flow.component';
import { AuthGuard } from '../helpers/auth.guard';
import { EspMeterComponent } from '../esp-meter/esp-meter.component';

const routes: Routes = [
  {
    path: 'user',
    component: UserDevicesComponent , canActivate: [AuthGuard],
    children:[
      { path: '', redirectTo: 'Espmeter', pathMatch: 'full' },
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
    path: 'login',
    component: LoginFlowComponent
  },
  
  {
    path: '',
    redirectTo: '/user',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
