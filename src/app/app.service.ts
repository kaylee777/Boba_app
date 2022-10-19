import { Inject, Injectable } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

export class Boba {
  constructor(public id: string, public RestaurantName: string, public Drink: string, public Review: string) { }
}
//ensures that the compiler will generate the necessary metadata to create the class dependencies when the class is injected.
@Injectable({
  providedIn: 'root'
})
//allows AppService to be used in other modules in the app.
//filler data for application to demo.
export class AppService {
  currentRow(currentRow: any) {
    throw new Error('Method not implemented.');
  }
  data: Boba[] = [
    new Boba("1", "Tao Cha", "Matcha Milk tea Latte", "5/5"),
    new Boba("2", "Teapioca", "Brown Sugar Milk tea", "2/5"),
    new Boba("3", "Feng Cha", "Matcha Milk tea Latte", "3/5"),
  ]
  // used to inject dependencies into the component class, creating a new instance.
  constructor() { }
  //mapping through the existing data and if any item in the existing data matches 
  //the right Id it is overwriting that position in the array with the new data passed through info
  //then it is assigning that new array to data.
  onRowEdit(newRow: Boba) {
    const updatedData = this.data.map((oldRow) => {
      if (newRow.id === oldRow.id) {
        return newRow
      }
        return oldRow
      })
     this.data = updatedData
  }
  deleteDataRow(id: string) { 
    this.data = this.data.filter((currentRow) => currentRow.id !== id);
  }
  create(boba: Boba) {
    this.data.push(boba) 
  }
}
//services are used to share a single piece of code across multiple components