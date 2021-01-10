import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class DriverService {
  constructor(private http: HttpClient, private router:Router) {}

  onSubmitDriverData(driverData:any){
    const {email,name, nic,password,
       vehicleColor, vehicleNumber,
        mobile,image} = driverData

        const formData = new FormData()
        formData.append('name', name)
        formData.append('password', password)
        formData.append('email', email)
        formData.append('nic', nic+'V')
        formData.append('vehicleColor', vehicleColor)
        formData.append('vehicleNumber', vehicleNumber)
        formData.append('mobile', mobile)
        formData.append('image', image)

        this.http.post('http://localhost:3000/api/drivers/add-data',
        formData).subscribe(()=>{
          this.router.navigate(['/driver'])
        },error=>{
          throw new Error(error.message)
        })
  }

  onUpdateDriverData(driverData:any){
    const id = driverData.id
      this.http.patch('http://localhost:3000/api/drivers/update/'+id, driverData)
      .subscribe((data)=>{
        this.router.navigate(['/driver'])

      })

    }
  }


