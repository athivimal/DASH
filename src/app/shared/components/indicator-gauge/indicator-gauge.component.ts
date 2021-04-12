// import { Component, OnInit } from '@angular/core';
import { Component, Inject, NgZone, PLATFORM_ID, OnInit, AfterViewInit, Input } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
@Component({
  selector: 'app-indicator-gauge',
  templateUrl: './indicator-gauge.component.html',
  styleUrls: ['./indicator-gauge.component.scss']
})
export class IndicatorGaugeComponent implements OnInit ,AfterViewInit{//, OnChanges {
  @Input() value: any;
  @Input() name: any; 
  private chart: am4charts.XYChart;

  constructor() { }

  ngOnInit(): void {
    console.log("hello")
  }
   ngOnChanges()
   {
     this.ngAfterViewInit();
   }
 
  
  ngAfterViewInit() {
    am4core.useTheme(am4themes_animated);
    var iconPath="M884.487 176.368v-100.029h-207.961v100.029h-297.459v-100.029h-207.957v100.029h-171.11v771.294h1024v-771.294h-139.513zM718.625 118.459h123.72v45.634h-123.72v-45.634zM213.205 118.459h123.72v45.634h-123.72v-45.634zM981.862 905.563h-939.742v-687.075h939.763v687.075h-0.022 M697.563 421.201h165.841v42.117h-165.841v-42.117z M254.016 525.162h42.12v-61.84h61.869v-42.12h-61.869v-61.869h-42.12v61.869h-61.869v42.12h61.869z"
    
    var chart = am4core.create(`chartindicator${this.name}`, am4charts.SlicedChart);
    chart.paddingTop = am4core.percent(10);
    var a=this.value;
    var r="#FF0000"
    var o="#FF6600"
    var g="#00CC66"
    var m="#000000"
    if(a>=70){
      var b=g;
    }
    if(a>=30 && a<70)
    {
      b=o;
    }
    if(a<30){
      b=r;
    }
    
    chart.data = [{
      "name": "Consumed",
      "value":(100-a)*5 ,
      "color": am4core.color(m)
    }, {
      "name": "Battery level",
      "value": a*5,
      "color": am4core.color(b)
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
