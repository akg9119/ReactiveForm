import { group } from '@angular/animations';
import { Component } from '@angular/core';
import {  FormArray,FormGroup,FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent { myForm: FormGroup;
  step: any = 1;
  isSubmitted: boolean = false;

  constructor(private formBuilder: FormBuilder) {
    this.myForm = this.formBuilder.group({
      userDetails: this.formBuilder.group({
        fname: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required],
      }),
      additionalDetails: this.formBuilder.group({
        mobile: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
        address: ['', Validators.required],
        country: ['', Validators.required],
        gender: ['', Validators.required],
      }),
      feedback: this.formBuilder.group({
        comments: [''],
      }),
    });
  }

  get userDetails() {
    return this.myForm.get('userDetails') as FormGroup;
  }
  get additionalDetails(){
    return this.myForm.get('additionalDetails') as FormGroup;
  }

  btnPrevious() {
    this.step -= 1;
  }
  btnNext() {
    const userDetailsGroup = this.myForm.get('userDetails') as FormGroup;
    const additionalDetailsGroup = this.myForm.get('additionalDetails') as FormGroup;

    if (userDetailsGroup.invalid && this.step === 1) {
      return;
    }
    if( additionalDetailsGroup.invalid && this.step == 2){
      return;
    }
    if(this.step < 3){
      this.step += 1;
    }
  }
  formSubmit() {
    if(this.myForm.valid){
      this.isSubmitted = true;
    }
    console.log(this.myForm.value);
  }
}
