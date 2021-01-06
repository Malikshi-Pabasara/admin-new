import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Spareshop } from './spareshop';

@Injectable({
  providedIn: 'root'
})
export class SpareshopListService {

  constructor(private http: HttpClient) {}
  spareshops: Spareshop[] = [];
  spareshops$ = new BehaviorSubject<Spareshop[]>([]);

  getAllDrivers() {
    this.http
      .get<Spareshop[]>('http://localhost:3000/api/drivers/alldrivers')
      .subscribe((response) => {
        this.spareshops = response;
        this.spareshops$.next(this.spareshops);
      });
  }

  fetchSpareShop() {
    this.http
      .get<Spareshop[]>('http://localhost:3000/api/sparepart-shops/allsparepartShops')
      .subscribe((data) => {

        this.spareshops = data;
        this.spareshops$.next(this.spareshops);
      });

  }

  deleteSpareshop(id:string){

    const spareshops = this.spareshops.filter(spareshop=> spareshop._id != id)
    this.http.delete('http://localhost:3000/api/sparepart-shops/delete-spareshop/'+id)
    .subscribe(()=>{
      this.spareshops$.next(spareshops)
    })
  }


  getAll() {
    return [...this.spareshops];
  }

  onSelectShop(id: any) {
    const spareshop = this.spareshops.find((spareshop) => spareshop._id
     == id);

    return spareshop;
  }
}
