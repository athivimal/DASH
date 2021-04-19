import { Component, Inject, NgZone, PLATFORM_ID, OnInit, AfterViewInit, Input, ChangeDetectorRef, OnChanges } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

@Component({
  selector: 'app-intake-air-temperature',
  templateUrl: './intake-air-temperature.component.html',
  styleUrls: ['./intake-air-temperature.component.scss']
})
export class IntakeAirTemperatureComponent implements OnInit, AfterViewInit, OnChanges {
  @Input() value: any;
  @Input() name: any;
  
  constructor(private cdr: ChangeDetectorRef) {}
  ngOnInit(): void {
    console.log("hello")
  }
  
  ngOnChanges()
  {
    this.ngAfterViewInit();
  }

  ngAfterViewInit()
  {
    am4core.useTheme(am4themes_animated);
// Themes end

let iconPath = "M89.50460678,83.8A5.169372780000001,5.169372780000001,0,0,0,84.335234,88.96937278L84.335234,228.176708A24.362,24.362,0,1,0,115.664766,228.176708L115.664766,88.96937278A5.169372780000001,5.169372780000001,0,0,0,110.49539322,83.8Z";

var chart = am4core.create(`chartintakeairtemperature${this.name}`, am4charts.SlicedChart);
chart.paddingTop = am4core.percent(10);
var c = this.value;
chart.data = [
  {
    "name": "",
    "value": 100-c,
    "color": am4core.color("white")
  },
  {
    "name": "Temperature",
    "value": c,
    "color": am4core.color("orange")
  } ];

let series = chart.series.push(new am4charts.PictorialStackedSeries());
series.dataFields.value = "value";
series.dataFields.category = "name";
series.startLocation = 0
series.endLocation = 1

series.slicesContainer.background.fill = am4core.color("#676767")
series.slicesContainer.background.fillOpacity = 0.2;

series.maskSprite.path = iconPath;

series.labelsContainer.width = am4core.percent(100);
series.alignLabels = true; 
series.labels.template.disabled = true;
series.ticks.template.disabled = true;
series.slices.template.hoverOnFocus = false;
series.slices.template.propertyFields.fill = "color";
series.slices.template.propertyFields.stroke = "black"; 

let gradientModifier = new am4core.LinearGradientModifier();
gradientModifier.lightnesses = [0.2, -0.7];
series.slices.template.fillModifier = gradientModifier;
series.slices.template.strokeModifier = gradientModifier;

// this makes the fills to start and end at certain location instead of taking whole picture
series.endLocation = 1;
series.startLocation = 0;

series.tooltip.__disabled=true;

series.ticks.template.strokeWidth = 2;
series.ticks.template.fill = am4core.color("black");
// this makes initial fill animation
series.hiddenState.properties.startLocation = 0.553;
series.ticks.template.locationX = 0.7;
series.labelsContainer.width = 120;
//series.labels.template.text = "{category}: [bold]{value}[/]";


/*let sliderContainer = chart.createChild(am4core.Container);
sliderContainer.marginTop = am4core.percent(5);
sliderContainer.width = am4core.percent(80);
sliderContainer.align = "center";
sliderContainer.paddingRight = 120;


 let label = sliderContainer.createChild(am4core.Label);
label.text = "move me!";
label.dy = -40;
label.isMeasured = false;

let slider = sliderContainer.createChild(am4core.Slider);
slider.start = 0;
slider.background.fill = am4core.color("#676767");
slider.background.fillOpacity = 0.2;

// doing it later for animation to finish
setTimeout(initSlider, 1500);

function initSlider(){
    slider.events.on("rangechanged", function(){
        series.startLocation = 0.1 + (0.553 - 0.1) * slider.start;
        series.dataItems.getIndex(0).value = (1 - slider.start) * 200;
        slider.background.fill = new am4core.Color(am4core.colors.interpolate(am4core.color("#676767").rgb, am4core.color("#7b131c").rgb, slider.start));
        slider.background.fillOpacity = 0.2 + slider.start * 0.8;

        blurFilter.blur = slider.start * 5;
    })
}
*/

let title = chart.createChild(am4core.Label);
title.text = "Temperature: "+String(c)+"°C"
title.fontSize = 20;
title.fill = am4core.color("#390511");
title.isMeasured = false;
title.x = am4core.percent(100);
title.horizontalCenter = "right";
title.fontWeight = "600";

let title2 = chart.createChild(am4core.Label);
title2.text = "Intake Air Temperature"
title2.fontSize = 20;
title2.fill = am4core.color("#390511");
title2.isMeasured = false;
title2.x = am4core.percent(0);
title2.y=am4core.percent(-10);
title2.horizontalCenter = "left";
title2.fontWeight = "600";

let blurFilter = new am4core.BlurFilter();
blurFilter.blur = 0;
title.filters.push(blurFilter); 
  }
}
