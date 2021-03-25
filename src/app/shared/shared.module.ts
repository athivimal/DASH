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
import { SpeedometerComponent } from './components/speedometer/speedometer.component';
import { TachometerComponent } from './components/tachometer/tachometer.component';
import { IntakeAirTemperatureComponent } from './components/intake-air-temperature/intake-air-temperature.component';
import { AbsoluteBarometricPressureComponent } from './components/absolute-barometric-pressure/absolute-barometric-pressure.component';
import { BatteryComponent } from './components/battery/battery.component';
import { EngineCoolantTemperatureComponent } from './components/engine-coolant-temperature/engine-coolant-temperature.component';
import { IntakeManifoldAbsolutePressureComponent } from './components/intake-manifold-absolute-pressure/intake-manifold-absolute-pressure.component';
import { AirFlowRateComponent } from './components/air-flow-rate/air-flow-rate.component';
import { ThrottlePositionComponent } from './components/throttle-position/throttle-position.component';


@NgModule({
  declarations: [HeaderComponent, UserCardComponent, AnimatedGaugeComponent, PictorialSliceShapeComponent, PictorialChartComponent, AnimatedGaugeBlueComponent, SideNavComponent, GraphDashboardComponent, SpeedometerComponent, TachometerComponent, IntakeAirTemperatureComponent, AbsoluteBarometricPressureComponent, BatteryComponent, EngineCoolantTemperatureComponent, IntakeManifoldAbsolutePressureComponent, AirFlowRateComponent, ThrottlePositionComponent],
  imports: [
    CommonModule, RouterModule
  ],
  exports: [
    HeaderComponent, UserCardComponent, AnimatedGaugeComponent, PictorialSliceShapeComponent, PictorialChartComponent, AnimatedGaugeBlueComponent, SideNavComponent, GraphDashboardComponent, SpeedometerComponent, TachometerComponent, IntakeAirTemperatureComponent, AbsoluteBarometricPressureComponent, BatteryComponent, EngineCoolantTemperatureComponent, IntakeManifoldAbsolutePressureComponent, AirFlowRateComponent, ThrottlePositionComponent
  ],
  providers: [ HeaderList, Users ]
})
export class SharedModule { }
