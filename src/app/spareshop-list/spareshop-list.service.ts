import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Spareshop } from './spareshop';

@Injectable({
  providedIn: 'root'
})
export class SpareshopListService {

  constructor(private http:HttpClient) { }

  spareshops:Spareshop[] = [

      ]
      spareshops$ = new BehaviorSubject<Spareshop[]>([])



  getAllSpareshops(){
    this.http.get<Spareshop[]>('http://localhost:3000/api/sparepart-shops/allsparepartShops')
    .subscribe(response=>{

      this.spareshops = response
      this.spareshops$.next(this.spareshops)
    })  }

  getSelectedSpareshop(id:any){
    const spareshop = this.spareshops.find(spareshop=>spareshop.id === id)
    return spareshop;

  }
}
