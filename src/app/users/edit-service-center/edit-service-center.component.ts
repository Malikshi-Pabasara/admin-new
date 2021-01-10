import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Servicecenter } from 'src/app/servicecenter-list/servicecenter';
import { ServicecenterListService } from 'src/app/servicecenter-list/servicecenter-list.service';
import { ServiceCenterService } from './service-center.service';

@Component({
  selector: 'app-edit-service-center',
  templateUrl: './edit-service-center.component.html',
  styleUrls: ['./edit-service-center.component.css'],
})
export class EditServiceCenterComponent implements OnInit {
  constructor(private serviceCenterService: ServiceCenterService,
    private routes:ActivatedRoute,
    private ServiceCenterDetailsService:ServicecenterListService,
    ) {}
    mode = 'create'
  imagePreview = '';
  serviceCenter!:Servicecenter

  serviceCenterForm = new FormGroup({
    name: new FormControl('', { validators: [Validators.required] }),
    email: new FormControl('', { validators: [Validators.required, Validators.email] }),
    password: new FormControl('', { validators: [Validators.required] }),

    mobile: new FormControl('', {
      validators: [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10),
      ],
    }),
    address: new FormControl('', { validators: [Validators.required] }),
    openTime: new FormControl('', { validators: [Validators.required] }),
    closeTime: new FormControl('', { validators: [Validators.required] }),
    image: new FormControl('', { validators: [Validators.required] }),
  });

  ngOnInit(): void {
    this.routes.paramMap.subscribe((params: ParamMap) => {
      if (params.has('id')) {
        const id = params.get('id');
        this.mode = 'update';
        this.ServiceCenterDetailsService.onSelectServiceCenter(id)
        .subscribe(service$=>{
          this.serviceCenter = service$

          this.serviceCenterForm.patchValue({
            image: this.serviceCenter.image

          })
        })

      }
    });
  }

  onSubmitServiceCenter() {
    if(this.mode == 'create'){
      if (this.serviceCenterForm.invalid) {
        console.log('invalid');

        return;
      }
      this.serviceCenterService.onSubmitServiceCenterData(this.serviceCenterForm.value);

    }else{
      console.log('update');
      const updatedData = {...this.serviceCenterForm.value, id:this.serviceCenter._id}
      this.serviceCenterService.onUpdateServiceCenterData(updatedData);

    }
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
