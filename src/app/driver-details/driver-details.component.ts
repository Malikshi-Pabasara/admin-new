import { Component, OnInit } from "@angular/core";
import {MatDialog} from '@angular/material/dialog';
import { Router } from "@angular/router";
import { Ng2SearchPipe } from "ng2-search-filter";
import { DialogOverviewExampleDialogComponent } from "../dialog-overview-example-dialog/dialog-overview-example-dialog.component";
import { Driver } from "./driver";
import { DriverDetailsService } from "./driver-details.service";


@Component({
  selector: "app-driver-details",
  templateUrl: "./driver-details.component.html",
  styleUrls: ["./driver-details.component.css"],
})
export class DriverDetailsComponent implements OnInit {
  //title = 'Angular Search Using ng2-search-filter';
  searchText !: string;
  drivers: Driver[] = [];

  constructor(
    public dialog: MatDialog,
    private driverDetailsService: DriverDetailsService,
    private router: Router,
  ) {}

  openDialog() {
    this.dialog.open(DialogOverviewExampleDialogComponent);
  }

  ngOnInit() {
    this.driverDetailsService.getAllDrivers()
    this.driverDetailsService.drivers$.subscribe(drivers$=>{

      this.drivers = drivers$
    })
  }

  selectedDriver(id: string) {
    this.router.navigate(["/driverprofile", id]);
  }

  goToDashboard() {
    this.router.navigate(["/dashboard"]);
  }
}
