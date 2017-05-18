import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCustomerAddComponent } from './my-customer-add.component';

describe('MyCustomerAddComponent', () => {
  let component: MyCustomerAddComponent;
  let fixture: ComponentFixture<MyCustomerAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyCustomerAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCustomerAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
