import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {
  MatDialog,
  MatDialogModule,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from '../app-routing.module';
import { Boba } from '../app.service';
import { TableComponent } from '../table/table.component';
import { BoxDialogComponent } from './box-dialog.component';

describe('BoxDialogComponent', () => {
  let component: BoxDialogComponent;
  let fixture: ComponentFixture<BoxDialogComponent>;
  let Boba;
  let mockBobaService;
  const data: Boba = {
    id: '1',
    RestaurantName: 'Tao Cha',
    Drink: 'Matcha',
    Review: '5/5',
  };
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatCheckboxModule,
        MatDialogModule,
      ],
      declarations: [BoxDialogComponent, TableComponent],
      providers: [
        {
          // I was expecting this will pass the desired value
          provide: MatDialog,
          MatDialogRef,
          useValue: data,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(BoxDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  mockBobaService = jasmine.createSpyObj(['onRowEdit', 'create']);

  // it('should create a ', () => {
  //   expect(component).toBeTruthy();
  // });
  it('should initialize', () => {
    expect(component.name).toEqual(data.RestaurantName);
  });

  describe('handleSave', () => {
    // it('should call close dialog');

    it('should call onRowEdit if the data has an id', () => {
      // jasmine.createSpy()
      console.log(fixture);
    });
  });
});
