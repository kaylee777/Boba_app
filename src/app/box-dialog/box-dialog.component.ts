
import { Component, Inject, OnInit, TemplateRef } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AppComponent } from '../app.component';
import { AppService, Boba } from '../app.service';
import { Input } from '@angular/core';

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
  ) {}
  
  ngOnInit(): void {
  console.log(this.data)
  if (this.data !=null ) {
    this.name= this.data.RestaurantName
    this.drink= this.data.Drink
    this.review= this.data.Review

  }
  }

  closeDialog(): void {
    this.dialogRef.close()
  }

  addRow(){
    this.service.create ({
      id: 5,
      RestaurantName: this.name,
      Drink: this.drink,
      Review: this.review
    })
  }
  editRow(Info:Boba){
    Boba.splice(0,2)
  }
  

  setName(event: Event){
    this.name = (event.target as HTMLInputElement).value
  }

  setDrink(event: Event){
    this.drink = (event.target as HTMLInputElement).value
  }
  setReview(event: Event){
    this.review = (event.target as HTMLInputElement).value
  }
}

