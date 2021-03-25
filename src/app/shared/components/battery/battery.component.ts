import { Component, Inject, NgZone, PLATFORM_ID, OnInit, AfterViewInit, Input, ChangeDetectorRef } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

@Component({
  selector: 'app-battery',
  templateUrl: './battery.component.html',
  styleUrls: ['./battery.component.scss']
})
export class BatteryComponent implements OnInit,AfterViewInit {
  @Input() value: any;
  @Input() name: any; 
  constructor(private cdr: ChangeDetectorRef) {}
  ngOnInit(): void {
    console.log("hello")
  }
  ngAfterViewInit()
  {
    am4core.useTheme(am4themes_animated);
// Themes end

let iconPath = "M 276.022 39.163 h -22.087 V 20 c 0 -11.028 -8.972 -20 -20 -20 h -97.85 c -11.028 0 -20 8.972 -20 20 v 19.163 H 93.999 c -16.542 0 -30 13.458 -30 30 v 270.858 c 0 16.542 13.458 30 30 30 h 182.023 c 16.542 0 30 -13.458 30 -30 V 69.163 C 306.022 52.621 292.564 39.163 276.022 39.163 Z M 157.719 326.021 l 17.896 -85.014 c 0.145 -0.694 -0.03 -1.417 -0.482 -1.979 c -0.433 -0.523 -1.125 -0.855 -1.825 -0.855 h -31.632 l 70.304 -106.583 l -17.814 80.144 c -0.153 0.695 0.015 1.413 0.462 1.964 c 0.461 0.58 1.127 0.899 1.845 0.899 h 31.748 L 157.719 326.021 Z M 276.022 94.78 H 93.999 V 69.163 h 182.023 V 94.78 L 276.022 94.78 Z";

var chart = am4core.create(`chartbattery${this.name}`, am4charts.SlicedChart);
chart.paddingTop = am4core.percent(10);
var c=75;
var total=100;
var colour;

if(((c/total)*100)<30)
  {
    colour = am4core.color("red");
  }     
  else if((((c/total)*100)<70)&&(((c/total)*100)<70))
  {
    colour = am4core.color("orange");
  }
  else
  {
    colour = am4core.color("green");
  }

chart.data = [
  {
    "name": "",
    "value": 100-c,
    "color": am4core.color("white")
  },
  {
    "name": "Temperature",
    "value": c,
    "color":colour
  }  ];


  
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
}*/

let title = chart.createChild(am4core.Label);
title.text = "Battery Level: "+String(c);
title.fontSize = 20;
title.fill = am4core.color("#390511");
title.isMeasured = false;
title.x = am4core.percent(100);
title.horizontalCenter = "right";
title.fontWeight = "600";

let blurFilter = new am4core.BlurFilter();
blurFilter.blur = 0;
title.filters.push(blurFilter); 
  }
}
