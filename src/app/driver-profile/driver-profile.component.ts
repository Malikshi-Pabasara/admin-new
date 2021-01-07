import {  Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Driver } from '../driver-details/driver';
import { DriverDetailsService } from '../driver-details/driver-details.service';

export interface user {
  id: string;
  name: '';
  email: '';
  password: '';
}

@Component({
  selector: 'app-driver-profile',
  templateUrl: './driver-profile.component.html',
  styleUrls: ['./driver-profile.component.css'],
})
export class DriverProfileComponent implements OnInit {
  userId!: string;
  driver?: Driver;

  constructor(
    private driverDetailsService: DriverDetailsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {


    this.route.paramMap.subscribe((paramMap) => {
      if (paramMap.has('id')) {

        let id = paramMap.get('id');
        this.driverDetailsService.onSelectDriver(id).subscribe(driver$=>{
          this.driver = driver$
        })
      }
    });
  }


  driverDetails() {
    this.router.navigate(['/driver']);
  }
}
