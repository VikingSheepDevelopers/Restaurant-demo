import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCustomerEditComponent } from './my-customer-edit.component';

describe('MyCustomerEditComponent', () => {
  let component: MyCustomerEditComponent;
  let fixture: ComponentFixture<MyCustomerEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyCustomerEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCustomerEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
