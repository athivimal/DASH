import { Users } from './config/users';
import { RouterModule } from '@angular/router';
import { HeaderList } from './config/header-list';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { UserCardComponent } from './components/user-card/user-card.component';

@NgModule({
  declarations: [HeaderComponent, UserCardComponent],
  imports: [
    CommonModule, RouterModule
  ],
  exports: [
    HeaderComponent, UserCardComponent
  ],
  providers: [ HeaderList, Users ]
})
export class SharedModule { }
