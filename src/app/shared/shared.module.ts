import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimatedGaugeComponent } from './components/animated-gauge/animated-gauge.component';
import { GraphDashboardComponent } from './container/graph-dashboard/graph-dashboard.component';


@NgModule({
  declarations: [AnimatedGaugeComponent, GraphDashboardComponent],
  imports: [
    CommonModule, RouterModule
  ],
  exports: [ AnimatedGaugeComponent, GraphDashboardComponent]
})
export class SharedModule { }
