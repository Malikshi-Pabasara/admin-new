import { Injectable } from '@angular/core';
import { Spareshop } from './spareshop';

@Injectable({
  providedIn: 'root'
})
export class SpareshopListService {

  constructor() { }

  spareshops:Spareshop[] = [

    { id : '1101', name : 'mali', email : 'mali@gmail.com', password : '123' ,mobileNumber:'0768851673',address:'Kuda Uduwa',about:'we help you',openTime:'8am',closeTime:'8pm',img:'assets/img/img4.jpg'},
    { id : "2202", name : "paba", email : "paba@gmail.com", password : "123",mobileNumber:'0768851673',address:'Kuda Uduwa',about:'we help you',openTime:'8am',closeTime:'8pm' ,img:'assets/img/img3.jpg'},
    { id : "3303", name : "saku", email : "saku@gmail.com", password : "123",mobileNumber:'0768851673',address:'Kuda Uduwa',about:'we help you',openTime:'8am',closeTime:'8pm',img:'assets/img/img2.jpg'},
    { id : '4101', name : 'mali', email : 'mali@gmail.com', password : '123' ,mobileNumber:'0768851673',address:'Kuda Uduwa',about:'we help you',openTime:'8am',closeTime:'8pm',img:'assets/img/img4.jpg'},
    { id : "5202", name : "paba", email : "paba@gmail.com", password : "123",mobileNumber:'0768851673',address:'Kuda Uduwa',about:'we help you',openTime:'8am',closeTime:'8pm' ,img:'assets/img/img3.jpg'},
    { id : "6303", name : "saku", email : "saku@gmail.com", password : "123",mobileNumber:'0768851673',address:'Kuda Uduwa',about:'we help you',openTime:'8am',closeTime:'8pm',img:'assets/img/img2.jpg'},
    { id : "7303", name : "saku", email : "saku@gmail.com", password : "123",mobileNumber:'0768851673',address:'Kuda Uduwa',about:'we help you',openTime:'8am',closeTime:'8pm',img:'assets/img/img2.jpg'},

  ]

  getAllSpareshops(){
    return [...this.spareshops]
  }

  getSelectedSpareshop(id:any){
    const spareshop = this.spareshops.find(spareshop=>spareshop.id === id)
    return spareshop;

  }
}
