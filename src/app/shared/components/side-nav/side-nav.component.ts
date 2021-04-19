import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SpeedometerComponent } from '../speedometer/speedometer.component';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }
  list=[
    {
      "type" : "Vehicle Speed",
      "identifier" : "kt-data-KL01AW8561-avpm"
    },
    {
      "type" : "Engine RPM",
      "identifier" : "kt-data-KL01AW8561-erpm"
    },
    {
      "type" : "Engine Coolant Temperature",
      "identifier" : "kt-data-KL01AW8561-ecTemp"
    },
    {
      "type" : "Intake Air Temperature",
      "identifier" : "kt-data-KL01AW8561-airTemp"
    },
    {
      "type" : "Intake Manifold Absolute Pressure",
      "identifier" : "kt-data-KL01AW8561-mAbsp"
    },
    {
      "type" : "Absolute Barometric Pressure",
      "identifier" : "kt-data-KL01AW8561-AbsBP"
    },
    {
      "type" : "Air Flow Rate",
      "identifier" : "kt-data-KL01AW8561-Aflr"
    },
    {
      "type" : "Throttle Position",
      "identifier" : "kt-data-KL01AW8561-Thrp"
    },
    {
      "type" : "Battery",
      "identifier" : "kt-data-KL01AW8561-Bat"
    },
    {
      "type" : "Fuel Capacity",
      "identifier" : "kt-data-KL01AW8561-Fuel"
    }
  ]
  
  @Output() selectedDevice = new EventEmitter(); 
  selectedIdentifier = '';
  members=[];
  
  ngOnInit() {
    this.selectedDevice.emit(this.list[0]);
    this.selectedIdentifier = this.list[0].type;
    this.members=[...this.members,...this.list.slice(0,10)]
  }
  
  onScroll(event){
    const tableViewHeight = event.target.offsetHeight; 
    const tableScrollHeight = event.target.scrollHeight; 
    const scrollLocation = event.target.scrollTop; 
    const buffer = 200;
    const limit = tableScrollHeight - tableViewHeight - buffer;
    if (scrollLocation > limit) {
      this.members=[...this.members,...this.list.slice(this.members.length,this.members.length+5)]
    }
  }
  onNavClick(device){
    console.log(device)
    this.selectedIdentifier = device.type;
    this.selectedDevice.emit(device);
  }
}