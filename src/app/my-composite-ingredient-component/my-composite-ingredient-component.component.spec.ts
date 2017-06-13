import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCompositeIngredientComponent } from './my-composite-ingredient-component.component';

describe('MyCompositeIngredientComponentComponent', () => {
  let component: MyCompositeIngredientComponent;
  let fixture: ComponentFixture<MyCompositeIngredientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyCompositeIngredientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCompositeIngredientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
