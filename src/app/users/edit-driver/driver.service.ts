import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class DriverService {
  constructor(private http: HttpClient, private router: Router) {}

  onSubmitDriverData(driverData: any) {
    const {
      email,
      name,
      nic,
      password,
      vehicleColor,
      vehicleNumber,
      mobile,
      image,
    } = driverData;

    this.http
      .post('http://localhost:3000/api/drivers/signup', {
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
            vehicleColor,
            vehicleNumber,
            mobile,
            userId: id,
          };

          console.log(formData);

          this.http
            .post('http://localhost:3000/api/drivers/add-data', formData)
            .subscribe(
              () => {
                this.router.navigate(['/driver']);
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

  onUpdateDriverData(driverData: any) {
    const id = driverData.id;
    this.http
      .patch('http://localhost:3000/api/drivers/update/' + id, driverData)
      .subscribe((data) => {
        this.router.navigate(['/driver']);
      });
  }
}
