import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Mechanic } from 'src/app/mechanic-list/mechanic';
import { MechanicListService } from 'src/app/mechanic-list/mechanic-list.service';
import { MechanicService } from './mechanic.service';

@Component({
  selector: 'app-edit-mechanic',
  templateUrl: './edit-mechanic.component.html',
  styleUrls: ['./edit-mechanic.component.css'],
})
export class EditMechanicComponent implements OnInit {
  constructor(private mechanicService: MechanicService,
    private routes:ActivatedRoute,
    private mechanicDetailsService:MechanicListService,
    ) {}

    mode = 'create'
    mechanic!:Mechanic
  imagePreview = '';

  mechanicForm = new FormGroup({
    name: new FormControl('', { validators: [Validators.required] }),

    email: new FormControl('', { validators: [Validators.required, Validators.email] }),

    password: new FormControl('', { validators:
       [Validators.required] }),
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
    address: new FormControl('', { validators: [Validators.required] }),
    about: new FormControl('', { validators: [Validators.required] }),
    image: new FormControl('', { validators: [Validators.required] }),
  });

  ngOnInit(): void {
    this.routes.paramMap.subscribe((params: ParamMap) => {
      if (params.has('id')) {
        const id = params.get('id');
        this.mode = 'update';
        this.mechanicDetailsService.onSelectMechanic(id).subscribe(service$=>{
          this.mechanic = service$

          this.mechanicForm.patchValue({
            image: this.mechanic.image

          })
        })

      }
    });
  }

  onSubmitMechanicData() {

    if(this.mode == 'create'){
      if (this.mechanicForm.invalid) {
        console.log('invalid');

        return;
      }
      this.mechanicService.onSubmitMechanicData(this.mechanicForm.value);

    }else{
      console.log('update');
      const updatedData = {...this.mechanicForm.value, id:this.mechanic._id}
      this.mechanicService.onUpdateMechanicData(updatedData);

    }

  }

  onImageChange(event: Event) {
    const file = (event.target as HTMLInputElement).files?.item(0);
    this.mechanicForm.patchValue({
      image: file,
    });

    this.mechanicForm.get('image')?.updateValueAndValidity();

    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string;
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  }
}
