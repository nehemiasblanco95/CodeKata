import { Component } from '@angular/core';
import { AppService } from '../services/appService';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  file: any = '';
  result: any;
  fileString: any = "";
  saved = false;

  constructor(private appService: AppService) {

  }

  addDoc(files: FileList) {
 
    if (!files.item(0)) {
      this.file = "";
    } else {
      this.file = files.item(0);
    }

  };

  saveData() {

    let drivers = [];
    let trips = [];
    let lines = [];
    let myReader: FileReader = new FileReader();
    myReader.onloadend = (event) => {
      //myReader.result is a String of the uploaded file
      let data: any = myReader.result;
      lines = data.split('\n');

      lines.forEach(l => {

        if (l.substring(0, 6) == 'Driver') {
          drivers.push(l.substring(7));
        }

        if (l.substring(0, 4) == 'Trip') {

          let values = l.split(' ');
          let trip = {
            name: values[1],
            start: values[2],
            stop: values[3],
            miles: values[4],
            speed: 0
          }

          //Calculate Speed
          let start: any = new Date("01/01/2020 " + trip.start + ":00");
          let end: any = new Date("01/01/2020 " + trip.stop + ":00");

          

          var diff = (start.getTime() - end.getTime()) / 1000;
          diff /= 60;
          let minutes = Math.abs(Math.round(diff));
          let speed = (trip.miles / minutes) * 60;

          if (speed > 5 && speed < 100) {
            trip.speed = speed;
            trips.push(trip);
          }

        }

      });


      this.appService.addDrivers(drivers);
      this.appService.addTrips(trips);
      this.saved = true;
      
    }

    myReader.readAsText(this.file);
  }

  close() {
    this.file = "";
    this.saved = false;
  };




 


}
