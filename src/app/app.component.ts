import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AppService, Boba } from './app.service';
import BoxDialogComponent from './box-dialog/box-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  title = 'Boba-App';
  // used to inject dependencies into the component class, creating a new instance.
  constructor(public readonly dialog: MatDialog, public service: AppService) { }
  openDialog(): void {
    this.dialog.open(BoxDialogComponent);
  }
  //calling on service to delete a row
  deleteRow(rowId: string) {
    this.service.deleteDataRow(rowId)
  }
  //opening BDC to edit the row with the injected data
  editRow(boba: Boba) {
    //data being injected into the child component 
    this.dialog.open(BoxDialogComponent, { data: boba })
  }
}