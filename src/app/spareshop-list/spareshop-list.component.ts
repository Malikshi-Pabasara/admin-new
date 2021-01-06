import { Component, OnInit, ViewChild } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from "@angular/router";
import { DialogOverviewExampleDialogComponent } from "../dialog-overview-example-dialog/dialog-overview-example-dialog.component";
import { Driver } from '../driver-details/driver';
import { Spareshop } from "./spareshop";
import { SpareshopListService } from "./spareshop-list.service";

let spareshops:Spareshop[] = []
@Component({
  selector: 'app-spareshop-list',
  templateUrl: './spareshop-list.component.html',
  styleUrls: ['./spareshop-list.component.css']
})
export class SpareshopListComponent implements OnInit {
  displayedColumns: string[] = ['MOBILE', 'Name', 'Email', 'Action'];
  dataSource:any

  constructor(
    public dialog: MatDialog,
    private sparepartService: SpareshopListService,
    private router: Router,
    ) {}


    @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

    ngOnInit() {

      this.sparepartService.fetchSpareShop()
      this.sparepartService.spareshops$.subscribe((spareshops$)=>{
        spareshops = spareshops$
        this.dataSource = new MatTableDataSource<Driver>(spareshops);
      })


  }

  openDialog(id:string) {
    const dialog = this.dialog.open(DialogOverviewExampleDialogComponent);
    dialog.afterClosed().subscribe(data=>{
      if(data){
        this.sparepartService.deleteSpareshop(id)
      }
    })
  }

  createSpareshop(){
    this.router.navigate(['/create-spare'])
  }

   doFilter = (value:Event) => {
    this.dataSource.filter = (value.target as HTMLInputElement).value
    .trim().toLocaleLowerCase();
  }


  selectedSparepart(id: string) {
    this.router.navigate(["/spareshopprofile", id]);
  }

  goToDashboard() {
    this.router.navigate(["/dashboard"]);
  }

}
