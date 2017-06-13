import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCategoryAddComponent } from './my-category-add.component';

describe('MyCategoryAddComponent', () => {
  let component: MyCategoryAddComponent;
  let fixture: ComponentFixture<MyCategoryAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyCategoryAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCategoryAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
