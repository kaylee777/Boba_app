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

  constructor(public readonly dialog: MatDialog, public service: AppService) { }
  openDialog(): void {
    this.dialog.open(BoxDialogComponent);
  }
  deleteRow(rowId: string) {
    this.service.deleteDataRow(rowId)
  }

  editRow(boba: Boba) {
    this.dialog.open(BoxDialogComponent, { data: boba })
  }
}