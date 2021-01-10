import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.css']
})
export class FormInputComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() label:string = ''
  @Input() controler:any
  @Input() hello:any
  @Input() value:any

}
