import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { Router } from "@angular/router";
import { Ng2SearchPipe } from "ng2-search-filter";
import { DialogOverviewExampleDialogComponent } from "../dialog-overview-example-dialog/dialog-overview-example-dialog.component";
import { Mechanic } from "./mechanic";
import { MechanicListService } from "./mechanic-list.service";

@Component({
  selector: 'app-mechanic-list',
  templateUrl: './mechanic-list.component.html',
  styleUrls: ['./mechanic-list.component.css']
})
export class MechanicListComponent implements OnInit {
  title = "Angular Search Using ng2-search-filter";
  // searchText:string;
  mechanics: Mechanic[] = [];
 
   constructor(
     public dialog: MatDialog,
     private mechanicListService: MechanicListService,
     private router: Router
   ) {}
 
   openDialog() {
     this.dialog.open(DialogOverviewExampleDialogComponent);
   }
 
   ngOnInit() {
     this.mechanics = this.mechanicListService.getAllMechanics();
   }
 
   selectedMechanic(id: String) {
     this.router.navigate(["/mechenicprofile", id]);
   }
 
   goToDashboard() {
     this.router.navigate(["/dashboard"]);
   }
}
