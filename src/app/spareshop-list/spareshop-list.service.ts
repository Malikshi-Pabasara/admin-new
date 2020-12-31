import { Injectable } from '@angular/core';
import { Spareshop } from './spareshop';

@Injectable({
  providedIn: 'root'
})
export class SpareshopListService {

  constructor() { }

  spareshops:Spareshop[] = [

    { id : '1101', name : 'mali', email : 'mali@gmail.com', password : '123' },
    { id : "2202", name : "paba", email : "paba@gmail.com", password : "123" },
    { id : "3303", name : "saku", email : "saku@gmail.com", password : "123" },

  ]

  getAllSpareshops(){
    return [...this.spareshops]
  }

  getSelectedSpareshop(id:string){
    const spareshop = this.spareshops.find(spareshop=>spareshop.id === id)
    return spareshop;

  }
}
