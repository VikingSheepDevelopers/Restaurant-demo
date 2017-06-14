import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFoodComponentComponent } from './my-food-component.component';

describe('MyFoodComponentComponent', () => {
  let component: MyFoodComponentComponent;
  let fixture: ComponentFixture<MyFoodComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyFoodComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyFoodComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
