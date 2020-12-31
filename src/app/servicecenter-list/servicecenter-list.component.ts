import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { Router } from "@angular/router";
import { Ng2SearchPipe } from "ng2-search-filter";
import { DialogOverviewExampleDialogComponent } from "../dialog-overview-example-dialog/dialog-overview-example-dialog.component";
import { Servicecenter } from "./servicecenter";
import { ServicecenterListService } from "./servicecenter-list.service";

@Component({
  selector: 'app-servicecenter-list',
  templateUrl: './servicecenter-list.component.html',
  styleUrls: ['./servicecenter-list.component.css']
})
export class ServicecenterListComponent implements OnInit {
  title = "Angular Search Using ng2-search-filter";
  // searchText:string;
  servicecenters: Servicecenter[] = [];
 
   constructor(
     public dialog: MatDialog,
     private servicecenterListService: ServicecenterListService,
     private router: Router
   ) {}
 
   openDialog() {
     this.dialog.open(DialogOverviewExampleDialogComponent);
   }
 
   ngOnInit() {
     this.servicecenters = this.servicecenterListService.getAllServicecenters();
   }
 
   selectedServicecenter(id: String) {
     this.router.navigate(["/servicecenterprofile", id]);
   }
 
   goToDashboard() {
     this.router.navigate(["/dashboard"]);
   }

}
