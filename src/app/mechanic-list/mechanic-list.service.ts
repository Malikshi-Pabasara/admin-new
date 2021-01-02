import { Injectable } from '@angular/core';
import { Mechanic } from './mechanic';

@Injectable({
  providedIn: 'root'
})
export class MechanicListService {

  constructor() { }

  mechanics:Mechanic[] = [

    { id : '101', name : 'mali', email : 'mali@gmail.com', password : '123', nicNumber : '985181063V', mobileNumber :'0768851673',address: 'Kuda Uduwa, Horana',about: ' I can feidcorrect all mistakes. I have a degree in this field ',img:'assets/img/img2.jpg'},
    { id : "202", name : "paba", email : "paba@gmail.com", password : "123" , nicNumber : '985181063V', mobileNumber :'0768851673',address: 'Kuda Uduwa, Horana',about: ' I can feidcorrect all mistakes.I have a degree in this field ',img:'assets/img/img3.jpg'},
    { id : "303", name : "saku", email : "saku@gmail.com", password : "123" , nicNumber : '985181063V', mobileNumber :'0768851673',address: 'Kuda Uduwa, Horana',about: 'I can feidcorrect all mistakes.I have a degree in this field ',img:'assets/img/img1.jpg'},
    { id : '401', name : 'mali', email : 'mali@gmail.com', password : '123', nicNumber : '985181063V', mobileNumber :'0768851673',address: 'Kuda Uduwa, Horana',about: 'I can feidcorrect all mistakes. I have a degree in this field ',img:'assets/img/img2.jpg'},
    { id : "505", name : "paba", email : "paba@gmail.com", password : "123" , nicNumber : '985181063V', mobileNumber :'0768851673',address: 'Kuda Uduwa, Horana',about: 'I can feidcorrect all mistakes. I have a degree in this field ',img:'assets/img/img3.jpg'},
    { id : "606", name : "saku", email : "saku@gmail.com", password : "123" , nicNumber : '985181063V', mobileNumber :'0768851673',address: 'Kuda Uduwa, Horana',about: 'I can feidcorrect all mistakes. I have a degree in this field ',img:'assets/img/img1.jpg'},
    { id : "707", name : "saku", email : "saku@gmail.com", password : "123" , nicNumber : '985181063V', mobileNumber :'0768851673',address: 'Kuda Uduwa, Horana',about: 'I can feidcorrect all mistakes. I have a degree in this field ',img:'assets/img/img1.jpg'},

  ]

  getAllMechanics(){
    return [...this.mechanics]
  }

  getSelectedMechanic(id:any){
    const mechanic = this.mechanics.find(mechanic=>mechanic.id === id)
    return mechanic;

  }
}
