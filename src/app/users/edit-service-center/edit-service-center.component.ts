import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MechanicService } from '../mechanic/mechanic.service';
import { ServiceCenterService } from '../service-center/service-center.service';

@Component({
  selector: 'app-edit-service-center',
  templateUrl: './edit-service-center.component.html',
  styleUrls: ['./edit-service-center.component.css']
})
export class EditServiceCenterComponent implements OnInit {

  constructor(private serviceCenterService:ServiceCenterService) {}
  imagePreview = '';

  serviceCenterForm = new FormGroup({
    name: new FormControl(),
    email: new FormControl(),
    nic: new FormControl(),
    mobile: new FormControl(),
    address: new FormControl(),
    openTime: new FormControl(),
    closeTime: new FormControl(),
    image: new FormControl(),
  });

  ngOnInit(): void {}

  onSubmitServiceCenter() {
    this.serviceCenterService.onSubmitServiceCenterData(this.serviceCenterForm.value)

  }

  onImageChange(event: Event) {
    const file = (event.target as HTMLInputElement).files?.item(0);
    this.serviceCenterForm.patchValue({
      image: file,
    });

    this.serviceCenterForm.get('image')?.updateValueAndValidity();

    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string;
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  }



}
