import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lifecycle-hooks-angular';
  isAlive: boolean = true;

  disposeCheckSample() {
    this.isAlive = !this.isAlive;
  }
}
