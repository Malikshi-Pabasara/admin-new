import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { DriverDetailsComponent } from './driver-details/driver-details.component';
import { DialogOverviewExampleDialogComponent } from './dialog-overview-example-dialog/dialog-overview-example-dialog.component';
import { MechanicListComponent } from './mechanic-list/mechanic-list.component';
import { SpareshopListComponent } from './spareshop-list/spareshop-list.component';
import { ServicecenterListComponent } from './servicecenter-list/servicecenter-list.component';
import { DriverProfileComponent } from './driver-profile/driver-profile.component';
import { MechanicProfileComponent } from './mechanic-profile/mechanic-profile.component';
import { ServicecenterListPipe } from './servicecenter-list/servicecenter-list.pipe';
import { SpareshopListPipe } from './spareshop-list/spareshop-list.pipe';
import { ServicecenterProfileComponent } from './servicecenter-profile/servicecenter-profile.component';
import { SpareshopProfileComponent } from './spareshop-profile/spareshop-profile.component';
import { DriverDetailsPipe } from './driver-details/driver-details.pipe';
import { MechanicListPipe } from './mechanic-list/mechanic-list.pipe';
import { FilterPipe } from './filter.pipe';
import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashbordComponent,
    MechanicListComponent,
    SpareshopListComponent,
    ServicecenterListComponent,
    DriverDetailsComponent,
    DialogOverviewExampleDialogComponent,
    DriverProfileComponent,
    MechanicProfileComponent,
    ServicecenterProfileComponent,
    SpareshopProfileComponent,
    FilterPipe,
    DriverDetailsPipe,
    MechanicListPipe,
    ServicecenterListPipe,
    SpareshopListPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
