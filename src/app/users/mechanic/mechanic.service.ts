import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MechanicService {

  constructor(private http: HttpClient, private router:Router) {}

  onCreateMechanic(email: string, password: string) {
    this.http.post('http://localhost:3000/api/mechanics/createmechanic', {
      email,
      password,
    }).subscribe((data)=>{
      console.log(data);
      this.router.navigate(['/mechanic-data'])

    },error=>{
      throw new Error(error.message)

    });
  }

  onSubmitMechanicData(driverData:any){
    const {email,name, nic,
       about, address,
        mobile,image} = driverData

        const formData = new FormData()
        formData.append('name', name)
        formData.append('email', email)
        formData.append('nic', nic)
        formData.append('address', address)
        formData.append('about', about)
        formData.append('mobile', mobile)
        formData.append('image', image)

        this.http.post('http://localhost:3000/api/mechanics/add-data',
        formData).subscribe((data)=>{
          this.router.navigate(['/mechanic'])
        },error=>{
          throw new Error(error.message)
        })
  }
}
