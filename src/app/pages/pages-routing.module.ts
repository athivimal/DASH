import { ProductsComponent } from './products/products.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginFlowComponent } from './login-flow/login-flow.component';
import { AuthGuard } from '../helpers/auth.guard';

const routes: Routes = [
  {
    path: 'home',
    component: LandingPageComponent
  },
  {
    path: 'about-us',
    component: AboutUsComponent
  },
  {
    path: 'contact-us',
    component: ContactUsComponent
  },
  {
    path: 'products',
    component: ProductsComponent , canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginFlowComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
