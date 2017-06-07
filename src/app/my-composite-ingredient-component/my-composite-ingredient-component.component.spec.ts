import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCompositeIngredientComponentComponent } from './my-composite-ingredient-component.component';

describe('MyCompositeIngredientComponentComponent', () => {
  let component: MyCompositeIngredientComponentComponent;
  let fixture: ComponentFixture<MyCompositeIngredientComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyCompositeIngredientComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCompositeIngredientComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
