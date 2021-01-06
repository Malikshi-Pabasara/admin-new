import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DriverService } from '../driver/driver.service';

@Component({
  selector: 'app-edit-driver',
  templateUrl: './edit-driver.component.html',
  styleUrls: ['./edit-driver.component.css'],
})
export class EditDriverComponent implements OnInit {
  constructor(private driverService:DriverService) {}
  imagePreview = '';

  driverForm = new FormGroup({
    name: new FormControl(),
    email: new FormControl(),
    nic: new FormControl(),
    mobile: new FormControl(),
    vehicleNumber: new FormControl(),
    vehicleColor: new FormControl(),
    image: new FormControl(),
  });

  ngOnInit(): void {}

  onSubmitDriverData() {
    this.driverService.onSubmitDriverData(this.driverForm.value)

  }

  onImageChange(event: Event) {
    const file = (event.target as HTMLInputElement).files?.item(0);
    this.driverForm.patchValue({
      image: file,
    });

    this.driverForm.get('image')?.updateValueAndValidity();

    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string;
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  }
}
