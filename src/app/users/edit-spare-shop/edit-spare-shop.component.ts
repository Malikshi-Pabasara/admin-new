import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Spareshop } from 'src/app/spareshop-list/spareshop';
import { SpareshopListService } from 'src/app/spareshop-list/spareshop-list.service';
import { SpareShopService } from './spare-shop.service';

@Component({
  selector: 'app-edit-spare-shop',
  templateUrl: './edit-spare-shop.component.html',
  styleUrls: ['./edit-spare-shop.component.css'],
})
export class EditSpareShopComponent implements OnInit {
  constructor(
    private sparepartService: SpareShopService,
    private routes: ActivatedRoute,
    private spareshopDetailsService: SpareshopListService
  ) {}

  mode = 'create';
  spareShop!: Spareshop;
  imagePreview = '';

  spareShopForm = new FormGroup({
    name: new FormControl('', { validators: [Validators.required] }),
    email: new FormControl('', {
      validators: [Validators.required, Validators.email],
    }),
    password: new FormControl('', { validators: [Validators.required] }),
    mobile: new FormControl('', {
      validators: [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10),
      ],
    }),
    address: new FormControl('', { validators: [Validators.required] }),
    about: new FormControl('', { validators: [Validators.required] }),
    openTime: new FormControl('', { validators: [Validators.required] }),
    closeTime: new FormControl('', { validators: [Validators.required] }),
    image: new FormControl('',),
  });

  ngOnInit(): void {
    this.routes.paramMap.subscribe((params: ParamMap) => {
      if (params.has('id')) {
        const id = params.get('id');
        this.mode = 'update';
        this.spareshopDetailsService.onSelectShop(id).subscribe((service$:any) => {
          this.spareShop = service$['spareshop'];
          console.log(service$);
          
          this.spareShopForm.patchValue({
            image: this.spareShop.image,
          });
        });
      }
    });
  }

  onSubmitDriverData() {
    if (this.mode == 'create') {
      if (this.spareShopForm.invalid) {

        return;
      }
      this.sparepartService.onSubmitSpareshopData(this.spareShopForm.value);
    } else {
      const updatedData = {
        ...this.spareShopForm.value,
        id: this.spareShop._id,
      };
      this.sparepartService.onUpdateSpareshopData(updatedData);
    }
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
