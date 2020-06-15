import { Injectable } from "@angular/core";


@Injectable()
export class AppService {
  
  constructor() { }

  addDrivers(data) {
    if (localStorage.getItem('drivers')) {
      localStorage.removeItem('drivers');
    }
    data = JSON.stringify(data);
    localStorage.setItem('drivers', data);
  }

  getDrivers() {

    let data: any = [];
    if (localStorage.getItem('drivers')) {
      data = localStorage.getItem('drivers');
      data = JSON.parse(data);
    } 
    
    return data;
  }

  addTrips(data) {
    if (localStorage.getItem('trips')) {
      localStorage.removeItem('trips');
    }
    data = JSON.stringify(data);
    localStorage.setItem('trips', data);
  }

  getTrips() {
    let data: any = [];
    if (localStorage.getItem('trips')) {
      data = localStorage.getItem('trips');
      data = JSON.parse(data);
    }
    return data;
  }





}
