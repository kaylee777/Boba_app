
import { Component, Inject, OnInit, TemplateRef } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AppComponent } from '../app.component';
import { AppService, Boba } from '../app.service';
import { Input } from '@angular/core';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-box-dialog',
  templateUrl: './box-dialog.component.html',
  styleUrls: ['./box-dialog.component.css']
})
export default class BoxDialogComponent implements OnInit {
  name: string = ""
  drink: string = ""
  review: string = ""

  constructor(
    private dialogRef: MatDialogRef<BoxDialogComponent>,
    private service: AppService,
    @Inject(MAT_DIALOG_DATA) public data?: Boba
  ) { }

  ngOnInit(): void {
    console.log(this.data)
    if (this.data != null) {
      this.name = this.data.RestaurantName
      this.drink = this.data.Drink
      this.review = this.data.Review
    }
  }

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

