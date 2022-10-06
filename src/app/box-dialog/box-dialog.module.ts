import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import BoxDialogComponent from './box-dialog.component';
import { AppComponent } from '../app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    BoxDialogComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule
  ]
})
export class BoxDialogModule { }
