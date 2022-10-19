import { Dialog, DialogRef } from '@angular/cdk/dialog';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {
  MatDialog,
  MatDialogModule,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { BrowserModule, By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from '../app-routing.module';
import { Boba } from '../app.service';
import { TableComponent } from '../table/table.component';
import { BoxDialogComponent } from './box-dialog.component';

describe('BoxDialogComponent', () => {
  let component: BoxDialogComponent;
  let fixture: ComponentFixture<BoxDialogComponent>;
  let Boba: { id: any };
  let setName;
  let data: Boba = {
    id: '1',
    RestaurantName: 'Tao Cha',
    Drink: 'Matcha',
    Review: '5/5',
  };
  const dialogRefSpy = jasmine.createSpyObj('MatDialogRef', ['open', 'close']);
  const serviceSpy = jasmine.createSpyObj('AppService', [
    'deleteDataRow',
    'create',
    'onRowEdit',
  ]);
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BoxDialogComponent],
    }).compileComponents();
    component = new BoxDialogComponent(dialogRefSpy, serviceSpy);
  });

  it('should initialize', () => {
    expect(component.name).toEqual('');
  });

  it('should close the dialog when close button is pushed', () => {
    component.closeDialog();
    expect(dialogRefSpy.close).toHaveBeenCalled();
  });
  it('should edit the clicked on row if an ID is passed in', () => {
    component.data = data;
    component.name = 'Tao Cha';
    component.drink = 'Matcha';
    component.review = '5/5';
    component.handleSave();
    expect(serviceSpy.onRowEdit).toHaveBeenCalledOnceWith(data);
  });
  it('should create a new row if no ID is passed in when add button is clicked', () => {
    component.handleSave();
    expect(serviceSpy.create).toHaveBeenCalled();
  });
  it('should set name value in the input', () => {
    component.setName({ target: { value: 'Some Boba Shop' } as any } as any);
    expect(component.name).toContain('Some Boba Shop');
  });
  it('should set drink value in the input', () => {
    component.setDrink({ target: { value: 'Matcha' } as any } as any);
    expect(component.drink).toContain('Matcha');
  });
  it('should set review value in the input', () => {
    component.setReview({ target: { value: '5/5' } as any } as any);
    expect(component.review).toContain('5/5');
  });
});
