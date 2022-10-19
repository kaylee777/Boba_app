import { TestBed } from '@angular/core/testing';

import { AppService, Boba } from './app.service';

describe('AppService', () => {
  let service: AppService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppService);
  });

  it('creates the service', () => {
    expect(service).toBeTruthy();
  });
  it('updates Row', () => {
    service.onRowEdit(new Boba('2', 'Teapioca', 'Brown Sugar Milk tea', '1/5'));
    expect(service.data[1]).toEqual(new Boba('2', 'Teapioca', 'Brown Sugar Milk tea', '1/5'));
    //pass in existing data and then assert that the data has changed
  });
  it('deletes selected row', () => {
    service.deleteDataRow("3")
    expect(service.data[2]).toBeFalsy();
  });
  it('creates a new row ', () => {
    service.create(new Boba("3", "Feng Cha", "Matcha Milk tea Latte", "3/5"))
    expect(service.create).toHaveBeenCalled()
  })
  
});
