import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Mechanic } from './mechanic';

@Injectable({
  providedIn: 'root'
})
export class MechanicListService {

  constructor(private http: HttpClient) {}
  mechanics: Mechanic[] = [];
  mechanics$ = new BehaviorSubject<Mechanic[]>([]);

  getAllMechanic() {
    this.http
      .get<Mechanic[]>('http://localhost:3000/api/drivers/alldrivers')
      .subscribe((response) => {
        this.mechanics = response;
        this.mechanics$.next(this.mechanics);
      });
  }

  fetchMechanic() {
    this.http
      .get<Mechanic[]>('http://localhost:3000/api/mechanics/allmechanics')
      .subscribe((data) => {
        this.mechanics = data;
        this.mechanics$.next(this.mechanics);
      });
  }

  getAll() {
    return [...this.mechanics];
  }

  deleteMechanic(id:string){
    const mechanics = this.mechanics.filter(mechanic=> mechanic._id != id)
    this.http.delete('http://localhost:3000/api/mechanics/deletemechanic/'+id)
    .subscribe(()=>{
      this.mechanics$.next(mechanics)
    })
  }

  onSelectMechanic(id: any) {
    const mechanic = this.mechanics.find((mechanic) => mechanic._id == id);

    return mechanic;
  }

}
