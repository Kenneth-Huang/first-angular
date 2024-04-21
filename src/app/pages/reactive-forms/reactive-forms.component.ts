import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { emailRegex, phoneNumberRegex } from 'src/app/util/regex';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent {
  userFormGroup: FormGroup;
  trialFormGroup: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.trialFormGroup = this.formBuilder.group({
      test:''
    })
    this.userFormGroup = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required,
        Validators.pattern(emailRegex)
      ]],
      // A group inside a group
      address: this.formBuilder.group({
        street: ['', Validators.required],
        city: ['', Validators.required]
      }),
      //FormBuilder array and control
      phoneNumbers: this.formBuilder.array([
        this.formBuilder.control('', [
          Validators.required,
          Validators.pattern(phoneNumberRegex),
        ])
      ])
    })
  }

  get phoneNumberArray() {
    return this.userFormGroup.get('phoneNumbers') as FormArray;
  }

  removePhoneNumber(i: number) {
    this.phoneNumberArray.removeAt(i);
  }

  addPhoneNumber() {
    this.phoneNumberArray.push(
      this.formBuilder.control('', [
        Validators.required,
        Validators.pattern(phoneNumberRegex),
      ])
    );
  }

  submitForm() {
     if (this.userFormGroup.valid) {
      console.log('Form Values', this.userFormGroup.value)
     }
  }
}
