import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCustomerComponentComponent } from './my-customer-component.component';

describe('MyCustomerComponentComponent', () => {
  let component: MyCustomerComponentComponent;
  let fixture: ComponentFixture<MyCustomerComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyCustomerComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCustomerComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
