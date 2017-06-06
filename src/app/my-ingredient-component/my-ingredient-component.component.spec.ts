import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyIngredientComponentComponent } from './my-ingredient-component.component';

describe('MyIngredientComponentComponent', () => {
  let component: MyIngredientComponentComponent;
  let fixture: ComponentFixture<MyIngredientComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyIngredientComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyIngredientComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
