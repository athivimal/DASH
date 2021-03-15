import { Users } from './config/users';
import { RouterModule } from '@angular/router';
import { HeaderList } from './config/header-list';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { AnimatedGaugeComponent } from './components/animated-gauge/animated-gauge.component';
import { PictorialSliceShapeComponent } from './components/pictorial-slice-shape/pictorial-slice-shape.component';
import { PictorialChartComponent } from './components/pictorial-chart/pictorial-chart.component';
import { AnimatedGaugeBlueComponent } from './components/animated-gauge-blue/animated-gauge-blue.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { GraphDashboardComponent } from './container/graph-dashboard/graph-dashboard.component';


@NgModule({
  declarations: [HeaderComponent, UserCardComponent, AnimatedGaugeComponent, PictorialSliceShapeComponent, PictorialChartComponent, AnimatedGaugeBlueComponent, SideNavComponent, GraphDashboardComponent],
  imports: [
    CommonModule, RouterModule
  ],
  exports: [
    HeaderComponent, UserCardComponent, AnimatedGaugeComponent, PictorialSliceShapeComponent, PictorialChartComponent, AnimatedGaugeBlueComponent, SideNavComponent, GraphDashboardComponent
  ],
  providers: [ HeaderList, Users ]
})
export class SharedModule { }
