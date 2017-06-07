import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCategoryComponent } from './my-category.component';

describe('MyCategoryComponent', () => {
  let component: MyCategoryComponent;
  let fixture: ComponentFixture<MyCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
