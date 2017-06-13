import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCompositeIngredientAddComponent } from './my-composite-ingredient-add.component';

describe('MyCompositeIngredientAddComponent', () => {
  let component: MyCompositeIngredientAddComponent;
  let fixture: ComponentFixture<MyCompositeIngredientAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyCompositeIngredientAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCompositeIngredientAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
