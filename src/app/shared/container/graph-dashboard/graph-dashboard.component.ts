import { UtilityService } from './../../services/utility.service';
import { Component, Input, OnInit } from '@angular/core';
import { IMqttMessage, MqttService } from 'ngx-mqtt';
import { identity } from 'rxjs';

@Component({
  selector: 'app-graph-dashboard',
  templateUrl: './graph-dashboard.component.html',
  styleUrls: ['./graph-dashboard.component.scss']
})
export class GraphDashboardComponent implements OnInit {
  identifier: any;
  public message: string;
  incoming;
  duplicate = false;
  mqPackets = new Array();
  //mqPackets = [{node: '2', value: 15, pin:2, count:3}];
  
  i = 0;
  espmeterCharts=[];
  selectedChart:string
  menuToggle=false;
  userData: any;
  selectedUser: any;

  public canvasWidth = 300;
  public needleValue = 5;
  public centralLabel = "";
  public name = "Gauge chart";
  public bottomLabel = "1";
  public options = {
    hasNeedle: true,
    needleColor: "red",
    needleUpdateSpeed: 100,
    arcColors: ["rgb(44, 151, 222)", "lightgray"],
    arcDelimiters: [10],
    rangeLabel: ["0", "1000"],
    needleStartValue: 50
  };

  // mosquitto_pub -h mqtt.eclipse.org -p 1883 -t kt-data/1 -m '{"node":1, "pin":1, "value":1}'

  // hive mqtt
  // mosquitto_pub -h broker.hivemq.com -p 1883 -t kt-data/1 -m '{"node":1, "pin":1, "value":1}'
  // mosquitto_sub -h broker.hivemq.com -p 1883 -t "kt-data/#" -v
  // mosquitto_pub -h broker.hivemq.com -p 1883 -t kt-control -m '1'

  constructor(private _mqttService: MqttService, private utilityService: UtilityService) {}

  directDownLink(node, val) {
    this.unsafePublish("kt-control/n" + node, val);
  }

  public unsafePublish(topic: string, message: string): void {
    this._mqttService.unsafePublish(topic, message, {
      qos: 1,
      retain: true
    });
  }

  ngOnInit() {
    this.utilityService.selectedIdentifier.subscribe(identity => {
      console.log(identity, "identifier")
      this.identifier = identity;
      this.mqPackets = [];
      this.utilityService.getMqttData(this.identifier)
    .subscribe((message: IMqttMessage) => {
        this.message = message.payload.toString();
        console.log(this.message);
        this.incoming = JSON.parse(message.payload.toString());

        this.duplicate = false;

        if (this.mqPackets.length > 0) {
          for (this.i = 0; this.i < this.mqPackets.length; this.i++) {
            if (this.mqPackets[this.i].node === this.incoming.node) {
              this.mqPackets[this.i].node = this.incoming.node;
              this.mqPackets[this.i].pin = this.incoming.pin;
              this.mqPackets[this.i].value = parseInt(this.incoming.value);
              this.mqPackets[this.i].count += 1;
              this.duplicate = true;
            }
          }
          if (!this.duplicate) {
            this.incoming.count = 1;
            this.mqPackets.push(this.incoming);
          }
        } else {
          this.incoming.count = 1;
          this.mqPackets.push(this.incoming);
        }
      });

    });
  
    this.selectedUser = JSON.parse(localStorage.getItem('selectedUser'));
    if (this.selectedUser) {
      this.espmeterCharts = this.selectedUser.chart;
    }
    else {
      this.userData = JSON.parse(localStorage.getItem('currentUser'));
      this.espmeterCharts = this.userData.chart;
    }
    this.selectedChart=this.espmeterCharts[0];
  }

  dropdownToggle(chartName){
    this.selectedChart=chartName ? chartName:this.selectedChart
    this.menuToggle=!this.menuToggle
  }
  onTabChange(event) {
    this.selectedChart=event.nextId
  }
}
