import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import BoxDialogComponent from './box-dialog.component';
import { AppComponent } from '../app.component';

@NgModule({
  declarations: [
    BoxDialogComponent
  ],
  imports: [
    CommonModule,
    AppComponent
  ]
})
export class BoxDialogModule {}
