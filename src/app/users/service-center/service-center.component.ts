import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ServiceCenterService } from './service-center.service';

@Component({
  selector: 'app-service-center',
  templateUrl: './service-center.component.html',
  styleUrls: ['./service-center.component.css']
})
export class ServiceCenterComponent implements OnInit {

  constructor(private ServiceCenterService:ServiceCenterService){}

  onCreateUser(form:NgForm){
    const {email, password} = form.value

    this.ServiceCenterService.onCreateServiceCenter(email, password)
  }


  ngOnInit(): void {

  }

}
