import { Component } from '@angular/core';
import { AppService } from '../services/appService';

@Component({
  selector: 'app-trips-component',
  templateUrl: './trips.component.html'
})
export class TripsComponent {
  trips: any = [];

  constructor(private appService: AppService) {
    this.trips = this.appService.getTrips();
  }


}
