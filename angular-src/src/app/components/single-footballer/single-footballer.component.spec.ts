import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleFootballerComponent } from './single-footballer.component';

describe('SingleFootballerComponent', () => {
  let component: SingleFootballerComponent;
  let fixture: ComponentFixture<SingleFootballerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleFootballerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleFootballerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
