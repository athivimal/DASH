import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { LoginFlowComponent } from './login-flow/login-flow.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductsComponent } from './products/products.component';


@NgModule({
  declarations: [LoginFlowComponent, AboutUsComponent, ContactUsComponent, LandingPageComponent, ProductsComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class PagesModule { }
