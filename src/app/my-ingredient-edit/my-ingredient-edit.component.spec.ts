import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyIngredientEditComponent } from './my-ingredient-edit.component';

describe('MyIngredientEditComponent', () => {
  let component: MyIngredientEditComponent;
  let fixture: ComponentFixture<MyIngredientEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyIngredientEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyIngredientEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
