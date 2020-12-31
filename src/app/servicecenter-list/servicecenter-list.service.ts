import { Injectable } from '@angular/core';
import { Servicecenter } from './servicecenter';

@Injectable({
  providedIn: 'root'
})
export class ServicecenterListService {

  constructor() { }

  servicecenters:Servicecenter[] = [

    { id : '1001', name : 'mali', email : 'mali@gmail.com', password : '123' },
    { id : "2002", name : "paba", email : "paba@gmail.com", password : "123" },
    { id : "3003", name : "saku", email : "saku@gmail.com", password : "123" },

  ]

  getAllServicecenters(){
    return [...this.servicecenters]
  }

  getSelectedServicecenter(id:string){
    const servicecenter = this.servicecenters.find(servicecenter=>servicecenter.id === id)
    return servicecenter;

  }
}
