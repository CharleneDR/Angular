import { Component } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  model: User = new User("", "", "", "");

  constructor() { };

  onSubmit(): void {
    console.log(this.model);
  }
}
