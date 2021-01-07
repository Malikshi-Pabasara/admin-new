import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Servicecenter } from './servicecenter';

@Injectable({
  providedIn: 'root'
})
export class ServicecenterListService {

  constructor(private http: HttpClient) {}
  serviceCenters: Servicecenter[] = [];
  serviceCenters$ = new BehaviorSubject<Servicecenter[]>([]);

  getAllServiceCenter() {
    this.http
      .get<Servicecenter[]>('http://localhost:3000/api/service-centers/allserviceCenters')
      .subscribe((response) => {
        this.serviceCenters = response;
        this.serviceCenters$.next(this.serviceCenters);
      });
  }

  fetchServiceCenter() {
    this.http
      .get<Servicecenter[]>('http://localhost:3000/api/service-centers/allserviceCenters')
      .subscribe((data) => {
        this.serviceCenters = data;
        this.serviceCenters$.next(this.serviceCenters);
      });
  }

  deleteServiceCenter(id:string){


    const serviceCenters = this.serviceCenters.filter(service=>
       service._id != id)
    this.http.delete('http://localhost:3000/api/service-centers/deleteservice-center/'+id)
    .subscribe(()=>{
      this.serviceCenters$.next(serviceCenters)
    })
  }

  getAll() {
    return [...this.serviceCenters];
  }

  onSelectServiceCenter(id: any) {
    let driver = this.serviceCenters.find((service) => service._id == id);
    return this.http.get('http://localhost:3000/api/service-centers/one-service/'+id)
    // this.selectedDriver.next(driver)
    // return driver;

  }

}
