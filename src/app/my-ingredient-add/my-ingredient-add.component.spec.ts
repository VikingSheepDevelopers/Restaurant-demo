import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyIngredientAddComponent } from './my-ingredient-add.component';

describe('MyIngredientAddComponent', () => {
  let component: MyIngredientAddComponent;
  let fixture: ComponentFixture<MyIngredientAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyIngredientAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyIngredientAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
