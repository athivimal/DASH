import { RouterModule } from '@angular/router';
import { HeaderList } from './config/header-list';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';


@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule, RouterModule
  ],
  exports: [
    HeaderComponent
  ],
  providers: [ HeaderList ]
})
export class SharedModule { }
