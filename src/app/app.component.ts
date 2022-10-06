import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  title = 'Boba-App';
  // used to inject dependencies into the component class, creating a new instance.
  constructor() { }

}