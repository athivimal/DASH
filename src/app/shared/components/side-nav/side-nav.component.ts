import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }
  list=[
    "kt-data",
    "kt-data-KL01AW8561-avpm",
    "kt-data-KL01AW8561-erpm",
    "kt-data-KL01AW8561-ecTemp",
    "kt-data-KL01AW8561-airTemp",
    "kt-data-KL01AW8561-mAbsp",
    "kt-data-KL01AW8561-AbsBP",
    "kt-data-KL01AW8561-Aflr",
    "kt-data-KL01AW8561-Thrp"
  ]
  
  @Output() selectedDevice = new EventEmitter(); 
  selectedIdentifier = '';
  members=[];
  
  ngOnInit() {
    this.selectedDevice.emit(this.list[0]);
    this.selectedIdentifier = this.list[0];
    this.members=[...this.members,...this.list.slice(0,10)]
  }
  
  onScroll(event){
    const tableViewHeight = event.target.offsetHeight; 
    const tableScrollHeight = event.target.scrollHeight; 
    const scrollLocation = event.target.scrollTop; 
    const buffer = 100;
    const limit = tableScrollHeight - tableViewHeight - buffer;
    if (scrollLocation > limit) {
      this.members=[...this.members,...this.list.slice(this.members.length,this.members.length+5)]
    }
  }
  onNavClick(device){
    console.log(device)
    this.selectedIdentifier = device;
    this.selectedDevice.emit(device);
  }
}