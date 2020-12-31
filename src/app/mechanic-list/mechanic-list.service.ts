import { Injectable } from '@angular/core';
import { Mechanic } from './mechanic';

@Injectable({
  providedIn: 'root'
})
export class MechanicListService {

  constructor() { }

  mechanics:Mechanic[] = [

    { id : '101', name : 'mali', email : 'mali@gmail.com', password : '123' },
    { id : "202", name : "paba", email : "paba@gmail.com", password : "123" },
    { id : "303", name : "saku", email : "saku@gmail.com", password : "123" },

  ]

  getAllMechanics(){
    return [...this.mechanics]
  }

  getSelectedMechanic(id:string){
    const mechanic = this.mechanics.find(mechanic=>mechanic.id === id)
    return mechanic;

  }
}
