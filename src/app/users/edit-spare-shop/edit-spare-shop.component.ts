import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ServiceCenterService } from '../service-center/service-center.service';
import { SpareShopService } from '../spare-shop/spare-shop.service';

@Component({
  selector: 'app-edit-spare-shop',
  templateUrl: './edit-spare-shop.component.html',
  styleUrls: ['./edit-spare-shop.component.css']
})
export class EditSpareShopComponent implements OnInit {

  constructor(private sparepartService:SpareShopService) {}
  imagePreview = '';

  spareShopForm = new FormGroup({
    name: new FormControl(),
    email: new FormControl(),
    mobile: new FormControl(),
    address: new FormControl(),
    about: new FormControl(),
    openTime: new FormControl(),
    closeTime: new FormControl(),
    image: new FormControl(),
  });

  ngOnInit(): void {}

  onSubmitDriverData() {
    this.sparepartService.onSubmitSpareshopData(this.spareShopForm.value)

  }

  onImageChange(event: Event) {
    const file = (event.target as HTMLInputElement).files?.item(0);
    this.spareShopForm.patchValue({
      image: file,
    });

    this.spareShopForm.get('image')?.updateValueAndValidity();

    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string;
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  }



}
