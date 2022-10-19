import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoxDialogComponent } from './box-dialog.component';
import { AppComponent } from '../app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { AppService } from '../app.service';

@NgModule({
  declarations: [BoxDialogComponent],
  providers: [AppService],
  imports: [CommonModule, BrowserModule, FormsModule, MatDialogModule],
})
export class BoxDialogModule {}
