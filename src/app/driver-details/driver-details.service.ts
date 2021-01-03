import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Driver } from './driver';

@Injectable({
  providedIn: 'root'
})
export class DriverDetailsService {

  constructor(private http:HttpClient) { }
  drivers:Driver[]  = []
  drivers$ = new BehaviorSubject<Driver[]>([])

  getAllDrivers(){
    this.http.get<Driver[]>('http://localhost:3000/api/drivers/alldrivers')
    .subscribe(response=>{

      this.drivers = response
      this.drivers$.next(this.drivers)
    })
  }

  getSelectedDriver(id:any){
    const driver = this.drivers.find(driver=>driver.id === id);
    return driver;

  }
}
