
import { Component, Inject, OnInit, TemplateRef } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AppComponent } from '../app.component';
import { AppService, Boba } from '../app.service';
import { Input } from '@angular/core';
import { v4 as uuid } from 'uuid';
//building blocks for the application 
@Component({
  selector: 'app-box-dialog',
  templateUrl: './box-dialog.component.html',
  styleUrls: ['./box-dialog.component.css']
})
//allows BDC to be used in other modules in the application.
export class BoxDialogComponent implements OnInit {
  create: any;
  id: string | undefined;
  dialogRefSpy(dialogRefSpy: any) {
  }
  name: string = ""
  drink: string = ""
  review: string = ""
  // used to inject dependencies into the component class, creating a new instance.
  constructor(
    private dialogRef: MatDialogRef<BoxDialogComponent>,
    private service: AppService,
    @Inject(MAT_DIALOG_DATA) public data?: Boba) { }
  // place to put the code that we need to be executed as soon as the class is instantiated.
  //if this data is not null, we want to edit, the current row. 
  ngOnInit(): void {
    console.log(this.data)
    if (this.data != null) {
      this.name = this.data.RestaurantName
      this.drink = this.data.Drink
      this.review = this.data.Review
    }
  }
  //called on HTML to respond to a click to close the dialog.
  closeDialog(): void {
    this.dialogRef.close()
  }

  handleSave() {
    this.closeDialog()
    const info: Boba = {
      id: this.data?.id || uuid(),
      RestaurantName: this.name,
      Drink: this.drink,
      Review: this.review
    }
    if (this.data?.id) {
      return this.service.onRowEdit(info)
    }
    this.service.create(info)
  }
  //used event binding to handle the input by the user
  setName(event: Event) {
    this.name = (event.target as HTMLInputElement).value
  }
  setDrink(event: Event) {
    this.drink = (event.target as HTMLInputElement).value
  }
  setReview(event: Event) {
    this.review = (event.target as HTMLInputElement).value
  }
}

