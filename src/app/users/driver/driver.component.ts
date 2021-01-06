import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { DriverService } from './driver.service';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.css']
})
export class DriverComponent implements OnInit {

  constructor(
  private driverService:DriverService) { }

  onCreateUser(form:NgForm){
    const {email, password} = form.value

    this.driverService.onCreateDriver(email, password)
  }



  ngOnInit(): void {

  }




}
