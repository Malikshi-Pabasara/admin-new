import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import {ReactiveFormsModule, FormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http';
import { EditDriverComponent } from './edit-driver/edit-driver.component';
import { EditMechanicComponent } from './edit-mechanic/edit-mechanic.component';
import { EditServiceCenterComponent } from './edit-service-center/edit-service-center.component';
import { EditSpareShopComponent } from './edit-spare-shop/edit-spare-shop.component';
import { FormInputComponent } from './form-input/form-input.component'


@NgModule({
  declarations: [ EditDriverComponent,
     EditMechanicComponent, EditServiceCenterComponent, EditSpareShopComponent, FormInputComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ]
})
export class UsersModule { }
