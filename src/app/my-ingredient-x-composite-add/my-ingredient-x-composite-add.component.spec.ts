import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyIngredientXCompositeAddComponent } from './my-ingredient-x-composite-add.component';

describe('MyIngredientXCompositeAddComponent', () => {
  let component: MyIngredientXCompositeAddComponent;
  let fixture: ComponentFixture<MyIngredientXCompositeAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyIngredientXCompositeAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyIngredientXCompositeAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
