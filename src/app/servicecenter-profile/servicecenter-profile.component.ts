import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Servicecenter } from '../servicecenter-list/servicecenter';
import { ServicecenterListService } from '../servicecenter-list/servicecenter-list.service';

export interface user {
  id: string;
  name: '';
  email: '';
  password: '';
}

@Component({
  selector: 'app-servicecenter-profile',
  templateUrl: './servicecenter-profile.component.html',
  styleUrls: ['./servicecenter-profile.component.css']
})
export class ServicecenterProfileComponent implements OnInit {
  userId!: string;
  servicecenter?: Servicecenter;

  constructor(
    private servicecenterListService: ServicecenterListService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap) => {
      if (paramMap.has('id')) {
        let id = paramMap.get('id');

        this.servicecenterListService.onSelectServiceCenter(id)
        .subscribe(serviceCenter$=>{
          this.servicecenter = serviceCenter$
        })
      }
    });
  }

  servicecenterDetails() {
    this.router.navigate(['/service']);
  }

}
