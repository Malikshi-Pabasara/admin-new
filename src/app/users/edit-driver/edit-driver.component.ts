import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Driver } from 'src/app/driver-details/driver';
import { DriverDetailsService } from 'src/app/driver-details/driver-details.service';
import { DriverService } from './driver.service';

@Component({
  selector: 'app-edit-driver',
  templateUrl: './edit-driver.component.html',
  styleUrls: ['./edit-driver.component.css'],
})
export class EditDriverComponent implements OnInit {
  constructor(
    private driverService: DriverService,
    private routes: ActivatedRoute,
    private driverDetailsService: DriverDetailsService
  ) {}

  mode = 'create';
  driver!: Driver;

  imagePreview = '';

  driverForm = new FormGroup({
    name: new FormControl('', { validators: [Validators.required] }),

    email: new FormControl('', {
      validators: [Validators.required, Validators.email],
    }),

    password: new FormControl('', {
      validators: [Validators.required, Validators.minLength(6)],
    }),

    nic: new FormControl('', {
      validators: [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10),
      ],
    }),

    mobile: new FormControl('', {
      validators: [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10),
      ],
    }),
    vehicleNumber: new FormControl('', { validators: [Validators.required] }),
    vehicleColor: new FormControl('', { validators: [Validators.required] }),
    image: new FormControl(''),
  });

  ngOnInit(): void {
    this.routes.paramMap.subscribe((params: ParamMap) => {
      if (params.has('id')) {
        const id = params.get('id');
        this.mode = 'update';
        this.driverDetailsService
          .onSelectDriver(id)
          .subscribe((driver$: any) => {
            this.driver = driver$['driver'];

            this.driverForm.patchValue({
              image: this.driver.image,
            });
          });
      }
    });
  }

  onSubmitDriverData() {
    if (this.mode == 'create') {
      if (this.driverForm.invalid) {
        console.log('invalid');
        
        return;
      }
      this.driverService.onSubmitDriverData(this.driverForm.value);
    } else {
      const updatedData = { ...this.driverForm.value, id: this.driver._id };
      this.driverService.onUpdateDriverData(updatedData);
    }
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
