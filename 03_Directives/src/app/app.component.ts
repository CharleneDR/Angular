import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Bonjour !';

  isAdmin: boolean = true;

  beAdmin() {
    if (this.isAdmin == true) {
      this.isAdmin = false
    } else {
      this.isAdmin = true
    }
  }
}
