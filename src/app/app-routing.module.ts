import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashbordComponent } from './dashbord/dashbord.component';
import { DriverDetailsComponent } from './driver-details/driver-details.component';
import { DriverProfileComponent } from './driver-profile/driver-profile.component';
import { LoginComponent } from './login/login.component';
import { MechanicListComponent } from './mechanic-list/mechanic-list.component';
import { MechanicProfileComponent } from './mechanic-profile/mechanic-profile.component';
import { ServicecenterListComponent } from './servicecenter-list/servicecenter-list.component';
import { ServicecenterProfileComponent } from './servicecenter-profile/servicecenter-profile.component';
import { SpareshopListComponent } from './spareshop-list/spareshop-list.component';
import { SpareshopProfileComponent } from './spareshop-profile/spareshop-profile.component';


const routes: Routes = [
  {path:'dashboard' , component:DashbordComponent},
  {path:'' , component:LoginComponent},
  {path:'driver' , component:DriverDetailsComponent},
  {path:'mechanic' , component:MechanicListComponent},
  {path:'service' , component:ServicecenterListComponent},
  {path:'spare' , component:SpareshopListComponent},
  {path:'driverprofile/:id' , component:DriverProfileComponent},
  {path:'mechenicprofile/:id' , component:MechanicProfileComponent},
  {path:'spareshopprofile/:id' , component:SpareshopProfileComponent},
  {path:'servicecenterprofile/:id' , component:ServicecenterProfileComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
