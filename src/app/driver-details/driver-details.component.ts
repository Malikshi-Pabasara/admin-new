import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import {MatDialog} from '@angular/material/dialog';
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { Router } from "@angular/router";
import { DialogOverviewExampleDialogComponent } from "../dialog-overview-example-dialog/dialog-overview-example-dialog.component";
import { Driver } from "./driver";
import { DriverDetailsService } from "./driver-details.service";


let drivers: Driver[] = [];

@Component({
  selector: "app-driver-details",
  templateUrl: "./driver-details.component.html",
  styleUrls: ["./driver-details.component.css"],
})
export class DriverDetailsComponent implements OnInit,AfterViewInit {

  displayedColumns: string[] = ['NIC', 'Name', 'Email', 'Action'];
  dataSource:any

  constructor(
    public dialog: MatDialog,
    private driverDetailsService: DriverDetailsService,
    private router: Router,
    ) {}


    @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

    ngOnInit() {

      this.driverDetailsService.fetchDriver()
      this.driverDetailsService.drivers$.subscribe((drivers$)=>{
        drivers = drivers$
        this.dataSource = new MatTableDataSource<Driver>(drivers);
      })


  }

  openDialog(id:string) {
    const dialog =this.dialog.open(DialogOverviewExampleDialogComponent);

    dialog.afterClosed().subscribe((data)=>{
      if(data){
        this.driverDetailsService.deleteDriver(id)
      }

    })
  }

  createDriver(){
    this.router.navigate(['/create-driver'])
  }

   doFilter = (value:Event) => {
    this.dataSource.filter = (value.target as HTMLInputElement).value
    .trim().toLocaleLowerCase();
  }


  selectedDriver(id: string) {
    this.router.navigate(["/driverprofile", id]);
  }

  goToDashboard() {
    this.router.navigate(["/dashboard"]);
  }
}
