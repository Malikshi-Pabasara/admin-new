import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Driver } from './driver';

@Injectable({
  providedIn: 'root',
})
export class DriverDetailsService {
  constructor(private http: HttpClient) {}
  drivers: Driver[] = [];
  drivers$ = new BehaviorSubject<Driver[]>([]);
  selectedDriver:any = new BehaviorSubject(undefined)

  getAllDrivers() {
    this.http
      .get<Driver[]>('http://localhost:3000/api/drivers/alldrivers')
      .subscribe((response) => {
        this.drivers = response;
        this.drivers$.next(this.drivers);
      });
  }

  fetchDriver() {
    this.http
      .get<Driver[]>('http://localhost:3000/api/drivers/alldrivers')
      .subscribe((data) => {
        this.drivers = data;
        this.drivers$.next(this.drivers);
      });
  }

  deleteDriver(id:string){
    const drivers = this.drivers.filter(driver=> driver._id != id)
    this.http.delete('http://localhost:3000/api/drivers/deletedriver/'+id)
    .subscribe(()=>{
      this.drivers$.next(drivers)
    })
  }

  getAll() {
    return [...this.drivers];
  }

  onSelectDriver(id: any) {
    let driver = this.drivers.find((driver) => driver._id == id);
    this.selectedDriver.next(driver)
    return driver;
  }
}
