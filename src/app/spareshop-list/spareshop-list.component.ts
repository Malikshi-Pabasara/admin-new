import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { Router } from "@angular/router";
import { Ng2SearchPipe } from "ng2-search-filter";
import { DialogOverviewExampleDialogComponent } from "../dialog-overview-example-dialog/dialog-overview-example-dialog.component";
import { Spareshop } from "./spareshop";
import { SpareshopListService } from "./spareshop-list.service";

@Component({
  selector: 'app-spareshop-list',
  templateUrl: './spareshop-list.component.html',
  styleUrls: ['./spareshop-list.component.css']
})
export class SpareshopListComponent implements OnInit {
   searchText!:string;
  spareshops: Spareshop[] = [];
 
   constructor(
     public dialog: MatDialog,
     private spareshopListService: SpareshopListService,
     private router: Router
   ) {}
 
   openDialog() {
     this.dialog.open(DialogOverviewExampleDialogComponent);
   }
 
   ngOnInit() {
     this.spareshops = this.spareshopListService.getAllSpareshops();
   }
 
   selectedSpareshop(id: String) {
     this.router.navigate(["/spareshopprofile", id]);
   }
 
   goToDashboard() {
     this.router.navigate(["/dashboard"]);
   }

}
