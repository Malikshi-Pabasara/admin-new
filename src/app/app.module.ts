import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'

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
import { ServicecenterProfileComponent } from './servicecenter-profile/servicecenter-profile.component';
import { SpareshopProfileComponent } from './spareshop-profile/spareshop-profile.component';
import { DriverDetailsPipe } from './driver-details/driver-details.pipe';
import { MaterialModule } from './material/material.module';
import { UsersModule } from './users/users.module';
import { AuthComponent } from './auth/auth.component';
import { AuthInterceptor } from './auth/auth.interceptor';
import { ErrorInterceptor } from './auth/error.interceptor';
import { ReportsComponent } from './reports/reports.component';

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
    DriverDetailsPipe,
    AuthComponent,
    ReportsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    HttpClientModule,
    UsersModule
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS, useClass:AuthInterceptor, multi:true
    },
    {
      provide:HTTP_INTERCEPTORS, useClass:ErrorInterceptor, multi:true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
