import { Component, Inject, NgZone, PLATFORM_ID, OnInit, AfterViewInit, Input, ChangeDetectorRef, OnChanges } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

@Component({
  selector: 'app-throttle-position',
  templateUrl: './throttle-position.component.html',
  styleUrls: ['./throttle-position.component.scss']
})
export class ThrottlePositionComponent implements OnInit, AfterViewInit{ //, OnChanges {
  @Input() value: any;
  @Input() name: any;
  
  constructor(private cdr: ChangeDetectorRef) {}
  ngOnInit(): void {
    console.log("hello")
  }

  // ngOnChanges()
  // {
  //   this.ngAfterViewInit();
  // }

  ngAfterViewInit() {
    am4core.useTheme(am4themes_animated);
    // Create chart
    let chart = am4core.create(`chartthrottle${this.name}`, am4charts.GaugeChart);
    // configure series
    // Create axis

    let axis = chart.xAxes.push(new am4charts.ValueAxis<am4charts.AxisRendererCircular>()); 
    axis.min = 0;
    axis.max = 100;
    axis.strictMinMax = true;
    // Set inner radius
    chart.innerRadius = -20;
    // Add ranges
    let range = axis.axisRanges.create();
    range.value = 0;
    range.endValue = 70;
    range.axisFill.fillOpacity = 1;
    range.axisFill.fill = am4core.color("cornflowerblue");
    range.axisFill.zIndex = - 1;
    
    let range2 = axis.axisRanges.create();
    range2.value = 70;
    range2.endValue = 100;
    range2.axisFill.fillOpacity = 1;
    range2.axisFill.fill = am4core.color("slateblue");
    range2.axisFill.zIndex = - 1;
    
    
    // Add hand
    let hand = chart.hands.push(new am4charts.ClockHand());
    hand.value = this.value;
    hand.pin.disabled = true;
    hand.fill = am4core.color("black");
    hand.stroke = am4core.color("black");
    // hand.innerRadius = am4core.percent(50);
    hand.radius = am4core.percent(90);
    hand.startWidth = 5;

    let title = chart.createChild(am4core.Label);
    title.text = "Throttle Position: "+String(this.value)
    title.fontSize = 20;
    title.fill = am4core.color("#390511");
    title.isMeasured = false;
    title.x = am4core.percent(85);
    title.y = am4core.percent(20);
    title.horizontalCenter = "right";
    title.fontWeight = "600";
  }
}
