import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewkweetComponent } from './newkweet.component';

describe('NewkweetComponent', () => {
  let component: NewkweetComponent;
  let fixture: ComponentFixture<NewkweetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewkweetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewkweetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
