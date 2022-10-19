import { Boba } from '../app.service';
import { BoxDialogComponent } from '../box-dialog/box-dialog.component';
import { TableComponent } from './table.component';

describe('TableComponent', () => {
  let component: TableComponent;
  let BOBA: {
    id: string;
    RestaurantName: string;
    Drink: string;
    Review: string;
  };
  let dialogSpy = jasmine.createSpyObj('MatDialog', ['open']);
  const serviceSpy = jasmine.createSpyObj('AppService', ['deleteDataRow']);

  beforeEach(() => {
    dialogSpy = jasmine.createSpyObj('MatDialog', ['open']);
    component = new TableComponent(dialogSpy, serviceSpy);
    boba: BOBA = {
      id: '0',
      RestaurantName: 'Teapioca',
      Drink: 'Thai Tea',
      Review: '6/5',
    };
  });

  it('should open the dialog', () => {
    component.openDialog();
    expect(dialogSpy.open).toHaveBeenCalledTimes(1);
    expect(dialogSpy.open).toHaveBeenCalledWith(BoxDialogComponent);
  });
  it('should remove indicated row', () => {
    const rowId = '123';
    component.deleteRow(rowId);
    expect(serviceSpy.deleteDataRow).toHaveBeenCalledTimes(1);
    expect(serviceSpy.deleteDataRow).toHaveBeenCalledWith(rowId);
  });
  it('should edit indicated row', () => {
    const Boba = BOBA;
    component.editRow(Boba);
    expect(dialogSpy.open).toHaveBeenCalledWith(BoxDialogComponent, {
      data: Object({
        id: '0',
        RestaurantName: 'Teapioca',
        Drink: 'Thai Tea',
        Review: '6/5',
      }),
    });
  });
});
