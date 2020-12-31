import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { DriverDetailsComponent } from './driver-details/driver-details.component';
import { DialogOverviewExampleDialogComponent } from './dialog-overview-example-dialog/dialog-overview-example-dialog.component';


//material
import { CommonModule } from '@angular/common';
import { MatMenuItem } from '@angular/material/menu';
import { MatSliderModule } from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MechanicListComponent } from './mechanic-list/mechanic-list.component';
import { SpareshopListComponent } from './spareshop-list/spareshop-list.component';
import { ServicecenterListComponent } from './servicecenter-list/servicecenter-list.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { DriverProfileComponent } from './driver-profile/driver-profile.component';
import { MechanicProfileComponent } from './mechanic-profile/mechanic-profile.component';
import { ServicecenterProfileComponent } from './servicecenter-profile/servicecenter-profile.component';
import { SpareshopProfileComponent } from './spareshop-profile/spareshop-profile.component';


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
    SpareshopProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatGridListModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatFormFieldModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
