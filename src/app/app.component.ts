import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
 

@Component({
selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Boba-App';
  data: Array<any>;

constructor() {
    this.data = [
        { RestaurantName: 'Tao Cha', Drink: 'Matcha Milk tea Latte', Review: '5/5' },
        { RestaurantName: 'Teapioca', Drink: 'Brown Sugar Milk Tea', Review: '2/5' },
        { RestaurantName: 'Feng Cha', Drink: 'Matcha Milk tea Latte', Review: '3/5' },
       
    ];
}



}