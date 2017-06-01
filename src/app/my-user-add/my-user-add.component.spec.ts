import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyUserAddComponent } from './my-user-add.component';

describe('MyUserAddComponent', () => {
  let component: MyUserAddComponent;
  let fixture: ComponentFixture<MyUserAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyUserAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyUserAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
