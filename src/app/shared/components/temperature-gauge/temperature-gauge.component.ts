// import { Component, OnInit } from '@angular/core';
import { Component, Inject, NgZone, PLATFORM_ID, OnInit, AfterViewInit, Input } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { ChangeDetectorRef } from '@angular/core';
@Component({
  selector: 'app-temperature-gauge',
  templateUrl: './temperature-gauge.component.html',
  styleUrls: ['./temperature-gauge.component.scss']
})
export class TemperatureGaugeComponent implements OnInit,AfterViewInit {//, OnChanges {
  @Input() value: any;
  @Input() name: any; 
  private chart: am4charts.XYChart;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    console.log("hello")
  }
  ngOnChanges()
   {
     this.ngAfterViewInit();
   }
  ngAfterViewInit() {
    am4core.useTheme(am4themes_animated);
    var iconPath="M511.996 0.014c-15.247 0-30.494 3.944-44.138 11.822-27.288 15.756-44.138 44.94-44.138 76.447l0.579 644.955c-56.158 37.373-83.351 106.43-65.939 172.407 18.344 69.512 81.303 118.153 153.195 118.354 71.889 0.198 135.119-48.089 153.848-117.496 17.789-65.921-9.001-135.466-65.035-173.202l-0.088-645.040c-0.004-31.508-16.854-60.688-44.138-76.44-13.64-7.878-28.888-11.822-44.135-11.822l-0.011 0.014zM511.996 35.318c9.138 0 18.277 2.373 26.483 7.112 16.412 9.477 26.483 26.917 26.483 45.868v17.655h-17.655c-23.877-0.339-23.877 35.65 0 35.311h17.662v35.311h-17.669c-23.877-0.339-23.877 35.65 0 35.311h17.676v35.311h-17.676c-23.877-0.339-23.877 35.65 0 35.311h17.684l0.067 459.97c0 6.303 3.362 12.129 8.821 15.282 48.478 28.040 72.041 85.462 57.436 139.572-14.608 54.131-63.594 91.543-119.664 91.387-56.066-0.155-104.844-37.846-119.152-92.055-14.308-54.212 9.523-111.055 58.213-138.855 5.508-3.146 8.909-9.001 8.902-15.346l-0.586-654.178c0-18.944 10.074-36.38 26.483-45.854 8.206-4.739 17.345-7.112 26.483-7.112h0.011zM511.728 323.085c-9.742 0.148-17.525 8.16-17.387 17.902v455.853c-31.147 8.044-52.927 36.119-52.966 68.291 0 39.004 31.617 70.621 70.621 70.621v0c39.004 0 70.621-31.617 70.621-70.621v0c-0.025-32.182-21.804-60.279-52.966-68.326v-455.817c0.138-9.749-7.655-17.765-17.408-17.902-0.169-0.004-0.343-0.004-0.516 0z"
    var chart = am4core.create(`charttemperature${this.name}`, am4charts.SlicedChart);
    chart.paddingTop = am4core.percent(10);
    var a=this.value;
    //var r="#FF0000"
    var r="#ee1f25"
    //var g="#00CC66"
    var m="#000000"
    //if(a>=90){
      //var b=r;
    //}
    //if(a>=30 && a<70)
    //{
      //b=o;
    //}
    //if(a<30){
      //b=g;
    //}
    
    chart.data = [{
      "name": "",
      "value":(100-a)*5 ,
      "color": am4core.color(m)
    }, {
      "name": "",
      "value": a*5,
      "color": am4core.color(r)
    }];
    
    var series = chart.series.push(new am4charts.PictorialStackedSeries());
    series.dataFields.value = "value";
    series.dataFields.category = "name";
    
    
    series.slicesContainer.background.fill = am4core.color("#FF0000")
    
    
    series.maskSprite.path = iconPath;
    
    series.labelsContainer.width = am4core.percent(100);
    series.alignLabels = true;
    series.slices.template.propertyFields.fill = "color";
    series.slices.template.propertyFields.stroke = "color";
    
    var sliderContainer = chart.createChild(am4core.Container);
    sliderContainer.marginTop = am4core.percent(5);
    sliderContainer.width = am4core.percent(80);
    sliderContainer.align = "center";
    sliderContainer.paddingRight = 120;
  }
}
