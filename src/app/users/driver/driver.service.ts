import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Driver } from 'src/app/driver-details/driver';

@Injectable({
  providedIn: 'root',
})
export class DriverService {
  constructor(private http: HttpClient, private router:Router) {}



  onCreateDriver(email: string, password: string) {
    this.http.post('http://localhost:3000/api/drivers/createdriver', {
      email,
      password,
    }).subscribe((data)=>{
      console.log(data);
      this.router.navigate(['/driver-data'])

    },error=>{
      throw new Error(error.message)

    });
  }

  onSubmitDriverData(driverData:any){
    const {email,name, nic,
       vehicleColor, vehicleNumber,
        mobile,image} = driverData

        const formData = new FormData()
        formData.append('name', name)
        formData.append('email', email)
        formData.append('nic', nic)
        formData.append('vehicleColor', vehicleColor)
        formData.append('vehicleNumber', vehicleNumber)
        formData.append('mobile', mobile)
        formData.append('image', image)

        this.http.post('http://localhost:3000/api/drivers/add-data',
        formData).subscribe((data)=>{
          this.router.navigate(['/driver'])
        },error=>{
          throw new Error(error.message)
        })
  }
}
