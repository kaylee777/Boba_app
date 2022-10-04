import { Inject, Injectable } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
export class Boba {
  static splice: any;
  constructor(public id: string, public RestaurantName: string, public Drink: string, public Review: string) { }
}
@Injectable({
  providedIn: 'root'
})
export class AppService {
  data: Boba[] = [
    new Boba("1", "Tao Cha", "Matcha Milk tea Latte", "5/5"),
    new Boba("2", "Teapioca", "Brown Sugar Milk tea", "2/5"),
    new Boba("3", "Feng Cha", "Matcha Milk tea Latte", "3/5"),
  ]

  constructor() { }

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