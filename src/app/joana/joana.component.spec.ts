import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoanaComponent } from './joana.component';

describe('JoanaComponent', () => {
  let component: JoanaComponent;
  let fixture: ComponentFixture<JoanaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoanaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
