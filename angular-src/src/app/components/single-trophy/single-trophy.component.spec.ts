import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleTrophyComponent } from './single-trophy.component';

describe('SingleTrophyComponent', () => {
  let component: SingleTrophyComponent;
  let fixture: ComponentFixture<SingleTrophyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleTrophyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleTrophyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
