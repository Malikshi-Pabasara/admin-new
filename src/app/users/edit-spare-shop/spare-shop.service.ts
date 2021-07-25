import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class SpareShopService {
  constructor(private http: HttpClient, private router: Router) {}

  onSubmitSpareshopData(spareData: any) {
    const {
      email,
      name,
      password,
      address,
      about,
      openTime,
      closeTime,
      mobile,
    } = spareData;

    this.http
      .post('http://localhost:3000/api/sparepart-shops/signup', {
        email,
        password,
        userName: name,
      })
      .subscribe(
        (data: any) => {
          console.log(data['userId']);
          let id = data['user']['_id'];
          const formData = {
            userName: name,
            mobile,
            userId: id,
            address,
            about,
            openTime,
            closeTime,
          };

          this.http
            .post(
              'http://localhost:3000/api/sparepart-shops/add-data',
              formData
            )
            .subscribe(
              () => {
                this.router.navigate(['/spare']);
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
    ///
  }

  onUpdateSpareshopData(spareShopData: any) {
    const id = spareShopData.id;
    this.http
      .patch(
        'http://localhost:3000/api/sparepart-shops/update/' + id,
        spareShopData
      )
      .subscribe((data) => {
        this.router.navigate(['/spare']);
      });
  }
}
