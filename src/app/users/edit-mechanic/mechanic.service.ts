import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MechanicService {

  constructor(private http: HttpClient, private router:Router) {}


  onSubmitMechanicData(driverData:any){
    const {email,name, nic,
       about, address,password,
        mobile,image} = driverData

        this.http
      .post('http://localhost:3000/api/mechanics/signup', {
        email,
        password,
        userName: name,
      })
      .subscribe(
        (data: any) => {
          console.log(data['userId']);
          let id = data['userId']['_id'];
          const formData = {
            userName: name,
            nic: nic + 'V',
            mobile,
            userId: id,
          };

          console.log(formData);

          this.http
            .post('http://localhost:3000/api/mechanics/add-data', formData)
            .subscribe(
              () => {
                this.router.navigate(['/mechanic']);
              },
              (error) => {
                throw new Error(error.message);
              }
            );
        },
        (error) => {
          throw new Error(error.message);
        }
      );
  }
  onUpdateMechanicData(mechanicData:any){
    const id = mechanicData.id
      this.http.patch('http://localhost:3000/api/mechanics/update/'+id, mechanicData)
      .subscribe((data)=>{
        this.router.navigate(['/mechanic'])

      })

    }
}
