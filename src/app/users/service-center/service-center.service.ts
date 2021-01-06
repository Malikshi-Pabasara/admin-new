
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ServiceCenterService {

  constructor(private http: HttpClient, private router:Router) {}



  onCreateServiceCenter(email: string, password: string) {
    this.http.post('http://localhost:3000/api/service-centers/create-service', {
      email,
      password,
    }).subscribe((data)=>{
      console.log(data);
      this.router.navigate(['/service-data'])

    },error=>{
      throw new Error(error.message)

    });
  }

  onSubmitServiceCenterData(serviceCenterData:any){
    const {email,name, nic,
       address, openTime,closeTime,
        mobile,image} = serviceCenterData

        const formData = new FormData()
        formData.append('name', name)
        formData.append('email', email)
        formData.append('nic', nic)
        formData.append('address', address)
        formData.append('openTime', openTime)
        formData.append('closeTime', closeTime)
        formData.append('mobile', mobile)
        formData.append('image', image)

        this.http.post('http://localhost:3000/api/service-centers/add-data',
        formData).subscribe((data)=>{
          this.router.navigate(['/service'])
        },error=>{
          throw new Error(error.message)
        })
  }
}
