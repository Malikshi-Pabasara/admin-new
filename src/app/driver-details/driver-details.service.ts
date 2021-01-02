import { Injectable } from '@angular/core';
import { Driver } from './driver';

@Injectable({
  providedIn: 'root'
})
export class DriverDetailsService {

  constructor() { }
  drivers:Driver[]  = [

    { id : '1', name : 'mali', email : 'mali@gmail.com', password : '123',nicNumber : '985181063V', mobileNumber : '0768851673' , vehicalNumber : 'CAT-4587', vehicalColor :'red',img:'assets/img/img3.jpg'},
    { id : "2", name : "paba", email : "paba@gmail.com", password : "123",nicNumber : '985181063V', mobileNumber : '0768851673' , vehicalNumber : 'CAT-4587', vehicalColor :'red',img:'assets/img/img2.jpg'},
    { id : "3", name : "saku", email : "saku@gmail.com", password : "123",nicNumber : '985181063V', mobileNumber : '0768851673' , vehicalNumber : 'CAT-4587', vehicalColor :'red',img:'assets/img/img4.jpg'},
    { id : '4', name : 'kiti', email : 'mali@gmail.com', password : '123',nicNumber : '985181063V', mobileNumber : '0768851673' , vehicalNumber : 'CAT-4587', vehicalColor :'red',img:'assets/img/img3.jpg'},
    { id : "5", name : "pabaya", email : "paba@gmail.com", password : "123",nicNumber : '985181063V', mobileNumber : '0768851673' , vehicalNumber : 'CAT-4587', vehicalColor :'red',img:'assets/img/img2.jpg'},
    { id : "6", name : "rathi", email : "saku@gmail.com", password : "123",nicNumber : '985181063V', mobileNumber : '0768851673' , vehicalNumber : 'CAT-4587', vehicalColor :'red',img:'assets/img/img4.jpg'},
    { id : '7', name : 'mali', email : 'mali@gmail.com', password : '123',nicNumber : '985181063V', mobileNumber : '0768851673' , vehicalNumber : 'CAT-4587', vehicalColor :'red',img:'assets/img/img3.jpg'},
    
  ]

  getAllDrivers(){
    return [...this.drivers]
  }

  getSelectedDriver(id:any){
    const driver = this.drivers.find(driver=>driver.id === id);
    return driver;

  }
}
