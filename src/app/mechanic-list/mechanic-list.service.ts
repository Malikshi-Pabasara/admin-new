import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Mechanic } from './mechanic';

@Injectable({
  providedIn: 'root'
})
export class MechanicListService {

  constructor(private http:HttpClient) { }

  mechanics:Mechanic[] = [

  ]

  mechanics$ = new BehaviorSubject<Mechanic[]>([])



  getAllMechanics(){
    this.http.get<Mechanic[]>('http://localhost:3000/api/mechanics/allmechanics')
    .subscribe(response=>{

      this.mechanics = response
      this.mechanics$.next(this.mechanics)
    })
  }

  getSelectedMechanic(id:any){
    const mechanic = this.mechanics.find(mechanic=>mechanic.id === id)
    return mechanic;

  }
}
