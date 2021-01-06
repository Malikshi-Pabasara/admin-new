import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SpareShopService } from './spare-shop.service';

@Component({
  selector: 'app-spare-shop',
  templateUrl: './spare-shop.component.html',
  styleUrls: ['./spare-shop.component.css']
})
export class SpareShopComponent implements OnInit {

  constructor(private spareshopService:SpareShopService){}

  onCreateUser(form:NgForm){
    const {email, password} = form.value

    this.spareshopService.onCreateSpareShop(email, password)
  }


  ngOnInit(): void {

  }

}
