import { Component, OnInit, ViewChild } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from "@angular/router";
import { DialogOverviewExampleDialogComponent } from "../dialog-overview-example-dialog/dialog-overview-example-dialog.component";
import { ServiceCenterService } from '../users/service-center/service-center.service';
import { Servicecenter } from "./servicecenter";
import { ServicecenterListService } from "./servicecenter-list.service";


let serviceCenter:Servicecenter[] = []
@Component({
  selector: 'app-servicecenter-list',
  templateUrl: './servicecenter-list.component.html',
  styleUrls: ['./servicecenter-list.component.css']
})
export class ServicecenterListComponent implements OnInit {
  displayedColumns: string[] = ['NIC', 'Name', 'Email', 'Action'];
  dataSource:any

  constructor(
    public dialog: MatDialog,
    private serviceCenter: ServicecenterListService,
    private router: Router,
    ) {}


    @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

    ngOnInit() {

      this.serviceCenter.fetchServiceCenter()
      this.serviceCenter.serviceCenters$.subscribe((serviceCenters$)=>{
        serviceCenter = serviceCenters$
        this.dataSource = new MatTableDataSource<Servicecenter>(serviceCenter);
      })


  }

  openDialog(id:string) {
    const dialog = this.dialog.open(DialogOverviewExampleDialogComponent);
    dialog.afterClosed().subscribe(data=>{
      if(data){

        this.serviceCenter.deleteServiceCenter(id)

      }
    })
  }

  createServiceCenter(){
    this.router.navigate(['/create-service'])
  }

   doFilter = (value:Event) => {
    this.dataSource.filter = (value.target as HTMLInputElement).value
    .trim().toLocaleLowerCase();
  }


  selectedServiceCenter(id: string) {
    this.router.navigate(["/servicecenterprofile", id]);
  }

  goToDashboard() {
    this.router.navigate(["/dashboard"]);
  }

}
