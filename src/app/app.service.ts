import { Inject, Injectable } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

export class Boba {
  static splice: any;
  constructor(public id: string, public RestaurantName: string, public Drink: string, public Review: string) { }
}
//ensures that the compiler will generate the necessary metadata to create the class's dependencies when the class is injected.
@Injectable({
  providedIn: 'root'
})
//allows AppService to be used in other modules in the app.
//filler data for application to demo.
export class AppService {
  data: Boba[] = [
    new Boba("1", "Tao Cha", "Matcha Milk tea Latte", "5/5"),
    new Boba("2", "Teapioca", "Brown Sugar Milk tea", "2/5"),
    new Boba("3", "Feng Cha", "Matcha Milk tea Latte", "3/5"),
  ]
  // used to inject dependencies into the component class, creating a new instance.
  constructor() { }
  //new instance "updatedData", mapping through each element in the array
  //passing in a new instance of Boba called bobaItem
  //if the id of info matches the id of bobaItem, it will return the data thats already been passed. 
  //otherwise it will return new instance of data called bobaItem
  onRowEdit(info: Boba) {
    const updatedData = this.data.map((bobaItem) => {
      if (info.id === bobaItem.id) {
        return info
      }
      return bobaItem
    })
    this.data = updatedData
  }
  deleteDataRow(id: string) {
    this.data = this.data.filter((bobaItem) => bobaItem.id !== id);
  }
  create(boba: Boba) {
    this.data.push(boba)
  }
}
//services are used to share a single piece of code across multiple components