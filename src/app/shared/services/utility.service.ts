import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { IMqttMessage, MqttService} from 'ngx-mqtt';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {
  selectedIdentifier = new BehaviorSubject(null);
  constructor(private _mqttService: MqttService) { }

  getMqttData(identifier) {
    console.log("Hello")
    return this._mqttService.observe(`${identifier}/#`);
  }
}
