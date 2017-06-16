import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFoodAddComponent } from './my-food-add.component';

describe('MyFoodAddComponent', () => {
  let component: MyFoodAddComponent;
  let fixture: ComponentFixture<MyFoodAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyFoodAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyFoodAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
