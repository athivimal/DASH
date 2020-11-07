import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
@Component({
  selector: 'app-pictorial-slice-shape',
  templateUrl: './pictorial-slice-shape.component.html',
  styleUrls: ['./pictorial-slice-shape.component.scss']
})
export class PictorialSliceShapeComponent implements OnInit, AfterViewInit {
  @Input() value: any;
  @Input() name: any; 
  
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end

    let capacity = 100;
    let value = this.value;
    let circleSize = 0.8;

    let component = am4core.create(`chartpictorialSlice${this.name}`, am4core.Container)
    component.width = am4core.percent(100);
    component.height = am4core.percent(100);

    let chartContainer = component.createChild(am4core.Container);
    chartContainer.x = am4core.percent(50)
    chartContainer.y = am4core.percent(50)

    let circle = chartContainer.createChild(am4core.Circle);
    circle.fill = am4core.color("#dadada");

    let circleMask = chartContainer.createChild(am4core.Circle);

    let waves = chartContainer.createChild(am4core.WavedRectangle);
    waves.fill = am4core.color("#34a4eb");
    waves.mask = circleMask;
    waves.horizontalCenter = "middle";
    waves.waveHeight = 10;
    waves.waveLength = 30;
    waves.y = 500;
    circleMask.y = -500;

    component.events.on("maxsizechanged", function(){
      let smallerSize = Math.min(component.pixelWidth, component.pixelHeight);  
      let radius = smallerSize * circleSize / 2;

      circle.radius = radius;
      circleMask.radius = radius;
      waves.height = smallerSize;
      waves.width = Math.max(component.pixelWidth, component.pixelHeight);  

      //capacityLabel.y = radius;

      let labelRadius = radius + 20

      capacityLabel.path = am4core.path.moveTo({x:-labelRadius, y:0}) + am4core.path.arcToPoint({x:labelRadius, y:0}, labelRadius, labelRadius);
      capacityLabel.locationOnPath = 0.5;

      setValue(value);
    })


    function setValue(value){
      let y = - circle.radius - waves.waveHeight + (1 - value / capacity) * circle.pixelRadius * 2;
      waves.animate([{property:"y", to:y}, {property:"waveHeight", to:10, from:15}, {property:"x", from:-50, to:0}], 5000, am4core.ease.elasticOut);
      circleMask.animate([{property:"y", to:-y},{property:"x", from:50, to:0}], 5000, am4core.ease.elasticOut);
    }


    let label = chartContainer.createChild(am4core.Label)
    let formattedValue = value;
    // formattedValue = formattedValue.toUpperCase();

    label.text = formattedValue + " V";
    label.fill = am4core.color("#fff");
    label.fontSize = 30;
    label.horizontalCenter = "middle";


    let capacityLabel = chartContainer.createChild(am4core.Label)

    let formattedCapacity = capacity;

    capacityLabel.text = "Capacity " + formattedCapacity + " V";
    capacityLabel.fill = am4core.color("#34a4eb");
    capacityLabel.fontSize = 20;
    capacityLabel.textAlign = "middle";
    capacityLabel.padding(0,0,0,0);
  }

}
