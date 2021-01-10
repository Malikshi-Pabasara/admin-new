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

        const formData = new FormData()
        formData.append('name', name)
        formData.append('email', email)
        formData.append('password', password)
        formData.append('nic', nic+'V')
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
  onUpdateMechanicData(mechanicData:any){
    const id = mechanicData.id
      this.http.patch('http://localhost:3000/api/mechanics/update/'+id, mechanicData)
      .subscribe((data)=>{
        this.router.navigate(['/mechanic'])

      })

    }
}
