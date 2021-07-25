import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ServiceCenterService {
  constructor(private http: HttpClient, private router: Router) {}

  onSubmitServiceCenterData(serviceCenterData: any) {
    const { email, name, nic, address, openTime, closeTime, password, mobile } =
      serviceCenterData;

    this.http
      .post('http://localhost:3000/api/service-centers/signup', {
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
            mobile,
            userId: id,
            address,
            openTime,
            closeTime,
          };

          this.http
            .post(
              'http://localhost:3000/api/service-centers/add-data',
              formData
            )
            .subscribe(
              () => {
                this.router.navigate(['/service']);
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
  onUpdateServiceCenterData(serviceCenterData: any) {
    const id = serviceCenterData.id;
    this.http
      .patch(
        'http://localhost:3000/api/service-centers/update/' + id,
        serviceCenterData
      )
      .subscribe((data) => {
        this.router.navigate(['/service']);
      });
  }
}
