import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DriverComponent } from './driver/driver.component';
import { MaterialModule } from '../material/material.module';
import {ReactiveFormsModule, FormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http';
import { EditDriverComponent } from './edit-driver/edit-driver.component';
import { MechanicComponent } from './mechanic/mechanic.component';
import { EditMechanicComponent } from './edit-mechanic/edit-mechanic.component';
import { ServiceCenterComponent } from './service-center/service-center.component';
import { EditServiceCenterComponent } from './edit-service-center/edit-service-center.component';
import { SpareShopComponent } from './spare-shop/spare-shop.component';
import { EditSpareShopComponent } from './edit-spare-shop/edit-spare-shop.component'


@NgModule({
  declarations: [DriverComponent, EditDriverComponent, MechanicComponent, EditMechanicComponent, ServiceCenterComponent, EditServiceCenterComponent, SpareShopComponent, EditSpareShopComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ]
})
export class UsersModule { }
