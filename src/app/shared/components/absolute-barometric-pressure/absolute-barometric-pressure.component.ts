import { Component, Inject, NgZone, PLATFORM_ID, OnInit, AfterViewInit, Input, ChangeDetectorRef, OnChanges } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

@Component({
  selector: 'app-absolute-barometric-pressure',
  templateUrl: './absolute-barometric-pressure.component.html',
  styleUrls: ['./absolute-barometric-pressure.component.scss']
})
export class AbsoluteBarometricPressureComponent implements OnInit,AfterViewInit, OnChanges {
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

// Create chart instance
let chart = am4core.create(`chartcylindricalgauge${this.name}`, am4charts.XYChart3D);

var value= this.value;
var total=100

// Add data
chart.data = [{
  "category": "",
  "value1": value,
  "value2": total-value
}, /* {
  "category": "2018 Q2",
  "value1": 15,
  "value2": 85
}, {
  "category": "2018 Q3",
  "value1": 40,
  "value2": 60
}, {
  "category": "2018 Q4",
  "value1": 55,
  "value2": 45
} */];

//chart.titles.create().text = "Fuel Capacity: "+String(value)+"%";

// Create axes
let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "category";
categoryAxis.renderer.grid.template.location = 0;
categoryAxis.renderer.grid.template.strokeOpacity = 0;

let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.renderer.grid.template.strokeOpacity = 0;
valueAxis.min = -10;
valueAxis.max = 110;
valueAxis.strictMinMax = true;
valueAxis.renderer.baseGrid.disabled = true;
valueAxis.renderer.labels.template.adapter.add("text", function(text) {
  if ((parseInt(text) > 100) || (parseInt(text) < 0)) {
    return "";
  }
  else {
    return text + " kpa";
  }
})

// Create series
let series1 = chart.series.push(new am4charts.ConeSeries());
series1.dataFields.valueY = "value1";
series1.dataFields.categoryX = "category";
series1.columns.template.width = am4core.percent(80);
series1.columns.template.fillOpacity = 0.9;
series1.columns.template.strokeOpacity = 1;
series1.columns.template.strokeWidth = 2;
if(((value/total)*100)<20)
  {
    series1.columns.template.fill = am4core.color("red");
  }     
else
  {
    series1.columns.template.fill = am4core.color("blue");
  }

let series2 = chart.series.push(new am4charts.ConeSeries());
series2.dataFields.valueY = "value2";
series2.dataFields.categoryX = "category";
series2.stacked = true;
series2.columns.template.width = am4core.percent(80);
series2.columns.template.fill = am4core.color("#000");
series2.columns.template.fillOpacity = 0.1;
series2.columns.template.stroke = am4core.color("#000");
series2.columns.template.strokeOpacity = 0.2;
series2.columns.template.strokeWidth = 2;

    let title = chart.createChild(am4core.Label);
    title.text = "Absolute Barometric Pressure"
    title.fontSize = 20;
    title.fill = am4core.color("#390511");
    title.isMeasured = false;
    title.x = am4core.percent(10);
    title.y = am4core.percent(-2);
    title.horizontalCenter = "left";
    title.fontWeight = "600";

    let title2 = chart.createChild(am4core.Label);
    title2.text = `Pressure: ${String(value)} kpa`
    title2.fontSize = 20;
    title2.fill = am4core.color("#390511");
    title2.isMeasured = false;
    title2.x = am4core.percent(30);
    title2.y=am4core.percent(100);
    title2.verticalCenter = "bottom";
    title2.fontWeight = "600";
  }
}
