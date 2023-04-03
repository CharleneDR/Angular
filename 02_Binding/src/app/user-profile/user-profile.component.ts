import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent {
  user = {
    name: 'Doe',
    firstName: 'John',
    age: 25,
    quote: '',
    photo: 'https://randomuser.me/api/portraits/lego/6.jpg'
  };

  displayAge() {
    let age = document.getElementById('age');
    if (age) {
      if (getComputedStyle(age).display != "none") {
        age.style.display = "none";
      } else {
        age.style.display = "block";
      }
    }
  }
}
