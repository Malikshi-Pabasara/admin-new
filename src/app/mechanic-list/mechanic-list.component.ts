import { Component, OnInit, ViewChild } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from "@angular/router";
import { DialogOverviewExampleDialogComponent } from "../dialog-overview-example-dialog/dialog-overview-example-dialog.component";
import { DriverDetailsService } from '../driver-details/driver-details.service';
import { Mechanic } from "./mechanic";
import { MechanicListService } from "./mechanic-list.service";
import { MechanicService } from '../users/edit-mechanic/mechanic.service';

let mechanics:Mechanic[] = []

@Component({
  selector: 'app-mechanic-list',
  templateUrl: './mechanic-list.component.html',
  styleUrls: ['./mechanic-list.component.css']
})
export class MechanicListComponent implements OnInit {

  displayedColumns: string[] = ['NIC', 'Name', 'Action'];
  dataSource:any

  constructor(
    public dialog: MatDialog,
    private mechanicDetailsService: MechanicListService,
    private router: Router,
    ) {}


    @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

    ngOnInit() {

      this.mechanicDetailsService.fetchMechanic()
      this.mechanicDetailsService.mechanics$.subscribe((mechanics$:any)=>{
        
        mechanics = mechanics$
        this.dataSource = new MatTableDataSource<Mechanic>(mechanics);
      })


  }

  openDialog(id:string) {
    const dialog = this.dialog.open(DialogOverviewExampleDialogComponent);
    dialog.afterClosed().subscribe(data=>{
      if(data){
        this.mechanicDetailsService.deleteMechanic(id)
      }
    })
  }

  createMechanic(){
    this.router.navigate(['/create-mechanic'])
  }

   doFilter = (value:Event) => {
    this.dataSource.filter = (value.target as HTMLInputElement).value
    .trim().toLocaleLowerCase();
  }


  selectedMechanic(id: string) {
    this.router.navigate(["/mechenicprofile", id]);
  }

  goToDashboard() {
    this.router.navigate(["/dashboard"]);
  }
}
