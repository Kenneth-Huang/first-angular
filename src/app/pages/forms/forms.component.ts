import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IUserForm } from '../../interface/form.interface'
import { emailRegex } from 'src/app/util/regex';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent {
  user: IUserForm = {
    name: '',
    email: '',
  }
  submitForm(form: NgForm): void {
    if (form.valid) {
      console.log('Form:', form.value)
      console.log('User:', this.user.name, this.user.email)
    }
  }
  validateEmail(): boolean {
    return emailRegex.test(this.user.email);
  }
}
