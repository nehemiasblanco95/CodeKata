import { Component } from '@angular/core';
import { AppService } from '../services/appService';

@Component({
  selector: 'app-drivers-component',
  templateUrl: './drivers.component.html'
})
export class DriversComponent {
  drivers: any = [];

  constructor(private appService: AppService) {
    this.drivers = this.appService.getDrivers();
  }


}
