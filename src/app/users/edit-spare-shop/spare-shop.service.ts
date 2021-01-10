import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SpareShopService {

  constructor(private http: HttpClient, private router:Router) {}


  onSubmitSpareshopData(spareData:any){
    const {email,name,password,
       address, about,openTime, closeTime,
        mobile,image} = spareData

        const formData = new FormData()
        formData.append('name', name)
        formData.append('email', email)
        formData.append('password', password)
        formData.append('mobile', mobile)
        formData.append('address', address)
        formData.append('about', about)
        formData.append('openTime', openTime)
        formData.append('closeTime', closeTime)
        formData.append('image', image)

        this.http.post('http://localhost:3000/api/sparepart-shops/add-data',
        formData).subscribe((data)=>{
          this.router.navigate(['/spare'])
        },error=>{
          throw new Error(error.message)
        })
  }

  onUpdateSpareshopData(spareShopData:any){
    const id = spareShopData.id
      this.http.patch('http://localhost:3000/api/sparepart-shops/update/'+id, spareShopData)
      .subscribe((data)=>{
        this.router.navigate(['/spare'])

      })

    }

}
