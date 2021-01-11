import { Component, OnInit } from '@angular/core';
import { DriverDetailsService } from '../driver-details/driver-details.service';
import { MechanicListService } from '../mechanic-list/mechanic-list.service';
import { ServicecenterListService } from '../servicecenter-list/servicecenter-list.service';
import { SpareshopListService } from '../spareshop-list/spareshop-list.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  constructor(private mechanic:MechanicListService,
    private drivers:DriverDetailsService,
    private spare:SpareshopListService,
    private service:ServicecenterListService
    ) { }

  driverCount = 0
  mechanicCount = 0
  serviceCenterCount = 0
  spareShopCount = 0

  ngOnInit(): void {
    // mechanics
    this.mechanic.fetchMechanic()
    this.mechanic.mechanics$.subscribe((mec)=>{
      this.mechanicCount = mec.length
    })

    //drivers
    this.drivers.fetchDriver()
    this.drivers.drivers$.subscribe((dri)=>{
      this.driverCount = dri.length
    })

    //spare
    this.spare.fetchSpareShop()
    this.spare.spareshops$.subscribe(spare=>{
      this.spareShopCount = spare.length
    })

    //service
    this.service.fetchServiceCenter()
    this.service.serviceCenters$.subscribe(ser=>{
      this.serviceCenterCount = ser.length
    })


  }

}
