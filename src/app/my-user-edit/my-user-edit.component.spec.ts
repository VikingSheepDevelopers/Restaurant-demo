import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyUserEditComponent } from './my-user-edit.component';

describe('MyUserEditComponent', () => {
  let component: MyUserEditComponent;
  let fixture: ComponentFixture<MyUserEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyUserEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyUserEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
