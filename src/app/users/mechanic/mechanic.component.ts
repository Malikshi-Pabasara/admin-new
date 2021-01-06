import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MechanicService } from './mechanic.service';

@Component({
  selector: 'app-mechanic',
  templateUrl: './mechanic.component.html',
  styleUrls: ['./mechanic.component.css']
})
export class MechanicComponent implements OnInit {

  constructor(
    private mechanicService:MechanicService) { }

    onCreateUser(form:NgForm){
      const {email, password} = form.value

      this.mechanicService.onCreateMechanic(email, password)
    }


    ngOnInit(): void {

    }


}
