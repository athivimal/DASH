import { Component, Inject, NgZone, PLATFORM_ID, OnInit, AfterViewInit, OnChanges, Input, ChangeDetectorRef } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

@Component({
  selector: 'app-fuel-capacity',
  templateUrl: './fuel-capacity.component.html',
  styleUrls: ['./fuel-capacity.component.scss']
})
export class FuelCapacityComponent implements OnInit, AfterViewInit, OnChanges {
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

let iconPath = "M36.904,22.163v-6.786l-4.897-4.896v4.803h1.636l1.023,1.022v7.026l6.438,4.48V42.31c-0.017,0.472-0.208,2.015-1.891,2.015c-1.729,0-1.991-1.635-2.03-2.029v-10.87h-5.492V3.841C31.691,1.72,29.973,0,27.853,0H7.056C4.934,0,3.218,1.72,3.218,3.841v38.23c0,2.122,1.716,3.842,3.838,3.842h20.797c2.12,0,3.838-1.72,3.838-3.842v-8.406h3.254v8.68l0.005,0.074c0.096,1.434,1.11,4.145,4.265,4.145c2.96,0,4.091-2.508,4.131-4.219V26.643L36.904,22.163z M27.813,16.099H7.096V4.62h20.717V16.099L27.813,16.099z";

var chart = am4core.create(`chartfuelcapacity${this.name}`, am4charts.SlicedChart);
chart.paddingTop = am4core.percent(10);
var c=this.value;
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
title.text = "Fuel Level: "+String(c);
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
