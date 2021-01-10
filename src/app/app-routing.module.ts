import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashbordComponent } from './dashbord/dashbord.component';
import { DriverDetailsComponent } from './driver-details/driver-details.component';
import { DriverProfileComponent } from './driver-profile/driver-profile.component';
import { LoginComponent } from './login/login.component';
import { MechanicListComponent } from './mechanic-list/mechanic-list.component';
import { MechanicProfileComponent } from './mechanic-profile/mechanic-profile.component';
import { ReportsComponent } from './reports/reports.component';
import { ServicecenterListComponent } from './servicecenter-list/servicecenter-list.component';
import { ServicecenterProfileComponent } from './servicecenter-profile/servicecenter-profile.component';
import { SpareshopListComponent } from './spareshop-list/spareshop-list.component';
import { SpareshopProfileComponent } from './spareshop-profile/spareshop-profile.component';
import { EditDriverComponent } from './users/edit-driver/edit-driver.component';
import { EditMechanicComponent } from './users/edit-mechanic/edit-mechanic.component';
import { EditServiceCenterComponent } from './users/edit-service-center/edit-service-center.component';
import { EditSpareShopComponent } from './users/edit-spare-shop/edit-spare-shop.component';


const routes: Routes = [
  {path:'' , component:DashbordComponent},
  {path:'login' , component:LoginComponent},

  {path:'reports', component:ReportsComponent},

  {path:'driver' , component:DriverDetailsComponent},
  {path:'create-driver' , component:EditDriverComponent},
  {path:'create-driver/:id' , component:EditDriverComponent},

  {path:'mechanic' , component:MechanicListComponent},
  {path:'create-mechanic/:id' , component:EditMechanicComponent},
  {path:'create-mechanic' , component:EditMechanicComponent},

  {path:'service' , component:ServicecenterListComponent},
  {path:'create-service/:id' , component:EditServiceCenterComponent},
  {path:'create-service' , component:EditServiceCenterComponent},

  {path:'spare' , component:SpareshopListComponent},
  {path:'create-spare/:id' , component:EditSpareShopComponent},
  {path:'create-spare' , component:EditSpareShopComponent},

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
