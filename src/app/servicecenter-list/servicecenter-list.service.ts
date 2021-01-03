import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Servicecenter } from './servicecenter';

@Injectable({
  providedIn: 'root'
})
export class ServicecenterListService {

  constructor(private http:HttpClient) { }

  servicecenters:Servicecenter[] = [


  ]
  servicecenters$ = new BehaviorSubject<Servicecenter[]>([])

  getAllServicecenters(){
    this.http.get<Servicecenter[]>('http://localhost:3000/api/service-centers/allserviceCenters')
    .subscribe(response=>{

      this.servicecenters = response
      this.servicecenters$.next(this.servicecenters)
    })  }

  getSelectedServicecenter(id:any){
    const servicecenter = this.servicecenters.find(servicecenter=>servicecenter.id === id)
    return servicecenter;

  }
}
