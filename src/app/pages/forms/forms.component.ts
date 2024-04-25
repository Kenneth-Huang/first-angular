import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserForm } from '../../interface/form'
import { emailRegex } from 'src/app/util/regex';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent {
  user: UserForm = {
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
