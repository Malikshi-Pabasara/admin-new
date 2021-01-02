import { Injectable } from '@angular/core';
import { Servicecenter } from './servicecenter';

@Injectable({
  providedIn: 'root'
})
export class ServicecenterListService {

  constructor() { }

  servicecenters:Servicecenter[] = [

    { id : '1001', name : 'mali', email : 'mali@gmail.com', password : '123' , mobileNumber:'0768851673', address:'moragahena, horana', openTime:'7am',closeTime:'7pm',img:'assets/img/img3.jpg'},
    { id : "2002", name : "paba", email : "paba@gmail.com", password : "123" , mobileNumber:'0768851673', address:'moragahena, horana', openTime:'7am',closeTime:'7pm',img:'assets/img/img2.jpg'},
    { id : "3003", name : "saku", email : "saku@gmail.com", password : "123" ,  mobileNumber:'0768851673', address:'moragahena, horana', openTime:'7am',closeTime:'7pm',img:'assets/img/img4.jpg'},
    { id : '4001', name : 'mali', email : 'mali@gmail.com', password : '123' , mobileNumber:'0768851673', address:'moragahena, horana', openTime:'7am',closeTime:'7pm',img:'assets/img/img3.jpg'},
    { id : "5002", name : "paba", email : "paba@gmail.com", password : "123" , mobileNumber:'0768851673', address:'moragahena, horana', openTime:'7am',closeTime:'7pm',img:'assets/img/img2.jpg'},
    { id : "6003", name : "saku", email : "saku@gmail.com", password : "123" ,  mobileNumber:'0768851673', address:'moragahena, horana', openTime:'7am',closeTime:'7pm',img:'assets/img/img4.jpg'},
    { id : "7003", name : "saku", email : "saku@gmail.com", password : "123" ,  mobileNumber:'0768851673', address:'moragahena, horana', openTime:'7am',closeTime:'7pm',img:'assets/img/img4.jpg'},

  ]

  getAllServicecenters(){
    return [...this.servicecenters]
  }

  getSelectedServicecenter(id:any){
    const servicecenter = this.servicecenters.find(servicecenter=>servicecenter.id === id)
    return servicecenter;

  }
}
