import { Component } from '@angular/core';
import { AppService } from '../services/appService';

@Component({
  selector: 'app-report-component',
  templateUrl: './report.component.html'
})
export class ReportComponent {
  data: any = [];

  constructor(private appService: AppService) {
    this.getData();
  }

  getData() {
    let trips = this.appService.getTrips();
    let drivers: any = this.appService.getDrivers();
    
    drivers.forEach(d => {
      let driverTrips = trips.filter(t => t.name.trim() == d.trim());
      driverTrips = (!driverTrips)? [] : driverTrips;
      let row: any = [];
      row.name = d;
      row.miles = 0;
      row.speed = 0;
      driverTrips.forEach(t => {
        row.miles += parseFloat(t.miles);
        row.speed +=  parseFloat(t.speed);
      })
      row.miles = Math.round(row.miles);
      row.speed = Math.round(row.speed / driverTrips.length);
      row.speed = (!row.speed) ? 0 : row.speed;
      
      this.data.push(row);
    });

    this.data.sort( (a, b)  => {
      if (a.miles < b.miles) {
        return 1;
      }
      if (a.miles > b.miles) {
        return -1;
      }
      // a must be equal to b
      return 0;
    });
  }


}
