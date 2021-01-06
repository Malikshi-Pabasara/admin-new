import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MechanicService } from '../mechanic/mechanic.service';

@Component({
  selector: 'app-edit-mechanic',
  templateUrl: './edit-mechanic.component.html',
  styleUrls: ['./edit-mechanic.component.css']
})
export class EditMechanicComponent implements OnInit {

  constructor(private mechanicService:MechanicService) {}
  imagePreview = '';

  mechanicForm = new FormGroup({
    name: new FormControl(),
    email: new FormControl(),
    nic: new FormControl(),
    mobile: new FormControl(),
    address: new FormControl(),
    about: new FormControl(),
    image: new FormControl(),
  });

  ngOnInit(): void {}

  onSubmitMechanicData() {
    this.mechanicService.onSubmitMechanicData(this.mechanicForm.value)

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
