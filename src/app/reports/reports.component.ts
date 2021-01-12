import { Component, OnInit } from '@angular/core';
import { DriverDetailsService } from '../driver-details/driver-details.service';
import { MechanicListService } from '../mechanic-list/mechanic-list.service';
import { ServicecenterListService } from '../servicecenter-list/servicecenter-list.service';
import { SpareshopListService } from '../spareshop-list/spareshop-list.service';
import 'chart.js';
import *as pluginDataLabels from 'chartjs-plugin-datalabels';
import { Label } from 'ng2-charts';
import { ChartOptions, ChartType } from 'chart.js';

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

  public pieChartOptions:ChartOptions = {
    responsive: true,
    legend:{
      position:'top',
    },
    
  };
  
  public pieChartLabels: Label[] =['Drivers', 'Mechanics', 'Sparepart Shops', 'Service Centers'];
  public pieChartType: ChartType ='pie';
  public pieChartColors= [
    {
      backgroundColor: ['#F7464A', '#46BFBD', '#FDB45C', '#949FB1'],
      hoverBackgroundColor: ['#FF5A5E', '#5AD3D1', '#FFC870', '#A8B3C5'],
      borderWidth: 2,
    }
  ];

}
      
  
  

